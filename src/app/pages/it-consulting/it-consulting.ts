import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../components/nocarouselquotes/nocarouselquotes';
import { AccordionModule } from 'primeng/accordion';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-it-consulting',
  imports: [CommonModule,Nocarouselquotes, AccordionModule,RouterModule],
  templateUrl: './it-consulting.html',
  styleUrl: './it-consulting.scss'
})
export class ItConsulting {

  herocontent = {
  title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                bg-gradient-to-r from-orange-500 via-yellow-400 to-indigo-500  bg-clip-text text-transparent">
      Pencil Peel IMT: Your Partner in IT Consulting
    </span>
  `,
  description: `
  `,
  image: 'dm/itConsultingHome.png'
};

quotes = [
    { text: "Transforming businesses through technology expertise." },
    { text: "Empowering organizations with innovative IT solutions." },
    { text: "Expert guidance for a digitally driven future." },
    { text: "Unlocking potential through strategic IT consulting."},
    { text: "Where technology meets business success." }
  ];

  services: any[] = [
    {
      title: 'IT Strategy & Planning',
      icon: 'pi pi-lightbulb',
      color: 'blue',
      bullets: [
        'Conduct IT assessments',
        'Develop tailored IT strategies',
        'Identify and leverage technology trends'
      ]
    },
    {
      title: 'Digital Transformation',
      icon: 'pi pi-globe',
      color: 'purple',
      bullets: [
        'Assess digital readiness',
        'Create transformation roadmaps',
        'Implement AI, IoT, Cloud solutions'
      ]
    },
    {
      title: 'Infrastructure Management',
      icon: 'pi pi-sitemap',
      color: 'green',
      bullets: [
        'Design scalable, secure infrastructure',
        'Optimize hardware/software resources',
        'Manage hybrid IT environments'
      ]
    },
    {
      title: 'Cybersecurity',
      icon: 'pi pi-shield',
      color: 'red',
      bullets: [
        'Conduct risk assessments',
        'Design and implement security protocols',
        'Monitor and respond to threats'
      ]
    },
    {
      title: 'System Integration',
      icon: 'fas fa-exchange',
      color: 'yellow',
      bullets: [
        'Assess integration needs',
        'Develop seamless integration strategies',
        'Migrate data and applications safely'
      ]
    },
    {
      title: 'IT Project Management',
      icon: 'pi pi-calendar',
      color: 'indigo',
      bullets: [
        'Develop project plans',
        'Manage resources effectively',
        'Monitor project progress and adjust plans'
      ]
    },
    {
      title: 'Cloud Consulting',
      icon: 'pi pi-cloud',
      color: 'cyan',
      bullets: [
        'Assess cloud readiness',
        'Develop migration strategies',
        'Optimize cloud services'
      ]
    },
    {
      title: 'Enterprise Software',
      icon: 'pi pi-cog',
      color: 'pink',
      bullets: [
        'Assess software needs',
        'Implement ERP, CRM, other systems',
        'Customize or develop bespoke software'
      ]
    },
    {
      title: 'Data Analytics & BI',
      icon: 'pi pi-chart-line',
      color: 'teal',
      bullets: [
        'Develop analytics strategies',
        'Set up data collection tools',
        'Build dashboards for insights'
      ]
    },
    {
      title: 'Managed IT Services',
      icon: 'pi pi-cog',
      color: 'orange',
      bullets: [
        'Provide helpdesk support',
        'Perform updates and backups',
        'Monitor systems continuously'
      ]
    },
    {
      title: 'Compliance & Regulatory',
      icon: 'pi pi-file',
      color: 'gray',
      bullets: [
        'Identify regulatory requirements',
        'Conduct compliance assessments',
        'Implement controls & prepare audits'
      ]
    },
    {
      title: 'IT Training & Development',
      icon: 'pi pi-users',
      color: 'violet',
      bullets: [
        'Assess training needs',
        'Develop tailored programs',
        'Provide workshops and online training'
      ]
    },
  ];


  consultingCards: any[] = [
    {
      title: 'Expert Advice',
      icon: 'pi pi-lightbulb',
      color: 'blue',
      bullets: [
        'Assess your current IT infrastructure',
        'Provide expert advice on IT strategies and technologies',
        'Develop a customized IT plan aligned with your business goals'
      ]
    },
    {
      title: 'Technology Solutions',
      icon: 'pi pi-cog',
      color: 'purple',
      bullets: [
        'Identify technology solutions to drive growth',
        'Implement solutions with seamless integration',
        'Monitor and evaluate effectiveness'
      ]
    },
    {
      title: 'IT Strategy Development',
      icon: 'pi pi-sitemap',
      color: 'green',
      bullets: [
        'Develop IT strategy aligned with business objectives',
        'Identify IT priorities and roadmap for implementation',
        'Ensure alignment with business goals'
      ]
    },
    {
      title: 'Technology Implementation',
      icon: 'pi pi-desktop',
      color: 'pink',
      bullets: [
        'Implement technology solutions effectively',
        'Integrate with existing systems',
        'Provide training and support'
      ]
    },
    {
      title: 'Why Choose Pencil Peel IMT?',
      icon: 'pi pi-thumbs-up',
      color: 'orange',
      bullets: [
        'Use industry-standard methodologies and best practices',
        'Collaborate closely with you',
        'Deliver high-quality, efficient, and scalable solutions'
      ]
    }
  ];

  benefits: any[] = [
    {
      title: 'Improved Efficiency',
      icon: 'pi pi-cog',
      color: 'blue',
      description: 'Our team will help you streamline processes, reduce costs, and improve efficiency.'
    },
    {
      title: 'Increased Productivity',
      icon: 'pi pi-chart-line',
      color: 'green',
      description: 'By leveraging technology effectively, we will help you increase productivity and drive business growth.'
    },
    {
      title: 'Better Decision-Making',
      icon: 'pi pi-lightbulb',
      color: 'purple',
      description: 'Our team will provide you with data-driven insights, enabling you to make informed decisions.'
    },
    {
      title: 'Competitive Advantage',
      icon: 'pi pi-trophy',
      color: 'pink',
      description: 'By staying up-to-date with the latest technology trends and innovations, we will help you gain a competitive advantage in your industry.'
    }
  ];

  helpCards: any[] = [
    {
      title: 'Assess Current State',
      icon: 'pi pi-search',
      color: 'blue',
      bullets: [
        'Identify areas for improvement in IT infrastructure',
        'Determine technology gaps and provide solutions',
        'Develop a baseline for future improvements'
      ]
    },
    {
      title: 'Develop IT Strategies',
      icon: 'pi pi-lightbulb',
      color: 'purple',
      bullets: [
        'Align technology with business goals',
        'Improve efficiency and productivity',
        'Enhance decision-making with actionable insights'
      ]
    },
    {
      title: 'Implement Technology Solutions',
      icon: 'pi pi-cog',
      color: 'green',
      bullets: [
        'Improve efficiency and productivity',
        'Enhance customer experience',
        'Drive innovation and stay ahead of competition'
      ]
    },
    {
      title: 'Provide Ongoing Support',
      icon: 'pi pi-shield',
      color: 'pink',
      bullets: [
        'Ensure system uptime and minimize downtime',
        'Optimize system performance',
        'Enhance security and protect data'
      ]
    }
  ];

  futureServices: any[] = [
    {
      title: 'AI-Powered Solutions',
      icon: 'fas fa-brain',
      color: 'pink',
      description: 'Harness AI to automate processes, improve decision-making, and drive innovation.'
    },
    {
      title: 'Digital Transformation',
      icon: 'pi pi-globe',
      color: 'blue',
      description: 'Adopt new technologies and business models to drive growth and efficiency.'
    },
    {
      title: 'Cybersecurity',
      icon: 'pi pi-shield',
      color: 'red',
      description: 'Protect your business from increasingly sophisticated cyber threats.'
    },
    {
      title: 'Data Analytics',
      icon: 'pi pi-chart-line',
      color: 'green',
      description: 'Make data-driven decisions using advanced analytics and business intelligence.'
    }
  ];

  features: any[] = [
    {
      title: 'Expertise',
      icon: 'pi pi-user-edit',
      color: 'blue',
      description: 'Our team has extensive experience in IT consulting and a deep understanding of the latest technologies.'
    },
    {
      title: 'Custom Solutions',
      icon: 'pi pi-cog',
      color: 'green',
      description: 'We develop tailored IT consulting plans to meet the unique needs of your business.'
    },
    {
      title: 'Proven Results',
      icon: 'pi pi-chart-line',
      color: 'purple',
      description: 'We have delivered successful IT consulting projects for businesses across various industries.'
    },
    {
      title: 'Ongoing Support',
      icon: 'pi pi-shield',
      color: 'pink',
      description: 'Our team provides ongoing support and maintenance to ensure your IT systems continue to perform well.'
    }
  ];

  constructor(private router: Router) {}

  goToCybersecurity() {
    this.router.navigate(['/cybersecurity']);
  }
}
