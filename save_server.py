#!/usr/bin/env python3
"""Tiny static server for the Protocol Privacy roadmap that can also save roadmap-data.js.

GET  — serves the files in this directory (with no-store, so edits to the file
       always show on reload instead of being masked by a cached copy).
POST /save  — body {"file":"roadmap-data.js","content":"..."} overwrites that file
       on disk. Only an allow-listed filename can be written.

Run:  python3 save_server.py   (serves http://127.0.0.1:8137)
"""
import http.server
import json
import os
import socketserver
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = 8137
WRITABLE = {"roadmap-data.js"}


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        # never cache, so a freshly-written roadmap-data.js is what the page loads
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def do_POST(self):
        if urlparse(self.path).path != "/save":
            self.send_error(404, "not found")
            return
        try:
            length = int(self.headers.get("Content-Length", 0))
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            name = os.path.basename(payload.get("file", ""))
            content = payload.get("content", "")
            if name not in WRITABLE:
                self.send_error(400, "file not writable")
                return
            with open(os.path.join(ROOT, name), "w", encoding="utf-8") as fh:
                fh.write(content)
            body = json.dumps({"ok": True, "file": name, "bytes": len(content)}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except Exception as exc:  # noqa: BLE001
            self.send_error(500, f"save failed: {exc}")


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
        print(f"serving {ROOT} on http://127.0.0.1:{PORT} (POST /save enabled)")
        httpd.serve_forever()
