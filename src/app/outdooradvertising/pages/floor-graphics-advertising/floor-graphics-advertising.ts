import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-floor-graphics-advertising',
  imports: [CommonModule, Benefitsnew, Whycpencilpeel, OutdoorHeroSection, CardModule, Quotes],
  templateUrl: './floor-graphics-advertising.html',
  styleUrl: './floor-graphics-advertising.scss'
})
export class FloorGraphicsAdvertising {
testimonials = [
  { text: "Step Up Your Advertising with Pencil Peel IMT's Floor Graphics Solutions" },
  { text: "Walk Over Your Competition with Pencil Peel IMT's Creative Floor Graphics" },
  { text: "Make a Lasting Impression with Pencil Peel IMT's Floor Graphics Advertising" },
  { text: "Put Your Brand on the Ground with Pencil Peel IMT's Impactful Floor Graphics" }
];

  floorGraphicsHeroConfig: HeroConfig = {
    badgeText: '#1 Floor Graphics Agency',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: 'Unlock your',
      highlighted: [
        'Floor Graphics',
        'Advertising'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective floor graphics advertising campaigns that drive business growth and product awareness.',
    backgroundImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Step Into Success'
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

  benefitsFloorGraphics: any = {
    title: `Benefits of <span class="text-orange-500">Floor Graphics Advertising</span>`,
    description: `Our team will highlight the benefits of floor graphics advertising:`,
    benefits: [
      {
        icon: 'pi-eye',
        gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
        title: 'Unique Visibility',
        description: 'We will create floor graphics that stand out and catch attention.'
      },
      {
        icon: 'pi-wallet',
        gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
        title: 'Cost-Effective',
        description: 'Our team will help you achieve affordable advertising with floor graphics.'
      },
      {
        icon: 'pi-palette',
        gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
        title: 'Customizable Designs',
        description: 'We will tailor designs to fit your brand\'s aesthetics and marketing goals.'
      },
      {
        icon: 'pi-th-large',
        gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
        title: 'Space Utilization',
        description: 'Our team will maximize available real estate in high-traffic areas.'
      },
      {
        icon: 'pi-shield',
        gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
        title: 'Durable and Long-Lasting',
        description: 'We will create floor graphics that withstand wear and tear.'
      },
      {
        icon: 'pi-ban',
        gradient: 'bg-gradient-to-tr from-slate-400 to-slate-600',
        title: 'Non-Intrusive Advertising',
        description: 'Our team will ensure floor graphics don\'t obstruct views or clutter spaces.'
      },
      {
        icon: 'pi-sparkles',
        gradient: 'bg-gradient-to-tr from-fuchsia-400 to-fuchsia-600',
        title: 'Interactive and Engaging',
        description: 'We will create creative designs that captivate audiences.'
      },
      {
        icon: 'pi-directions',
        gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
        title: 'Directs Foot Traffic',
        description: 'Our team will help you guide customers to specific locations.'
      },
      {
        icon: 'pi-clone',
        gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
        title: 'Versatile Applications',
        description: 'We will help you use floor graphics in various settings.'
      },
      {
        icon: 'pi-check-circle',
        gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
        title: 'Safety and Compliance',
        description: 'Our team will ensure floor graphics meet safety standards.'
      },
      {
        icon: 'pi-leaf',
        gradient: 'bg-gradient-to-tr from-lime-400 to-lime-600',
        title: 'Eco-Friendly Options',
        description: 'We will help you choose eco-friendly materials.'
      },
      {
        icon: 'pi-calendar',
        gradient: 'bg-gradient-to-tr from-sky-400 to-sky-600',
        title: 'Temporary or Permanent Solutions',
        description: 'Our team will help you choose the right solution for your business needs.'
      },
      {
        icon: 'pi-bolt',
        gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
        title: 'Encourages Impulse Purchases',
        description: 'We will create floor graphics that influence shoppers\' decisions.'
      },
      {
        icon: 'pi-megaphone',
        gradient: 'bg-gradient-to-tr from-violet-400 to-violet-600',
        title: 'Enhances Brand Awareness',
        description: 'Our team will create bold, creative floor graphics that reinforce brand identity.'
      },
      {
        icon: 'pi-share-alt',
        gradient: 'bg-gradient-to-tr from-rose-400 to-rose-600',
        title: 'Social Media Amplification',
        description: 'We will help you create floor graphics that encourage social media sharing.'
      }
    ]
  }
  whyChooseFloorGraphics: any = {
    title: "Why Choose Pencil Peel IMT for Floor Graphics Advertising?",
    description: "",
    features: [
      {
        id: 1,
        title: 'Expertise',
        description: 'Our team has years of experience in floor graphics advertising, creating visually engaging and effective campaigns.',
        icon: 'pi-star',
        borderColor: 'yellow-500',
        iconBgColor: 'yellow-100',
        iconColor: 'yellow-600'
      },
      {
        id: 2,
        title: 'Customized Solutions',
        description: 'We tailor our floor graphics solutions to meet the unique needs of your business, ensuring every campaign aligns with your goals.',
        icon: 'pi-wrench',
        borderColor: 'green-500',
        iconBgColor: 'green-100',
        iconColor: 'green-600'
      },
      {
        id: 3,
        title: 'Proven Results',
        description: 'Our team has helped numerous businesses achieve success through floor graphics advertising, enhancing brand visibility and engagement.',
        icon: 'pi-check-circle',
        borderColor: 'blue-500',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600'
      }
    ],
    footer: ""
  };

  floorIndustries = [
    {
      icon: 'fa-solid fa-cart-shopping',
      title: 'Retail',
      desc: 'Our team will help retailers promote products and services.'
    },
    {
      icon: 'fa-solid fa-hotel',
      title: 'Hospitality',
      desc: 'We will help hospitality businesses enhance customer experiences.'
    },
    {
      icon: 'fa-solid fa-calendar-days',
      title: 'Events',
      desc: 'Our team will help event organizers create engaging floor graphics.'
    },
    {
      icon: 'fa-solid fa-futbol',
      title: 'Sports Venues',
      desc: 'We will help sports venues promote teams, sponsors, or events.'
    }
  ];

floorBenefits = [
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Enhance In-Store Experiences',
    desc: 'We will create engaging and creative floor graphics.'
  },
  {
    icon: 'fa-solid fa-arrow-up-right-dots',
    title: 'Drive Traffic',
    desc: 'Our team will help you drive traffic to specific areas or products.'
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Launch a Campaign',
    desc: 'We will help you launch a campaign in high-traffic locations.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Enhance Customer Engagement',
    desc: 'We will create interactive and engaging floor graphics.'
  }
];


}
