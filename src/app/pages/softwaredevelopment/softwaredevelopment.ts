import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TabsModule } from 'primeng/tabs';
import { TimelineModule } from 'primeng/timeline';
import { Services } from '../../components/services/services';
import { Contactus } from "../../components/contactus/contactus";
import { Whycpencilpeel } from "../../components/whycpencilpeel/whycpencilpeel";
import { ButtonModule } from 'primeng/button';
import { Nocarouselquotes } from "../../components/nocarouselquotes/nocarouselquotes";

interface Service {
  icon: string;
  color: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-softwaredevelopment',
  imports: [CarouselModule, TimelineModule, CommonModule, CardModule, TabsModule, Services, Contactus, Whycpencilpeel, ButtonModule, Nocarouselquotes],
  templateUrl: './softwaredevelopment.html',
  styleUrl: './softwaredevelopment.scss'
})
export class Softwaredevelopment {
  herocontent = {
  title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                bg-gradient-to-r from-orange-500 via-yellow-400 to-indigo-500  bg-clip-text text-transparent">
      Welcome to the Tech Universe of Pencil Peel IMT
    </span>
    <span class="block text-base sm:text-lg md:text-2xl font-semibold mt-2 text-white drop-shadow-lg">
      "Welcome to the Tech Universe of Pencil Peel IMT – Gateway for your custom Software needs"
    </span>
  `,
  description: `
  `,
  image: 'sde/webdev.webp'
};


  quotes = [
    { text: "Unlock Your Digital Potential with Expert Software, Web & App Solutions" },
    { text: "Unlock Your Business Growth through Custom Software, Web & App Development" },
    { text: "Unlock Your Innovation with Cutting-Edge Software, Web & App Design and Development" }
  ];
  responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '600px',
    numVisible: 1,
    numScroll: 1
  }
];

steps = [
  {
    number: 1,
    title: 'Gather Requirements',
    description: 'Understand your business needs and goals clearly to build a solid foundation.'
  },
  {
    number: 2,
    title: 'Design & Develop',
    description: 'Create a customized software solution tailored exactly to your requirements.'
  },
  {
    number: 3,
    title: 'Test & Quality Assure',
    description: 'Ensure the software meets the highest quality standards and is bug-free.'
  },
  {
    number: 4,
    title: 'Deploy & Maintain',
    description: 'Deploy the software and continue maintenance to meet evolving business needs.'
  }
];

processSteps = [
  {
    step: 'Step 1',
    title: 'Requirements gathering and analysis',
    icon: 'pi pi-search',
    markerColor: 'bg-blue-400',
    badgeColor: 'bg-blue-100 text-blue-800'
  },
  {
    step: 'Step 2',
    title: 'Design and prototyping',
    icon: 'pi pi-cog',
    markerColor: 'bg-purple-400',
    badgeColor: 'bg-purple-100 text-purple-800'
  },
  {
    step: 'Step 3',
    title: 'Development and testing',
    icon: 'pi pi-palette',
    markerColor: 'bg-green-400',
    badgeColor: 'bg-green-100 text-green-800'
  },
  {
    step: 'Step 4',
    title: 'Deployment and maintenance',
    icon: 'pi pi-megaphone',
    markerColor: 'bg-red-400',
    badgeColor: 'bg-red-100 text-red-800'
  },
  {
    step: 'Ongoing',
    title: 'Continuous iteration and improvement',
    icon: 'pi pi-chart-line',
    markerColor: 'bg-indigo-400',
    badgeColor: 'bg-indigo-100 text-indigo-800'
  },
  // {
  //   step: '',
  //   title: 'Ongoing Support',
  //   icon: 'pi pi-heart',
  //   markerColor: 'bg-yellow-400',
  //   badgeColor: 'bg-yellow-100 text-yellow-800'
  // }
];

services: Service[] = [
    {
      icon: 'pi pi-search',
      color: 'text-blue-600',
      title: 'Search Engine Optimization (SEO)',
      description: "We'll optimize your website to rank higher in search results and drive more organic traffic."
    },
    {
      icon: 'pi pi-bullseye',
      color: 'text-green-600',
      title: 'Pay-Per-Click (PPC) Advertising',
      description: "We create targeted PPC campaigns to drive traffic to your website and generate quality leads."
    },
    {
      icon: 'pi pi-share-alt',
      color: 'text-pink-600',
      title: 'Social Media Marketing',
      description: "We help you build a strong social media presence with engaging content that resonates with your target audience."
    },
    {
      icon: 'pi pi-pencil',
      color: 'text-yellow-500',
      title: 'Content Marketing',
      description: "We create high-quality content that educates, attracts, and retains your ideal customers."
    }
  ];

websitetabs = [
  {
    title: 'Website Design',
    img: 'sde/webdesign.webp', // Replace with your design image path
    description: `
      Our team at Pencil Peel IMT will design visually appealing and user-friendly websites that reflect your brand's identity and values.
      We'll work closely with you to understand your needs and goals, and create a website that:
    `,
    points: [
      { icon: 'pi pi-image', title: '', desc: 'Showcases your products or services in a compelling way' },
      { icon: 'pi pi-sitemap', title: '', desc: 'Provides an intuitive and seamless user experience' },
      { icon: 'pi pi-search', title: '', desc: 'Is optimized for search engines to improve your online visibility' }
    ]
  },
  {
    title: 'Website Design & Development',
    img: 'sde/web/webdevelopment.webp', // Replace with your development image path
    description: `
      Our team will develop custom websites that are tailored to your specific needs and goals.
      We'll use the latest technologies and frameworks to build a website that:
    `,
    points: [
      { icon: 'pi pi-bolt', title: '', desc: 'Is fast, secure, and scalable' },
      { icon: 'pi pi-tablet', title: '', desc: 'Provides a responsive design that adapts to different devices and screen sizes' },
      { icon: 'pi pi-shopping-cart', title: '', desc: 'Includes features such as e-commerce integration, contact forms, and user authentication' }
    ]
  },
  {
    title: 'Website Promotion/Marketing Service',
    img: 'sde/web/webmarketing.webp', // Replace with your marketing image path
    description: `
      Our team will help you promote your website and increase your online visibility through various marketing strategies, including:
    `,
    points: [
      { icon: 'pi pi-search', title: 'Search Engine Optimization (SEO): ', desc: "We'll optimize your website to rank higher in search engine results pages (SERPs) and drive more organic traffic to your site." },
      { icon: 'pi pi-bullseye', title: 'Pay-Per-Click (PPC) Advertising: ', desc: "We'll create targeted PPC campaigns to drive traffic to your website and generate leads." },
      { icon: 'pi pi-share-alt', title: 'Social Media Marketing: ', desc: "We'll help you build a strong social media presence and create engaging content that resonates with your target audience." },
      { icon: 'pi pi-pencil', title: 'Content Marketing: ', desc: "We'll create high-quality, informative content that attracts and retains a clearly defined audience." }
    ]
  }
];


mobiletabs = [
  {
    title: 'Mobile Application Design',
    img: 'sde/mobdesign.webp', // visually showcases design
    description: `
      Our team will design visually appealing and user-friendly mobile applications that reflect your brand's identity and values.
      We'll work closely with you to understand your needs and goals, and create a mobile application that:
    `,
    points: [
      { icon: 'pi pi-image', title: '', desc: 'Showcases your products or services in a compelling way' },
      { icon: 'pi pi-sitemap', title: '', desc: 'Provides an intuitive and seamless user experience' },
      { icon: 'pi pi-tablet', title: '', desc: 'Is optimized for different devices and screen sizes' }
    ]
  },
  {
    title: 'Mobile Application Development',
    img: 'sde/mobdevelopment.webp', // visually shows app development
    description: `
      Our team will develop custom mobile applications tailored to your specific needs and goals.
      We'll use the latest technologies and frameworks to build a mobile application that:
    `,
    points: [
      { icon: 'pi pi-bolt', title: '', desc: 'Is fast, secure, and scalable' },
      { icon: 'pi pi-mobile', title: '', desc: 'Provides a responsive design that adapts to different devices and screen sizes' },
      { icon: 'pi pi-bell', title: '', desc: 'Includes features such as push notifications, in-app purchases, and social media integration' }
    ]
  },
  {
    title: 'Mobile Application Marketing Service',
    img: 'sde/mobmarketing.webp', // new unique image
    description: `
      Our team will help you promote your mobile application and increase its visibility through various marketing strategies, including:
    `,
    points: [
      { icon: 'pi pi-star', title: 'App Store Optimization (ASO): ', desc: "We'll optimize your mobile application to rank higher in app stores and drive more organic traffic to your app." },
      { icon: 'pi pi-share-alt', title: 'Social Media Marketing: ', desc: "We'll help you build a strong social media presence and create engaging content that resonates with your target audience." },
      { icon: 'pi pi-users', title: 'Influencer Marketing: ', desc: "We'll partner with influencers who can promote your mobile application to their followers." },
      { icon: 'pi pi-money-bill', title: 'Paid Advertising: ', desc: "We'll create targeted paid advertising campaigns to drive traffic to your mobile application and generate leads." }
    ]
  }
];
servicetitle:string = 'Our Services'
serviceTabs = [
  {
    title: "Software Development",
    description: "We'll develop custom software solutions that meet your specific needs and goals.",
    image: "/sde/enterpricedev.webp", // Replace with your actual software dev image path
    link: "/softwaredevelopment",
    icon: "pi pi-code"
  },
  {
    title: "Website Design & Development",
    description: "We'll design and develop visually appealing and user-friendly websites that reflect your brand's identity and values.",
    image: "/sde/webdev.webp", // Replace with your actual web dev image path
    link: "/websitedevelopment",
    icon: "pi pi-globe"
  },
  {
    title: "Mobile Application Design and Development",
    description: "We'll design and develop innovative mobile applications that cater to the diverse needs of your users.",
    image: "/sde/mobdevelopment.webp", // Replace with your actual mobile app image path
    link: "/appdevelopment",
    icon: "pi pi-mobile"
  },
  {
    title: "IT Consulting",
    description: "We'll provide expert IT consulting services to help you navigate the complex technology landscape and make informed decisions.",
    image: "/dm/itConsulting.png", // Replace with your actual IT consulting image path
    link: "/itconsulting",
    icon: "pi pi-mobile"
  },
  {
    title: "CyberSecurity Services",
    description: "We'll provide expert CyberSecurity services to help you protect your business from digital threats.",
    image: "/dm/cybersecurityhome.png", // Replace with your actual CyberSecurity image path
    link: "/cybersecurity",
    icon: "pi pi-mobile"
  },
  {
    title: "Payroll Services",
    description: "We'll provide comprehensive payroll services to help you manage your employees' salaries, benefits, and taxes efficiently.",
    image: "/dm/payroll.png", // Replace with your actual Payroll image path
    link: "/payroll",
    icon: "pi pi-mobile"
  }
];
contact:any = {
  title:'Contact Us Today',
  description:`If you're looking for a reliable partner to help you develop and promote your software, website, or mobile application, Contact us Today. Our team at Pencil Peel IMT will work with you to understand your needs and goals, and develop a customized solution that meets your requirements.`
}
whyccontent = {
    title: "Why Choose Pencil Peel IMT?",
    description: "At Pencil Peel IMT, we have a team of experienced developers and marketers who are dedicated to delivering high-quality solutions that meet the diverse needs of our clients. Whether you're looking for software development, website design and development, or mobile application design and development, we've got you covered."
};
whycfeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has extensive experience in software development, website design and development, and mobile application design and development. We\'re skilled in delivering high-quality solutions that meet the latest industry standards.',
    icon: 'pi-star',
    borderColor: 'yellow-500',
    iconBgColor: 'yellow-100',
    iconColor: 'yellow-600'
  },
  {
    id: 2,
    title: 'Customized Solutions',
    description: 'We\'ll work closely with you to understand your needs and goals, and develop a customized solution that meets your specific requirements.',
    icon: 'pi-wrench',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Timely Delivery',
    description: 'Our team will deliver high-quality solutions on time, ensuring that your project is completed within the specified timeframe.',
    icon: 'pi-clock',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  }
];



  activeIndex = 0;
  intervalId: any = null;
  intervalMs = 5000; // Switch every 5 seconds

  ngOnInit() {
    this.startTabCycle();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startTabCycle() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.mobiletabs.length;
    }, this.intervalMs);
  }

  onTabChange(index: any) {
    this.activeIndex = index;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startTabCycle();
    }
  }
  mobresponsiveoptions = [
  {
    breakpoint: '1024px',
    numVisible: 1
  },
  {
    breakpoint: '768px',
    numVisible: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
];



}
