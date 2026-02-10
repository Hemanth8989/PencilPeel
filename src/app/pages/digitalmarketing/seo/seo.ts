import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Faqcards } from '../../../components/faqcards/faqcards';
import { FaqCardModel } from '../../../models/FaqCard';
import { Nocarouselherosection } from '../../../components/nocarouselherosection/nocarouselherosection';
import { Subservices } from "../../../components/subservices/subservices";
import { Whyus } from "../../../components/whyus/whyus";
import { WhyUsModel } from '../../../models/whyUs';
import { Title } from '@angular/platform-browser';
import { Quotes } from '../../../components/quotes/quotes';
@Component({
  selector: 'app-seo',
  imports: [ButtonModule, Faqcards, Nocarouselherosection, Subservices, Whyus, Quotes],
  templateUrl: './seo.html',
  styleUrl: './seo.scss'
})
export class Seo {
  //hero section
  herocontent: any = {
    title: `
      Unlock Your <br>
      <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        SEO SERVICE's
      </span>
      with 
      <span class="bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>.
    `,
    description: 'The Best SEO Service Provider in Hyderabad, INDIA.',
    image: '/dm/whatseo.webp'
  };

  quotes = [
    {text: "Unlock Your Online Potential - Expert SEO Services by Pencil Peel IMT"},
    {text: "Boost Your Search Engine Rankings with Pencil Peel IMT's Proven SEO Strategies"},
    {text: "SEO that Drives Real Results - Trust Pencil Peel IMT to Take Your Business to the Next Level"},
    {text: "Get Found, Get Ahead - Comprehensive SEO Services by Pencil Peel IMT"},
  ];
  //faq cards
  faqcards: FaqCardModel[] = [
    {
      id: 'f1',
      title: 'What is SEO?',
      description: 'We optimize your website’s content, structure, and technical elements to improve its visibility on search engines like Google.',
      fullDescription: 'SEO (Search Engine Optimization) involves enhancing your website’s content, structure, and technical aspects to rank higher in search engine results. By aligning with search engine algorithms, we boost your site’s relevance and authority, driving organic traffic and achieving measurable results.',
      expanded: false,
      image:'/dm/whatseo.webp'
    },
    {
      id: 'f2',
      title: 'How SEO Works?',
      description: ' We will align your website with these algorithms to improve its rankings.',
      fullDescription: `
  <p>Search engines use algorithms to analyse and rank web pages. We will align your website with these algorithms to improve its rankings.</p>
  <h4 class="mt-4 text-lg font-semibold">Keyword Research</h4>
  <p>We will identify the terms and phrases users are searching for, ensuring that your website is optimized for the right keywords.</p>
  <h4 class="mt-4 text-lg font-semibold">On-Page Optimization</h4>
  <p>Our team will optimize titles, headings, and meta tags, use keywords naturally in the content, and improve user experience (UX) through clear navigation and fast page speed.</p>
  <h4 class="mt-4 text-lg font-semibold">Off-Page Optimization</h4>
  <p>We will build backlinks (links from other reputable websites) and promote content through social media and other channels to increase your website's authority and ranking.</p>
  <h4 class="mt-4 text-lg font-semibold">Technical SEO</h4>
  <p>Our team will ensure that your website is mobile-friendly, fix broken links, improve site security (e.g., HTTPS), and create an XML sitemap and optimize robots.txt files.</p>
  <h4 class="mt-4 text-lg font-semibold">Content Creation</h4>
  <p>We will publish high-quality, relevant, and engaging content that satisfies user intent, driving traffic and conversions to your website.</p>
  <h4 class="mt-4 text-lg font-semibold">Monitoring and Analytics</h4>
  <p>Our team will use tools like Google Analytics and Google Search Console to track performance and make improvements, ensuring that your website continues to rank well and drive traffic.</p>
 `,
      expanded: false,
      image : null,
    },
    {
      id: 'f2',
      title: 'Benefits of SEO?',
      description: ' We will align your website with these algorithms to improve its rankings.',
      fullDescription: `
  <h4 class="text-lg font-semibold mt-4">Increased Visibility</h4>
  <p>We will increase your website's exposure to potential customers by improving its ranking on search engines.</p>

  <h4 class="text-lg font-semibold mt-4">Higher Traffic</h4>
  <p>Our team will drive more clicks and organic traffic to your website through effective SEO strategies.</p>

  <h4 class="text-lg font-semibold mt-4">Cost-Effectiveness</h4>
  <p>Unlike paid ads, organic traffic from SEO is free after the initial investment, providing a high return on investment.</p>

  <h4 class="text-lg font-semibold mt-4">Improved User Experience</h4>
  <p>We will optimize site speed, navigation, and mobile usability, benefiting both users and search engines.</p>

  <h4 class="text-lg font-semibold mt-4">Credibility and Trust</h4>
  <p>Higher rankings will lead users to perceive your website as more trustworthy, increasing credibility and trust.</p>

  <h4 class="text-lg font-semibold mt-4">Competitive Advantage</h4>
  <p>We will help you stay ahead of competitors in search rankings, gaining more market share and establishing your brand as a thought leader.</p>

  <h4 class="text-lg font-semibold mt-4">Long-Term Results</h4>
  <p>Our SEO efforts will continue to bring traffic and visibility over time, unlike paid ads that stop once the budget ends.</p>

  <h4 class="text-lg font-semibold mt-4">Local Reach</h4>
  <p>We will help businesses attract customers nearby through local SEO strategies.</p>

  <h4 class="text-lg font-semibold mt-4">Better ROI</h4>
  <p>Our team will deliver a high return on investment compared to other marketing methods.</p>

  <h4 class="text-lg font-semibold mt-4">Insight into Customer Behaviour</h4>
  <p>We will analyse keyword data and user behaviour to help you understand customer needs and preferences.</p>
`,
expanded:false,
image: null }
  ];
  subServiceTitle:string = "Pencil Peel IMT Provides SEO Services";
  subServicedescription:string = "At Pencil Peel IMT, we offer a comprehensive range of SEO services designed to improve your website's visibility, drive traffic, and increase conversions. Our team of experts will work with you to develop a customized SEO strategy that meets your business goals.";
  subServices:any[] = [
    {
      id: 'f2',
      title: 'Keyword Research',
      description: 'We identify relevant keywords and phrases to ensure your website reaches the right audience.',
      fullDescription: `
        <p><strong>Keyword Research</strong> is a foundational part of SEO that ensures your content aligns with what your audience is searching for.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Keyword Analysis:</strong> Our team analyses your website's existing content and identifies relevant keywords and search terms your audience is likely to use.</li>
          <li><strong>Keyword Research Tools:</strong> We utilize industry-leading tools to discover high-volume, low-competition keywords that give you the best chance to rank.</li>
        </ul>
        <p class="mt-3">This targeted approach helps increase search visibility, attract qualified traffic, and improve your site's overall SEO performance.</p>
      `,
      expanded: false,
      image: '/dm/keyword-research.webp'
    },
    {
      id: 'f3',
      title: 'On-Page Optimization',
      description: 'We optimize titles, meta descriptions, and headers to improve your website’s visibility and ranking.',
      fullDescription: `
        <p><strong>On-Page Optimization</strong> involves improving individual web pages to rank higher and earn more relevant traffic in search engines.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Title Tag Optimization:</strong> Accurately reflect each page's content to improve click-through rates.</li>
          <li><strong>Meta Description Optimization:</strong> Write compelling summaries that entice users to visit your site.</li>
          <li><strong>Header Tag Optimization:</strong> Structure content for readability and better indexing.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/onpage.webp'
    },
    {
      id: 'f4',
      title: 'Technical SEO',
      description: 'We enhance your website’s backend for speed, mobile-friendliness, and crawlability.',
      fullDescription: `
        <p><strong>Technical SEO</strong> focuses on optimizing the technical aspects of your website to ensure search engines can effectively crawl and index it.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Page Speed Optimization:</strong> Enhance performance for better UX and rankings.</li>
          <li><strong>Mobile Responsiveness:</strong> Ensure a seamless experience across all devices.</li>
          <li><strong>XML Sitemap:</strong> Help search engines understand your website structure.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/technical.webp'
    },
    {
      id: 'f5',
      title: 'Link Building',
      description: 'We build high-quality backlinks from authoritative sources to improve domain authority.',
      fullDescription: `
        <p><strong>Link Building</strong> improves your site’s authority through strategic acquisition of inbound links.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Guest Blogging:</strong> Publish valuable content on reputable websites.</li>
          <li><strong>Resource Pages:</strong> Create link-worthy content that earns backlinks.</li>
          <li><strong>Broken Link Building:</strong> Replace outdated or broken links with your relevant content.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/linkbuilding.webp'
    },
    {
      id: 'f6',
      title: 'Content Creation',
      description: 'We develop compelling content that engages your audience and boosts search rankings.',
      fullDescription: `
        <p><strong>Content Creation</strong> helps establish your brand authority and attract organic traffic through valuable, relevant, and consistent content.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Blog Posts:</strong> Share insights that inform and engage.</li>
          <li><strong>Article Writing:</strong> Establish thought leadership in your industry.</li>
          <li><strong>Content Marketing:</strong> Promote content strategically for traffic and conversions.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/content.webp'
    },
    {
      id: 'f7',
      title: 'Local SEO',
      description: 'We optimize your local presence to help nearby customers find your business easily.',
      fullDescription: `
        <p><strong>Local SEO</strong> ensures your business appears in local search results and map listings.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Google My Business Optimization:</strong> Improve visibility in local search.</li>
          <li><strong>Local Citations:</strong> Consistent listings across directories.</li>
          <li><strong>Location-Specific Content:</strong> Create content that appeals to your local audience.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/local.webp'
    },
    {
      id: 'f8',
      title: 'E-commerce SEO',
      description: 'We optimize your online store to ensure products are visible in search engines.',
      fullDescription: `
        <p><strong>E-commerce SEO</strong> boosts your online shop’s visibility and helps attract high-intent shoppers.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Product Page Optimization:</strong> Optimize titles, images, and descriptions.</li>
          <li><strong>Category Page Optimization:</strong> Improve internal structure and indexing.</li>
          <li><strong>Compelling Product Descriptions:</strong> Drive sales with persuasive content.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/ecommerce.webp'
    },
    {
      id: 'f9',
      title: 'SEO Audit',
      description: 'We conduct a full SEO audit and provide a strategy to fix issues and boost rankings.',
      fullDescription: `
        <p><strong>SEO Audit</strong> helps uncover gaps and technical flaws limiting your site’s potential.</p>
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Technical Audit:</strong> Find and fix performance issues.</li>
          <li><strong>Content Audit:</strong> Identify underperforming or duplicate content.</li>
          <li><strong>Link Audit:</strong> Remove toxic links and build quality ones.</li>
        </ul>
      `,
      expanded: false,
      image: '/dm/audit.webp'
    }








  ]

  whyUs:WhyUsModel ={
    title:'Benefits of SEO',
    description:`By partnering with Pencil Peel IMT, you can trust that you're working with a team of experts who are dedicated to delivering innovative SEO solutions that drive business growth. Contact us today to learn more about how we can help you achieve your business goals.`,
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

}
