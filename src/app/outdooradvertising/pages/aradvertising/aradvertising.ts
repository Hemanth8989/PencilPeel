import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-aradvertising',
  imports: [CommonModule, Benefitsnew, Whycpencilpeel, OutdoorHeroSection, Quotes],
  templateUrl: './aradvertising.html',
  styleUrl: './aradvertising.scss'
})
export class ARAdvertising {
  testimonials = [
  { text: "Step into the Future of Advertising with Pencil Peel IMT's AR Solutions" },
  { text: "Augment Reality, Amplify Your Brand with Pencil Peel IMT's Expertise" },
  { text: "Experience the Power of AR Advertising with Pencil Peel IMT" },
  { text: "Bring Your Brand to Life with Pencil Peel IMT's Innovative AR Advertising" }
];

  arHeroConfig: HeroConfig = {
    badgeText: '#1 AR Technology Leader',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: 'Unlock your',
      highlighted: [
        'Augmented Reality (AR)',
        'Advertising'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective AR advertising campaigns that drive business growth and product awareness.',
    backgroundImage: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    typingTexts: [
      'Experience the Future'
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


  benefitsAR: any = {
    title: `Benefits of <span class="text-orange-500">AR Advertising</span>`,
    description: `Our team will highlight the benefits of AR advertising:`,
    benefits: [
      {
        icon: 'pi-bolt',
        gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
        title: 'Highly Engaging',
        description: 'We will create AR experiences that encourage consumers to actively engage with the brand.'
      },
      {
        icon: 'pi-star',
        gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600',
        title: 'Memorable Experiences',
        description: 'Our team will create immersive AR campaigns that leave a lasting impression.'
      },
      {
        icon: 'pi-users',
        gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
        title: 'Boosts Customer Interaction',
        description: 'We will help increase customer interaction with the brand through AR experiences.'
      },
      {
        icon: 'pi-eye',
        gradient: 'bg-gradient-to-tr from-indigo-400 to-indigo-600',
        title: 'Enhanced Product Visualization',
        description: 'Our team will help consumers see how products look or function in their real environment.'
      },
      {
        icon: 'pi-lightbulb',
        gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
        title: 'Innovative Brand Perception',
        description: 'We will position your brand as forward-thinking and tech-savvy.'
      },
      {
        icon: 'pi-shopping-cart',
        gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
        title: 'Increases Conversion Rates',
        description: 'Our team will help reduce hesitation and increase sales conversion rates.'
      },
      {
        icon: 'pi-share-alt',
        gradient: 'bg-gradient-to-tr from-fuchsia-400 to-fuchsia-600',
        title: 'Social Media Amplification',
        description: 'We will create AR experiences that encourage organic promotion through user-generated content.'
      },
      {
        icon: 'pi-cog',
        gradient: 'bg-gradient-to-tr from-cyan-400 to-cyan-600',
        title: 'Customizable and Personal',
        description: 'Our team will tailor AR experiences to individual users’ preferences or locations.'
      },
      {
        icon: 'pi-map-marker',
        gradient: 'bg-gradient-to-tr from-purple-400 to-purple-600',
        title: 'Drives Foot Traffic',
        description: 'We will create AR campaigns that attract customers to stores or events.'
      },
      {
        icon: 'pi-chart-line',
        gradient: 'bg-gradient-to-tr from-emerald-400 to-emerald-600',
        title: 'Measurable Results',
        description: 'Our team will provide data on user engagement, time spent, and interactions.'
      },
      {
        icon: 'fa-solid fa-leaf',
        gradient: 'bg-gradient-to-tr from-lime-400 to-lime-600',
        title: 'Eco-Friendly Advertising',
        description: 'We will help you choose AR advertising as a sustainable alternative.'
      },
      {
        icon: 'pi-megaphone',
        gradient: 'bg-gradient-to-tr from-red-400 to-red-600',
        title: 'Creates Buzz and Virality',
        description: 'Our team will create innovative AR campaigns that generate word-of-mouth publicity.'
      },
      {
        icon: 'pi-mobile',
        gradient: 'bg-gradient-to-tr from-sky-400 to-sky-600',
        title: 'Cross-Platform Compatibility',
        description: 'We will integrate AR experiences into mobile apps, websites, and social media.'
      },
      {
        icon: 'pi-thumbs-up',
        gradient: 'bg-gradient-to-tr from-rose-400 to-rose-600',
        title: 'Increases Customer Satisfaction',
        description: 'Our team will create AR experiences that improve customer satisfaction and loyalty.'
      },
      {
        icon: 'pi-trophy',
        gradient: 'bg-gradient-to-tr from-amber-400 to-orange-500',
        title: 'Competitive Advantage',
        description: 'We will help you set your brand apart from competitors.'
      }
    ]
  }

  whyChooseARAdvertising: any = {
    title: "Why Choose Pencil Peel IMT for AR Advertising?",
    description: "",
    features: [
      {
        id: 1,
        title: 'Expertise',
        description: 'Our team has years of experience in AR advertising, delivering immersive and impactful campaigns that capture attention.',
        icon: 'pi-star',
        borderColor: 'yellow-500',
        iconBgColor: 'yellow-100',
        iconColor: 'yellow-600'
      },
      {
        id: 2,
        title: 'Customized Solutions',
        description: 'We tailor our AR advertising solutions to meet the unique needs of your business, ensuring campaigns are relevant and effective.',
        icon: 'pi-wrench',
        borderColor: 'green-500',
        iconBgColor: 'green-100',
        iconColor: 'green-600'
      },
      {
        id: 3,
        title: 'Proven Results',
        description: 'Our team has helped numerous businesses achieve success through AR advertising, generating measurable engagement and brand impact.',
        icon: 'pi-check-circle',
        borderColor: 'blue-500',
        iconBgColor: 'blue-100',
        iconColor: 'blue-600'
      }
    ],
    footer: ""
  };

  arIndustries = [
    {
      icon: 'fa-solid fa-cart-shopping',
      title: 'Retail',
      desc: 'Our team will help retailers promote products and services through AR advertising, increasing foot traffic and sales.'
    },
    {
      icon: 'fa-solid fa-film',
      title: 'Entertainment',
      desc: 'We will help entertainment companies promote movies, shows, or events through AR advertising, generating buzz and excitement.'
    },
    {
      icon: 'fa-solid fa-car',
      title: 'Automotive',
      desc: 'Our team will help automotive companies showcase their products through AR advertising, highlighting features and benefits.'
    },
    {
      icon: 'fa-solid fa-tshirt',
      title: 'Fashion',
      desc: 'We will help fashion brands promote their products through AR advertising, showcasing designs and styles.'
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'Education',
      desc: 'Our team will help educational institutions promote their programs and services through AR advertising.'
    }
  ];

  arCampaignSteps = [
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
    }
  ];
  growthBenefits = [
    {
      icon: 'fa-solid fa-bullhorn',
      title: 'Increase Brand Awareness',
      desc: 'We will increase brand awareness through AR advertising.'
    },
    {
      icon: 'fa-solid fa-chart-bar',
      title: 'Drive Sales',
      desc: 'Our team will help you drive sales with effective AR advertising campaigns.'
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'Enhance Customer Engagement',
      desc: 'We will create AR experiences that engage customers and foster loyalty.'
    }
  ];

}
