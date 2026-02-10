import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { FaqCardModel } from '../../../models/FaqCard';
import { Faqcards } from '../../../components/faqcards/faqcards';
import { Subservices } from "../../../components/subservices/subservices";
import { Quotes } from "../../../components/quotes/quotes";

@Component({
  selector: 'app-aiintegrations',
  imports: [Nocarouselherosection, Faqcards, Subservices, Quotes],
  templateUrl: './aiintegrations.html',
  styleUrl: './aiintegrations.scss'
})
export class Aiintegrations {
  herocontent: any = {
    title: `
      <h2 class="text-base text-gray-100 font-semibold tracking-wide uppercase">Unlock the Power</h2>
       <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        AI Integrations for Digital Marketing Services with Pencil Peel IMT
      </span>
    `,
    description: `At Pencil Peel IMT, we're at the forefront of innovation in Digital Marketing, leveraging the power of Artificial Intelligence (AI) to revolutionize how businesses approach their online presence.`,
    image: '/dm/aidm/aiintegratehome1.webp'
  };

  quotes = [
    {text: "Intelligent Marketing, Intelligent Results - AI Integrations by Pencil Peel IMT"},
    {text: "Transform Your Digital Presence with AI-Powered Marketing Solutions"},
    {text: "The Future of Marketing is Here - Leverage AI with Pencil Peel IMT"},
    {text: "AI-Driven Insights, Human-Centered Approach - Unlock Your Digital Potential"}
  ];

  faqcards: FaqCardModel[] = [
      {
      id: 'f2',
      title: 'What are AI Integrations in Digital Marketing?',
      description: 'AI integrations use machine learning and automation to enhance digital marketing by improving efficiency, personalization, and performance.',
      fullDescription: `
        <div class="space-y-6 text-gray-700 text-base leading-relaxed">
          <p>
            <strong>AI integrations</strong> in digital marketing involve using machine learning algorithms and natural language processing (NLP) to automate and optimize various processes. These technologies help improve performance in tasks such as data analysis, content creation, customer engagement, and service delivery.
          </p>

          <div class="bg-gray-50 border border-gray-200 p-5 rounded-md shadow-sm">
            <h4 class="text-lg font-semibold text-indigo-700 mb-3">Why AI Integrations are Essential:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Improve efficiency and productivity:</strong> Automate repetitive marketing tasks.</li>
              <li><strong>Enhance customer experiences:</strong> Personalize content and communication using customer data.</li>
              <li><strong>Drive business results:</strong> Optimize marketing strategies based on real-time insights.</li>
              <li><strong>Provide a competitive advantage:</strong> Stay ahead with smart, data-driven decisions and campaign performance.</li>
            </ul>
          </div>

          <p>
            Leveraging AI means smarter decisions, higher engagement, and marketing that adapts to users in real time. At <span class="font-semibold text-indigo-600">Pencil Peel IMT</span>, we help you integrate AI seamlessly into your digital marketing strategy.
          </p>
        </div>
      `,
      expanded: false,
      image: '/dm/ai-integrations.webp'
    },
    {
    id: 'f3',
    title: 'Why AI Integrations are Essential for Digital Marketing',
    description: 'AI integrations boost efficiency, improve customer experiences, and give businesses a competitive edge in digital marketing.',
    fullDescription: `
      <div class="space-y-5 text-gray-700 text-base leading-relaxed">
        <p>
          <strong>AI integrations</strong> are essential for digital marketing because they help businesses keep up with the demands of modern consumers and competitive digital ecosystems. Here are the core reasons:
        </p>

        <div class="bg-indigo-50 border border-indigo-100 p-5 rounded-md shadow-sm">
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Improve efficiency and productivity:</strong> Automates routine marketing tasks, allowing teams to focus on high-impact strategy and creativity.</li>
            <li><strong>Enhance customer experiences:</strong> Delivers personalized content and timely communication tailored to each user’s behavior and preferences.</li>
            <li><strong>Drive business results:</strong> Increases campaign performance, improves targeting, and boosts ROI through smarter decision-making.</li>
            <li><strong>Provide a competitive advantage:</strong> Equips brands with the agility and insights needed to outperform traditional marketing approaches and stay ahead of market trends.</li>
          </ul>
        </div>

        <p>
          In an era where speed, personalization, and data-driven decisions are critical, integrating AI into your digital marketing strategy isn’t optional—it’s essential.
        </p>
      </div>
    `,
    expanded: false,
    image: '/dm/why-ai-essential.webp' // Replace with your actual image path
    }
  ]
  subServiceTitle:string = "Our AI Integrations for Digital Marketing Services";
  subServicedescription:string = "At Pencil Peel IMT, we offer a range of AI integrations for digital marketing services, including:";
  subServices: any[] = [
  {
    id: 'ai1',
    title: 'AI-Powered Chatbots',
    description: 'We build intelligent chatbots to offer personalized, real-time customer service and support.',
    fullDescription: `
      <p><strong>AI-powered chatbots</strong> enhance customer engagement by providing instant, 24/7 support. These bots understand user intent and deliver accurate, human-like responses that reduce workload and improve satisfaction.</p>
    `,
    expanded: false,
    image: '/dm/chatbots.webp'
  },
  {
    id: 'ai2',
    title: 'AI Content Generation',
    description: 'We generate high-quality, targeted content using AI tools that resonate with your audience.',
    fullDescription: `
      <p><strong>AI-driven content generation</strong> enables you to produce SEO-friendly, relevant, and engaging content at scale. This ensures consistency, faster turnaround, and better content performance.</p>
    `,
    expanded: false,
    image: '/dm/content-generation.webp'
  },
  {
    id: 'ai3',
    title: 'Predictive Analytics',
    description: 'We forecast customer behavior using AI, enabling smarter, data-driven marketing decisions.',
    fullDescription: `
      <p><strong>Predictive analytics</strong> uses historical data and machine learning to anticipate future customer actions. This empowers marketers to optimize timing, messaging, and resource allocation for higher ROI.</p>
    `,
    expanded: false,
    image: '/dm/predictive-analytics.webp'
  },
  {
    id: 'ai4',
    title: 'AI Personalization',
    description: 'We tailor user experiences using AI to deliver content and recommendations based on individual preferences.',
    fullDescription: `
      <p><strong>AI personalization</strong> analyzes user data to dynamically adjust content, offers, and product suggestions. This leads to increased engagement, conversions, and customer satisfaction.</p>
    `,
    expanded: false,
    image: '/dm/personalization.webp'
  },
  {
    id: 'ai5',
    title: 'AI-Powered SEO',
    description: 'We enhance your SEO performance using AI tools to improve rankings and online visibility.',
    fullDescription: `
      <p><strong>AI-powered SEO</strong> automates keyword discovery, content audits, and on-page optimizations. It helps increase organic traffic, improve technical SEO, and keep your site aligned with evolving search engine algorithms.</p>
    `,
    expanded: false,
    image: '/dm/ai-seo.webp'
  },
  {
    id: 'ai6',
    title: 'AI-Driven Social Media Management',
    description: 'We use AI to plan, create, and schedule content that drives results on social platforms.',
    fullDescription: `
      <p><strong>AI social media tools</strong> analyze audience behavior, suggest optimal posting times, and even generate engaging captions—helping you maintain consistency and grow your reach across channels.</p>
    `,
    expanded: false,
    image: '/dm/social-ai.webp'
  },
  {
    id: 'ai7',
    title: 'AI-Powered Email Marketing',
    description: 'We personalize and optimize your email campaigns using AI for better open and click rates.',
    fullDescription: `
      <p><strong>AI email marketing</strong> helps improve subject lines, send times, and segmentation. It boosts user engagement, reduces churn, and increases conversions through data-driven automation.</p>
    `,
    expanded: false,
    image: '/dm/ai-email.webp'
  },
  {
    id: 'ai8',
    title: 'AI-Driven Content Optimization',
    description: 'We optimize your content with AI to improve SEO, engagement, and traffic.',
    fullDescription: `
      <p><strong>AI content optimization</strong> provides real-time recommendations to refine headlines, structure, and keyword density—enhancing both user experience and search engine rankings.</p>
    `,
    expanded: false,
    image: '/dm/content-optimization.webp'
  },
  {
    id: 'ai9',
    title: 'AI-Powered Customer Journey Mapping',
    description: 'We use AI to understand and improve your customer’s entire journey from start to finish.',
    fullDescription: `
      <p><strong>AI journey mapping</strong> identifies user behavior patterns and friction points, helping you deliver more seamless and impactful experiences across all touchpoints.</p>
    `,
    expanded: false,
    image: '/dm/journey-mapping.webp'
  },
  {
    id: 'ai10',
    title: 'AI-Driven Lead Generation',
    description: 'We generate high-quality leads using AI to identify and target your ideal customers.',
    fullDescription: `
      <p><strong>AI lead generation</strong> finds patterns in user behavior to identify high-conversion prospects and prioritize outreach, increasing efficiency and conversion rates.</p>
    `,
    expanded: false,
    image: '/dm/lead-generation.webp'
  },
  {
    id: 'ai11',
    title: 'AI Analytics & Reporting',
    description: 'We provide real-time performance insights through AI-powered analytics and dashboards.',
    fullDescription: `
      <p><strong>AI analytics</strong> delivers real-time insights, automated reporting, and performance predictions that help marketers optimize campaigns and make smarter decisions faster.</p>
    `,
    expanded: false,
    image: '/dm/analytics-reporting.webp'
  }
];

}
