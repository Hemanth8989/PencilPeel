import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { CommonModule } from '@angular/common';
import { Contactus } from '../../../components/contactus/contactus';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';

@Component({
  selector: 'app-snapchat',
  imports: [Nocarouselherosection, Whyus,CommonModule,Contactus,Whycpencilpeel],
  templateUrl: './snapchat.html',
  styleUrl: './snapchat.scss'
})
export class Snapchat {
  snapchatHeroContent = {
  title: `
    Unlock the Power of 
    <span class="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-bold tracking-tight">
      Snapchat Marketing
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we specialize in creating effective Snapchat marketing strategies that drive business growth and product awareness. Leverage Snapchat’s unique visual and interactive platform to connect with your audience, boost engagement, and accelerate brand recognition.',
  image: '/dm/social/snapchatm.webp' // Replace with your actual image path
};
whyus: WhyUsModel = {
  title: 'Benefits of Working with Pencil Peel IMT',
  description: 'At Pencil Peel IMT, we believe that Snapchat marketing offers a wide range of benefits for businesses. Here are some of the benefits of Snapchat marketing that our team will help you achieve:',
  List: [
    {
      icon: 'pi pi-users',
      title: 'Reach a Younger Audience',
      description: 'We help you reach a younger audience active on Snapchat by creating content that resonates and boosts brand awareness.',
      background: 'bg-yellow-400',
      border: 'border-yellow-400'
    },
    {
      icon: 'pi pi-star',
      title: 'Increase Brand Awareness',
      description: 'Our team assists in increasing your brand awareness through creative and engaging Snapchat content that builds a strong identity.',
      background: 'bg-pink-500',
      border: 'border-pink-500'
    },
    {
      icon: 'pi pi-external-link',
      title: 'Drive Website Traffic',
      description: 'We drive website visits and conversions through effective Snapchat marketing strategies encouraging user action.',
      background: 'bg-purple-500',
      border: 'border-purple-500'
    },
    {
      icon: 'pi pi-user-plus',
      title: 'Generate Leads',
      description: 'Our targeted Snapchat campaigns help generate leads, capturing potential customers’ information and driving business value.',
      background: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
    {
      icon: 'pi pi-comments',
      title: 'Increase Engagement',
      description: 'We create interactive Snapchat content to boost audience participation, sharing, and deeper engagement with your brand.',
      background: 'bg-yellow-600',
      border: 'border-yellow-600'
    },
    {
      icon: 'pi pi-heart',
      title: 'Improve Brand Loyalty',
      description: 'Our team strengthens your brand loyalty by building trust and creating valuable content that resonates with customers.',
      background: 'bg-pink-600',
      border: 'border-pink-600'
    },
    {
      icon: 'pi pi-camera',
      title: 'Access to Exclusive Ad Formats',
      description: 'We leverage Snapchat’s unique ad formats like Snap Ads, Sponsored Geofilters, and Lenses to maximize campaign impact.',
      background: 'bg-orange-400',
      border: 'border-orange-400'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Measurable Results',
      description: 'We provide detailed insights and track key metrics, enabling you to understand and improve your campaign effectiveness.',
      background: 'bg-purple-600',
      border: 'border-purple-600'
    }
  ]
};


// For How We Will Provide Snapchat Marketing Services
snapchatServices = [
  {
    title: 'Develop a Snapchat Marketing Strategy',
    description: 'We will create a customized Snapchat marketing strategy that aligns with your business goals and objectives.',
    icon: 'pi-sitemap',
    iconColor: 'text-yellow-600'
  },
  {
    title: 'Create Engaging Content',
    description: 'Our team will develop high-quality, engaging content that resonates with your target audience.',
    icon: 'pi-pencil',
    iconColor: 'text-pink-500'
  },
  {
    title: 'Run Targeted Snapchat Ads',
    description: 'We will run targeted Snapchat ads that drive conversions and sales.',
    icon: 'pi-bullseye',
    iconColor: 'text-purple-500'
  },
  {
    title: 'Monitor and Analyse Performance',
    description: 'We will monitor and analyse your Snapchat marketing performance, providing regular insights and recommendations.',
    icon: 'pi-chart-bar',
    iconColor: 'text-cyan-600'
  }
];

// For Major Strategies of Snapchat Marketing
snapchatStrategies = [
  {
    title: 'Snapchat Ads',
    description: 'We will run targeted Snapchat ads that drive conversions and sales.',
    icon: 'pi-bullseye',
    iconColor: 'text-yellow-600'
  },
  {
    title: 'Influencer Marketing',
    description: 'Our team will partner with influencers on Snapchat to promote your brand and products.',
    icon: 'pi-megaphone',
    iconColor: 'text-pink-500'
  },
  {
    title: 'Content Marketing',
    description: 'We will create high-quality, engaging content that resonates with your target audience.',
    icon: 'pi-pencil',
    iconColor: 'text-purple-500'
  },
  {
    title: 'Snapchat Stories',
    description: 'Our team will create engaging Snapchat stories that showcase your brand and products.',
    icon: 'pi-camera',
    iconColor: 'text-cyan-600'
  }
];
snapchatContact: any = {
  title: 'Contact Us Today',
  description: `By partnering with Pencil Peel IMT, you can unlock the full potential of Snapchat marketing and drive business growth. Contact us Today, to learn more about our Snapchat marketing services.`
};
whycheader = {
    title: "Why Choose Pencil Peel?",
    description: ""
};
whycSnapchatFeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has years of experience in Snapchat marketing, delivering strategies that generate impactful results.',
    icon: 'pi-users',
    iconBgColor: 'yellow-100',
    iconColor: 'yellow-600'
  },
  {
    id: 2,
    title: 'Customized Solutions',
    description: 'We tailor our Snapchat marketing services to meet the unique needs of your business and target audience.',
    icon: 'pi-cog',
    iconBgColor: 'pink-100',
    iconColor: 'pink-500'
  },
  {
    id: 3,
    title: 'Proven Results',
    description: 'We have helped numerous businesses achieve measurable success through effective Snapchat marketing campaigns.',
    icon: 'pi-chart-line',
    iconBgColor: 'purple-100',
    iconColor: 'purple-600'
  }
];

}
