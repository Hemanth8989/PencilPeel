import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Smpoints } from "../smpoints/smpoints";
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { CardModule } from 'primeng/card';
import { Whyus } from "../../../components/whyus/whyus";
import { Contactus } from "../../../components/contactus/contactus";


interface StrategyStep {
  icon: string;
  title: string;
  description: string[];
}
@Component({
  selector: 'app-facebook',
  imports: [ButtonModule, CommonModule, Whycpencilpeel, Smpoints, Nocarouselherosection, CardModule, Whyus, Contactus,CommonModule],
  templateUrl: './facebook.html',
  styleUrl: './facebook.scss'
})
export class Facebook {
  facebookHeroContent = {
  title: `
    Unlock Your 
    <span class="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight">
      Facebook Marketing
    </span>
    Potential with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we craft data-driven Facebook marketing strategies that boost engagement, increase product awareness, and accelerate business growth with measurable results.',
  image: '/dm/social/facebookm.webp' // Replace with actual image
};

   headerContent = {
    title: "Why Choose Pencil Peel IMT for Facebook Marketing?",
    description: " our team of experts will work closely with you to develop and implement a customized Facebook marketing strategy that drives business growth and product awareness. Here's how we'll run strategies for you"
  };

  facebookFeatures: any[] = [
    {
      id: 1,
      title: 'Expertise',
      description: 'Our team has years of experience in Facebook marketing, mastering advanced targeting and campaign optimization strategies.',
      icon: 'pi-facebook',
      borderColor: 'blue-500',
      iconBgColor: 'blue-100',
      iconColor: 'blue-600'
    },
    {
      id: 2,
      title: 'Customized Solutions',
      description: 'We tailor our services to meet the unique needs of your business, creating bespoke Facebook strategies that align with your goals.',
      icon: 'pi-wrench',
      borderColor: 'green-500',
      iconBgColor: 'green-100',
      iconColor: 'green-600'
    },
    {
      id: 3,
      title: 'Proven Results',
      description: 'We\'ve helped numerous businesses achieve success through Facebook marketing, delivering consistent ROI and measurable growth.',
      icon: 'pi-chart-bar',
      borderColor: 'purple-500',
      iconBgColor: 'purple-100',
      iconColor: 'purple-600'
    },
    {
      id: 4,
      title: 'Ongoing Support',
      description: 'We provide ongoing support and optimization to ensure your Facebook marketing strategy continues to deliver results.',
      icon: 'pi-shield',
      borderColor: 'orange-500',
      iconBgColor: 'orange-100',
      iconColor: 'orange-600'
    }
  ];
  smheader = {
    title: "Facebook Marketing Strategies at Pencil Peel",
    description: "At Pencil Peel IMT, we implement a range of strategies to promote your product, company, business, or service on Facebook. Our responsive design approach and efficient processes ensure your success.",
    footerdescription: "By leveraging these strategies, we'll help our clients achieve their marketing goals on Facebook. Contact us today to learn more about our Facebook marketing services."
  }
  facebookStrategies = [
    {
      title: 'Develop a Customized Facebook Marketing Strategy',
      description: "We'll create a strategy tailored to your business needs and goals, including:",
      items: [
        'Identifying your target audience',
        'Defining your marketing objectives',
        'Developing a content calendar',
        'Setting up and managing ad campaigns'
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
      title: 'Create Engaging Content',
      description: "We'll develop content that attracts and retains your audience, including:",
      items: [
        'High-quality visuals and graphics',
        'Compelling copy and captions',
        'Relevant and timely content',
        'Storytelling and brand narratives'
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
      title: 'Manage and Optimize Your Facebook Presence',
      description: "We'll manage your Facebook page and optimize your presence to ensure maximum engagement and reach, including:",
      items: [
        'Responding to comments and messages',
        'Monitoring and optimizing ad performance',
        'Analysing and reporting on page performance',
        'Adjusting your content strategy based on audience feedback'
      ],
      colorScheme: {
        primary: 'bg-violet-500',
        secondary: 'bg-violet-100',
        text: 'text-violet-600',
        border: 'border-violet-200'
      },
      icon: 'pi pi-cog'
    },
    {
      title: 'Provide Regular Reporting and Insights',
      description: "We'll provide regular reporting and insights to ensure you're informed about your Facebook marketing performance, including:",
      items: [
        'Monthly performance reports',
        'Ad campaign analysis',
        'Recommendations for improvement',
        "Insights into your target audience's behaviour and preferences"
      ],
      colorScheme: {
        primary: 'bg-rose-500',
        secondary: 'bg-rose-100',
        text: 'text-rose-600',
        border: 'border-rose-200'
      },
      icon: 'pi pi-chart-bar'
    },
    {
      title: 'Continuously Monitor and Improve',
      description: "We'll continuously monitor and improve your Facebook marketing strategy to ensure it's meeting your business goals and objectives, including:",
      items: [
        'Tracking key performance indicators (KPIs)',
        'Analysing ad campaign data',
        'Adjusting your strategy based on data-driven insights',
        'Staying up-to-date with the latest Facebook marketing trends and best practices'
      ],
      colorScheme: {
        primary: 'bg-amber-500',
        secondary: 'bg-amber-100',
        text: 'text-amber-600',
        border: 'border-amber-200'
      },
      icon: 'pi pi-refresh'
    },
    {
      title: 'Leverage Facebook\'s Advanced Features',
      description: "We'll leverage Facebook's advanced features to maximize your reach and engagement, including:",
      items: [
        'Facebook Groups',
        'Facebook Live',
        'Facebook Stories',
        'Facebook Messenger marketing'
      ],
      colorScheme: {
        primary: 'bg-cyan-500',
        secondary: 'bg-cyan-100',
        text: 'text-cyan-600',
        border: 'border-cyan-200'
      },
      icon: 'pi pi-star'
    },
    {
      title: 'Focus on ROI-Driven Results',
      description: "We'll focus on delivering ROI-driven results for your business, including:",
      items: [
        'Increasing conversions and sales',
        'Generating leads and capturing potential customers\' information',
        'Building brand awareness and recognition',
        'Driving website traffic and engagement'
      ],
      colorScheme: {
        primary: 'bg-indigo-500',
        secondary: 'bg-indigo-100',
        text: 'text-indigo-600',
        border: 'border-indigo-200'
      },
      icon: 'pi pi-dollar'
    }
  ];
  timelineEvents = [
    {
      title: 'Define Your Target Audience',
      description: 'Our team will Identify your ideal audience based on demographics, interests, and behaviours.',
      icon: 'pi pi-users',
      color: 'blue',
      status: 'Step 1'
    },
    {
      title: 'Create Compelling Ad Content',
      description: 'Our team will Develop ad content that resonates with your target audience',
      icon: 'pi pi-image',
      color: 'emerald',
      status: 'Step 2'
    },
    {
      title: 'Set Up and Manage Ad Campaigns',
      description: 'Our team will Set up and manage your Facebook ad campaigns to ensure optimal performance',
      icon: 'pi pi-cog',
      color: 'violet',
      status: 'Step 3'
    },
    {
      title: 'Monitor and Optimize Ad Performance',
      description: 'Our team will Track and measure ad performance and make data-driven decisions to optimize results',
      icon: 'pi pi-chart-bar',
      color: 'rose',
      status: 'Step 4'
    }
  ];

  steps = [
    {
      title: 'Define Your Target Audience',
      description: 'Our team will Identify your ideal audience based on demographics, interests, and behaviours.',
      icon: 'pi pi-users',
      number: '01'
    },
    {
      title: 'Create Compelling Ad Content',
      description: 'Our team will Develop ad content that resonates with your target audience',
      icon: 'pi pi-image',
      number: '02'
    },
    {
      title: 'Set Up and Manage Ad Campaigns',
      description: 'Our team will Set up and manage your Facebook ad campaigns to ensure optimal performance',
      icon: 'pi pi-cog',
      number: '03'
    },
    {
      title: 'Monitor and Optimize Ad Performance',
      description: 'Our team will Track and measure ad performance and make data-driven decisions to optimize results',
      icon: 'pi pi-chart-bar',
      number: '04'
    }
  ];

  whyus = {
  title: 'Benefits of Working with Pencil Peel IMT',
  description: '',
  List: [
    {
      icon: 'pi pi-eye',
      title: 'Increased Brand Awareness',
      description: "We'll help you build a strong Facebook presence that showcases your brand's unique voice and personality.",
      background: 'bg-blue-500',
      border: 'border-blue-500'
    },
    {
      icon: 'pi pi-users',
      title: 'Targeted Advertising',
      description: "Reach your ideal audience with precise targeting based on demographics, interests, and behavior.",
      background: 'bg-purple-500',
      border: 'border-purple-500'
    },
    {
      icon: 'pi pi-comments',
      title: 'Improved Engagement',
      description: "We'll help you create engaging content that encourages interaction and builds relationships.",
      background: 'bg-pink-500',
      border: 'border-pink-500'
    },
    {
      icon: 'pi pi-external-link',
      title: 'Website Traffic',
      description: "Boost visits to your website with Facebook campaigns that convert users into customers.",
      background: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
    {
      icon: 'pi pi-user-plus',
      title: 'Lead Generation',
      description: "Generate quality leads with custom campaigns and proven lead generation strategies.",
      background: 'bg-yellow-500',
      border: 'border-yellow-500'
    },
    {
      icon: 'pi pi-dollar',
      title: 'Increased Sales',
      description: "Our ad strategies are optimized to drive conversions and increase your sales.",
      background: 'bg-green-600',
      border: 'border-green-600'
    },
    {
      icon: 'pi pi-star',
      title: 'Competitive Advantage',
      description: "We'll help you stand out with a Facebook strategy that sets you apart from the competition.",
      background: 'bg-red-400',
      border: 'border-red-400'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Measurable Results',
      description: "Track your performance with in-depth analytics and reporting for data-driven decision-making.",
      background: 'bg-gray-600',
      border: 'border-gray-600'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Cost-Effective',
      description: "Get more out of your budget with Facebook advertising that delivers great ROI.",
      background: 'bg-orange-400',
      border: 'border-orange-400'
    },
    {
      icon: 'pi pi-heart',
      title: 'Increased Customer Loyalty',
      description: "Build lasting relationships with your audience through consistent and meaningful engagement.",
      background: 'bg-rose-500',
      border: 'border-rose-500'
    }
  ]
};

  contacttitle = " Contact us Today ";
  contactdescription = "By partnering with Pencil Peel IMT, you can unlock the full potential of Facebook marketing and drive business growth. Contact us Today to learn more about our Facebook marketing services";

   strategySteps: StrategyStep[] = [
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Customized Strategy',
      description: [
        'Target audience identification',
        'Marketing objectives definition',
        'Content calendar planning',
        'Ad campaign setup & management'
      ]
    },
    {
      icon: 'fa-solid fa-paint-brush',
      title: 'Engaging Content',
      description: [
        'High-quality visuals & graphics',
        'Compelling copy and captions',
        'Storytelling & brand narratives'
      ]
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Optimization & Management',
      description: [
        'Comment & message responses',
        'Performance monitoring',
        'Regular analysis & strategy adjustment'
      ]
    },
    {
      icon: 'fa-solid fa-file-alt',
      title: 'Reporting & Insights',
      description: [
        'Monthly reports',
        'Ad performance analysis',
        'Actionable recommendations'
      ]
    },
    {
      icon: 'fa-solid fa-sync-alt',
      title: 'Continuous Improvement',
      description: [
        'KPI tracking',
        'Data-driven strategy adjustment',
        'Trend & best practice updates'
      ]
    },
    {
      icon: 'fa-brands fa-facebook',
      title: 'Advanced Features',
      description: [
        'Groups, Live & Stories',
        'Messenger marketing'
      ]
    },
    {
      icon: 'fa-solid fa-chart-pie',
      title: 'ROI-Driven Results',
      description: [
        'Increase conversions & leads',
        'Build brand awareness',
        'Drive traffic & engagement'
      ]
    }
  ];

}
