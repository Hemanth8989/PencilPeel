import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { CarouselModule } from 'primeng/carousel';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { Ctacard } from "./ctacard/ctacard";
import { WhyChoosus9 } from "./why-choosus9/why-choosus9";
import { Futureofweb } from "./futureofweb/futureofweb";
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";

@Component({
  selector: 'app-web',
  imports: [CommonModule, TimelineModule, CardModule, Whycpencilpeel, CarouselModule, Industrycards, Nocarouselquotes, Ctacard, WhyChoosus9, Futureofweb, Benefitsnew],
  templateUrl: './web.html',
  styleUrl: './web.scss'
})
export class Web {
herocontent: any = {
  "title": `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                  bg-gradient-to-r from-emerald-500 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
      Professional Website Design & Development
    </span>
    <span class="block text-base sm:text-lg md:text-2xl font-semibold mt-2 text-white drop-shadow-lg">
      "Empowering Your Business with Exceptional Web Solutions"
    </span>
  `,
  "description": `
    <p class="mt-4 text-white text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
      Partner with Pencil Peel IMT to create websites that drive results. Our expert team delivers 
      custom web solutions that enhance your online presence, engage your audience, and accelerate 
      your business growth in the digital marketplace.
    </p>
  `,
  "image": "sde/webdev.webp"
}
quotes: any[] = [
  { "text": "Crafting websites that captivate and convert." },
  { "text": "Designing digital experiences that leave a lasting impression." },
  { "text": "Where aesthetics meet functionality and user experience." },
  { "text": "Building websites that drive business results and growth." },
  { "text": "Transforming your online presence with expert web design." },
  { "text": "Creating websites that are as beautiful as they are functional." },
  { "text": "Web design that engages, informs, and inspires." },
  { "text": "Elevate your brand with exceptional web design." }
]



websiteBenefits = [
  {
    title: 'Establish credibility',
    description: 'A website is often the first point of contact between your business and potential customers. Having a professional website establishes credibility and trust with your target audience.',
    icon: 'pi-shield',
    iconColor: 'text-indigo-500'
  },
  {
    title: 'Reach a wider audience',
    description: 'A website allows you to reach a wider audience, beyond geographical boundaries. With a website, you can reach customers from all over the world, 24/7.',
    icon: 'pi-globe',
    iconColor: 'text-indigo-500'
  },
  {
    title: 'Increase visibility',
    description: 'A website makes it easy for customers to find you online. With search engine optimization (SEO), your website can appear in search engine results, making it visible to potential customers.',
    icon: 'pi-search',
    iconColor: 'text-indigo-500'
  },
  {
    title: 'Improve customer engagement',
    description: 'A website provides a platform for customers to engage with your business. You can use your website to share information, offer customer support, and build relationships with your customers.',
    icon: 'pi-comments',
    iconColor: 'text-indigo-500'
  },
  {
    title: 'Drive business growth',
    description: 'A website is a powerful marketing tool that can drive business growth. With a website, you can showcase your products or services, share testimonials, and offer promotions to attract new customers.',
    icon: 'pi-chart-line',
    iconColor: 'text-indigo-500',
    fullWidth: true
  }
];
benefits = [
  {
    title: 'Get a professional website',
    description: 'Our team of experienced web designers and developers will create a professional website that meets your business needs and expectations.',
    icon: 'pi-globe', // symbolizes global/web presence
    gradient: 'bg-gradient-to-tr from-indigo-500 to-purple-600'
  },
  {
    title: 'Improve your online presence',
    description: 'We will help you establish a strong online presence that reflects your brand identity and values.',
    icon: 'pi-star', // improvement/star represents quality or recognition
    gradient: 'bg-gradient-to-tr from-green-400 to-teal-500'
  },
  {
    title: 'Increase conversions',
    description: 'Our team will design and develop a website that is optimized for conversions, ensuring that you get the most out of your online presence.',
    icon: 'pi-chart-bar', // chart-bar for analytics/conversions
    gradient: 'bg-gradient-to-tr from-pink-500 to-red-500'
  },
  {
    title: 'Stay ahead of the competition',
    description: 'We will help you stay ahead of the competition by creating a website that is modern, efficient, and effective.',
    icon: 'pi-forward', // forward for progress/competitive edge
    gradient: 'bg-gradient-to-tr from-yellow-400 to-orange-500'
  },
];
webdbenfits = [
  {
    title: 'Improve your online presence',
    description:
      'Our team will help you create a website that improves your online presence and establishes your brand identity.',
    icon: 'pi-globe',
    gradient: 'bg-gradient-to-tr from-indigo-500 to-purple-600'
  },
  {
    title: 'Increase conversions',
    description:
      'We will design and develop a website that is optimized for conversions, ensuring that you get the most out of your online presence.',
    icon: 'pi-chart-bar',
    gradient: 'bg-gradient-to-tr from-pink-500 to-red-500'
  },
  {
    title: 'Enhance user experience',
    description:
      "Our team will ensure that your website provides a great user experience, making it easy for visitors to find what they're looking for and engage with your business.",
    icon: 'pi-users',
    gradient: 'bg-gradient-to-tr from-green-400 to-teal-500'
  },
  {
    title: 'Stay ahead of the competition',
    description:
      'We will help you stay ahead of the competition by creating a website that is modern, efficient, and effective.',
    icon: 'pi-forward',
    gradient: 'bg-gradient-to-tr from-yellow-400 to-orange-500'
  },
];
processSteps = [
  {
    step: 'Step 1',
    title: 'Discovery',
    icon: 'pi pi-search',
    markerColor: 'bg-blue-500',
    badgeColor: 'bg-blue-100 text-blue-800',
    details: [
      {
        description: 'We will work with you to understand your business needs and goals, and identify your target audience.'
      }
    ]
  },
  {
    step: 'Step 2',
    title: 'Design',
    icon: 'pi pi-palette',
    markerColor: 'bg-yellow-500',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    details: [
      {
        description: 'We will design a website that meets your needs and expectations, and is consistent with your brand identity.'
      }
    ]
  },
  {
    step: 'Step 3',
    title: 'Development',
    icon: 'pi pi-cog',
    markerColor: 'bg-purple-500',
    badgeColor: 'bg-purple-100 text-purple-800',
    details: [
      {
        description: 'We will develop a website that is functional, efficient, and scalable, ensuring that it meets your business needs.'
      }
    ]
  },
  {
    step: 'Step 4',
    title: 'Testing and Launch',
    icon: 'pi pi-send',
    markerColor: 'bg-green-500',
    badgeColor: 'bg-green-100 text-green-800',
    details: [
      {
        description: 'We will test your website to ensure that it is working as expected, and launch it to the public.'
      }
    ]
  },
  {
    step: 'Step 5',
    title: 'Maintenance and Updates',
    icon: 'pi pi-refresh',
    markerColor: 'bg-pink-500',
    badgeColor: 'bg-pink-100 text-pink-800',
    details: [
      {
        description: 'We will provide ongoing maintenance and updates to ensure that your website remains secure, efficient, and effective.'
      }
    ]
  }
];
services = [
  {
    title: 'Custom Website Design',
    summary: 'We will create bespoke website designs that capture your brand\'s essence and resonate with your target audience. Our team will:',
    highlights: [
      {
        title: 'Design a unique website',
        description: 'We will design a website that reflects your brand identity and values.'
      },
      {
        title: 'Create a user-friendly interface',
        description: 'We will create a user-friendly interface that makes it easy for visitors to navigate and find what they\'re looking for.'
      },
      {
        title: 'Ensure brand consistency',
        description: 'We will ensure that your website is consistent with your brand identity and messaging.'
      }
    ],
    colorClass: 'text-indigo-700'
  },
  {
    title: 'Website Redesign with Pencil Peel IMT',
    summary: 'At Pencil Peel IMT, we will help you give your website a modern and fresh look, improve user experience, and increase conversions. Here\'s what we will do:',
    highlights: [
      {
        title: 'Refresh Your Look',
        description: 'We will give your website a modern and fresh look that reflects your brand identity and values.'
      },
      {
        title: 'Improve User Experience',
        description: 'We will enhance navigation, layout, and overall user experience to make it easy for visitors to find what they\'re looking for and engage with your business.'
      },
      {
        title: 'Increase Conversions',
        description: 'We will optimize your website for better conversion rates, ensuring that you get the most out of your online presence.'
      }
    ],
    colorClass: 'text-pink-600'
  },
  {
    title: 'Responsive Design',
    summary: 'Our websites are optimized for all devices, ensuring a seamless user experience. We will:',
    highlights: [
      {
        title: 'Design for mobile devices',
        description: 'We will design websites that look great and function well on mobile devices.'
      },
      {
        title: 'Optimize for tablet and desktop',
        description: 'We will optimize your website for various screen sizes, ensuring a seamless user experience.'
      },
      {
        title: 'Ensure cross-browser compatibility',
        description: 'We will ensure that your website works well on different browsers and devices.'
      }
    ],
    colorClass: 'text-green-600'
  },
  {
    title: 'E-commerce Solutions',
    summary: 'We will develop e-commerce websites that drive sales and revenue growth. Our team will:',
    highlights: [
      {
        title: 'Create a custom online store',
        description: 'We will create a custom online store with payment gateway integration.'
      },
      {
        title: 'Manage products and inventory',
        description: 'We will help you manage products, categories, and inventory.'
      },
      {
        title: 'Ensure a secure checkout process',
        description: 'We will ensure a secure checkout process for customers.'
      }
    ],
    colorClass: 'text-orange-600'
  },
  {
    title: 'Content Management Systems',
    summary: 'We will build websites with easy-to-use content management systems. Our team will:',
    highlights: [
      {
        title: 'Develop a custom CMS',
        description: 'We will develop a custom CMS tailored to your needs.'
      },
      {
        title: 'Allow easy content management',
        description: 'We will allow you to manage content without technical expertise.'
      },
      {
        title: 'Provide flexibility and scalability',
        description: 'We will provide flexibility and scalability for future growth.'
      }
    ],
    colorClass: 'text-cyan-600'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    summary: 'We will optimize your website for search engines. Our team will:',
    highlights: [
      {
        title: 'Conduct keyword research',
        description: 'We will conduct keyword research to optimize website content.'
      },
      {
        title: 'Optimize website structure and content',
        description: 'We will optimize website structure, content, and meta tags.'
      },
      {
        title: 'Build high-quality backlinks',
        description: 'We will build high-quality backlinks to improve website authority.'
      }
    ],
    colorClass: 'text-lime-500'
  },
  {
    title: 'Website Security',
    summary: 'We will ensure that your website is secure. Our team will:',
    highlights: [
      {
        title: 'Install SSL certificates',
        description: 'We will install SSL certificates for secure data transmission.'
      },
      {
        title: 'Protect against malware and viruses',
        description: 'We will protect your website from malware and viruses.'
      },
      {
        title: 'Conduct regular security audits',
        description: 'We will conduct regular security audits to identify vulnerabilities.'
      }
    ],
    colorClass: 'text-red-500'
  },
  {
    title: 'Website Analytics and Reporting',
    summary: 'We will track and analyse your website\'s performance. Our team will:',
    highlights: [
      {
        title: 'Integrate Google Analytics',
        description: 'We will integrate Google Analytics for website tracking.'
      },
      {
        title: 'Monitor website performance',
        description: 'We will monitor website performance and identify areas for improvement.'
      },
      {
        title: 'Make data-driven decisions',
        description: 'We will make data-driven decisions with website analytics reports.'
      }
    ],
    colorClass: 'text-indigo-500'
  },
  {
    title: 'Custom Web Applications',
    summary: 'We will develop custom web applications tailored to your needs. Our team will:',
    highlights: [
      {
        title: 'Develop custom applications',
        description: 'We will develop custom web applications that meet your business needs.'
      },
      {
        title: 'Integrate with third-party services',
        description: 'We will integrate with third-party services and APIs.'
      },
      {
        title: 'Provide scalability and flexibility',
        description: 'We will provide scalability and flexibility for future growth.'
      }
    ],
    colorClass: 'text-teal-600'
  }
];
globalServices = [
  {
    title: 'Localization',
    summary: 'We will develop multilingual websites that cater to multiple languages and cultures. Our team will:',
    highlights: [
      {
        title: 'Develop multilingual websites',
        description: 'We will develop websites that cater to multiple languages and cultures, ensuring that your online presence is accessible to a global audience.'
      },
      {
        title: 'Integrate currency conversion features',
        description: 'We will integrate currency conversion features to accommodate international clients, making it easy for them to do business with you.'
      },
      {
        title: 'Ensure cultural sensitivity',
        description: 'We will ensure that website design and content are culturally sensitive, avoiding any cultural faux pas that could offend your target audience.'
      }
    ],
    colorClass: 'text-indigo-600'
  },
  {
    title: 'International SEO',
    summary: 'We will optimize your website for global search engines. Our team will:',
    highlights: [
      {
        title: 'Conduct global keyword research',
        description: 'We will conduct keyword research for target markets, ensuring that your website appears in search engine results pages (SERPs) globally.'
      },
      {
        title: 'Implement hreflang tags',
        description: 'We will implement hreflang tags to specify language and country targeting, ensuring that your website is visible to the right audience.'
      },
      {
        title: 'Use geo-targeting',
        description: 'We will use geo-targeting to direct users to relevant content, ensuring that your website is accessible to users globally.'
      }
    ],
    colorClass: 'text-pink-600'
  },
  {
    title: 'Responsive Design for Global Audiences',
    summary: 'We will ensure that your website is optimized for various devices and screen sizes. Our team will:',
    highlights: [
      {
        title: 'Design device-agnostic websites',
        description: 'We will design websites that are optimized for various devices and screen sizes, ensuring that your website looks great on any device.'
      },
      {
        title: 'Use mobile-first design',
        description: 'We will design websites with a mobile-first approach, ensuring that your website is optimized for mobile devices.'
      },
      {
        title: 'Ensure cross-browser compatibility',
        description: 'We will ensure that your website works seamlessly across different browsers, ensuring that your website is accessible to all users.'
      }
    ],
    colorClass: 'text-green-600'
  },
  {
    title: 'E-commerce Solutions for International Markets',
    summary: 'We will develop e-commerce solutions that cater to international markets. Our team will:',
    highlights: [
      {
        title: 'Integrate multi-currency support',
        description: 'We will integrate multi-currency support for international transactions, making it easy for customers to do business with you.'
      },
      {
        title: 'Integrate payment gateways',
        description: 'We will integrate payment gateways that support international transactions, ensuring that customers can pay securely.'
      },
      {
        title: 'Develop shipping and tax calculations',
        description: 'We will develop shipping and tax calculations for international orders, ensuring that customers are aware of all costs.'
      }
    ],
    colorClass: 'text-orange-600'
  },
  {
    title: 'Content Strategy for Global Audiences',
    summary: 'We will develop content that resonates with target audiences. Our team will:',
    highlights: [
      {
        title: 'Develop content localization strategies',
        description: 'We will develop content localization strategies that cater to different languages and cultures.'
      },
      {
        title: 'Create content marketing strategies',
        description: 'We will create content marketing strategies that appeal to global audiences, ensuring that your brand is visible globally.'
      },
      {
        title: 'Integrate social media platforms',
        description: 'We will integrate social media platforms to reach global audiences, ensuring that your brand is accessible to all.'
      }
    ],
    colorClass: 'text-cyan-600'
  },
  {
    title: 'Web Accessibility',
    summary: 'We will ensure that your website is accessible to all users. Our team will:',
    highlights: [
      {
        title: 'Ensure WCAG compliance',
        description: 'We will ensure that your website complies with Web Content Accessibility Guidelines (WCAG), ensuring that your website is accessible to users with disabilities.'
      },
      {
        title: 'Incorporate accessibility features',
        description: 'We will incorporate accessibility features such as screen reader support, ensuring that your website is accessible to all users.'
      },
      {
        title: 'Design inclusive websites',
        description: 'We will design websites that are inclusive and accessible to all users, ensuring that your brand is accessible to a global audience.'
      }
    ],
    colorClass: 'text-teal-600'
  }
];
websiteHostingServices = [
  {
    title: 'Reliable Website Hosting',
    summary: 'We will provide reliable website hosting with minimal downtime. Our team will:',
    highlights: [
      {
        title: 'Ensure high uptime',
        description: 'We will ensure that your website is always up and running, with minimal downtime.'
      },
      {
        title: 'Provide fast loading speeds',
        description: 'We will optimize our servers for fast loading speeds, ensuring that your website loads quickly and efficiently.'
      },
      {
        title: 'Monitor website performance',
        description: 'We will monitor website performance and identify areas for improvement.'
      }
    ],
    colorClass: 'text-indigo-600'
  },
  {
    title: 'Scalable Hosting Options',
    summary: 'We will offer scalable hosting options for growing websites. Our team will:',
    highlights: [
      {
        title: 'Provide flexible hosting plans',
        description: 'We will provide flexible hosting plans that can be easily upgraded or downgraded as your website grows.'
      },
      {
        title: 'Ensure seamless scalability',
        description: 'We will ensure that your website can handle increased traffic and usage without any downtime or performance issues.'
      },
      {
        title: 'Offer customized hosting solutions',
        description: 'We will offer customized hosting solutions tailored to your specific needs.'
      }
    ],
    colorClass: 'text-pink-600'
  },
  {
    title: 'Technical Support',
    summary: 'We will provide technical support for hosting-related issues. Our team will:',
    highlights: [
      {
        title: 'Respond promptly to issues',
        description: 'We will respond promptly to any hosting-related issues or concerns.'
      },
      {
        title: 'Provide expert technical support',
        description: 'We will provide expert technical support to resolve any hosting-related issues.'
      },
      {
        title: 'Offer proactive maintenance',
        description: 'We will perform proactive maintenance to prevent issues and ensure optimal performance.'
      }
    ],
    colorClass: 'text-green-600'
  }
];
hostingBenefits = [
  {
    title: 'Ensure website uptime',
    description: 'We will ensure that your website is always up and running, with minimal downtime.',
    icon: 'pi-server', // Server icon fits hosting/uptime
    gradient: 'bg-gradient-to-tr from-indigo-500 to-purple-600'
  },
  {
    title: 'Improve website performance',
    description: 'We will optimize our servers for fast loading speeds and ensure that your website performs well.',
    icon: 'pi-bolt', // Bolt icon represents speed/performance
    gradient: 'bg-gradient-to-tr from-green-400 to-teal-500'
  },
  {
    title: 'Get technical support',
    description: 'We will provide expert technical support to resolve any hosting-related issues.',
    icon: 'pi-users', // Users icon for support/team
    gradient: 'bg-gradient-to-tr from-pink-500 to-red-500'
  }
];

whyccontent = {
  title: "Why Choose Pencil Peel IMT for Website Hosting?",
  description: "At Pencil Peel IMT, we have a team of experienced professionals who are skilled in providing reliable website hosting services. We will work closely with you to understand your needs and goals, and deliver hosting solutions that meet your expectations. Our team will:",
  footer: "By partnering with Pencil Peel IMT for your website hosting needs, you can trust that your website will be in good hands. Contact us today to learn more about our website hosting services."
};

whycfeatures: any[] = [
  {
    id: 1,
    title: 'Use industry-standard technologies',
    description: 'We will use industry-standard technologies and best practices to ensure that your website is secure and performs well.',
    icon: 'pi-cog',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  },
  {
    id: 2,
    title: 'Collaborate with you',
    description: 'We will work closely with you to ensure that your hosting needs are met.',
    icon: 'pi-users',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Deliver high-quality solutions',
    description: 'We will deliver high-quality hosting solutions that meet your needs and exceed your expectations.',
    icon: 'pi-star',
    borderColor: 'yellow-500',
    iconBgColor: 'yellow-100',
    iconColor: 'yellow-600'
  }
];

designCarouselSlides = [
  {
    group: "Front-end Development",
    description:
      "Our front-end development team uses a range of tools and technologies to build responsive, interactive, and engaging websites.",
    tools: [
      {
        name: "HTML5 & CSS3",
        image: "sde/tools/htmlcss.jpeg",
        desc: "We use HTML5 and CSS3 to build responsive and interactive websites. Our team is skilled in the latest features such as CSS Grid and Flexbox for creating flexible layouts."
      },
      {
        name: "JavaScript",
        image: "sde/tools/js.png",
        desc: "We use JavaScript and modern frameworks/libraries to create dynamic and engaging user experiences."
      },
      {
        name: "React",
        image: "sde/tools/react.png",
        desc: "React is used to build reusable UI components and manage state for complex scalable front-end applications."
      },
      {
        name: "Angular",
        image: "sde/tools/angular.jpeg",
        desc: "We use Angular for robust, maintainable applications and scalable front-end architectures."
      },
      {
        name: "jQuery",
        image: "sde/tools/jquery.png",
        desc: "jQuery is used for seamless DOM manipulation and enhanced interactivity."
      }
    ]
  },
  {
    group: "Back-end Development",
    description:
      "Our back-end development team uses a range of technologies to build scalable and high-performance server-side applications.",
    tools: [
      {
        name: "Node.js",
        image: "sde/tools/nodejs.png",
        desc: "Node.js enables us to build scalable, high-performance server-side applications."
      },
      {
        name: "Python",
        image: "sde/tools/python.png",
        desc: "Python with frameworks like Django and Flask helps us build efficient back-end solutions."
      },
      {
        name: "Ruby on Rails",
        image: "sde/tools/ruby.png",
        desc: "Ruby on Rails is used for robust, scalable and maintainable back-end applications."
      },
      {
        name: "PHP",
        image: "sde/tools/php.png",
        desc: "PHP with Laravel and CodeIgniter delivers custom, scalable back-end services."
      }
    ]
  },
  {
    group: "Databases",
    description:
      "We use a range of databases to store and manage data for our clients' websites.",
    tools: [
      {
        name: "MySQL",
        image: "sde/tools/mysql.png",
        desc: "MySQL is used for robust and scalable relational database solutions."
      },
      {
        name: "MongoDB",
        image: "sde/tools/mongodb.png",
        desc: "MongoDB offers flexible, scalable NoSQL data management."
      },
      {
        name: "PostgreSQL",
        image: "sde/tools/postgresql.png",
        desc: "PostgreSQL provides scalable relational data architectures."
      }
    ]
  },
  {
    group: "Frameworks and Libraries",
    description:
      "We use a range of frameworks and libraries to build scalable and efficient websites.",
    tools: [
      {
        name: "Bootstrap",
        image: "sde/tools/bootstrap.png",
        desc: "Bootstrap builds responsive, mobile-first websites with flexible layouts."
      },
      {
        name: "Material-UI",
        image: "sde/tools/material.png",
        desc: "Material-UI creates visually appealing and consistent user interfaces."
      },
      {
        name: "Redux",
        image: "sde/tools/redux.png",
        desc: "Redux is used for managing state changes in scalable front-end applications."
      }
    ]
  },
  {
    group: "Content Management Systems",
    description:
      "We use a range of CMS platforms to build custom and scalable websites tailored to client needs.",
    tools: [
      {
        name: "WordPress",
        image: "sde/tools/wordpress.png",
        desc: "WordPress allows us to build custom and scalable websites with a user-friendly interface, including custom themes and plugins."
      },
      {
        name: "Drupal",
        image: "sde/tools/drupal.jpeg",
        desc: "Drupal is used for complex sites with advanced content management features."
      }
    ]
  }
];


industryCards = [
  {
    title: 'E-commerce',
    description: 'Online stores, retail businesses, and e-commerce platforms can benefit from having a website to showcase products, manage orders, and provide customer support.',
    image: '/dm/industries/iecommerce.webp',
  },
  {
    title: 'Healthcare',
    description: 'Hospitals, clinics, medical practices, and healthcare providers can benefit from having a website to provide patient information, schedule appointments, and offer medical services.',
    image: '/dm/industries/ihospital.webp',
  },
  {
    title: 'Finance',
    description: 'Banks, financial institutions, investment firms, and accounting services can benefit from having a website to provide financial information, manage accounts, and offer investment services.',
    image: '/dm/industries/ifinancial.webp',
  },
  {
    title: 'Education',
    description: 'Schools, universities, colleges, and educational institutions can benefit from having a website to provide information on courses, programs, and admissions.',
    image: '/dm/industries/ieducation.webp',
  },
  {
    title: 'Real Estate',
    description: 'Real estate agents, property developers, and construction companies can benefit from having a website to showcase properties, provide market information, and offer real estate services.',
    image: '/industries/real-estate.png',
  },
  {
    title: 'Travel and Tourism',
    description: 'Travel agencies, tour operators, hotels, and resorts can benefit from having a website to provide travel information, book trips, and offer travel services.',
    image: '/dm/industries/travel.webp',
  },
  {
    title: 'Food and Beverage',
    description: 'Restaurants, cafes, bars, and food delivery services can benefit from having a website to showcase menus, provide nutritional information, and offer online ordering and delivery services.',
    image: '/industries/food.webp',
  },
  {
    title: 'Technology and Software',
    description: 'Tech companies, software developers, and IT services can benefit from having a website to showcase products, provide technical support, and offer software solutions.',
    image: '/dm/industries/itech.webp',
  },
  {
    title: 'Arts and Entertainment',
    description: 'Artists, designers, writers, and entertainers can benefit from having a website to showcase their work, provide information on upcoming events, and offer creative services.',
    image: '/dm/Art Fairs.png',
  },
  {
    title: 'Non-Profit',
    description: 'Non-profit organizations, charities, and foundations can benefit from having a website to raise awareness, provide information on causes, and accept donations.',
    image: '/industries/ngo.webp',
  }
];
industrySectionContent = {
  title: "Industries That Need a Own Website & Marketing",
  description: "At Pencil Peel IMT, we understand that a website is essential for businesses across various industries. Here are some major industries that can benefit from having a website:"
};
industry_need_webiste:any = {
  title: "Why These Industries Need a Website",
  benefits :[
  {
    title: 'Reach a wider audience',
    description: 'A website allows businesses to reach a global audience and expand their customer base.',
    icon: 'pi-globe', // symbolizes global/web presence
    gradient: 'bg-gradient-to-tr from-blue-500 to-cyan-600'
  },
  {
    title: 'Provide information and services',
    description: 'A website provides a platform for businesses to provide information on their products and services, and offer customer support.',
    icon: 'pi-info-circle', // information/service representation
    gradient: 'bg-gradient-to-tr from-green-400 to-teal-500'
  },
  {
    title: 'Build brand awareness',
    description: 'A website helps businesses to build their brand identity and establish their online presence.',
    icon: 'pi-star', // brand/awareness represents quality or recognition
    gradient: 'bg-gradient-to-tr from-purple-500 to-pink-600'
  },
  {
    title: 'Drive sales and revenue',
    description: 'A website can help businesses to drive sales and revenue by providing a platform for online transactions and marketing.',
    icon: 'pi-chart-line', // chart-line for sales/revenue growth
    gradient: 'bg-gradient-to-tr from-orange-400 to-red-500'
  }
]
}
PencilPeelIMT_can_help:any ={
  title: "How Pencil Peel IMT Can Help",
  description : `At Pencil Peel IMT, we can help businesses in these industries by designing and developing a website that meets their specific needs and goals. Our team of experienced web designers and developers will work closely with you to understand your business needs and create a website that:`,
  features: [
  {
    id: 1,
    title: 'Reflects your brand identity',
    description: 'We will design a website that reflects your brand identity and values.',
    icon: 'pi-palette',
    borderColor: 'purple-500',
    iconBgColor: 'purple-100',
    iconColor: 'purple-600'
  },
  {
    id: 2,
    title: 'Provides a great user experience',
    description: 'We will ensure that your website provides a great user experience, making it easy for visitors to find what they\'re looking for and engage with your business.',
    icon: 'pi-heart',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Drives business results',
    description: 'We will optimize your website for conversions, ensuring that you get the most out of your online presence.',
    icon: 'pi-chart-line',
    borderColor: 'orange-500',
    iconBgColor: 'orange-100',
    iconColor: 'orange-600'
  }
]

}













}
