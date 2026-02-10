import { Component, HostListener } from '@angular/core';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { CarouselModule } from 'primeng/carousel';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { Faqcards } from "../../../components/faqcards/faqcards";
import { FaqCardModel } from '../../../models/FaqCard';
import { Whyus } from "../../../components/whyus/whyus";
import { WhyUsModel } from '../../../models/whyUs';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-personal-branding',
  imports: [CommonModule,Nocarouselquotes, CarouselModule, TabsModule, Faqcards, Whyus, TimelineModule,
     CardModule,AccordionModule,ButtonModule],
  templateUrl: './personal-branding.html',
  styleUrl: './personal-branding.scss'
})
export class PersonalBranding {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/slide1.webp',
      title: `
      Establishing Yourself as an Expert at 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: `
          At <span class="text-orange-500">Pencil Peel IMT</span>, Personal branding is the process of creating and maintaining a unique image, reputation, and identity for oneself as an individual, often for professional or business purposes. It involves showcasing one's skills, expertise, values, and personality to establish a distinctive presence in the minds of others.
    `
    };

  testimonials = [
    { text: "Build Your Brand, Build Your Future." },
    { text: "Establish Your Expertise, Elevate Your Career." },
    { text: "Your Personal Brand is Your Greatest Asset." },
    { text: "Stand Out, Stand Tall: Crafting Your Unique Personal Brand." },
    { text: "Authenticity Matters: Building a Personal Brand that Resonates." }
  ];

  activeIndex: number = 0;

  faqcards: FaqCardModel[] = [
    {
      id: 'f2',
      title: 'What is Personal Branding ?',
      description: `At Pencil Peel IMT, we understand the importance of personal branding in today's digital age.`,
      fullDescription: `
      At Pencil Peel IMT, we understand the importance of personal branding in today's digital age. Our team will work closely with you to develop a strong personal brand that showcases your skills, expertise, values, and personality.
    `,
      expanded: false,
      image: '/dm/what-social-media-marketing.webp' // Replace with your actual image path
    },
    {
      id: 'f3',
      title: 'Key Aspects of Personal Branding at Pencil Peel IMT',
      description: `At Pencil Peel IMT, we understand the importance of personal branding in today's digital age. Our team is dedicated to helping you develop a strong personal brand that showcases your skills, expertise, values, and personality.`,
      fullDescription: `
        <section class="social-media-marketing">
          <p>
            At <span class="text-orange-500 font-medium">Pencil Peel IMT</span>, we understand the importance of personal branding in today's digital age. Our team is dedicated to helping you develop a strong personal brand that showcases your skills, expertise, values, and personality
          </p>
  
          <ul>
            <li><span class="text-orange-500 font-medium">Self - Awareness : </span> We will help you understand your strengths, weaknesses, values, and passions to create a strong foundation for your personal brand. By gaining self-awareness, you'll be able to identify your unique strengths and weaknesses, and develop a clear understanding of what drives you.</li>
            <li><span class="text-orange-500 font-medium">Unique Value Proposition : </span> We'll work with you to clearly define what sets you apart from others and develop a unique value proposition that showcases your expertise. A unique value proposition is essential for differentiating yourself from others in your industry.</li>
            <li><span class="text-orange-500 font-medium">Consistent Messaging : </span> Our team will ensure that your brand message is communicated consistently across all platforms, including social media, website, and other online channels. Consistent messaging is essential for building a strong personal brand.</li>
            <li><span class="text-orange-500 font-medium">Visual Identity : </span> We'll help you create a strong visual identity, including a logo, website, and social media presence, that reflects your personal brand. A strong visual identity is essential for establishing a professional online presence.</li>
            <li><span class="text-orange-500 font-medium">Networking : </span>Our team will assist you in building relationships and connections with others in your industry, helping you establish a strong network of contacts and connections. Networking is essential for building relationships, finding new opportunities, and establishing yourself as a thought leader in your industry.</li>
          </ul>
          <p class="mt-4">
            By building a strong network of contacts and connections, you'll be able to expand your reach and establish yourself as a thought leader in your industry.
          </p>
        </section>
      `,
      expanded: false,
      image: '/dm/what-social-media-marketing.webp'
    },
    {
      id: 'f4',
      title: 'How to Build a Personal Brand',
      description:`By partnering with Pencil Peel IMT, you'll be able to unlock the full potential of your personal brand and achieve your professional goals.`,
      fullDescription:`
        <section class="social-media-marketing">

          <p>
            We will work closely with you to develop a strong personal brand that showcases your skills, expertise, and values, and helps you stand out in a crowded market. Let's get started on your personal branding journey.
          </p>
          <ul class="mt-4">
            <li><span class="text-orange-500 font-medium">Define Your Niche : </span> Our team will help you identify your area of expertise and specialization, and develop a clear niche that showcases your unique strengths.</li>
            <li><span class="text-orange-500 font-medium">Create a Strong Online Presence : </span> We'll assist you in developing a professional website and social media presence that reflects your personal brand.</li>
            <li><span class="text-orange-500 font-medium">Develop a Content Strategy : </span> Our team will help you create valuable content that showcases your expertise and builds your personal brand.</li>
            <li><span class="text-orange-500 font-medium">Engage with Your Audience : </span> We'll assist you in building relationships and interacting with your target audience, helping you establish a strong connection with your audience.</li>
            <li><span class="text-orange-500 font-medium">Consistency is Key : </span>Our team will ensure that your brand message and values are consistently communicated across all platforms, helping you build a strong and recognizable personal brand.</li>
          </ul>
        </section>
      `,
      expanded: false,
      image: '/dm/what-social-media-marketing.webp'
    }
  ];

  whyUs: WhyUsModel = {
    title: 'Benefits of Personal Branding with Pencil Peel',
    description: ``,
    List: [
      {
        icon: 'pi pi-briefcase',
        title: 'Attract New Opportunities',
        description: "We will help you develop a personal brand that showcases your skills, expertise, and values, making you more attractive to potential employers, clients, and business partners. ",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-user',
        title: 'Differentiate Yourself',
        description: "In a crowded market, it's essential to stand out from the competition. We will help you develop a unique personal brand that differentiates you from others and helps you establish a strong reputation.",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-user',
        title: 'Increase Confidence and Self-Awareness',
        description: "Developing a personal brand requires self-reflection and introspection. We will guide you through this process, helping you gain a deeper understanding of your strengths, weaknesses, values, and passions.",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-sort-amount-up',
        title: 'Achieve Professional Goals',
        description: "A strong personal brand can help you achieve your professional goals, whether you're looking to advance your career, start a new business, or establish yourself as a thought leader in your industry.",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-eye',
        title: 'Increased Visibility',
        description: "Our team will help you establish yourself as an expert in your field, increasing your visibility and reputation.",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-megaphone',
        title: 'Career Opportunities',
        description: "A strong personal brand can attract new career opportunities and business partnerships, and our team will help you leverage your brand to achieve your career goals.",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-hammer',
        title: 'Thought Leadership',
        description: "We'll assist you in positioning yourself as a thought leader in your industry, helping you build a strong reputation and establish yourself as an expert.",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-globe',
        title: 'Networking Opportunities',
        description: "Our team will help you build a strong network of contacts and connections, opening up new opportunities and collaborations.",
        background: 'bg-green-100',
        border: 'border-green-500'
      },
    ]
  }

  timeline = [
  {
    icon: 'pi pi-users',
    title: 'Establish Yourself as an Expert',
    description: `We'll help you establish yourself as a thought leader in your industry, increasing your credibility and authority. By showcasing your expertise and showcasing your skills, you'll be able to build trust with your audience and establish yourself as a go-to expert in your field.`,
    color: 'bg-yellow-500',
  },
  {
    icon: 'pi pi-eye',
    title: 'Increases Your Visibility',
    description: "Our team will help you increase your visibility and reach a wider audience. Through strategic branding and marketing efforts, we'll help you get noticed by the right people and build a strong reputation that opens doors to new opportunities.",
    color: 'bg-blue-600',
  },
  {
    icon: 'pi pi-globe',
    title: 'Build a Strong Network',
    description: "We'll also help you build a strong network of contacts and connections that can help you achieve your goals. By introducing you to key players in your industry and helping you build meaningful relationships, we'll help you expand your professional network and increase your opportunities.",
    color: 'bg-green-600',
  },
  {
    icon: 'pi pi-desktop',
    title: 'Develop a Unique Personal Brand',
    description: "Our team will work with you to develop a unique and compelling personal brand that showcases your skills, expertise, and values. We'll help you craft a brand message that resonates with your target audience and sets you apart from others in your industry. With our expertise, you'll be able to build a strong personal brand that helps you achieve your goals and advance your career.",
    color: 'bg-red-500',
  }
];

categories = [
    { title: 'Professionals', icon: 'pi pi-briefcase', description: 'Advance your career with a strong personal brand.' },
    { title: 'Entrepreneurs', icon: 'pi pi-users', description: 'Build credibility and trust with your audience.' },
    { title: 'Doctors', icon: 'pi pi-heart', description: 'Establish expertise and trust with patients.' },
    { title: 'Influencers', icon: 'pi pi-star', description: 'Grow your influence and following online.' },
    { title: 'Authors & Writers', icon: 'pi pi-pencil', description: 'Connect with your readers through personal branding.' },
    { title: 'Business Executives', icon: 'pi pi-briefcase', description: 'Build a strong professional reputation and increase your opportunities.' },
    { title: 'Coaches & Consultants', icon: 'pi pi-comments', description: 'Showcase your expertise and build a loyal client base.' },
    { title: 'Academics & Researchers', icon: 'pi pi-book', description: 'Publish, present and be recognized for your work.' },
    { title: 'Public Speakers', icon: 'pi pi-microphone', description: 'Attract speaking gigs and build authority.' }
  ];

  // Accordion items (dynamic: using new p-accordion-panel API)
  accordionItems = [
    {
      value: 'professionals',
      header: 'Professionals Looking to Advance Their Career',
      icon: 'pi pi-briefcase',
      content: `If you're a professional looking to advance your career, a strong personal brand can help you stand out in a crowded job market and attract new opportunities. We will help you develop a personal brand that showcases your skills, expertise, and values, making you more attractive to potential employers.`
    },
    {
      value: 'entrepreneurs',
      header: 'Entrepreneurs and Small Business Owners',
      icon: 'pi pi-users',
      content: `If you're an entrepreneur or small business owner, a strong personal brand can help you establish credibility and trust with your target audience. We will work with you to develop a personal brand that showcases your unique strengths and values, and helps you build a loyal customer base.`
    },
    {
      value: 'thought-leaders',
      header: 'Thought Leaders and Industry Experts',
      icon: 'pi pi-lightbulb',
      content: `If you're a thought leader or industry expert, a strong personal brand can help you establish yourself as a authority in your field. We will help you develop a personal brand that showcases your expertise and thought leadership, and helps you build a strong reputation.`
    },
    {
      value: 'political-leaders',
      header: 'Political Leaders & Politicians',
      icon: 'pi pi-globe',
      content: `We'll help you build a strong reputation and connect with voters. Our team will work with you to develop a personal brand that resonates with your constituents and establishes you as a leader in your community.`
    },
    {
      value: 'doctors',
      header: 'Doctors',
      icon: 'pi pi-heart',
      content: `We'll help you establish yourself as an expert in your field and build trust with patients. Our team will work with you to develop a personal brand that showcases your skills and expertise, helping you build a loyal patient base and increase your professional opportunities.`
    },
    {
      value: 'creatives',
      header: 'Artists & Creatives',
      icon: 'pi pi-image',
      content: `If you're an artist, writer, or creative professional, a strong personal brand can help you showcase your work and attract new opportunities. We will work with you to develop a personal brand that highlights your unique style and creative vision.`
    },
    {
      value: 'coaches',
      header: 'Coaches & Consultants',
      icon: 'pi pi-user-edit',
      content: `If you're a coach or consultant, a strong personal brand can help you establish credibility and trust with your target audience. We will help you develop a personal brand that showcases your expertise and helps you build a loyal client base.`
    },
    {
      value: 'authors',
      header: 'Authors & Writers',
      icon: 'pi pi-book',
      content: `If you're an author or writer, a strong personal brand can help you build a loyal readership and attract new opportunities. We will work with you to develop a personal brand that showcases your writing style and helps you connect with your target audience.`
    },
    {
      value: 'influencers',
      header: 'Influencers & Social Media Personalities',
      icon: 'pi pi-hashtag',
      content: `If you're an influencer or social media personality, a strong personal brand can help you build a loyal following and attract new opportunities. We will work with you to develop a personal brand that showcases your unique voice and style.`
    }
  ];

  // Controls which panel(s) are active. For single-panel mode this is a string, for multiple it can be an array.
  activeAccordionValue: string | string[] | null = null;

  // Toggle for allowing multiple open panels
  multiple = false;

  approach = [
    { icon: 'pi pi-check-circle', title: 'Develop a Strong Personal Brand', text: 'We will work closely with you to develop a personal brand that accurately reflects your strengths and values.' },
    { icon: 'pi pi-id-card', title: 'Create a Distinctive Presence', text: 'Our team will help you create a distinctive presence that sets you apart in your industry.' },
    { icon: 'pi pi-globe', title: 'Build a Professional Online Presence', text: 'We will help you build a professional online presence that accurately reflects your brand and values.' },
    { icon: 'pi pi-lightbulb', title: 'Establish Yourself as a Thought Leader', text: 'We will help you establish yourself as a thought leader, increasing visibility and credibility.' }
  ];

  benefits = [
    { icon: 'pi pi-briefcase', title: 'Increase Your Professional Opportunities', text: 'We will help you expand your opportunities and advance your career.' },
    { icon: 'pi pi-star', title: 'Build a Strong Reputation', text: 'We will help you build a reputation based on trust, credibility, and expertise.' },
    { icon: 'pi pi-users', title: 'Stand Out in a Crowded Market', text: 'We will help you differentiate yourself and stand out in your industry.' }
  ];

  whyChoose = [
    {
      title: 'Expertise',
      description: 'Our team has extensive experience in personal branding, and we\'re skilled in developing strategies that work.',
      icon: 'pi-star',
      iconColor: 'orange-600',
      iconBgColor: 'orange-100'
    },
    {
      title: 'Customized Solutions',
      description: 'We\'ll develop a personalized branding strategy that meets your specific needs and goals.',
      icon: 'pi-cog',
      iconColor: 'orange-600',
      iconBgColor: 'orange-100'
    },
    {
      title: 'Results-Oriented',
      description: 'Our goal is to help you achieve your professional goals and increase your visibility and credibility.',
      icon: 'pi-chart-line',
      iconColor: 'orange-600',
      iconBgColor: 'orange-100'
    }
  ];

   isMobile = false;

  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobile = window.innerWidth < 768; // Tailwind sm breakpoint
  }
}
