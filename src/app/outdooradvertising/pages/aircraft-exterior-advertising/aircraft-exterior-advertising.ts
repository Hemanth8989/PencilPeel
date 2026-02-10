import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-aircraft-exterior-advertising',
  imports: [CommonModule, ImageModule, Benefitsnew, Whycpencilpeel, OutdoorHeroSection,ButtonModule, Quotes],
  templateUrl: './aircraft-exterior-advertising.html',
  styleUrl: './aircraft-exterior-advertising.scss'
})
export class AircraftExteriorAdvertising {
  aircraftExteriorHeroConfig: HeroConfig = {
    badgeText: '#1 Aircraft Branding Experts',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: '',
      highlighted: [
        'Aircraft Exterior Branding:',
        'Take Your Brand to New Heights'
      ],
      suffix: ''
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating innovative marketing strategies that drive results. One effective way we will promote your brand is through aircraft exterior branding.',
    backgroundImage: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Sky-High Brand Visibility'
    ],
    primaryButton: {
      label: 'Start Your Campaign',
      icon: 'pi pi-arrow-right'
    },
    floatingCard: {
      text: 'Campaign Active',
      subtext: 'Live Now'
    }
  };

  benefitsAircraftBranding: any = {
    title: `Benefits of <span class="text-orange-500">Aircraft Exterior Branding</span>`,
    description: `By partnering with <span class="text-orange-500">Pencil Peel IMT</span> for aircraft exterior branding, your business can benefit from:`,
    benefits: [
      {
        icon: 'pi-eye',
        gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
        title: 'Increased Brand Visibility',
        description: 'Reach a large audience and increase brand awareness through aircraft exterior branding.'
      },
      {
        icon: 'pi-globe',
        gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
        title: 'Global Reach',
        description: 'Aircraft exterior branding can reach a global audience, making it an effective way to promote your brand worldwide.'
      },
      {
        icon: 'pi-star',
        gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
        title: 'Memorable Experiences',
        description: 'Create memorable experiences that drive customer loyalty and retention through aircraft exterior branding.'
      }
    ]
  }
  whyChooseAircraftBranding: any = {
    title: "Why Choose Pencil Peel IMT for Aircraft Exterior Branding?",
    description: "By partnering with Pencil Peel IMT for aircraft exterior branding, you can benefit from our expertise, customized solutions, and innovative approaches that ensure your brand makes a bold impact in the skies.",
    features: [
      {
        id: 1,
        title: 'Expertise',
        description: 'Our team has extensive experience in creating effective aircraft exterior branding campaigns that drive results.',
        icon: 'pi-star',
        borderColor: 'yellow-500',
        iconBgColor: 'yellow-100',
        iconColor: 'yellow-600'
      },
      {
        id: 2,
        title: 'Customized Solutions',
        description: 'We will work closely with you to understand your brand goals and develop customized aircraft exterior branding strategies that meet your needs.',
        icon: 'pi-wrench',
        borderColor: 'green-500',
        iconBgColor: 'green-100',
        iconColor: 'green-600'
      },
      {
        id: 3,
        title: 'Innovative Approach',
        description: 'Our team is dedicated to delivering innovative and effective marketing solutions that drive results.',
        icon: 'pi-lightbulb',
        borderColor: 'purple-500',
        iconBgColor: 'purple-100',
        iconColor: 'purple-600'
      }
    ],
    footer: ""
  };

  hero = {
    title: 'Aircraft Exterior Branding',
    subtitle:
      'Take your brand to new heights with our expert aircraft exterior branding solutions at Pencil Peel IMT.',
  };

  sections = [
    {
      title: 'Design',
      description:
        'Our expert designers collaborate with you to create eye-catching aircraft wraps and paint schemes that embody your brand’s identity.',
      bullets: [
        {
          title: 'Brand identity',
          text: 'Ensuring alignment with your brand’s tone and message.',
        },
        {
          title: 'Visual impact',
          text: 'Creating a design that captivates and stands out.',
        },
        {
          title: 'Aircraft specifications',
          text: 'Tailoring the design for a perfect fit to each model.',
        },
      ],
      image: 'outdoor/exterior/air_design.png',
      imageAlt: 'Aircraft Design',
    },
    {
      title: 'Installation',
      description:
        'Our installation experts ensure your aircraft wrap or paint scheme is applied with precision and care.',
      bullets: [
        {
          title: 'Quality control',
          text: 'Rigorous checks to maintain premium standards.',
        },
        {
          title: 'Attention to detail',
          text: 'Impeccable finishing for a flawless appearance.',
        },
      ],
      image: 'outdoor/exterior/installation.png',
      imageAlt: 'Aircraft Installation',
      reverse: true,
    },
    {
      title: 'Maintenance',
      description:
        'We ensure your aircraft branding continues to look exceptional and reflect your evolving brand.',
      bullets: [
        {
          title: 'Regular inspections',
          text: 'Routine checks for long-term quality.',
        },
        {
          title: 'Repairs & touch-ups',
          text: 'Keeping your wrap or paint scheme pristine.',
        },
        {
          title: 'Design updates',
          text: 'Reflecting changes in your branding strategy.',
        },
      ],
      image: 'outdoor/exterior/maintainance.png',
      imageAlt: 'Aircraft Maintenance',
    },
  ];

  cta = {
    title: 'Partner with Pencil Peel IMT',
    text: 'By partnering with Pencil Peel IMT for aircraft exterior branding, you can benefit from our expertise, customized solutions, and innovative approach. Let us help you take your brand to new heights with our expert aircraft exterior branding services. Contact us today to learn more about how Pencil Peel IMT can help your business thrive.',
  };

  industries = [
    {
      title: 'Travel and Tourism',
      description:
        'We help airlines, travel agencies, and tourism boards promote their destinations and services through aircraft exterior branding. Our team designs eye-catching wraps that showcase the beauty of destinations and attract potential customers.',
      image: 'outdoor/exterior/tourism.png',
    },
    {
      title: 'Luxury Brands',
      description:
        'We partner with high-end fashion, jewellery, and automotive brands to showcase their luxury products and create a sense of exclusivity through aircraft exterior branding. Our team designs sophisticated wraps that reflect luxury and elegance.',
      image: 'outdoor/exterior/luxury.png',
    },
    {
      title: 'Technology and Electronics',
      description:
        'We help tech companies promote their latest gadgets and innovations through aircraft exterior branding. Our team designs futuristic and innovative wraps that highlight the brand’s products and spark excitement.',
      image: 'outdoor/exterior/tech.png',
    },
    {
      title: 'Automotive',
      description:
        'We partner with car manufacturers and dealerships to promote their vehicles and create buzz around new models. Our wraps showcase vehicle features and design in a dynamic, visually appealing way.',
      image: 'outdoor/exterior/automotive.png',
    },
    {
      title: 'Food and Beverage',
      description:
        'We help restaurants, cafes, and food delivery services promote their brands and create excitement around new menu items or promotions. Our team designs colourful, appetizing wraps that make a strong impression.',
      image: 'outdoor/exterior/food.png',
    },
    {
      title: 'Entertainment and Events',
      description:
        'We collaborate with movie studios, concert promoters, and event organizers to promote their events and create a buzz around new releases or performances. Our designs capture the event’s energy and theme.',
      image: 'outdoor/exterior/entertainment.png',
    },
    {
      title: 'Sports and Fitness',
      description:
        'We help sports teams, fitness centres, and equipment manufacturers promote their brand and build excitement. Our wraps reflect energy, passion, and movement — inspiring customers everywhere.',
      image: 'outdoor/exterior/sports.png',
    },
  ];

  products = [
    {
      title: 'New Product Launches',
      description:
        'We help companies create a buzz around new product launches and generate excitement among potential customers through aircraft exterior branding. Our team designs wraps that showcase the product’s features and benefits.',
      points: [
        'Generate excitement and anticipation around new launches',
        'Increase visibility and reach a large audience',
        'Drive sales and conversions through urgency'
      ],
      icon: 'pi-megaphone'
    },
    {
      title: 'Special Promotions',
      description:
        'We partner with companies to promote special offers, discounts, or limited-time promotions through aircraft exterior branding. Our team designs wraps that highlight the promotion and encourage quick action.',
      points: [
        'Drive sales and conversions with limited-time offers',
        'Increase brand awareness and visibility',
        'Create urgency to inspire customer action'
      ],
      icon: 'pi-tags'
    },
    {
      title: 'Brand Awareness',
      description:
        'We help companies increase brand awareness and reach a large audience through impactful aircraft exterior branding. Our wraps showcase your brand’s message and values with clarity and power.',
      points: [
        'Increase visibility and audience reach',
        'Build strong brand recognition and identity',
        'Create a lasting impression and loyalty'
      ],
      icon: 'pi-globe'
    }
  ];

  reasons = [
    {
      title: 'High Visibility',
      description:
        'Aircraft exterior branding is highly visible and can reach a large audience wherever the aircraft travels.',
      icon: 'pi-eye'
    },
    {
      title: 'Global Reach',
      description:
        'Your brand can reach a global audience, making it an effective strategy for promoting your business worldwide.',
      icon: 'pi-globe'
    },
    {
      title: 'Memorable Experiences',
      description:
        'Aircraft branding creates powerful, memorable experiences that strengthen customer loyalty and brand recall.',
      icon: 'pi-star'
    }
  ];

  testimonials = [
  { text: "Take Your Brand to New Heights with Pencil Peel IMT's Aircraft Exterior Branding" },
  { text: "Fly High with Pencil Peel IMT's Innovative Aircraft Branding Solutions" },
  { text: "Reach New Horizons with Pencil Peel IMT's Aircraft Exterior Advertising Expertise" },
  { text: "Elevate Your Brand with Pencil Peel IMT's Soaring Aircraft Branding" }
];


  constructor(private router: Router) {
  }

  gotoContact() {
    this.router.navigate(['/contact']);
  }
}
