import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-walls-wrap-advertising',
  imports: [OutdoorHeroSection, Whycpencilpeel, Benefitsnew,CommonModule, Quotes],
  templateUrl: './walls-wrap-advertising.html',
  styleUrl: './walls-wrap-advertising.scss'
})
export class WallsWrapAdvertising {
  testimonials = [
  { text: "Wrap Your Brand Around Pencil Peel IMT's Innovative Wall Solutions" },
  { text: "Make a Statement with Pencil Peel IMT's Large-Scale Wall Wraps Advertising" },
  { text: "Transform Spaces, Elevate Brands with Pencil Peel IMT's Wall Wraps" },
  { text: "Unwrap the Potential of Your Brand with Pencil Peel IMT's Wall Wraps Solutions" }
];

  wallWrapsHeroConfig: HeroConfig = {
  badgeText: '#1 Wall Wraps Advertising',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: '',
    highlighted: [
      'Wall Wraps',
      'Advertising'
    ],
    suffix: 'with Pencil Peel'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel</strong>, we specialize in creating effective wall wraps advertising campaigns that drive business growth and product awareness.',
  backgroundImage: 'outdoor/wallwrap/wallwrap2.webp',
  typingTexts: [
    'Transform Buildings into Billboards'
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

benefitsWallWraps: any = {
  title: `Benefits of <span class="text-orange-500">Wall Wraps Advertising</span> with Pencil Peel IMT`,
  description: `At <span class="text-orange-500">Pencil Peel IMT</span>, our team will help you unlock the full potential of wall wraps advertising, offering numerous benefits, including:`,
  benefits: [
    {
      icon: 'pi-eye',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'High Visibility',
      description: 'We will create large wall wraps that stand out and grab attention.'
    },
    {
      icon: 'pi-palette',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Customizable Designs',
      description: 'Our team will tailor designs to reflect your brand’s identity and marketing goals.'
    },
    {
      icon: 'pi-money-bill',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Cost-Effective',
      description: 'We will help you achieve long-term advertising at a fixed cost.'
    },
    {
      icon: 'pi-building',
      gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
      title: 'Maximizes Space Utilization',
      description: 'Our team will convert unused wall space into valuable advertising real estate.'
    },
    {
      icon: 'pi-sun',
      gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
      title: 'Durable and Weather-Resistant',
      description: 'We will create wall wraps that withstand environmental factors.'
    },
    {
      icon: 'pi-wrench',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Easy Installation and Removal',
      description: 'Our team will ensure quick installation and removal without damaging the underlying surface.'
    },
    {
      icon: 'pi-globe',
      gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
      title: 'Versatile Locations',
      description: 'We will help you use wall wraps in indoor and outdoor environments.'
    },
    {
      icon: 'pi-megaphone',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Enhanced Brand Awareness',
      description: 'Our team will create visually appealing wall wraps that reinforce brand identity.'
    },
    {
      icon: 'fa-solid fa-leaf',
      gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
      title: 'Eco-Friendly',
      description: 'We will help you choose recyclable materials and eco-friendly printing methods.'
    },
    {
      icon: 'pi-star',
      gradient: 'bg-gradient-to-tr from-indigo-400 to-indigo-600',
      title: 'Boosts Aesthetic Appeal',
      description: 'Our team will beautify dull or unattractive spaces with wall wraps.'
    },
    {
      icon: 'pi-users',
      gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
      title: 'Drives Foot Traffic',
      description: 'We will create large, bold designs that attract people to stores or events.'
    },
    {
      icon: 'pi-arrows-h',
      gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
      title: 'Scalable',
      description: 'Our team will help you use wall wraps for small-scale or large-scale campaigns.'
    },
    {
      icon: 'pi-clock',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Long-Lasting',
      description: 'We will ensure that wall wraps last for months or even years.'
    },
    {
      icon: 'pi-heart',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Engages Audiences',
      description: 'Our team will create creative and visually engaging wall wraps.'
    }
  ]
}

whyChooseWallWraps: any = {
  title: "Why Choose Pencil Peel IMT for Wall Wraps Advertising?",
  description: "",
  features: [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has years of experience in designing and executing impactful wall wraps advertising campaigns.',
      icon: 'pi-star',
      borderColor: 'yellow-500',
      iconBgColor: 'yellow-100',
      iconColor: 'yellow-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We will tailor our wall wraps advertising services to meet the specific needs and goals of your business.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'Our team has helped numerous businesses achieve increased visibility and success through creative wall wraps advertising.',
      icon: 'pi-check-circle',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    }
  ],
  footer: ""
};

benefits = [
    {
      title: 'Increase Brand Visibility',
      description: 'Our team will create large wall wraps that grab attention and increase brand visibility.',
      icon: 'pi-eye',
      gradientFrom: 'from-orange-400',
      gradientTo: 'to-red-400',
      iconFrom: 'from-orange-500',
      iconTo: 'to-red-500',
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-600',
      dotColor: 'bg-orange-400',
      features: [
        'High-impact visual presence',
        'Strategic placement for maximum exposure'
      ]
    },
    {
      title: 'Cost-Effective Advertising',
      description: 'We will help you achieve long-term advertising at a fixed cost.',
      icon: 'pi-dollar',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-emerald-400',
      iconFrom: 'from-green-500',
      iconTo: 'to-emerald-500',
      badgeBg: 'bg-green-100',
      badgeText: 'text-green-600',
      dotColor: 'bg-green-400',
      features: [
        'One-time investment, long-term results',
        'No recurring monthly fees'
      ]
    },
    {
      title: 'Customizable Designs',
      description: 'Our team will tailor designs to reflect your brand\'s identity and marketing goals.',
      icon: 'pi-palette',
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-indigo-400',
      iconFrom: 'from-blue-500',
      iconTo: 'to-indigo-500',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      dotColor: 'bg-blue-400',
      features: [
        'Brand-aligned creative solutions',
        'Unlimited design revisions'
      ]
    },
    {
      title: 'Maximizes Space Utilization',
      description: 'We will convert unused wall space into valuable advertising real estate.',
      icon: 'pi-th-large',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-violet-400',
      iconFrom: 'from-purple-500',
      iconTo: 'to-violet-500',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-600',
      dotColor: 'bg-purple-400',
      features: [
        'Transform dead space into revenue',
        'Strategic space assessment'
      ]
    },
    {
      title: 'Durable and Long-Lasting',
      description: 'Our team will create wall wraps that withstand environmental factors and last for months or even years.',
      icon: 'pi-shield',
      gradientFrom: 'from-teal-400',
      gradientTo: 'to-cyan-400',
      iconFrom: 'from-teal-500',
      iconTo: 'to-cyan-500',
      badgeBg: 'bg-teal-100',
      badgeText: 'text-teal-600',
      dotColor: 'bg-teal-400',
      features: [
        'Weather-resistant materials',
        'UV protection and fade resistance'
      ]
    }
  ];

} 
