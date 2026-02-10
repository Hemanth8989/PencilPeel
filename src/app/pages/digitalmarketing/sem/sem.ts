import { Component } from '@angular/core';
import { Whyus } from '../../../components/whyus/whyus';
import { Nocarouselherosection } from '../../../components/nocarouselherosection/nocarouselherosection';
import { Faqcards } from '../../../components/faqcards/faqcards';
import { Subservices } from '../../../components/subservices/subservices';
import { FaqCardModel } from '../../../models/FaqCard';
import { WhyUsModel } from '../../../models/whyUs';

@Component({
  selector: 'app-sem',
  imports: [Whyus, Nocarouselherosection, Faqcards, Subservices],
  templateUrl: './sem.html',
  styleUrl: './sem.scss'
})
export class Sem {
  herocontent: any = {
    title: `
      Unlock Your <br>
      <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        SEM Services
      </span>
      with 
      <span class="bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>.
    `,
    description: 'Ready to dominate paid search? Pencil Peel IMT delivers full-funnel SEM strategies—from keyword planning to conversion optimization—crafted to scale your success.',
    image: '/dm/sembg.webp'
  };
  // faqcards:FaqCardModel[]=[
  //   {
  //     id: 'f2',
  //     title: 'What is SEM?',
  //     description: 'We use paid advertising strategies like PPC and CPC to promote your business across search engines like Google and Bing.',
  //     fullDescription: `
  //       <p><strong>SEM</strong> (Search Engine Marketing) is a powerful form of online marketing that helps promote your website or business through paid advertisements on search engines such as Google, Bing, and Yahoo.</p>
  //       <p>After SEO sets the foundation, SEM is the next step in scaling visibility to a global market. At Pencil Peel IMT, our SEM strategies include paid search ads, PPC (Pay-Per-Click), CPC (Cost-Per-Click), and CPM (Cost-Per-Thousand Impressions), all designed to attract targeted visitors who are ready to engage.</p>
  //       <p>This approach is like buying potential customers' attention online—whether for your product, service, store, or even a film. Our experienced team ensures every ad spend works toward meaningful engagement and results. We're not just good at SEM—we excel at turning clicks into conversions.</p>
  //     `,
  //     expanded: false,
  //     image: '/dm/whatsem.webp'
  //   },

  // ]
  faqcards:FaqCardModel[] = [
  {
    id: 'sem1',
    title: 'Keyword Research',
    description: 'We identify high-volume, low-competition keywords aligned with your business goals and target audience.',
    fullDescription: `
      <p><strong>Keyword Research</strong> is the backbone of any successful SEM campaign. We identify relevant keywords and phrases that align with your business goals and target audience.</p>
      <ul class="list-disc pl-6">
        <li><strong>Keyword analysis:</strong> We analyze your website’s content and find high-performing, relevant keywords.</li>
        <li><strong>Keyword research tools:</strong> We utilize tools like Google Keyword Planner, Ahrefs, and SEMrush to identify keywords that drive traffic and conversions.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/sem-keyword.webp'
  },
  {
    id: 'sem2',
    title: 'Ad Copy Creation',
    description: 'We write compelling ad copy that speaks to your audience and drives engagement and conversions.',
    fullDescription: `
      <p><strong>Ad Copy Creation</strong> is where creativity meets strategy. We craft clear, concise, and high-converting messages tailored to your audience.</p>
      <ul class="list-disc pl-6">
        <li><strong>Ad copywriting:</strong> We write ads that highlight your USP and engage potential customers.</li>
        <li><strong>Ad copy testing:</strong> Our team tests different variations to discover the best-performing messages.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/sem-copy.webp'
  },
  {
    id: 'sem3',
    title: 'Bid Management',
    description: 'We manage and optimize your bidding strategies to maximize ROI and reduce wasted ad spend.',
    fullDescription: `
      <p><strong>Bid Management</strong> ensures you're getting the most from every dollar spent. Our strategic bidding boosts ad visibility without overspending.</p>
      <ul class="list-disc pl-6">
        <li><strong>Bid optimization:</strong> We adjust bids based on performance to improve results.</li>
        <li><strong>Bid management tools:</strong> Tools like Google Ads and Microsoft Advertising help us automate and refine bidding.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/sem-bidding.webp'
  },
  {
    id: 'sem4',
    title: 'Ad Optimizations',
    description: 'We fine-tune your ads and targeting to boost performance, conversions, and overall campaign success.',
    fullDescription: `
      <p><strong>Ad Optimization</strong> keeps your campaigns effective and relevant. We regularly test and update your ads to maintain high performance.</p>
      <ul class="list-disc pl-6">
        <li><strong>Ad rotation:</strong> Keeps ads fresh and prevents performance drop-off.</li>
        <li><strong>Ad extension:</strong> We use site links, callouts, and more to increase ad visibility and clickability.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/sem-optimization.webp'
  },
  {
    id: 'sem5',
    title: 'Performance Tracking',
    description: 'We track and analyze your campaign performance with data-driven insights to maximize ROI.',
    fullDescription: `
      <p><strong>Performance Tracking</strong> is essential for continuous improvement. We monitor results and adjust strategy based on real-time data.</p>
      <ul class="list-disc pl-6">
        <li><strong>Performance metrics:</strong> We track key metrics like CTR, conversion rate, and ROAS.</li>
        <li><strong>Data analysis:</strong> Our experts analyze trends to identify growth opportunities and reduce waste.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/sem-performance.webp'
  }
];
  subServiceTitle:string = ' Search Engine Marketing (SEM) Services';
  subServicedescription:string = 'At Pencil Peel IMT, we specialize in providing comprehensive SEM services designed to help businesses like yours succeed online. Our team of experts has extensive experience in creating and managing SEM campaigns that drive real results.';
  subServices:any[]  = [
  {
    id: 'f3',
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'We create ad campaigns where you pay only when users click, maximizing efficiency and ROI.',
    fullDescription: `
      <p><strong>Pay-Per-Click (PPC)</strong> advertising is a model where you pay only when someone clicks your ad. It’s one of the fastest ways to attract targeted traffic.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Cost Efficiency:</strong> Only pay for actual engagement, not impressions.</li>
        <li><strong>Immediate Visibility:</strong> Appear at the top of search results instantly.</li>
      </ul>
      <p class="mt-3">We design and manage PPC campaigns that drive clicks, leads, and conversions without wasted ad spend.</p>
    `,
    expanded: false,
    image: '/dm/ppc-ads.webp'
  },
  {
    id: 'f4',
    title: 'Google Ads',
    description: 'We create targeted ad campaigns on Google to increase visibility and conversions across search and display networks.',
    fullDescription: `
      <p><strong>Google Ads</strong> allow your business to appear at the top of Google search results and across Google’s partner websites.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Search Ads:</strong> Text-based ads triggered by user searches.</li>
        <li><strong>Display Ads:</strong> Visual ads shown across Google’s Display Network.</li>
      </ul>
      <p class="mt-3">Our Google Ads strategies are built to generate clicks, increase conversions, and reduce your cost-per-acquisition.</p>
    `,
    expanded: false,
    image: '/dm/google-ads.webp'
  },
  {
    id: 'f5',
    title: 'Bing Ads',
    description: 'We manage Bing Ads to help you tap into additional audiences across Microsoft’s platforms.',
    fullDescription: `
      <p><strong>Bing Ads</strong> are a great complement to Google Ads, providing lower competition and access to Microsoft’s audience base.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Cost-Effective:</strong> Generally lower CPC than Google Ads.</li>
        <li><strong>Audience Expansion:</strong> Reach users across Bing, Yahoo, and MSN platforms.</li>
      </ul>
      <p class="mt-3">We create Bing ad campaigns that broaden your reach and deliver measurable results with less competition.</p>
    `,
    expanded: false,
    image: '/dm/bing-ads.webp'
  },
  {
    id: 'f6',
    title: 'Shopping Ads',
    description: 'We run product-based ads that appear directly in search results, perfect for e-commerce growth.',
    fullDescription: `
      <p><strong>Shopping Ads</strong> showcase your products with images, pricing, and store details right in search results.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Visual Appeal:</strong> Show product images, price, and name instantly.</li>
        <li><strong>Qualified Leads:</strong> Attract users who are actively looking to buy.</li>
      </ul>
      <p class="mt-3">Ideal for e-commerce businesses looking to increase sales and product visibility on platforms like Google and Bing.</p>
    `,
    expanded: false,
    image: '/dm/shopping-ads.webp'
  },
  {
    id: 'f7',
    title: 'Display Ads',
    description: 'We design visually engaging ads that appear across websites and apps to build brand awareness and retarget users.',
    fullDescription: `
      <p><strong>Display Ads</strong> are image or video-based ads shown across a wide range of websites and apps.</p>
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Wide Reach:</strong> Appear on news sites, blogs, and apps your audience uses.</li>
        <li><strong>Retargeting:</strong> Bring back visitors who didn’t convert the first time.</li>
      </ul>
      <p class="mt-3">We create compelling display ad campaigns to build brand visibility, generate interest, and boost conversions.</p>
    `,
    expanded: false,
    image: '/dm/display-ads.webp'
  }
];
whyUs:WhyUsModel = {
  title:'Benefits of SEM Services',
  description:'By partnering with Pencil Peel IMT, Our SEM experts build campaigns that speak to your audience and align perfectly with your business goals.',
  List :[
  {
    icon: 'pi pi-eye',
    title: 'Increased Visibility',
    description: "We'll increase your online visibility, making it more likely that potential customers will find your business.",
    background: 'bg-yellow-200',
    border: 'border-yellow-300'
  },
  {
    icon: 'pi pi-bullseye',
    title: 'Targeted Advertising',
    description: "We'll target specific keywords, demographics, and geographic locations to reach your desired audience.",
    background: 'bg-red-100',
    border: 'border-red-300'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Measurable Results',
    description: "We'll track and measure the performance of your advertising with metrics like clicks, conversions, and ROAS.",
    background: 'bg-green-100',
    border: 'border-green-300'
  },
  {
    icon: 'pi pi-sliders-h',
    title: 'Flexible & Scalable',
    description: "We'll easily customize and scale your SEM campaigns to meet your evolving business needs.",
    background: 'bg-blue-100',
    border: 'border-blue-300'
  },
  {
    icon: 'pi pi-shield',
    title: 'Competitive Advantage',
    description: "We'll leverage the latest SEM trends and tools to stay ahead of your competitors.",
    background: 'bg-orange-100',
    border: 'border-orange-300'
  },
  {
    icon: 'pi pi-star',
    title: 'Improved Brand Credibility',
    description: "We'll enhance your brand's credibility by increasing online visibility and authority.",
    background: 'bg-amber-100',
    border: 'border-amber-300'
  },
  {
    icon: 'pi pi-comments',
    title: 'Enhanced Engagement',
    description: "SEM drives targeted traffic to your site, increasing customer engagement and conversions.",
    background: 'bg-purple-100',
    border: 'border-purple-300'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Better ROI Tracking',
    description: "We’ll help you track your return on investment through clear, measurable campaign data.",
    background: 'bg-lime-100',
    border: 'border-lime-300'
  },
  {
    icon: 'pi pi-shopping-cart',
    title: 'Increased Sales',
    description: "We’ll boost your online sales by targeting specific audiences and driving qualified traffic.",
    background: 'bg-teal-100',
    border: 'border-teal-300'
  },
  {
    icon: 'pi pi-clock',
    title: 'Real-Time Results',
    description: "Monitor campaign performance in real-time and make instant adjustments to maximize impact.",
    background: 'bg-sky-100',
    border: 'border-sky-300'
  },
  {
    icon: 'pi pi-send',
    title: 'Targeted Reach',
    description: "SEM enables precise targeting based on demographics, interests, and behaviors.",
    background: 'bg-fuchsia-100',
    border: 'border-fuchsia-300'
  },
  {
    icon: 'pi pi-wallet',
    title: 'Flexible Ad Spend',
    description: "Set your own budget and scale up or down as needed—perfect for any business size.",
    background: 'bg-indigo-100',
    border: 'border-indigo-300'
  },
  {
    icon: 'pi pi-database',
    title: 'Data-Driven Insights',
    description: "We analyze campaign data to refine your strategy and better understand your audience.",
    background: 'bg-emerald-100',
    border: 'border-emerald-300'
  },
  {
    icon: 'pi pi-trophy',
    title: 'Competitive Edge',
    description: "By leveraging SEM, we help you outrank competitors and reach your audience first.",
    background: 'bg-rose-100',
    border: 'border-rose-300'
  },
  {
    icon: 'pi pi-chart-pie',
    title: 'Measurable Performance',
    description: "We provide detailed reports on campaign effectiveness to guide future strategies.",
    background: 'bg-cyan-100',
    border: 'border-cyan-300'
  }
  ]
}
wcutitle:string = 'Why Choose Pencil Peel IMT for SEM Services?';


}
