import { Component } from '@angular/core';
import { Nocarouselherosection } from '../../../components/nocarouselherosection/nocarouselherosection';
import { CommonModule } from '@angular/common';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { Contactus } from '../../../components/contactus/contactus';
import { Whyus } from '../../../components/whyus/whyus';
import { WhyUsModel } from '../../../models/whyUs';

@Component({
  selector: 'app-whatsapp',
  imports: [Nocarouselherosection,CommonModule,Whycpencilpeel,Contactus,Whyus],
  templateUrl: './whatsapp.html',
  styleUrl: './whatsapp.scss'
})
export class Whatsapp {
  whatsappHeroContent = {
  title: `
    Unlock the Power of 
    <span class="bg-gradient-to-r from-green-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight">
      WhatsApp Marketing
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we specialize in creating effective WhatsApp marketing strategies that drive business growth and product awareness. Leverage WhatsApp’s personal and direct messaging to engage your audience, boost conversions, and foster lasting customer relationships.',
  image: '/dm/social/whatsappm.webp' // Replace with your actual image path
};
whyus: WhyUsModel = {
  title: 'Benefits of Working with Pencil Peel IMT',
  description: 'At Pencil Peel IMT, we believe that WhatsApp marketing offers a wide range of benefits for businesses. Here are some of the benefits of WhatsApp marketing that our team will help you achieve:',
  List: [
    {
      icon: 'pi pi-comments',
      title: 'High Engagement Rates',
      description: 'Achieve high engagement rates through personalized WhatsApp messages that resonate with your target audience, increasing the likelihood of engagement and conversion.',
      background: 'bg-green-500',
      border: 'border-green-500'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Increased Conversions',
      description: 'Increase conversions through targeted WhatsApp campaigns designed to drive sales and encourage customer action.',
      background: 'bg-yellow-500',
      border: 'border-yellow-500'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Cost-Effective',
      description: 'Save costs by using WhatsApp as a marketing channel with budget-friendly campaigns that deliver high ROI.',
      background: 'bg-pink-500',
      border: 'border-pink-500'
    },
    {
      icon: 'pi pi-users',
      title: 'Personalized Communication',
      description: 'Communicate in a personalized way that builds strong relationships and trust with your customers.',
      background: 'bg-cyan-500',
      border: 'border-cyan-500'
    },
    {
      icon: 'pi pi-clock',
      title: 'Real-Time Communication',
      description: 'Engage instantly with customers, providing timely support and assistance when they need it most.',
      background: 'bg-purple-500',
      border: 'border-purple-500'
    },
    {
      icon: 'pi pi-handshake',
      title: 'Increased Customer Loyalty',
      description: 'Build long-term loyalty through personalized support that encourages repeat business.',
      background: 'bg-emerald-500',
      border: 'border-emerald-500'
    },
    {
      icon: 'pi pi-smile',
      title: 'Improved Customer Experience',
      description: 'Enhance customer satisfaction with timely, tailored support that meets specific needs and interests.',
      background: 'bg-orange-400',
      border: 'border-orange-400'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Measurable Results',
      description: 'Get measurable insights into campaign performance with tracking of key metrics and improvement suggestions.',
      background: 'bg-blue-500',
      border: 'border-blue-500'
    },
    {
      icon: 'pi pi-globe',                    // replaced deprecated pi-rocket with pi-globe
      title: 'Increased Brand Awareness',
      description: 'Elevate your brand’s visibility through targeted WhatsApp marketing strategies and campaigns.',
      background: 'bg-violet-500',
      border: 'border-violet-500'
    },
    {
      icon: 'pi pi-award',
      title: 'Competitive Advantage',
      description: 'Differentiate your business by leveraging WhatsApp marketing to engage your ideal audience and drive growth.',
      background: 'bg-gray-700',
      border: 'border-gray-700'
    }
  ]
};
whycheader = {
    title: "Why Choose Pencil Peel?",
    description: ""
};
whycFeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has years of experience in WhatsApp marketing, crafting strategies that deliver impactful results.',
    icon: 'pi-users',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 2,
    title: 'Customized Solutions',
    description: 'We will tailor our WhatsApp marketing services to meet the unique needs of your business and audience.',
    icon: 'pi-cog',
    iconBgColor: 'teal-100',
    iconColor: 'teal-600'
  },
  {
    id: 3,
    title: 'Proven Results',
    description: 'We have helped numerous businesses achieve measurable success through strategic WhatsApp marketing campaigns.',
    icon: 'pi-chart-line',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  }
];

contact:any = {
  title : `Contact Us Today`,
  description: `By partnering with Pencil Peel IMT, you can unlock the full potential of WhatsApp marketing and drive business growth. Contact us Today, to learn more about our WhatsApp marketing services.`
}

whatsappMarketingStrategies = [
  {
    title: 'WhatsApp Business API',
    description: 'We will help you integrate WhatsApp Business API to automate and manage your WhatsApp marketing campaigns efficiently.',
    icon: 'pi-server',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Personalized Messages',
    description: 'Our team will create personalized messages designed to resonate with your target audience and drive engagement.',
    icon: 'pi-envelope',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Broadcast Messages',
    description: 'We will help you send broadcast messages to your customers, keeping them informed about your products and services.',
    icon: 'pi-send',
    iconColor: 'text-orange-600'
  },
  {
    title: 'Customer Support',
    description: 'Our team will provide customer support through WhatsApp, ensuring your customers get the help they need in a timely manner.',
    icon: 'pi-headphones',
    iconColor: 'text-orange-600'
  }
];

whatsappServices = [
  {
    icon: 'pi-id-card',
    colorFrom: 'from-green-500',
    colorTo: 'to-teal-400',
    textColor: 'text-green-600',
    title: 'Develop a WhatsApp Marketing Strategy',
    description: 'We will create a customized WhatsApp marketing strategy that aligns with your business goals and objectives, identifying your USP and target audience to drive results.'
  },
  {
    icon: 'pi-pencil',
    colorFrom: 'from-yellow-400',
    colorTo: 'to-orange-400',
    textColor: 'text-yellow-600',
    title: 'Create Engaging Content',
    description: 'Our team will develop high-quality, engaging content that resonates with your audience and is relevant to their needs and interests.'
  },
  {
    icon: 'pi-bullseye',
    colorFrom: 'from-pink-400',
    colorTo: 'to-red-400',
    textColor: 'text-pink-600',
    title: 'Run Targeted WhatsApp Campaigns',
    description: 'We will use WhatsApp’s features such as broadcasts and automated messages to reach your target audience and drive conversions.'
  },
  {
    icon: 'pi-chart-bar',
    colorFrom: 'from-cyan-400',
    colorTo: 'to-blue-500',
    textColor: 'text-cyan-600',
    title: 'Monitor and Analyse Performance',
    description: 'We will track key metrics like open, click-through, and conversion rates, providing insights and recommendations to improve performance.'
  },
  {
    icon: 'pi-refresh',
    colorFrom: 'from-purple-500',
    colorTo: 'to-indigo-400',
    textColor: 'text-purple-600',
    title: 'Optimize and Improve',
    description: 'We will continuously refine campaigns using analytics to identify improvements that meet your business goals.'
  },
  {
    icon: 'pi-comments',
    colorFrom: 'from-green-600',
    colorTo: 'to-emerald-400',
    textColor: 'text-emerald-600',
    title: 'Provide Customer Support',
    description: 'We will respond to customer inquiries, resolve issues, and provide timely assistance through WhatsApp.'
  },
  {
    icon: 'pi-share-alt',
    colorFrom: 'from-orange-400',
    colorTo: 'to-amber-400',
    textColor: 'text-orange-500',
    title: 'Integrate with Other Channels',
    description: 'We will connect WhatsApp marketing with email and social media for a seamless multi-channel experience.'
  }
];


}
