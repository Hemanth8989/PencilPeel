import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { CardModule } from 'primeng/card';
import { Imagecards } from "../../imagecards/imagecards";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-windows-cling-advertising',
  imports: [OutdoorHeroSection, Whycpencilpeel, Benefitsnew, CardModule, Imagecards, Quotes],
  templateUrl: './windows-cling-advertising.html',
  styleUrl: './windows-cling-advertising.scss'
})
export class WindowsClingAdvertising {
  testimonials = [
  { text: "Stick with Pencil Peel IMT's Window Clings for Lasting Impressions" },
  { text: "Adhere to the Best with Pencil Peel IMT's Custom Window Clings" },
  { text: "Transform Your Windows into Advertising Powerhouses with Pencil Peel IMT" },
  { text: "Cling to Quality with Pencil Peel IMT's Innovative Window Clings Solutions" }
];

  windowClingsHeroConfig: HeroConfig = {
  badgeText: '#1 Window Clings Advertising',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: '',
    highlighted: [
      'Window Clings',
      'Advertising'
    ],
    suffix: 'with Pencil Peel'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel</strong>, we specialize in creating effective Window Clings Advertising campaigns that drive business growth and product awareness.',
  backgroundImage: '/outdoor/windowclip/windowclip3.webp',
  typingTexts: [
    'Storefront Visibility Maximized'
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

benefitsWindowClings: any = {
  title: `Benefits of <span class="text-orange-500">Window Clings Advertising</span> with Pencil Peel IMT`,
  description: `At <span class="text-orange-500">Pencil Peel IMT</span>, our team will help you leverage the full potential of window clings advertising, offering numerous benefits, including:`,
  benefits: [
    {
      icon: 'pi-money-bill',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Cost-Effective',
      description: 'We will help you achieve affordable advertising with reusable window clings that deliver high impact at a low cost.'
    },
    {
      icon: 'pi-wrench',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Easy to Install and Remove',
      description: 'Our team will ensure quick installation and removal of window clings without damaging the glass surface.'
    },
    {
      icon: 'pi-palette',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Customizable Designs',
      description: 'We will tailor designs to fit your business’s branding and marketing goals, creating a unique look.'
    },
    {
      icon: 'pi-building',
      gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
      title: 'Maximizes Unused Space',
      description: 'Our team will turn unused window space into valuable advertising real estate for your brand.'
    },
    {
      icon: 'pi-eye',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Attracts Attention',
      description: 'We will create eye-catching designs that draw attention and increase foot traffic to your business.'
    },
    {
      icon: 'pi-calendar',
      gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
      title: 'Temporary or Seasonal Campaigns',
      description: 'Our team will help you use window clings for short-term promotions or seasonal campaigns.'
    },
    {
      icon: 'pi-shield',
      gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
      title: 'Enhances Privacy',
      description: 'We will help you use window clings as a privacy screen while effectively advertising your brand.'
    },
    {
      icon: 'pi-sun',
      gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
      title: 'Durable and Weather-Resistant',
      description: 'Our team will create high-quality vinyl clings that withstand environmental changes for lasting use.'
    },
    {
      icon: 'fa fa-leaf',
      gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
      title: 'Eco-Friendly',
      description: 'We will help you choose reusable window clings that reduce waste and support sustainability.'
    },
    {
      icon: 'pi-globe',
      gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
      title: 'Indoor and Outdoor Use',
      description: 'Our team will help you use window clings in both indoor and outdoor environments for maximum versatility.'
    },
    {
      icon: 'pi-star',
      gradient: 'bg-gradient-to-tr from-indigo-400 to-indigo-600',
      title: 'Improves Aesthetic Appeal',
      description: 'We will add visual interest to storefronts or office spaces with beautifully designed window clings.'
    },
    {
      icon: 'pi-shopping-cart',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Drives Impulse Purchases',
      description: 'Our team will create bold, timely promotions that entice customers to make impulse purchases.'
    },
    {
      icon: 'pi-megaphone',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Increases Brand Visibility',
      description: 'We will ensure your brand remains top-of-mind with well-designed window clings that enhance visibility.'
    },
    {
      icon: 'pi-cog',
      gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
      title: 'Versatile Applications',
      description: 'Our team will help you use window clings for various businesses and industries, adapting to your needs.'
    }
  ]
}

clingTypes: any[] = [
  {
    title: 'Static Clings',
    description: 'Our team will create static clings that stick to glass surfaces using static electricity — perfect for temporary or seasonal use.',
    image: '/outdoor/windowclip/windowclip2.webp'
  },
  {
    title: 'Adhesive Vinyl Clings',
    description: 'We will help you create adhesive vinyl clings that use a mild adhesive for a stronger and more durable option.',
    image: '/outdoor/windowclip/windowclip4.webp'
  }
];

whyChooseWindowClings: any = {
  title: "Why Choose Pencil Peel IMT for Window Clings Advertising?",
  description: "",
  features: [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has years of experience in creating impactful window clings advertising campaigns that drive attention and engagement.',
      icon: 'pi-star',
      borderColor: 'yellow-500',
      iconBgColor: 'yellow-100',
      iconColor: 'yellow-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We will tailor our window clings advertising services to meet the unique needs and goals of your business.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'Our team has successfully helped numerous businesses boost visibility and achieve results through effective window clings advertising.',
      icon: 'pi-check-circle',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    }
  ],
  footer: ""
};


}
