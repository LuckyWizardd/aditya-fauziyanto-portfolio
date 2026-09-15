import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

def set_cell_shading(cell, hex_color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def add_horizontal_rule(paragraph, hex_color="09090B", size="12"):
    pPr = paragraph._p.get_or_add_pPr()
    pBdr = parse_xml(f'<w:pBdr {nsdecls("w")}><w:bottom w:val="single" w:sz="{size}" w:space="4" w:color="{hex_color}"/></w:pBdr>')
    pPr.append(pBdr)

def build_cv_docx(output_path):
    doc = docx.Document()

    # Set page margins to 0.6 inch for professional executive density
    for section in doc.sections:
        section.top_margin = Inches(0.6)
        section.bottom_margin = Inches(0.6)
        section.left_margin = Inches(0.65)
        section.right_margin = Inches(0.65)
        section.page_width = Inches(8.27)  # A4
        section.page_height = Inches(11.69)

    COLOR_PRIMARY = RGBColor(9, 9, 11)     # #09090B
    COLOR_MUTED = RGBColor(82, 82, 91)     # #52525B
    COLOR_BODY = RGBColor(39, 39, 42)      # #27272A

    # HEADER
    p_header = doc.add_paragraph()
    p_header.paragraph_format.space_before = Pt(0)
    p_header.paragraph_format.space_after = Pt(2)
    
    r_name = p_header.add_run("ADITYA FAUZIYANTO\n")
    r_name.font.name = "Calibri"
    r_name.font.size = Pt(22)
    r_name.font.bold = True
    r_name.font.color.rgb = COLOR_PRIMARY

    r_role = p_header.add_run("Country Presales & Solutions Architecture Lead – Indonesia")
    r_role.font.name = "Calibri"
    r_role.font.size = Pt(11)
    r_role.font.bold = True
    r_role.font.color.rgb = RGBColor(63, 63, 70)

    p_contact = doc.add_paragraph()
    p_contact.paragraph_format.space_before = Pt(2)
    p_contact.paragraph_format.space_after = Pt(8)
    add_horizontal_rule(p_contact, "09090B", "12")

    r_contact = p_contact.add_run(
        "Bekasi / Jakarta Area, Indonesia  |  adityafauziyanto@gmail.com  |  +62 851 5533 3480\n"
        "LinkedIn: linkedin.com/in/adityafauzii  |  Portfolio: luckywizardd.github.io/aditya-fauziyanto-portfolio"
    )
    r_contact.font.name = "Calibri"
    r_contact.font.size = Pt(8.5)
    r_contact.font.color.rgb = COLOR_MUTED

    def add_section_heading(title, subtitle=None):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(10)
        p.paragraph_format.space_after = Pt(4)
        add_horizontal_rule(p, "E4E4E7", "6")

        r_title = p.add_run(title.upper())
        r_title.font.name = "Calibri"
        r_title.font.size = Pt(9.5)
        r_title.font.bold = True
        r_title.font.color.rgb = COLOR_PRIMARY

        if subtitle:
            r_sub = p.add_run(f"   —   {subtitle}")
            r_sub.font.name = "Calibri"
            r_sub.font.size = Pt(8)
            r_sub.font.color.rgb = COLOR_MUTED

    # 1. EXECUTIVE SUMMARY
    add_section_heading("Executive Profile", "10+ Years Enterprise Experience")
    p_summary = doc.add_paragraph()
    p_summary.paragraph_format.space_after = Pt(6)
    p_summary.paragraph_format.line_spacing = 1.15
    r_sum = p_summary.add_run(
        "High-impact Country Presales & Solutions Architecture Lead with over 10+ years of enterprise experience leading technical presales strategy, enterprise solution architecture, and mission-critical 24/7 IT operations. Proven 100% presales deal-to-delivery track record across multinational corporations, tier-1 commercial banking institutions, regional decacorn superapps, and hyperscale data centers in Southeast Asia. Deeply specialized in the Atlassian Cloud ecosystem (Jira Service Management, Atlassian Cloud Enterprise migrations, relational JSM Assets/CMDB, Forge serverless automation) and audit-ready Service Governance. Uniquely bridges commercial presales acumen and high-precision SOW sizing with 4 years of hands-on 24/7 enterprise service desk operational command."
    )
    r_sum.font.name = "Calibri"
    r_sum.font.size = Pt(9)
    r_sum.font.color.rgb = COLOR_BODY

    # 2. CORE COMPETENCIES MATRIX
    add_section_heading("Core Competencies & Technical Architecture")
    competencies = [
        ("Technical Presales & Bidding:", "C-Level Discovery, Commercial RFP/RFI Defense, High-Precision SOW & Man-Day Sizing, Solution GAP Analysis, Live POC Demonstrations."),
        ("Enterprise ITSM & JSM Architecture:", "Jira Service Management Cloud/DC, Multi-Tier SLAs, Dynamic Request Catalogs, Multi-Tenant Architecture, Approval Matrices."),
        ("Service Governance & Compliance:", "Major Incident Command, Root Cause Analysis (RCA), Change Advisory Board (CAB), UU PDP Data Privacy Compliance, SLA Auditing."),
        ("Atlassian Cloud Migration:", "Server/DC to Cloud Enterprise (JCMA), Zero-Downtime Weekend Cutovers, ScriptRunner Groovy-to-REST Cloud Refactoring, Atlassian Guard SSO/SCIM."),
        ("Living CMDB & ITAM Architecture:", "Relational JSM Assets Schema Design, Blast-Radius Incident Mapping, Device42 Hybrid Auto-Discovery Grid, Multi-Source Reconciliation."),
        ("Edge Automation & Development:", "Atlassian Forge Cloud Apps, Cloudflare Serverless Workers, REST API Pipelines, SAP S/4HANA & SuccessFactors Integrations, Microsoft Sentinel.")
    ]
    for comp_title, comp_desc in competencies:
        p_comp = doc.add_paragraph()
        p_comp.paragraph_format.space_before = Pt(0)
        p_comp.paragraph_format.space_after = Pt(2)
        p_comp.paragraph_format.left_indent = Inches(0.15)
        
        r1 = p_comp.add_run(f"•  {comp_title} ")
        r1.font.name = "Calibri"
        r1.font.size = Pt(8.5)
        r1.font.bold = True
        r1.font.color.rgb = COLOR_PRIMARY

        r2 = p_comp.add_run(comp_desc)
        r2.font.name = "Calibri"
        r2.font.size = Pt(8.5)
        r2.font.color.rgb = COLOR_MUTED

    # 3. PROFESSIONAL EXPERIENCE
    add_section_heading("Professional Experience")

    experiences = [
        {
            "role": "Country Presales & Solutions Architecture Lead – Indonesia",
            "company": "PT iZeno Teknologi Indonesia",
            "date": "2022 — Present",
            "location": "Jakarta / Hybrid",
            "summary": "Leading the Indonesia technical practice, driving country-level presales strategy, deal scoping, SOW man-day sizing, enterprise ITSM/CMDB architecture, and cloud cutover delivery for multinational clients.",
            "bullets": [
                ("Country-Level Presales & RFP Defense:", "Directed technical presales solutioning and C-level discovery sessions across enterprise accounts; authored winning technical proposals, RFP/RFI responses, and high-accuracy SOW man-day estimations that secured multi-billion-IDR enterprise mandates."),
                ("Enterprise ITSM & Living CMDB Architecture:", "Architected large-scale Jira Service Management (JSM) platforms, bespoke JSM Assets (CMDB) object schemas, multi-tier SLA matrices, and hierarchical approval workflows for regional decacorn superapps, tier-1 commercial banks, pan-Asian hyperscale data centers, and petrochemical groups."),
                ("Operational-Grade Cloud Migration:", "Leveraged deep operational background to engineer zero-loss, zero-downtime migration pipelines from on-premises Jira Server/DC to Atlassian Cloud Enterprise, including a massive 345,000+ ticket migration and 50 man-days of ScriptRunner Groovy-to-REST Cloud modernization."),
                ("Enterprise Service Governance & Regulatory Compliance:", "Designed audit-ready Change Advisory Board (CAB) workflows, regulatory PII data masking engines satisfying statutory Indonesian UU PDP privacy laws, and multi-calendar SLA frameworks that satisfied rigorous central banking audits."),
                ("Practice Mentorship & Technical Steering:", "Guided cross-functional delivery consultants and engineering squads, maintaining implementation excellence, delivery methodology, and high-trust executive stakeholder alignment.")
            ]
        },
        {
            "role": "Service Desk Supervisor & Service Management Analyst",
            "company": "PT Aplikanusa Lintasarta (Enterprise ICT & Telco Backbone Provider)",
            "date": "2018 — 2022",
            "location": "Jakarta, Indonesia",
            "summary": "Spearheaded 24/7 mission-critical IT & telecommunications operations serving tier-1 banking, nationwide enterprise telco backbones, and corporate clients. Directed front-line operational governance, major incident command, and multi-tier SLA compliance.",
            "bullets": [
                ("24/7 Operations Command & Team Leadership:", "Directly supervised and mentored a front-line operational force of 8 Service Desk Analysts operating in a continuous 24/7/365 shift rotation, maintaining >98% enterprise client satisfaction and flawless contractual SLA compliance across mission-critical networks."),
                ("Major Incident Commander (P1/P2):", "Served as primary Incident Commander during high-severity network outages, coordinating rapid cross-functional escalations between field engineering, network operations (NOC), third-party carriers, and enterprise client stakeholders to drastically minimize service downtime."),
                ("Problem Management & Deep RCA:", "Spearheaded formal Problem Management frameworks and Root Cause Analysis (RCA) playbooks for unresolved and recurring incidents; facilitated Post-Incident Reviews (PIR) that reduced chronic infrastructure failure recurrence by 35%."),
                ("Operational KPI Benchmarking & Governance:", "Formulated, monitored, and audited core operational metrics (First Contact Resolution / FCR, Mean Time to Detect / MTTD, MTTR), enforcing proactive SLA breach prevention protocols and executive reporting dashboards."),
                ("ITSM Tooling Optimization (ServiceDesk Plus):", "Administered and re-engineered enterprise ITSM platform configurations (ManageEngine ServiceDesk Plus), redesigning approval chains, incident dispatch logic, and change control workflows to align with international enterprise service governance standards.")
            ]
        },
        {
            "role": "Network Operation Center (NOC) Support Analyst",
            "company": "PT Swadharma Duta Data (Financial & Banking IT Services)",
            "date": "2017 — 2018",
            "location": "Jakarta, Indonesia",
            "summary": "Provided real-time 24/7 Tier-1 technical monitoring and incident containment for mission-critical core banking and inter-bank financial transaction networks.",
            "bullets": [
                ("24/7 Mission-Critical Financial Surveillance:", "Executed continuous real-time surveillance across mission-critical banking infrastructure, ATM switching networks, and core financial transaction systems under strict contractual banking SLAs."),
                ("Rapid Incident Triage & Escalation:", "Diagnosed link degradations and hardware faults in real time, executing rapid first-level containment and coordinating seamless handoffs with Tier-2 infrastructure and telecom provider engineers."),
                ("Knowledge Base & SOP Standardization:", "Authored standard operating procedures (SOPs) and disaster recovery runbooks within the central banking NOC repository, accelerating shift onboarding and incident resolution velocity.")
            ]
        },
        {
            "role": "Enterprise Network Field Engineer",
            "company": "Sab'a System Solution (Vendor Partner for Indosat Ooredoo)",
            "date": "2015 — 2017",
            "location": "Greater Jakarta / On-Site",
            "summary": "Spearheaded on-site deployment, physical installation, and commissioning of enterprise network infrastructure across corporate client sites for Indosat's B2B enterprise telecommunications division.",
            "bullets": [
                ("Enterprise On-Site Deployment:", "Executed rack-and-stack installations, patch panel cabling, router/switch hardware commissioning, and CPE configuration across enterprise corporate client premises."),
                ("Site Survey & Physical Testing:", "Conducted technical site surveys, physical layer loopback testing, signal attenuation verification, and link stability validations for high-bandwidth leased lines and enterprise MPLS WAN connectivity."),
                ("Cutover & Handover Management:", "Coordinated cutover windows and user acceptance testing (UAT) directly with client IT managers and Indosat network operations, ensuring seamless handovers, zero schedule slippage, and formal acceptance reports (BAST).")
            ]
        }
    ]

    for exp in experiences:
        p_role = doc.add_paragraph()
        p_role.paragraph_format.space_before = Pt(6)
        p_role.paragraph_format.space_after = Pt(1)

        r_rtitle = p_role.add_run(exp["role"])
        r_rtitle.font.name = "Calibri"
        r_rtitle.font.size = Pt(10)
        r_rtitle.font.bold = True
        r_rtitle.font.color.rgb = COLOR_PRIMARY

        r_rdate = p_role.add_run(f"    ({exp['date']})")
        r_rdate.font.name = "Calibri"
        r_rdate.font.size = Pt(8.5)
        r_rdate.font.color.rgb = COLOR_MUTED

        p_sub = doc.add_paragraph()
        p_sub.paragraph_format.space_before = Pt(0)
        p_sub.paragraph_format.space_after = Pt(2)
        r_comp = p_sub.add_run(f"{exp['company']}  •  {exp['location']}")
        r_comp.font.name = "Calibri"
        r_comp.font.size = Pt(8.5)
        r_comp.font.bold = True
        r_comp.font.color.rgb = RGBColor(63, 63, 70)

        p_desc = doc.add_paragraph()
        p_desc.paragraph_format.space_before = Pt(0)
        p_desc.paragraph_format.space_after = Pt(3)
        r_desc = p_desc.add_run(exp["summary"])
        r_desc.font.name = "Calibri"
        r_desc.font.size = Pt(8.5)
        r_desc.font.italic = True
        r_desc.font.color.rgb = COLOR_MUTED

        for b_title, b_desc in exp["bullets"]:
            p_b = doc.add_paragraph()
            p_b.paragraph_format.space_before = Pt(0)
            p_b.paragraph_format.space_after = Pt(2)
            p_b.paragraph_format.left_indent = Inches(0.18)
            p_b.paragraph_format.line_spacing = 1.15

            rb1 = p_b.add_run(f"•  {b_title} ")
            rb1.font.name = "Calibri"
            rb1.font.size = Pt(8.5)
            rb1.font.bold = True
            rb1.font.color.rgb = COLOR_PRIMARY

            rb2 = p_b.add_run(b_desc)
            rb2.font.name = "Calibri"
            rb2.font.size = Pt(8.5)
            rb2.font.color.rgb = COLOR_BODY

    # 4. KEY ENTERPRISE DEALS & PORTFOLIO TRACK RECORD
    add_section_heading("Selected Enterprise Track Record", "100% Won via Presales & Delivered")
    
    table = doc.add_table(rows=1, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False

    col_widths = [Inches(1.8), Inches(2.2), Inches(3.0)]

    hdr_cells = table.rows[0].cells
    hdr_titles = ["Client & Project", "Presales & Architectural Strategy", "Outcome & Business Impact"]
    for i, title in enumerate(hdr_titles):
        hdr_cells[i].width = col_widths[i]
        set_cell_shading(hdr_cells[i], "F4F4F5")
        set_cell_margins(hdr_cells[i], top=100, bottom=100, left=120, right=120)
        p = hdr_cells[i].paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(title.upper())
        r.font.name = "Calibri"
        r.font.size = Pt(7.5)
        r.font.bold = True
        r.font.color.rgb = COLOR_PRIMARY

    deals = [
        ("Regional Tech Decacorn Superapp\nSalesforce to JSM Cloud", "Led presales discovery against legacy tools; authored SOW with phased sizing; architected Datahub ETL pipelines.", "Migrated 345,000+ historical tickets with zero data loss; streamlined 205 legacy forms down to 47 dynamic JSM forms (-75% sprawl)."),
        ("Pan-Asian Hyperscale Data Centers\nMission-Critical ITSM & JSM Assets", "Won international tender by defending live CMDB dependency mapping linking EUC/servers/networks to CAB change control.", "Automated change collision prevention across 99.999% uptime Tier-3/Tier-4 hyperscale facilities; 100% audit-compliant records."),
        ("State-Owned Microfinance BUMN\nITSM Portal & ScriptRunner PII Engine", "Spearheaded technical bid addressing statutory Indonesian UU PDP data privacy laws via automated in-flight PII masking.", "100% statutory PII data privacy compliance; resolved nationwide branch SLA bottlenecks and orphaned account sprawl."),
        ("Leading Commercial Bank\nCore Banking ITSM & SAP Integration", "Formulated unified architecture consolidating 5 ticketing silos; integrated SAP S/4HANA master data for dynamic CCB approvals.", "Unified 5 disparate operational silos into single pane; achieved 100% central banking audit readiness."),
        ("Regional Automotive Mobility Giant\nFreshservice & Device42 Hybrid CMDB", "Won tech refresh RFP via live proof-of-concept integrating Freshservice Enterprise with on-premise Device42 auto-discovery grid.", "Continuous living CMDB tracking 4,000+ hardware and network nodes; achieved ~35% Tier-1 ticket deflection via Freddy AI.")
    ]

    for row_idx, (client, strategy, impact) in enumerate(deals):
        row_cells = table.add_row().cells
        bg_color = "FAFAFA" if row_idx % 2 == 1 else "FFFFFF"
        for i, val in enumerate([client, strategy, impact]):
            row_cells[i].width = col_widths[i]
            set_cell_shading(row_cells[i], bg_color)
            set_cell_margins(row_cells[i], top=80, bottom=80, left=120, right=120)
            p = row_cells[i].paragraphs[0]
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            r = p.add_run(val)
            r.font.name = "Calibri"
            r.font.size = Pt(8)
            r.font.color.rgb = COLOR_BODY

    # 5. CERTIFICATIONS & EDUCATION
    add_section_heading("Certifications & Education")
    
    cert_edu_table = doc.add_table(rows=1, cols=2)
    cert_edu_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cert_edu_table.autofit = False
    
    c_cells = cert_edu_table.rows[0].cells
    c_cells[0].width = Inches(4.0)
    c_cells[1].width = Inches(3.0)

    # Left: Certs
    p_cert_title = c_cells[0].paragraphs[0]
    p_cert_title.paragraph_format.space_before = Pt(0)
    p_cert_title.paragraph_format.space_after = Pt(2)
    rc1 = p_cert_title.add_run("ITIL® 4 Specialist: Create, Deliver and Support (CDS)\n")
    rc1.font.name = "Calibri"
    rc1.font.size = Pt(8.5)
    rc1.font.bold = True
    rc1.font.color.rgb = COLOR_PRIMARY
    rc2 = p_cert_title.add_run("PeopleCert / AXELOS — Advanced Value Streams & Service Integration\n\n")
    rc2.font.name = "Calibri"
    rc2.font.size = Pt(8)
    rc2.font.color.rgb = COLOR_MUTED

    rc3 = p_cert_title.add_run("ITIL® 4 Foundation in IT Service Management\n")
    rc3.font.name = "Calibri"
    rc3.font.size = Pt(8.5)
    rc3.font.bold = True
    rc3.font.color.rgb = COLOR_PRIMARY
    rc4 = p_cert_title.add_run("PeopleCert / AXELOS — Service Value System & 34 Management Practices")
    rc4.font.name = "Calibri"
    rc4.font.size = Pt(8)
    rc4.font.color.rgb = COLOR_MUTED

    # Right: Education
    p_edu = c_cells[1].paragraphs[0]
    p_edu.paragraph_format.space_before = Pt(0)
    p_edu.paragraph_format.space_after = Pt(2)
    re1 = p_edu.add_run("Bachelor of Computer Science (S1 Teknik Informatika)\n")
    re1.font.name = "Calibri"
    re1.font.size = Pt(8.5)
    re1.font.bold = True
    re1.font.color.rgb = COLOR_PRIMARY
    re2 = p_edu.add_run("Universitas Mercu Buana (2016 — 2021)  |  GPA: 3.23 / 4.00\n")
    re2.font.name = "Calibri"
    re2.font.size = Pt(8)
    re2.font.color.rgb = COLOR_MUTED
    re3 = p_edu.add_run("Focus: Software Engineering, Database Systems, Computer Networks & Systems Architecture")
    re3.font.name = "Calibri"
    re3.font.size = Pt(7.5)
    re3.font.color.rgb = COLOR_MUTED

    doc.save(output_path)
    print(f"Word CV generated successfully at {output_path}!")

if __name__ == "__main__":
    build_cv_docx("assets/Aditya_Fauziyanto_CV.docx")
