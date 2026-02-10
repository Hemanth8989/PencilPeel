import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Quotes } from "../../../components/quotes/quotes";

@Component({
  selector: 'app-lead-gen',
  imports: [CommonModule, Nocarouselquotes, CardModule, ButtonModule, Quotes],
  templateUrl: './lead-gen.html',
  styleUrl: './lead-gen.scss'
})
export class LeadGen {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/leadGenHome.jpg',
      title: `
      Unlock Your Lead Generation Services by
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: `
          At <span class="text-orange-500">Pencil Peel IMT</span>, we specialize in helping businesses generate high-quality leads and drive conversions. Our Lead Generation Services are designed to attract and engage with potential customers, capture their interest, and convert them into paying customers.
    `
    };

    quotes = [
      {text:"Transform Your Sales Funnel with Expert Lead Generation Services - Pencil Peel IMT"},
      {text:"Generate High-Quality Leads, Drive Business Growth - Pencil Peel IMT's Proven Lead Generation Strategies"},
      {text:"Lead Generation that Converts: Unlock the Power of Digital Marketing with Pencil Peel IMT"},
      {text:"Identify, Engage, and Convert: Comprehensive Lead Generation Solutions by Pencil Peel IMT"},
      {text:"Fuel Your Sales Pipeline with Pencil Peel IMT's Expert Lead Generation Services"}
    ];
  components = [
    {
      title: 'Identifying Target Audience',
      description:
        'Understanding demographics, needs, and pain points to tailor marketing efforts.',
      icon: 'pi pi-users',
    },
    {
      title: 'Creating Valuable Content',
      description:
        'Developing content that resonates with the target audience and builds trust.',
      icon: 'pi pi-pencil',
    },
    {
      title: 'Capturing Leads',
      description:
        'Using forms, landing pages, and other tactics to collect contact information.',
      icon: 'pi pi-inbox',
    },
    {
      title: 'Nurturing Leads',
      description:
        'Building relationships through personalized communication and content.',
      icon: 'fa-solid fa-handshake',
    },
    {
      title: 'Converting Leads',
      description:
        'Guiding leads through the sales funnel to become paying customers.',
      icon: 'pi pi-check-circle',
    },
  ];

  leads = [
    {
      title: 'Marketing Qualified Leads (MQLs)',
      description:
        "We'll identify and qualify leads that have shown interest in your product or service and are likely to become customers. Our team will use data-driven insights to determine the likelihood of conversion and prioritize leads accordingly.",
      icon: 'pi pi-bullseye',
    },
    {
      title: 'Sales Qualified Leads (SQLs)',
      description:
        "We'll work closely with your sales team to qualify leads and ensure that they are properly handed off to sales. Our team will use a consultative approach to understand your sales process and identify leads that are ready to buy.",
      icon: 'pi pi-briefcase',
    },
    {
      title: 'Product Qualified Leads (PQLs)',
      description:
        "We'll generate leads that have used a free trial or demo of your product and are likely to become paying customers. Our team will use product usage data to identify leads that are likely to convert.",
      icon: 'fa-solid fa-cube',
    },
    {
      title: 'Product Interested Leads',
      description:
        "We'll generate leads that have shown interest in specific products or services. Our team will use targeted marketing campaigns to reach potential customers who are interested in your products or services.",
      icon: 'pi pi-tags',
    },
    {
      title: 'Service-Based Leads',
      description:
        "We'll generate leads that are interested in specific services, such as consulting or coaching. Our team will use a consultative approach to understand your service offerings and identify leads that are likely to benefit from them.",
      icon: 'fa-solid fa-handshake',
    },
    {
      title: 'Event-Based Leads',
      description:
        "We'll generate leads that are interested in attending events, webinars, or conferences. Our team will use targeted marketing campaigns to promote your events and attract potential customers.",
      icon: 'pi pi-calendar',
    },
    {
      title: 'Referral Leads',
      description:
        "We'll generate leads that come from referrals, either from existing customers or partners. Our team will use a referral marketing strategy to incentivize your existing customers and partners to refer new leads.",
      icon: 'pi pi-share-alt',
    },
    {
      title: 'Social Media Leads',
      description:
        "We'll generate leads that come from social media platforms, such as Facebook, Twitter, or LinkedIn. Our team will use targeted social media campaigns to reach potential customers and drive conversions.",
      icon: 'pi pi-twitter',
    },
    {
      title: 'Content-Based Leads',
      description:
        "We'll generate leads that are interested in specific content, such as e-books, whitepapers, or blog posts. Our team will use targeted content marketing campaigns to attract potential customers and drive conversions.",
      icon: 'pi pi-book',
    },
    {
      title: 'Free Trial Leads',
      description:
        "We'll generate leads that have signed up for a free trial of your product or service. Our team will use a consultative approach to understand your product or service and identify leads that are likely to convert.",
      icon: 'pi pi-play-circle',
    },
    {
      title: 'Demo Leads',
      description:
        "We'll generate leads that have requested a demo of your product or service. Our team will use a targeted approach to schedule demos and drive conversions.",
      icon: 'pi pi-video',
    },
  ];

  channels = [
    {
      title: 'Content Marketing',
      description:
        'We create valuable content, such as e-books, webinars, and blog posts, to attract and engage with potential customers.',
      icon: 'pi pi-book',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'We optimize your website content to rank higher in search engine results pages (SERPs) and attract organic traffic.',
      icon: 'pi pi-chart-line',
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description:
        'We run targeted paid ads on search engines, social media, and other platforms to attract potential customers.',
      icon: 'pi pi-bolt',
    },
    {
      title: 'Social Media Marketing',
      description:
        'We use social media platforms to engage with potential customers, build brand awareness, and drive website traffic.',
      icon: 'pi pi-twitter',
    },
    {
      title: 'Email Marketing',
      description:
        'We send targeted and personalized emails to potential customers to nurture leads and encourage conversions.',
      icon: 'pi pi-envelope',
    },
  ];

  tactics = [
    {
      title: 'Free Trials and Demos',
      description:
        'We offer free trials or demos of your product or service to attract potential customers.',
      icon: 'pi pi-play-circle',
    },
    {
      title: 'Lead Magnets',
      description:
        'We create valuable resources, such as e-books or whitepapers, to capture contact information.',
      icon: 'pi pi-book',
    },
    {
      title: 'Opt-in Forms',
      description:
        'We add opt-in forms to your website to capture contact information from potential customers.',
      icon: 'pi pi-check-square',
    },
    {
      title: 'Pop-ups and Overlays',
      description:
        'We use pop-ups and overlays to capture contact information and promote offers.',
      icon: 'pi pi-window-maximize',
    },
  ];

  leadSteps = [
    {
      title: 'Attract Visitors',
      description:
        'We use inbound marketing techniques like SEO, content marketing, and social media to draw traffic to your website or landing pages.',
      icon: 'pi pi-users',
    },
    {
      title: 'Engage Visitors',
      description:
        'We provide value through content or offers (lead magnets) to engage visitors and encourage them to take action.',
      icon: 'pi pi-comments',
    },
    {
      title: 'Convert Leads',
      description:
        'We capture their information using landing pages with forms, pop-ups, or slide-ins offering free resources.',
      icon: 'pi pi-check-circle',
    },
    {
      title: 'Qualify Leads',
      description:
        "We determine the lead's potential value through tools like lead scoring, which ranks leads based on their likelihood to convert.",
      icon: 'pi pi-star',
    },
    {
      title: 'Nurture Leads',
      description:
        'We use email marketing, remarketing, and personalized content to maintain engagement and guide them toward a purchasing decision.',
      icon: 'pi pi-envelope',
    },
  ];

  cards = [
    {
      title: "Our Strengths",
      icon: "pi pi-th-large",
      points: [
        { label: "Proven Track Record", description: "We have a proven track record of generating high-quality leads and driving conversions for our clients." },
        { label: "Expertise", description: "Our team has extensive experience in lead generation, ensuring that we deliver effective and efficient solutions." },
        { label: "Personalized Approach", description: "We take a personalized approach to lead generation, tailoring our strategies to meet the unique needs of your business." }
      ]
    },
    {
      title: "Our Team's Creativity",
      icon: "pi pi-lightbulb",
      points: [
        { label: "Innovative Solutions", description: "Our team is creative and innovative, always looking for new and effective ways to generate leads." },
        { label: "Outside-the-Box Thinking", description: "We're not afraid to think outside the box and try new approaches to lead generation." },
        { label: "Collaborative Approach", description: "We work closely with our clients to understand their needs and develop customized solutions." }
      ]
    },
    {
      title: "Our Knowledge",
      icon: "pi pi-book",
      points: [
        { label: "Industry Expertise", description: "We have extensive knowledge of the latest lead generation trends and technologies." },
        { label: "Best Practices", description: "We stay up-to-date with best practices in lead generation, ensuring that our strategies are effective and efficient." },
        { label: "Data-Driven Approach", description: "We use data and analytics to inform our lead generation strategies, ensuring that we're always optimizing for the best results." }
      ]
    }
  ];
}
