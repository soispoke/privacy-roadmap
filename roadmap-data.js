/* roadmap-data.js — single source of truth for the Ethereum State Roadmap.
 * Loaded by both state-roadmap.html and state-roadmap-editor.html (keep them together).
 * Regenerate from the editor: Export → "Download roadmap-data.js" (overwrite this file).
 */
(function () {
  const E = "https://eips.ethereum.org/EIPS/eip-";
  const M = "https://ethereum-magicians.org/t/";

  const FORKS = [
    {
      "id": "glamsterdam",
      "name": "Glamsterdam",
      "when": "2026",
      "confirmed": true
    },
    {
      "id": "hegota",
      "name": "Hegotá",
      "when": "’26–’27"
    },
    {
      "id": "i",
      "name": "I-fork",
      "when": "2027+"
    },
    {
      "id": "j",
      "name": "J-fork",
      "when": "later"
    },
    {
      "id": "beyond",
      "name": "Beyond",
      "when": "research"
    },
    {
      "id": "northstar",
      "name": "North Star",
      "when": "goals",
      "sep": true
    },
    {
      "id": "superseded",
      "name": "Superseded",
      "when": "past",
      "sep": true,
      "muted": true
    }
  ];

  const LANES = [
    {
      "id": "A",
      "name": "Curb State Growth",
      "color": "var(--color-laneA)"
    },
    {
      "id": "B",
      "name": "Honest Access Pricing",
      "color": "var(--color-laneB)"
    },
    {
      "id": "C",
      "name": "State Structure",
      "color": "var(--color-laneC)"
    },
    {
      "id": "D",
      "name": "Statelessness",
      "color": "var(--color-laneD)"
    },
    {
      "id": "E",
      "name": "Tiering & Expiry",
      "color": "var(--color-laneE)"
    },
    {
      "id": "F",
      "name": "State-Minimal Value",
      "color": "var(--color-laneF)"
    }
  ];

  const ITEMS = [

    // A — Curb State Growth
    { lane:"A", fork:"glamsterdam", id:"8037", title:"State Creation Cost", link:E+"8037", sum:"CPSB prices every new state byte; targets ~120 GiB/yr growth." },
    { lane:"A", fork:"hegota", id:"7999", title:"Multidimensional Fee Market", link:E+"7999", sum:"One max_fee fungible across resource dimensions (calldata first) under a unified base-fee update." },
    { lane:"A", fork:"i", id:"8058", title:"Bytecode Dedup Discount", link:M+"eip-8058-contract-bytecode-deduplication-discount/25933", kind:"soft", sum:"Redeploying identical bytecode skips the code-deposit cost." },
    { lane:"A", fork:"northstar", id:"Sustainable state growth", title:"Sustainable state growth", link:E+"8037", kind:"northstar", sum:"New state pays its full lifetime cost — growth stays within what nodes can store." },

    // B — Honest Access Pricing
    { lane:"B", fork:"glamsterdam", id:"8038", title:"State-Access Cost Update", link:M+"eip-8038-state-access-gas-cost-update/25693", sum:"Raises cold SLOAD / account / EXTCODE costs for a larger state." },
    { lane:"B", fork:"hegota", id:"7907", title:"Meter Code Size", link:M+"eip-remove-contract-size-limit/23156", kind:"soft", sum:"Gas-meters code above 24KB and lifts the cap to 64KB." },
    { lane:"B", fork:"northstar", id:"Right-priced access", title:"Right-priced access", link:M+"eip-8038-state-access-gas-cost-update/25693", kind:"northstar", sum:"Every state access is priced at its true cost — no under- or over-pricing." },
    { lane:"B", fork:"superseded", id:"8057", title:"Inter-Block Locality", link:M+"eip-8057-block-temporal-locality-gas-discounts/25912", kind:"soft", sum:"Discounts first access by how recently the item was touched." },
    { lane:"B", fork:"superseded", id:"7863", title:"Block-Level Warming", link:M+"eip-7863-block-level-warming/22572", kind:"soft", sum:"Touched state stays warm for the whole block (warm set from the BAL)." },

    // C — State Structure
    { lane:"C", fork:"i", id:"8297", title:"Partitioned Binary Tree", link:M+"eip-8297-partitioned-binary-tree/28776", kind:"headliner", sum:"Splits the tree into zones (accounts, code, storage, nullifiers…)." },
    { lane:"C", fork:"northstar", id:"Provable state", title:"Provable state", link:E+"7864", kind:"northstar", sum:"A post-quantum, ZK-friendly tree — any state fact proven cheaply." },
    { lane:"C", fork:"superseded", id:"7864", title:"Unified Binary Tree", link:E+"7864", kind:"soft", sum:"Replaces the hexary MPT with one zoned binary tree. A multi-fork migration." },
    { lane:"C", fork:"superseded", id:"6800", title:"Verkle Trees", link:E+"6800", kind:"soft", sum:"Prior tree direction (EIP-6800 / 7612) — superseded by binary trees." },

    // D — Statelessness
    { lane:"D", fork:"glamsterdam", id:"7928", title:"Block-Level Access Lists", link:E+"7928", kind:"headliner", sum:"The block declares all state it touches → parallel execution, executionless updates. The keystone." },
    { lane:"D", fork:"hegota", id:"8268", title:"Storage Roots in BAL", link:M+"eip-8268-storage-roots-in-block-access-lists/28585", sum:"Post-block storage roots in the BAL let partial nodes verify the state root." },
    { lane:"D", fork:"i", id:"VOPS", title:"Validity-only partial statefulness", link:M+"eip-8268-storage-roots-in-block-access-lists/28585", sum:"Nodes keep only the state needed to check validity — separating storage from special state (nullifiers, spent bits)." },
    { lane:"D", fork:"beyond", id:"DSN", title:"Decentralized State Network", link:E+"7928", sum:"A peer-to-peer network that collectively serves state and witnesses, so no single node must hold it all." },
    { lane:"D", fork:"northstar", id:"Stateless clients", title:"Stateless clients", link:E+"7928", kind:"northstar", sum:"Validate blocks holding ~no state — witnesses travel with the block." },
    { lane:"D", fork:"superseded", id:"2926", title:"Code Merkleization", link:M+"eip-2926-chunk-based-code-merkleization/4555", kind:"soft", sum:"Chunked code → small witnesses for stateless clients." },

    // E — Tiering & Expiry
    { lane:"E", fork:"i", id:"8289", title:"Multi-Block Warming", link:"https://github.com/ethereum/EIPs/pull/11776", sum:"256-block rolling warm set committed by an SMT root; ~14% gas saved." },
    { lane:"E", fork:"j", id:"8188", title:"Last-Written Block", link:M+"eip8188-state-tiering-by-write-age/28234", sum:"Stamps each account/slot with its last-write block for hot/cold tiering." },
    { lane:"E", fork:"beyond", id:"7736", title:"Leaf-Level Expiry", link:E+"7736", kind:"soft", sum:"Verkle-era expiry of subtrees, reactivated by proof — superseded." },
    { lane:"E", fork:"northstar", id:"Bounded state", title:"Bounded state", link:M+"eip8188-state-tiering-by-write-age/28234", kind:"northstar", sum:"Dormant state ages out so the live set stops growing without bound." },

    // F — State-Minimal Value
    { lane:"F", fork:"hegota", id:"8141", title:"Frame Transaction", link:M+"frame-transaction/27617", kind:"headliner", sum:"Decomposes a tx into frames: validate, pay gas, execute. AA foundation." },
    { lane:"F", fork:"hegota", id:"8266", title:"Expiring Nonces", link:M+"eip-8266-expiring-nonces-for-frame-transactions/28575", sum:"Deadline-based replay protection — adds no permanent state." },
    { lane:"F", fork:"hegota", id:"8250", title:"Keyed Nonces", link:M+"eip-8250-keyed-nonces-for-frame-transactions/28437", sum:"Independent, protocol-managed nonce domains for frame txs." },
    { lane:"F", fork:"j", id:"Native UTXOs", title:"Native UTXOs", link:M+"frame-transaction/27617", sum:"One-shot payments leaving only a spent bit — ~99.8% less permanent state." },
    { lane:"F", fork:"northstar", id:"Footprint-free payments", title:"Footprint-free payments", link:M+"frame-transaction/27617", kind:"northstar", sum:"Send and hold value without ever writing a permanent account or slot." },
  ];

  window.ROADMAP = { E, M, FORKS, LANES, ITEMS };
})();
