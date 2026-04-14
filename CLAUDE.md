# Portfolio – Claude Context

## What this repo is
A personal portfolio website for Venkata Maruthi Sowmyanath Adapala, hosted via GitHub Pages at `aviansilk.github.io/portfolio/`. It is a static site — no build step, no framework. Changes to `index.html`, `style.css`, and `script.js` go live on push.

## File map
| File | Purpose |
|---|---|
| `index.html` | All page content. Single-page layout with a fixed sidebar and scrollable main area. |
| `style.css` | All styling. Sidebar, card layout, responsive breakpoints. |
| `script.js` | Minor JS: auto-sets copyright year, mobile sidebar toggle. |
| `assets/images/Headshot.jpg` | Profile photo used in the sidebar. |

## Content source of truth
The resume PDF (kept locally, not committed) is the authoritative source for content. When the resume is updated, `index.html` must be updated to match. Sections map as follows:

| Resume section | HTML section id |
|---|---|
| Candidate Summary | `#summary` |
| Education | `#education` |
| Skills | `#skills` |
| Experience | `#experience` |
| Projects & Certifications | `#certifications` |
| Awards & Accomplishments | `#awards` |

## Owner & contact
- **Name:** Venkata Maruthi Sowmyanath Adapala
- **Email:** avmsowmyanath8@gmail.com
- **GitHub:** github.com/AvianSilk
- **LinkedIn:** linkedin.com/in/venkata-adapala/

## Current projects on the resume
- **Radio Calico** (April 2026 – Present) — personal full-stack HLS radio streaming app; Node/Express, PostgreSQL, Docker, nginx, vanilla JS, Jest, GitHub Actions CI.
- **SmartSyllabus** (January 2026 – Present) — team project at UTM; React 18, Flask, SQLite, Gemini 2.5 Flash, JWT auth.

## Certifications
- AWS Certified Cloud Practitioner — January 2026
- Oracle Certified Associate, Java SE 8 Programmer — July 2025

## Style conventions
- No frameworks or bundlers — keep it plain HTML/CSS/JS.
- Avoid adding new files unless strictly necessary.
- External links use `target="_blank" rel="noopener"`.
- Dates use en-dashes (`&ndash;`) not hyphens.
- Section headings are ALL CAPS to match the resume style.
