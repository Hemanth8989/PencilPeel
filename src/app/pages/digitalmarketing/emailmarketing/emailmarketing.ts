import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Contactus } from "../../../components/contactus/contactus";
import { FaqCardModel } from '../../../models/FaqCard';
import { Faqcards } from '../../../components/faqcards/faqcards';

export interface EmailFeature {
  title: string;
  description: string;
}

export interface EmailMarketingType {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: EmailFeature[];
  metric: string;
  metricLabel: string;
}

export interface EmailGrowthProcess {
  title: string;
  description: string;
  category: string;
  icon: string;
  color: string;
  step: number;
  methods: string[];
}

export interface EmailBenefit {
  title: string;
  description: string;
  icon: string;
  color: string;
  impact: string;
}

export interface EmailResult {
  value: string;
  label: string;
  colorClass: string;
}

@Component({
  selector: 'app-emailmarketing',
  imports: [CardModule, CommonModule, Timeline, Nocarouselherosection, Contactus,Faqcards],
  templateUrl: './emailmarketing.html',
  styleUrl: './emailmarketing.scss'
})
export class Emailmarketing {
  herocontent = {
  title: `
    Unlock the Power of 
    <span class="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 bg-clip-text text-transparent font-bold tracking-tight">
      Email Marketing
    </span>
    with 
    <span class="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'Welcome to the universe of Email Marketing Services with Pencil Peel IMT. Our team of experts understands the power of email marketing in driving business growth. Discover how personalized, data-driven campaigns can boost engagement, generate leads, and increase conversions.',
  image: '/dm/services/emailmarketing.webp' // Replace with your actual image path
};

faqCards:FaqCardModel[] = [
  {
  id: 'f4',
  title: 'What is Email Marketing?',
  description: 'We design engaging, personalized email campaigns that land directly in your customers’ inboxes to drive engagement and conversions.',
  fullDescription: `
    Email marketing is a powerful strategy to reach your customers where they are — in their inbox. We craft visually appealing and content-rich emails that capture attention rather than being dismissed as spam. Our expertise ensures deliverability and engagement at scale.<br/><br/>
    <strong>Targeted Messaging:</strong> We send relevant, segmented messages that increase customer engagement and drive conversions.<br/>
    <strong>Personalized Communication:</strong> Our team creates customized content that builds trust and loyalty with your audience.
  `,
  expanded: false,
  image: '/dm/whatemailmarketing.webp' // Replace with your actual image path
},
{
  id: 'f5',
  title: 'Benefits of Email Marketing',
  description: 'Discover how our email marketing services drive conversions, boost brand awareness, and deliver cost-effective results.',
  fullDescription: `
    Email marketing with Pencil Peel IMT offers a wide range of benefits that support your business growth and communication strategy:<br/><br/>

    <strong>Increased Conversions:</strong> We use email marketing to drive conversions by generating leads, promoting offers, or encouraging customer actions. Whether it’s driving purchases, sign-ups, or downloads, our campaigns are crafted to turn interest into measurable business results.<br/><br/>

    <strong>Improved Brand Awareness:</strong> Through regular updates, curated content, and personalized messages, email marketing strengthens brand identity and awareness. Our campaigns ensure that your business stays top-of-mind while reinforcing your values and voice.<br/><br/>

    <strong>Cost-Effective Marketing:</strong> Compared to other marketing channels, email marketing is budget-friendly and highly efficient. With low overhead costs and powerful targeting capabilities, we help you connect with your audience while maximizing return on investment.
  `,
  expanded: false,
  image: '/dm/email-benefits.webp' // Replace with the correct image path
}


]
  emailMarketingTypes: EmailMarketingType[] = [
    {
      title: 'Newsletters',
      description: 'Keep your audience informed and engaged with regular updates and industry insights.',
      icon: 'pi pi-book',
      color: 'blue',
      features: [
        {
          title: 'Regular Updates',
          description: 'We\'ll create newsletters that keep your audience informed about your brand, products, and services'
        },
        {
          title: 'Industry Insights',
          description: 'Our team will include industry insights and news to educate and engage your audience'
        }
      ],
      metric: '45%',
      metricLabel: 'Open Rate'
    },
    {
      title: 'Promotional Emails',
      description: 'Drive sales and conversions with targeted promotional campaigns and special offers.',
      icon: 'pi pi-tags',
      color: 'emerald',
      features: [
        {
          title: 'Sales and Discounts',
          description: 'We\'ll create promotional emails that drive sales, discounts, and other business objectives'
        },
        {
          title: 'Limited-Time Offers',
          description: 'Our team will create limited-time offers that encourage subscribers to take action'
        }
      ],
      metric: '25%',
      metricLabel: 'Conversion Rate'
    },
    {
      title: 'Abandoned Cart Emails',
      description: 'Recover lost sales by encouraging customers to complete their purchases.',
      icon: 'pi pi-shopping-cart',
      color: 'orange',
      features: [
        {
          title: 'Cart Recovery',
          description: 'We\'ll create abandoned cart emails that encourage customers to complete their purchase'
        },
        {
          title: 'Personalized Recommendations',
          description: 'Our team will include personalized product recommendations to increase average order value'
        }
      ],
      metric: '35%',
      metricLabel: 'Recovery Rate'
    },
    {
      title: 'Welcome Emails',
      description: 'Create great first impressions with new subscribers and encourage initial purchases.',
      icon: 'pi pi-user-plus',
      color: 'purple',
      features: [
        {
          title: 'New Subscriber Introduction',
          description: 'We\'ll create welcome emails that introduce new subscribers to your brand and offerings'
        },
        {
          title: 'Exclusive Offers',
          description: 'Our team will include exclusive offers or discounts to encourage subscribers to make a purchase'
        }
      ],
      metric: '50%',
      metricLabel: 'Engagement Rate'
    },
    {
      title: 'Transactional Emails',
      description: 'Provide essential transaction information and maintain customer communication.',
      icon: 'pi pi-file-o',
      color: 'cyan',
      features: [
        {
          title: 'Order Confirmations',
          description: 'We\'ll create transactional emails that provide important information about transactions, such as order confirmations and shipping updates'
        },
        {
          title: 'Account Updates',
          description: 'Our team will send account updates and notifications to keep subscribers informed'
        }
      ],
      metric: '80%',
      metricLabel: 'Open Rate'
    },
    {
      title: 'Re-engagement Emails',
      description: 'Win back inactive subscribers and reignite their interest in your brand.',
      icon: 'pi pi-refresh',
      color: 'red',
      features: [
        {
          title: 'Inactive Subscriber Re-engagement',
          description: 'We\'ll create re-engagement emails that target inactive subscribers and encourage them to re-engage with your brand'
        },
        {
          title: 'Personalized Content',
          description: 'Our team will include personalized content and offers to increase engagement'
        }
      ],
      metric: '20%',
      metricLabel: 'Re-activation Rate'
    },
    {
      title: 'Survey Emails',
      description: 'Collect valuable customer feedback and insights to improve your offerings.',
      icon: 'pi pi-chart-bar',
      color: 'teal',
      features: [
        {
          title: 'Customer Feedback',
          description: 'We\'ll create survey emails that collect customer feedback and insights'
        },
        {
          title: 'Product Improvement',
          description: 'Our team will use survey feedback to improve products and services'
        }
      ],
      metric: '15%',
      metricLabel: 'Response Rate'
    },
    {
      title: 'Anniversary Emails',
      description: 'Celebrate customer loyalty and milestones with special recognition.',
      icon: 'pi pi-calendar',
      color: 'pink',
      features: [
        {
          title: 'Customer Loyalty',
          description: 'We\'ll create anniversary emails that celebrate customer loyalty and milestones'
        },
        {
          title: 'Special Offers',
          description: 'Our team will include special offers or discounts to reward loyal customers'
        }
      ],
      metric: '40%',
      metricLabel: 'Click Rate'
    },
    {
      title: 'Event Emails',
      description: 'Promote events and increase attendance with targeted invitations and reminders.',
      icon: 'pi pi-calendar-plus',
      color: 'indigo',
      features: [
        {
          title: 'Event Invitations',
          description: 'We\'ll create event emails that invite subscribers to webinars, conferences, or other events'
        },
        {
          title: 'Event Reminders',
          description: 'Our team will send event reminders to increase attendance'
        }
      ],
      metric: '30%',
      metricLabel: 'Attendance Rate'
    },
    {
      title: 'Product Launch Emails',
      description: 'Generate excitement and drive adoption for new products and services.',
      icon: 'pi pi-star',
      color: 'yellow',
      features: [
        {
          title: 'New Product Announcements',
          description: 'We\'ll create product launch emails that announce new products or services'
        },
        {
          title: 'Exclusive Offers',
          description: 'Our team will include exclusive offers or discounts to encourage early adopters'
        }
      ],
      metric: '35%',
      metricLabel: 'Click Rate'
    }
  ];
  emailGrowthProcess: EmailGrowthProcess[] = [
    {
      title: 'Increased Engagement',
      description: 'We\'ll use email marketing to increase engagement with your audience, building trust and loyalty.',
      category: 'Foundation',
      icon: 'pi pi-heart',
      color: 'purple',
      step: 1,
      methods: [
        'Personalized email content based on user behavior',
        'Interactive email elements and compelling CTAs',
        'Segmented messaging for targeted communication',
        'A/B testing for optimal engagement rates'
      ]
    },
    {
      title: 'Improved Customer Retention',
      description: 'Our team will help improve customer retention by sending targeted and personalized emails.',
      category: 'Retention',
      icon: 'pi pi-users',
      color: 'pink',
      step: 2,
      methods: [
        'Automated welcome series for new customers',
        'Personalized product recommendations',
        'Loyalty program communications',
        'Re-engagement campaigns for inactive users'
      ]
    },
    {
      title: 'Increased Sales',
      description: 'We\'ll use email marketing to drive sales and revenue, increasing your business\'s bottom line.',
      category: 'Growth',
      icon: 'pi pi-dollar',
      color: 'indigo',
      step: 3,
      methods: [
        'Targeted promotional email campaigns',
        'Abandoned cart recovery sequences',
        'Upselling and cross-selling strategies',
        'Limited-time offer campaigns'
      ]
    }
  ];
  emailBenefits: EmailBenefit[] = [
    {
      title: 'Build Trust & Loyalty',
      description: 'Create lasting relationships through consistent, valuable communication',
      icon: 'pi pi-heart',
      color: 'purple',
      impact: '+300% Engagement'
    },
    {
      title: 'Retain More Customers',
      description: 'Keep customers coming back with personalized retention strategies',
      icon: 'pi pi-users',
      color: 'pink',
      impact: '85% Retention Rate'
    },
    {
      title: 'Drive Revenue Growth',
      description: 'Convert prospects into customers and increase sales consistently',
      icon: 'pi pi-dollar',
      color: 'indigo',
      impact: '+250% Sales'
    }
  ];

  emailGrowthBenefits: any[] = [
    {
      title: 'Increased Engagement',
      description: 'We\'ll use email marketing to increase engagement with your audience, building trust and loyalty.',
      icon: 'pi pi-heart',
      color: 'blue',
      impact: '+250%',
      features: [
        'Personalized email content',
        'Interactive email elements',
        'Targeted messaging',
        'A/B testing optimization'
      ]
    },
    {
      title: 'Improved Customer Retention',
      description: 'Our team will help improve customer retention by sending targeted and personalized emails.',
      icon: 'pi pi-users',
      color: 'indigo',
      impact: '+180%',
      features: [
        'Automated welcome series',
        'Loyalty program communications',
        'Re-engagement campaigns',
        'Personalized recommendations'
      ]
    },
    {
      title: 'Increased Sales',
      description: 'We\'ll use email marketing to drive sales and revenue, increasing your business\'s bottom line.',
      icon: 'pi pi-dollar',
      color: 'purple',
      impact: '+300%',
      features: [
        'Promotional campaigns',
        'Abandoned cart recovery',
        'Upselling strategies',
        'Limited-time offers'
      ]
    }
  ];
  contacttitle = `Get Started with Pencil Peel IMT Email Marketing Services`;
  contactdescription = `By leveraging email marketing, we can help your business grow and achieve its marketing goals. Contact us today to learn more about our email marketing services.`

  constructor() {}

  ngOnInit(): void {
    // Initialize component
  }

  // Styling Methods
  getMarkerClass(color: string): string {
    const colorMap = {
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'pink': 'bg-gradient-to-br from-pink-500 to-pink-600',
      'indigo': 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    };
    return colorMap[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getHeaderGradient(color: string): string {
    const gradientMap = {
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'emerald': 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      'orange': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'cyan': 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      'red': 'bg-gradient-to-br from-red-500 to-red-600',
      'teal': 'bg-gradient-to-br from-teal-500 to-teal-600',
      'pink': 'bg-gradient-to-br from-pink-500 to-pink-600',
      'indigo': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'yellow': 'bg-gradient-to-br from-yellow-500 to-yellow-600'
    };
    return gradientMap[color] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  }

  getMethodBg(color: string): string {
    const bgMap = {
      'blue': 'bg-gradient-to-br from-blue-100 to-blue-100',
      'emerald': 'bg-gradient-to-br from-emerald-100 to-emerald-100',
      'orange': 'bg-gradient-to-br from-orange-100 to-orange-100',
      'purple': 'bg-gradient-to-br from-purple-100 to-purple-100',
      'cyan': 'bg-gradient-to-br from-cyan-100 to-cyan-100',
      'red': 'bg-gradient-to-br from-red-100 to-red-100',
      'teal': 'bg-gradient-to-br from-teal-100 to-teal-100',
      'pink': 'bg-gradient-to-br from-pink-100 to-pink-100',
      'indigo': 'bg-gradient-to-br from-indigo-100 to-indigo-100',
      'yellow': 'bg-gradient-to-br from-yellow-100 to-yellow-100'

    };
    return bgMap[color] || 'bg-gray-50 hover:bg-gray-100';
  }

  getIconColor(color: string): string {
    const iconMap = {
      'purple': 'text-purple-500',
      'pink': 'text-pink-500',
      'indigo': 'text-indigo-500'
    };
    return iconMap[color] || 'text-gray-500';
  }

  getMetricBg(color: string): string {
    const metricBgMap = {
      'purple': 'bg-purple-50',
      'pink': 'bg-pink-50',
      'indigo': 'bg-indigo-50'
    };
    return metricBgMap[color] || 'bg-gray-50';
  }

  getProgressBar(color: string): string {
    const progressMap = {
      'purple': 'bg-gradient-to-r from-purple-500 to-purple-600',
      'pink': 'bg-gradient-to-r from-pink-500 to-pink-600',
      'indigo': 'bg-gradient-to-r from-indigo-500 to-indigo-600'
    };
    return progressMap[color] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  }

  getStatsBg(color: string): string {
    const statsBgMap = {
      'purple': 'bg-gradient-to-br from-purple-100 to-purple-200',
      'pink': 'bg-gradient-to-br from-pink-100 to-pink-200',
      'indigo': 'bg-gradient-to-br from-indigo-100 to-indigo-200'
    };
    return statsBgMap[color] || 'bg-gradient-to-br from-gray-100 to-gray-200';
  }

  getStatsText(color: string): string {
    const statsTextMap = {
      'purple': 'text-purple-600',
      'pink': 'text-pink-600',
      'indigo': 'text-indigo-600'
    };
    return statsTextMap[color] || 'text-gray-600';
  }

  getTextColor(color: string): string {
    const textMap = {
      'purple': 'text-purple-600',
      'pink': 'text-pink-600',
      'indigo': 'text-indigo-600'
    };
    return textMap[color] || 'text-gray-600';
  }

  getBenefitBg(color: string): string {
    const benefitBgMap = {
      'purple': 'bg-gradient-to-br from-purple-50 to-purple-100',
      'pink': 'bg-gradient-to-br from-pink-50 to-pink-100',
      'indigo': 'bg-gradient-to-br from-indigo-50 to-indigo-100'
    };
    return benefitBgMap[color] || 'bg-gradient-to-br from-gray-50 to-gray-100';
  }

  // Action Methods
  startEmailStrategy(): void {
    console.log('Starting email growth strategy');
    // Add your navigation or form logic here
  }

  getGrowthAnalysis(): void {
    console.log('Getting free growth analysis');
    // Add your navigation or form logic here
  }

  getHeaderClass(color: string): string {
    const headerClasses = {
       'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'emerald': 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      'orange': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'cyan': 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      'red': 'bg-gradient-to-br from-red-500 to-red-600',
      'teal': 'bg-gradient-to-br from-teal-500 to-teal-600',
      'pink': 'bg-gradient-to-br from-pink-500 to-pink-600',
      'indigo': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'yellow': 'bg-gradient-to-br from-yellow-500 to-yellow-600'
    };
    return headerClasses[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getFeatureBg(color: string): string {
    const bgMap = {
      'blue': 'bg-blue-50 hover:bg-blue-100',
      'indigo': 'bg-indigo-50 hover:bg-indigo-100',
      'purple': 'bg-purple-50 hover:bg-purple-100'
    };
    return bgMap[color] || 'bg-gray-50 hover:bg-gray-100';
  }

  getImpactBg(color: string): string {
    const bgMap = {
      'blue': 'bg-blue-50',
      'indigo': 'bg-indigo-50',
      'purple': 'bg-purple-50'
    };
    return bgMap[color] || 'bg-gray-50';
  }
}
