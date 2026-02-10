import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-street-furniture-advertising',
  imports: [Benefitsnew, OutdoorHeroSection, CommonModule, CardModule, Quotes],
  templateUrl: './street-furniture-advertising.html',
  styleUrl: './street-furniture-advertising.scss'
})
export class StreetFurnitureAdvertising {
  testimonials = [
  { text: "Sit Back, Relax, and Engage with Pencil Peel IMT's Street Furniture Advertising" },
  { text: "Reach Your Audience Where They Live with Pencil Peel IMT's Street Furniture Ads" },
  { text: "Transform Public Spaces into Ad Spaces with Pencil Peel IMT's Expertise" },
  { text: "Place Your Brand in the Heart of the City with Pencil Peel IMT's Street Furniture Solutions" }
];

  streetFurnitureHeroConfig: HeroConfig = {
    badgeText: '#1 Street Furniture Agency',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: 'Unlock Your',
      highlighted: [
        'Street Furniture',
        'Advertising'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective street furniture advertising campaigns that drive business growth and product awareness.',
    backgroundImage: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Reach Them at Street Level'
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

  benefitsStreetFurniture: any = {
    title: `Benefits of <span class="text-orange-500">Street Furniture Advertising</span>`,
    description: `Our team will highlight the benefits of street furniture advertising:`,
    benefits: [
      {
        icon: 'pi-eye',
        gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
        title: 'High Visibility',
        description: 'We will place your ads in high-traffic areas to capture the attention of a large, diverse audience.'
      },
      {
        icon: 'pi-compass',
        gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
        title: 'Targeted Advertising',
        description: 'Our team will help you target specific local audiences based on location.'
      },
      {
        icon: 'pi-wallet',
        gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
        title: 'Cost-Effective',
        description: 'We will provide an economical way to reach urban consumers without high costs.'
      },
      {
        icon: 'pi-clock',
        gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
        title: 'Long-Term Exposure',
        description: 'Our team will ensure continuous exposure to passers-by over weeks or months.'
      },
      {
        icon: 'pi-users',
        gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
        title: 'High Engagement',
        description: 'We will create ads that engage people while they wait at bus stops, benches, or other types of street furniture.'
      },
      {
        icon: 'pi-building',
        gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
        title: 'Urban Integration',
        description: 'Street furniture ads blend seamlessly with urban environments.'
      },
      {
        icon: 'pi-sliders-h',
        gradient: 'bg-gradient-to-tr from-amber-400 to-orange-500',
        title: 'Flexibility',
        description: 'Our team will help you choose static or digital formats depending on your campaign\'s needs.'
      },
      {
        icon: 'pi-leaf',
        gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
        title: 'Sustainability',
        description: 'We will use durable, weather-resistant materials to ensure longevity.'
      },
      {
        icon: 'pi-map-marker',
        gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
        title: 'Localized Branding',
        description: 'Our team will help you build strong connections with local communities.'
      },
      {
        icon: 'pi-directions',
        gradient: 'bg-gradient-to-tr from-indigo-400 to-indigo-600',
        title: 'Increases Foot Traffic',
        description: 'We will drive foot traffic to your location with strategic ad placement.'
      },
      {
        icon: 'pi-ban',
        gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
        title: 'Non-Intrusive',
        description: 'Street furniture ads are generally seen as a natural part of the urban landscape.'
      },
      {
        icon: 'pi-share-alt',
        gradient: 'bg-gradient-to-tr from-fuchsia-400 to-fuchsia-600',
        title: 'Social Media Amplification',
        description: 'Our team will create ads that encourage social media sharing.'
      },
      {
        icon: 'pi-heart',
        gradient: 'bg-gradient-to-tr from-rose-400 to-rose-600',
        title: 'Community Engagement',
        description: 'We will help you associate with public spaces and local amenities.'
      },
      {
        icon: 'pi-check-circle',
        gradient: 'bg-gradient-to-tr from-sky-400 to-sky-600',
        title: 'Brand Consistency',
        description: 'Our team will reinforce brand identity with long-term placements.'
      },
      {
        icon: 'pi-link',
        gradient: 'bg-gradient-to-tr from-lime-400 to-lime-600',
        title: 'Complementary to Other Campaigns',
        description: 'We will integrate street furniture ads with other forms of outdoor advertising.'
      }
    ]
  }
  whyChooseStreetFurniture: any = {
    title: "Why Choose Pencil Peel IMT for Street Furniture Advertising?",
    description: "",
    features: [
      {
        id: 1,
        title: 'Expertise',
        description: 'Our team has years of experience in street furniture advertising, ensuring impactful campaigns that reach your target audience.',
        icon: 'pi-star',
        borderColor: 'yellow-500',
        iconBgColor: 'yellow-100',
        iconColor: 'yellow-600'
      },
      {
        id: 2,
        title: 'Customized Solutions',
        description: 'We will tailor our services to meet the unique needs of your business, providing targeted strategies that maximize results.',
        icon: 'pi-wrench',
        borderColor: 'green-500',
        iconBgColor: 'green-100',
        iconColor: 'green-600'
      },
      {
        id: 3,
        title: 'Proven Results',
        description: 'Our team has helped numerous businesses achieve success through street furniture advertising, delivering measurable outcomes and enhanced brand visibility.',
        icon: 'pi-check-circle',
        borderColor: 'blue-500',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600'
      }
    ],
    footer: ""
  };

  streetFurnitureAds = [
    {
      icon: 'fa-solid fa-bus',
      title: 'Bus Stop Shelters',
      short: 'Advertising panels on bus stop shelters to capture commuters.',
      details:
        'We will place advertising panels on bus stop shelters to capture the attention of commuters.'
    },
    {
      icon: 'fa-solid fa-chair',
      title: 'Benches',
      short: 'Benches with backrests or sides for display to promote your brand.',
      details:
        'Our team will use benches with backrests or sides for display to promote your brand.'
    },
    {
      icon: 'fa-solid fa-tv',
      title: 'Kiosks',
      short: 'Promotional materials or digital ads on kiosks to engage audiences.',
      details:
        'We will display promotional materials or digital ads on kiosks to engage audiences.'
    },
    {
      icon: 'fa-solid fa-restroom',
      title: 'Public Restroom Signs',
      short: 'Signs or walls in public restrooms for branding to reach captive audiences.',
      details:
        'Our team will use public restroom signs or walls for branding to reach a captive audience.'
    },
    {
      icon: 'fa-solid fa-trash-can',
      title: 'Trash Bins',
      short: 'Adorned trash bins with logos or campaigns for unique exposure.',
      details:
        'We will adorn trash bins with logos or campaigns to promote your brand in a unique way.'
    }
  ];

  whyChoose = [
    {
      icon: 'fa-solid fa-eye',
      title: 'High Visibility',
      desc: 'These examples provide high visibility in public spaces.'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Targeted Advertising',
      desc: 'Our team will help you target specific audiences based on location.'
    },
    {
      icon: 'fa-solid fa-wallet',
      title: 'Cost-Effective',
      desc: 'These examples offer a cost-effective way to reach urban consumers.'
    }
  ];

  brandGrowthSteps = [
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Develop a Customized Strategy',
      desc: 'We will develop a customized strategy that meets your business needs and goals.'
    },
    {
      icon: 'fa-solid fa-pen-nib',
      title: 'Create Engaging Content',
      desc: 'Our team will create engaging content that resonates with your target audience.'
    },
    {
      icon: 'fa-solid fa-sliders',
      title: 'Optimize Campaigns',
      desc: 'We will optimize campaigns to ensure maximum ROI and achieve your business objectives.'
    },
    {
      icon: 'fa-solid fa-bullhorn',
      title: 'Increase Brand Awareness',
      desc: 'We will increase brand awareness through street furniture advertising.'
    },
    {
      icon: 'fa-solid fa-chart-bar',
      title: 'Drive Sales',
      desc: 'Our team will help you drive sales with effective street furniture advertising campaigns.'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Enhance Customer Engagement',
      desc: 'We will create ads that engage customers and foster loyalty.'
    }
  ];
  choosePencilPeel = [
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Expertise',
      desc: 'Our team has years of experience in street furniture advertising.'
    },
    {
      icon: 'fa-solid fa-cogs',
      title: 'Customized Solutions',
      desc: 'We will tailor our services to meet the unique needs of your business.'
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Proven Results',
      desc: 'Our team has helped numerous businesses achieve success through street furniture advertising.'
    }
  ];



}
