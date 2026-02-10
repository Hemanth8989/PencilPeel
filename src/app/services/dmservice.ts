import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dmservice {
services: any[] = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Boost your visibility on search engines and drive organic traffic with smart keyword strategies and on-page optimization.",
      image: "/dm/services/seo.webp",
      link: "/digitalmarketing/seo",
      icon: "pi pi-search"
    },
    {
      title: "Social Media Optimization (SMO)",
      description: "Enhance your social media presence through profile optimization and platform-based engagement strategies.",
      image: "/dm/services/servicesSMO.webp",
      link: "/digitalmarketing/smo",
      icon: "pi pi-users"
    },
    {
      title: "Search Engine Marketing (SEM)",
      description: "Drive targeted traffic with paid ads across search engines using effective bidding strategies.",
      image: "/dm/services/SEM.webp",
      link: "/digitalmarketing/sem",
      icon: "pi pi-dollar"
    },
    {
      title: "Display Marketing",
      description: "Deliver visually engaging ads across the web to boost brand awareness and retarget users.",
      image: "/dm/services/displaym.webp",
      link: "/digitalmarketing/displaymarketing",
      icon: "pi pi-images"
    },
    {
      title: "AI Integrations",
      description: "Automate workflows and boost personalization with smart AI-driven solutions for marketing.",
      image: "/dm/services/dmai.webp",
      link: "/digitalmarketing/aiintegrations",
      icon: "pi pi-cog"
    },
    {
      title: "eCommerce Marketing",
      description: "Grow your online store with data-driven product campaigns, optimized listings, and customer retention strategies.",
      image: "/dm/services/ecommercemarketing.webp",
      link: "/digitalmarketing/ecommercemarketing",
      icon: "pi pi-shopping-cart"
    },
    {
      title: "Affiliate Marketing",
      description: "Build a powerful sales network by partnering with affiliates to expand your brand reach and revenue.",
      image: "/dm/services/affiliatemarketing.webp",
      link: "/digitalmarketing/affiliatemarketing",
      icon: "pi pi-sitemap"
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Drive immediate traffic and leads with laser-targeted ad campaigns on Google, Bing, and social platforms.",
      image: "/dm/services/payperclick.webp",
      link: "/digitalmarketing/ppc",
      icon: "pi pi-bolt"
    },
    {
      title: "Influencer Marketing",
      description: "Collaborate with trusted voices in your industry to amplify your brand message and boost credibility.",
      image: "/dm/services/influencermarketing.webp",
      link: "/digitalmarketing/influencer",
      icon: "pi pi-thumbs-up"
    },
    {
      title: "Content Marketing",
      description: "Tell your story and build trust through high-quality blogs, infographics, and storytelling that converts.",
      image: "/dm/services/contentmarketing.webp",
      link: "/digitalmarketing/contentmarketing",
      icon: "pi pi-file"
    },
    {
      title: "Review Marketing",
      description: "Boost customer trust with a strategic review generation, management, and promotion strategy.",
      image: "/dm/services/reviewm.webp",
      link: "/digitalmarketing/reviewmarketing",
      icon: "pi pi-comments"
    },
    {
      title: "Podcast Marketing",
      description: "Reach niche audiences with engaging podcast content and cross-platform promotional strategies.",
      image: "/dm/services/podcastmarketing.webp",
      link: "/digitalmarketing/podcastmarketing",
      icon: "pi pi-microphone"
    },
    {
      title: "Brand Management",
      description: "Build and protect your brand identity with strategy, positioning, and reputation oversight.",
      image: "/dm/services/brandmgt.webp",
      link: "/digitalmarketing/brandmanagment",
      icon: "pi pi-briefcase"
    },
    {
      title: "Google Ads Management",
      description: "Get the most out of your ad spend with expert Google Ads campaign creation and optimization.",
      image: "/dm/services/googleads.webp",
      link: "/digitalmarketing/googleads",
      icon: "pi pi-google"
    },
    {
      title: "Analytics & Reporting",
      description: "Make smarter decisions with real-time data insights, custom dashboards, and performance tracking.",
      image: "/dm/services/analytics&reporting.webp",
      link: "/digitalmarketing/analytics",
      icon: "pi pi-chart-bar"
    },
    {
      title: "Growth Marketing",
      description: "Accelerate your brand with experiments, data analysis, and funnel-based marketing strategies.",
      image: "/dm/services/growthm.webp",
      link: "/digitalmarketing/growthmarketing",
      icon: "pi pi-chart-line"
    },
    {
      title: "Link Building Services",
      description: "Improve domain authority with ethical link-building tactics that drive organic SEO success.",
      image: "/dm/services/linkbuilding.webp",
      link: "/digitalmarketing/linkbuilding",
      icon: "pi pi-link"
    },
    {
      title: "Inbound Marketing",
      description: "Attract and nurture customers with valuable content, SEO, and lead magnets that convert.",
      image: "/dm/services/inboundmarketing.webp",
      link: "/digitalmarketing/inbound",
      icon: "pi pi-send"
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized, automated email campaigns that drive engagement.",
      image: "/dm/services/emailmarketing.webp",
      link: "/digitalmarketing/emailmarketing",
      icon: "pi pi-envelope"
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Turn more clicks into customers by optimizing user journeys and eliminating friction points on your site.",
      image: "/dm/services/conversionrateopt.webp",
      link: "/digitalmarketing/contentrateoptimization",
      icon: "pi pi-percentage"
    },
    {
      title: "Lead Generation",
      description: "Attract, qualify, and convert new leads through targeted campaigns and funnel strategies.",
      image: "/dm/services/leadgen.webp",
      link: "/services/lead-generation",
      icon: "pi pi-user-plus"
    },
    {
      title: "Online Reputation Management (ORM)",
      description: "Protect and enhance your brand image with proactive review management and crisis response strategies.",
      image: "/dm/services/onlinereputationmanagment.webp",
      link: "/digitalmarketing/brandmanagment",
      icon: "pi pi-star"
    }
  ];

  ourServices:any[] = [
    {
      title: "AD Films",
      description: "Advertising films or promotional videos, are short videos designed to promote a product, service, or brand.",
      image: "/dm/services/adfilms.webp",
      link: "/services/ad-films",
      icon: "pi pi-video"
    },
    {
      title: "Personal Branding",
      description: "Personal branding is the process of creating and maintaining a unique image, reputation, and identity for oneself as an individual, often for professional or business purposes",
      image: "/dm/services/personal-branding.webp",
      link: "/services/personal-branding",
      icon: "pi pi-user"
    },
    {
      title: "Video Marketing",
      description:"Video marketing is a strategic approach to creating and distributing valuable, relevant, and consistent video content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.",
      image: "/dm/services/videomarketing.webp",
      link: "/services/video-marketing",
      icon: "pi pi-video"
    },
    {
      title: "Video Production",
      description: "Video production marketing is a powerful tool used to promote a product, service, or brand through video content.",
      image: "/dm/services/videoproduction.webp",
      link: "/services/video-production",
      icon: "fa fa-film"
    },
    {
      title: "Telecaller Marketing",
      description: "Telecaller marketing is a form of direct marketing that involves contacting potential customers through phone calls.",
      image: "/dm/services/telecallermarketing.webp",
      link: "/services/telecallers",
      icon: "pi pi-phone"
    },
    {
      title: "Design Thinking",
      description: "Design thinking is a problem-solving approach that focuses on understanding the needs and perspectives of users to create innovative solutions.",
      image: "/dm/services/designthinking.webp",
      link: "/services/design-thinking",
      icon: "pi pi-lightbulb"
    },
    {
      title: 'Brand Advertising',
      description: 'Memorable campaigns that position your brand ahead of competitors.',
      icon: 'pi pi-megaphone',
      link: '/services/brand-advertising'
    },
    {
      title: 'Brand Ambassador',
      description: 'Promote your brand through influential personalities that connect with your audience.',
      icon: 'pi pi-id-card',
      link: '/services/brand-ambassador'
    },
    {
      title: 'Lead Generation',
      description: 'Data-driven strategies to capture and convert quality business leads.',
      icon: 'pi pi-chart-line',
      link: '/services/lead-generation'
    },
    {
      title: 'Pro Services',
      description: 'Customized professional solutions tailored to your brand’s unique needs.',
      icon: 'pi pi-briefcase',
      link: '/services/pro'
    },
    {
      title: 'Event Management',
      description: 'Seamlessly managed events that leave lasting impressions on your audience.',
      icon: 'pi pi-calendar',
      link: '/services/event-management'
    },
    {
      title: 'AI Powered AD Films',
      description: 'Cutting-edge AI technology to create impactful advertising films.',
      icon: 'pi pi-microchip-ai',
      link: '/services/ai-powered-ad-films'
    }
  ];

  getDigitalServices():any[]{
    return this.services;
  }

  getServices(){
    return this.ourServices;
  }
}
