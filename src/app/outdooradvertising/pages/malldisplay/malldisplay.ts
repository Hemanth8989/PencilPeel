import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { CommonModule } from '@angular/common';
import { Contactus } from '../../../components/contactus/contactus';
import { ButtonModule } from 'primeng/button';
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Quotes } from '../../../components/quotes/quotes';
interface MallDisplayType {
  title: string;
  description: string;
  image: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface GrowthSection {
  title: string;
  details: string[];
  icon: string;
  image: string;
}
@Component({
  selector: 'app-malldisplay',
  imports: [CommonModule, Contactus, ButtonModule, Whycpencilpeel, OutdoorHeroSection, Quotes],
  templateUrl: './malldisplay.html',
  styleUrl: './malldisplay.scss'
})
export class Malldisplay {
  mallDisplayHeroConfig: HeroConfig = {
  badgeText: '#1 Mall Advertising Specialists',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: '',
    highlighted: [
      'Mall Displays',
      'Advertising'
    ],
    suffix: 'with Pencil Peel'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel</strong>, we specialize in creating effective mall display advertising campaigns that drive business growth and product awareness.',
  backgroundImage: 'outdoor/malldisplay/malldisplay.webp',
  typingTexts: [
    'Captive Audience Impact'
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

testimonials = [
  { text: "Reach the Right Audience in the Right Place with Pencil Peel IMT's Mall Displays" },
  { text: "Elevate Your Brand with Impactful Mall Advertising Solutions - Pencil Peel IMT" },
  { text: "Make a Lasting Impression in Malls with Pencil Peel IMT's Creative Displays" },
  { text: "Transform Your Brand Visibility with Pencil Peel IMT's Expert Mall Display Advertising" }
];

  heroContent: any = {
  title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                bg-gradient-to-r from-pink-600 via-red-400 to-yellow-500 bg-clip-text text-transparent">
      Mall Displays Advertising with Pencil Peel
    </span>
    <span class="block text-base sm:text-lg md:text-2xl font-semibold mt-2 text-gray-800 drop-shadow-lg">
      At Pencil Peel IMT, we specialize in creating effective mall display advertising campaigns that drive business growth and product awareness.
    </span>
  `,
  description: `Drive business growth and boost product awareness with our impactful mall display advertising campaigns.`,
  image: 'sde/mall-displays-advertising.webp'
};

  displayTypes: MallDisplayType[] = [
    {
      title: 'Digital Screens',
      description: 'We will create high-definition displays showcasing videos, slideshows, or animated content.',
      image: 'outdoor/malldisplay/malldisplay.webp'
    },
    {
      title: 'Static Posters and Banners',
      description: 'Our team will design traditional print ads placed in key mall areas.',
      image: 'outdoor/malldisplay/malldisplay1.webp'
    },
    {
      title: 'Kiosks and Product Displays',
      description: 'We will create physical setups where brands showcase products or allow customer interaction.',
      image: 'outdoor/retail/retail1.webp'
    },
    {
      title: 'Interactive Displays',
      description: 'Our team will design digital touchscreens or AR/VR experiences that engage shoppers interactively.',
      image: 'outdoor/retail/retail3.webp'
    },
    {
      title: 'Floor Graphics and Escalator Wraps',
      description: 'We will use creative designs to catch attention in high-traffic zones.',
      image: 'outdoor/pillar/escalator.webp'
    }
  ];

  // For PrimeNG Galleria
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  benefits: Benefit[] = [
    {
      title: 'Captive Audience',
      description: 'We will help you reach a captive audience of shoppers who spend extended periods browsing.',
      icon: 'pi pi-users',
      color: 'orange'
    },
    {
      title: 'High Foot Traffic',
      description: 'Our team will ensure that your ads are seen by thousands of people daily.',
      icon: 'pi pi-chart-line',
      color: 'blue'
    },
    {
      title: 'Targeted Demographics',
      description: 'We will help you target specific demographics, such as families, teens, or affluent shoppers.',
      icon: 'pi pi-sitemap',
      color: 'green'
    },
    {
      title: 'Drives Impulse Purchases',
      description: 'Our team will create ads that encourage immediate action.',
      icon: 'pi pi-bolt',
      color: 'purple'
    },
    {
      title: 'Premium Environment',
      description: 'We will associate your brand with a premium image.',
      icon: 'pi pi-gem',
      color: 'pink'
    },
    {
      title: 'Enhanced Brand Engagement',
      description: 'Our team will create interactive displays that engage customers directly with your brand.',
      icon: 'pi pi-comments',
      color: 'teal'
    }
  ];

  growthSections: GrowthSection[] = [
    {
      title: 'Increasing Brand Awareness',
      details: [
        'Reaching a Wide Audience: We will display your ads to a large and targeted audience, increasing your brand\'s visibility and reach.',
        'Creating Engaging Ads: Our team will design ads that are visually appealing and engaging, helping to capture the attention of your target audience.'
      ],
      icon: 'pi pi-star',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Driving Website Traffic',
      details: [
        'Targeting Relevant Audiences: Our team will target audiences that are relevant to your business, increasing the likelihood of driving qualified traffic to your website.',
        'Creating Compelling Ads: We will design ads that encourage users to click through to your website.'
      ],
      icon: 'pi pi-globe',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Generating Leads and Sales',
      details: [
        'Creating Conversion-Driven Ads: We will design ads that are optimized for conversions, helping to drive leads and sales for your business.',
        'Targeting High-Intent Audiences: Our team will target audiences that are likely to be interested in your products or services.'
      ],
      icon: 'pi pi-dollar',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Building Brand Credibility',
      details: [
        'Creating Professional Ads: Our team will design ads that are professional and visually appealing, helping to establish your brand\'s credibility.',
        'Consistent Branding: We will ensure consistent branding across all your display ads, helping to reinforce your brand\'s identity.'
      ],
      icon: 'pi pi-shield',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Measuring and Optimizing Performance',
      details: [
        'Tracking Key Metrics: We will track key metrics such as impressions, clicks, and conversions to measure the performance of your campaigns.',
        'Optimizing Ad Performance: Our team will use data and analytics to optimize ad performance, ensuring that your campaigns are delivering the best possible results.'
      ],
      icon: 'pi pi-chart-bar',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    }
  ];

contact:any = {
  title:'Contact Us Today',
  description:`By partnering with Pencil Peel IMT, you can unlock the full potential of mall display advertising and drive business growth. Contact us to learn more about our mall display advertising services.`
}

whyccontent = {
    title: "Why Choose Pencil Peel IMT?",
    description: "",
    footer:''
};
whycfeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has years of experience in mall display advertising.',
    icon: 'pi-star',
    borderColor: 'yellow-500',
    iconBgColor: 'yellow-100',
    iconColor: 'yellow-600'
  },
  {
    id: 2,
    title: 'Customized Solutions',
    description: 'We will tailor our services to meet the unique needs of your business.',
    icon: 'pi-wrench',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Proven Results',
    description: 'Our team has helped numerous businesses achieve success through mall display advertising.',
    icon: 'pi-check-circle',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  }
];


}
