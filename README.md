# Pyae Sone Htun · Network & Security Engineer Portfolio

My personal portfolio website: projects, hands-on labs and certifications from 3+ years of network and security engineering across Singapore, Thailand and Myanmar.

**Live site:** https://zone88-bot.github.io/portfolio/
**Open to:** Network Security Engineer, Firewall Engineer and Security Engineer roles in Singapore

---

## About

Network and security engineer with experience in enterprise network infrastructure, Equinix and Telin-3 data centre operations, hardening 200+ production servers and Nessus vulnerability assessments. Holds CompTIA Security+ and CCNA, plus a BSc (Hons) in Cybersecurity and Networks from MDIS Singapore.

## What's on the site

| Section | What it shows |
|---|---|
| **Home** | Introduction, key certifications and links to GitHub, LinkedIn, TryHackMe and email |
| **About Me** | Background, what I enjoy and what I'm currently learning |
| **Projects** | Real-world and university projects. Click a card to see the objective, tools, what I did, skills, outcome and evidence |
| **Hands-on Labs** | TryHackMe progress: 119 rooms completed, Gold League (top 5%) |
| **Certifications** | CompTIA Security+, Palo Alto Networks Network Security Fundamentals, CCNA, AWS Security Fundamentals, Google Cybersecurity, TryHackMe SEC0 and Fortinet NSE 3 (in progress) |
| **Hire Me** | Contact details and a downloadable CV |

### Projects

- **Multi-Site Enterprise Network: Design & Build (IPv6)**: a dual-ISP IPv6 network linking four UK sites, built and tested in Cisco Packet Tracer ([repository](https://github.com/Zone88-bot/Network-Infrastructure-01))
- **Vulnerability Assessment: Telecom Server Project (Thailand)**: Nessus scans and reporting before server handover
- **Hardening 200+ Production Servers**: SSH key authentication, service reduction, password policies and file permissions
- **Data Centre Network Operations in Singapore**: installing, cabling and maintaining network equipment in Equinix SG1 and Telin-3

Client names and internal details from professional work are not published.

## Built with

- **HTML, CSS and JavaScript** only: no frameworks, no build step, no server
- [Font Awesome](https://fontawesome.com/) icons and the [Ubuntu](https://fonts.google.com/specimen/Ubuntu) font from Google Fonts
- Hosted on **GitHub Pages**

Features: animated network background, typing title, project carousel with detail views, certificate image viewer, and a layout that works on desktop, tablet and phone.

## Folder structure

```
├── index.html               # page layout and text (hero, About Me, contact)
├── style.css                # all styling: colours, layout, mobile design
├── script.js                # content: links, projects, labs, certifications
├── Pyae_Sone_Htun_CV.pdf    # CV for the Resume button
├── images/                  # profile photo, certificates, logos, project images
├── docs/                    # project reports (PDF)
└── .gitignore               # keeps local backup folders out of the repository
```

## Updating the content

Most content lives at the top of **`script.js`**, so you rarely need to touch the layout:

| To change… | Edit |
|---|---|
| GitHub, LinkedIn, TryHackMe, email or CV links | `LINKS` |
| Projects | `PROJECTS` (`thumb` = card image, `evidence` = links shown in the project view) |
| TryHackMe stats, areas and tools | `LEARNING` |
| Certifications | `CERTIFICATIONS` (`compact: true` shows a smaller card) |

**Adding evidence to a project:** paste a link into that project's `evidence` line. Buttons only appear for evidence that has a link:

```js
evidence: { github: "https://github.com/Zone88-bot/your-repo", screenshots: "", writeup: "", demo: "", docs: "" }
```

Hero, About Me and contact text are in **`index.html`**. Colours are defined at the top of **`style.css`** (`--bg`, `--violet`, `--blue`).

## Run it locally

No installation needed. Download or clone the repository and open `index.html` in a browser. After changes, press **Ctrl + F5** (Windows) or **Cmd + Shift + R** (Mac) to reload without the cache.

## Deploy

1. Push the files to this repository.
2. Go to **Settings → Pages**, choose the **main** branch and the **/(root)** folder, then **Save**.
3. The site updates automatically within a minute or two after each push.

## Contact

- Email: ptun777@gmail.com
- LinkedIn: [linkedin.com/in/pyaesonehtun787945](https://www.linkedin.com/in/pyaesonehtun787945/)
- GitHub: [github.com/Zone88-bot](https://github.com/Zone88-bot)
- TryHackMe: [tryhackme.com/p/zone88](https://tryhackme.com/p/zone88)

---

© 2026 Pyae Sone Htun
