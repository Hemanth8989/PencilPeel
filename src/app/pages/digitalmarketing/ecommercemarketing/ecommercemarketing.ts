import { Component } from '@angular/core';
import { FaqCardModel } from '../../../models/FaqCard';
import { Subservices } from '../../../components/subservices/subservices';
import { Nocarouselherosection } from '../../../components/nocarouselherosection/nocarouselherosection';
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from '../../../components/whyus/whyus';
import { Quotes } from "../../../components/quotes/quotes";

@Component({
  selector: 'app-ecommercemarketing',
  imports: [Subservices, Nocarouselherosection, Whyus, Quotes],
  templateUrl: './ecommercemarketing.html',
  styleUrl: './ecommercemarketing.scss'
})
export class Ecommercemarketing {
  herocontent: any = {
    title: `
       <h2 class="text-base text-gray-100 font-semibold tracking-wide uppercase">Unlock the Power</h2>
       <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        E-commerce Marketing with Pencil Peel IMT
      </span>
    `,
    description: 'At Pencil Peel IMT, we specialize in providing comprehensive e-commerce marketing services to help businesses like yours thrive in the digital landscape. Our team of experts is dedicated to driving growth, increasing revenue, and building a loyal customer base for our clients.',
    image: '/dm/ecom/ecommercemarketing.webp'
  };
  quotes = [
   {text: "E-commerce Marketing that Drives Real Results - Partner with Pencil Peel IMT"},
   {text: "Unlock Your Online Potential - Expert E-commerce Marketing Solutions"},
   {text: "Grow Your Business, Boost Your Sales - E-commerce Marketing by Pencil Peel IMT"},
   {text: "Digital Marketing for E-commerce Success - Trust Pencil Peel IMT to Deliver"}
  ]
  subServiceTitle:string = 'Our E-commerce Marketing Services';
  subServicedescription:string = '';
  subServices: FaqCardModel[] = [
  {
    id: 'ec1',
    title: 'Search Engine Optimization (SEO)',
    description: 'We optimize your product pages and website structure to drive organic traffic and improve visibility.',
    fullDescription: `
      <p><strong>SEO for E-commerce</strong> focuses on optimizing your product listings, category pages, and site structure to rank higher on search engines. This increases visibility and brings more potential buyers to your store.</p>
    `,
    expanded: false,
    image: '/ecom/seo.webp'
  },
  {
    id: 'ec2',
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'We run strategic PPC campaigns to drive targeted traffic and maximize your return on ad spend.',
    fullDescription: `
      <p><strong>Our PPC services</strong> involve creating and managing high-converting ad campaigns on platforms like Google Ads and Bing. We focus on keyword targeting, bid optimization, and A/B testing to ensure strong ROI and conversion rates.</p>
    `,
    expanded: false,
    image: '/ecom/ppc.webp'
  },
  {
    id: 'ec3',
    title: 'Content Marketing',
    description: 'We produce engaging content like blogs, videos, and infographics to attract and convert customers.',
    fullDescription: `
      <p><strong>Content marketing</strong> helps establish your brand’s authority and build trust with your audience. We create valuable content that supports SEO efforts, answers buyer questions, and leads them toward making a purchase.</p>
    `,
    expanded: false,
    image: '/ecom/content.webp'
  },
  {
    id: 'ec4',
    title: 'Email Marketing',
    description: 'We build personalized email campaigns to increase repeat purchases and customer loyalty.',
    fullDescription: `
      <p><strong>Email marketing</strong> keeps your brand top-of-mind for past and potential buyers. From abandoned cart recovery to product recommendations, we deliver tailored messages that drive conversions and lifetime value.</p>
    `,
    expanded: false,
    image: '/ecom/email.webp'
  },
  {
    id: 'ec5',
    title: 'Social Media Marketing',
    description: 'We use social platforms to promote your products and connect with your audience in meaningful ways.',
    fullDescription: `
      <p><strong>Social media marketing</strong> builds brand awareness, generates engagement, and drives sales through organic and paid campaigns. We craft strategies tailored to platforms like Instagram, Facebook, and TikTok.</p>
    `,
    expanded: false,
    image: '/ecom/social-media.webp'
  },
  {
    id: 'ec6',
    title: 'Affiliate Marketing',
    description: 'We create and manage affiliate partnerships to expand your sales reach and boost revenue.',
    fullDescription: `
      <p><strong>Affiliate marketing</strong> allows you to scale your traffic through trusted third-party partners who earn commissions for driving sales. We handle recruitment, communication, and performance tracking.</p>
    `,
    expanded: false,
    image: '/ecom/affiliate.webp'
  },
  {
    id: 'ec7',
    title: 'Retargeting and Remarketing',
    description: 'We bring back visitors who didn’t convert with strategic ad retargeting techniques.',
    fullDescription: `
      <p><strong>Retargeting and remarketing</strong> keep your products in front of users who left your site without buying. We use dynamic ads to re-engage them on platforms like Google Display Network and social media.</p>
    `,
    expanded: false,
    image: '/ecom/retargeting.webp'
  },
  {
    id: 'ec8',
    title: 'Mobile Marketing',
    description: 'We optimize your e-commerce experience for mobile to improve usability and conversion rates.',
    fullDescription: `
      <p><strong>Mobile marketing</strong> ensures your store works flawlessly on smartphones and tablets. We optimize navigation, speed, and responsiveness while tailoring campaigns specifically for mobile behavior.</p>
    `,
    expanded: false,
    image: '/ecom/mobile.webp'
  },
  {
    id: 'ec9',
    title: 'Customer Reviews and Testimonials',
    description: 'We help collect and showcase customer feedback to build trust and credibility.',
    fullDescription: `
      <p><strong>Social proof</strong> is vital in e-commerce. We help you gather verified reviews and display testimonials effectively across your site to increase buyer confidence and influence decision-making.</p>
    `,
    expanded: false,
    image: '/ecom/reviews.webp'
  },
  {
    id: 'ec10',
    title: 'Conversion Rate Optimization (CRO)',
    description: 'We test and improve site elements to convert more visitors into paying customers.',
    fullDescription: `
      <p><strong>Conversion Rate Optimization (CRO)</strong> uses analytics and A/B testing to identify friction points in your funnel. We refine product pages, checkout flows, CTAs, and more to increase your sales without extra ad spend.</p>
    `,
    expanded: false,
    image: '/ecom/cro.webp'
  }
  ];
  whyUs:WhyUsModel = {
    title:'Benefits of Partnering with Pencil Peel',
    description: ``,
    List:[
  {
    icon: 'pi pi-users',
    title: 'Increased Traffic',
    description: 'Our targeted strategies will attract a larger audience to your online store.',
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-dollar',
    title: 'Boosted Sales and Revenue',
    description: 'Our campaigns will encourage conversions and higher average order values.',
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-star',
    title: 'Brand Awareness',
    description: 'We\'ll position your e-commerce store as a recognizable brand in the market.',
    background: 'bg-yellow-500',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-globe',
    title: 'Global Reach',
    description: 'Our services will expand your audience beyond local markets, reaching customers worldwide.',
    background: 'bg-indigo-500',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-wallet',
    title: 'Cost-Effectiveness',
    description: 'Many of our e-commerce marketing strategies offer high returns with minimal cost.',
    background: 'bg-teal-500',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Data-Driven Insights',
    description: 'We\'ll provide analytics to track customer behaviour, campaign performance, and areas for improvement.',
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-user-edit',
    title: 'Personalized Marketing',
    description: 'Our team will tailor recommendations and communications to individual customer preferences.',
    background: 'bg-pink-500',
    border: 'border-pink-500'
  },
  {
    icon: 'pi pi-refresh',
    title: 'Customer Retention',
    description: 'We\'ll engage past customers with loyalty programs and exclusive deals.',
    background: 'bg-orange-500',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Competitive Advantage',
    description: 'Our services will showcase your unique value proposition to potential customers.',
    background: 'bg-cyan-500',
    border: 'border-cyan-500'
  },
  {
    icon: 'pi pi-sliders-h',
    title: 'Flexibility and Scalability',
    description: 'We\'ll scale campaigns and budgets based on demand, seasons, or growth goals.',
    background: 'bg-red-500',
    border: 'border-red-500'
  }]
  }

}
