import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { FaqCardModel } from '../../../models/FaqCard';
import { Faqcards } from "../../../components/faqcards/faqcards";
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Contactus } from "../../../components/contactus/contactus";

@Component({
  selector: 'app-content',
  imports: [Nocarouselherosection, Faqcards, CommonModule, CardModule, Contactus],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {
  herocontent: any = {
  title: `
    <h2 class="text-base text-gray-100 font-semibold tracking-wide uppercase">Unlock the Power</h2>
    <span class="bg-gradient-to-r from-green-500 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold tracking-tight">
      Content Marketing Services with Pencil Peel IMT
    </span>
  `,
  description: `At Pencil Peel IMT, we offer comprehensive content marketing services designed to help businesses like yours achieve success and growth. Our team of experts will work with you to develop a customized content marketing strategy that resonates with your target audience and drives profitable customer action.`,
  image: '/dm/content/contenthome.webp' // Replace with your actual image path
};

faqcards:FaqCardModel[]=[
  {
  id: 'cm1',
  title: 'What is Content Marketing?',
  description: 'Content marketing is a strategic approach to digital marketing that focuses on creating and distributing valuable, relevant, and consistent content.',
  fullDescription: `Content marketing is a strategic approach to digital marketing that focuses on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. We will help you build trust, drive traffic, generate leads, and improve your online presence.`,
  expanded: false,
  image: '/dm/content/what-is-content-marketing.webp' // Update this path if needed
},
{
  id: 'cm-benefits',
  title: 'Benefits of Content Marketing',
  description: 'Content marketing offers a range of powerful advantages to help your business grow and thrive in the digital space.',
  fullDescription: `
    <ul class="list-disc pl-5 space-y-2 text-gray-700">
      <li><strong>Builds Trust:</strong> We will establish your brand as a thought leader and build trust with your audience.</li>
      <li><strong>Drives Traffic:</strong> Our team will attract and drive traffic to your website, increasing visibility and reach.</li>
      <li><strong>Generates Leads:</strong> We will nurture leads and encourage conversions, driving business growth.</li>
      <li><strong>Improves SEO:</strong> Our content marketing strategy will enhance search engine optimization, increasing your website's visibility in search results.</li>
      <li><strong>Increased Brand Awareness:</strong> We will increase brand awareness by providing valuable and relevant content that resonates with your target audience.</li>
      <li><strong>Improved Customer Engagement:</strong> Our team will create engaging content that encourages customer interaction, builds relationships, and fosters a sense of community around your brand.</li>
      <li><strong>Enhanced Credibility:</strong> We will establish your brand as a credible and trustworthy source of information by consistently producing high-quality content.</li>
      <li><strong>Better Customer Insights:</strong> Our content marketing strategy will provide valuable insights into customer behaviour, preferences, and pain points, helping you refine your marketing strategy.</li>
      <li><strong>Cost-Effective:</strong> We will use content marketing as a cost-effective way to reach and engage with your target audience.</li>
      <li><strong>Long-Term Results:</strong> Our content marketing strategy will provide long-term results, as high-quality content continues to attract and engage audiences over time.</li>
      <li><strong>Increased Conversions:</strong> We will nurture leads and encourage conversions, driving business growth.</li>
      <li><strong>Competitive Advantage:</strong> Our team will help you stand out from the competition and establish your brand as a thought leader in your industry.</li>
      <li><strong>Improved Customer Retention:</strong> We will build strong relationships with customers, improving customer retention and loyalty.</li>
      <li><strong>Measurable Results:</strong> Our team will track performance and analyse data to refine your strategy and optimize results.</li>
    </ul>
  `,
  expanded: false,
  image: '/dm/content/benefits-content-marketing.webp' // Replace with your actual image path if needed
}

]

contentMarketingTypes = [
  {
    title: 'Blog Posts',
    image: '/dm/content/cblog.webp',
    items: [
      'Informative articles that showcase your expertise and provide value to your audience.',
      'Industry insights and trends.',
      'Thought leadership pieces.',
      'Educational content for your target audience.'
    ]
  },
  {
    title: 'Social Media Content',
    image: '/dm/content/csocialmedcontent.webp',
    items: [
      'Engaging posts to foster community engagement.',
      'Campaigns that promote your brand and products.',
      'Social media community management.'
    ]
  },
  {
    title: 'Videos',
    image: '/dm/content/cvideos.webp',
    items: [
      'Explainer videos that showcase your products or services.',
      'Product demos with key features.',
      'Customer testimonial videos.'
    ]
  },
  {
    title: 'E-books and Whitepapers',
    image: '/dm/content/cebook.webp',
    items: [
      'In-depth industry reports.',
      'Comprehensive e-books.',
      'Whitepapers with detailed analysis and insights.'
    ]
  },
  {
    title: 'Infographics',
    image: '/dm/content/cinfographics.webp',
    items: [
      'Visual representations of data and insights.',
      'Easy-to-share, engaging visual content.',
      'Data visualization for complex concepts.'
    ]
  },
  {
    title: 'Webinars and Online Events',
    image: '/dm/content/cwebinar.webp',
    items: [
      'Interactive webinars with valuable insights.',
      'Online events to build brand awareness.',
      'Establishing thought leadership.'
    ]
  },
  {
    title: 'Case Studies',
    image: '/dm/content/ccasestudies.webp',
    items: [
      'Real-life examples of product or service success.',
      'Trust-building customer stories.',
      'Impact demonstrations for potential clients.'
    ]
  },
  {
    title: 'Podcasts',
    image: '/dm/services/podcastmarketing.webp',
    items: [
      'Informative or entertaining audio content.',
      'Consistent audience engagement.',
      'Flexible, on-the-go learning formats.'
    ]
  },
  {
    title: 'User-Generated Content (UGC)',
    image: '/dm/content/cugc.webp',
    items: [
      'Customer reviews and testimonials.',
      'Social posts created by users.',
      'Community-driven content strategy.'
    ]
  },
  {
    title: 'Email Newsletters',
    image: '/dm/content/cemailnews.webp',
    items: [
      'Regular updates with tips or offers.',
      'Email marketing strategy and automation.',
      'Consistent brand touchpoints.'
    ]
  },
  {
    title: 'Interactive Quizzes',
    image: '/dm/content/cquiz.webp',
    items: [
      'Personalized quizzes to understand audience needs.',
      'Lead generation through interactive content.',
      'Data-driven quiz analysis.'
    ]
  },
  {
    title: 'Behind-the-Scenes Content',
    image: '/dm/content/cbehind.webp',
    items: [
      'Company culture and team highlights.',
      'Authentic storytelling techniques.',
      'Transparency that builds connection.'
    ]
  },
  {
    title: 'Testimonials',
    image: '/dm/content/ctestimonials.webp',
    items: [
      'Customer testimonials for credibility.',
      'Video and written success stories.',
      'Prominent display across channels.'
    ]
  },
  {
    title: 'Live Streaming',
    image: '/dm/content/clivestram.webp',
    items: [
      'Real-time audience interaction.',
      'Exclusive product reveals or Q&A sessions.',
      'High-engagement content.'
    ]
  },
  {
    title: 'Gamification',
    image: '/dm/content/cgamification.webp',
    items: [
      'Interactive campaigns with game-like mechanics.',
      'Points, badges, rewards systems.',
      'Fun and engaging audience participation.'
    ]
  }
];

//contact us

contactustitle:string = 'Contact us today';
contactusdescription:string = `By partnering with Pencil Peel IMT, you can trust that you're working with a team of experts who are dedicated to helping you succeed. Contact us today to learn more about our content marketing services and how we can help your business grow.`;

}
