import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { CardModule } from 'primeng/card';
import { Smstrategy } from '../smstrategy/smstrategy';
import { Contactus } from '../../../components/contactus/contactus';

@Component({
  selector: 'app-linkedln',
  imports: [CommonModule, Whycpencilpeel, Nocarouselherosection, Whyus,CardModule,Smstrategy,Contactus],
  templateUrl: './linkedln.html',
  styleUrl: './linkedln.scss'
})
export class Linkedln {

  linkedinHeroContent = {
  title: `
    Unlock the Power of 
    <span class="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent font-bold tracking-tight">
      LinkedIn Marketing
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we specialize in creating effective LinkedIn marketing strategies that drive conversions and foster growth. Tap into LinkedIn’s global network of over 774 million professionals to boost brand identity, build trust, and engage in high-impact B2B marketing.',
  image: '/dm/social/linkedln.webp' // Replace with your actual image path
};


whyus:WhyUsModel = {
  title: 'Benefits of Working with Pencil Peel IMT',
  description: `At <span class="text-orange-500">Pencil Peel IMT </span>, we understand the importance of LinkedIn marketing in today's digital landscape. Our team will help you leverage the power of LinkedIn to achieve your business goals.`,
  List: [
    {
      icon: 'pi pi-eye',
      title: 'Increased Brand Awareness',
      description: 'We will help you reach a vast professional audience and get your brand in front of the right decision-makers.',
      background: 'bg-blue-700',
      border: 'border-blue-700'
    },
    {
      icon: 'pi pi-briefcase',
      title: 'Established Authority',
      description: 'Build your reputation as an industry leader by sharing thought leadership content and engaging in key conversations.',
      background: 'bg-indigo-600',
      border: 'border-indigo-600'
    },
    {
      icon: 'pi pi-users',
      title: 'New Networking Opportunities',
      description: 'Connect with professionals, clients, and collaborators across various sectors and geographies.',
      background: 'bg-cyan-600',
      border: 'border-cyan-600'
    },
    {
      icon: 'pi pi-user-plus',
      title: 'Lead Generation',
      description: 'We help you identify and connect with key decision-makers to generate high-value B2B leads.',
      background: 'bg-green-600',
      border: 'border-green-600'
    }
  ]
};


  headerContent = {
    title: "Why Choose Pencil Peel IMT LinkedIn Marketing Services?",
    description: "At Pencil Peel IMT, we leverage LinkedIn's professional network and B2B targeting capabilities to generate high-quality leads and drive meaningful business connections. Our specialized team transforms LinkedIn into your most powerful professional marketing channel."
  };

  whycfeatures: any[] = [
    {
      id: 1,
      title: 'Proven Track Record',
      description: 'We\'ve helped numerous businesses generate high-quality leads and drive conversions through strategic LinkedIn campaigns that deliver measurable ROI.',
      icon: 'pi-verified',
      borderColor: 'blue-600',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    },
    {
      id: 2,
      title: 'Expertise',
      description: 'Our team has extensive experience in LinkedIn marketing, ensuring effective and efficient solutions that maximize your professional network\'s potential.',
      icon: 'pi-briefcase',
      borderColor: 'indigo-600',
      iconBgColor: 'indigo-100',
      iconColor: 'indigo-600'
    },
    {
      id: 3,
      title: 'Personalized Approach',
      description: 'We tailor our strategies to meet the unique needs of your business, creating customized LinkedIn campaigns that align with your industry and goals.',
      icon: 'pi-user-edit',
      borderColor: 'purple-600',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    }
  ];
  linkedInComponents = [
  {
    icon: 'pi pi-building',
    title: 'Company Pages',
    description: 'We will optimize your LinkedIn page to showcase your brand, products, and services.',
    bgColor: 'bg-blue-600'
  },
  {
    icon: 'pi pi-file-edit',
    title: 'Content Marketing',
    description: 'Our team will create and share valuable content to drive traffic to your website or blog and establish thought leadership.',
    bgColor: 'bg-cyan-600'
  },
  {
    icon: 'pi pi-bullseye',
    title: 'Advertising',
    description: 'We will utilize LinkedIn Ads to reach your target audience and drive conversions.',
    bgColor: 'bg-emerald-600'
  },
  {
    icon: 'pi pi-megaphone',
    title: 'Employee Advocacy',
    description: 'Our team will help empower your employees to share company content and expand your reach.',
    bgColor: 'bg-indigo-600'
  }
];

linkedInHelp = [
  {
    icon: 'pi pi-briefcase',
    title: 'Optimize Your LinkedIn Page',
    description: 'Our team will enhance your credibility and boost your LinkedIn SEO.',
    bgColor: 'bg-blue-600'
  },
  {
    icon: 'pi pi-file-edit',
    title: 'Develop a Content Strategy',
    description: 'We will create engaging content that resonates with your target audience.',
    bgColor: 'bg-cyan-600'
  },
  {
    icon: 'pi pi-bullseye',
    title: 'Run Targeted Ads',
    description: 'Our team will reach your ideal audience and drive conversions with LinkedIn Ads.',
    bgColor: 'bg-emerald-600'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Track and Analyse Performance',
    description: 'We will monitor your results and refine your strategy for optimal performance.',
    bgColor: 'bg-indigo-600'
  }
];
sheader = {
    title: "LinkedIn Marketing Strategies at Pencil Peel",
    description: `At <span class="text-orange-500">Pencil Peel </span>, we'll use a variety of strategies to help our clients succeed on LinkedIn. Here are some of the tactics we'll employ`,
    footer: undefined
  }

  linkedInStrategies = [
  {
    id: 1,
    title: 'Profile Optimization',
    icon: 'pi-id-card',
    gradient: 'from-blue-400 to-blue-700',
    description: 'Enhance your LinkedIn profile for maximum professional impact',
    features: [
      {
        title: 'Complete & Updated Profiles',
        description: 'Ensure every section of your LinkedIn profile is 100% complete and optimized',
        icon: 'pi-user-edit'
      },
      {
        title: 'Professional Branding',
        description: 'High-quality profile photos, custom banners, and impactful headlines',
        icon: 'pi-briefcase'
      }
    ]
  },
  {
    id: 2,
    title: 'Content Marketing',
    icon: 'pi-file-edit',
    gradient: 'from-cyan-400 to-emerald-600',
    description: 'Publish valuable content to engage and grow your professional audience',
    features: [
      {
        title: 'Thought Leadership',
        description: 'Share expert insights to establish authority in your industry',
        icon: 'pi-lightbulb'
      },
      {
        title: 'Consistent Posting',
        description: 'Maintain a regular posting schedule for higher visibility',
        icon: 'pi-calendar'
      }
    ]
  },
  {
    id: 3,
    title: 'LinkedIn Groups',
    icon: 'pi-users',
    gradient: 'from-purple-400 to-indigo-600',
    description: 'Use LinkedIn Groups to network, share expertise, and grow influence',
    features: [
      {
        title: 'Group Participation',
        description: 'Engage in relevant group discussions to build connections',
        icon: 'pi-comments'
      },
      {
        title: 'Group Creation',
        description: 'Launch and manage your own LinkedIn groups to grow a community',
        icon: 'pi-plus-circle'
      }
    ]
  },
  {
    id: 4,
    title: 'LinkedIn Ads',
    icon: 'pi-bullseye',
    gradient: 'from-green-400 to-emerald-600',
    description: 'Target the right decision-makers with precision ad campaigns',
    features: [
      {
        title: 'Precise Targeting',
        description: 'Use LinkedIn’s filters to find your exact target audience',
        icon: 'pi-filter'
      },
      {
        title: 'High-Performing Creatives',
        description: 'Design compelling ad visuals with strong calls to action',
        icon: 'pi-palette'
      }
    ]
  },
  {
    id: 5,
    title: 'Networking & Outreach',
    icon: 'pi-share-alt',
    gradient: 'from-orange-400 to-red-600',
    description: 'Expand your professional network and engage with industry leaders',
    features: [
      {
        title: 'Connection Requests',
        description: 'Send personalized requests to grow a valuable network',
        icon: 'pi-user-plus'
      },
      {
        title: 'Direct Messaging',
        description: 'Build relationships with tailored outreach campaigns',
        icon: 'pi-envelope'
      }
    ]
  },
  {
    id: 6,
    title: 'Analytics & Insights',
    icon: 'pi-chart-line',
    gradient: 'from-yellow-400 to-orange-600',
    description: 'Measure performance and optimize your LinkedIn marketing strategy',
    features: [
      {
        title: 'Performance Tracking',
        description: 'Monitor post engagement, profile views, and follower growth',
        icon: 'pi-chart-bar'
      },
      {
        title: 'Data-Driven Optimization',
        description: 'Refine campaigns based on in-depth analytics',
        icon: 'pi-cog'
      }
    ]
  }
];

contacttitle:string = 'Contact us Today';
contactdescription:string = `By leveraging these strategies, we'll help our clients achieve their marketing goals on LinkedIn. Contact us today to learn more about our LinkedIn marketing services.`;


}
