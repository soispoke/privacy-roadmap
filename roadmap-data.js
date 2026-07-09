/* roadmap-data.js — single source of truth for the Ethereum Protocol Privacy Roadmap.
 * Loaded by privacy-roadmap.html. Regenerate via the page's Edit mode → Download.
 */
(function () {
  const E = "https://eips.ethereum.org/EIPS/eip-";
  const M = "https://ethereum-magicians.org/t/";

  const FORKS = [
    {
      "id": "q2-26",
      "name": "Q2 2026",
      "when": "Glamsterdam"
    },
    {
      "id": "q3-26",
      "name": "Q3 2026",
      "when": "Glamsterdam"
    },
    {
      "id": "q4-26",
      "name": "Q4 2026",
      "when": "Glamsterdam"
    },
    {
      "id": "q1-27",
      "name": "Q1 2027",
      "when": "Hegotá",
      "milestone": true
    },
    {
      "id": "q2-27",
      "name": "Q2 2027",
      "when": "Hegotá",
      "milestone": true
    },
    {
      "id": "q3-27",
      "name": "Q3 2027",
      "when": "Hegotá",
      "milestone": true
    },
    {
      "id": "q4-27",
      "name": "Q4 2027",
      "when": "I*"
    },
    {
      "id": "q1-28",
      "name": "Q1 2028",
      "when": "I*"
    },
    {
      "id": "q2-28",
      "name": "Q2 2028",
      "when": "I*"
    }
  ];

  const LANES = [
    {
      "id": "trust",
      "name": "Trustlessness",
      "color": "var(--color-laneD)"
    },
    {
      "id": "cr",
      "name": "Censorship Resistance",
      "color": "var(--color-laneA)"
    },
    {
      "id": "tput",
      "name": "Throughput",
      "color": "var(--color-laneB)"
    },
    {
      "id": "crypto",
      "name": "Cryptography",
      "color": "var(--color-laneC)"
    },
    {
      "id": "state",
      "name": "State",
      "color": "var(--color-laneF)"
    },
    {
      "id": "e2e",
      "name": "Integration",
      "color": "var(--color-laneE)"
    }
  ];

  const ITEMS = [

    // trust — Trustlessness
    { lane:"trust", id:"8141", title:"Frame Transactions", link:E+"8141", kind:"headliner", track:{"q3-26":"sfi","q4-26":"sfi","q2-27":"mainnet","q1-27":"sfi","q2-26":"cfi"}, sum:"CFI for Hegotá, Ethrex working on a devnet with 8250/8272." },

    // cr — Censorship Resistance
    { lane:"cr", id:"7805", title:"FOCIL", link:E+"7805", kind:"headliner", track:{"q3-26":"sfi","q4-26":"sfi","q2-27":"mainnet","q1-27":"sfi","q2-26":"sfi"}, sum:"SFI for Hegotá" },
    { lane:"cr", id:"8272", title:"Recent Roots", link:E+"8272", track:{"q4-26":"sfi","q1-27":"sfi","q2-27":"mainnet","q3-26":"pfi","q2-26":"eip"}, sum:"PFI for Hegotá this week; Ethrex working on a devnet" },
    { lane:"cr", id:"effort-41", title:"Bloom filters or accumulators", link:"", track:{"q2-26":"research","q3-26":"research","q4-26":"research","q1-27":"eip","q2-27":"prototype","q3-27":"pfi","q4-27":"sfi","q1-28":"mainnet"}, sum:"Research stage: \n- Bloom filter idea:https://docs.fileverse.io/d/020001fc0012#k=UT7Btd6tyqHgOj47t-TX06F8D6OpcpM_2PKdf7s4tGE\n- Bloom filters vs accumulators: https://docs.fileverse.io/d/020011e70008#k=Ule0OP4_CFIlPaRbqA9o-FmHQAen7MikmcADa8_KF_8" },

    // tput — Throughput
    { lane:"tput", id:"8250", title:"Keyed Nonces", link:M+"eip-8250-keyed-nonces-for-frame-transactions/28437", track:{"q4-26":"sfi","q1-27":"sfi","q2-27":"mainnet","q3-26":"pfi","q2-26":"eip"}, sum:"PFI for Hegotá this week; Ethrex working on a devnet" },
    { lane:"tput", id:"stark-mempool", title:"Recursive STARK Mempool", link:"https://github.com/ethereum/EIPs/pull/11772", kind:"soft", track:{"q4-27":"sfi","q1-28":"mainnet","q2-26":"eip","q3-26":"prototype","q4-26":"prototype","q1-27":"devnet","q2-27":"pfi","q3-27":"sfi"}, sum:"Sharded mempool plus recursive aggregation of post-quantum signatures to cut gossip bandwidth. Needs the recursion-capable proving system and its enshrined verifier, not a chosen ISA or VM: the aggregation is a fixed set of circuits plus the verifier. Not gated on the RISC-V / evm-asm surface." },

    // crypto — Cryptography
    { lane:"crypto", id:"ISA", title:"Frozen claim/interface surface", link:"https://github.com/Verified-zkEVM/evm-asm", kind:"headliner", oq:["Is v1 a statement/circuit surface, leanISA, or another explicit application interface?","Which public-boundary fields are permanent app-facing commitments versus verifier metadata?"], track:{"q2-26":"research","q3-26":"research","q4-26":"eip","q1-27":"prototype"}, sum:"The durable commitment is the app-facing claim or interface surface: relation IDs or program IDs, public input schema, state domains, replay domains, and any exposed instruction semantics. Applications bind long-lived state to this surface. Proof systems, verification keys, recursion circuits, prover implementations, and verifier versions stay below it." },
    { lane:"crypto", id:"zk-leanvm", title:"Add ZK to leanVM", link:"https://github.com/leanEthereum/leanVM", kind:"soft", track:{"q2-26":"research","q3-26":"prototype","q4-26":"prototype"}, sum:"Making leanVM execution provable in zero knowledge. Work in progress." },
    { lane:"crypto", id:"binfields-leanvm", title:"Binary Fields for leanVM", link:"https://github.com/leanEthereum/leanVM", kind:"soft", track:{"q3-26":"research","q4-26":"prototype"}, sum:"Moving leanVM onto binary fields to use more secure hashes while keeping enough performance" },
    { lane:"crypto", id:"leanstark-v1", title:"leanSTARK-v1 verifier", link:"https://github.com/leanEthereum/leanVM", kind:"headliner", laneSpan:true, deps:["ISA"], oq:["Separate leanSTARK (the proving system + verifier) from the leanVM/leanISA VM in name and spec","VM-based or circuit-based enshrined verifier (Binius64 / Plonky3, AI-assisted circuits)?","Which proving system and verifier do we enshrine first?"], track:{"q1-27":"prototype","q2-27":"pfi","q3-27":"sfi","q4-27":"sfi","q1-28":"mainnet"}, sum:"Enshrines the first reviewed verifier for the frozen claim/interface surface. This is leanSTARK-v1, a fork-versioned backend rather than a forever proof-system commitment. Later forks can admit leanSTARK-v2, a circuit-recursion backend, or another verifier adapter if it proves the same app-facing claim or the application opts into a new relation. The leanVM/leanISA VM is an optional developer frontend, not the enshrined object." },

    // state — State
    { lane:"state", id:"VOPS", title:"VOPS and FOCIL eligibility", link:"https://ethresear.ch/t/a-pragmatic-path-towards-validity-only-partial-statelessness-vops/22236", kind:"soft", track:{"q2-26":"eip","q3-26":"pfi","q1-27":"sfi","q4-26":"sfi","q2-27":"mainnet"}, oq:["Can we increase VERIFY gas limits to allow private txns in the public mempool?"], sum:"Validity-only partial statelessness: defining the boundary between the bounded state validators must keep (a few slots per account, nullifiers) and the rest. \n\nDraft; to be proposed as an informational EIP this month." },

    // e2e — Integration
    { lane:"e2e", id:"e2e-proto", title:"End-to-end private tx prototype", link:"", kind:"headliner", deps:["leanstark-v1"], track:{"q3-26":"research","q4-26":"prototype","q1-27":"prototype","q2-27":"devnet","q3-27":"devnet","q4-27":"devnet"}, oq:["Which privacy protocol and wallet drive the first integration (e.g. Railgun via Kohaku)?","Minimal devnet that exercises 8141 + 8250 + 8272 + FOCIL end to end?"], sum:"An end-to-end prototype of a private transaction across the whole stack: wallet, public mempool, privacy protocol (e.g. Railgun), and the L1 protocol, exercising the new EIPs together (8141 frame transactions, 8250 keyed nonces, 8272 recent roots, 7805 FOCIL eligibility, VOPS). Goal: show the pieces compose into a working private send and receive, and surface integration gaps early. Matures from research to a devnet demo as the EIPs land, then through the enshrined verifier path once leanSTARK-v1 is available." },
  ];

  window.ROADMAP = { E, M, FORKS, LANES, ITEMS };
})();
