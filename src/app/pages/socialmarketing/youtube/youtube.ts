import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { Smstrategy } from "../smstrategy/smstrategy";
import { CardModule } from 'primeng/card';
import { Industrycontent } from '../industrycontent/industrycontent';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Whyus } from "../../../components/whyus/whyus";
import { WhyUsModel } from '../../../models/whyUs';
import { Contactus } from '../../../components/contactus/contactus';

@Component({
  selector: 'app-youtube',
  imports: [ButtonModule, CommonModule, Whycpencilpeel, Smstrategy, CardModule, Industrycontent, Nocarouselherosection, Whyus,Contactus],
  templateUrl: './youtube.html',
  styleUrl: './youtube.scss'
})
export class Youtube {
  youtubeHeroContent = {
  title: `
    Unlock Your 
    <span class="bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 bg-clip-text text-transparent font-bold tracking-tight">
      YouTube Marketing
    </span>
    Potential with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we specialize in creating effective YouTube marketing strategies that build brand awareness, grow your audience, and drive measurable business results through impactful video content.',
  image: '/dm/social/youtubem.webp' // Replace with your actual image path
  };
  //services
  youtubeServices = [
  {
    title: 'Create High-Quality Video Content',
    description: 'We\'ll help you develop engaging and informative video content that showcases your brand and products. Our team will work with you to create high-quality videos that resonate with your target audience.'
  },
  {
    title: 'Optimize Your YouTube Channel',
    description: 'Our team will optimize your YouTube channel and videos for maximum visibility and engagement. We\'ll ensure that your channel is complete, consistent, and optimized for search.'
  },
  {
    title: 'Develop a Content Strategy',
    description: 'We\'ll develop a content strategy that attracts and retains your target audience. Our team will work with you to create a content calendar that aligns with your business goals and objectives.'
  },
  {
    title: 'Run YouTube Ads',
    description: 'We\'ll run targeted YouTube ads that drive conversions and sales. Our team will help you develop ad campaigns that reach your ideal audience and drive results.'
  },
  {
    title: 'Analyse and Report',
    description: 'We\'ll analyse and report on your YouTube marketing performance to ensure you\'re informed about your progress. Our team will provide regular reporting and insights to help you make data-driven decisions.'
  },
  {
    title: 'Provide Ongoing Support',
    description: 'We\'ll provide ongoing support and optimization to ensure your YouTube marketing strategy continues to deliver results. Our team will work with you to adjust your strategy as needed and ensure you\'re getting the most out of your YouTube marketing efforts.'
  },
  {
    title: 'Improve Video Content',
    description: 'We\'ll help you improve your video content to better engage your audience and drive conversions. Our team will provide feedback and suggestions to ensure your video content is high-quality and effective.'
  },
  {
    title: 'Increase Engagement',
    description: 'We\'ll help you increase engagement on your YouTube channel through comments, likes, shares, and subscriptions. Our team will develop a strategy to encourage audience engagement and build a loyal community.'
  },
  {
    title: 'Drive Website Traffic',
    description: 'We\'ll help you drive traffic to your website through YouTube marketing. Our team will optimize your videos and ads to drive website traffic and increase conversions.'
  },
  {
    title: 'Generate Leads',
    description: 'We\'ll help you generate leads and capture potential customers\' information through YouTube marketing. Our team will develop lead generation ads and campaigns that drive results.'
  }
];



  //strategies header and content
  sheader = {
    title: "YouTube Marketing Strategies at Pencil Peel IMT",
    description: "At Pencil Peel IMT, we'll use a variety of strategies to help our clients succeed on YouTube with comprehensive tactics designed to maximize reach, engagement, and conversions.",
    footerdescription:"By leveraging these strategies, we'll help you reach your target audience and achieve your marketing goals on Instagram. Contact us today to learn more about our Instagram promotion services."
  }
  strategies = [
    {
      id: 1,
      title: 'Video Content Creation',
      icon: 'pi-video',
      gradient: 'from-red-400 to-red-600',
      description: 'Professional video production that captivates and converts your audience',
      features: [
        {
          title: 'High-Quality Videos',
          description: 'We\'ll create high-quality videos that showcase our clients\' products or services in a compelling way.',
          icon: 'pi-camera'
        },
        {
          title: 'Scripting and Storyboarding',
          description: 'Our team will develop scripts and storyboards that effectively communicate our clients\' message.',
          icon: 'pi-file-edit'
        }
      ]
    },
    {
      id: 2,
      title: 'Channel Optimization',
      icon: 'pi-cog',
      gradient: 'from-blue-400 to-blue-600',
      description: 'Strategic channel setup and optimization for maximum visibility and engagement',
      features: [
        {
          title: 'Channel Art and Description',
          description: 'We\'ll optimize our clients\' YouTube channels with professional-looking art and descriptions that clearly communicate their brand and message.',
          icon: 'pi-palette'
        },
        {
          title: 'Video Titles and Tags',
          description: 'Our team will optimize video titles and tags to improve search visibility and reach a wider audience.',
          icon: 'pi-tags'
        }
      ]
    },
    {
      id: 3,
      title: 'Video SEO',
      icon: 'pi-search',
      gradient: 'from-green-400 to-green-600',
      description: 'Data-driven SEO strategies to boost your video rankings and discoverability',
      features: [
        {
          title: 'Keyword Research',
          description: 'We\'ll conduct keyword research to identify relevant keywords and phrases that our clients\' target audience is searching for.',
          icon: 'pi-key'
        },
        {
          title: 'Optimization',
          description: 'Our team will optimize video titles, descriptions, and tags with relevant keywords to improve search visibility.',
          icon: 'pi-chart-line'
        }
      ]
    },
    {
      id: 4,
      title: 'Audience Engagement',
      icon: 'pi-users',
      gradient: 'from-purple-400 to-purple-600',
      description: 'Build thriving communities and foster meaningful connections with your audience',
      features: [
        {
          title: 'Comment Management',
          description: 'We\'ll respond to comments and engage with our clients\' audience to build a community and foster loyalty.',
          icon: 'pi-comments'
        },
        {
          title: 'Community Building',
          description: 'Our team will create content that encourages audience engagement and builds a loyal following.',
          icon: 'pi-heart'
        }
      ]
    },
    {
      id: 5,
      title: 'Influencer Collaborations',
      icon: 'pi-star',
      gradient: 'from-pink-400 to-pink-600',
      description: 'Strategic partnerships with influential creators to amplify your brand reach',
      features: [
        {
          title: 'Influencer Partnerships',
          description: 'We\'ll partner with influencers who have a large following in our clients\' target audience to promote their products or services.',
          icon: 'pi-handshake'
        },
        {
          title: 'Sponsored Content',
          description: 'Our team will work with influencers to create sponsored content that showcases our clients\' products or services.',
          icon: 'pi-megaphone'
        }
      ]
    },
    {
      id: 6,
      title: 'Paid Advertising',
      icon: 'pi-dollar',
      gradient: 'from-orange-400 to-orange-600',
      description: 'Targeted advertising campaigns that deliver measurable ROI and conversions',
      features: [
        {
          title: 'YouTube Ads',
          description: 'We\'ll create targeted YouTube ads that reach our clients\' ideal audience based on demographics, interests, and behaviours.',
          icon: 'pi-bullseye'
        },
        {
          title: 'Ad Creative',
          description: 'Our team will develop ad creative that resonates with our clients\' target audience and drives conversions.',
          icon: 'pi-brush'
        }
      ]
    },
    {
      id: 7,
      title: 'Analytics and Reporting',
      icon: 'pi-chart-bar',
      gradient: 'from-indigo-400 to-indigo-600',
      description: 'Comprehensive performance tracking and data-driven optimization strategies',
      features: [
        {
          title: 'Performance Tracking',
          description: 'We\'ll track the performance of our clients\' YouTube videos and ads to understand what\'s working and what\'s not.',
          icon: 'pi-eye'
        },
        {
          title: 'Data-Driven Insights',
          description: 'Our team will provide data-driven insights and recommendations to optimize our clients\' YouTube marketing strategy.',
          icon: 'pi-lightbulb'
        }
      ]
    }
  ];
  //why choose header and content
  headerContent = {
    title: "Why Choose Pencil Peel IMT for YouTube Marketing?",
    description: "At Pencil Peel IMT, we harness the immense power of YouTube to drive your business growth. Our dedicated team transforms your YouTube presence into a results-driven marketing machine."
  };
  youtubeFeatures: any[] = [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has years of experience in YouTube marketing, creating compelling video strategies that captivate audiences.',
      icon: 'pi-video',
      iconBgColor: 'red-100',
      iconColor: 'red-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We tailor our services to meet the unique needs of your business, ensuring maximum ROI from your YouTube investments.',
      icon: 'pi-palette',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'We\'ve helped numerous businesses achieve success through YouTube marketing, delivering measurable growth and engagement.',
      icon: 'pi-trophy',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 4,
      title: 'Ongoing Support',
      description: 'We provide ongoing support and optimization to ensure your YouTube marketing strategy continues to deliver results.',
      icon: 'pi-sync',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    }
  ];
  indtitle:string = 'Major Industries or Areas that Require YouTube Marketing Services';
  inddescription:string = `At Pencil Peel IMT, we believe that YouTube marketing is a powerful tool for businesses across various industries. Here are some major industries or areas that require YouTube marketing services`;
  indfooter:string = `By partnering with Pencil Peel IMT, businesses across these industries can unlock the full potential of YouTube marketing and drive business growth. Contact us to learn more about our YouTube marketing services.`
  industries:any[] = [
    {
      category: 'E-commerce',
      displayName: 'E-commerce & Online Retail',
      icon: 'pi pi-shopping-cart',
      iconBg: 'bg-blue-500',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-500',
      image: '/dm/industries/iecommerce.webp',
      imageAlt: 'E-commerce & Online Retail',
      items: [
        {
          title: 'Product Showcases',
          description: "We'll help e-commerce businesses showcase their products and services through high-quality video content."
        },
        {
          title: 'Sales & Traffic Generation',
          description: 'Our team will create compelling video campaigns that drive website traffic and increase sales conversions.'
        }
      ]
    },
    {
      category: 'Healthcare',
      displayName: 'Healthcare & Medical Services',
      icon: 'pi pi-heart',
      iconBg: 'bg-green-500',
      iconColor: 'text-green-600',
      borderColor: 'border-green-500',
      image: '/dm/industries/ihospital.webp',
      imageAlt: 'Healthcare & Medical Services',
      items: [
        {
          title: 'Patient Education',
          description: 'Our team will help healthcare businesses create informative and engaging video content that educates patients.'
        },
        {
          title: 'Service Promotion',
          description: 'We\'ll develop professional video content that promotes healthcare services and builds patient trust.'
        }
      ]
    },
    {
      category: 'Finance',
      displayName: 'Finance & Banking',
      icon: 'pi pi-dollar',
      iconBg: 'bg-yellow-500',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-500',
      image: '/dm/industries/ifinancial.webp',
      imageAlt: 'Finance & Banking',
      items: [
        {
          title: 'Financial Education',
          description: 'We\'ll help financial institutions create video content that explains complex financial concepts clearly.'
        },
        {
          title: 'Trust Building',
          description: 'Our team will develop content that promotes financial services and builds trust with your audience.'
        }
      ]
    },
    {
      category: 'Education',
      displayName: 'Education & Training',
      icon: 'pi pi-book',
      iconBg: 'bg-purple-500',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-500',
      image: '/dm/industries/ieducation.webp',
      imageAlt: 'Education & Training',
      items: [
        {
          title: 'Student Engagement',
          description: 'Our team will help educational institutions create video content that engages students effectively.'
        },
        {
          title: 'Course Promotion',
          description: 'We\'ll develop compelling videos that promote courses and build strong brand awareness.'
        }
      ]
    },
    {
      category: 'Technology',
      displayName: 'Technology & Software',
      icon: 'pi pi-desktop',
      iconBg: 'bg-indigo-500',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-500',
      image: '/dm/industries/itech.webp',
      imageAlt: 'Technology & Software',
      items: [
        {
          title: 'Product Demonstrations',
          description: 'We\'ll help tech businesses create video content that showcases their products and services effectively.'
        },
        {
          title: 'Technical Education',
          description: 'Our team will explain complex technical concepts and drive qualified website traffic.'
        }
      ]
    },
    {
      category: 'Real Estate',
      displayName: 'Real Estate & Property',
      icon: 'pi pi-home',
      iconBg: 'bg-teal-500',
      iconColor: 'text-teal-600',
      borderColor: 'border-teal-500',
      image: '/dm/industries/construction.webp',
      imageAlt: 'Real Estate & Property',
      items: [
        {
          title: 'Property Showcases',
          description: 'Our team will help real estate businesses create video content that showcases properties beautifully.'
        },
        {
          title: 'Market Insights',
          description: 'We\'ll develop content that provides valuable market insights and builds brand awareness.'
        }
      ]
    },
    {
      category: 'Travel and Tourism',
      displayName: 'Travel & Tourism',
      icon: 'pi pi-map',
      iconBg: 'bg-pink-500',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-500',
      image: '/dm/industries/travel.webp',
      imageAlt: 'Travel & Tourism',
      items: [
        {
          title: 'Destination Marketing',
          description: 'We\'ll help travel businesses create video content that showcases destinations and promotes travel packages.'
        },
        {
          title: 'Experience Promotion',
          description: 'Our team will develop engaging content that drives website traffic and bookings.'
        }
      ]
    },
    {
      category: 'Automotive',
      displayName: 'Automotive & Vehicles',
      icon: 'pi pi-car',
      iconBg: 'bg-red-500',
      iconColor: 'text-red-600',
      borderColor: 'border-red-500',
      image: '/dm/industries/iauto.webp',
      imageAlt: 'Automotive & Vehicles',
      items: [
        {
          title: 'Vehicle Showcases',
          description: 'Our team will help automotive businesses create video content that showcases vehicles attractively.'
        },
        {
          title: 'Product Information',
          description: 'We\'ll develop informative content that provides product details and drives sales.'
        }
      ]
    },
    {
      category: 'Food and Beverage',
      displayName: 'Food & Beverage',
      icon: 'pi pi-apple',
      iconBg: 'bg-orange-500',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-500',
      image: '/dm/industries/ibar.webp',
      imageAlt: 'Food & Beverage',
      items: [
        {
          title: 'Product Showcases',
          description: 'We\'ll help food and beverage businesses create video content that showcases their products appealingly.'
        },
        {
          title: 'Recipe Content',
          description: 'Our team will develop recipe videos and brand storytelling content that builds awareness.'
        }
      ]
    },
    {
      category: 'Non-Profit',
      displayName: 'Non-Profit Organizations',
      icon: 'pi pi-users',
      iconBg: 'bg-emerald-500',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-500',
      image: '/dm/industries/ingo.webp',
      imageAlt: 'Non-Profit Organizations',
      items: [
        {
          title: 'Cause Awareness',
          description: 'Our team will help non-profit organizations create video content that raises awareness and promotes their cause.'
        },
        {
          title: 'Donation Campaigns',
          description: 'We\'ll develop compelling storytelling content that drives donations and community engagement.'
        }
      ]
    }
  ];

  whyus:WhyUsModel = {
  title: 'Benefits of Working with Pencil Peel IMT',
  description: 'At Pencil Peel IMT, we believe that YouTube marketing is a powerful tool for businesses to reach and engage with their target audience. Here are some benefits of YouTube marketing for your business',
  List: [
    {
      icon: 'pi pi-eye',
      title: 'Increased Brand Awareness',
      description: 'Build a powerful YouTube presence to boost your brand recognition and reach a wider audience.',
      background: 'bg-red-500',
      border: 'border-red-500'
    },
    {
      icon: 'pi pi-users',
      title: 'Targeted Advertising',
      description: 'Run precise YouTube ads targeted to demographics, interests, and behaviors for higher conversion.',
      background: 'bg-blue-600',
      border: 'border-blue-600'
    },
    {
      icon: 'pi pi-comments',
      title: 'Improved Engagement',
      description: 'Encourage interaction through comments, likes, shares, and subscriptions with strategic content.',
      background: 'bg-pink-500',
      border: 'border-pink-500'
    },
    {
      icon: 'pi pi-external-link',
      title: 'Website Traffic',
      description: 'Boost traffic to your website with optimized video content and call-to-action strategies.',
      background: 'bg-purple-500',
      border: 'border-purple-500'
    },
    {
      icon: 'pi pi-user-plus',
      title: 'Lead Generation',
      description: 'Capture leads and grow your customer base through lead-focused campaigns.',
      background: 'bg-yellow-500',
      border: 'border-yellow-500'
    },
    {
      icon: 'pi pi-dollar',
      title: 'Increased Sales',
      description: 'Drive product and service sales with compelling, targeted YouTube ad campaigns.',
      background: 'bg-green-600',
      border: 'border-green-600'
    },
    {
      icon: 'pi pi-star',
      title: 'Competitive Advantage',
      description: 'Stand out with a video marketing strategy that positions you as an industry leader.',
      background: 'bg-gray-700',
      border: 'border-gray-700'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Measurable Results',
      description: 'Track performance and make informed decisions with our detailed analytics reports.',
      background: 'bg-teal-500',
      border: 'border-teal-500'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Cost-Effective',
      description: 'Maximize your ad budget with YouTube strategies that offer strong ROI.',
      background: 'bg-orange-400',
      border: 'border-orange-400'
    },
    {
      icon: 'pi pi-heart',
      title: 'Increased Customer Loyalty',
      description: 'Build trust and long-term loyalty with engaging, consistent video content.',
      background: 'bg-pink-600',
      border: 'border-pink-600'
    },
    {
      icon: 'pi pi-google',
      title: 'Improved SEO',
      description: 'Enhance your search rankings by optimizing video content for SEO visibility.',
      background: 'bg-indigo-600',
      border: 'border-indigo-600'
    },
    {
      icon: 'pi pi-video',
      title: 'Enhanced Brand Storytelling',
      description: 'Use creative video content to tell your brand story in a compelling and authentic way.',
      background: 'bg-rose-500',
      border: 'border-rose-500'
    }
  ]
};
contacttitle = " Contact us today";
contactdescription = "By partnering with Pencil Peel IMT , you can unlock the full potential of YouTube marketing and drive business growth. Contact us today to learn more about our YouTube marketing services.";


  
}
