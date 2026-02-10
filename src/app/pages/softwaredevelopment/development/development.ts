import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { CommonModule } from '@angular/common';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Industrycards } from '../../../components/industrycards/industrycards';
import { CarouselModule } from 'primeng/carousel';
import { Contactus } from "../../../components/contactus/contactus";
import { ActiveBanner } from "./active-banner/active-banner";
import { BannerSectionWithList } from '../../../models/banner';
import { Impactsection } from "./impactsection/impactsection";
import { Futureofsoftwareengineering } from "./futureofsoftwareengineering/futureofsoftwareengineering";
import { Sdeprocess } from "./sdeprocess/sdeprocess";
import { Sdeservices } from "./sdeservices/sdeservices";
import { Sdemethodlogies } from "./sdemethodlogies/sdemethodlogies";
import { Sdelanguages } from "./sdelanguages/sdelanguages";
import { Sdeframwork } from "./sdeframwork/sdeframwork";
import { Sdedatabase } from "./sdedatabase/sdedatabase";
@Component({
  selector: 'app-development',
  imports: [Nocarouselquotes, CommonModule, Benefitsnew, Industrycards, CarouselModule, Contactus, ActiveBanner, Impactsection, Futureofsoftwareengineering, Sdeprocess, Sdeservices, Sdemethodlogies, Sdelanguages, Sdeframwork, Sdedatabase],
  templateUrl: './development.html',
  styleUrl: './development.scss'
})
export class Development {
  quotes:any[]=[
  { "text": "Designing software that empowers businesses to thrive." },
  { "text": "Crafting innovative solutions that drive growth and success." },
  { "text": "Transforming ideas into reality through expert software development." },
  { "text": "Building software that meets the needs of today and tomorrow." },
  { "text": "Where technology meets creativity and innovation." },
  { "text": "Delivering software solutions that exceed expectations." },
  { "text": "Empowering businesses through cutting-edge software design and development." },
  { "text": "Creating software that makes a difference." }
]

herocontent:any = {
  "title": `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                  bg-gradient-to-r from-orange-500 via-yellow-400 to-indigo-500 bg-clip-text text-transparent">
      Welcome to the Universe of Software Design & Development with Pencil Peel IMT
    </span>
    <span class="block text-base sm:text-lg md:text-2xl font-semibold mt-2 text-white drop-shadow-lg">
      "Crafting software solutions for growth and success."
    </span>
  `,
  "description": `
    <p class="mt-4 text-white text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
      Expert software design and development to empower businesses. Innovative, tailor-made solutions for a fast-evolving digital landscape, 
      transforming your ideas into powerful software realities.
    </p>
  `,
  "image": "sde/integration.webp"
}
benefitsTitle: string = "Benefits of Our Software Development Services";
benefits = [
  {
    icon: 'pi-cog',
    gradient: 'bg-gradient-to-tr from-blue-400 to-blue-600',
    title: 'Increased Efficiency',
    description: 'Our software development services enable businesses to operate more efficiently by streamlining processes and eliminating bottlenecks.'
  },
  {
    icon: 'pi-chart-line',
    gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
    title: 'Improved Productivity',
    description: 'Our solutions automate manual processes and improve team productivity, allowing your staff to focus on high-value tasks.'
  },
  {
    icon: 'pi-users',
    gradient: 'bg-gradient-to-tr from-purple-400 to-indigo-600',
    title: 'Enhanced Customer Experience',
    description: 'We develop user-friendly software solutions that provide a seamless, engaging, and positive customer experience.'
  }
];

services: any[] = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions developed to match the unique needs of your business.',
      features: [
        { title: 'Requirements Gathering', description: 'We collaborate with you to define and document detailed project requirements.' },
        { title: 'Custom Development', description: 'Our developers craft bespoke solutions tailored to your goals and workflows.' },
        { title: 'Testing & Deployment', description: 'Thorough testing and smooth deployment to ensure reliability and performance.' }
      ]
    },
    {
      title: 'Web Application Development',
      description: 'Scalable and responsive web applications designed to enhance your digital presence.',
      features: [
        { title: 'Front-end Development', description: 'Modern, responsive UI/UX using Angular, TailwindCSS, and best practices.' },
        { title: 'Back-end Development', description: 'Robust APIs and server-side logic for reliability and performance.' },
        { title: 'Full-Stack Development', description: 'End-to-end solutions covering both client and server sides seamlessly.' }
      ]
    },
    {
      title: 'Mobile Application Development',
      description: 'Developing mobile applications across iOS and Android for seamless user experiences.',
      features: [
        { title: 'Native App Development', description: 'Performance-optimized apps for iOS (Swift) and Android (Kotlin, Java).' },
        { title: 'Hybrid App Development', description: 'Quick-to-market apps combining native and web capabilities.' },
        { title: 'Cross-Platform Development', description: 'Single codebase applications using frameworks like Flutter or React Native.' }
      ]
    },
    {
      title: 'Enterprise Software Development',
      description: 'Advanced enterprise software designed for scalability and smooth integration within organizations.',
      features: [
        { title: 'Enterprise Architecture', description: 'Designing solutions that fit complex enterprise environments.' },
        { title: 'Scalability', description: 'Building systems that adapt to your business growth over time.' },
        { title: 'Integration', description: 'Connecting with legacy software, ERPs, and third-party applications for efficiency.' }
      ]
    },
    {
      title: 'Cloud-Based Software Development',
      description: 'Cloud-native applications ensuring security, cost-effectiveness, and global scalability.',
      features: [
        { title: 'Cloud Infrastructure Setup', description: 'Design and deploy secure, scalable cloud environments (AWS, Azure, GCP).' },
        { title: 'Cloud Application Development', description: 'Custom solutions built for high availability and cloud efficiency.' },
        { title: 'Cloud Migration', description: 'Seamless migration of your existing applications to cloud ecosystems.' }
      ]
    },
    {
      title: 'Software Integration',
      description: 'Integrating systems and data sources to unify operations and boost productivity.',
      features: [
        { title: 'System Integration', description: 'Connecting multiple enterprise systems for smoother workflows.' },
        { title: 'API Integration', description: 'Building and consuming APIs to enable data communication between services.' },
        { title: 'Data Integration', description: 'Consolidating disparate data sources into a unified, accessible system.' }
      ]
    },
    {
      title: 'Software Testing & Quality Assurance',
      description: 'Comprehensive testing processes to ensure reliability, performance, and security.',
      features: [
        { title: 'Manual Testing', description: 'Human-driven tests to validate user experience and workflows.' },
        { title: 'Automated Testing', description: 'Using modern automation frameworks for consistent and rapid validation.' },
        { title: 'Quality Assurance', description: 'End-to-end QA ensuring compliance with high quality standards.' }
      ]
    },
    {
      title: 'Maintenance & Support',
      description: 'Long-term support services to keep your applications updated, secure, and reliable.',
      features: [
        { title: 'Bug Fixing', description: 'Identifying and resolving issues promptly post-deployment.' },
        { title: 'Feature Updates', description: 'Adding new functionality to meet evolving business needs.' },
        { title: 'Compatibility Assurance', description: 'Ensuring applications stay compatible with new environments and technologies.' }
      ]
    }
];
indcontent:any ={
  title: 'Industries We Served at Pencil Peel IMT with Software Development',
  description : 'At Pencil Peel IMT, our software development services span a wide range of industries, including',
  footer : ''
}
industryCards = [
  {
    title: 'Finance',
    description: 'We develop powerful software solutions for financial institutions, investment firms, and fintech companies. Our applications support payment processing, risk management, portfolio management, and regulatory compliance for secure, efficient operations.',
    image: '/dm/industries/ifinancial.webp',
  },
  {
    title: 'Healthcare',
    description: 'We build software for healthcare providers, medical research institutions, and health tech firms. Our solutions include patient management, electronic medical records, telemedicine platforms, and analytics for better outcomes and patient care.',
    image: '/dm/industries/ihospital.webp',
  },
  {
    title: 'E-commerce',
    description: 'Our team delivers robust software for e-commerce organizations, online marketplaces, and digital retailers. We create inventory management systems, order processing platforms, and customer relationship management solutions to drive sales and growth.',
    image: '/dm/industries/iretail.webp',
  },
  {
    title: 'Education',
    description: 'We provide technology solutions for educational institutions, online learning platforms, and EdTech businesses. Our software powers student management, learning management systems, online course delivery, and performance analytics.',
    image: '/dm/industries/ieducation.webp',
  },
  {
    title: 'Gaming',
    description: 'We create advanced software for game developers, publishers, and gaming platforms. Our applications support game development workflows, testing processes, analytics solutions, and platform management for engaging gaming experiences.',
    image: '/industries/gaming.png',
  },
  {
    title: 'Real Estate',
    description: 'We deliver software solutions for real estate agents, property managers, and investors. Our platforms cover property management, lead generation, client relationship management, and analytics to simplify real estate operations.',
    image: '/dm/industries/construction.webp',
  }
];
serveIndustrySteps = [
  {
    title: 'Understanding Industry Needs',
    description: 'We work closely with clients to understand their industry-specific needs and challenges.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',  // group of people collaborating
  },
  {
    title: 'Developing Customized Solutions',
    description: 'Our team develops software solutions that meet the unique needs of each industry.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',  // developer writing code
  },
  {
    title: 'Industry Expertise',
    description: 'Our team has experience with clients from various industries, understanding the specific challenges and opportunities.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',  // business meeting/conference
  },
  {
    title: 'Innovative Approach',
    description: 'We use innovative technologies and approaches to develop software solutions that drive results.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80',  // creative/innovation theme
  }
];

currentStep = 0;

ngOnInit() {
  setInterval(() => {
    this.currentStep = (this.currentStep + 1) % this.serveIndustrySteps.length;
  }, 3000);
}

phases = [
    {
      title: 'Coding',
      description:
        'We will write clean, efficient, and well-documented code that meets your requirements. Our team will:',
      points: [
        {
          title: 'Use industry-standard coding practices',
          description:
            'We use industry-standard coding languages and practices ensuring maintainability, scalability, and efficiency.',
        },
        {
          title: 'Write clean and efficient code',
          description:
            'Code that meets your requirements and is easy to understand and maintain.',
        },
        {
          title: 'Document code',
          description:
            'Comprehensive documentation to ensure maintainability and knowledge transfer.',
        },
      ],
      image:'sde/webdev.webp',
      imageAlt: 'Coding Development',
    },
    {
      title: 'Testing',
      description:
        'We will test the code to ensure it is defect-free and meets requirements. Our team will:',
      points: [
        {
          title: 'Unit testing',
          description:
            'Testing individual components to ensure they function as expected.',
        },
        {
          title: 'Integration testing',
          description:
            'Ensuring all components work together seamlessly.',
        },
        {
          title: 'System testing',
          description:
            'Verifying the end-to-end performance and behavior of the system.',
        },
      ],
      image:
        'sde/qa.webp',
      imageAlt: 'Software Testing',
    },
    {
      title: 'Integration',
      description:
        'We will integrate your code into a functional, optimized software solution. Our team will:',
      points: [
        {
          title: 'Integrate code',
          description:
            'Combine modules into a complete solution fulfilling requirements.',
        },
        {
          title: 'Test integrated solution',
          description:
            'Conduct thorough testing to ensure proper integration.',
        },
        {
          title: 'Deploy solution',
          description:
            'Deploy to production environment with performance optimization.',
        },
      ],
      image: 'sde/integration.webp',
      imageAlt: 'Code Integration',
    },
  ];

contactUsToday:any = {
  "title": "Contact Us Today",
  "description": "If you're looking for a partner to help you develop software solutions that drive business results, contact us today. Our Pencil Peel IMT team of experts is ready to work with you to understand your needs and develop customized solutions that meet your business objectives."
}
benefitsPencilpeel:any = {
  title: `Benefits of Partnering with <span class="text-orange-500">Pencil Peel IMT</span>`,
  description: `By partnering with <span class="text-orange-500">Pencil Peel IMT</span> for software development, you can benefit from`,
  benefits:[
  {
    icon: 'pi-check-circle',
    gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
    title: 'High-Quality Solutions',
    description: 'We deliver high-quality software solutions that meet the specific needs of our clients.'
  },
  {
    icon: 'pi-users',
    gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
    title: 'Expertise and Experience',
    description: 'Our team has extensive experience in software development technologies, ensuring that we deliver innovative solutions that drive results.'
  },
  {
    icon: 'pi-sliders-h',
    gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
    title: 'Customized Approach',
    description: 'We develop customized solutions that meet the specific needs of our clients, ensuring that they get the most out of their software investment.'
  },
  {
    icon: 'pi-clock',
    gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
    title: 'Timely Delivery',
    description: 'We deliver software projects on time, ensuring that our clients can meet their business objectives.'
  }
]
}

BANNER_SECTIONS: BannerSectionWithList[] = [
  // Expertise
  {
    key: 'expertise',
    icon: 'pi-star',
    gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
    title: 'Expertise',
    content: `Our team of experts has extensive experience in software development technologies, including programming languages, frameworks, and tools. We have a deep understanding of the latest trends and technologies, and we use this knowledge to deliver innovative software solutions that drive results. Our team is skilled in:`,
    imageUrl: '/sde/dev.webp',
    items: [
      {
        title: 'Software development methodologies',
        description:
          'We are experienced in using Agile development methodologies, such as Scrum and Kanban, to deliver software projects efficiently and effectively.'
      },
      {
        title: 'Programming languages',
        description:
          'We are proficient in a range of programming languages, including Java, Python, C++, and JavaScript, and we use these languages to develop custom software solutions.'
      },
      {
        title: 'Frameworks and tools',
        description:
          'We are experienced in using a range of frameworks and tools, including Spring, Hibernate, and React, to develop scalable and efficient software solutions.'
      }
    ]
  },

  // Customized Solutions
  {
    key: 'customized-solutions',
    icon: 'pi-sliders-h',
    gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
    title: 'Customized Solutions',
    content: `We understand that every business is unique, and we develop customized solutions that meet the specific needs of our clients. Our team works closely with clients to understand their requirements and develop software solutions that meet their needs. We use our expertise and technologies to deliver customized solutions that:`,
    imageUrl: '/sde/customdev.webp',
    items: [
      {
        title: 'Meet specific business needs',
        description:
          "We develop software solutions that meet the specific needs of our clients, whether it's automating business processes, improving customer engagement, or driving revenue growth."
      },
      {
        title: 'Are scalable and efficient',
        description:
          'We develop software solutions that are scalable and efficient, ensuring that they can handle large volumes of data and traffic.'
      },
      {
        title: 'Are secure and reliable',
        description:
          'We develop software solutions that are secure and reliable, ensuring that they protect sensitive data and minimize downtime.'
      }
    ]
  },

  // Proven Track Record
  {
    key: 'proven-track-record',
    icon: 'pi-chart-line',
    gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
    title: 'Proven Track Record',
    content: `We have a proven track record of delivering successful projects, demonstrating our ability to deliver results. Our team has experience working with clients across a range of industries, including healthcare, finance, and e-commerce. We have delivered projects that:`,
    imageUrl: '/dm/services/reviewm.webp',
    items: [
      {
        title: 'Have improved business efficiency',
        description:
          'We have delivered projects that have improved business efficiency, automating processes and reducing costs.'
      },
      {
        title: 'Have driven revenue growth',
        description:
          'We have delivered projects that have driven revenue growth, increasing sales and improving customer engagement.'
      },
      {
        title: 'Have enhanced customer experience',
        description:
          'We have delivered projects that have enhanced customer experience, providing users with intuitive and user-friendly interfaces.'
      }
    ]
  },

  // Benefits of Partnering with Pencil Peel IMT
  {
    key: 'benefits',
    icon: 'pi-check-circle',
    gradient: 'bg-gradient-to-tr from-pink-400 to-purple-500',
    title: 'Benefits of Partnering with Pencil Peel IMT',
    content: `By partnering with Pencil Peel IMT for software development, you can benefit from:`,
    imageUrl: '/sde/mobdesign.webp',
    items: [
      {
        title: 'High-quality solutions',
        description:
          'We deliver high-quality software solutions that meet the specific needs of our clients.'
      },
      {
        title: 'Expertise and experience',
        description:
          'Our team has extensive experience in software development technologies, ensuring that we deliver innovative solutions that drive results.'
      },
      {
        title: 'Customized approach',
        description:
          'We develop customized solutions that meet the specific needs of our clients, ensuring that they get the most out of their software investment.'
      },
      {
        title: 'Timely delivery',
        description:
          'We deliver software projects on time, ensuring that our clients can meet their business objectives.'
      }
    ]
  }
];






}
