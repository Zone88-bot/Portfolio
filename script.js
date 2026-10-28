/* =========================================================
   Pyae Sone Htun · Portfolio content + behaviour
   ---------------------------------------------------------
   HOW TO EDIT:
   • All your content lives in the lists below (LINKS, PROJECTS,
     LEARNING, CERTIFICATIONS, COMMUNITY).
   • Leave a link as "" and the site shows a dashed yellow
     placeholder. Paste a real URL and it becomes a real button.
   • Write "[ADD: something]" inside any text and it shows as a
     yellow placeholder tag, so you can see what's still missing.
   ========================================================= */

/* ---------- 1. Your links ---------- */
const LINKS = {
  github: "https://github.com/Zone88-bot",
  linkedin: "https://www.linkedin.com/in/pyaesonehtun787945/",
  tryhackme: "https://tryhackme.com/p/zone88",
  cv: "Pyae_Sone_Htun_CV.pdf",   // replace this PDF in the repository when you update your CV
  email: "ptun777@gmail.com"
};

/* ---------- 2. Projects (most important section) ----------
   Each project has the 9 things recruiters look for.
   evidence: leave "" for a placeholder.
   confidential: true adds a note that client details are withheld. */
const PROJECTS = [
  {
    id: "enterprise-network",
    thumb: "images/ni-topology.jpg",
    cardImage: "images/ni-topology-card.jpg",   // faint background on the project card
    type: "University Project",
    status: "Completed",
    category: "Network",
    title: "Multi-Site Enterprise Network: Design & Build (IPv6)",
    summary: "Designed and built a resilient dual-ISP IPv6 network linking a London trading floor to three UK regional offices, with firewalls at every site, a DMZ and OSPFv3 routing.",
    metric: "<strong>4</strong> sites · <strong>8</strong> routers · <strong>13</strong> ping tests, 0% loss",
    tags: ["Cisco Packet Tracer", "IPv6", "OSPFv3", "Cisco ASA", "VLANs", "DMZ"],
    what: "A two-part project for the Network Infrastructure module of my BSc (Hons) Cybersecurity and Networks (Teesside University / MDIS, April 2024). Part 1 is a design proposal for a case-study financial firm, UKF: a second London trading floor for 500 traders, 45 support staff and 15 managers, linked to offices in Birmingham, Manchester and Edinburgh over a resilient WAN. Part 2 builds and tests that design in Cisco Packet Tracer and includes a research report on VPN technologies.",
    why: "Trading networks can't afford downtime. The brief demanded 99.999% availability for the trading floor, trading transactions under 1 ms and a design that would last 5 to 10 years. I wanted to show I could turn strict business requirements into a secure, working network, not just a diagram.",
    objective: "Design a high-availability, secure and scalable network for the new trading floor and regional offices, then prove it works by building it and testing connectivity end to end.",
    tools: ["Cisco Packet Tracer", "Cisco 2811 routers", "Cisco ASA 5505 firewalls", "Catalyst 3560 & 2950 switches", "Linksys WRT300N wireless", "IPv6 · OSPFv3", "DNS (AAAA) · SMTP/POP3 email server"],
    did: [
      "Turned the brief into clear requirements: 99.999% availability for trading, 99% for support services, under 1 ms for trades and wireless access for mobile devices",
      "Designed a multi-homed WAN with two ISPs and redundant links between London Edge and the Birmingham, Manchester and Edinburgh offices",
      "Placed a Cisco ASA firewall at every site and built a London DMZ for the email server, separated from the internal network",
      "Created a hierarchical IPv6 addressing plan with /52 subnets for infrastructure, users and reserved growth under each ISP prefix",
      "Configured OSPFv3 (area 0) on all 8 routers with unique router IDs, and segmented servers and staff into VLANs 100, 200, 201 and 202",
      "Set up DNS with AAAA records and an SMTP/POP3 email server on ufk.com, then tested email between regional users",
      "Verified the build with ping tests from Birmingham to every site, server and employee PC: all 13 captured results show 0% packet loss",
      "Researched and compared VPN protocols (WireGuard, OpenVPN, IKEv2/IPsec, L2TP/IPsec, SSTP, PPTP) and their legal and security implications"
    ],
    skills: ["Enterprise network design", "IPv6 addressing & subnetting", "OSPFv3 routing", "Firewall placement & DMZ design", "Network segmentation with VLANs", "Technical proposal writing"],
    outcome: "A working multi-site network in Packet Tracer with end-to-end IPv6 connectivity across all four sites, documented in a 28-page design proposal and a 27-page implementation and VPN report.",
    relevance: "A SOC analyst has to know what normal traffic looks like and where an attacker would have to cross a boundary. Designing the firewalls, DMZ and segmentation myself makes it much easier to read firewall logs, spot lateral movement and understand the VPN tunnels that show up in alerts every day.",
    evidence: {
      github: "https://github.com/Zone88-bot/Network-Infrastructure-01",
      screenshots: "#gallery",
      writeup: "docs/Network-Design-Proposal-ICA1.pdf",
      demo: "",
      docs: "docs/Network-Implementation-and-VPN-Report-ICA2.pdf"
    },
    gallery: [
      { src: "images/ni-topology.jpg", caption: "Full network topology: 4 sites, dual ISPs, ASA firewalls, London DMZ and VLANs" },
      { src: "images/ni-ping-test.jpg", caption: "End-to-end test: Birmingham PC to the London file server (financial floor), 0% packet loss" },
      { src: "images/ni-router-config.jpg", caption: "Birmingham router config: IPv6 addressing and OSPFv3 (router ID 1.1.1.1)" },
      { src: "images/ni-email-dns.jpg", caption: "DNS server with an AAAA record for ufk.com, supporting the email service" }
    ]
  },
  {
    id: "nessus",
    thumb: "images/nessus-scan.png",
    type: "Professional · ZTE",
    status: "Completed",
    category: "Vulnerability Mgmt",
    title: "Vulnerability Assessment: Telecom Server Project (Thailand)",
    summary: "Ran advanced Nessus scans across production servers for a major Thai telecom operator's server installation project, and turned the results into reports the team used to fix issues before handover.",
    metric: "Advanced Nessus scans · <strong>PDF + HTML</strong> reports",
    tags: ["Nessus", "Vulnerability assessment", "Scan policies", "Reporting"],
    confidential: true,
    what: "As a Network and Security Engineer at ZTE (Nov 2025 to present), I ran vulnerability assessments with Tenable Nessus for a major Thai telecom operator's server installation project.",
    why: "The client is a major Thai telecom operator, and its new production servers had to be secure before handover. Finding service exposures, missing patches and misconfigurations early meant they could be fixed before go-live.",
    objective: "Find service exposures, missing patches and misconfigurations across the production servers, and give the project team clear reports to fix them before handover.",
    tools: ["Tenable Nessus (advanced scans)", "Custom scan policies", "PDF & HTML reporting"],
    did: [
      "Configured advanced Nessus scan policies to check for service exposures, missing patches and misconfigurations",
      "Ran scans across the production servers in the server installation project",
      "Exported the results as PDF and HTML reports for the project team",
      "Supported remediation so findings were fixed before handover"
    ],
    skills: ["Vulnerability scanning", "Scan policy configuration", "Reading CVEs and severity ratings", "Reporting technical risk to a project team"],
    outcome: "The scan reports gave the project team a clear list of issues to fix, supporting remediation before the servers were handed over to the client.",
    relevance: "SOC analysts use vulnerability data every day to judge whether an alert matters: an exploit attempt against an unpatched host is far more urgent than one against a patched host.",
    evidence: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  },
  {
    id: "hardening",
    thumb: "images/hardening-bmc-config.png",
    type: "Professional · ZTE",
    status: "Completed",
    category: "Hardening",
    title: "Hardening 200+ Production Servers",
    summary: "Applied hardening standards across 200+ production servers for a major Thai telecom operator: SSH key authentication, fewer services, stronger password policies and tighter file permissions.",
    metric: "<strong>200+</strong> servers hardened",
    tags: ["System hardening", "SSH key authentication", "CIS Benchmarks", "Access control"],
    confidential: true,
    what: "Security hardening of 200+ production servers at ZTE for a major Thai telecom operator's server installation project, reducing the attack surface by tightening authentication, services and access.",
    why: "Default server configurations leave unnecessary services, weak settings and loose permissions. Every one of those is an opportunity for an attacker.",
    objective: "Bring every server up to a consistent, documented security standard before handover, without breaking production services.",
    tools: ["CIS Benchmarks (hardening standard)", "SSH key authentication", "Password & account policies", "File permission controls", "UAT hardening records"],
    did: [
      "Configured SSH key-based authentication",
      "Disabled unused services to shrink the attack surface",
      "Enforced password policies",
      "Restricted file permissions to reduce common attack vectors",
      "Wrote server hardening records for UAT reports, later used as operational standards by site implementation teams"
    ],
    skills: ["Server security configuration", "Attack-surface reduction", "Working at scale and consistently", "Security documentation"],
    outcome: "200+ production servers hardened to a consistent standard. My hardening records went into the UAT reports and became operational standards across site implementation teams.",
    relevance: "Knowing what a hardened server looks like helps an analyst spot drift: a new open port, a re-enabled service or a changed permission is often the first sign of compromise.",
    evidence: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  },
  {
    id: "datacentre",
    thumb: "images/dc-equinix-thumb.jpg",
    type: "Professional · Campana Group",
    status: "Completed",
    category: "Network",
    title: "Data Centre Network Operations in Singapore",
    summary: "Installed, cabled and maintained network equipment inside the Equinix SG1 and Telin-3 data centres, and kept the network running with 24/7 support.",
    metric: "<strong>2</strong> data centres · <strong>24/7</strong> L1/L2 support",
    tags: ["Equinix SG1", "Telin-3", "Cabling", "Routers & switches", "Cisco · Juniper · Gigamon", "24/7 support"],
    confidential: true,
    what: "As a Network Engineer at Campana Group in Singapore (May to Dec 2023), I installed and maintained network infrastructure inside the Equinix SG1 and Telin-3 data centres.",
    why: "",
    objective: "Install network equipment correctly, keep cabling tidy and documented, and keep the network running with 24/7 Layer 1 and Layer 2 support.",
    tools: ["Cisco, Juniper & Gigamon devices", "Cat6A, OM4 fibre & DAC cabling", "VLANs & BGP", "Ticketing system", "Vendor escalation (Singtel, MPT)"],
    did: [
      "Installed and maintained Cisco, Juniper and Gigamon routers, switches and network devices in Equinix SG1 and Telin-3",
      "Patched Cat6A, OM4 fibre and DAC cabling, following data centre physical security and cable management standards",
      "Configured VLANs and tested BGP across multi-site environments to keep traffic flowing reliably",
      "Supported 24/7 Layer 1 and Layer 2 operations, troubleshooting network faults",
      "Escalated issues to vendors including Singtel and MPT, and documented resolution steps in the ticketing system"
    ],
    skills: ["Equipment installation", "Structured cabling (copper & fibre)", "Network maintenance & monitoring", "Fault troubleshooting & escalation", "Ticketing & documentation"],
    outcome: "Network equipment installed and kept running across two Singapore data centres, with faults resolved through structured troubleshooting, vendor escalation and documented tickets.",
    relevance: "",
    evidence: { github: "", screenshots: "", writeup: "", demo: "", docs: "" }
  }
];

/* ---------- 3. Practical learning (NOT certifications) ---------- */
const LEARNING = [
  {
    platform: "TryHackMe",
    count: "119",
    countLabel: "rooms completed",
    extra: "Gold League · Top 5%",
    link: LINKS.tryhackme,
    linkLabel: "View TryHackMe profile",
    areas: ["Cybersecurity 101 path"],
    tools: ["Wireshark", "Splunk", "Nmap", "Windows Event Viewer"],
    logo: "images/logo-tryhackme.png",
    bg: "images/thm-banner.png"
  }
]

/* ---------- 4. Certifications (kept short on purpose) ---------- */
const CERTIFICATIONS = [
  {
    name: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    date: "Certified Aug 2026 · valid to Aug 2029",
    why: "To prove a broad, vendor-neutral security foundation as I moved from networking into security.",
    areas: ["Threats & vulnerabilities", "Security architecture", "Security operations", "Risk & compliance"],
    link: "https://www.credly.com/badges/18fe318e-c963-4eb7-9590-0063b8a8f174/public_url",
    image: "images/cert-comptia-security-plus.jpg"
  },
  {
    name: "Network Security Fundamentals",
    issuer: "Palo Alto Networks",
    date: "Completed Mar 2026",
    why: "Formal grounding in network security concepts to back up my hands-on firewall work.",
    areas: ["Network security concepts", "Firewalls", "Secure network design"],
    link: "",
    image: "images/cert-paloalto-nsf.jpg"
  },
  {
    name: "CCNA: Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "Certified Jan 2022 · valid through Jan 2025",
    why: "Validated the networking skills I use every day. It's the base my security work is built on.",
    areas: ["Routing & switching", "IP services", "Network security basics", "Automation"],
    link: "https://www.cisco.com/go/verifycertificate",
    linkLabel: "Verify at Cisco",
    image: "images/cert-cisco-ccna.jpg"
  },
  {
    name: "AWS Security Fundamentals (Second Edition)",
    issuer: "AWS Training & Certification",
    date: "Completed Mar 2026",
    why: "Covers how security works in the cloud, where more and more of the infrastructure I protect now runs.",
    areas: ["Cloud security basics", "Identity & access (IAM)", "Data protection"],
    link: "",
    linkLabel: "",
    image: "images/cert-aws-security-fundamentals.jpg"
  },
  {
    compact: true,
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google · Coursera",
    date: "Completed Aug 2026 · 9 courses",
    why: "Hands-on, practice-based training aimed directly at entry-level SOC analyst work.",
    areas: ["SIEM tools", "IDS", "Linux & SQL", "Python automation", "Detection & response"],
    link: "https://www.credly.com/badges/217b7c55-a4ee-446c-8062-97f6b6d8ab1a/public_url",
    image: "images/cert-google-cybersecurity.jpg"
  },
  {
    compact: true,
    name: "Pre Security (SEC0)",
    issuer: "TryHackMe",
    date: "Certified Jul 2026",
    why: "An assessed entry-level credential that confirms the core technical fundamentals security work is built on.",
    areas: ["Networking", "How the web works", "Operating systems", "Security fundamentals"],
    link: "https://www.credly.com/badges/ccebd0ca-7840-4300-9100-ef99e2da91fb/public_url",
    image: "images/cert-tryhackme-sec0.jpg"
  },
  {
    compact: true,
    name: "Fortinet NSE 3: Network Security Associate",
    issuer: "Fortinet",
    date: "In progress",
    inProgress: true,
    why: "Builds on my enterprise firewall experience with Fortinet's security products, widely used in enterprise networks.",
    areas: ["Fortinet security products", "Threat landscape", "Network security solutions"],
    link: "",
    image: ""
  }
];

/* ---------- 5. Achievements & community ---------- */
const COMMUNITY = [
  {
    type: "[ADD: Mentoring / Volunteering]",
    title: "[ADD: title]",
    text: "[ADD: what you did]",
    impact: "[ADD: impact, e.g. '6 juniors helped into IT roles']",
    placeholder: true
  },
  {
    type: "[ADD: Award / Talk / CTF]",
    title: "[ADD: title]",
    text: "[ADD: what you did]",
    impact: "[ADD: result or recognition]",
    placeholder: true
  }
];

/* =========================================================
   Below this line is the code that builds the page.
   You shouldn't need to edit anything here.
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// Escape text, then turn "[ADD: ...]" into a yellow placeholder tag.
function fmt(text) {
  const safe = String(text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/&lt;(\/?)strong&gt;/g, "<$1strong>");           // allow <strong>
  return safe.replace(/\[ADD[^\]]*\]/g, m => `<span class="placeholder-inline">${m}</span>`);
}

/* ---------- Header links (GitHub, LinkedIn, email...) ---------- */
function setupLinks() {
  const labels = { github: "GitHub", linkedin: "LinkedIn", tryhackme: "TryHackMe", cv: "CV", email: "email" };
  $$("[data-link]").forEach(el => {
    const key = el.dataset.link;
    const val = LINKS[key];
    if (val) {
      el.href = key === "email" ? `mailto:${val}` : val;
    } else {
      el.removeAttribute("href");
      el.removeAttribute("target");
      el.classList.add("is-placeholder");
      el.title = `Add your ${labels[key]} link in script.js`;
    }
  });
  $$("[data-text]").forEach(el => {
    const key = el.dataset.text;
    el.innerHTML = LINKS[key] ? fmt(LINKS[key].replace(/^https?:\/\/(www\.)?/, "").replace(/^linkedin\.com/, "").replace(/\/$/, "")) : fmt(`[ADD: ${labels[key]}]`);
  });
}

/* ---------- Project cards + filters ---------- */
function renderProjects(filter = "All") {
  const grid = $("#project-grid");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const ICONS = { "Detection": "fa-magnifying-glass-chart", "Network": "fa-network-wired", "Vulnerability Mgmt": "fa-bug", "Hardening": "fa-shield-halved" };
  grid.innerHTML = list.map(p => `
    <button class="pcard reveal" data-id="${p.id}">
      <div class="pcard-thumb ${p.thumb ? "" : "no-img"}">
        ${p.thumb
          ? `<img src="${p.thumb}" alt="${p.title} screenshot" loading="lazy" />`
          : `<i class="fa-solid ${ICONS[p.category] || "fa-folder-open"}"></i>`}
        <span class="pcard-status ${p.status === "In progress" ? "live" : ""}">${p.status}</span>
      </div>
      <div class="pcard-body">
        <span class="card-type">${fmt(p.type)}</span>
        <h3>${fmt(p.title)}</h3>
        <p>${fmt(p.summary)}</p>
        <span class="pcard-more">View details →</span>
      </div>
    </button>`).join("");
  $$(".pcard", grid).forEach(card => card.addEventListener("click", () => openProject(card.dataset.id)));
  observeReveal();
  grid.scrollLeft = 0;
  grid.dispatchEvent(new Event("scroll"));
}

function setupCarousel() {
  const track = $("#project-grid");
  const prev = $(".car-btn.prev"), next = $(".car-btn.next");
  const step = () => (track.querySelector(".pcard")?.offsetWidth || 260) + 18;
  // Dim an arrow when there is nothing more to scroll in that direction
  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
    $(".carousel").classList.toggle("no-scroll", max <= 0);
  };
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
  setTimeout(update, 300);
}

function renderFilters() {
  const cats = ["All", ...new Set(PROJECTS.map(p => p.category))];
  const box = $("#project-filters");
  box.innerHTML = cats.map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
  $$(".filter-btn", box).forEach(btn => btn.addEventListener("click", () => {
    $$(".filter-btn", box).forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.cat);
  }));
}

/* ---------- Project detail view ---------- */
const EVIDENCE_LABELS = {
  github: "GitHub repository",
  screenshots: "Screenshots",
  writeup: "Write-up",
  demo: "Demo",
  docs: "Technical documentation"
};

function evidenceButtons(ev) {
  return Object.keys(EVIDENCE_LABELS).map(key => {
    const url = ev[key];
    if (url === "#gallery") return `<a class="evidence-btn" href="#gallery-anchor">${EVIDENCE_LABELS[key]}<small>see gallery below ↓</small></a>`;
    if (url) return `<a class="evidence-btn" href="${url}" target="_blank" rel="noopener">${EVIDENCE_LABELS[key]}<small>open ↗</small></a>`;
    return "";   // not added yet: hidden until you add a link in script.js
  }).join("");
}

function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const list = arr => `<ul>${arr.map(i => `<li>${fmt(i)}</li>`).join("")}</ul>`;
  const gallery = p.gallery ? `
    <div class="evidence" id="gallery-anchor">
      <h4>Screenshots: click to enlarge</h4>
      <div class="cert-grid">
        ${p.gallery.map((g, i) => `<button class="cert-thumb" data-index="${i}"><img src="${g.src}" alt="${g.caption}" loading="lazy" /></button>`).join("")}
      </div>
    </div>` : "";

  $("#modal-content").innerHTML = `
    <div class="detail-head">
      <span class="card-type">${fmt(p.type)} · ${p.status}</span>
      <h3 id="modal-title">${fmt(p.title)}</h3>
      <p class="lead">${fmt(p.what)}</p>
    </div>
    <div class="detail-grid">
      <div class="detail-block wide"><h4>Objective</h4><p>${fmt(p.objective)}</p></div>
      <div class="detail-block"><h4>Tools &amp; technologies</h4>${list(p.tools)}</div>
      <div class="detail-block"><h4>Skills developed</h4>${list(p.skills)}</div>
      <div class="detail-block wide"><h4>What I actually did</h4>${list(p.did)}</div>
      <div class="detail-block wide"><h4>Outcome</h4><p>${fmt(p.outcome)}</p></div>
    </div>
    <div class="evidence">
      <h4>Evidence</h4>
      <div class="evidence-row">${evidenceButtons(p.evidence) || `<p class="evidence-empty">Evidence coming soon.</p>`}</div>
    </div>
    ${gallery}`;

  if (p.gallery) {
    $$("#modal-content .cert-thumb").forEach(b => b.addEventListener("click", () => openLightbox(p.gallery, +b.dataset.index)));
  }
  const modal = $("#project-modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $(".modal-panel").scrollTop = 0;
  $(".modal-close").focus();
  history.replaceState(null, "", `#project:${id}`);
}

function closeProject() {
  const modal = $("#project-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  history.replaceState(null, "", "#projects");
}

/* ---------- Image lightbox ---------- */
let lb = { items: [], i: 0 };   // items: [{ src, caption }]
function showLightbox() {
  const it = lb.items[lb.i];
  $("#lightbox-img").src = it.src;
  $("#lightbox-img").alt = it.caption;
  $("#lightbox-caption").textContent = it.caption;
  $$(".lightbox-nav").forEach(b => b.style.display = lb.items.length > 1 ? "" : "none");
}
function openLightbox(items, i = 0) { lb = { items, i }; showLightbox(); $("#lightbox").classList.add("open"); }
function closeLightbox() { $("#lightbox").classList.remove("open"); }
function stepLightbox(d) { lb.i = (lb.i + d + lb.items.length) % lb.items.length; showLightbox(); }

/* ---------- Learning, certs, community ---------- */
function renderLearning() {
  $("#learning-list").innerHTML = LEARNING.map(l => {
    const linkHtml = l.link
      ? `<a class="btn btn-ghost" href="${l.link}" ${l.link.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${l.linkLabel} →</a>`
      : `<span class="btn is-placeholder">${l.linkLabel}: [ADD link]</span>`;
    return `
    <article class="learn-card ${l.bg ? "has-bg" : ""} reveal">
      ${l.bg ? `<span class="learn-bg" style="background-image: url('${l.bg}')" aria-hidden="true"></span>` : ""}
      <div class="learn-stat">
        <div class="platform">${l.logo ? `<img class="platform-logo" src="${l.logo}" alt="" />` : ""}${fmt(l.platform)}</div>
        <div class="num">${fmt(l.count)}</div>
        <div class="num-label">${fmt(l.countLabel)}</div>
        <p class="num-label" style="margin-top:8px">${fmt(l.extra)}</p>
      </div>
      <div class="learn-body">
        <h4>Areas covered</h4>
        <div class="tags">${l.areas.map(a => `<span class="tag">${fmt(a)}</span>`).join("")}</div>
        ${l.tools && l.tools.length ? `<h4>Top tools</h4><div class="tags">${l.tools.map(t => `<span class="tag">${fmt(t)}</span>`).join("")}</div>` : ""}
        ${linkHtml}
      </div>
    </article>`;
  }).join("");
  // internal link that opens a project
  $$('#learning-list a[href^="#project:"]').forEach(a => a.addEventListener("click", e => {
    e.preventDefault(); openProject(a.getAttribute("href").split(":")[1]);
  }));
}

function renderCerts() {
  const withImg = CERTIFICATIONS.filter(c => c.image);
  // "compact" certificates show as small cards (no big image, no description)
  const big = c => c.image && !c.compact;
  const imgCount = CERTIFICATIONS.filter(big).length;
  const textCount = CERTIFICATIONS.filter(c => !big(c)).length;
  let imgSeen = 0;
  // Image cards: 2 per row; if the count is odd, the last three share one row
  const imgClass = () => {
    imgSeen++;
    if (imgCount % 3 === 0) return "third";                                   // 3, 6, 9... -> 3 per row
    return (imgCount % 2 === 1 && imgCount >= 3 && imgSeen > imgCount - 3) ? "third" : "";
  };
  // Cards without an image: 1 = full width, even number = 2 per row, odd = 3 per row
  const textClass = textCount === 1 ? "wide" : (textCount % 2 === 0 ? "half" : "");
  $("#cert-grid").innerHTML = CERTIFICATIONS.map(c => c.compact ? `
    <article class="cert-card compact ${textClass} reveal">
      <div class="cert-body">
        <span class="issuer">${fmt(c.issuer)}</span>
        <h3>${fmt(c.name)}</h3>
        ${c.date ? `<span class="cert-date">${fmt(c.date)}</span>` : ""}
        <div class="cert-links">
          ${c.image ? `<button class="cert-link cert-view" data-img="${c.image}">View certificate</button>` : ""}
          ${c.link ? `<a class="cert-link" href="${c.link}" target="_blank" rel="noopener">${c.linkLabel || "Verify on Credly"} ↗</a>` : ""}
        </div>
      </div>
    </article>` : `
    <article class="cert-card ${c.image ? "has-image " + imgClass() : textClass} reveal">
      ${c.image ? `<button class="cert-thumb" data-img="${c.image}" aria-label="View ${c.name} certificate">
        <img src="${c.image}" alt="${c.name} certificate" loading="lazy" /><span>View certificate</span></button>` : ""}
      <div class="cert-body">
        <span class="issuer">${fmt(c.issuer)}</span>
        <h3>${fmt(c.name)}</h3>
        ${c.date ? `<span class="cert-date">${fmt(c.date)}</span>` : ""}
        <p>${fmt(c.why)}</p>
        <div class="tags">${c.areas.map(a => `<span class="tag">${fmt(a)}</span>`).join("")}</div>
        <div class="cert-links">
          ${c.link
            ? `<a class="cert-link" href="${c.link}" target="_blank" rel="noopener">${c.linkLabel || "Verify on Credly"} ↗</a>`
            : (c.image || c.inProgress ? "" : `<span class="cert-link is-placeholder">[ADD: certificate / Credly link]</span>`)}
        </div>
      </div>
    </article>`).join("");
  const items = withImg.map(c => ({ src: c.image, caption: `${c.name} · ${c.issuer}` }));
  $$("#cert-grid .cert-thumb, #cert-grid .cert-view").forEach(b => b.addEventListener("click", () =>
    openLightbox(items, items.findIndex(it => it.src === b.dataset.img))));
}

function renderCommunity() {
  $("#community-grid").innerHTML = COMMUNITY.map(c => `
    <article class="community-card ${c.placeholder ? "is-placeholder-card" : ""} reveal">
      <span class="card-type">${fmt(c.type)}</span>
      <h3>${fmt(c.title)}</h3>
      <p>${fmt(c.text)}</p>
      <p class="impact">${fmt(c.impact)}</p>
    </article>`).join("");
}

/* ---------- Hero typing effect ----------
   Edit the phrases below. Each one follows "And I'm ..." */
// One phrase = typed once when the page opens. Add more phrases to make it cycle.
const TYPING_PHRASES = ["Network & Security Engineer"];

function typeTerminal() {
  const el = $("#typing");
  if (!el) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = TYPING_PHRASES[0]; return; }
  if (TYPING_PHRASES.length === 1) {            // type the title once when the page opens
    const word = TYPING_PHRASES[0]; let i = 0;
    const typeOnce = () => { el.textContent = word.slice(0, ++i); if (i < word.length) setTimeout(typeOnce, 75); };
    setTimeout(typeOnce, 700);
    return;
  }
  let p = 0, i = 0, deleting = false;
  const tick = () => {
    const word = TYPING_PHRASES[p];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let wait = deleting ? 45 : 85;
    if (!deleting && i === word.length) { deleting = true; wait = 1600; }
    else if (deleting && i === 0) { deleting = false; p = (p + 1) % TYPING_PHRASES.length; wait = 350; }
    setTimeout(tick, wait);
  };
  setTimeout(tick, 1800);
}

/* ---------- Animated network background (hero) ----------
   Dots drift slowly and link up when close: like nodes on a network. */
function networkBackground() {
  const canvas = $("#network-bg");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  let w, h, dots = [], running = true, dpr = Math.min(window.devicePixelRatio || 1, 2);
  const COLORS = ["55, 119, 255", "112, 28, 245", "107, 155, 255"];

  function resize() {
    w = hero.clientWidth; h = hero.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(90, (w * h) / 16000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      r: Math.random() * 1.6 + .8, c: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }
  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.strokeStyle = `rgba(${a.c}, ${0.22 * (1 - d / 130)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(${a.c}, .75)`;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener("resize", resize);
  // Pause when the hero is off screen to save battery
  new IntersectionObserver(([e]) => {
    const was = running; running = e.isIntersecting;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(hero);
  requestAnimationFrame(frame);
}

/* Highlight the current section in the menu while scrolling */
function trackActiveNav() {
  const links = $$(".nav-links a");
  const sections = links.map(a => $(a.getAttribute("href") === "#top" ? ".hero" : a.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const idx = sections.indexOf(en.target);
      links.forEach(l => l.classList.remove("active"));
      if (links[idx]) links[idx].classList.add("active");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => obs.observe(s));
}

/* ---------- Scroll reveal ---------- */
let observer;
function observeReveal() {
  if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(e => e.classList.add("visible")); return; }
  observer = observer || new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); observer.unobserve(en.target); } });
  }, { threshold: 0.1 });
  $$(".reveal:not(.visible)").forEach(e => observer.observe(e));
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setupLinks();
  renderFilters();
  renderProjects();
  setupCarousel();
  renderLearning();
  renderCerts();
  typeTerminal();
  trackActiveNav();
  networkBackground();
  observeReveal();
  $("#year").textContent = new Date().getFullYear();

  // Mobile menu
  const toggle = $(".nav-toggle"), links = $(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$(".nav-links a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  // Modal + lightbox controls
  $$("[data-close]").forEach(el => el.addEventListener("click", closeProject));
  $(".lightbox-close").addEventListener("click", closeLightbox);
  $(".lightbox-nav.prev").addEventListener("click", () => stepLightbox(-1));
  $(".lightbox-nav.next").addEventListener("click", () => stepLightbox(1));
  $("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", e => {
    if ($("#lightbox").classList.contains("open")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    } else if (e.key === "Escape" && $("#project-modal").classList.contains("open")) closeProject();
  });

  // Open a project directly from a shared link, e.g. yoursite/#project:nessus
  if (location.hash.startsWith("#project:")) openProject(location.hash.split(":")[1]);
});
