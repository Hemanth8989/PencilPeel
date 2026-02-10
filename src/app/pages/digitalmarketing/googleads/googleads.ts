import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Contactus } from "../../../components/contactus/contactus";
import { FaqCardModel } from '../../../models/FaqCard';
import { Subservices } from "../../../components/subservices/subservices";
import { Faqcards } from "../../../components/faqcards/faqcards";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";

@Component({
  selector: 'app-googleads',
  imports: [CardModule, Contactus, Subservices, Faqcards, Whyus, Nocarouselherosection],
  templateUrl: './googleads.html',
  styleUrl: './googleads.scss'
})
export class Googleads {
  herocontent = {
  title: `
    Unlock your 
    <span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold tracking-tight">
      Google Ads Management Services
    </span>
    with 
    <span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>
  `,
  description: 'We help businesses reach their target audience, increase traffic, and generate leads through expert Google Ads management services.',
  image: '/dm/services/googleads.webp' // Replace with your actual image path
};

  faqCards: FaqCardModel[] = [
    {
      id: 'google-ads-management',
      title: 'What is Google Ads Management?',
      description: 'It’s the process of planning, running, and optimizing Google Ads to achieve your marketing goals.',
      fullDescription: `
        <div class="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>
            <strong>Google Ads Management</strong> involves the strategic creation and ongoing optimization of ad campaigns on Google’s advertising platform. 
            It’s designed to help businesses reach their target audience, drive traffic, and increase conversions.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Keyword Research:</strong> Identify high-performing search terms that align with your business goals.</li>
            <li><strong>Ad Copywriting:</strong> Create compelling ad text that attracts clicks and encourages action.</li>
            <li><strong>Bid Management:</strong> Manage bids effectively to maximize return on ad spend (ROAS).</li>
            <li><strong>Campaign Optimization:</strong> Continuously analyze and adjust campaigns for improved performance.</li>
          </ul>
          <p>
            With professional Google Ads management, you can ensure that every dollar you spend contributes to measurable results and business growth.
          </p>
        </div>
      `,
      expanded: false,
      image: '/dm/google-ads/what-is-google-ads-management.webp' // Replace with the correct image path
    },
    {
      id: 'google-ads-essential',
      title: 'Why Google Ads Management is Essential for Businesses',
      description: 'It helps businesses improve visibility, generate traffic, and drive revenue through paid search.',
      fullDescription: `
        <div class="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          <p>
            <strong>Google Ads Management</strong> plays a crucial role in digital marketing success by ensuring your advertising spend delivers real results.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Increases Online Visibility:</strong> Appear at the top of search results and reach potential customers exactly when they’re searching for your products or services.</li>
            <li><strong>Drives Targeted Traffic:</strong> Attract users with high intent through strategic keyword targeting and audience segmentation.</li>
            <li><strong>Provides Measurable Results:</strong> Track every click, impression, and conversion to refine your strategy based on data.</li>
            <li><strong>Increases Conversions and Revenue:</strong> Optimized campaigns lead to more leads, sales, and return on investment (ROI).</li>
          </ul>
          <p>
            With expert Google Ads management, businesses gain a competitive edge in the digital landscape and maximize their marketing efficiency.
          </p>
        </div>
      `,
      expanded: false,
      image: '/dm/google-ads/why-google-ads-is-essential.webp' // Replace with your actual asset path
    }
  ]
  whyUs:WhyUsModel={
    title:'Benefits of Google Ads Management',
    description:``,
    List:[
  {
    icon: 'pi pi-eye',
    title: 'Increased Online Visibility',
    description: 'Google Ads boosts your visibility so customers can find your business more easily.',
    background: 'bg-yellow-500',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-users',
    title: 'Targeted Advertising',
    description: 'Reach the right audience through precise targeting options to improve conversions.',
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Measurable Results',
    description: 'Track clicks, impressions, and conversions to make informed, data-driven decisions.',
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Increased Conversions',
    description: 'Drive more leads, sales, and revenue by optimizing your ad campaigns.',
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-star',
    title: 'Increased Brand Awareness',
    description: 'Improve brand recall and exposure to new customers through consistent ad visibility.',
    background: 'bg-pink-500',
    border: 'border-pink-500'
  },
  {
    icon: 'pi pi-send',
    title: 'Improved Website Traffic',
    description: 'Bring qualified visitors to your website and increase engagement with your content.',
    background: 'bg-indigo-500',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-map-marker',
    title: 'Enhanced Local Presence',
    description: 'Promote your business to nearby users and boost foot traffic with local targeting.',
    background: 'bg-red-500',
    border: 'border-red-500'
  },
  {
    icon: 'pi pi-flag',
    title: 'Competitive Advantage',
    description: 'Outrank your competitors and reach customers before they do.',
    background: 'bg-orange-500',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-cog',
    title: 'Flexibility and Control',
    description: 'Easily adjust your budget, targeting, and ads in real time for better performance.',
    background: 'bg-gray-700',
    border: 'border-gray-700'
  },
  {
    icon: 'pi pi-database',
    title: 'Data-Driven Decision Making',
    description: 'Use performance analytics to continually improve your ad strategy.',
    background: 'bg-cyan-500',
    border: 'border-cyan-500'
  },
  {
    icon: 'pi pi-wallet',
    title: 'Increased Return on Ad Spend',
    description: 'Maximize revenue with highly optimized campaigns and smart bidding strategies.',
    background: 'bg-lime-500',
    border: 'border-lime-500'
  }
    ]
  }
  //services
  servicetitle:string = `Pencil Peel’s Google Ads Management Services`;
  servicedescription:string = `At Pencil Peel IMT, we offer a range of Google Ads management services designed to help businesses like yours succeed online. Our services include`;
  subservices: FaqCardModel[] = [
    {
      id: 'ads1',
      title: 'Google Ads Campaign Setup',
      description: 'Comprehensive setup including keyword research, ad creation, and bid strategy.',
      fullDescription: `
        <p><strong>Google Ads Campaign Setup</strong> is the foundation for a successful PPC strategy.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Keyword Research:</strong> We identify the most effective keywords to target your ideal audience.</li>
          <li><strong>Ad Copywriting:</strong> Our team writes compelling ad copy that captures attention and drives clicks.</li>
          <li><strong>Bid Management:</strong> We set smart bids to maximize ROI while minimizing costs.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/campaign-setup.webp'
    },
    {
      id: 'ads2',
      title: 'Google Ads Optimization',
      description: 'Ongoing improvements to your campaign performance across all touchpoints.',
      fullDescription: `
        <p><strong>Google Ads Optimization</strong> helps ensure your ads are performing at their best.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Bid Adjustments:</strong> Optimize bids by device, location, time of day, and more.</li>
          <li><strong>Ad Copy Testing:</strong> Test and refine ad variations for higher CTR and conversions.</li>
          <li><strong>Landing Page Optimization:</strong> Improve page experience to drive better results.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/optimization.webp'
    },
    {
      id: 'ads3',
      title: 'Google Ads Reporting',
      description: 'Track performance with detailed reports and metrics that matter.',
      fullDescription: `
        <p><strong>Google Ads Reporting</strong> provides clear insights into your ad performance and ROI.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Click-Through Rate (CTR):</strong> Monitor how effectively your ads attract clicks.</li>
          <li><strong>Conversion Rate:</strong> Understand how well your ads convert visitors into customers.</li>
          <li><strong>Return on Ad Spend (ROAS):</strong> Evaluate the profitability of your campaigns.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/reporting.webp'
    },
    {
      id: 'ads4',
      title: 'Google Ads Consulting',
      description: 'Expert advice on strategy, targeting, and bidding to refine your PPC success.',
      fullDescription: `
        <p><strong>Google Ads Consulting</strong> gives you strategic direction for better results.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Campaign Structure:</strong> Build scalable and efficient campaigns.</li>
          <li><strong>Targeting Advice:</strong> Reach the right people at the right time.</li>
          <li><strong>Bid Strategy:</strong> Choose the optimal bidding models for your goals.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/consulting.webp'
    },
    {
      id: 'ads5',
      title: 'Google Ads Account Setup',
      description: 'We’ll configure your Google Ads and link your analytics for better tracking.',
      fullDescription: `
        <p><strong>Google Ads Account Setup</strong> ensures your advertising starts from a strong technical foundation.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Manager Account Creation:</strong> Set up centralized account control.</li>
          <li><strong>Billing Configuration:</strong> Enable payment methods and budgets.</li>
          <li><strong>Analytics Integration:</strong> Link Google Analytics for conversion insights.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/account-setup.webp'
    },
    {
      id: 'ads6',
      title: 'Keyword Research and Planning',
      description: 'Identify high-impact keywords aligned with your business goals.',
      fullDescription: `
        <p><strong>Keyword Research and Planning</strong> help you find the most relevant and profitable keywords.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Search Intent Matching:</strong> Align keyword selection with user intent.</li>
          <li><strong>Competitive Analysis:</strong> Identify gaps and opportunities in your niche.</li>
          <li><strong>Volume & Cost Metrics:</strong> Prioritize based on search volume and CPC.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/keyword-planning.webp'
    },
    {
      id: 'ads7',
      title: 'Ad Copywriting and Creation',
      description: 'We craft persuasive ad copy that captures attention and drives clicks.',
      fullDescription: `
        <p><strong>Ad Copywriting and Creation</strong> ensures your ads stand out in a crowded marketplace.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Headline Writing:</strong> Grab attention with clear, benefit-focused headlines.</li>
          <li><strong>Ad Descriptions:</strong> Inspire action and convey value in just a few words.</li>
          <li><strong>URL Display Optimization:</strong> Build trust through clean, relevant URLs.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/copywriting.webp'
    },
    {
      id: 'ads8',
      title: 'Bid Management and Optimization',
      description: 'Maximize your ad budget with smart, data-driven bid strategies.',
      fullDescription: `
        <p><strong>Bid Management and Optimization</strong> focus on making the most of your ad spend.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Device & Location Adjustments:</strong> Target where conversions are most likely.</li>
          <li><strong>Audience-Based Bidding:</strong> Optimize bids for your most valuable segments.</li>
          <li><strong>Budget Allocation:</strong> Shift spend to top-performing campaigns.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/bid-optimization.webp'
    },
    {
      id: 'ads9',
      title: 'Ad Extension Management',
      description: 'Boost your visibility with enhanced ad features and extensions.',
      fullDescription: `
        <p><strong>Ad Extension Management</strong> enhances your ads with extra information and engagement options.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Sitelinks:</strong> Link users to specific pages within your website.</li>
          <li><strong>Callouts:</strong> Highlight key benefits and offers.</li>
          <li><strong>Call Extensions:</strong> Make it easy for users to call your business directly.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/extensions.webp'
    },
    {
      id: 'ads10',
      title: 'Conversion Tracking and Measurement',
      description: 'Understand your ROI with accurate conversion tracking setup.',
      fullDescription: `
        <p><strong>Conversion Tracking and Measurement</strong> give you the data you need to make smart marketing decisions.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Tag Installation:</strong> Implement conversion tags across your site.</li>
          <li><strong>Event Tracking:</strong> Monitor key actions like purchases, signups, or calls.</li>
          <li><strong>Reporting:</strong> Visualize data to assess and improve campaign performance.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/conversion-tracking.webp'
    },
    {
      id: 'ads11',
      title: 'Google Ads Audit and Analysis',
      description: 'We identify issues and opportunities for improving your campaigns.',
      fullDescription: `
        <p><strong>Google Ads Audit and Analysis</strong> uncover strengths and weaknesses in your current setup.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Account Review:</strong> Evaluate structure, settings, and best practices.</li>
          <li><strong>Performance Analysis:</strong> Identify what's working and what isn't.</li>
          <li><strong>Strategic Recommendations:</strong> Provide a roadmap for campaign improvement.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/google-ads/audit-analysis.webp'
    }
  ];
  contacttitle:string =`Get Started with Pencil Peel IMT Google Ads Management Services`;
  contactdescription:string = `Contact us today to learn more about our Google Ads management services and how we can help your business thrive. Let's work together to maximize your online visibility, increase website traffic, and generate leads.`;
}
