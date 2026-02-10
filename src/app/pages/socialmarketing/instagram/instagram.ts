import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { Smstrategy } from "../smstrategy/smstrategy";
import { CardModule } from 'primeng/card';
import { Smpoints } from '../smpoints/smpoints';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Whyus } from "../../../components/whyus/whyus";
import { Contactus } from "../../../components/contactus/contactus";

@Component({
  selector: 'app-instagram',
  imports: [ButtonModule, CommonModule, Whycpencilpeel, Smstrategy, CardModule, Smpoints, Nocarouselherosection, Whyus, Contactus],
  templateUrl: './instagram.html',
  styleUrl: './instagram.scss'
})
export class Instagram {

  instagramHeroContent = {
  title: `
    Unlock the Power of 
    <span class="bg-gradient-to-r from-pink-400 via-rose-500 to-yellow-400 bg-clip-text text-transparent font-bold tracking-tight">
      Instagram Marketing
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we specialize in creating effective Instagram marketing strategies that drive conversions, grow your business, and strengthen your brand identity across a platform with over 1 billion active users.',
  image: '/dm/social/instagram.webp' // Replace with actual image path
};
whyus = {
  title: 'Benefits of Working with Pencil Peel IMT',
  description: `At Pencil Peel IMT, we've seen first-hand the impact that Instagram marketing can have on businesses. Here are some benefits of using Instagram for your marketing efforts`,
  List: [
    {
      icon: 'pi pi-eye',
      title: 'Increased Brand Awareness',
      description: 'Reach a vast audience and position your brand in front of the right people.',
      background: 'bg-pink-400',
      border: 'border-pink-400'
    },
    {
      icon: 'pi pi-comments',
      title: 'Improved Engagement',
      description: 'We’ll help you build a vibrant community and keep your audience actively engaged.',
      background: 'bg-rose-500',
      border: 'border-rose-500'
    },
    {
      icon: 'pi pi-external-link',
      title: 'Website Traffic',
      description: 'Drive more visitors to your website and increase your conversion rate.',
      background: 'bg-purple-500',
      border: 'border-purple-500'
    },
    {
      icon: 'pi pi-dollar',
      title: 'Sales',
      description: 'Boost product sales with precise targeting and creative ad promotions.',
      background: 'bg-green-600',
      border: 'border-green-600'
    },
    {
      icon: 'pi pi-users',
      title: 'Targeted Advertising',
      description: 'Reach your ideal audience through data-driven Instagram Ads.',
      background: 'bg-blue-500',
      border: 'border-blue-500'
    },
    {
      icon: 'pi pi-image',
      title: 'Visual Storytelling',
      description: 'Showcase your products and services with eye-catching visuals that convert.',
      background: 'bg-yellow-400',
      border: 'border-yellow-400'
    },
    {
      icon: 'pi pi-share-alt',
      title: 'Influencer Partnerships',
      description: 'Collaborate with influencers to enhance reach and build credibility.',
      background: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
    {
      icon: 'pi pi-comment',
      title: 'Real-Time Feedback',
      description: 'Gain instant feedback and refine your strategy based on audience reactions.',
      background: 'bg-red-400',
      border: 'border-red-400'
    },
    {
      icon: 'pi pi-star',
      title: 'Competitive Advantage',
      description: 'Stand out in your industry with a bold and authentic Instagram strategy.',
      background: 'bg-gray-600',
      border: 'border-gray-600'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Cost-Effective',
      description: 'Get impressive ROI without the high costs of traditional advertising.',
      background: 'bg-orange-400',
      border: 'border-orange-400'
    },
    {
      icon: 'pi pi-heart',
      title: 'Increased Customer Loyalty',
      description: 'Create lasting connections and turn followers into loyal customers.',
      background: 'bg-pink-600',
      border: 'border-pink-600'
    },
    {
      icon: 'pi pi-id-card',
      title: 'Improved Brand Identity',
      description: 'Tell your story visually and consistently to express your brand values.',
      background: 'bg-violet-500',
      border: 'border-violet-500'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Access to Insights',
      description: 'Understand audience behavior with powerful Instagram analytics tools.',
      background: 'bg-teal-500',
      border: 'border-teal-500'
    },
    {
      icon: 'pi pi-cog',
      title: 'Flexibility',
      description: 'Adapt quickly to trends and adjust strategies to stay ahead.',
      background: 'bg-cyan-500',
      border: 'border-cyan-500'
    }
  ]
};
  headerContent = {
    title: "Why Choose Pencil Peel IMT for Instagram Marketing?",
    description: "At Pencil Peel IMT, we understand the power of Instagram marketing in today's digital landscape. Our team of experts will help you leverage the potential of Instagram to achieve your business goals."
  };
  instagramFeatures: any[] = [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has extensive experience in creating effective Instagram marketing strategies that drive results.',
      icon: 'pi-users',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    },
    {
      id: 2,
      title: 'Custom Solutions',
      description: 'We develop tailored Instagram marketing plans to meet the unique needs of your business.',
      icon: 'pi-cog',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'We have delivered successful Instagram marketing campaigns for businesses across various industries.',
      icon: 'pi-chart-line',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 4,
      title: 'Ongoing Support',
      description: 'Our team provides ongoing support and maintenance to ensure your Instagram marketing efforts continue to perform well.',
      icon: 'pi-headphones',
      iconBgColor: 'orange-100',
      iconColor: 'orange-600'
    }
  ];
  // Instagram marketing strategies
  sheader = {
    title: "Instagram Promotion Strategies at Pencil Peel IMT",
    description: " At Pencil Peel IMT, we'll use a variety of strategies to promote your product, company, business, or service to Instagram users with our responsive design approach and efficient processes.",
    footer: "By leveraging these strategies, we'll help our clients achieve their marketing goals on YouTube. Contact us today to learn more about our YouTube marketing services."
  }
  strategies = [
    {
      id: 1,
      title: 'Content Creation',
      icon: 'pi-image',
      gradient: 'from-rose-400 to-pink-600',
      description: 'Professional visual content that captures attention',
      features: [
        {
          title: 'High-Quality Visuals',
          description: 'Create stunning photos and videos that showcase your offerings',
          icon: 'pi-camera'
        },
        {
          title: 'Captions and Hashtags',
          description: 'Craft compelling captions with strategic hashtag placement',
          icon: 'pi-hashtag'
        }
      ]
    },
    {
      id: 2,
      title: 'Influencer Marketing',
      icon: 'pi-star',
      gradient: 'from-purple-400 to-indigo-600',
      description: 'Partner with influential voices in your industry',
      features: [
        {
          title: 'Influencer Partnerships',
          description: 'Connect with influencers who resonate with your audience',
          icon: 'pi-users'
        },
        {
          title: 'Sponsored Content',
          description: 'Authentic collaborations that drive engagement',
          icon: 'pi-megaphone'
        }
      ]
    },
    {
      id: 3,
      title: 'Stories & Reels',
      icon: 'pi-video',
      gradient: 'from-blue-400 to-cyan-600',
      description: 'Dynamic short-form content for maximum reach',
      features: [
        {
          title: 'Engaging Stories',
          description: 'Interactive 24-hour content that builds connection',
          icon: 'pi-clock'
        },
        {
          title: 'Viral Reels',
          description: 'Entertaining short videos that boost discoverability',
          icon: 'pi-play'
        }
      ]
    },
    {
      id: 4,
      title: 'Instagram Ads',
      icon: 'pi-bullseye',
      gradient: 'from-green-400 to-emerald-600',
      description: 'Targeted advertising for precise audience reach',
      features: [
        {
          title: 'Precision Targeting',
          description: 'Reach your ideal customers with advanced demographics',
          icon: 'pi-filter'
        },
        {
          title: 'Creative Development',
          description: 'High-converting ad designs that drive results',
          icon: 'pi-palette'
        }
      ]
    },
    {
      id: 5,
      title: 'Community Engagement',
      icon: 'pi-heart',
      gradient: 'from-orange-400 to-red-600',
      description: 'Build loyal communities around your brand',
      features: [
        {
          title: 'Active Response',
          description: 'Prompt engagement with comments and messages',
          icon: 'pi-comments'
        },
        {
          title: 'User Content',
          description: 'Encourage and showcase customer-generated content',
          icon: 'pi-share-alt'
        }
      ]
    },
    {
      id: 6,
      title: 'Contests & Rewards',
      icon: 'pi-gift',
      gradient: 'from-yellow-400 to-orange-600',
      description: 'Gamify engagement with strategic campaigns',
      features: [
        {
          title: 'Interactive Contests',
          description: 'Engaging competitions that amplify brand awareness',
          icon: 'pi-trophy'
        },
        {
          title: 'Strategic Giveaways',
          description: 'Reward loyalty and attract new followers',
          icon: 'pi-sparkles'
        }
      ]
    }
  ];
  //sm strategies for instagram
  smheader = {
    title: "Instagram Marketing Services",
    description: "we'll use a variety of strategies to promote your product, company, business, or service to Instagram users. Here are some of the tactics we'll employ",
    footer:`By providing these services, we help businesses like yours succeed on Instagram and drive growth. At Pencil Peel IMT, we're committed to delivering effective and efficient Instagram marketing solutions that meet your unique needs and goals.`
  }
  instagramServices = [
      {
        title: 'Customized Instagram Marketing Strategies',
        items: [
          'Identifying target audience and goals',
          'Conducting competitor research',
          'Creating a content calendar',
          'Developing a brand voice and tone',
          'Defining key performance indicators (KPIs)'
        ],
        colorScheme: {
          primary: 'bg-blue-500',
          secondary: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200'
        },
        icon: 'pi pi-chart-line'
      },
      {
        title: 'Content Creation',
        items: [
          'Posts (photos, videos, stories)',
          'Captions and hashtags',
          'Branded content and influencer partnerships',
          'Instagram Live streaming',
          'Reels and IGTV content'
        ],
        colorScheme: {
          primary: 'bg-emerald-500',
          secondary: 'bg-emerald-100',
          text: 'text-emerald-600',
          border: 'border-emerald-200'
        },
        icon: 'pi pi-image'
      },
      {
        title: 'Targeted Advertising',
        items: [
          'Ad creation and targeting',
          'Budget management and optimization',
          'Ad performance tracking and analysis',
          'A/B testing and ad optimization',
          'Retargeting and lookalike audiences'
        ],
        colorScheme: {
          primary: 'bg-violet-500',
          secondary: 'bg-violet-100',
          text: 'text-violet-600',
          border: 'border-violet-200'
        },
        icon: 'pi pi-bullseye'
      },
      {
        title: 'Influencer Partnerships',
        items: [
          'Identifying and vetting influencers',
          'Negotiating partnerships and collaborations',
          'Content creation and promotion',
          'Influencer relationship management',
          'Campaign tracking and measurement'
        ],
        colorScheme: {
          primary: 'bg-rose-500',
          secondary: 'bg-rose-100',
          text: 'text-rose-600',
          border: 'border-rose-200'
        },
        icon: 'pi pi-users'
      },
      {
        title: 'Performance Tracking and Analysis',
        items: [
          'Tracking engagement and conversion metrics',
          'Analysing ad performance and ROI',
          'Providing regular reporting and insights',
          'Identifying areas for improvement',
          'Refining strategy for optimal performance'
        ],
        colorScheme: {
          primary: 'bg-amber-500',
          secondary: 'bg-amber-100',
          text: 'text-amber-600',
          border: 'border-amber-200'
        },
        icon: 'pi pi-chart-bar'
      },
      {
        title: 'Additional Services',
        items: [
          'Instagram account setup and optimization',
          'Content calendar management',
          'Instagram Stories and Reels creation',
          'Influencer takeovers and activations',
          'Instagram Ads campaign management'
        ],
        colorScheme: {
          primary: 'bg-cyan-500',
          secondary: 'bg-cyan-100',
          text: 'text-cyan-600',
          border: 'border-cyan-200'
        },
        icon: 'pi pi-cog'
      }
  ];
  contacttitle = " Contact us Today ";
  contactdescription = "By choosing Pencil Peel IMT for Instagram marketing, you can trust that our team of experts will help you achieve your business goals and drive results. To Know more and to get succeed Contact us Today. ";


}
