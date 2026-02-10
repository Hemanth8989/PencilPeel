import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Contactus } from "../../../components/contactus/contactus";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Quotes } from '../../../components/quotes/quotes';
interface Advantage {
  title: string;
  description: string;
  color: string;
  bgColor: string;
  icon: string;
}
@Component({
  selector: 'app-billboard',
  imports: [CommonModule, ButtonModule, Contactus, OutdoorHeroSection, Quotes],
  templateUrl: './billboard.html',
  styleUrl: './billboard.scss'
})
export class Billboard {
  billboardHeroConfig: HeroConfig = {
  badgeText: '#1 Billboard Advertising Agency',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: '',
    highlighted: [
      'Billboard Advertising',
      'with Pencil Peel IMT'
    ],
    suffix: 'Unlock your Product/Company Growth'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective billboard advertising campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Massive Brand Visibility'
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
    { text: "Elevate Your Brand with Impactful Billboard Advertising - Pencil Peel IMT." },
    { text: "Transform Your Business with Strategic Billboard Solutions - Pencil Peel IMT" },
    { text: "Make a Lasting Impression with Pencil Peel IMT's Creative Billboard Ads." },
    { text: "Reach New Heights with Pencil Peel IMT's Innovative Billboard Advertising." }
  ];

  heroContent: any = {
  title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                bg-gradient-to-r from-blue-600 via-green-400 to-teal-500 bg-clip-text text-transparent">
      Billboard Advertising with Pencil Peel IMT
    </span>
    <span class="block text-base sm:text-lg md:text-2xl font-semibold mt-2 text-gray-200 drop-shadow-lg">
      Unlock your Product/Company Growth with Billboard Advertising
    </span>
  `,
  description: `At Pencil Peel IMT, we specialize in creating effective billboard advertising campaigns that drive business growth and product awareness.`,
  image: 'outdoor/Billboard/digitalbillboard.webp'
};


billboardTypes: any[] = [
    {
      name: 'Traditional/Static Billboards',
      description: 'We will design and create eye-catching static billboards that feature a single printed advertisement.',
      image: 'outdoor/Billboard/tradtionalbillboard.webp'
    },
    {
      name: 'Digital Billboards',
      description: 'Our team will utilize LED screens to display dynamic and changing content, allowing multiple ads to rotate at timed intervals.',
      image: 'outdoor/Billboard/digitalbillboard.webp'
    },
    {
      name: 'Mobile Billboards',
      description: 'We will help you reach different locations with mobile billboards mounted on vehicles or trailers.',
      image: 'outdoor/Billboard/mobilebillboard.webp'
    },
    {
      name: '3D Billboards',
      description: 'Our team will create engaging and eye-catching 3D billboards that incorporate three-dimensional elements.',
      image: 'outdoor/Billboard/3dbillboard.webp'
    },
    {
      name: 'Interactive Billboards',
      description: 'We will use technology to engage directly with the audience and create interactive experiences.',
      image: 'outdoor/Billboard/interactivebillboard.webp'
    }
];

keyConsiderations: any[] = [
    {
      title: 'Clear Messaging',
      description: 'We will create concise and easy-to-read content.',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    {
      title: 'Bold Design',
      description: 'Our team will use high contrast colours, large fonts, and minimal text.',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v10h2V3zM15 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z'
    },
    {
      title: 'Strategic Placement',
      description: 'We will choose locations that align with your target audience and maximize visibility.',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      title: 'Call to Action (CTA)',
      description: 'Our team will create CTAs that encourage viewers to act.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    }
];

advantages: Advantage[] = [
    {
      title: 'High Visibility',
      description: 'We will position your billboard in locations with heavy foot and vehicle traffic to ensure maximum visibility.',
      icon: 'pi pi-eye',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      title: 'Continuous Exposure',
      description: 'Our team will ensure that your billboard operates 24/7, providing constant exposure to your advertisement.',
      icon: 'pi pi-clock',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Large-Scale Impact',
      description: 'We will create billboards that are hard to ignore, leaving a lasting impression on your target audience.',
      icon: 'pi pi-bolt',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Creative Opportunities',
      description: 'Our team will help you create innovative and bold designs that make your brand memorable.',
      icon: 'pi pi-palette',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
];
challenges: any[] = [
    {
      title: 'Brief Interaction Time',
      description: 'We will create concise and easy-to-read content to accommodate brief interaction times.',
      icon: 'pi pi-clock'
    },
    {
      title: 'High Costs',
      description: 'Our team will help you budget for prime locations and digital billboards.',
      icon: 'pi pi-wallet'
    },
    {
      title: 'Static Nature',
      description: 'We will plan for regular updates and changes to your billboard content.',
      icon: 'pi pi-refresh'
    }
];

  // Fix: Explicitly define the array type
  cardAnimationColors: string[] = [
    'border-red-400 hover:shadow-red-300/30',
    'border-pink-400 hover:shadow-pink-300/30',
    'border-rose-400 hover:shadow-rose-300/30'
  ];

contact:any = {
  title:'Contact Us Today',
  description:`By partnering with Pencil Peel IMT, you can unlock the full potential of billboard advertising and drive business growth. Contact us today to learn more about our billboard advertising services.`
}
}
