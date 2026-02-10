import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Servicesnew } from "../../components/servicesnew/servicesnew";
import { Principal } from "./principal/principal";
import { Corevalues } from "./corevalues/corevalues";
import { Philosphy } from "./philosphy/philosphy";
import { Whycpencilpeel } from "../../components/whycpencilpeel/whycpencilpeel";

@Component({
  selector: 'app-about',
  imports: [CommonModule, ButtonModule, CardModule, Servicesnew, Principal, Corevalues, Philosphy, Whycpencilpeel],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  title = 'pencil-peel-imt';
  mobileMenuOpen = false;
  constructor() {}
  service:any = {
    title: `Our Comphrehensive <span class="text-orange-500 font-bold">Services</span>`,
    description: `Our expertise lies in providing comprehensive services, including:`,
    list: [
      {
        title: 'Digital Marketing Services',
        description: 'Elevate your online presence with our expert digital marketing solutions',
        image: 'dm/slide1.webp',
        route: '/digital-marketing-services'
      },
      {
        title: 'Software Development',
        description: 'Custom software development tailored to your business needs',
        image: 'sde/webdev.webp',
        route: '/software-development-services'
      },
      {
        title: 'Brand Promotion',
        description: 'Build and strengthen your brand with our creative solutions',
        image: '/outdoor/retail/retail3.webp',
        route: '/brand-promotion-services'
      },
      {
        title: 'AI Technology',
        description: 'Leverage the power of AI to drive business innovation and growth',
        image: '/ai/aichatbot.webp',
        route: '/ai-technology-services'
      },
      {
        title: 'IT Consulting',
        description: 'Expert guidance to optimize your IT infrastructure and strategy',
        image: 'sde/maintenance.webp',
        route: '/it-consulting-services'
      },
      {
        title: 'Web and App Design & Development',
        description: 'Create stunning web and mobile applications that engage your audience',
        image: 'sde/webdesign.webp',
        route: '/web-app-development-services'
      },
      {
        title: 'Personal Branding',
        description: 'Establish a strong personal brand that resonates with your audience',
        image: '/dm/inf/infhome.webp',
        route: '/personal-branding-services'
      },
      {
        title: 'Outdoor Advertising',
        description: 'Reach a wider audience with our outdoor advertising solutions',
        image: '/outdoor/Billboard/digitalbillboard.webp',
        route: '/outdoor-advertising-services'
      }
    ]
  }
  
  cofounderCards = [
    {
      title: '',
      content: `"At Pencil Peel IMT, we're driven by a powerful vision: to help businesses reveal their true potential by shedding their outer layers of inefficiency and underperformance. Just like a Pencil Peel IMT exposes the sharp edge of a graphite core, our expertise helps companies uncover their inner strength and achieve success."`,
      background: 'linear-gradient(135deg, #fff7ed, #fff1d6)',
      border: 'rgba(251,191,36,0.3)',
      titleGradient: 'linear-gradient(to right, #f97316, #facc15)'
    },
    {
      title: 'Our Ideology',
      content: `As I reflect on the concept of Pencil Peel IMT, I'm reminded of the importance of stripping away the non-essential to reveal the core of what makes a business great. Our ideology is built on this simple yet profound principle. We believe that every company has its unique strengths and weaknesses, and our goal is to identify and amplify the strengths while eliminating the weaknesses.`,
      background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
      border: 'rgba(250,204,21,0.3)',
      titleGradient: 'linear-gradient(to right, #d97706, #f59e0b)'
    },
    {
      title: 'Our Motto',
      content: `Our motto, 'Sharpening Businesses to Success,' is more than just a tagline – it's a promise. We empower businesses to achieve success by shedding their outer layers of inefficiency and underperformance. By working together, we can help companies reveal their true potential and thrive in today's competitive market.`,
      background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
      border: 'rgba(139,92,246,0.3)',
      titleGradient: 'linear-gradient(to right, #8b5cf6, #c084fc)'
    },
    {
      title: 'The Power of Pencil Peel',
      content: `Just as a pencil peel is a natural part of the sharpening process, we believe that businesses must continually evaluate and refine their operations to stay ahead. Our team of experts works closely with businesses to identify areas of improvement and develop strategies to enhance their performance.`,
      background: 'linear-gradient(135deg, #ede0dc, #fcd5ce)',
      border: 'rgba(239,68,68,0.3)',
      titleGradient: 'linear-gradient(to right, #ef4444, #f87171)'
    },
    {
      title: 'Our Commitment',
      content: `At Pencil Peel IMT, we're committed to helping businesses like yours succeed. We offer a range of services designed to help you achieve your goals, including business analysis, strategy development, and performance enhancement. With our expertise and guidance, businesses can improve efficiency, enhance performance, and achieve success.`,
      background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
      border: 'rgba(22,163,74,0.3)',
      titleGradient: 'linear-gradient(to right, #16a34a, #4ade80)'
    },
    {
      title: 'Join Us',
      content: `If you're ready to reveal your business's true potential, we invite you to partner with us. Together, let's sharpen your competitive edge and achieve success in today's fast-paced market.`,
      background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
      border: 'rgba(59,130,246,0.3)',
      titleGradient: 'linear-gradient(to right, #3b82f6, #60a5fa)'
    }
  ];

  // Floating particles for background animation
  particles = Array.from({ length: 15 }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5
  }));
  // Data properties
  quotes = [
    {
      title: "Your Vision, Our Mission",
      description: "We turn your dreams into reality, delivering success and growth."
    },
    {
      title: "Empowering Your Success",
      description: "At Pencil Peel IMT, we partner with you to scale new heights and achieve greatness."
    },
    {
      title: "Transforming Brands, Elevating Success",
      description: "We craft innovative solutions to propel your business forward."
    },
    {
      title: "Your Dreams, Our Expertise",
      description: "We bring expertise and creativity to make your vision a reality."
    },
    {
      title: "Growing Together, Succeeding Together",
      description: "At Pencil Peel IMT, we stand with you every step of the way to ensure your success."
    },
    {
      title: "Delivering Excellence, Exceeding Expectations",
      description: "Your Success, Our Priority"
    }
  ];
  detailedServices = [
    {
      icon: 'pi pi-globe',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive results.'
    },
    {
      icon: 'pi pi-code',
      title: 'Software Development',
      description: 'Custom software solutions tailored to meet your specific business requirements.'
    },
    {
      icon: 'pi pi-star',
      title: 'Brand Promotion',
      description: 'Creative brand promotion strategies that make your business stand out from the competition.'
    },
    {
      icon: 'pi pi-bolt',
      title: 'AI Technology',
      description: 'Leverage cutting-edge AI technologies to drive innovation and business growth.'
    },
    {
      icon: 'pi pi-cog',
      title: 'IT Consulting',
      description: 'Expert guidance to optimize your IT infrastructure and strategic technology decisions.'
    },
    {
      icon: 'pi pi-mobile',
      title: 'Web & App Development',
      description: 'Beautiful, functional web and mobile applications that engage your audience.'
    },
    {
      icon: 'pi pi-user',
      title: 'Personal Branding',
      description: 'Build a strong personal brand that resonates with your target audience.'
    },
    {
      icon: 'pi pi-map',
      title: 'Outdoor Advertising',
      description: 'Strategic outdoor advertising solutions to reach wider audiences effectively.'
    }
  ];
  partnershipBenefits: any = {
  title: "Partner with Us:",
  description: "By partnering with Pencil Peel IMT, you'll benefit from our:",
  features: [
    {
      id: 1,
      title: 'Expertise',
      description: 'Expertise in digital marketing, software development, and more',
      icon: 'pi-star',
      borderColor: 'orange-500',
      iconBgColor: 'orange-100',
      iconColor: 'orange-600'
    },
    {
      id: 2,
      title: 'Innovation',
      description: 'Innovative approach to problem-solving',
      icon: 'pi-lightbulb',
      borderColor: 'purple-500',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'Collaborative and client-focused team',
      icon: 'pi-users',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    },
    {
      id: 4,
      title: 'Results',
      description: 'Commitment to delivering exceptional results',
      icon: 'pi-trophy',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    }
  ],
  footer: ""
  };
  coreValues = [
    {
      icon: 'pi pi-heart',
      title: 'Commitment',
      description: "We're dedicated to delivering exceptional results for our clients, going above and beyond to ensure their success."
    },
    {
      icon: 'pi pi-users',
      title: 'Partnership',
      description: "We partner with our clients to achieve greatness, working together as one team towards common goals."
    },
    {
      icon: 'pi pi-lightbulb',
      title: 'Innovation',
      description: "We stay ahead of the curve to provide cutting-edge solutions that drive business transformation."
    }
  ];
  // Methods
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  startProject(): void {
    // Handle start project action
    console.log('Starting project...');
  }
  scheduleConsultation(): void {
    // Handle schedule consultation action
    console.log('Scheduling consultation...');
  }
}
