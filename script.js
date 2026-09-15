/**
 * Interactive Script for Aditya Fauziyanto Portfolio & CV
 * Country Presales & Solutions Architecture Lead – Indonesia
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup components
  initThemeToggle();
  initMobileMenu();
  initScrollProgress();
  initProjectsFilter();
  initProjectModal();
  initClipboardToast();
});

/* -------------------------------------------------------------------------- */
/*  1. THEME SWITCHER (Dark / Light Mode)                                      */
/* -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const html = document.documentElement;

  // Determine current theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'light') {
    html.classList.remove('dark');
  } else {
    // Default to dark mode for modern executive aesthetic
    html.classList.add('dark');
  }

  updateThemeIcons();

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = html.classList.contains('dark');
      if (isDark) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateThemeIcons();
    });
  });

  function updateThemeIcons() {
    const isDark = html.classList.contains('dark');
    document.querySelectorAll('.theme-icon-sun').forEach(el => {
      el.classList.toggle('hidden', !isDark);
    });
    document.querySelectorAll('.theme-icon-moon').forEach(el => {
      el.classList.toggle('hidden', isDark);
    });
    if (window.lucide) window.lucide.createIcons();
  }
}

/* -------------------------------------------------------------------------- */
/*  2. MOBILE NAVIGATION MENU                                                 */
/* -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (!mobileBtn || !mobileMenu) return;

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/* -------------------------------------------------------------------------- */
/*  3. SCROLL PROGRESS BAR & ACTIVE NAV HIGHLIGHT                             */
/* -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Progress Bar
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + '%';

    // Active Section Spy
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (winScroll >= sectionTop && winScroll < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-500', 'font-semibold');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('text-blue-500', 'font-semibold');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/*  4. DETAILED PROJECT CASE STUDIES DATA                                     */
/* -------------------------------------------------------------------------- */
const caseStudies = {
  "superapp-salesforce-migration": {
    "title": "345,000+ Ticket Migration: Salesforce Service Cloud to JSM Cloud",
    "client": "Southeast Asian Decacorn Superapp & Tech Ecosystem",
    "role": "Presales Solutions Architect & Migration Lead",
    "timeline": "Multi-Quarter Enterprise Cutover",
    "category": "ITSM Modernization & Cloud Migration",
    "badgeColor": "blue",
    "presalesScope": "Led the competitive presales discovery against legacy incumbent tools, quantified total cost of ownership (TCO) savings, and authored the comprehensive SOW with phased man-day sizing that won the multi-quarter enterprise contract.",
    "summary": "Spearheaded the massive transformation and migration of 345,000+ historical support tickets, cross-functional business units, and multi-department workflows from Salesforce Service Cloud to Jira Service Management Cloud.",
    "challenge": [
      "Disparate departmental silos across IT Finance, Workplace Management, Corporate Affairs, and People Operations running fragmented ticketing tools.",
      "Sprawling complexity of 205 legacy Salesforce forms and disconnected Asana boards hindering user adoption and cross-team coordination.",
      "High-risk data migration involving 345,000+ tickets, large binary attachments, historical metadata, and complex role permissions under stringent daily API rate constraints."
    ],
    "solution": [
      "Formulated comprehensive data conversion specifications, data mapping dictionaries, and resilient batch ETL pipelines to extract and ingest 345k+ tickets with zero data loss.",
      "Rationalized and re-architected 205 bloated Salesforce forms down into ~47 dynamic, conditional JSM forms spanning Service Requests and Incident Management.",
      "Engineered bi-directional integration with internal enterprise Datahub for automated managerial approval routing and employee hierarchy validation.",
      "Integrated Slack ChatOps with JSM webhooks for real-time notification dispatch, instant triage, and automated stakeholder updates.",
      "Simulated and configured conditional email-to-case processing for Employee Onboarding, Offboarding, and Transfers across People Operations."
    ],
    "impact": [
      "Successfully migrated 345,000+ historical tickets and attachments with complete audit fidelity and zero unplanned downtime.",
      "Streamlined the service catalog by over 75% (from 205 legacy forms to ~47 dynamic JSM forms), dramatically accelerating user request completion.",
      "Standardized cross-department service delivery across 5 major business directorates on a unified Atlassian Cloud platform."
    ],
    "tags": [
      "Jira Service Management Cloud",
      "Salesforce Service Cloud Migration",
      "Mass Data Migration (345k+)",
      "Enterprise Datahub",
      "Slack ChatOps",
      "Form Rationalization"
    ]
  },
  "superapp-cloud-modernization": {
    "title": "Enterprise Jira Server to Cloud Migration & ScriptRunner Modernization",
    "client": "Leading Regional Superapp & Mobility-Fintech Decacorn",
    "role": "Presales Solutions Architect & Cloud Modernization Lead",
    "timeline": "Strategic Cloud Cutover",
    "category": "Cloud Architecture & Governance",
    "badgeColor": "sky",
    "presalesScope": "Conducted deep-dive technical discovery and pre-sales architecture defense before C-level leadership, presenting the multi-stage migration strategy and ScriptRunner cloud modernization roadmap that secured project authorization.",
    "summary": "Architected the zero-downtime migration of massive on-premise Jira Software & Confluence Server instances from private cloud infrastructure to Atlassian Cloud Enterprise.",
    "challenge": [
      "Heavy enterprise reliance on legacy on-premise Jira Server and Confluence instances with hundreds of customized workflows, custom fields, and complex permission schemes.",
      "Dozens of mission-critical Server add-ons lacking direct cloud migration pathways, specifically deep ScriptRunner Groovy customizations and automated transition listeners.",
      "Strict continuous-delivery operational environment where downtime directly disrupted engineering squads and corporate operations."
    ],
    "solution": [
      "Designed and executed a disciplined multi-stage migration framework: Discovery & Inventory Audit -> Small-Scale Staging Trial -> SIT -> Full-Scale Trial -> UAT & Defect Remediation -> Production Cutover.",
      "Re-engineered legacy Server Groovy scripts into modern Atlassian Cloud REST API-compliant scripts and webhooks using Adaptavist ScriptRunner Cloud (50 man-days dedicated engineering).",
      "Decommissioned obsolete server-only plugins (e.g. Create on Transition, CLI, JQL Tricks) by modernizing them into native Atlassian Cloud Automation rules.",
      "Migrated and re-integrated critical third-party app ecosystems including qTest Test Management, Checklist for Jira, Draw.io, and Confluence Google Drive integrations.",
      "Configured Atlassian Guard (Access) for enterprise-wide SAML 2.0 Single Sign-On (SSO) and automated SCIM identity provisioning."
    ],
    "impact": [
      "Delivered seamless production cutover to Atlassian Cloud Enterprise with zero data loss across engineering and business units.",
      "Retired vulnerable on-premise infrastructure, eliminating hardware maintenance, OS patching, and private cloud hosting overheads.",
      "Modernized 50+ custom workflow automations into cloud-native execution with high maintainability."
    ],
    "tags": [
      "Atlassian Cloud Enterprise",
      "Jira Software Cloud",
      "Confluence Cloud",
      "ScriptRunner Cloud",
      "Atlassian Guard (SSO/SCIM)",
      "qTest Integration"
    ]
  },
  "microfinance-itsm-pii": {
    "title": "Enterprise Service Portal Refactoring, SLA Matrix & PII Masking Engine",
    "client": "National State-Owned Microfinance & Financial Enterprise (BUMN)",
    "role": "Presales Solutions Architect & Enterprise Platform Engineer",
    "timeline": "Enterprise Enhancement & Hardening (Jan – Jul 2026)",
    "category": "Enterprise ITSM & Data Privacy",
    "badgeColor": "indigo",
    "presalesScope": "Spearheaded the technical proposal and regulatory governance alignment addressing statutory Indonesian personal data protection (UU PDP), designing the automated PII masking blueprint that won the state-owned enterprise mandate.",
    "summary": "Overhauled the national microfinance institution flagship internal service portal, refactoring monolithic architectures, optimizing multi-tiered SLAs, and engineering an automated ScriptRunner PII masking engine.",
    "challenge": [
      "The existing internal enterprise service portal suffered from monolithic project bloat, convoluted request forms, and poor SLA compliance across thousands of nationwide branch offices.",
      "Strict regulatory compliance and personal data privacy mandates (UU PDP) requiring automated masking of sensitive customer and financial Personally Identifiable Information (PII) in support tickets.",
      "Unmanaged user accounts and lack of domain governance inside Atlassian Admin Hub leading to license sprawl and security risks."
    ],
    "solution": [
      "Refactored the monolithic ITSM architecture into modular, domain-driven service projects with simplified dynamic request forms and clear routing queues.",
      "Re-engineered SLA matrices and workflows, establishing precise operational calendars and escalation timers aligned with financial service standards.",
      "Engineered an automated PII Data Protection Engine using ScriptRunner: 4 real-time event-based listeners and 1 scheduled cron job to detect, sanitize, and mask sensitive PII (NIK, account numbers, card details) in real time.",
      "Hardened Atlassian Admin Hub: automated onboarding/offboarding pipelines, user lifecycle housekeeping, and automated project role RBAC assignments.",
      "Integrated Jira Service Management with Confluence Knowledge Base for automated article recommendations to deflect repetitive branch inquiries."
    ],
    "impact": [
      "Achieved 100% compliance with corporate and statutory PII data privacy mandates across all support channels.",
      "Increased branch user portal satisfaction and cut average ticket submission and processing latency.",
      "Streamlined identity governance and eliminated orphaned accounts across the nationwide organization."
    ],
    "tags": [
      "Jira Service Management",
      "ScriptRunner Cloud",
      "PII Data Protection & Masking",
      "Admin Hub Governance",
      "SLA Matrix",
      "Confluence Knowledge Base"
    ]
  },
  "datacenter-mission-critical-itsm": {
    "title": "Mission-Critical Hyperscale Data Center ITSM & JSM Assets (CMDB)",
    "client": "Pan-Asian Hyperscale Tier-3 & Tier-4 Data Center Operator",
    "role": "Presales Solutions Architect & Living CMDB Designer",
    "timeline": "Full Lifecycle Implementation & UAT",
    "category": "Asset Management & Mission-Critical ITSM",
    "badgeColor": "emerald",
    "presalesScope": "Won the competitive international tender by defending an enterprise architecture that mapped physical data center infrastructure (racks, servers, switches) directly to CAB change risk scoring for 99.999% uptime facilities.",
    "summary": "Designed an enterprise IT Service Management and IT Asset Management (CMDB) architecture for a premier hyperscale data center provider operating mission-critical facilities across the Asia-Pacific.",
    "challenge": [
      "Operating hyperscale data centers supporting global tech giants requires 99.999% uptime, zero tolerance for uncoordinated changes, and rigorous audit trails.",
      "Fragmented operational ticketing between IT infrastructure, procurement, and facility service requests.",
      "Lack of an authoritative CMDB connecting physical data center assets (racks, servers, switches, EUC) directly to active incident and change tickets."
    ],
    "solution": [
      "Architected full-spectrum enterprise service governance platform on JSM Cloud SaaS encompassing Incident, Change, Problem, and Procurement Service Management.",
      "Structured comprehensive JSM Assets (CMDB) data models: designed object schemas for End-User Compute (EUC), Physical Servers, and Network Infrastructure.",
      "Linked CMDB configuration items dynamically into Change Request tickets to enable automated blast-radius impact analysis for the Change Advisory Board (CAB).",
      "Formulated rigorous Change Management workflows with multi-stakeholder authorization gates and automated freeze-window alerts.",
      "Built executive operational dashboards tracking SLA burn rates, incident MTTR, and procurement cycle turnaround times."
    ],
    "impact": [
      "Established a unified single-pane-of-glass service portal for corporate IT, facility operations, and hardware procurement.",
      "Mitigated change collision risks across mission-critical data center infrastructure through automated CMDB linkage.",
      "Delivered 100% auditable change records compliant with international data center operational standards."
    ],
    "tags": [
      "Jira Service Management Cloud",
      "JSM Assets (CMDB)",
      "Hyperscale Infrastructure",
      "CAB Change Enablement",
      "Procurement Workflows"
    ]
  },
  "commercial-banking-itsm": {
    "title": "Core Banking ITSM Consolidation & SAP S/4HANA Master Data Integration",
    "client": "Leading Commercial & Digital Banking Institution",
    "role": "Presales Solutions Architect & Banking Governance Lead",
    "timeline": "Enterprise Banking Modernization",
    "category": "Core Banking ITSM & ERP Integration",
    "badgeColor": "amber",
    "presalesScope": "Led presales discovery sessions and technical proposal modeling, architecting dynamic SAP S/4HANA ERP master data synchronization that solved strict financial regulatory audit compliance.",
    "summary": "Consolidated siloed banking service workflows into a unified Jira Service Management platform integrated with SAP S/4HANA employee master data and audit-ready governance.",
    "challenge": [
      "Bank operated fragmented, isolated workflows across Incident Management, Problem Management, Engineering, Release Deployment, and Change Control Board (CCB) submissions.",
      "Crippled SLA visibility, inefficient cross-team handoffs, and severe governance blindspots during regulatory banking IT audits.",
      "Inability to sync live employee hierarchy and cost center structures into approval chains from the bank core ERP system."
    ],
    "solution": [
      "Formulated a unified ITSM architecture bringing Incident, Problem, Change, and Engineering escalation pipelines into an integrated JSM framework.",
      "Built automated enterprise data ingestion pipelines synchronizing employee and organizational master data from SAP S/4HANA into JSM Assets.",
      "Designed standardized CCB review workflows with automated risk-scoring, mandatory compliance checklists, and auditable approval sign-offs.",
      "Integrated Confluence Knowledge Base with contextual self-service deflection to accelerate First Call Resolution (FCR) for branch personnel."
    ],
    "impact": [
      "Replaced 5 disparate legacy ticketing silos with a single cohesive enterprise service management platform.",
      "Achieved 100% compliance with strict central bank IT audit requirements for change governance and incident tracking.",
      "Slashed internal approval turnaround times by automating organizational hierarchy lookups via SAP master data."
    ],
    "tags": [
      "Jira Service Management",
      "SAP S/4HANA Integration",
      "JSM Assets (CMDB)",
      "Change Control Board (CCB)",
      "Banking IT Governance"
    ]
  },
  "broadcasting-media-itsm": {
    "title": "Unified ITSM/CMDB Architecture & Multi-System ITOM Integration",
    "client": "National Media Network & Broadcasting Conglomerate",
    "role": "Presales Solutions Architect & Systems Integration Lead",
    "timeline": "Broadcaster Infrastructure Modernization",
    "category": "Media ITSM & Hybrid ITOM Discovery",
    "badgeColor": "purple",
    "presalesScope": "Formulated the winning presales solution architecture interconnecting broadcast technology (HCL BigFix, Intune) with SAP Solution Manager, proving seamless change control during high-visibility live broadcasts.",
    "summary": "Delivered an enterprise-grade ITSM and living CMDB solution for the national broadcaster, interconnecting JSM Cloud with SAP SolMan, Signavio, BigFix, and Microsoft Intune.",
    "challenge": [
      "Complex media production, broadcasting infrastructure, and enterprise IT operated in silos across multiple management and monitoring tools.",
      "Disconnected asset records spread across Microsoft Intune (cloud endpoints) and HCL BigFix (production workstations & broadcast servers).",
      "Need for seamless process alignment between IT change workflows and enterprise business process modeling in SAP Solution Manager and SAP Signavio."
    ],
    "solution": [
      "Architected end-to-end enterprise service governance and ITSM platform on JSM Cloud, Confluence, and Atlassian Guard.",
      "Engineered multi-source CMDB synchronization linking JSM Assets with Microsoft Intune and HCL BigFix for continuous automated inventory reconciliation.",
      "Developed bi-directional process integrations interconnecting SAP Solution Manager and SAP Signavio with JSM Change and Release management.",
      "Deployed centralized customer self-service portals with tailored service catalogs for digital newsrooms, broadcast studios, and corporate staff."
    ],
    "impact": [
      "Established a unified Configuration Management Database (CMDB) bridging broadcast technology and corporate IT assets.",
      "Accelerated incident resolution during live production broadcasts by providing instant configuration context to support engineers.",
      "Enforced enterprise-wide identity governance and single sign-on across thousands of media professionals."
    ],
    "tags": [
      "Jira Service Management Cloud",
      "JSM Assets (CMDB)",
      "Microsoft Intune",
      "HCL BigFix",
      "SAP SolMan & Signavio",
      "Atlassian Guard"
    ]
  },
  "petrochemical-multitenant-itsm": {
    "title": "Cross-Border Multi-Tenant ITSM & SAP SuccessFactors HR Integration",
    "client": "Leading Southeast Asian Petrochemical & Energy Group",
    "role": "Presales Solutions Architect & Multi-Tenant Lead",
    "timeline": "Dual-Entity International Rollout",
    "category": "Multi-Tenant Enterprise ITSM & JSM Assets",
    "badgeColor": "blue",
    "presalesScope": "Crafted the cross-border dual-entity architecture (Indonesia manufacturing plant + Singapore regional HQ) during pre-sales workshops, overcoming complex multi-currency, data segregation, and SAP SuccessFactors sync challenges.",
    "summary": "Architected and deployed a multi-tenant Atlassian Cloud ITSM and CMDB ecosystem spanning chemical manufacturing plants in Indonesia and international corporate HQ in Singapore.",
    "challenge": [
      "Dual-entity organizational structure requiring synchronized yet segregated ITSM environments for manufacturing plants in Indonesia and commercial operations in Singapore.",
      "Disparate employee data requiring real-time synchronization from SAP SuccessFactors to ensure accurate multi-level managerial approval hierarchies.",
      "Need to coordinate change management and operational handoffs with external global managed service providers."
    ],
    "solution": [
      "Designed multi-tenant architecture on JSM Cloud Premium across two distinct sites with standardized enterprise service governance workflows for Request, Incident, Change, and Problem Management.",
      "Engineered 5 distinct JSM Assets schemas (2 for Indonesian plant facilities, 3 for Singapore regional HQ) modeling plant equipment, corporate IT, and software licenses.",
      "Integrated OnLink connector to synchronize employee identities, department codes, and approval reporting lines dynamically from SAP SuccessFactors into JSM Assets.",
      "Formulated standardized operational handoff protocols and shared escalation paths with global managed service partners.",
      "Enforced corporate identity and access policies across both tenants via Atlassian Guard Standard."
    ],
    "impact": [
      "Successfully deployed standardized ITSM across two distinct international business entities on schedule and budget.",
      "Eliminated manual user provisioning by synchronizing employee hierarchies directly from SAP SuccessFactors.",
      "Reduced change lead times and enhanced operational safety across heavy petrochemical manufacturing facilities."
    ],
    "tags": [
      "Jira Service Management Cloud Premium",
      "JSM Assets (CMDB)",
      "SAP SuccessFactors (OnLink)",
      "Multi-Tenant Architecture",
      "Atlassian Guard"
    ]
  },
  "automotive-freshservice-device42": {
    "title": "Enterprise ITSM Tech Refresh & Device42 Hybrid Living CMDB Auto-Discovery",
    "client": "Regional Automotive Distribution & Luxury Mobility Giant",
    "role": "Presales Solutions Architect & CMDB Infrastructure Lead",
    "timeline": "Enterprise Tech Refresh (Aug – Dec 2026)",
    "category": "IT Asset Management & Living CMDB",
    "badgeColor": "emerald",
    "presalesScope": "Spearheaded technical RFP response and engineered a live discovery Proof-of-Concept (POC) combining Freshservice with Device42, proving automated inventory tracking across 4,000+ distributed dealership nodes to win the contract.",
    "summary": "Architected a modern ITSM and automated ITAM ecosystem across regional automotive dealerships, integrating Freshservice Enterprise with an on-premise Device42 auto-discovery grid.",
    "challenge": [
      "Legacy on-premise ticketing system lacked real-time visibility into distributed dealership showrooms, service centers, and corporate data centers.",
      "4,000+ unmapped IT assets and server nodes requiring continuous discovery without manual spreadsheet inventory audits.",
      "High volume of routine L1 user inquiries overburdening service desk engineers."
    ],
    "solution": [
      "Architected Freshservice Enterprise replacement with Freddy Copilot AI for automated L1 ticket deflection and conversational self-service.",
      "Deployed an on-premise Device42 auto-discovery architecture: 1x Main Virtual Appliance, distributed Remote Collectors per network segment, and Windows Discovery Services (WDS) for agentless deep-probing.",
      "Built automated sync pipelines reconciling Device42 discovery data into Freshservice ITAM CMDB, maintaining an accurate, living configuration graph for 4,000+ assets.",
      "Integrated Azure Active Directory (SSO/SCIM), Microsoft Teams ChatOps for incident alerts, Workday HR, and SolarWinds infrastructure monitoring."
    ],
    "impact": [
      "Automated configuration tracking across 4,000+ hardware and network assets with zero manual data entry.",
      "Achieved ~35% deflection of repetitive Tier-1 service desk tickets through AI-assisted self-service.",
      "Drastically accelerated MTTR by providing technicians with instant topology and dependency maps during outages."
    ],
    "tags": [
      "Freshservice Enterprise",
      "Device42 Auto-Discovery",
      "Living CMDB (4k+ Assets)",
      "Freddy AI Copilot",
      "Microsoft Teams ChatOps",
      "SolarWinds"
    ]
  },
  "maritime-logistics-secops-itsm": {
    "title": "Global Maritime ITSM Modernization & Microsoft Sentinel SecOps Integration",
    "client": "Global Maritime & Shipping Logistics Corporation (100+ Ports)",
    "role": "Presales Solutions Architect & SecOps Integration Specialist",
    "timeline": "Phased Global Deployment",
    "category": "Global ITSM & SecOps SIEM Integration",
    "badgeColor": "sky",
    "presalesScope": "Led the technical presales defense demonstrating how automated Microsoft Sentinel SIEM incident dispatch into JSM Cloud Premium would enforce 24/7 global maritime compliance across 100+ port agencies worldwide.",
    "summary": "Led the phased implementation of Jira Service Management Cloud Premium and JSM Assets across 100+ shipping agency offices, integrating with Microsoft Sentinel SIEM for automated SecOps alerting.",
    "challenge": [
      "Global maritime operations spanning 100+ port offices requiring 24/7 continuous support, rigid maritime compliance, and cross-timezone incident escalation.",
      "Disconnected cybersecurity monitoring: security alerts from Microsoft Sentinel had to be manually transferred to IT for investigation and response.",
      "Disjointed collaboration between IT support, infrastructure teams, and DevOps squads managing maritime logistics applications."
    ],
    "solution": [
      "Deployed Jira Service Management Cloud Premium (50 Agents, 24/7 Global Portal, On-Call Scheduling & Alerting).",
      "Implemented comprehensive enterprise service governance practices: Incident, Service Request, Change, Release, and Problem Management linked to structured JSM Assets schemas (EUC, Servers, Networks).",
      "Engineered custom integration connector linking Microsoft Sentinel (SIEM) with JSM to automatically create, categorize, and assign high-priority security incidents.",
      "Integrated Microsoft Intune for automated device inventory sync, Site24x7 for uptime monitoring, and Microsoft Teams for real-time triage.",
      "Implemented Git Integration for Jira (Azure DevOps, GitHub, GitLab) enabling full DevOps traceability from incident to code deployment."
    ],
    "impact": [
      "Reduced critical cybersecurity incident dispatch latency from hours to near-instantaneous automated ticket creation.",
      "Unified global IT and maritime operations across 100+ port offices onto a single standardized service portal.",
      "Achieved complete auditability and end-to-end traceability across infrastructure changes and software deployments."
    ],
    "tags": [
      "Jira Service Management Cloud Premium",
      "Microsoft Sentinel (SecOps SIEM)",
      "Site24x7",
      "Microsoft Intune",
      "Git Integration for Jira",
      "JSM Assets"
    ]
  },
  "digital-banking-itsm": {
    "title": "High-Assurance Digital Banking ITSM Transformation & MTTR Optimization",
    "client": "Regional Investment & Digital Banking Corporation",
    "role": "Presales Solutions Architect & Financial Governance Lead",
    "timeline": "Full Lifecycle Implementation & Governance",
    "category": "Digital Banking ITSM & Strict SLA Compliance",
    "badgeColor": "amber",
    "presalesScope": "Won the digital banking mandate by presenting a high-assurance SLA governance blueprint and automated CCB audit trail that guaranteed accelerated MTTR and satisfied central banking regulatory scrutiny.",
    "summary": "Architected a high-assurance IT Service Management and CMDB platform for a premier investment and digital banking institution, accelerating MTTR and First-Call Resolution.",
    "challenge": [
      "Stringent financial regulatory requirements demanding strict adherence to transaction processing SLAs and complete auditability for all IT changes.",
      "Disjointed incident diagnosis leading to prolonged MTTR and repeated customer interactions for routine banking inquiries.",
      "Lack of structured dependency mapping between core banking applications, databases, and underlying virtual server infrastructure."
    ],
    "solution": [
      "Architected comprehensive enterprise service governance platform encompassing Service Request, Incident, Change, Problem, Knowledge, and Asset Management on JSM.",
      "Developed JSM Assets CMDB schema and automated discovery pipelines mapping upstream and downstream dependencies across core banking stacks.",
      "Implemented automated escalation and on-call alerting matrix for priority P1/P2 incidents with strict SLA breach prevention timers.",
      "Configured self-service banking employee portal with integrated Confluence knowledge articles, deflecting repetitive password reset and access entitlement inquiries."
    ],
    "impact": [
      "Substantially accelerated Mean Time to Resolution (MTTR) across tier-1 banking systems.",
      "Elevated First-Contact Resolution (FCR) rate by providing service desk agents with standardized diagnostic runbooks in Confluence.",
      "Established 100% audit-compliant Change Management workflows satisfying strict central banking inspection standards."
    ],
    "tags": [
      "Jira Service Management",
      "JSM Assets (CMDB)",
      "High-Assurance Banking",
      "Strict Financial SLAs",
      "Confluence Knowledge Base"
    ]
  },
  "agri-food-manufacturing-itsm": {
    "title": "Enterprise Manufacturing ITSM & Multi-Calendar Plant SLA Standardization",
    "client": "Multinational Agri-Business & Food Manufacturing Conglomerate",
    "role": "Presales Solutions Architect & Governance Consultant",
    "timeline": "Phased Enterprise Manufacturing Rollout",
    "category": "Industrial ITSM & Supply Chain Operations",
    "badgeColor": "indigo",
    "presalesScope": "Conducted comprehensive on-site discovery workshops across regional milling operations, scoping an advanced multi-calendar SLA model that won client stakeholder confidence over competing generic proposals.",
    "summary": "Standardized IT service management across international food manufacturing plants and milling facilities, implementing multi-calendar SLAs and automated Post-Incident Reviews (PIR).",
    "challenge": [
      "Unstandardized support channels across geographically dispersed manufacturing plants, feed mills, and corporate offices relying heavily on uncoordinated emails.",
      "Complex regional operational calendars with varying public holidays and plant shift rotations making uniform SLA calculation impossible with basic tools.",
      "Frequent recurring equipment and network incidents without systematic Root Cause Analysis or linkage to Problem Management."
    ],
    "solution": [
      "Formulated structured enterprise service governance workflows for Service Request, Incident, Problem, and Change Management with up to 3 tiers of hierarchical authorization.",
      "Designed advanced multi-calendar SLA configurations tailored to individual mill and plant operational hours and regional holiday calendars.",
      "Implemented automated Post-Incident Review (PIR) linkage between major incident closures and newly spawned Problem tickets for root cause remediation.",
      "Built a centralized employee self-service portal backed by 5 standardized Confluence Knowledge Base spaces to deflect routine operational inquiries.",
      "Created executive real-time reporting dashboards tracking created vs. resolved ratios, filter counts, and technician productivity metrics."
    ],
    "impact": [
      "Successfully retired manual email ticketing, onboarding multi-country manufacturing facilities to a single unified portal.",
      "Eliminated SLA dispute friction between regional plant managers and centralized IT teams through accurate multi-calendar tracking.",
      "Cut recurring operational outages through structured Problem Management and mandatory PIR governance."
    ],
    "tags": [
      "Jira Service Management Cloud",
      "Multi-Calendar SLAs",
      "Manufacturing ITSM",
      "Problem Management & PIR",
      "Confluence Knowledge Base"
    ]
  },
  "jira-ai-admin": {
    "title": "JIRA AI Administrator & Autonomous Incident Triaging Engine",
    "client": "AI & Cloudflare Edge Innovation",
    "role": "Creator & AI Solutions Architect",
    "timeline": "Production Edge Deployment",
    "category": "AI & Serverless Automation",
    "badgeColor": "purple",
    "presalesScope": "Engineered working architectural prototype to showcase real-time LLM-driven incident triaging and root cause analysis (RCA), validating automated governance before enterprise deployment.",
    "summary": "Serverless edge worker orchestrating Large Language Models to triage, categorize, and provide instant Root Cause Analysis (RCA) on incoming Jira incidents.",
    "challenge": [
      "High volume of Tier-1 incidents causing ticket backlogs and delayed triage by human service desk dispatchers.",
      "Inconsistent incident categorization leading to misrouted tickets between specialized infrastructure and app squads.",
      "Time-consuming manual drafting of Root Cause Analysis (RCA) summaries during post-incident reviews."
    ],
    "solution": [
      "Built lightweight, ultra-low latency API microservices deployed on Cloudflare Workers edge network.",
      "Constructed dynamic prompt pipelines that ingest Jira webhook payloads, analyze ticket symptoms, and infer incident category & priority.",
      "Automated bidirectional updates via Jira REST API: commenting suggested troubleshooting steps and populating custom fields automatically.",
      "Enforced token validation and strict rate-limiting for enterprise security and data privacy."
    ],
    "impact": [
      "Reduced manual Tier-1 triage overhead by ~65%, accelerating immediate dispatcher response.",
      "Shortened MTTR by presenting agents with pre-analyzed root cause hypotheses instantly.",
      "Zero server maintenance cost thanks to serverless edge architecture."
    ],
    "tags": [
      "Cloudflare Workers",
      "AI / LLM Orchestration",
      "Jira REST APIs",
      "TypeScript",
      "Webhooks"
    ]
  },
  "forge-plugins": {
    "title": "Cloud-Native Atlassian Forge Apps & Enterprise Plugins",
    "client": "Atlassian Platform Engineering",
    "role": "Atlassian Forge & Solutions Architect",
    "timeline": "Iterative Platform Suite",
    "category": "Custom Forge Development",
    "badgeColor": "emerald",
    "presalesScope": "Architected custom cloud-native extension suite to solve niche enterprise requirements natively within Atlassian Cloud, eliminating recurring cost and compliance friction of third-party SaaS middleware.",
    "summary": "Building secure cloud-native Forge micro-applications with custom UI kits, web triggers, and backend resolvers to close enterprise requirement gaps.",
    "challenge": [
      "Enterprise business requirements exceeding out-of-the-box Jira Cloud automation capabilities.",
      "Strict corporate data sovereignty preventing outbound third-party webhook relays without heavy compliance review.",
      "Need for automated JSON alert parsing from legacy monitoring tools into structured Jira incident tickets."
    ],
    "solution": [
      "Engineered serverless Atlassian Forge apps running directly inside Atlassian Cloud compute environment.",
      "Designed custom Forge UI Kit modals and custom issue panels for streamlined agent workflows.",
      "Implemented async web triggers that parse raw incoming JSON payloads from monitoring systems and format them into clean incident issues.",
      "Integrated Forge Storage and strict egress controls adhering to Atlassian privacy guidelines."
    ],
    "impact": [
      "Avoided expensive third-party SaaS middle-layer subscriptions by hosting logic natively in Forge.",
      "Zero infrastructure management overhead with native Atlassian-managed uptime and security.",
      "Adopted directly into daily operations without external compliance friction."
    ],
    "tags": [
      "Atlassian Forge",
      "Node.js",
      "Jira Product APIs",
      "Forge UI Kit",
      "Event Triggers"
    ]
  }
};

/* -------------------------------------------------------------------------- */
/*  5. PROJECT FILTERING                                                      */
/* -------------------------------------------------------------------------- */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Button states (shadcn tabs style)
      filterBtns.forEach(b => {
        b.classList.remove('bg-white', 'text-zinc-950', 'dark:bg-zinc-950', 'dark:text-zinc-50', 'shadow-sm');
        b.classList.add('text-zinc-600', 'dark:text-zinc-400');
      });
      btn.classList.add('bg-white', 'text-zinc-950', 'dark:bg-zinc-950', 'dark:text-zinc-50', 'shadow-sm');
      btn.classList.remove('text-zinc-600', 'dark:text-zinc-400');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 200);
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/*  6. CASE STUDY MODAL DISPLAY                                               */
/* -------------------------------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('.case-study-trigger');

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyId = btn.getAttribute('data-project');
      const data = caseStudies[studyId];
      if (!data) return;

      // Populate Modal Content
      document.getElementById('modal-title').innerText = data.title;
      document.getElementById('modal-client').innerText = data.client;
      document.getElementById('modal-role').innerText = data.role;
      document.getElementById('modal-timeline').innerText = data.timeline;
      document.getElementById('modal-summary').innerText = data.summary;

      // Presales Strategy Scope
      const presalesEl = document.getElementById('modal-presales-scope');
      if (presalesEl && data.presalesScope) {
        presalesEl.innerText = data.presalesScope;
      }

      // Challenge List
      const challengeList = document.getElementById('modal-challenges');
      challengeList.innerHTML = data.challenge.map(item => `
        <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
          <span class="text-rose-500 font-bold mt-0.5">•</span>
          <span>${item}</span>
        </li>
      `).join('');

      // Solution List
      const solutionList = document.getElementById('modal-solutions');
      solutionList.innerHTML = data.solution.map(item => `
        <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
          <span class="text-blue-500 font-bold mt-0.5">✓</span>
          <span>${item}</span>
        </li>
      `).join('');

      // Impact List
      const impactList = document.getElementById('modal-impacts');
      impactList.innerHTML = data.impact.map(item => `
        <li class="flex items-start gap-2.5 text-slate-600 dark:text-slate-300 text-sm">
          <span class="text-emerald-500 font-bold mt-0.5">★</span>
          <span>${item}</span>
        </li>
      `).join('');

      // Tags
      const tagsContainer = document.getElementById('modal-tags');
      tagsContainer.innerHTML = data.tags.map(tag => `
        <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          ${tag}
        </span>
      `).join('');

      // Open Modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    });
  });

  // Close handlers
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------------- */
/*  7. CLIPBOARD COPY & TOAST NOTIFICATION                                    */
/* -------------------------------------------------------------------------- */
function initClipboardToast() {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const copyBtns = document.querySelectorAll('.copy-btn');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Copied to clipboard';

      if (navigator.clipboard && text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`${label}: ${text}`);
        }).catch(() => {
          showToast(`Copied: ${text}`);
        });
      }
    });
  });

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

/* -------------------------------------------------------------------------- */
/*  8. PRINT CV HANDLER                                                       */
/* -------------------------------------------------------------------------- */
function printCV() {
  window.print();
}
window.printCV = printCV;
