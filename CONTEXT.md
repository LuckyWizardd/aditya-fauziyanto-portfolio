# PROJECT CONTEXT & MEMORY: ADITYA FAUZIYANTO PORTFOLIO & CV WEB

> **Tanggal Dibuat:** 14 September 2026  
> **Status Proyek:** Fase 2 Selesai Penuh (13 Real Enterprise Case Studies Live, 100% NDA-Compliant, Executive Ready). Siap Deploy ke Cloud/Hosting.  
> **Pemilik:** Aditya Fauziyanto  
> **Path Direktori:** `F:/My CV Web`

---

## 1. Profil & Ringkasan Identitas Profesional

| Atribut | Detail |
|---|---|
| **Nama Lengkap** | Aditya Fauziyanto |
| **Current Role** | Senior ITSM Consultant & Atlassian Solutions Architect |
| **Spesialisasi** | Jira Service Management (JSM), Atlassian Cloud Migration, JSM Assets (CMDB), ITIL® 4 Framework & Governance, Pre-sales Solutioning, Edge/Forge Automation |
| **Lokasi** | Cikarang Utara, Bekasi / Jabodetabek, Indonesia |
| **Email** | `adityafauziyanto@gmail.com` |
| **No. HP / WhatsApp** | `+62 851 5533 3480` |
| **LinkedIn** | [linkedin.com/in/adityafauzii](https://linkedin.com/in/adityafauzii) |
| **Sertifikasi Utama** | 1. **ITIL® 4 Specialist: Create, Deliver and Support (CDS)** — PeopleCert / AXELOS<br>2. **ITIL® 4 Foundation in IT Service Management** — PeopleCert / AXELOS |
| **Pendidikan** | S1 Teknik Informatika, Universitas Mercu Buana (2016 – 2021 | IPK: 3.23) |

---

## 2. Ringkasan Jejak Karier (Work Experience)

1. **PT iZeno Teknologi Indonesia** (2022 — Sekarang)
   - *Role:* Senior ITSM Consultant & Solutions Architect
   - *Fokus:* Cloud migration enterprise (Jira Server/DC ke Atlassian Cloud Enterprise), arsitektur JSM kustom, JSM Assets (CMDB) data modeling, pre-sales proposals (SOW, man-day sizing, GAP analysis), ITIL 4 KPI & workflow design.
2. **PT Aplikanusa Lintasarta** (2018 — 2022 | 4 Tahun)
   - *Role:* Service Desk Supervisor & Service Management Analyst
   - *Fokus:* Supervisi tim 8 analis Service Desk 24/7, Problem Management & Root Cause Analysis (RCA), penyusunan KPI & SLA, audit kepatuhan ITIL, konfigurasi ServiceDesk Plus.
3. **PT Swadharma Duta Data** (2017 — 2018 | 1 Tahun)
   - *Role:* Network Operation Center (NOC) Support Analyst for Banking
   - *Fokus:* Pemantauan infrastruktur perbankan L1, penanganan insiden sesuai SLA ketat, eskalasi teknis, dan dokumentasi SOP/knowledge base.

---

## 3. Arsitektur & File yang Sudah Dibangun Hari Ini

| File | Ukuran | Fungsi & Detail Implementasi |
|---|---|---|
| `index.html` | ~75 KB | Halaman utama web. Semantic HTML5, Tailwind CSS via CDN, Lucide Icons, responsive grid, SEO & OpenGraph meta tags, Hero, Metrics, 6 Pilar Kompetensi, Timeline Pengalaman, Portofolio Case Studies dengan filter tab, Credentials, Form Kontak WhatsApp/Email, dan Modal Popup detail. |
| `style.css` | ~5.5 KB | Desain tema Slate/Obsidian modern, font *Plus Jakarta Sans* & *JetBrains Mono*, glowing cards, pulsing status badges, custom scrollbar, transisi modal, styling Light Mode overrides, dan `@media print` untuk cetak CV ATS-friendly. |
| `script.js` | ~21 KB | Logika interaktif: Dark/Light mode toggle (tersimpan di `localStorage`), scroll progress bar & scrollspy navigation, filter kartu portofolio, database objek `caseStudies` untuk render modal pop-up detail, clipboard copy dengan toast pop-up, serta fungsi print CV. |
| `assets/Aditya_Fauziyanto_CV.pdf` | ~59 KB | File CV asli milik Aditya yang terhubung langsung ke tombol "Download CV (PDF)". |
| `README.md` | ~3.8 KB | Panduan cara menjalankan secara lokal (`python -m http.server` / `npx serve`) dan panduan deployment gratis ke Vercel, Netlify, atau GitHub Pages. |

---

## 4. Struktur Data Portofolio di `script.js` & `index.html` (13 Real Case Studies)

Seluruh 11 kick-off deck enterprise riil di folder `Portofolio/` ditambah 2 inovasi arsitektur pribadi telah berhasil dibedah, di-anonymize sesuai ketentuan ketat **NDA (Non-Disclosure Agreement)**, dan dipetakan dengan peran lo sebagai **Lead ITSM Architect / Atlassian Solutions Architect**:

1. `superapp-salesforce-migration`: **345k+ Ticket Migration: Salesforce Service Cloud to JSM Cloud** (Southeast Asian Decacorn Superapp & Tech Ecosystem) — Datahub ETL, 205 legacy forms dipangkas ke 47 JSM forms, Slack ChatOps, PAC onboarding.
2. `superapp-cloud-modernization`: **Enterprise Jira Server to Cloud Migration & ScriptRunner Modernization** (Leading Regional Superapp & Mobility-Fintech Decacorn) — 50 man-days ScriptRunner Cloud Groovy-to-REST refactoring, qTest, zero-downtime cutover.
3. `microfinance-itsm-pii`: **Enterprise Service Portal Refactoring, SLA Matrix & ScriptRunner PII Engine** (National State-Owned Microfinance & Financial Enterprise BUMN) — Refactoring arsitektur portal monolitik, mitigasi UU PDP via 5 ScriptRunner PII masking scripts, Admin Hub governance.
4. `datacenter-mission-critical-itsm`: **Mission-Critical Hyperscale Data Center ITSM & JSM Assets (CMDB)** (Pan-Asian Hyperscale Tier-3 & Tier-4 Data Center Operator) — ITIL 4 Service Desk, EUC/Server/Network schema di JSM Assets, CAB change collision gating, procurement workflows.
5. `commercial-banking-itsm`: **Core Banking ITSM Consolidation & SAP S/4HANA Master Data Integration** (Leading Commercial & Digital Banking Institution) — Penyatuan 5 silo ticketing, otomatisasi pipeline master data karyawan SAP S/4HANA ke JSM Assets, kepatuhan audit perbankan & CCB.
6. `broadcasting-media-itsm`: **Unified ITSM/CMDB Architecture & Multi-System ITOM Integration** (Singapore's National Media Network & Broadcasting Conglomerate) — Sinkronisasi JSM Assets dengan Microsoft Intune & HCL BigFix, integrasi proses SAP Solution Manager & SAP Signavio, Atlassian Guard SSO.
7. `petrochemical-multitenant-itsm`: **Cross-Border Multi-Tenant ITSM & SAP SuccessFactors HR Integration** (Leading Southeast Asian Petrochemical & Energy Group - Dual Entity ID/SG) — Arsitektur multi-tenant, 5 Asset schemas, integrasi OnLink SAP SuccessFactors, koordinasi MSP global.
8. `automotive-freshservice-device42`: **Enterprise ITSM Tech Refresh & Device42 Hybrid Living CMDB Auto-Discovery** (Regional Automotive Distribution & Luxury Mobility Giant) — Freshservice Enterprise + Freddy AI Copilot, on-premise Device42 grid (Main Appliance, WDS, Remote Collectors) memetakan 4.000+ aset real-time.
9. `maritime-logistics-secops-itsm`: **Global Maritime ITSM Modernization & Microsoft Sentinel SecOps Integration** (Global Maritime & Shipping Logistics Corporation - 100+ Ports) — JSM Cloud Premium, integrasi connector SecOps SIEM Microsoft Sentinel, Site24x7, Intune, Git Integration for Jira.
10. `digital-banking-itsm`: **High-Assurance Digital Banking ITSM Transformation & MTTR Optimization** (Regional Investment & Digital Banking Corporation) — High-assurance banking ITSM, pemetaan dependency core banking di JSM Assets, eskalasi otomatis P1/P2, defleksi Confluence KB.
11. `agri-food-manufacturing-itsm`: **Enterprise Manufacturing ITSM & Multi-Calendar Plant SLA Standardization** (Multinational Agri-Business & Food Manufacturing Enterprise) — Multi-calendar SLAs berbasis shift pabrik & hari libur daerah, approval hierarkis, otomatisasi Post-Incident Review (PIR).
12. `jira-ai-admin`: **JIRA AI Administrator & Autonomous Incident Triaging Engine** (AI & Cloudflare Edge Innovation) — Edge workers serverless, otomatisasi klasifikasi tiket & sintesis hipotesis Root Cause Analysis (RCA) via LLM.
13. `forge-plugins`: **Cloud-Native Atlassian Forge Apps & Enterprise Plugins** (Atlassian Platform Engineering) — Aplikasi cloud-native serverless di atas runtime Atlassian Forge, custom UI Kit, event triggers, zero external hosting footprint.

---

## 5. Rencana Kerja Selanjutnya (Next Steps)

1. [x] **Ekstraksi Data:** 11 Deck Kick-off riil di `Portofolio/` diekstraksi tuntas.
2. [x] **Sanitasi & Proteksi NDA:** 100% bebas dari penyebutan nama klien/PT terlarang.
3. [x] **Integrasi Web:** 13 Kartu case study interaktif dan modal pop-up live di `index.html` & `script.js`.
4. [ ] **Hosting & Git Setup:** Inisialisasi Git repository lokal dan push ke GitHub (untuk Vercel / Netlify / GitHub Pages).
