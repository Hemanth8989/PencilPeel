import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { Industrycards } from "../../../components/industrycards/industrycards";
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-gurilla-advertising',
  imports: [CommonModule, Benefitsnew, Whycpencilpeel, OutdoorHeroSection, Industrycards,Quotes],
  templateUrl: './gurilla-advertising.html',
  styleUrl: './gurilla-advertising.scss'
})
export class GurillaAdvertising {
  testimonials = [
  { text: "Think Outside the Box with Pencil Peel IMT's Guerrilla Advertising Solutions" },
  { text: "Surprise, Engage, Convert with Pencil Peel IMT's Creative Guerrilla Ads" },
  { text: "Make a Big Impact with Pencil Peel IMT's Low-Budget, High-Effect Guerrilla Advertising" },
  { text: "Unconventional Advertising for Unforgettable Brands - Pencil Peel IMT" }
];

  guerrillaHeroConfig: HeroConfig = {
  badgeText: '#1 Creative Marketing Agency',
  badgeIcon: 'pi pi-bolt',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      'Guerrilla',
      'Advertising'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective guerrilla advertising campaigns that drive business growth and product awareness.',
  backgroundImage: '/outdoor/gurella/guerilla1.png',
  typingTexts: [
    'Think Outside the Box'
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

  benefitsGuerrilla:any = {
  title: `Benefits of <span class="text-orange-500">Guerrilla Advertising</span>`,
  description: `We at <span class="text-orange-500">Pencil Peel IMT</span>, our team will highlight the benefits of guerrilla advertising:`,
  benefits:[
    {
      icon: 'pi-wallet',
      gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
      title: 'Cost-Effective',
      description: 'We will help you create guerrilla ads that require a minimal budget.'
    },
    {
      icon: 'pi-bolt',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'High Impact',
      description: 'Our team will create memorable experiences that leave a lasting impression.'
    },
    {
      icon: 'pi-share-alt',
      gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
      title: 'Viral Potential',
      description: 'We will help you create guerrilla campaigns that lead to organic word-of-mouth and social media sharing.'
    },
    {
      icon: 'pi-lightbulb',
      gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
      title: 'Creativity and Innovation',
      description: 'Our team will think outside the box and create clever, unexpected ideas.'
    },
    {
      icon: 'pi-users',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Engagement and Interaction',
      description: 'We will help you create guerrilla ads that encourage direct interaction with the brand.'
    },
    {
      icon: 'pi-bell',
      gradient: 'bg-gradient-to-tr from-rose-400 to-rose-600',
      title: 'Builds Buzz and Anticipation',
      description: 'Our team will create guerrilla campaigns that spark curiosity and lead to buzz in the community.'
    },
    {
      icon: 'pi-ban',
      gradient: 'bg-gradient-to-tr from-slate-400 to-slate-600',
      title: 'Breaks Through Ad Fatigue',
      description: 'We will help you cut through the noise with fresh, unexpected, and intriguing guerrilla ads.'
    },
    {
      icon: 'pi-flag',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Targets Specific Audiences',
      description: 'Our team will help you target specific audiences with guerrilla advertising.'
    },
    {
      icon: 'pi-heart',
      gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
      title: 'Creates Emotional Connections',
      description: 'We will create guerrilla ads that connect emotionally with audiences.'
    },
    {
      icon: 'pi-eye-slash',
      gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
      title: 'Non-Invasive',
      description: 'Our team will create guerrilla ads that are subtle and integrated into everyday environments.'
    },
    {
      icon: 'pi-star',
      gradient: 'bg-gradient-to-tr from-amber-400 to-orange-500',
      title: 'Memorable and Shareable',
      description: 'We will create guerrilla ads that are easy to remember and share.'
    },
    {
      icon: 'pi-sliders-h',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Flexibility',
      description: 'Our team will adjust guerrilla campaigns to different environments.'
    },
    {
      icon: 'pi-megaphone',
      gradient: 'bg-gradient-to-tr from-fuchsia-400 to-fuchsia-600',
      title: 'Increases Brand Visibility',
      description: 'We will help you boost brand visibility through guerrilla advertising.'
    },
    {
      icon: 'pi-thumbs-up',
      gradient: 'bg-gradient-to-tr from-indigo-400 to-indigo-600',
      title: 'Positive Brand Image',
      description: 'Our team will elevate your brand\'s reputation through innovative and creative guerrilla ads.'
    },
    {
      icon: 'pi-face-smile',
      gradient: 'bg-gradient-to-tr from-lime-400 to-lime-600',
      title: 'Improves Customer Perception',
      description: 'We will create guerrilla ads that lead to more positive perceptions of your brand.'
    }
  ]
}

guerrillaAdvertisingData = {
  title: 'Industries that Can Benefit from Guerrilla Advertising',
  description: 'We will help various industries reach their target audience through guerrilla advertising. Some of the industries that can benefit include:',
  industries: [
    {
      title: 'Small or Budget-Conscious Brands',
      image: '/outdoor/gurella/smallbrands.png',
      description: 'Our team will help small or budget-conscious brands make a big impact with limited resources.',
    },
    {
      title: 'Entertainment',
      image: '/outdoor/gurella/entertainment.png',
      description: 'We will help entertainment companies promote movies, shows, or events through guerrilla advertising.',
    },
    {
      title: 'Fashion',
      image: '/outdoor/gurella/fashion.png',
      description: 'Our team will help fashion brands promote their products through guerrilla advertising.',
    },
    {
      title: 'Food and Beverage',
      image: '/outdoor/gurella/food.png',
      description: 'We will help food and beverage companies promote their products through guerrilla advertising.',
    }
  ]
};

whyChooseGuerrillaAdvertising: any = {
  title: "Why Choose Pencil Peel IMT for Guerrilla Advertising?",
  description: "",
  features: [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has years of experience in guerrilla advertising, delivering campaigns that capture attention and leave a lasting impression.',
      icon: 'pi-star',
      borderColor: 'yellow-500',
      iconBgColor: 'yellow-100',
      iconColor: 'yellow-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We tailor our guerrilla advertising strategies to meet the unique needs of your business, ensuring every campaign resonates with your audience.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'Our team has helped numerous businesses achieve success through guerrilla advertising, generating measurable engagement and brand impact.',
      icon: 'pi-check-circle',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    }
  ],
  footer: ""
};

guerrillaBenefits = [
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Increase Brand Awareness',
    desc: 'We will increase brand awareness through guerrilla advertising.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Drive Sales',
    desc: 'Our team will help you drive sales with effective guerrilla advertising campaigns.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Enhance Customer Engagement',
    desc: 'We will create guerrilla ads that engage customers and foster loyalty.'
  }
];


}
