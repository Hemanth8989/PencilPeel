import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Contactus } from '../../../components/contactus/contactus';

@Component({
  selector: 'app-inbound',
  imports: [Nocarouselherosection, Whyus,CommonModule,CardModule,Timeline,Contactus],
  templateUrl: './inbound.html',
  styleUrl: './inbound.scss'
})
export class Inbound {
  herocontent = {
  title: `
    Unlock the Potential of 
    <span class="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent font-bold tracking-tight">
      Inbound Marketing
    </span> 
    with 
    <span class="bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'We craft personalized inbound marketing strategies that attract, engage, and convert. From content creation to lead nurturing, our data-driven approach delivers real results.',
  image: '/dm/services/inboundmarketing.webp' // Replace with your actual image path
};

whyUs:WhyUsModel= {
  title: 'Benefits of Inbound Marketing',
  description:`At Pencil Peel IMT, our team of experts understands the power of inbound marketing in driving business growth. By leveraging inbound marketing strategies, we will help you achieve the following benefits`,
  List:[
  {
    icon: 'pi pi-send',
    title: 'Increased Website Traffic',
    description: 'Our team will create valuable content that attracts qualified leads to your website, increasing the chances of conversion.',
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-user-plus',
    title: 'Improved Lead Generation',
    description: "We'll develop targeted content that resonates with your audience, capturing their contact information and generating high-quality leads.",
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-megaphone',
    title: 'Enhanced Brand Awareness',
    description: 'Our team will establish your brand as a thought leader in your industry, building trust and credibility through valuable content and strategic marketing.',
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-wallet',
    title: 'Cost-Effective',
    description: "We'll help you achieve your marketing goals through cost-effective inbound marketing strategies that deliver measurable results.",
    background: 'bg-orange-500',
    border: 'border-orange-500'
  }
]
}

inboundMarketingSteps = [
    {
      title: 'Content Creation',
      category: 'Attract',
      description: 'We\'ll create high-quality, relevant, and valuable content that resonates with your target audience and addresses their pain points and interests.',
      icon: 'pi pi-file-edit',
      color: 'orange',
      phase: 1,
      activities: [
        'Blog posts and articles creation',
        'Video content production',
        'Infographics and visual content design',
        'E-books and whitepapers development',
        'Content calendar planning and execution'
      ]
    },
    {
      title: 'Search Engine Optimization (SEO)',
      category: 'Attract',
      description: 'We\'ll optimize your website and content to rank higher in search engine results pages (SERPs) and increase organic visibility.',
      icon: 'pi pi-search',
      color: 'emerald',
      phase: 2,
      activities: [
        'Keyword research and analysis',
        'On-page SEO optimization',
        'Technical SEO improvements',
        'Link building strategies',
        'Local SEO optimization'
      ]
    },
    {
      title: 'Social Media Marketing',
      category: 'Engage',
      description: 'We\'ll leverage social media platforms to promote your content, engage with your audience, and build your brand community.',
      icon: 'pi pi-share-alt',
      color: 'blue',
      phase: 3,
      activities: [
        'Social media strategy development',
        'Content promotion and distribution',
        'Community engagement and management',
        'Social media advertising campaigns',
        'Influencer partnerships and collaborations'
      ]
    },
    {
      title: 'Email Marketing',
      category: 'Convert',
      description: 'We\'ll create targeted email campaigns that nurture leads through the sales funnel and drive conversions.',
      icon: 'pi pi-envelope',
      color: 'purple',
      phase: 4,
      activities: [
        'Email list building and segmentation',
        'Automated email sequence creation',
        'Newsletter design and content',
        'A/B testing for email optimization',
        'Lead nurturing campaign development'
      ]
    }
];

contactitle = 'Get in Touch with Us';
contactdescription = `By partnering with Pencil Peel IMT for inbound marketing services, you can attract, engage, and delight customers, driving leads and conversions that fuel business growth. Contact us today to learn more about our inbound marketing services.`;

  getMarkerClass(color: string): string {
    const colorMap = {
      'orange': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'emerald': 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600'
    };
    return colorMap[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getHeaderGradient(color: string): string {
    const gradientMap = {
      'orange': 'bg-gradient-to-r from-orange-500 to-orange-600',
      'emerald': 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      'blue': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'purple': 'bg-gradient-to-r from-purple-500 to-purple-600'
    };
    return gradientMap[color] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  }

  getActivityBg(color: string): string {
    const bgMap = {
      'orange': 'bg-orange-50 hover:bg-orange-100',
      'emerald': 'bg-emerald-50 hover:bg-emerald-100',
      'blue': 'bg-blue-50 hover:bg-blue-100',
      'purple': 'bg-purple-50 hover:bg-purple-100'
    };
    return bgMap[color] || 'bg-gray-50 hover:bg-gray-100';
  }

  getIconColor(color: string): string {
    const iconMap = {
      'orange': 'text-orange-500',
      'emerald': 'text-emerald-500',
      'blue': 'text-blue-500',
      'purple': 'text-purple-500'
    };
    return iconMap[color] || 'text-gray-500';
  }

  getToolBadge(color: string): string {
    const badgeMap = {
      'orange': 'bg-orange-100 text-orange-700 hover:bg-orange-200',
      'emerald': 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
      'blue': 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      'purple': 'bg-purple-100 text-purple-700 hover:bg-purple-200'
    };
    return badgeMap[color] || 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  }

  getProgressBar(color: string): string {
    const progressMap = {
      'orange': 'bg-gradient-to-r from-orange-500 to-orange-600',
      'emerald': 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      'blue': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'purple': 'bg-gradient-to-r from-purple-500 to-purple-600'
    };
    return progressMap[color] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  }

  getStatsBg(color: string): string {
    const statsBgMap = {
      'orange': 'bg-gradient-to-br from-orange-100 to-orange-200',
      'emerald': 'bg-gradient-to-br from-emerald-100 to-emerald-200',
      'blue': 'bg-gradient-to-br from-blue-100 to-blue-200',
      'purple': 'bg-gradient-to-br from-purple-100 to-purple-200'
    };
    return statsBgMap[color] || 'bg-gradient-to-br from-gray-100 to-gray-200';
  }

  getStatsText(color: string): string {
    const statsTextMap = {
      'orange': 'text-orange-600',
      'emerald': 'text-emerald-600',
      'blue': 'text-blue-600',
      'purple': 'text-purple-600'
    };
    return statsTextMap[color] || 'text-gray-600';
  }

  getTextColor(color: string): string {
    const textMap = {
      'orange': 'text-orange-600',
      'emerald': 'text-emerald-600',
      'blue': 'text-blue-600',
      'purple': 'text-purple-600'
    };
    return textMap[color] || 'text-gray-600';
  }

  getFlowCardBg(color: string): string {
    const flowBgMap = {
      'orange': 'bg-gradient-to-br from-orange-50 to-orange-100',
      'emerald': 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      'blue': 'bg-gradient-to-br from-blue-50 to-blue-100',
      'purple': 'bg-gradient-to-br from-purple-50 to-purple-100'
    };
    return flowBgMap[color] || 'bg-gradient-to-br from-gray-50 to-gray-100';
  }
}
