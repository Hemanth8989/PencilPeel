import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { FaqCardModel } from '../../../models/FaqCard';
import { Faqcards } from "../../../components/faqcards/faqcards";
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { Contactus } from '../../../components/contactus/contactus';

@Component({
  selector: 'app-linkbuilding',
  imports: [Nocarouselherosection, Faqcards, CardModule, CommonModule, Whyus,Contactus],
  templateUrl: './linkbuilding.html',
  styleUrl: './linkbuilding.scss'
})
export class Linkbuilding {
  herocontent = {
  title: `
    Strengthen Your SEO with Powerful 
    <span class="bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 bg-clip-text text-transparent font-bold tracking-tight">
      Link Building Services
    </span> 
    by 
    <span class="bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'Boost your online visibility and domain authority with high-quality link building strategies. Our experts at Pencil Peel IMT help you drive more traffic and build lasting credibility.',
  image: '/dm/services/linkbuilding.webp' // Update this to your actual image path
  };
  faqcards:FaqCardModel[] = [
    {
    id: 'f2',
    title: 'What is Link Building?',
    description: 'We help you acquire high-quality backlinks that improve your site’s authority and visibility in search engines.',
    fullDescription: 'Link building is the process of acquiring high-quality backlinks from other reputable websites to your own. These links act as trust signals to search engines, boosting your domain authority, improving rankings, increasing organic traffic, and enhancing overall visibility.',
    expanded: false,
    image: '/dm/linkbuilding.webp' // Replace with the correct image path if needed
  },
  {
    id: 'f3',
    title: 'Why Link Building is Essential for Your Business',
    description: 'Link building is a crucial part of digital marketing that boosts visibility, credibility, and organic traffic.',
    fullDescription: `
      <p>Link building is an essential part of any digital marketing strategy. By acquiring high-quality backlinks, you can:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Improve your website's search engine rankings.</li>
        <li>Increase your online visibility and credibility.</li>
        <li>Drive more traffic to your website.</li>
        <li>Stay ahead of the competition.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/linkbuilding-essential.webp' // Update as needed
  }


  ]
  linkServices: any[] = [
      {
        title: 'Manual Link Building',
        description: 'We\'ll manually build high-quality backlinks from reputable websites to your website, improving your online visibility and credibility.',
        icon: 'pi pi-link',
        color: 'emerald',
        category: 'Active Building'
      },
      {
        title: 'Guest Blogging',
        description: 'We\'ll create high-quality guest posts for other websites, including a link back to your website, to increase your online presence and drive targeted traffic.',
        icon: 'pi pi-file-edit',
        color: 'green',
        category: 'Active Building'
      },
      {
        title: 'Resource Pages',
        description: 'We\'ll create resource pages on our website that link to your website, providing a valuable source of backlinks and improving your website\'s authority.',
        icon: 'pi pi-bookmark',
        color: 'teal',
        category: 'Active Building'
      },
      {
        title: 'Broken Link Building',
        description: 'We\'ll find broken links on other websites and replace them with working links to your website, providing a quick and effective way to build high-quality backlinks.',
        icon: 'pi pi-wrench',
        color: 'cyan',
        category: 'Active Building'
      },
      {
        title: 'Infographic Link Building',
        description: 'We\'ll create high-quality infographics that link back to your website, providing a visually appealing way to build backlinks and drive traffic.',
        icon: 'pi pi-image',
        color: 'blue',
        category: 'Active Building'
      },
      {
        title: 'Testimonial Link Building',
        description: 'We\'ll help you get featured on other websites through testimonials, providing a valuable source of backlinks and improving your online reputation.',
        icon: 'pi pi-star',
        color: 'indigo',
        category: 'Active Building'
      },
      {
        title: 'Competitor Link Analysis',
        description: 'We\'ll analyse your competitors\' link profiles and identify opportunities for your business to build high-quality backlinks.',
        icon: 'pi pi-search-plus',
        color: 'purple',
        category: 'Analysis'
      },
      {
        title: 'Link Audits',
        description: 'We\'ll conduct a thorough audit of your website\'s link profile, identifying and removing any low-quality or spammy links that could be harming your website\'s credibility.',
        icon: 'pi pi-shield',
        color: 'pink',
        category: 'Maintenance'
      }
  ];
  serviceCategories: any[] = [
    {
      title: 'Active Link Building',
      description: 'Manual, guest blogging, resource pages, broken link building, infographics, and testimonials',
      icon: 'pi pi-link',
      color: 'emerald',
      count: '6 Services'
    },
    {
      title: 'Analysis & Strategy',
      description: 'Competitor analysis to identify link building opportunities and strategic planning',
      icon: 'pi pi-search-plus',
      color: 'purple',
      count: 'Strategic Insights'
    },
    {
      title: 'Maintenance & Protection',
      description: 'Comprehensive link audits and profile cleanup to maintain healthy backlinks',
      icon: 'pi pi-shield',
      color: 'pink',
      count: 'Quality Assurance'
    }
  ];
  whyUs: WhyUsModel = {
    title: 'Why Choose Our Link Building Services?',
    description:``,
    List:[
  {
    icon: 'pi pi-sort-amount-up',
    title: 'Improved Search Engine Rankings',
    description: "We create high-quality backlinks to help improve your website's search rankings and attract more organic visitors.",
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-shield',
    title: 'Increased Credibility',
    description: "Backlinks from authoritative sources boost your website’s credibility and trustworthiness in the eyes of users and search engines.",
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-users',
    title: 'More Traffic',
    description: "Drive more visitors to your site through strategic backlinks placed on relevant and high-traffic websites.",
    background: 'bg-indigo-500',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-globe',
    title: 'Increased Online Visibility',
    description: "Expand your brand's presence and reach with improved visibility across search engines and online platforms.",
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-compass',
    title: 'Targeted Traffic',
    description: "We acquire backlinks from niche-relevant sources to ensure the traffic reaching your site is highly targeted.",
    background: 'bg-cyan-500',
    border: 'border-cyan-500'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Improved Brand Awareness',
    description: "Gain more brand recognition by appearing across multiple credible sites and platforms through backlinks.",
    background: 'bg-pink-500',
    border: 'border-pink-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Competitive Advantage',
    description: "Outperform competitors by building a stronger, more diverse backlink profile that boosts your authority.",
    background: 'bg-orange-500',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-calendar-plus',
    title: 'Long-term Results',
    description: "Sustain long-term SEO growth and traffic through permanent, high-quality backlink strategies.",
    background: 'bg-teal-500',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Improved Website Authority',
    description: "Earn trust from search engines by improving your domain authority through quality link building.",
    background: 'bg-lime-500',
    border: 'border-lime-500'
  },
  {
    icon: 'pi pi-shopping-cart',
    title: 'Increased Conversions',
    description: "Attract visitors more likely to convert into leads and customers through strategically placed backlinks.",
    background: 'bg-red-500',
    border: 'border-red-500'
  }
]

  }
  contacttitle = `Get Started with Pencil Peel IMT Link Building Services`;
  contactdescription = `Contact us today to learn more about our link building services and how we can help your business thrive. Let's work together to improve your online presence, increase credibility, and drive more traffic to your website.`;
  getServiceCardClass(color: string): string {
    const cardClasses = {
      'emerald': 'manual-card',
      'green': 'guest-card',
      'teal': 'resource-card',
      'cyan': 'broken-card',
      'blue': 'infographic-card',
      'indigo': 'testimonial-card',
      'purple': 'competitor-card',
      'pink': 'audit-card'
    };
    return cardClasses[color] || 'link-service-card';
  }
  getHeaderClass(color: string): string {
    const headerClasses = {
      'emerald': 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      'green': 'bg-gradient-to-br from-green-500 to-green-600',
      'teal': 'bg-gradient-to-br from-teal-500 to-teal-600',
      'cyan': 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'indigo': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'pink': 'bg-gradient-to-br from-pink-500 to-pink-600'
    };
    return headerClasses[color] || 'bg-gradient-to-br from-gray-500 to-gray-600';
  }

  getCategoryBgClass(color: string): string {
    const bgClasses = {
      'emerald': 'bg-gradient-to-br from-emerald-50 to-green-50',
      'purple': 'bg-gradient-to-br from-purple-50 to-indigo-50',
      'pink': 'bg-gradient-to-br from-pink-50 to-rose-50'
    };
    return bgClasses[color] || 'bg-gradient-to-br from-gray-50 to-gray-100';
  }

  getCategoryIconBgClass(color: string): string {
    const iconBgClasses = {
      'emerald': 'bg-emerald-100',
      'purple': 'bg-purple-100',
      'pink': 'bg-pink-100'
    };
    return iconBgClasses[color] || 'bg-gray-100';
  }

  getCategoryIconClass(color: string): string {
    const iconClasses = {
      'emerald': 'text-emerald-600',
      'purple': 'text-purple-600',
      'pink': 'text-pink-600'
    };
    return iconClasses[color] || 'text-gray-600';
  }

  getCategoryTextClass(color: string): string {
    const textClasses = {
      'emerald': 'text-emerald-600',
      'purple': 'text-purple-600',
      'pink': 'text-pink-600'
    };
    return textClasses[color] || 'text-gray-600';
  }

  getLinkBuildingQuote(): void {
    // Handle get quote action
    console.log('Getting link building quote');
    // Add your navigation or form opening logic here
  }

  getFreeLinkAudit(): void {
    // Handle free audit request
    console.log('Requesting free link audit');
    // Add your navigation or form opening logic here
  }

  // Optional: Method to get services by category
  getServicesByCategory(category: string): any[] {
    return this.linkServices.filter(service => service.category === category);
  }

  // Optional: Method to get service count by category
  getServiceCountByCategory(category: string): number {
    return this.linkServices.filter(service => service.category === category).length;
  }

}
