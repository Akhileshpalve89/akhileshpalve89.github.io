export interface SocialItem {
  name: string;
  url: string;
  icon: string;
}

export interface WorkExperience {
  company: string;
  badges: string[];
  title: string;
  logo: string;
  start: string;
  end: string;
  link?: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface ProjectItem {
  title: string;
  category: "self" | "hackathon" | "work";
  techStack: string[];
  description: string;
  logo?: string | null;
  link?: {
    label: string;
    href: string;
  };
  github?: string;
  image: string;
}

export interface OpenSourceItem {
  repo: string;
  prTitle: string;
  prUrl: string;
  status: "merged" | "open" | "closed";
  date: string;
  description: string;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  sections?: string[];
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  tldr: string;
  callLink: string;
  opportunities: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  githubUsername: string;
  contact: {
    email: string;
    social: SocialItem[];
  };
  education: EducationItem[];
  work: WorkExperience[];
  skills: string[];
  projects: ProjectItem[];
  openSource: OpenSourceItem[];
  blogs: BlogPostMeta[];
}

export const RESUME_DATA: ResumeData = {
  name: "Akhilesh Palve",
  initials: "AP",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra,+India",
  about: "Cybersecurity Specialist • Pen Tester • Bug Bounty Hunter",
  summary:
    "Cybersecurity practitioner specializing in Vulnerability Assessment & Penetration Testing (VAPT), Active Directory security, and cloud defense. Experienced in leading a 20+ member security team, identifying high-impact vulnerabilities across enterprise web applications, and building automated security tooling.",
  tldr: "tl;dr: Offensive security researcher focused on identifying, validating, and neutralizing vulnerabilities through rigorous penetration testing, red team simulation, and defensive engineering.",
  callLink: "mailto:akhileshpalve89@gmail.com",
  opportunities:
    "Open to security analyst, penetration testing, VAPT engineering, and red team roles.",
  avatarUrl: "/profile.jpeg",
  personalWebsiteUrl: "https://akhileshpalve89.github.io",
  githubUsername: "Akhileshpalve89",
  contact: {
    email: "akhileshpalve89@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akhilesh-palve",
        icon: "linkedin",
      },
      {
        name: "GitHub",
        url: "https://github.com/Akhileshpalve89",
        icon: "github",
      },
      {
        name: "Email",
        url: "mailto:akhileshpalve89@gmail.com",
        icon: "email",
      },
    ],
  },
  education: [
    {
      school: "MIT ADT University, Pune",
      degree:
        "B.Tech in Computer Science & Engineering (Specialization: Cybersecurity & Forensics) — GPA: 7.41",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "CyArt",
      badges: ["Remote", "Team Lead"],
      title: "VAPT Intern & Team Lead",
      logo: "/logos/cyart.png",
      start: "Nov 2025",
      end: "Jun 2026",
      description: [
        "Led and coordinated a 20-member VAPT team, managing assessment deliverables and reporting directly to executive management on security posture.",
        "Scaled team operations from 8 to 20 members while establishing standardized VAPT reporting templates adopted organization-wide.",
        "Conducted vulnerability assessments and penetration tests across client cloud infrastructure and web applications.",
        "Developed production-grade Python automation agents to monitor cloud security posture and accelerate remediation triage.",
      ],
    },
    {
      company: "The DEVS",
      badges: ["Leadership", "MIT ADT"],
      title: "Cybersecurity Wing Head",
      logo: "/logos/thedevs.png",
      start: "Aug 2025",
      end: "May 2026",
      description: [
        "Directed the cybersecurity division of the university's premier technology organization.",
        "Organized hands-on offensive security bootcamps, CTF competitions, and hacking workshops for 50+ students.",
        "Established a structured cybersecurity curriculum covering OWASP Top 10, network exploitation, and CTF methodology.",
        "Mentored junior members and onboarded 20+ students into live cybersecurity projects with industry mentors.",
      ],
    },
    {
      company: "Bugcrowd",
      badges: ["Active", "Bug Bounty"],
      title: "Freelance Bug Bounty Hunter",
      logo: "/logos/bugcrowd.png",
      start: "Jan 2023",
      end: "Present",
      description: [
        "3+ years of continuous offensive vulnerability research across enterprise web applications and public APIs.",
        "Performed manual and automated reconnaissance using Burp Suite, custom Python automation, and targeted OSINT tooling.",
        "Identified, validated, and responsibly disclosed multiple high-impact vulnerabilities with reproducible proof-of-concepts and actionable remediation guidance.",
      ],
    },
    {
      company: "Hack The Box",
      badges: ["Active", "Security Lab"],
      title: "Security Researcher",
      logo: "/logos/hackthebox.png",
      start: "Jun 2021",
      end: "Present",
      description: [
        "Rooted 15+ Hack The Box machines spanning easy to hard difficulty across Linux and Windows environments.",
        "Built deep practical expertise in Active Directory exploitation (Kerberoasting, AS-REP roasting, DCSync) and privilege escalation.",
        "Documented detailed step-by-step penetration testing writeups and methodology guides for the cybersecurity community.",
      ],
    },
    {
      company: "Cyber Secured India",
      badges: ["Internship", "Pune"],
      title: "Cybersecurity Intern",
      logo: "/logos/cybersecuredindia.png",
      start: "Mar 2025",
      end: "Jun 2025",
      description: [
        "Performed vulnerability assessments across 25+ systems using Nessus and OpenVAS to identify weaknesses and validate security patches.",
        "Contributed to a 20% reduction in high-severity vulnerabilities through patch verification and remediation tracking.",
        "Supported security operations center (SOC) activities including alert triage, threat analysis, and security audit documentation.",
      ],
    },
    {
      company: "Plasmid",
      badges: ["Top Performer", "Pune"],
      title: "Cybersecurity Intern",
      logo: "/logos/plasmid.png",
      start: "Jun 2024",
      end: "Aug 2024",
      description: [
        "Officially recognized as Top Performer among all cohort interns for exceptional vulnerability assessment metrics and leadership.",
        "Analyzed network traffic with Wireshark & Splunk, uncovering 27 security events involving unauthorized access and malware activity.",
        "Conducted vulnerability scans on 30+ endpoints with Nessus & OpenVAS, validating patches that reduced critical CVEs by 22%.",
        "Authored ISO 27001 compliance reports for 30+ systems and created an Nmap Footprinting guide used by 30+ students.",
      ],
    },
    {
      company: "Palo Alto Networks",
      badges: ["Virtual", "Internship"],
      title: "Virtual Cybersecurity Intern",
      logo: "/logos/paloalto.png",
      start: "Apr 2024",
      end: "Jun 2024",
      description: [
        "Completed the Palo Alto Networks Virtual Internship covering SASE, Next-Generation Firewalls (NGFW), and Zero Trust architectures.",
        "Designed and applied enterprise security policies, firewall rules, and network segmentation strategies.",
        "Analyzed security event logs to optimize perimeter defenses and incident response playbooks.",
      ],
    },
    {
      company: "nCreeps",
      badges: ["CTF Team", "Competitive"],
      title: "Core CTF Team Member",
      logo: "/logos/ncreeps.png",
      start: "Mar 2023",
      end: "Nov 2024",
      description: [
        "Competed as a core member of the nCreeps CTF team across national and international Capture The Flag competitions.",
        "Solved complex challenges across web exploitation, cryptography, digital forensics, and binary reverse engineering.",
      ],
    },
    {
      company: "YHills",
      badges: ["Internship", "Pune"],
      title: "Cybersecurity Intern",
      logo: "/logos/yhills.png",
      start: "Nov 2022",
      end: "Dec 2022",
      description: [
        "Led penetration tests on enterprise Windows environments, executing multi-vector exploit approaches and privilege escalation.",
        "Documented findings into technical vulnerability reports and practical Windows exploitation learning materials.",
      ],
    },
  ],
  skills: [
    "Penetration Testing (VAPT)",
    "Active Directory Security",
    "Bug Bounty Hunting",
    "MITRE ATT&CK",
    "OWASP Top 10",
    "Burp Suite",
    "Nmap",
    "Wireshark",
    "Splunk",
    "Nessus / OpenVAS",
    "Metasploit",
    "Digital Forensics (Autopsy)",
    "Linux Administration",
    "Windows Security",
    "Cloud Security (AWS)",
    "Python",
    "Bash Scripting",
    "ISO 27001 Compliance",
    "SIEM & SOC Operations",
    "Incident Response",
  ],
  projects: [
    {
      title: "VARYS",
      category: "self",
      techStack: ["Python", "AI / CVSS", "Digital Forensics", "Threat Assessment"],
      description:
        "AI-assisted digital forensics platform designed to accelerate investigations by analyzing multiple machine disk images simultaneously with automated file integrity verification and CVSS-based risk scoring. Awarded Best Project at MIT ADT University.",
      logo: null,
      link: {
        label: "varys",
        href: "https://github.com/Akhileshpalve89",
      },
      github: "https://github.com/Akhileshpalve89",
      image: "/images/varys.png",
    },
    {
      title: "Phishing Email Detection Extension",
      category: "self",
      techStack: ["JavaScript", "Browser APIs", "OSINT", "Threat Intel APIs"],
      description:
        "Browser extension leveraging OSINT databases and Threat Intelligence APIs to analyze email headers, SPF/DKIM/DMARC records, and embedded link structures in real-time, instantly alerting users against domain spoofing and malicious phishing payloads.",
      logo: null,
      link: {
        label: "extension",
        href: "https://github.com/Akhileshpalve89/Phishing-Email-Analyzer",
      },
      github: "https://github.com/Akhileshpalve89/Phishing-Email-Analyzer",
      image: "/images/phishing-analyzer.png",
    },
    {
      title: "CyberAttack Honeypot (Track & Trace)",
      category: "self",
      techStack: ["Python", "SSH Protocol", "Threat Intelligence", "Forensics"],
      description:
        "Python-based SSH honeypot engineered to detect, log, and analyze unauthorized login attempts, brute-force patterns, and adversary command sessions in real time, gathering actionable threat intelligence for incident response.",
      logo: null,
      link: {
        label: "honeypot",
        href: "https://github.com/Akhileshpalve89/CyberAttack-Honeypot",
      },
      github: "https://github.com/Akhileshpalve89/CyberAttack-Honeypot",
      image: "/images/honeypot.png",
    },
    {
      title: "Secure Document Storage & Sharing",
      category: "self",
      techStack: ["Blockchain", "Cloud Storage", "Smart Contracts", "Cryptography"],
      description:
        "Cloud-integrated decentralized document storage solution leveraging blockchain technology and cryptographic hashing (SHA-256) to guarantee end-to-end encryption, immutable access control logs, and tamper-proof sharing.",
      logo: null,
      link: {
        label: "secure-docs",
        href: "https://github.com/Akhileshpalve89",
      },
      github: "https://github.com/Akhileshpalve89",
      image: "/images/secure-docs.png",
    },
    {
      title: "Custom SIEM & SOC Platform",
      category: "self",
      techStack: ["Splunk", "ELK Stack", "Python", "SIEM Architecture"],
      description:
        "Fully functional SIEM and SOC environment featuring centralized log collection from 30+ endpoints, custom correlation rules detecting lateral movement and anomalous access, and analyst threat dashboards.",
      logo: null,
      link: {
        label: "siem-soc",
        href: "https://github.com/Akhileshpalve89",
      },
      github: "https://github.com/Akhileshpalve89",
      image: "/images/siem-soc.png",
    },
    {
      title: "AI Disease Outbreak Prediction",
      category: "self",
      techStack: ["Python", "Scikit-Learn", "Pandas", "Time-Series"],
      description:
        "AI-driven predictive analytics engine that ingests epidemiological datasets to forecast and trace potential disease outbreaks using machine learning classification and time-series forecasting models.",
      logo: null,
      link: {
        label: "disease-ai",
        href: "https://github.com/Akhileshpalve89",
      },
      github: "https://github.com/Akhileshpalve89",
      image: "/images/ai-disease.png",
    },
  ],
  openSource: [
    {
      repo: "Akhileshpalve89/Phishing-Email-Analyzer",
      prTitle: "Real-time email header parsing & OSINT threat reputation lookup",
      prUrl: "https://github.com/Akhileshpalve89/Phishing-Email-Analyzer",
      status: "merged",
      date: "2026-08-14",
      description:
        "Built modular browser extension engine that extracts SPF, DKIM, and DMARC headers and correlates URLs against open threat intelligence APIs.",
    },
    {
      repo: "Akhileshpalve89/CyberAttack-Honeypot",
      prTitle: "SSH emulation daemon with geo-IP logging and payload capture",
      prUrl: "https://github.com/Akhileshpalve89/CyberAttack-Honeypot",
      status: "merged",
      date: "2026-05-18",
      description:
        "Implemented low-interaction SSH listener logging brute-force credentials, command sessions, and automated attack script downloads into structured JSON.",
    },
    {
      repo: "Akhileshpalve89/Vulnerable-Active-Directory",
      prTitle: "Automated lab provisioning scripts with misconfigured ACLs & SPNs",
      prUrl: "https://github.com/Akhileshpalve89/Vulnerable-Active-Directory",
      status: "merged",
      date: "2026-03-10",
      description:
        "Created PowerShell automation scripts to deploy an Active Directory testbed configured with Kerberoasting, AS-REP roasting, and unconstrained delegation paths.",
    },
    {
      repo: "Akhileshpalve89/Writeups",
      prTitle: "Add comprehensive privilege escalation notes for 15+ HTB machines",
      prUrl: "https://github.com/Akhileshpalve89/Writeups",
      status: "merged",
      date: "2025-12-05",
      description:
        "Published detailed walkthroughs focusing on Linux sudo misconfigurations, Windows Token manipulation, and Active Directory BloodHound analysis.",
    },
    {
      repo: "Akhileshpalve89/Bug-Bounty-Wordlists",
      prTitle: "Curate specialized parameter and endpoint wordlists for API fuzzing",
      prUrl: "https://github.com/Akhileshpalve89/Bug-Bounty-Wordlists",
      status: "merged",
      date: "2025-09-20",
      description:
        "Assembled high-signal wordlists targeting modern REST/GraphQL APIs, hidden admin endpoints, and common OAuth redirect bugs.",
    },
  ],
  blogs: [
    {
      title: "Active Directory Enumeration: Start With the Map",
      description:
        "An evidence-first approach to mapping an Active Directory lab before drawing conclusions about attack paths.",
      date: "2026-10-20",
      readTime: "6 min read",
      slug: "active-directory-enumeration",
      sections: [
        "Confirm the scope and starting point",
        "Build an identity and host inventory",
        "Follow relationships, not just object names",
        "Turn observations into findings",
      ],
    },
    {
      title: "Phishing Triage: More Than a Suspicious Link",
      description:
        "A workflow for preserving email evidence, correlating indicators, and making defensible phishing decisions.",
      date: "2026-10-21",
      readTime: "5 min read",
      slug: "phishing-triage",
      sections: [
        "Preserve the message",
        "Review sender authentication and routing",
        "Analyze URLs and attachments safely",
        "Decide and communicate",
      ],
    },
    {
      title: "Cloud Metadata Services: Reduce the Exposure",
      description:
        "How SSRF can put workload metadata at risk, and the layers that help protect cloud identities and temporary credentials.",
      date: "2026-10-22",
      readTime: "5 min read",
      slug: "cloud-metadata-security",
      sections: [
        "Why it matters",
        "Defensive checklist",
        "Review questions for a cloud assessment",
        "Defense in depth matters",
      ],
    },
  ],
};
