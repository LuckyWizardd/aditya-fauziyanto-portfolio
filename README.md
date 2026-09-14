# Aditya Fauziyanto — Professional Portfolio & Interactive CV Web

Website profil profesional dan showcase portofolio interaktif untuk **Aditya Fauziyanto** (Senior ITSM Consultant & Atlassian Solutions Architect).

## 🚀 Fitur Utama

1. **Enterprise Hero & Elevator Pitch**:
   - Status badge `🟢 Open to Enterprise Opportunities & Solutions Advisory`.
   - Tombol langsung **Download CV (PDF)**, **Chat WhatsApp**, **Kirim Email**, dan **Salin Email**.
   - Direct link ke LinkedIn (`linkedin.com/in/adityafauzii`).
2. **Impact & Metrics Section**:
   - Ringkasan statistik (7+ Years Experience, ITIL® 4 Specialist CDS, 100% Cloud Migration success, 8+ Service Desk Analysts supervised).
3. **Core Expertise & ITIL 4 Alignment (6 Pillars)**:
   - Jira Service Management (JSM)
   - Atlassian Cloud Migration
   - JSM Assets & CMDB Architecture (AQL & Device42)
   - ITIL® 4 Framework & Governance (Incident, Problem RCA, CAB)
   - Presales & SOW Technical Scoping
   - Atlassian Forge & Edge Automation (Cloudflare Workers)
4. **Professional Journey Timeline**:
   - **PT iZeno Teknologi Indonesia** (Senior ITSM Consultant, 2022 — Present)
   - **PT Aplikanusa Lintasarta** (Service Desk Supervisor & Service Management Analyst, 2018 — 2022)
   - **PT Swadharma Duta Data** (NOC Support Analyst for Banking, 2017 — 2018)
5. **Interactive Case Studies Showcase**:
   - Filter tab: *All*, *ITSM & JSM*, *Cloud Migration*, *AI & Automation*, *Assets / CMDB*.
   - Modal popup arsitektur lengkap berisi:
     - Business Challenge
     - Architectural Solution & Implementation
     - Measurable Business Impact & Results
     - Tech Stack Tags
6. **Verified Credentials & Education**:
   - ITIL® 4 Specialist: Create, Deliver and Support (CDS) — PeopleCert / AXELOS
   - ITIL® 4 Foundation in IT Service Management — PeopleCert / AXELOS
   - Universitas Mercu Buana — S1 Teknik Informatika (GPA: 3.23)
7. **Dark / Light Mode Toggle**: Tersimpan otomatis di `localStorage`.
8. **Print-Friendly / ATS CV Mode**:
   - Tombol "Print ATS-Friendly Format" (atau tekan `Ctrl + P`) langsung merender layout CV bersih siap cetak/simpan PDF tanpa elemen navbar/tombol.

---

## 💻 Cara Membuka & Menjalankan

### Cara 1: Langsung Buka File di Browser
Cukup **double-click** file `index.html` di Windows Explorer (atau drag & drop ke Chrome / Edge / Firefox).

### Cara 2: Menjalankan Local Dev Server
Buka terminal di folder `F:/My CV Web`:

```bash
# Menggunakan Python
python -m http.server 3000

# Atau menggunakan npx serve
npx serve .
```
Lalu buka browser di `http://localhost:3000`.

---

## 🌐 Cara Deploy Gratis ke Internet

### Opsi A: Vercel / Netlify
1. Buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com).
2. Drag and drop folder `F:/My CV Web` langsung ke dashboard Netlify Drop / Vercel.
3. Website langsung live dengan link HTTPS gratis (misal: `adityafauziyanto.vercel.app`).

### Opsi B: GitHub Pages
1. Buat repository baru di GitHub (misal: `adityafauzii.github.io`).
2. Push seluruh file di folder ini ke repo tersebut:
   ```bash
   git init
   git add .
   git commit -m "feat: initial enterprise portfolio & CV release"
   git branch -M main
   git remote add origin https://github.com/LuckyWizardd/adityafauzii.github.io.git
   git push -u origin main
   ```
3. Aktifkan **Settings > Pages** di GitHub, pilih branch `main`.

---

## 📁 Struktur File

```
F:/My CV Web/
├── assets/
│   └── Aditya_Fauziyanto_CV.pdf   # Salinan CV PDF asli
├── index.html                     # Markup halaman utama
├── style.css                      # Custom theme, scrollbar, print stylesheet
├── script.js                      # Interaktivitas (Filter, modal case studies, dark mode, toast)
└── README.md                      # Petunjuk lengkap
```
