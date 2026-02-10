import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { CommonModule } from '@angular/common';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { Whyus } from "../../../components/whyus/whyus";
import { Contactus } from "../../../components/contactus/contactus";

interface TwitterService {
  title: string;
  description: string;
}
interface HelpService {
  icon: string;         // PrimeIcons class name
  title: string;
  description: string;
  iconColor: string;    // Tailwind color class for icon background
}
@Component({
  selector: 'app-twitter',
  imports: [Nocarouselherosection, CommonModule, Whycpencilpeel, Whyus, Contactus],
  templateUrl: './twitter.html',
  styleUrl: './twitter.scss'
})
export class Twitter {
  twitterHeroContent = {
  title: `
    Unlock Your 
    <span class="bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight">
      Twitter Marketing
    </span>
    Services with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we specialize in creating effective Twitter marketing strategies that enhance brand visibility, foster audience engagement, and drive business growth with real-time impact.',
  image: '/dm/social/twitterm.webp' // Replace with actual image path
};

helpServices: HelpService[] = [
    {
      icon: 'pi pi-list',
      title: 'Develop a Twitter Marketing Strategy',
      description: 'We will create a customized Twitter marketing strategy that aligns with your business goals and objectives.',
      iconColor: 'bg-pink-600'
    },
    {
      icon: 'pi pi-pencil',
      title: 'Create Engaging Content',
      description: 'Our team will develop high-quality, engaging content that resonates with your target audience.',
      iconColor: 'bg-indigo-600'
    },
    {
      icon: 'pi pi-bullseye',
      title: 'Run Targeted Twitter Ads',
      description: 'We will run targeted Twitter ads that drive conversions and sales.',
      iconColor: 'bg-pink-600'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Monitor and Analyse Performance',
      description: 'Our team will monitor and analyse your Twitter marketing performance to ensure you’re informed about your progress.',
      iconColor: 'bg-indigo-800'
    }
  ];
twitterServices: TwitterService[] = [
    {
      title: 'Twitter Marketing Strategy Development',
      description: 'We will develop a customized Twitter marketing strategy that aligns with your business goals and objectives. Our team will work with you to create a strategy that resonates with your target audience.'
    },
    {
      title: 'Content Creation',
      description: 'Our team will create high-quality, engaging content that resonates with your target audience. We will develop a content calendar that aligns with your business goals and objectives.'
    },
    {
      title: 'Targeted Twitter Ads',
      description: 'We will run targeted Twitter ads that drive conversions and sales. Our team will work with you to develop ad campaigns that reach your ideal audience and drive results.'
    },
    {
      title: 'Twitter Account Management',
      description: 'Our team will manage your Twitter account, ensuring that your profile is complete, consistent, and optimized for search.'
    },
    {
      title: 'Engagement and Community Building',
      description: 'We will engage with your audience in real-time through tweets, replies, and direct messages. Our team will build a community around your brand and foster meaningful relationships with your customers.'
    },
    {
      title: 'Performance Monitoring and Analysis',
      description: 'We will monitor and analyse your Twitter marketing performance, providing regular insights and recommendations to ensure you\'re informed about your progress.'
    },
    {
      title: 'Ongoing Support and Optimization',
      description: 'Our team will provide ongoing support and optimization to ensure your Twitter marketing strategy continues to deliver results. We will work with you to adjust your strategy as needed and ensure you\'re getting the most out of your Twitter marketing efforts.'
    }
  ];

  whycfeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has years of experience in Twitter marketing.',
    icon: 'pi-users',         // Represents team or expertise group
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  },
  {
    id: 2,
    title: 'Customized Solutions',
    description: 'We will tailor our services to meet the unique needs of your business.',
    icon: 'pi-sliders-h',     // Represents customization, tuning, or control
    iconBgColor: 'purple-100',
    iconColor: 'purple-600'
  },
  {
    id: 3,
    title: 'Proven Results',
    description: 'We have helped numerous businesses achieve success through Twitter marketing.',
    icon: 'pi-chart-line',    // Represents data, results, and growth
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 4,
    title: 'Ongoing Support',
    description: 'We provide ongoing support and optimization to ensure your Twitter marketing strategy continues to deliver results.',
    icon: 'pi-headphones',    // Represents support or customer service
    iconBgColor: 'orange-100',
    iconColor: 'orange-600'
  }
];

whycheader = {
    title: "Why Choose Pencil Peel IMT for Twitter Marketing?",
    description: ""
};

whyus = {
  title: 'Benefits of Twitter Marketing',
  description: `Our team will highlight the benefits of Twitter marketing for your business, including:`,
  List: [
    {
      icon: 'pi pi-eye',
      title: 'Increased Brand Awareness',
      description: 'We will help you reach a vast audience and build brand recognition through targeted Twitter marketing campaigns.',
      background: 'bg-blue-500',
      border: 'border-blue-500'
    },
    {
      icon: 'pi pi-comments',
      title: 'Real-Time Engagement',
      description: 'Our team will assist you in engaging with your audience in real-time through tweets, replies, and direct messages.',
      background: 'bg-cyan-500',
      border: 'border-cyan-500'
    },
    {
      icon: 'pi pi-users',
      title: 'Targeted Advertising',
      description: 'We will help you target specific demographics, interests, and behaviours to reach your ideal audience.',
      background: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
    {
      icon: 'pi pi-external-link',
      title: 'Website Traffic',
      description: 'Our team will drive traffic to your website and increase conversions through effective Twitter marketing strategies.',
      background: 'bg-green-500',
      border: 'border-green-500'
    },
    {
      icon: 'pi pi-user-plus',
      title: 'Lead Generation',
      description: "We will help you generate leads and capture potential customers' information through targeted Twitter marketing campaigns.",
      background: 'bg-teal-500',
      border: 'border-teal-500'
    }
  ]
};

contacttitle:string = 'Contact us Today';
contactdescription:string = `By partnering with Pencil Peel IMT, you can unlock the full potential of Twitter marketing and drive business growth. Contact us Today, to learn more about our Twitter marketing services.`;


}
