import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from "../../components/nocarouselquotes/nocarouselquotes";
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-cyber-security',
  imports: [CommonModule, Nocarouselquotes,TabsModule],
  standalone: true,
  templateUrl: './cyber-security.html',
  styleUrls: ['./cyber-security.scss'],
})
export class CyberSecurity {

  activeIndex = 0;
  herocontent = {
    title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                bg-gradient-to-r from-orange-500 via-yellow-400 to-indigo-500  bg-clip-text text-transparent">
      Pencil Peel IMT: Delivering Comprehensive Cybersecurity Solutions
    </span>
  `,
    description: `
  `,
    image: 'dm/cybersecurityhome.png'
  };

  quotes = [
  { text: "Protecting your business from cyber threats is our top priority at Pencil Peel IMT." },
  { text: "Cybersecurity is an ongoing process, not a one-time solution." },
  { text: "Security is built into every stage of our development lifecycle." },
  { text: "Collaboration is key to providing effective cybersecurity solutions." },
  { text: "Trust Pencil Peel IMT to protect your sensitive data and systems from evolving cyber threats." }
];

cybersecurityApproach = [
  {
    icon: 'pi pi-shield',
    bgColor: 'bg-cyan-100 text-cyan-700',
    title: 'Preventing Cyber Attacks',
    text: "Robust defenses keep your data and systems safe—proactive measures for maximum protection."
  },
  {
    icon: 'pi pi-eye',
    bgColor: 'bg-purple-100 text-purple-700',
    title: 'Detecting & Responding to Threats',
    text: "Continuous monitoring ensures threats are caught and addressed swiftly for ultimate resilience."
  },
  {
    icon: 'pi pi-lock',
    bgColor: 'bg-blue-100 text-blue-700',
    title: 'Protecting Sensitive Data',
    text: "Your information is our priority—secure and compliant with industry standards."
  },
  {
    icon: 'pi pi-refresh',
    bgColor: 'bg-pink-100 text-pink-700',
    title: 'Ensuring Business Continuity',
    text: "Minimize downtime and keep your business running smoothly, even during incidents."
  }
];

cybersecurityProcess = [
  {
    icon: "pi pi-search",
    title: "Identifying Client Needs",
    text: "Every client is unique. We assess your risks and requirements to craft the optimal defense strategy."
  },
  {
    icon: "pi pi-cog",
    title: "Developing Customized Strategies",
    text: "A tailored cybersecurity plan matches your business goals, challenges, and compliance needs."
  },
  {
    icon: "pi pi-server",
    title: "Implementing Security Measures",
    text: "From firewalls to intrusion detection, we deploy and align technology to industry-leading standards."
  },
  {
    icon: "pi pi-bolt",
    title: "Monitoring and Rapid Response",
    text: "Our active monitoring and incident plans ensure threats are handled and business continues securely."
  }
];
methodologiesTitle = "Our Cybersecurity Methodologies at Pencil Peel IMT";
methodologiesIntro = "At Pencil Peel IMT, we employ a range of cybersecurity methodologies to ensure that our clients' systems and data are protected from evolving cyber threats. Our methodologies are designed to provide comprehensive cybersecurity coverage and ensure that our clients' most valuable assets are protected.";

methodologyCards = [
    {
      title: 'Secure Software Development Lifecycle (SSDLC)',
      icon: 'fa-solid fa-code-branch',
      color: 'text-cyan-600',
      intro: "Our SSDLC approach integrates cybersecurity into the development process to identify and mitigate vulnerabilities early on. This ensures that security is built into every stage of the development lifecycle, reducing the risk of security breaches and vulnerabilities.",
      steps: [
        { title: "Requirements Gathering", desc: "We work with our clients to gather requirements and identify potential security risks." },
        { title: "Design and Development", desc: "We design and develop secure software that meets our clients' needs and is aligned with industry best practices." },
        { title: "Testing and Validation", desc: "We test and validate our software to ensure that it meets security requirements and is free from vulnerabilities." },
        { title: "Deployment and Maintenance", desc: "We deploy and maintain our software, ensuring that it remains secure and up-to-date." }
      ]
    },
    {
      title: 'Risk Management',
      icon: 'fa-solid fa-shield-halved',
      color: 'text-purple-600',
      intro: "Our risk management approach assesses and prioritizes cybersecurity risks to focus on the most critical areas. This ensures that our clients' most valuable assets are protected, and potential security threats are identified and mitigated.",
      steps: [
        { title: "Risk Assessment", desc: "We conduct thorough risk assessments to identify potential cybersecurity risks and vulnerabilities." },
        { title: "Risk Prioritization", desc: "We prioritize risks based on their likelihood and potential impact, ensuring that our clients' most critical assets are protected." },
        { title: "Risk Mitigation", desc: "We implement measures to mitigate identified risks, ensuring that our clients' systems and data are protected." }
      ]
    },
    {
      title: 'Compliance',
      icon: 'fa-solid fa-file-contract',
      color: 'text-blue-600',
      intro: "We ensure adherence to industry-specific cybersecurity standards, regulations, and frameworks. Our team stays up-to-date with the latest regulatory requirements to ensure compliance.",
      steps: [
        { title: "Regulatory Requirements", desc: "We stay informed about the latest regulatory requirements and ensure that our clients' systems and data are compliant." },
        { title: "Industry Standards", desc: "We adhere to industry-recognized cybersecurity standards and frameworks, ensuring that our clients' systems and data are protected." },
        { title: "Compliance Audits", desc: "We conduct regular compliance audits to ensure that our clients' systems and data are compliant with regulatory requirements." }
      ]
    },
    {
      title: 'Additional Methodologies',
      icon: 'fa-solid fa-gear',
      color: 'text-pink-600',
      intro: "In addition to our core methodologies, we employ several other cybersecurity practices to provide comprehensive protection for our clients' systems and data.",
      steps: [
        { title: "Threat and Vulnerability Management", desc: "We identify and mitigate potential security threats and vulnerabilities, ensuring that our clients' systems and data are protected." },
        { title: "Incident Response", desc: "We have a proven incident response plan in place to respond quickly to security incidents and minimize downtime." },
        { title: "Security Awareness Training", desc: "We provide security awareness training to our clients' employees, ensuring that they are informed about cybersecurity best practices and can identify potential security threats." },
        { title: "Penetration Testing", desc: "We conduct penetration testing to identify potential security vulnerabilities and ensure that our clients' systems and data are protected." }
      ]
    }
  ];

// Benefits
methodologiesBenefits = [
  "Comprehensive Cybersecurity Coverage: Our methodologies provide comprehensive cybersecurity coverage, ensuring that our clients' systems and data are protected from evolving cyber threats.",
  "Reduced Risk: Our risk management approach reduces the risk of security breaches and vulnerabilities, ensuring that our clients' most valuable assets are protected.",
  "Improved Compliance: Our compliance approach ensures that our clients' systems and data are compliant with regulatory requirements, reducing the risk of non-compliance."
];

sections = [
    {
      title: 'Artificial Intelligence (AI) and Machine Learning (ML)',
      icon: 'pi pi-bolt',
      gradient: 'from-blue-500 to-indigo-600',
      points: [
        { heading: 'Threat Detection', desc: 'AI solutions detect potential threats and alert our team instantly.' },
        { heading: 'Predictive Analytics', desc: 'Forecast risks and prevent breaches with proactive measures.' },
        { heading: 'Automated Response', desc: 'Incidents are resolved quickly with AI-driven playbooks.' }
      ]
    },
    {
      title: 'Cybersecurity Platforms',
      icon: 'pi pi-shield',
      gradient: 'from-teal-500 to-cyan-600',
      points: [
        { heading: 'Unified Security Management', desc: 'Manage and monitor all operations from one platform.' },
        { heading: 'Real-time Threat Intelligence', desc: 'Stay ahead of emerging threats with live insights.' },
        { heading: 'Compliance Management', desc: 'Ensure continuous compliance with regulatory standards.' }
      ]
    },
    {
      title: 'Managed Detection and Response (MDR)',
      icon: 'pi pi-lock',
      gradient: 'from-purple-500 to-pink-600',
      points: [
        { heading: '24/7 Threat Monitoring', desc: 'Always-on monitoring for maximum protection.' },
        { heading: 'AI-Led Analytics', desc: 'Deep analytics deliver accurate intelligence in real-time.' },
        { heading: 'Automated Playbooks', desc: 'Quick, consistent, and automated incident handling.' }
      ]
    }
  ];

  additional = [
    { heading: 'Endpoint Detection and Response (EDR)', desc: 'Advanced defense against endpoint-level attacks.' },
    { heading: 'Security Information & Event Management (SIEM)', desc: 'Centralized log monitoring and correlation.' },
    { heading: 'Cloud Security', desc: 'Safeguard cloud assets and ensure compliance.' },
    { heading: 'Network Security', desc: 'Protect enterprise networks against intrusions.' }
  ];

  benefits = [
    { heading: 'Enhanced Threat Detection', desc: 'Detect threats faster and minimize vulnerabilities.' },
    { heading: 'Improved Incident Response', desc: 'Respond effectively and reduce downtime.' },
    { heading: 'Regulatory Compliance', desc: 'Stay compliant with security regulations and standards.' }
  ];
}
