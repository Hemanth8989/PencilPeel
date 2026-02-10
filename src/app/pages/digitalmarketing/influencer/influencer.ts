import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Contactus } from "../../../components/contactus/contactus";
import { WhyUsModel } from '../../../models/whyUs';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Faqcards } from "../../../components/faqcards/faqcards";
import { FaqCardModel } from '../../../models/FaqCard';
import { CommonModule } from '@angular/common';
import { Quotes } from "../../../components/quotes/quotes";

@Component({
  selector: 'app-influencer',
  imports: [CardModule, Contactus, Nocarouselherosection, Faqcards, CommonModule, Quotes],
  templateUrl: './influencer.html',
  styleUrl: './influencer.scss'
})
export class Influencer {
  
  //hero content
  herocontent: any = {
    title: `
     Unlock your Business Growth with <br>
      <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        Influencer Marketing with Pencil Peel IMT
      </span>
    `,
    description: `
      In today's digital age, influencer marketing has become a powerful tool for businesses to reach their target audience and promote their products or services. At Pencil Peel IMT, we specialize in creating effective influencer marketing campaigns that drive results.
    `,
    image: '/dm/inf/infhome.webp'
  };

  quotes = [
    {text: "Influencer Marketing: Where Authenticity Meets Amplification - Pencil Peel IMT"},
    {text: "Elevate Your Brand with Influencer Marketing: Reach, Resonate, and Convert - Pencil Peel IMT"},
    {text: "The Power of Influence: Unlock New Markets, Drive Sales, and Build Credibility - Pencil Peel IMT"},
    {text: "Influencer Marketing: The Art of Storytelling, Amplified - Pencil Peel IMT"},
    {text: "Partner with Pencil Peel IMT for Influencer Marketing that Sparks Conversations and Drives Results"},
    {text: "Influencer Marketing: The New Word-of-Mouth Marketing that Drives Business Growth - Pencil Peel IMT"}

  ]
  //faq section
  faqcards:FaqCardModel[] =[
    {
      id: 'inf1',
      title: 'What is Influencer Marketing?',
      description: 'Influencer marketing involves partnering with individuals who have a large and engaged following on social media or other online platforms.',
      fullDescription: `At Pencil Peel IMT, we understand the power of influencer marketing in promoting products, brands, new launches, and companies. Influencer marketing is a form of marketing where brands partner with influencers who have a large and engaged following on social media or other online platforms. These influencers can help promote your product or service to their audience, increasing brand awareness, driving website traffic, and generating sales.`,
      expanded: false,
      image: '/dm/influencer/what-is-influencer-marketing.webp'
    },
    {
    id: 'inf-key-aspects',
    title: 'Key Aspects of Influencer Marketing',
    description: 'At Pencil Peel IMT, Our team of experts will work with you to develop a customized influencer marketing strategy that meets your business goals.',
    fullDescription: `
      At Pencil Peel IMT, we understand the importance of influencer marketing in promoting your brand, products, and services. Our team of experts will work with you to develop a customized influencer marketing strategy that meets your business goals.

      <strong>Influencer Identification:</strong> We will identify influencers who align with your brand values, target audience, and marketing goals. Our team will research and select influencers who have a genuine interest in your brand or industry.<br><br>

      <strong>Content Creation:</strong> We will work with influencers to create sponsored content that showcases your product or service in an authentic and engaging way. Our team will ensure that the content is high-quality, relevant, and resonates with the target audience.<br><br>

      <strong>Reach and Engagement:</strong> We will partner with influencers who have a large and engaged following, allowing your brand to reach a wider audience and drive engagement. Our team will track the performance of the influencer marketing campaign to ensure that it meets your business goals.<br><br>

      <strong>Brand Awareness:</strong> We will help increase brand awareness, credibility, and trust among your target audience through influencer marketing. Our team will work with influencers to create content that showcases your brand's unique value proposition.<br><br>

      <strong>Product Promotion:</strong> We will work with influencers to promote your product or service to their followers, driving sales and revenue. Our team will track the performance of the product promotion and provide regular reports to ensure that you're getting the best possible results.
    `,
    expanded: false,
    image: '/dm/influencer/key-aspects.webp' // Replace with correct image path
  }
  ]
  //whyus
  whyUs:WhyUsModel ={
    title:'Benefits of Influencer Marketing',
    description:'',
    List: [
    {
      icon: 'pi pi-bolt',
      title: 'Immediate Results',
      description: "Our PPC campaigns can drive traffic to your site as soon as they're live.",
      background: 'bg-red-500',
      border: 'border-red-500'
    },
    {
      icon: 'pi pi-sliders-h',
      title: 'Highly Targeted',
      description: "We'll target specific demographics, locations, devices, and user interests to reach your ideal audience.",
      background: 'bg-blue-600',
      border: 'border-blue-600'
    },
    {
      icon: 'pi pi-chart-bar',
      title: 'Measurable and Trackable',
      description: "Our team will provide regular performance reports, enabling you to track ROI and make data-driven decisions.",
      background: 'bg-purple-600',
      border: 'border-purple-600'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Cost-Effective',
      description: "You'll only pay for actual clicks, ensuring maximum ROI.",
      background: 'bg-green-600',
      border: 'border-green-600'
    },
    {
      icon: 'pi pi-eye',
      title: 'Improved Brand Visibility',
      description: "Our campaigns will increase your brand's visibility, even if users don't click.",
      background: 'bg-yellow-500',
      border: 'border-yellow-500'
    },
    {
      icon: 'pi pi-refresh',
      title: 'Increased Flexibility',
      description: "Our PPC campaigns can be adjusted and optimized in real-time to ensure maximum ROI.",
      background: 'bg-teal-500',
      border: 'border-teal-500'
    },
    {
      icon: 'pi pi-shield',
      title: 'Enhanced Competitiveness',
      description: "We'll help you stay ahead of your competitors and establish your brand as an industry leader.",
      background: 'bg-orange-600',
      border: 'border-orange-600'
    },
    {
      icon: 'pi pi-desktop',
      title: 'Improved Website Experience',
      description: "Our team will optimize your website to ensure a seamless user experience and maximize conversions.",
      background: 'bg-indigo-600',
      border: 'border-indigo-600'
    },
    {
      icon: 'pi pi-database',
      title: 'Valuable Insights',
      description: "We'll provide you with actionable insights and data to inform your marketing strategy.",
      background: 'bg-pink-600',
      border: 'border-pink-600'
    },
    {
      icon: 'pi pi-sort-amount-up',
      title: 'Scalability',
      description: "Our PPC campaigns can be scaled up or down to meet your business needs.",
      background: 'bg-cyan-600',
      border: 'border-cyan-600'
    }
  ]
  }
  //timeline
  timeline:any[]= [
  {
    icon: 'pi pi-user-plus',
    title: 'Identify the Right Influencers',
    description: 'We identify influencers who align with your brand values and target audience.',
    color: 'bg-indigo-500',
  },
  {
    icon: 'pi pi-cog',
    title: 'Customized Strategy',
    description: 'We develop a customized influencer marketing strategy that meets your specific marketing goals and objectives.',
    color: 'bg-teal-500',
  },
  {
    icon: 'pi pi-comments',
    title: 'Manage Influencer Relationships',
    description: 'We manage relationships with influencers, ensuring that they create high-quality content that meets your brand\'s standards.',
    color: 'bg-pink-500',
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Track and Measure Results',
    description: 'We track and measure the success of your influencer marketing campaign, providing you with valuable insights and analytics.',
    color: 'bg-orange-500',
  }
];

influencerBenefits = [
  {
    title: 'Increased Reach',
    description:
      'We will help you reach a larger audience and increase your brand’s visibility through influencer marketing. Our team will partner with influencers who have a significant following in your niche or industry.',
    icon: 'pi pi-globe'
  },
  {
    title: 'Targeted Marketing',
    description:
      'Influencers have a specific niche or audience, allowing us to target your marketing efforts more effectively. We will work with you to identify influencers who align with your brand values and target audience.',
    icon: 'pi pi-filter'
  },
  {
    title: 'Authentic Content',
    description:
      'Influencers create authentic content that resonates with their followers, increasing the likelihood of engagement and conversion. Our team will work with influencers to create high-quality content that showcases your product or service in an authentic and engaging way.',
    icon: 'pi pi-star'
  },
  {
    title: 'Cost-Effective',
    description:
      'Influencer marketing can be more cost-effective than traditional forms of marketing, such as advertising. We will work with you to develop a customized influencer marketing strategy that fits your budget and meets your business goals.',
    icon: 'pi pi-wallet'
  }
];


additionalBenefits = [
  'Increase brand awareness: We will increase your brand awareness, making it easier for customers to find and engage with your brand.',
  'Drive traffic and conversions: Our team will drive traffic to your website, increasing conversions and sales.',
  'Build a strong brand reputation: We will help you build a strong brand reputation by partnering with influencers who align with your brand values.',
  'Building Anticipation: We will help you build anticipation and excitement for your product launch by partnering with influencers who can create buzz around your product.',
  'Product Showcase: Our team will work with influencers to showcase your product in a real-world setting, giving your target audience a glimpse into how it works and its benefits.',
  'Social Proof: Influencers can provide social proof for your product by sharing their experiences and opinions with their followers. This can help increase trust and credibility for your brand.',
  'Increased Conversions: By partnering with influencers who have a loyal following, we can drive conversions and sales for your product launch.',
  'Long-Term Impact: Influencer marketing can have a long-term impact on your brand\'s visibility and credibility. Our team will work with you to develop a customized influencer marketing strategy that meets your long-term business goals.'
];

influencerProcess = [
  {
    title: 'Identify the Right Influencers',
    description:
      'We identify influencers who align with your brand values and target audience.'
  },
  {
    title: 'Develop a Customized Influencer Marketing Strategy',
    description:
      'We develop a customized influencer marketing strategy that meets your specific marketing goals and objectives.'
  },
  {
    title: 'Manage Influencer Relationships',
    description:
      'We manage relationships with influencers, ensuring that they create high-quality content that meets your brand\'s standards.'
  },
  {
    title: 'Track and Measure Results',
    description:
      'We track and measure the success of your influencer marketing campaign, providing you with valuable insights and analytics.'
  }
];


  //contactus
  contacttitle:string = ` Get Started with Pencil Peel IMT Today`;
  contactdescription:string = `We have many influencers who promote various fields and reach out to people, boasting the highest followings on social media across the country and the world. Through them, we are proud to promote your company or your product or even the service you are providing, and be a part of giving you reach and success for your business.`;
}
