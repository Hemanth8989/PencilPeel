import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { FaqCardModel } from '../../../models/FaqCard';
import { Faqcards } from "../../../components/faqcards/faqcards";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { Contactus } from "../../../components/contactus/contactus";
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brandmanagment',
  imports: [Nocarouselherosection, Faqcards, Whyus, Contactus,CardModule,CommonModule],
  templateUrl: './brandmanagment.html',
  styleUrl: './brandmanagment.scss'
})
export class Brandmanagment {
  herocontent: any = {
    title: `
      Brand Management Service <br>
      <span class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        in Digital Marketing
      </span> 
      with 
      <span class="bg-gradient-to-r from-purple-700 via-pink-400 to-purple-600 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
    description: `At Pencil Peel IMT, our team of experts specializes in Brand Management Services that help businesses like yours build and maintain a strong online presence. Our brand management services are designed to increase brand awareness, improve brand reputation, and drive business results.`,
    image: '/dm/brandmgt/brandmgthome.webp'  // Replace with your actual image path
  };
  faqcards: FaqCardModel[] = [
    {
      id: 'brand1',
      title: 'What is Brand Management?',
      description: 'Brand management involves creating and maintaining a brand\'s image, voice, and messaging across all digital channels.',
      fullDescription: `Brand management involves creating and maintaining a brand's image, voice, and messaging consistently across all digital channels, including social media, websites, email marketing, and more, to build trust and strengthen customer relationships.`,
      expanded: false,
      image: '/dm/brand-management/what-is-brand-management.webp'  // update with actual path
    },
    {
      id: 'brand2',
      title: 'Why is Brand Management Essential for Businesses?',
      description: 'Brand management builds trust, enhances loyalty, and sets your business apart from competitors.',
      fullDescription: `Brand management is essential for businesses because it builds trust and credibility, creates a positive brand image, drives customer loyalty, and helps differentiate your business from competitors. A well-managed brand is more likely to be recognized, remembered, and recommended.`,
      expanded: false,
      image: '/dm/brand-management/why-brand-management.webp'  // Update to your actual image path
    }, {
  id: 'brand3',
  title: 'Benefits of Brand Management with Pencil Peel',
  description: 'Discover how effective brand management with Pencil Peel IMT can transform your business.',
  fullDescription: `
    <div class="space-y-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
      <p>
        At <strong class="text-orange-600">Pencil Peel</strong>, our team of experts can help you achieve the following benefits through effective brand management:
      </p>
      <ul class="list-disc list-inside space-y-2">
        <li>
          <strong class="text-orange-500">Increased Brand Awareness:</strong> We create a strong brand presence that boosts visibility and awareness among potential customers.
        </li>
        <li>
          <strong class="text-orange-500">Improved Brand Reputation:</strong> We ensure consistency and quality across digital channels to improve reputation and position your business as a trusted authority.
        </li>
        <li>
          <strong class="text-orange-500">Increased Customer Loyalty:</strong> A positive brand image and consistent experience help retain and engage loyal customers.
        </li>
        <li>
          <strong class="text-orange-500">Competitive Advantage:</strong> A tailored brand strategy sets your business apart in a crowded market.
        </li>
        <li>
          <strong class="text-orange-500">Consistency Across Channels:</strong> Unified messaging and visuals build trust and recognition across platforms.
        </li>
        <li>
          <strong class="text-orange-500">Increased Trust:</strong> A cohesive and professional brand fosters trust with potential customers.
        </li>
        <li>
          <strong class="text-orange-500">Better Customer Experience:</strong> A well-managed brand delivers a more intuitive, satisfying, and memorable customer journey.
        </li>
        <li>
          <strong class="text-orange-500">Improved Employee Engagement:</strong> Strong branding internally boosts morale, motivation, and retention.
        </li>
        <li>
          <strong class="text-orange-500">Increased Brand Value:</strong> A respected brand attracts investors and strategic partners.
        </li>
        <li>
          <strong class="text-orange-500">Enhanced Credibility:</strong> Establish yourself as a thought leader through polished, consistent brand messaging.
        </li>
        <li>
          <strong class="text-orange-500">Better Differentiation:</strong> Highlight what makes your business unique to stand out in your industry.
        </li>
      </ul>
    </div>
  `,
  expanded: false,
  image: '/dm/brand-management/benefits-of-brand-management.webp'
}

  ];
  whyUs:WhyUsModel={
    title:'Our Brand Management Services At Pencil Peel IMT',
    description:'At Pencil Peel IMT, we offer a range of Brand Management Services designed to help businesses like yours succeed online. Our services include',
    List: [
  {
    icon: 'pi pi-compass',
    title: 'Brand Strategy Development',
    description: "We'll develop a customized brand strategy tailored to your business goals and objectives.",
    background: 'bg-purple-600',
    border: 'border-purple-600'
  },
  {
    icon: 'pi pi-palette',
    title: 'Brand Identity Creation',
    description: "We'll create a strong visual identity that reflects your values and mission.",
    background: 'bg-pink-600',
    border: 'border-pink-600'
  },
  {
    icon: 'pi pi-comment',
    title: 'Brand Messaging',
    description: "Clear, consistent brand messaging that resonates with your target audience.",
    background: 'bg-blue-600',
    border: 'border-blue-600'
  },
  {
    icon: 'pi pi-send',
    title: 'Social Media Management',
    description: "We manage and schedule engaging social media content across platforms.",
    background: 'bg-teal-600',
    border: 'border-teal-600'
  },
  {
    icon: 'pi pi-shield',
    title: 'Reputation Management',
    description: "We monitor and manage your online reputation to ensure a positive brand image.",
    background: 'bg-red-600',
    border: 'border-red-600'
  },
  {
    icon: 'pi pi-search',
    title: 'Brand Audit',
    description: "We conduct a full audit of your brand’s presence to uncover growth opportunities.",
    background: 'bg-indigo-600',
    border: 'border-indigo-600'
  },
  {
    icon: 'pi pi-star',
    title: 'Brand Positioning',
    description: "We define your brand’s unique positioning to stand out from competitors.",
    background: 'bg-yellow-600',
    border: 'border-yellow-600'
  },
  {
    icon: 'pi pi-file',
    title: 'Brand Guidelines',
    description: "We provide detailed brand guidelines to ensure consistency across all channels.",
    background: 'bg-gray-700',
    border: 'border-gray-700'
  },
  {
    icon: 'pi pi-video',
    title: 'Content Creation',
    description: "We produce high-quality content that aligns with your brand voice and message.",
    background: 'bg-green-600',
    border: 'border-green-600'
  },
  {
    icon: 'pi pi-users',
    title: 'Influencer Management',
    description: "We connect your brand with influencers to expand your reach and credibility.",
    background: 'bg-orange-500',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-exclamation-triangle',
    title: 'Crisis Management',
    description: "We create a crisis response plan to protect your brand’s reputation online.",
    background: 'bg-rose-600',
    border: 'border-rose-600'
  },
  {
    icon: 'pi pi-eye',
    title: 'Brand Monitoring',
    description: "We track brand mentions, reviews, and sentiment to maintain a positive image.",
    background: 'bg-sky-600',
    border: 'border-sky-600'
  }
    ]
  }
  contacttitle:string = `Get Started with Pencil Peel IMT Brand Management Services`;
  contactdescription:string = `Contact us today to learn more about our brand management services and how we can help your business thrive. Let's work together to build and maintain a strong online presence for your brand.`;


  industry:any ={
    title: 'Industries We Serve',
    description: 'We provide brand management services across various industries, including:',
  }
  industries: Industry[] = [
    {
      id: 'healthcare',
      title: 'Healthcare Department',
      icon: 'pi pi-heart-fill',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-500',
      image: '/dm/industries/ihospital.webp',
      alt: 'Healthcare Industry',
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
      services: [
        {
          title: 'Hospitals and Clinics',
          description: 'We help hospitals and clinics build a strong brand presence and establish trust with potential patients.'
        },
        {
          title: 'Pharmaceutical Companies',
          description: 'Our team creates brand management strategies that showcase the benefits and features of pharmaceutical products.'
        }
      ]
    },
    {
      id: 'technology',
      title: 'Technology Sector',
      icon: 'pi pi-desktop',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-500',
      image: '/dm/industries/itech.webp',
      alt: 'Technology Sector',
      colSpan: 'col-span-1',
      services: [
        {
          title: 'Software Companies',
          description: 'Build strong brand presence and drive sales through effective brand management.'
        },
        {
          title: 'Tech Start-ups',
          description: 'Showcase benefits and features of tech products and services.'
        }
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Services',
      icon: 'pi pi-shopping-cart',
      iconColor: 'text-green-600',
      borderColor: 'border-green-500',
      image: '/dm/industries/iecommerce.webp',
      alt: 'E-commerce Services',
      colSpan: 'col-span-1',
      services: [
        {
          title: 'Online Retailers',
          description: 'Build strong brand presence and drive sales through effective management.'
        },
        {
          title: 'E-commerce Platforms',
          description: 'Showcase benefits and features of e-commerce platforms.'
        }
      ]
    },
    {
      id: 'financial',
      title: 'Financial Services',
      icon: 'pi pi-dollar',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-500',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      alt: 'Financial Services',
      colSpan: 'col-span-1',
      services: [
        {
          title: 'Banks and Credit Unions',
          description: 'Build strong brand presence and establish trust with potential customers.'
        },
        {
          title: 'Investment Firms',
          description: 'Showcase benefits and features of investment products and services.'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education Sector',
      icon: 'pi pi-book',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-500',
      image: 'industries/education.webp',
      alt: 'Education Sector',
      colSpan: 'col-span-1',
      services: [
        {
          title: 'Universities and Colleges',
          description: 'Build strong brand presence and attract top students.'
        },
        {
          title: 'Online Course Providers',
          description: 'Showcase benefits and features of online courses.'
        }
      ]
    },
    {
      id: 'retail',
      title: 'Retail Industry',
      icon: 'pi pi-shopping-bag',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-500',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      alt: 'Retail Industry',
      colSpan: 'col-span-1',
      services: [
        {
          title: 'Department Stores',
          description: 'Build strong brand presence and drive sales through effective management.'
        },
        {
          title: 'Specialty Retailers',
          description: 'Showcase benefits and features of specialty products.'
        }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing Industry',
      icon: 'pi pi-cog',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      alt: 'Manufacturing Industry',
      colSpan: 'col-span-1',
      services: [
        {
          title: 'Industrial Manufacturers',
          description: 'Build strong brand presence and drive sales through effective management.'
        },
        {
          title: 'Product Manufacturers',
          description: 'Showcase benefits and features of products.'
        }
      ]
    },
    {
      id: 'automotive',
      title: 'Automotive Industry',
      icon: 'pi pi-car',
      iconColor: 'text-red-600',
      borderColor: 'border-red-500',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      alt: 'Automotive Industry',
      colSpan: 'col-span-1',
      services: [
        {
          title: 'Car Dealerships',
          description: 'Build strong brand presence and attract potential customers.'
        },
        {
          title: 'Automotive Manufacturers',
          description: 'Showcase benefits and features of vehicles.'
        }
      ]
    }
  ];

}
