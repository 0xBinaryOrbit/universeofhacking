// Global data store for the static website
export const globalData = {
  // Site configuration
  siteConfig: {
    name: "Universe of Hacking",
    description:
      "Your gateway to cybersecurity mastery. Learn, practice, and excel in ethical hacking with our comprehensive platform.",
    author: "Universe of Hacking Team",
    social: {
      discord: "https://discord.gg/universeofhacking",
      telegram: "https://t.me/universeofhacking",

      twitter: "https://twitter.com/0xUoH",
    },
  },


 
  // Blog posts data
  blogs: [
    {
      id: "1",
      title: "Advanced Web Application Penetration Testing Techniques",
      slug: "advanced-web-app-penetration-testing",
      excerpt:
        "Learn advanced techniques for testing web applications and finding critical vulnerabilities that automated scanners miss.",
      content: `# Advanced Web Application Penetration Testing Techniques

Web application penetration testing is a critical skill for any cybersecurity professional. In this comprehensive guide, we'll explore advanced techniques that go beyond basic vulnerability scanning.

## Manual Testing Approaches

### 1. Business Logic Flaws
Business logic vulnerabilities are often the most critical yet hardest to detect. These flaws occur when the application's workflow can be manipulated to perform unintended actions.

**Common Examples:**
- Price manipulation in e-commerce applications
- Privilege escalation through parameter tampering
- Race conditions in financial transactions
- Workflow bypass vulnerabilities

### 2. Advanced SQL Injection
While basic SQL injection is well-known, advanced techniques like:
- **Boolean-based blind SQL injection**: Extracting data through true/false responses
- **Time-based blind SQL injection**: Using database delays to extract information
- **Second-order SQL injection**: Payloads that execute in different contexts
- **NoSQL injection**: Targeting MongoDB, CouchDB, and other NoSQL databases

### 3. Authentication Bypass Techniques
- **Session fixation attacks**: Forcing users to use attacker-controlled session IDs
- **JWT token manipulation**: Exploiting weak signing algorithms or key confusion
- **OAuth flow exploitation**: Manipulating authorization flows for account takeover
- **Multi-factor authentication bypass**: Exploiting implementation flaws

## Advanced Tools and Techniques

### Burp Suite Extensions
- **Autorize**: Automated authorization testing across different user roles
- **Param Miner**: Discovery of hidden parameters and headers
- **Turbo Intruder**: Advanced fuzzing with custom Python scripts
- **Collaborator**: Out-of-band interaction testing

### Custom Scripts and Automation
Writing custom Python scripts for specific test cases can often reveal vulnerabilities that automated tools miss.

\`\`\`python
import requests
import threading

def test_race_condition(url, payload):
    def send_request():
        response = requests.post(url, data=payload)
        print(f"Status: {response.status_code}")
    
    threads = []
    for i in range(10):
        t = threading.Thread(target=send_request)
        threads.append(t)
        t.start()
    
    for t in threads:
        t.join()
\`\`\`

### Server-Side Request Forgery (SSRF)
- **Internal network scanning**: Using SSRF to map internal infrastructure
- **Cloud metadata exploitation**: Accessing AWS/Azure metadata services
- **Protocol smuggling**: Exploiting HTTP request smuggling vulnerabilities

## Advanced Exploitation Techniques

### Client-Side Attacks
- **DOM-based XSS**: Exploiting client-side JavaScript vulnerabilities
- **Prototype pollution**: Manipulating JavaScript object prototypes
- **PostMessage vulnerabilities**: Exploiting cross-origin communication

### Server-Side Attacks
- **Template injection**: Exploiting server-side template engines
- **Deserialization attacks**: Exploiting unsafe object deserialization
- **XXE (XML External Entity)**: Exploiting XML parsers for data exfiltration

## Methodology and Approach

### Information Gathering
1. **Passive reconnaissance**: OSINT, DNS enumeration, certificate transparency
2. **Active scanning**: Port scanning, service enumeration, technology identification
3. **Application mapping**: Spidering, endpoint discovery, parameter analysis

### Vulnerability Assessment
1. **Automated scanning**: Using tools like Burp, OWASP ZAP, Nessus
2. **Manual testing**: Logic flaws, business process analysis
3. **Code review**: Static analysis when source code is available

### Exploitation and Post-Exploitation
1. **Proof of concept development**: Demonstrating impact
2. **Privilege escalation**: Gaining higher-level access
3. **Lateral movement**: Exploring connected systems
4. **Data exfiltration**: Demonstrating data access capabilities

## Best Practices and Ethics

### Legal and Ethical Considerations
- **Always obtain proper authorization** before testing
- **Follow responsible disclosure practices**
- **Document everything** for legal protection
- **Respect scope limitations** and rules of engagement

### Reporting and Communication
- **Executive summary**: High-level findings for management
- **Technical details**: Detailed steps for remediation teams
- **Risk assessment**: Business impact and likelihood ratings
- **Remediation guidance**: Specific steps to fix vulnerabilities

## Staying Current

### Continuous Learning
- **Follow security researchers** on Twitter and blogs
- **Participate in bug bounty programs** like HackerOne, Bugcrowd
- **Attend security conferences** like DEF CON, Black Hat, BSides
- **Practice on platforms** like Hack The Box, TryHackMe, PortSwigger Academy

### Building Your Lab
- **Vulnerable applications**: DVWA, WebGoat, Mutillidae
- **Capture The Flag platforms**: PicoCTF, OverTheWire
- **Cloud environments**: AWS, Azure, GCP security challenges

## Conclusion

Advanced web application penetration testing requires a deep understanding of both technical vulnerabilities and business logic. The key is to think like an attacker while maintaining the ethics of a security professional.

Remember: The goal isn't just to find vulnerabilities, but to help organizations improve their overall security posture. Every test should provide actionable insights that make the digital world a safer place.

**Happy hacking, and stay ethical! 🛡️**`,
      author: "0xBinaryOrbit",
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15",
      tags: [
        "Web Security",
        "Penetration Testing",
        "SQL Injection",
        "Authentication",
        "Advanced",
      ],
      category: "Advanced Tutorials",
      thumbnail:
        "/placeholder.svg?height=400&width=600&text=Advanced+Web+Penetration+Testing",
      readTime: "15 min",
      difficulty: "Advanced",
      likes: 342,
      views: 2150,
      featured: true,
    },
    {
      id: "2",
      title: "Kickstarting Your Journey in Ethical Hacking",
      slug: "kickstart-your-ethical-hacking-journey",
      excerpt:
        "Begin your ethical hacking career with this comprehensive guide — understand the mindset, tools, and pathways to becoming a skilled cybersecurity professional.",
      content: `# Kickstarting Your Journey in Ethical Hacking

The world of cybersecurity is vast, exciting, and constantly evolving. Whether you're a student, developer, or tech enthusiast, ethical hacking offers a unique and rewarding career path.

## What is Ethical Hacking?

Ethical hacking is the practice of legally breaking into computers and devices to test an organization's defenses. These "white-hat" hackers help find and fix security vulnerabilities before malicious hackers can exploit them.

### The Ethical Hacker's Mindset
- **Curiosity**: Always asking "what if?" and "how does this work?"
- **Persistence**: Not giving up when the first approach doesn't work
- **Responsibility**: Understanding the power you wield and using it ethically
- **Continuous learning**: Staying updated with the latest threats and defenses

## Why Learn Ethical Hacking?

### Career Opportunities
- **High demand**: Organizations desperately need security experts to safeguard digital assets
- **Competitive salaries**: Cybersecurity professionals command premium wages
- **Job security**: As long as technology exists, security will be needed
- **Remote work**: Many cybersecurity roles offer flexible work arrangements

### Personal Growth
- **Continuous learning**: New vulnerabilities and exploits emerge daily, keeping you sharp
- **Problem-solving**: Each security challenge is a unique puzzle to solve
- **Impactful work**: Protect users and systems from real-world threats
- **Community**: Join a global community of security professionals

### Fun and Engagement
- **CTFs and competitions**: Learn and grow by solving challenges
- **Bug bounties**: Get paid for finding vulnerabilities in real applications
- **Research opportunities**: Discover new attack vectors and defense mechanisms

## Essential Skills You Need

### 1. Networking Fundamentals
Understanding how data flows across networks is crucial:
- **IP addresses and subnetting**: How devices communicate
- **Protocols**: TCP/IP, HTTP/HTTPS, DNS, DHCP, and more
- **Network devices**: Routers, switches, firewalls, and their configurations
- **Packet analysis**: Understanding network traffic patterns

### 2. Operating Systems (Linux Preferred)
Most security tools run on Linux:
- **Command line proficiency**: Navigate and manipulate files efficiently
- **System administration**: User management, permissions, services
- **Scripting**: Bash scripting for automation
- **Kali Linux**: The go-to distribution for penetration testing

### 3. Programming Basics
Code understanding accelerates your learning:
- **Python**: Perfect for scripting and automation
- **JavaScript**: Essential for web application security
- **SQL**: Database queries and injection techniques
- **PowerShell**: Windows environment exploitation

### 4. Web Technologies
Most vulnerabilities exist in web applications:
- **HTML/CSS**: Understanding web page structure
- **HTTP protocol**: Requests, responses, headers, cookies
- **APIs**: RESTful services and GraphQL
- **Databases**: SQL and NoSQL database interactions

## Essential Tools of the Trade

### Operating System
- **Kali Linux**: Preloaded with 600+ security tools
- **Parrot Security OS**: Alternative to Kali with additional privacy features
- **BlackArch**: Arch-based penetration testing distribution

### Web Application Testing
- **Burp Suite**: Industry-standard web vulnerability scanner and proxy
- **OWASP ZAP**: Free alternative to Burp Suite
- **Nikto**: Web server scanner for vulnerabilities
- **SQLMap**: Automated SQL injection testing tool

### Network Analysis
- **Nmap**: Network scanning and enumeration
- **Wireshark**: Packet analysis and network troubleshooting
- **Masscan**: High-speed port scanner
- **Netcat**: Network debugging and exploration tool

### Exploitation Frameworks
- **Metasploit**: Comprehensive exploitation framework
- **Cobalt Strike**: Advanced threat emulation platform
- **Empire**: PowerShell post-exploitation framework

## Learning Pathways to Get Started

### 1. Free Learning Resources

**YouTube Channels:**
- **LiveOverflow**: Excellent for understanding vulnerabilities
- **IppSec**: Hack The Box walkthroughs and techniques
- **The Cyber Mentor**: Comprehensive ethical hacking tutorials
- **John Hammond**: CTF solutions and security concepts

**Websites and Blogs:**
- **OWASP**: Web application security knowledge base
- **PortSwigger Web Security Academy**: Free web security training
- **Cybrary**: Free cybersecurity courses
- **GitHub repositories**: Thousands of security tools and resources

### 2. Hands-On Practice Platforms

**Beginner-Friendly:**
- **TryHackMe**: Guided learning paths with virtual machines
- **Cybrary**: Structured courses with hands-on labs
- **VulnHub**: Downloadable vulnerable VMs
- **DVWA**: Damn Vulnerable Web Application for practice

**Intermediate to Advanced:**
- **Hack The Box**: Realistic penetration testing scenarios
- **OverTheWire**: Wargames for learning security concepts
- **Root-Me**: Challenges across multiple security domains
- **PentesterLab**: Web application security exercises

### 3. Capture The Flag (CTFs)

CTFs are like playgrounds for hackers. Compete solo or with teams to solve real-world problems in categories like:

**CTF Categories:**
- **Web Exploitation**: Finding vulnerabilities in web applications
- **Reverse Engineering**: Analyzing malware and binaries
- **Cryptography**: Breaking encryption and encoding schemes
- **Forensics**: Investigating digital evidence
- **Binary Exploitation**: Buffer overflows and memory corruption
- **OSINT**: Open source intelligence gathering

**Popular CTF Platforms:**
- **CTFtime.org**: Calendar of upcoming CTF events
- **PicoCTF**: Beginner-friendly CTF with permanent challenges
- **CyberTalents**: Middle Eastern focus with regular competitions

### 4. Professional Certifications

**Entry Level:**
- **CompTIA Security+**: Foundation security knowledge
- **CompTIA PenTest+**: Introduction to penetration testing
- **eJPT** (eLearnSecurity Junior Penetration Tester): Hands-on beginner cert

**Intermediate:**
- **CEH** (Certified Ethical Hacker): Broad ethical hacking knowledge
- **GCIH** (GIAC Certified Incident Handler): Incident response focus
- **CySA+**: Cybersecurity analyst certification

**Advanced:**
- **OSCP** (Offensive Security Certified Professional): Hands-on penetration testing
- **CISSP**: Management-level security certification
- **CISM**: Information security management

## Building Your Learning Environment

### Home Lab Setup
1. **Virtualization software**: VMware Workstation or VirtualBox
2. **Kali Linux VM**: Your primary attack platform
3. **Vulnerable VMs**: Metasploitable, DVWA, WebGoat
4. **Windows VMs**: For testing Windows-specific attacks
5. **Network simulation**: GNS3 or Packet Tracer for network labs

### Cloud-Based Learning
- **AWS/Azure free tiers**: Practice cloud security
- **GitHub Codespaces**: Browser-based development environment
- **Online labs**: TryHackMe, Hack The Box Academy

## Join the Community

### Online Communities
- **Reddit**: r/netsec, r/AskNetsec, r/cybersecurity
- **Discord servers**: Many cybersecurity communities
- **Twitter**: Follow security researchers and practitioners
- **LinkedIn**: Professional networking and job opportunities

### Local Meetups and Conferences
- **DEF CON**: The world's largest hacker conference
- **BSides**: Local security conferences worldwide
- **2600 meetings**: Hacker meetups in many cities
- **OWASP chapters**: Web application security focus

### Our Platform - Universe of Hacking

You're not alone in this journey! Our platform is built by hackers, for hackers. Here, you'll find:

- ✅ **Weekly blog updates** with the latest techniques and tutorials
- ✅ **CTF event calendar** to never miss a competition
- ✅ **Comprehensive tools library** with reviews and tutorials
- ✅ **Learning paths** from beginner to advanced content
- ✅ **Active community** on Telegram and Discord
- ✅ **Job board** with cybersecurity opportunities
- ✅ **Expert-led workshops** and webinars

## Creating Your Learning Plan

### Month 1-2: Foundations
- Set up your lab environment
- Learn Linux command line basics
- Understand networking fundamentals
- Complete TryHackMe beginner paths

### Month 3-4: Web Application Security
- Learn HTML, HTTP, and web technologies
- Practice with DVWA and WebGoat
- Start using Burp Suite
- Participate in your first CTF

### Month 5-6: Network Security
- Master Nmap and network scanning
- Learn Wireshark for packet analysis
- Practice with Metasploitable
- Join online communities and forums

### Month 7-12: Specialization
- Choose your focus area (web apps, networks, mobile, etc.)
- Start bug bounty hunting
- Consider certification preparation
- Build your professional network

## Common Beginner Mistakes to Avoid

### Technical Mistakes
- **Jumping to tools too quickly**: Understand the fundamentals first
- **Not documenting your learning**: Keep detailed notes and screenshots
- **Ignoring the legal aspects**: Always get permission before testing
- **Focusing only on exploitation**: Learn defense and mitigation too

### Career Mistakes
- **Not networking**: The cybersecurity community is incredibly helpful
- **Perfectionism**: You don't need to know everything before starting
- **Comparing yourself to others**: Everyone learns at their own pace
- **Neglecting soft skills**: Communication is crucial in cybersecurity

## Final Thoughts

Don't wait for the "perfect time" to start — the best time to start is **now**. Ethical hacking isn't just about memorizing tools or commands — it's about developing a security mindset and thinking like both an attacker and defender.

### Key Principles to Remember:
1. **Stay curious**: Always ask questions and dig deeper
2. **Be persistent**: Most breakthroughs come after multiple failures
3. **Stay ethical**: With great power comes great responsibility
4. **Keep learning**: The field evolves rapidly, and so must you
5. **Give back**: Help others as you grow in your journey

### Your Next Steps:
1. **Set up your lab environment** this week
2. **Join our Discord community** to connect with fellow learners
3. **Start with TryHackMe** or similar beginner platforms
4. **Document your journey** through blogs or social media
5. **Set a goal** for your first CTF participation

Welcome to the Universe of Hacking! 🛡️

*The journey of a thousand exploits begins with a single vulnerability. Let's start hacking!*

---

**Ready to dive deeper?** Check out our other tutorials on specific topics, join our weekly CTF challenges, and connect with our community of ethical hackers. Remember, we're here to support you every step of the way.

*Join us. Learn. Hack. Repeat.*`,
      author: "0xBinaryOrbit",
      createdAt: "2025-01-23",
      updatedAt: "2025-01-23",
      tags: ["Getting Started", "Ethical Hacking", "CTF", "Beginner", "Career"],
      category: "Getting Started",
      thumbnail:
        "/placeholder.svg?height=400&width=600&text=Ethical+Hacking+Journey",
      readTime: "12 min",
      difficulty: "Beginner",
      likes: 189,
      views: 1420,
      featured: true,
    },
    {
      id: "3",
      title: "OSINT Techniques for Cybersecurity Professionals",
      slug: "osint-techniques-cybersecurity",
      excerpt:
        "Master open source intelligence gathering techniques for security assessments and threat intelligence.",
      content: `# OSINT Techniques for Cybersecurity Professionals

Open Source Intelligence (OSINT) is the practice of collecting and analyzing publicly available information. For cybersecurity professionals, OSINT is an invaluable skill for reconnaissance, threat intelligence, and security assessments.

## Fundamental OSINT Concepts

### What is OSINT?
OSINT involves gathering information from publicly available sources such as:
- Social media platforms
- Public databases
- Government records
- News articles and blogs
- Technical documentation

### Legal and Ethical Considerations
- Always respect privacy and legal boundaries
- Follow responsible disclosure practices
- Understand local and international laws
- Maintain professional ethics

## Essential OSINT Tools

### Search Engines and Databases
- Google Dorking techniques
- Shodan for IoT device discovery
- Censys for internet-wide scanning
- Have I Been Pwned for breach data

### Social Media Intelligence
- Sherlock for username enumeration
- Social Searcher for social media monitoring
- TweetDeck for Twitter intelligence
- LinkedIn reconnaissance techniques

### Domain and Network Analysis
- Whois databases
- DNS enumeration tools
- Certificate transparency logs
- BGP routing information

## Advanced OSINT Techniques

### Metadata Analysis
- EXIF data extraction from images
- Document metadata analysis
- Geolocation from photos
- Timestamp correlation

### Dark Web Monitoring
- Tor browser usage
- Dark web search engines
- Marketplace monitoring
- Threat actor tracking

### Automated OSINT
- Maltego for link analysis
- Recon-ng framework
- theHarvester for email enumeration
- Custom Python scripts

## OSINT in Penetration Testing

### Reconnaissance Phase
- Target identification
- Attack surface mapping
- Employee enumeration
- Technology stack identification

### Social Engineering Preparation
- Personal information gathering
- Organizational structure mapping
- Communication pattern analysis
- Pretext development

## Building an OSINT Toolkit

### Essential Software
- Virtual machines for isolation
- VPN services for anonymity
- Screenshot tools for documentation
- Note-taking applications

### Custom Scripts and Automation
- API integrations
- Data correlation tools
- Automated reporting
- Alert systems

## Best Practices

### Operational Security
- Use VPNs and proxies
- Separate OSINT infrastructure
- Regular tool updates
- Secure data storage

### Documentation and Reporting
- Detailed methodology notes
- Source verification
- Timeline creation
- Professional reporting

## Conclusion
OSINT is a powerful capability that every cybersecurity professional should master. When combined with technical skills and ethical practices, OSINT can significantly enhance security assessments and threat intelligence capabilities.`,
      author: "Bhavesh",
      createdAt: "2025-01-10",
      updatedAt: "2025-01-10",
      tags: ["OSINT", "Intelligence", "Reconnaissance", "Social Engineering"],
      category: "Intelligence",
      thumbnail: "/placeholder.svg?height=400&width=600&text=OSINT+Techniques",
      readTime: "10 min",
      difficulty: "Intermediate",
      likes: 256,
      views: 1850,
      featured: false,
    },
    {
      id: "4",
      title: "Building Your First Red Team Lab Environment",
      slug: "building-first-red-team-lab",
      excerpt:
        "Step-by-step guide to setting up a comprehensive red team testing environment for practicing advanced attack techniques.",
      content: `# Building Your First Red Team Lab Environment

Setting up a proper red team lab is essential for practicing advanced attack techniques safely and legally. This guide will walk you through creating a comprehensive testing environment.

## Infrastructure Requirements

### Hardware Specifications
- Minimum 16GB RAM (32GB recommended)
- 500GB+ SSD storage
- Multi-core processor (Intel i5/i7 or AMD equivalent)

### Virtualization Platform
We recommend using VMware Workstation Pro or VirtualBox for creating isolated environments.

## Essential Virtual Machines

### 1. Attack Machine (Kali Linux)
- Pre-installed penetration testing tools
- Custom tool installations
- Proper network configuration

### 2. Vulnerable Applications
- DVWA (Damn Vulnerable Web Application)
- Metasploitable 2/3
- VulnHub machines
- HackTheBox retired machines

### 3. Active Directory Environment
- Windows Server 2019 (Domain Controller)
- Windows 10 clients
- Proper domain configuration

## Network Segmentation

### Creating Isolated Networks
- Management network
- Attack network
- Target network
- DMZ simulation

### Network Services
- DNS server configuration
- DHCP setup
- Firewall rules

## Advanced Configurations

### Logging and Monitoring
- ELK Stack implementation
- Sysmon configuration
- Network traffic analysis

### Automation Scripts
- Environment reset scripts
- Automated deployment
- Snapshot management

## Best Practices

### Security Considerations
- Network isolation
- Snapshot management
- Regular backups
- Documentation

### Legal and Ethical Guidelines
- Only test on owned systems
- Proper authorization
- Responsible disclosure
- Documentation of findings

## Conclusion
A well-configured red team lab is invaluable for developing and maintaining cybersecurity skills. Regular updates and expansion of your lab environment will keep your skills sharp and current with emerging threats.`,
      author: "0xBinaryOrbit",
      createdAt: "2025-01-05",
      updatedAt: "2025-01-05",
      tags: ["Red Team", "Lab Setup", "Virtualization", "Active Directory"],
      category: "Lab Setup",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Red+Team+Lab",
      readTime: "8 min",
      difficulty: "Intermediate",
      likes: 198,
      views: 1320,
      featured: false,
    },
    {
      id: "5",
      title: "Cloud Security Best Practices for 2025",
      slug: "cloud-security-best-practices-2025",
      excerpt:
        "Essential security practices for AWS, Azure, and Google Cloud Platform deployments in the modern era.",
      content: `# Cloud Security Best Practices for 2025

As organizations continue their digital transformation journey, cloud security has become more critical than ever. This comprehensive guide covers the latest best practices for securing your cloud infrastructure.

## The Shared Responsibility Model

Understanding the shared responsibility model is fundamental to cloud security:

### Cloud Provider Responsibilities
- Physical security of data centers
- Infrastructure security
- Hypervisor security
- Network controls and monitoring

### Customer Responsibilities
- Data encryption and classification
- Identity and access management
- Operating system updates and patches
- Application security and configuration
- Network traffic protection

## Identity and Access Management (IAM)

### Principle of Least Privilege
- Grant minimum necessary permissions
- Regular access reviews and audits
- Use temporary credentials when possible
- Implement role-based access control (RBAC)

### Multi-Factor Authentication (MFA)
- Enable MFA for all user accounts
- Use hardware security keys for privileged accounts
- Implement conditional access policies
- Monitor and alert on authentication anomalies

### Service Account Security
- Use managed identities where available
- Rotate service account keys regularly
- Implement service account monitoring
- Avoid embedding credentials in code

## Data Protection and Encryption

### Encryption at Rest
- Enable encryption for all storage services
- Use customer-managed encryption keys (CMK)
- Implement key rotation policies
- Monitor key usage and access

### Encryption in Transit
- Use TLS 1.3 for all communications
- Implement certificate pinning
- Use VPN or private connectivity for sensitive data
- Monitor and alert on unencrypted traffic

### Data Classification and Governance
- Implement data classification schemes
- Use data loss prevention (DLP) tools
- Monitor data access and movement
- Implement data retention policies

## Network Security

### Virtual Private Clouds (VPCs)
- Implement network segmentation
- Use private subnets for sensitive resources
- Configure security groups and NACLs properly
- Implement network monitoring and logging

### Zero Trust Architecture
- Never trust, always verify
- Implement micro-segmentation
- Use software-defined perimeters
- Continuous authentication and authorization

### DDoS Protection
- Use cloud-native DDoS protection services
- Implement rate limiting and throttling
- Use content delivery networks (CDNs)
- Monitor traffic patterns and anomalies

## Monitoring and Logging

### Centralized Logging
- Enable logging for all cloud services
- Use SIEM solutions for log analysis
- Implement log retention policies
- Monitor for suspicious activities

### Security Information and Event Management (SIEM)
- Implement cloud-native SIEM solutions
- Create custom detection rules
- Automate incident response workflows
- Regular tuning and optimization

### Compliance and Auditing
- Implement continuous compliance monitoring
- Use cloud security posture management (CSPM)
- Regular security assessments and audits
- Maintain audit trails and documentation

## Container and Serverless Security

### Container Security
- Scan container images for vulnerabilities
- Use minimal base images
- Implement runtime security monitoring
- Use admission controllers for policy enforcement

### Serverless Security
- Implement function-level security controls
- Monitor function execution and behavior
- Use least privilege for function permissions
- Implement secrets management for functions

## Incident Response and Recovery

### Incident Response Planning
- Develop cloud-specific incident response plans
- Implement automated response workflows
- Regular incident response exercises
- Maintain incident response documentation

### Backup and Recovery
- Implement automated backup strategies
- Test backup and recovery procedures
- Use cross-region replication for critical data
- Implement disaster recovery planning

## Cloud Security Tools and Services

### AWS Security Services
- AWS GuardDuty for threat detection
- AWS Security Hub for centralized security
- AWS Config for compliance monitoring
- AWS CloudTrail for audit logging

### Azure Security Services
- Azure Security Center for security posture
- Azure Sentinel for SIEM capabilities
- Azure Key Vault for secrets management
- Azure Monitor for logging and monitoring

### Google Cloud Security Services
- Google Cloud Security Command Center
- Google Cloud Asset Inventory
- Google Cloud Key Management Service
- Google Cloud Logging and Monitoring

## Emerging Threats and Trends

### AI and Machine Learning Security
- Secure AI/ML model development
- Protect training data and models
- Implement model monitoring and validation
- Address AI bias and fairness concerns

### Supply Chain Security
- Implement software bill of materials (SBOM)
- Monitor third-party dependencies
- Use trusted software repositories
- Implement code signing and verification

### Quantum-Safe Cryptography
- Prepare for post-quantum cryptography
- Implement crypto-agility
- Monitor quantum computing developments
- Plan migration strategies

## Best Practices Summary

### Governance and Strategy
1. Develop a comprehensive cloud security strategy
2. Implement security by design principles
3. Regular security training and awareness
4. Maintain security documentation and policies

### Technical Implementation
1. Use infrastructure as code (IaC) for consistency
2. Implement automated security testing
3. Use cloud-native security services
4. Regular security assessments and penetration testing

### Operational Excellence
1. Implement continuous monitoring and alerting
2. Automate security operations where possible
3. Regular backup and recovery testing
4. Maintain incident response capabilities

## Conclusion

Cloud security is a shared responsibility that requires a comprehensive approach combining people, processes, and technology. By implementing these best practices, organizations can significantly improve their cloud security posture and reduce the risk of security incidents.

Remember, cloud security is not a one-time implementation but an ongoing process that requires continuous monitoring, assessment, and improvement. Stay informed about the latest threats and security developments, and regularly review and update your security practices.

The cloud offers tremendous opportunities for innovation and efficiency, but only when properly secured. Invest in cloud security today to protect your organization's future.`,
      author: "Bhavesh",
      createdAt: "2025-01-01",
      updatedAt: "2025-01-01",
      tags: ["Cloud Security", "AWS", "Azure", "GCP", "Best Practices"],
      category: "Cloud Security",
      thumbnail:
        "/placeholder.svg?height=400&width=600&text=Cloud+Security+2025",
      readTime: "14 min",
      difficulty: "Intermediate",
      likes: 287,
      views: 2100,
      featured: false,
    },
  ],

  // Security tools data
  tools: [
    {
      id: "1",
      name: "Burp Suite",
      description:
        "Comprehensive web application security testing platform with advanced scanning capabilities and manual testing tools.",
      category: "Web Security",
      url: "https://portswigger.net/burp",
      githubLink: null,
      tags: ["Web Testing", "Proxy", "Scanner", "Professional"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Web vulnerability scanner",
        "Intercepting proxy",
        "Application security testing",
        "Manual testing tools",
        "Extensible platform",
      ],
    },
    {
      id: "2",
      name: "Metasploit Framework",
      description:
        "Penetration testing platform for developing and executing exploit code against remote targets.",
      category: "Penetration Testing",
      url: "https://www.metasploit.com",
      githubLink: "https://github.com/rapid7/metasploit-framework",
      tags: ["Exploitation", "Payloads", "Post-exploitation"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Exploit development",
        "Payload generation",
        "Post-exploitation modules",
        "Automated testing",
        "Integration with other tools",
      ],
    },
    {
      id: "3",
      name: "Nmap",
      description:
        "Network discovery and security auditing tool for identifying hosts and services on a network.",
      category: "Network Security",
      url: "https://nmap.org",
      githubLink: null,
      tags: ["Network Scanner", "Port Scanner", "Discovery"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Host discovery",
        "Port scanning",
        "Service detection",
        "OS fingerprinting",
        "Scriptable interaction",
      ],
    },
    {
      id: "4",
      name: "Wireshark",
      description:
        "Network protocol analyzer for troubleshooting, analysis, and protocol development.",
      category: "Network Security",
      url: "https://www.wireshark.org",
      githubLink: "https://github.com/wireshark/wireshark",
      tags: ["Packet Analysis", "Network Monitoring", "Forensics"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Deep packet inspection",
        "Live capture",
        "Rich display filters",
        "Protocol decryption",
        "Custom protocol support",
      ],
    },
    {
      id: "5",
      name: "Kali Linux",
      description:
        "Penetration testing and security auditing Linux distribution with hundreds of pre-installed tools.",
      category: "Penetration Testing",
      url: "https://www.kali.org",
      githubLink: null,
      tags: ["OS", "Security Tools", "Forensics"],
      platform: ["Linux"],
      features: [
        "Pre-installed security tools",
        "Custom kernel",
        "Forensic mode",
        "Wireless device support",
        "Customizable environment",
      ],
    },
    {
      id: "6",
      name: "OWASP ZAP",
      description:
        "Open-source web application security scanner for finding vulnerabilities in web apps.",
      category: "Web Security",
      url: "https://www.zaproxy.org",
      githubLink: "https://github.com/zaproxy/zaproxy",
      tags: ["Web Scanner", "Proxy", "Automated Testing"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Automated scanner",
        "Intercepting proxy",
        "REST API",
        "Authentication support",
        "Plug-in architecture",
      ],
    },
    {
      id: "7",
      name: "John the Ripper",
      description:
        "Password cracking tool for detecting weak Unix and Windows passwords.",
      category: "Password Security",
      url: "https://www.openwall.com/john",
      githubLink: "https://github.com/openwall/john",
      tags: ["Password Cracking", "Brute Force", "Dictionary Attack"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Multiple hash types",
        "Custom wordlists",
        "Brute-force modes",
        "Distributed cracking",
        "Rule-based attacks",
      ],
    },
    {
      id: "8",
      name: "Hashcat",
      description:
        "Advanced password recovery tool supporting multiple hash algorithms and attack modes.",
      category: "Password Security",
      url: "https://hashcat.net/hashcat",
      githubLink: "https://github.com/hashcat/hashcat",
      tags: ["GPU Acceleration", "Password Cracking", "Brute Force"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "GPU acceleration",
        "Multiple hash types",
        "Rule-based attacks",
        "Distributed cracking",
        "Performance monitoring",
      ],
    },
    {
      id: "9",
      name: "Snort",
      description:
        "Open-source network intrusion detection and prevention system.",
      category: "Network Security",
      url: "https://www.snort.org",
      githubLink: "https://github.com/snort3/snort3",
      tags: ["IDS", "IPS", "Network Monitoring"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Real-time traffic analysis",
        "Protocol analysis",
        "Content matching",
        "Preprocessor system",
        "Rule-based detection",
      ],
    },
    {
      id: "10",
      name: "Ghidra",
      description:
        "Software reverse engineering framework developed by NSA's Research Directorate.",
      category: "Reverse Engineering",
      url: "https://ghidra-sre.org",
      githubLink: "https://github.com/NationalSecurityAgency/ghidra",
      tags: ["Disassembler", "Decompiler", "Debugger"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Disassembly",
        "Decompilation",
        "Graphing",
        "Scriptable",
        "Collaborative analysis",
      ],
    },
    {
      id: "11",
      name: "Cuckoo Sandbox",
      description:
        "Automated malware analysis system for detecting and analyzing malicious files.",
      category: "Malware Analysis",
      url: "https://cuckoosandbox.org",
      githubLink: "https://github.com/cuckoosandbox/cuckoo",
      tags: ["Sandbox", "Malware", "Behavior Analysis"],
      platform: ["Windows", "Linux"],
      features: [
        "Automated analysis",
        "Behavioral analysis",
        "Memory analysis",
        "Network traffic capture",
        "Custom reporting",
      ],
    },
    {
      id: "12",
      name: "The Sleuth Kit (TSK)",
      description:
        "Forensic toolkit for analyzing disk images and recovering files from digital evidence.",
      category: "Digital Forensics",
      url: "https://www.sleuthkit.org",
      githubLink: "https://github.com/sleuthkit/sleuthkit",
      tags: ["Forensics", "Disk Analysis", "File Recovery"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "File system analysis",
        "Timeline generation",
        "Hash filtering",
        "Keyword searching",
        "Image file support",
      ],
    },
    {
      id: "13",
      name: "Aircrack-ng",
      description:
        "Suite of tools for assessing WiFi network security and cracking WEP/WPA keys.",
      category: "Wireless Security",
      url: "https://www.aircrack-ng.org",
      githubLink: "https://github.com/aircrack-ng/aircrack-ng",
      tags: ["WiFi", "Packet Injection", "Cracking"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Packet capture",
        "WEP/WPA cracking",
        "Packet injection",
        "Network detection",
        "Handshake capture",
      ],
    },
    {
      id: "14",
      name: "Maltego",
      description:
        "Interactive data mining tool for link analysis and gathering open-source intelligence.",
      category: "OSINT",
      url: "https://www.maltego.com",
      githubLink: null,
      tags: ["Reconnaissance", "Data Visualization", "Entity Mapping"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Entity relationship mapping",
        "Data aggregation",
        "Transform hub",
        "Custom transforms",
        "Visual investigation",
      ],
    },
    {
      id: "15",
      name: "Immunity Debugger",
      description:
        "Powerful debugger for analyzing malware and reverse engineering binaries.",
      category: "Reverse Engineering",
      url: "https://www.immunityinc.com/products/debugger",
      githubLink: null,
      tags: ["Debugger", "Malware Analysis", "Exploit Development"],
      platform: ["Windows"],
      features: [
        "Python scripting",
        "Graphical analysis",
        "Shellcode analysis",
        "Memory inspection",
        "Vulnerability research",
      ],
    },
    {
      id: "16",
      name: "Volatility",
      description:
        "Advanced memory forensics framework for incident response and malware analysis.",
      category: "Memory Forensics",
      url: "https://www.volatilityfoundation.org",
      githubLink: "https://github.com/volatilityfoundation/volatility",
      tags: ["Memory Analysis", "Incident Response", "Malware"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Memory dump analysis",
        "Process inspection",
        "Network connections",
        "Registry analysis",
        "Plugin architecture",
      ],
    },
    {
      id: "17",
      name: "OpenVAS",
      description:
        "Full-featured vulnerability scanner for comprehensive network security auditing.",
      category: "Vulnerability Assessment",
      url: "https://openvas.org",
      githubLink: "https://github.com/greenbone/openvas-scanner",
      tags: [
        "Vulnerability Scanning",
        "Network Assessment",
        "Security Auditing",
      ],
      platform: ["Windows", "Linux"],
      features: [
        "Daily updated feeds",
        "Comprehensive testing",
        "Scheduled scans",
        "Detailed reporting",
        "Custom policies",
      ],
    },
    {
      id: "18",
      name: "IDA Pro",
      description:
        "Interactive disassembler and debugger for reverse engineering and malware analysis.",
      category: "Reverse Engineering",
      url: "https://www.hex-rays.com/products/ida",
      githubLink: null,
      tags: ["Disassembler", "Debugger", "Binary Analysis"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Interactive disassembly",
        "Graphical views",
        "Scriptable interface",
        "Cross-platform debugging",
        "Plugin support",
      ],
    },
    {
      id: "19",
      name: "Splunk",
      description:
        "Platform for searching, monitoring, and analyzing machine-generated big data.",
      category: "SIEM",
      url: "https://www.splunk.com",
      githubLink: null,
      tags: ["Log Analysis", "Security Monitoring", "Incident Response"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "Real-time monitoring",
        "Advanced analytics",
        "Custom dashboards",
        "Alerting system",
        "Machine learning",
      ],
    },
    {
      id: "20",
      name: "BloodHound",
      description:
        "Active Directory security analysis tool for identifying attack paths in AD environments.",
      category: "Active Directory Security",
      url: "https://bloodhound.readthedocs.io",
      githubLink: "https://github.com/BloodHoundAD/BloodHound",
      tags: ["Active Directory", "Attack Paths", "Graph Analysis"],
      platform: ["Windows", "Linux", "macOS"],
      features: [
        "AD relationship mapping",
        "Attack path visualization",
        "Privilege escalation detection",
        "Custom queries",
        "Data export",
      ],
    },
  ],

  // Learning resources data
  resources: [],

  // CTF events data
  ctfEvents: {
    upcoming: [
      {
        id: "1",
        name: "idekCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-02T00:00:00Z",
        endDate: "2025-08-04T00:00:00Z",
        url: "https://ctf.idek.team/",
        type: "Jeopardy",
        participants: null,
        prize: "Infra sponsored by goo.gle/ctfsponsorship",
        difficulty: null,
        description:
          "The fourth iteration of idekCTF! Prequalifier for MaltaCTF 2025 Finals.",
      },
      {
        id: "2",
        name: "justCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-02T06:00:00Z",
        endDate: "2025-08-03T19:00:00Z",
        url: "http://2025.justctf.team/",
        type: "Jeopardy",
        participants: null,
        prize: "Cash prizes (details TBA)",
        difficulty: null,
        description:
          "2025 justCTF jeopardy competition. Sponsors: Trail of Bits, OtterSec.",
      },
      {
        id: "3",
        name: "WHY2025 CTF",
        platform: "CTFtime",
        startDate: "2025-08-08T16:00:00Z",
        endDate: "2025-08-11T16:00:00Z",
        url: "https://ctf.why2025.org/",
        type: "Jeopardy",
        participants: null,
        prize: null,
        difficulty: null,
        description:
          "CTF at WHY2025 with both online and on-site challenges for all skill levels.",
      },
      {
        id: "4",
        name: "CSD CTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-08T21:00:00Z",
        endDate: "2025-08-10T21:00:00Z",
        url: "https://cyberstudents.net/ctf",
        type: "Jeopardy",
        participants: null,
        prize: "Minimum $200 prize pool",
        difficulty: "Mixed",
        description:
          "Weekend-long CTF with high school and open brackets. Categories: web, pwn, rev, crypto, forensics, misc.",
      },
      {
        id: "5",
        name: "scriptCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-16T00:00:00Z",
        endDate: "2025-08-18T00:00:00Z",
        url: "https://ctf.scriptsorcerers.xyz/",
        type: "Jeopardy",
        participants: null,
        prize: "$6000+ prize pool",
        difficulty: "Beginner-friendly",
        description:
          "48-hour jeopardy CTF with mostly beginner friendly challenges. Team limit: 4 members.",
      },
      {
        id: "6",
        name: "SekaiCTF 2025",
        platform: "CTFtime",
        startDate: "2025-08-16T01:00:00Z",
        endDate: "2025-08-18T01:00:00Z",
        url: "https://ctf.sekai.team/",
        type: "Jeopardy",
        participants: null,
        prize: "$15,000+ in prizes",
        difficulty: "Intermediate-Advanced",
        description:
          "Fourth edition serving as prequalifier for MaltaCTF and XCTF Finals. Includes beginner-friendly tasks.",
      },
      {
        id: "7",
        name: "CTFZone 2025 Quals",
        platform: "CTFtime",
        startDate: "2025-08-16T10:00:00Z",
        endDate: "2025-08-17T10:00:00Z",
        url: "https://ctf.bi.zone/",
        type: "Jeopardy",
        participants: null,
        prize: "Top 10 advance to finals ($18k prize pool)",
        difficulty: null,
        description:
          "24-hour online qualifier. Categories: web, pwn, crypto, reverse, PPC. Top 10 proceed to Attack/Defense finals.",
      },
    ],
  },

  // News data
  news: [
    {
      id: "1",
      headline: "Microsoft Subcontractor 'Escorts' Handle Sensitive DOD Data",
      summary:
        "Microsoft employs global software engineers to maintain DOD systems, with non-US citizens requiring 'escorts' due to security clearance requirements, raising concerns about technical expertise gaps and potential security risks.",
      link: "https://www.propublica.org/article/microsoft-program-dod-chinese-hackers",
      source: "ProPublica",
      category: "Government Security",
      date: "2025-07-15",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "2",
      headline: "Salt Typhoon Compromised US Army National Guard Network",
      summary:
        "Chinese threat actors Salt Typhoon had access to a US state's Army National Guard network for 9 months, collecting network configurations, credentials, and diagrams that could facilitate further attacks.",
      link: "https://www.nextgov.com/cybersecurity/2025/07/salt-typhoon-national-guard/123456/",
      source: "Nextgov",
      category: "Cyber Espionage",
      date: "2025-07-16",
      severity: "Critical",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "3",
      headline:
        "Congressional Hearing on Stuxnet and Cyber Threats to Critical Infrastructure",
      summary:
        "US House Homeland Security Subcommittee schedules hearing to examine Stuxnet's legacy and evolving cyber threats to critical infrastructure 15 years after the landmark attack.",
      link: "https://homeland.house.gov/hearings/stuxnet-15-years-later",
      source: "House Homeland Security Committee",
      category: "Government",
      date: "2025-07-16",
      severity: "Medium",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "4",
      headline:
        "Cloudflare 1.1.1.1 DNS Resolver Outage Due to Internal Misconfiguration",
      summary:
        "Cloudflare's global DNS outage affecting 1.1.1.1 service for 62 minutes was caused by an internal configuration error, not an attack or BGP hijack.",
      link: "https://blog.cloudflare.com/1-1-1-1-outage-july-2025",
      source: "Cloudflare",
      category: "Internet Infrastructure",
      date: "2025-07-14",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "5",
      headline: "SonicWall SMA 100 Backdoor Malware Campaign Ongoing",
      summary:
        "UNC6148 attackers are compromising fully patched end-of-life SonicWall SMA 100 appliances using a custom backdoor called OVERSTEP with rootkit capabilities.",
      link: "https://cloud.google.com/blog/products/security/sonicwall-sma-exploitation-campaign",
      source: "Google Threat Intelligence",
      category: "Malware",
      date: "2025-07-16",
      severity: "Critical",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "6",
      headline: "Oracle Critical Patch Update Addresses 200+ Vulnerabilities",
      summary:
        "Oracle's July 2025 CPU includes 309 patches for 200+ vulnerabilities across 111 products, including a critical RCE flaw in OCI Code Editor.",
      link: "https://www.oracle.com/security-alerts/cpujul2025.html",
      source: "Oracle",
      category: "Vulnerabilities",
      date: "2025-07-16",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "7",
      headline: "Cisco Releases Updates for Multiple Critical Vulnerabilities",
      summary:
        "Cisco patches three critical 10.0 CVSS vulnerabilities in Identity Services Engine that allow unauthenticated remote code execution as root.",
      link: "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-ise-rce-2025",
      source: "Cisco",
      category: "Vulnerabilities",
      date: "2025-07-16",
      severity: "Critical",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "8",
      headline: "UNFI Estimates $350-$400M Sales Impact from June Cyberattack",
      summary:
        "United Natural Foods Inc. reports significant financial impact from June cyberattack including $350-$400M in lost sales and $25M in remediation costs.",
      link: "https://ir.unfi.com/news-releases/news-release-details/united-natural-foods-inc-provides-business-update",
      source: "UNFI",
      category: "Cyber Attack Impact",
      date: "2025-07-16",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "9",
      headline:
        "Co-op CEO Confirms All 6.5M Members' Data Stolen in April Attack",
      summary:
        "UK's Co-op Group reveals attackers stole personal data of all 6.5 million members in April breach, though no financial information was compromised.",
      link: "https://www.bbc.com/news/technology-12345678",
      source: "BBC",
      category: "Data Breach",
      date: "2025-07-16",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "10",
      headline: "UK NCSC Launches Vulnerability Research Initiative",
      summary:
        "UK's National Cyber Security Centre establishes Vulnerability Research Initiative to expand vulnerability discovery capabilities through external experts.",
      link: "https://www.ncsc.gov.uk/news/vulnerability-research-initiative-launch",
      source: "NCSC",
      category: "Government Security",
      date: "2025-07-14",
      severity: "Medium",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "11",
      headline: "Former US Army Soldier Pleads Guilty to Cybercrimes",
      summary:
        "Cameron John Wagenius pleads guilty to conspiracy, extortion and identity theft for cyberattacks targeting tech and telecom companies, facing up to 27 years.",
      link: "https://www.justice.gov/usao-sdny/pr/former-us-soldier-pleads-guilty-hacking-and-extortion-scheme",
      source: "US Department of Justice",
      category: "Cybercrime",
      date: "2025-07-15",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "12",
      headline: "CitrixBleed 2 is Being Exploited: Patch Now",
      summary:
        "CISA adds CitrixBleed 2 vulnerability (CVE-2025-5777) to Known Exploited Vulnerabilities catalog with unprecedented 1-day mitigation deadline for federal agencies.",
      link: "https://therecord.media/citrix-bleed-2-cisa-urgent-patch",
      source: "The Record",
      category: "Vulnerabilities",
      date: "2025-07-10",
      severity: "Critical",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "13",
      headline: "Critical Remote Code Execution Flaw in Wing FTP Server",
      summary:
        "Threat actors actively exploiting critical (CVSS 10.0) RCE vulnerability in Wing FTP Server (CVE-2025-47812), patched in version 7.4.4 but widely exploited within 24 hours of disclosure.",
      link: "https://www.rcesecurity.com/wing-ftp-rce",
      source: "RCE Security",
      category: "Vulnerabilities",
      date: "2025-07-11",
      severity: "Critical",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "14",
      headline: "Prison Sentence for Stealing and Sharing Semiconductor IP",
      summary:
        "Former ASML/NXP employee sentenced to 3 years in Dutch prison for stealing chip manufacturing technology and sharing it with contacts in Russia, violating EU sanctions.",
      link: "https://www.theregister.com/2025/07/10/asml_engineer_russia_sentence/",
      source: "The Register",
      category: "Cybercrime",
      date: "2025-07-10",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "15",
      headline: "Supply Chain Attack Targets Gravity Forms WordPress Plugin",
      summary:
        "Compromised versions of Gravity Forms plugin (2.9.11.1 & 2.9.12) collected site metadata and attempted to download additional payloads that would create admin accounts.",
      link: "https://www.gravityforms.com/blog/security-incident-notice",
      source: "Gravity Forms",
      category: "Supply Chain Attack",
      date: "2025-07-11",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "16",
      headline: "Automotive Bluetooth RCE Exploit Patch Delays",
      summary:
        "'PerfektBlue' vulnerabilities in BlueSDK Bluetooth stack allow 1-click RCE on automotive systems from Mercedes, Volkswagen and others, with patches delayed by complex supply chains.",
      link: "https://perfektblue.pcacybersecurity.com",
      source: "PCA Cyber Security",
      category: "Vulnerabilities",
      date: "2025-07-11",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "17",
      headline: "Nvidia GPU Rowhammer Attack Requires ECC Mitigation",
      summary:
        "First demonstration of Rowhammer bit-flipping attacks on Nvidia GPUs (A6000 with GDDR6) can corrupt AI models, with ECC memory recommended as mitigation despite performance impact.",
      link: "https://gpuhammer.com",
      source: "University of Toronto",
      category: "Hardware Security",
      date: "2025-07-12",
      severity: "Medium",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "18",
      headline: "Albemarle, VA Reports Ransomware Attack",
      summary:
        "Virginia county hit by ransomware attack compromising resident and employee PII including SSNs, driver's licenses and military IDs, with non-emergency systems down for two weeks.",
      link: "https://www.albemarle.org/cyber-incident",
      source: "Albemarle County",
      category: "Ransomware",
      date: "2025-07-11",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "19",
      headline: "CISA Warns of Train Braking System Vulnerability",
      summary:
        "20-year-old unpatched flaw in End-of-Train devices (CVE-2025-1727) allows RF-based attackers to manipulate braking systems, with mitigation requiring updates to rail industry standards.",
      link: "https://www.cisa.gov/news/train-braking-vulnerability",
      source: "CISA",
      category: "ICS Security",
      date: "2025-07-14",
      severity: "Critical",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "20",
      headline: "McDonald's Job Chatbot Exposed 64M Applications",
      summary:
        "Default credentials (123456:123456) and API vulnerability in Paradox.ai's McHire chatbot exposed 64 million job applications, prompting vendor to launch bug bounty program.",
      link: "https://www.paradox.ai/security-update",
      source: "Paradox.ai",
      category: "Data Exposure",
      date: "2025-07-14",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "21",
      headline: "Malicious Browser Extensions Impact 2.3M Users",
      summary:
        "Coordinated campaign of 18 malicious Chrome/Edge extensions including a 'verified' color picker infected 2.3 million users before being discovered by Koi Security researchers.",
      link: "https://blog.koi.security/malicious-extensions",
      source: "Koi Security",
      category: "Malware",
      date: "2025-07-15",
      severity: "High",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "22",
      headline: "FortiWeb Pre-Auth RCE Exploited in Wild",
      summary:
        "Exploit for FortiWeb vulnerability (CVE-2025-25257) now publicly available and actively being used in attacks, prompting urgent patching recommendations.",
      link: "https://pwner.gg/fortiweb-exploit",
      source: "Internet Storm Center",
      category: "Vulnerabilities",
      date: "2025-07-14",
      severity: "Critical",
      image: "/placeholder.svg?height=200&width=400",
    },
  ],

  events: [
    // {
    //   id: "1",
    //   title: "DEF CON 32",
    //   slug: "defcon-32-2024",
    //   description:
    //     "The world's largest and most notable hacker convention, featuring talks, workshops, and competitions on cybersecurity, privacy, and technology.",
    //   longDescription:
    //     "DEF CON is one of the world's largest annual hacker conventions, held every year in Las Vegas. The convention features talks on computer security, privacy, and technology, as well as hands-on demonstrations, contests, and social events. DEF CON 32 will feature cutting-edge research, zero-day disclosures, and the latest in cybersecurity trends.",
    //   startDate: "2024-08-08T09:00:00Z",
    //   endDate: "2024-08-11T18:00:00Z",
    //   timezone: "PDT",
    //   type: "Conference",
    //   format: "In-Person",
    //   location: {
    //     venue: "Caesars Forum",
    //     city: "Las Vegas",
    //     state: "Nevada",
    //     country: "USA",
    //     address: "3911 Koval Ln, Las Vegas, NV 89109",
    //   },
    //   organizer: "DEF CON Communications",
    //   website: "https://defcon.org",
    //   registrationUrl: "https://defcon.org/html/defcon-32/dc-32-index.html",
    //   price: {
    //     type: "Paid",
    //     amount: "$320",
    //     currency: "USD",
    //     earlyBird: "$280",
    //   },
    //   capacity: 30000,
    //   expectedAttendees: 25000,
    //   tags: ["Hacking", "Security Research", "Networking", "Workshops", "CTF"],
    //   topics: ["Zero-day Research", "Social Engineering", "Hardware Hacking", "AI Security", "Cloud Security"],
    //   difficulty: "All Levels",
    //   image: "/placeholder.svg?height=400&width=600&text=DEF+CON+32",
    //   featured: true,
    //   status: "Open",
    //   speakers: [
    //     { name: "Jeff Moss", role: "DEF CON Founder" },
    //     { name: "Various Security Researchers", role: "Industry Experts" },
    //   ],
    //   agenda: [
    //     { time: "09:00", title: "Registration & Welcome", type: "General" },
    //     { time: "10:00", title: "Keynote Presentations", type: "Keynote" },
    //     { time: "11:30", title: "Technical Talks", type: "Talk" },
    //     { time: "14:00", title: "Workshops & Villages", type: "Workshop" },
    //     { time: "18:00", title: "Networking & Social Events", type: "Social" },
    //   ],
    // },
    {
      id: "1",
      title: "Null Ahmedabad Monthly Meetup - 26th July",
      date: "2025-07-26",
      time: "10:00-13:45",
      location: {
        venue: "Department of Biochemistry And Forensic Science",
         city: "Ahmedabad",
         state: "Gujarat",
         country: "India",
        address: "2GQV+GH6, University Area, Ahmedabad, Gujarat 380009, India",
       },
 
      price: {
       type: "Free",},
         type: "Meetup",
         format: "In-Person",
      organizer: "Null Ahmedabad",
      hosts: ["Parthiv Dudhat", "Karm Rajput", "Harprit Nanda"],
      attending: 92,
      sessions: [
        {
          title: "Integer Overflow attacks in Web3",
          speaker: "Kalp Shah",
        },
        {
          title: "SOC 101",
          speaker: "Yash Kanzariya",
        },
        {
          title:
            "Prompting 101 - Open Discussion On Prompting Tips & Techniques",
          speaker: "Jay Patel",
        },
        {
          title: "CTF",
          speaker: "Jay Patel",
        },
      ],
      tags: ["AI", "Crypto"],
      registration: "Required",
     registrationLink: "https://lu.ma/6dpwnb4z",
    },
  ],

  // Jobs data
  jobs: [
    // {
    //   id: "1",
    //   title: "Senior Penetration Tester",
    //   company: "CyberSec Solutions",
    //   location: "San Francisco, CA",
    //   type: "Full-time",
    //   salary: "$120,000 - $150,000",
    //   description:
    //     "Lead penetration testing engagements for enterprise clients, conduct security assessments, and mentor junior team members.",
    //   skills: ["Penetration Testing", "OWASP", "Burp Suite", "Metasploit", "Python"],
    //   requirements: [
    //     "5+ years of penetration testing experience",
    //     "OSCP or similar certification preferred",
    //     "Strong knowledge of web application security",
    //     "Experience with network security testing",
    //     "Excellent written and verbal communication skills",
    //   ],
    //   benefits: [
    //     "Competitive salary and bonuses",
    //     "Health, dental, and vision insurance",
    //     "401(k) with company matching",
    //     "Professional development budget",
    //     "Flexible work arrangements",
    //   ],
    //   applyLink: "https://example.com/jobs/senior-pentest",
    //   postedDate: "2024-01-18",
    //   remote: false,
    //   experience: "Senior Level",
    //   education: "Bachelor's",
    // },
  ],

  // Learning paths data
  //   learningPaths: {
  //     beginner: {
  //       title: "Beginner Path",
  //       description: "Start your cybersecurity journey with fundamental concepts",
  //       duration: "3-6 months",
  //       modules: [
  //         {
  //           id: 1,
  //           title: "Introduction to Cybersecurity",
  //           description: "Basic concepts, terminology, and career paths in cybersecurity",
  //           duration: "2 weeks",
  //           completed: true,
  //           lessons: 8,
  //           topics: ["CIA Triad", "Threat Landscape", "Career Paths", "Ethics"],
  //         },
  //         {
  //           id: 2,
  //           title: "Network Fundamentals",
  //           description: "TCP/IP, OSI model, and network protocols essential for security",
  //           duration: "3 weeks",
  //           completed: true,
  //           lessons: 12,
  //           topics: ["OSI Model", "TCP/IP", "Routing", "Switching"],
  //         },
  //         {
  //           id: 3,
  //           title: "Operating Systems Security",
  //           description: "Windows and Linux security basics and hardening techniques",
  //           duration: "4 weeks",
  //           completed: false,
  //           lessons: 15,
  //           topics: ["Windows Security", "Linux Security", "Access Controls", "Hardening"],
  //         },
  //         {
  //           id: 4,
  //           title: "Web Application Basics",
  //           description: "HTTP, HTML, and web technologies security fundamentals",
  //           duration: "3 weeks",
  //           completed: false,
  //           lessons: 10,
  //           topics: ["HTTP/HTTPS", "Web Architecture", "Common Vulnerabilities", "Secure Coding"],
  //         },
  //       ],
  //     },
  //     intermediate: {
  //       title: "Intermediate Path",
  //       description: "Advance your skills with hands-on security practices",
  //       duration: "6-9 months",
  //       modules: [
  //         {
  //           id: 1,
  //           title: "Vulnerability Assessment",
  //           description: "Identifying and analyzing security weaknesses in systems",
  //           duration: "4 weeks",
  //           completed: false,
  //           lessons: 18,
  //           topics: ["Vulnerability Scanning", "Risk Assessment", "Reporting", "Remediation"],
  //         },
  //         {
  //           id: 2,
  //           title: "Penetration Testing Basics",
  //           description: "Ethical hacking methodologies and tools for security testing",
  //           duration: "6 weeks",
  //           completed: false,
  //           lessons: 22,
  //           topics: ["Methodology", "Reconnaissance", "Exploitation", "Post-Exploitation"],
  //         },
  //         {
  //           id: 3,
  //           title: "Incident Response",
  //           description: "Handling security incidents and digital forensics basics",
  //           duration: "4 weeks",
  //           completed: false,
  //           lessons: 16,
  //           topics: ["IR Process", "Evidence Collection", "Analysis", "Recovery"],
  //         },
  //         {
  //           id: 4,
  //           title: "Security Architecture",
  //           description: "Designing secure systems and network architectures",
  //           duration: "5 weeks",
  //           completed: false,
  //           lessons: 20,
  //           topics: ["Security Design", "Defense in Depth", "Zero Trust", "Compliance"],
  //         },
  //       ],
  //     },
  //     advanced: {
  //       title: "Advanced Path",
  //       description: "Master advanced techniques and specialized skills",
  //       duration: "9-12 months",
  //       modules: [
  //         {
  //           id: 1,
  //           title: "Advanced Penetration Testing",
  //           description: "Complex attack scenarios and evasion techniques",
  //           duration: "6 weeks",
  //           completed: false,
  //           lessons: 25,
  //           topics: ["Advanced Exploitation", "Evasion", "Custom Payloads", "Red Team TTPs"],
  //         },
  //         {
  //           id: 2,
  //           title: "Malware Analysis",
  //           description: "Reverse engineering and dynamic analysis of malicious software",
  //           duration: "8 weeks",
  //           completed: false,
  //           lessons: 30,
  //           topics: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering", "Threat Intelligence"],
  //         },
  //         {
  //           id: 3,
  //           title: "Red Team Operations",
  //           description: "Advanced adversary simulation and attack techniques",
  //           duration: "8 weeks",
  //           completed: false,
  //           lessons: 28,
  //           topics: ["C2 Frameworks", "Persistence", "Lateral Movement", "Exfiltration"],
  //         },
  //         {
  //           id: 4,
  //           title: "Security Research",
  //           description: "Finding zero-days and conducting vulnerability research",
  //           duration: "10 weeks",
  //           completed: false,
  //           lessons: 35,
  //           topics: ["Vulnerability Research", "Exploit Development", "Fuzzing", "Responsible Disclosure"],
  //         },
  //       ],
  //     },
  //   },

  // Certifications data
  //   certifications: [
  //     {
  //       name: "CompTIA Security+",
  //       provider: "CompTIA",
  //       difficulty: "Beginner",
  //       duration: "3-6 months",
  //       rating: 4.5,
  //       students: "50K+",
  //       description: "Entry-level certification covering fundamental security concepts",
  //       topics: ["Network Security", "Compliance", "Threats", "Cryptography"],
  //     },
  //     {
  //       name: "Certified Ethical Hacker (CEH)",
  //       provider: "EC-Council",
  //       difficulty: "Intermediate",
  //       duration: "4-6 months",
  //       rating: 4.3,
  //       students: "30K+",
  //       description: "Hands-on ethical hacking and penetration testing certification",
  //       topics: ["Ethical Hacking", "Penetration Testing", "Vulnerability Assessment", "Security Tools"],
  //     },
  //     {
  //       name: "CISSP",
  //       provider: "ISC2",
  //       difficulty: "Advanced",
  //       duration: "6-12 months",
  //       rating: 4.7,
  //       students: "25K+",
  //       description: "Advanced security management and architecture certification",
  //       topics: ["Security Management", "Risk Management", "Security Architecture", "Governance"],
  //     },
  //     {
  //       name: "OSCP",
  //       provider: "Offensive Security",
  //       difficulty: "Advanced",
  //       duration: "6-9 months",
  //       rating: 4.8,
  //       students: "15K+",
  //       description: "Hands-on penetration testing certification with practical exam",
  //       topics: ["Penetration Testing", "Exploitation", "Buffer Overflows", "Privilege Escalation"],
  //     },
  //   ],
  // Founders Information
  founders: [
    {
      id: 1,
      name: "Faisal (0xBinaryOrbit)",
      role: "Founder, Universe of Hacking | Lead Security Researcher",
      bio: "Cybersecurity master's student at LJ University , red teamer, and CTF solver. Passionate about building offensive tools, discovering real-world vulnerabilities, and making cybersecurity education freely accessible through Universe of Hacking.",
      image: "", // No photo yet, placeholder omitted
      skills: [
        "Red Teaming",
        "Web Exploitation",
        "CTF Challenges",
        "OSINT",
        "Security Automation",
      ],
      social: {
        twitter: "https://twitter.com/0xBinaryOrbit",
        linkedin: "https://linkedin.com/in/faisal-khan607",
        github: "https://github.com/0xBinaryOrbit",
        telegram: "https://t.me/universeofhacking",
      },
    },
    {
      id: 2,
      name: "Bhavesh",
      role: "Co-Founder & Technical Lead",
      bio: "Cybersecurity master's student at GU(Gujarat University), Ethical hacking enthusiast with a strong grip on backend systems using MERN stack. Experienced in building secure, scalable web apps and exploring cybersecurity practices to build resilient systems.",
      image: "", // No photo yet, placeholder omitted
      skills: [
        "Wapt",
        "penetration testing",
        "cryptography",
        "kali Linux",
        "bash",
        "malware analysis",
      ],
      social: {
        twitter: "https://twitter.com/___bhavesh_07",
        linkedin: "https://www.linkedin.com/in/parmar-bhavesh-219283269/",
        github: "https://github.com/bhaveshparmar07",
      },
    },
  ],
};

// Helper functions for data access
export const getBlogById = (id) => {
  return globalData.blogs.find((blog) => blog.id === id);
};

export const getBlogBySlug = (slug) => {
  return globalData.blogs.find((blog) => blog.slug === slug);
};

export const getToolById = (id) => {
  return globalData.tools.find((tool) => tool.id === id);
};

export const getResourceById = (id) => {
  return globalData.resources.find((resource) => resource.id === id);
};

export const getJobById = (id) => {
  return globalData.jobs.find((job) => job.id === id);
};

export const getNewsById = (id) => {
  return globalData.news.find((news) => news.id === id);
};

// Filter functions
export const filterBlogsByCategory = (category) => {
  if (category === "All") return globalData.blogs;
  return globalData.blogs.filter((blog) => blog.category === category);
};

export const filterToolsByCategory = (category) => {
  if (category === "All") return globalData.tools;
  return globalData.tools.filter((tool) => tool.category === category);
};

export const filterResourcesByType = (type) => {
  if (type === "All") return globalData.resources;
  return globalData.resources.filter((resource) => resource.type === type);
};

export const filterJobsByType = (type) => {
  if (type === "All") return globalData.jobs;
  return globalData.jobs.filter(
    (job) => job.type === type || (type === "Remote" && job.remote)
  );
};

export const filterNewsByCategory = (category) => {
  if (category === "All") return globalData.news;
  return globalData.news.filter((news) => news.category === category);
};

// Search functions
export const searchBlogs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchTools = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowercaseQuery) ||
      tool.description.toLowerCase().includes(lowercaseQuery) ||
      tool.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchResources = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowercaseQuery) ||
      resource.description.toLowerCase().includes(lowercaseQuery) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const searchJobs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return globalData.jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.company.toLowerCase().includes(lowercaseQuery) ||
      job.skills.some((skill) => skill.toLowerCase().includes(lowercaseQuery))
  );
};

// Helper functions for events
export const getUpcomingEvents = () => {
  const now = new Date();
  return globalData.events
    .filter((event) => new Date(event.startDate) > now)
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
};

export const getPastEvents = () => {
  const now = new Date();
  return globalData.events
    .filter((event) => new Date(event.endDate) < now)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
};

export const getFeaturedEvents = () => {
  return globalData.events.filter((event) => event.featured);
};

export const getEventById = (id) => {
  return globalData.events.find((event) => event.id === id);
};

export const getEventBySlug = (slug) => {
  return globalData.events.find((event) => event.slug === slug);
};

export const searchEvents = (query) => {
  const searchTerm = query.toLowerCase();
  return globalData.events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      event.topics.some((topic) => topic.toLowerCase().includes(searchTerm)) ||
      event.location.city.toLowerCase().includes(searchTerm) ||
      event.organizer.toLowerCase().includes(searchTerm)
  );
};

export const getEventsByType = (type) => {
  return globalData.events.filter((event) => event.type === type);
};

export const getEventsByFormat = (format) => {
  return globalData.events.filter((event) => event.format === format);
};

export const getEventsByLocation = (city) => {
  return globalData.events.filter(
    (event) => event.location.city.toLowerCase() === city.toLowerCase()
  );
};
