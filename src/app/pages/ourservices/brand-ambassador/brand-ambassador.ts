import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GlassCta } from "../../../components/glass-cta/glass-cta";

@Component({
  selector: 'app-brand-ambassador',
  imports: [CommonModule, Nocarouselquotes, CarouselModule, ButtonModule, CardModule, GlassCta],
  templateUrl: './brand-ambassador.html',
  styleUrl: './brand-ambassador.scss'
})
export class BrandAmbassador {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/brandmgt/brandambhome.png',
      title: `
      Unlock Your Brand Ambassador Services by
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: `
          At <span class="text-orange-500">Pencil Peel IMT</span>, we offer brand ambassador services that help businesses like yours build brand awareness, increase credibility, and drive sales. Our team of experts will work with you to identify the right ambassador for your brand, develop a customized strategy, and execute a successful campaign.
    `
    };

  testimonials = [
    { text: "Empowering your brand with authentic voices through our Brand Ambassador Services." },
    { text: "Connect with audiences through trusted Brand Ambassadors with Pencil Peel IMT." },
    { text: "Boost brand visibility and engagement with our strategic Brand Ambassador Services." },
    { text: "Leverage the influence of Brand Ambassadors to amplify your brand's message." },
    { text: "Build meaningful connections with customers through our expert Brand Ambassador Services." }
  ];

  components = [
    {
      title: 'The Power of Brand Ambassador Services with Pencil Peel IMT',
      icon: 'pi pi-bolt',
      points: [
        { label: 'Authentic Brand Representation', description: "We leverage Brand Ambassador Services to ensure authentic representation of your brand, connecting with audiences in a meaningful way." },
        { label: 'Enhanced Engagement and Visibility', description: "Our Brand Ambassador Services help boost brand visibility and engagement by partnering with ambassadors who resonate with your target audience." },
        { label: 'Building Brand Loyalty', description: "We focus on building brand loyalty through strategic Brand Ambassador partnerships that foster connections between your brand and customers." }
      ]
    },
    {
      title: 'The Future of Brand Ambassador Services with Pencil Peel IMT',
      icon: 'pi pi-globe',
      points: [
        { label: 'Strategic Influencer Partnerships', description: "We'll utilize strategic partnerships with influencers and brand ambassadors to amplify your brand's message and reach." },
        { label: 'Data-Driven Insights', description: "We'll leverage data-driven insights to optimize Brand Ambassador Services, ensuring effective partnerships that drive results for your business." },
        { label: 'Adaptability and Optimization', description: "We'll stay updated with trends and best practices in Brand Ambassador Services to ensure our strategies are always optimized for current needs." }
      ]
    },
    {
      title: 'Pencil Peel IMT Leads in Brand Ambassador Services',
      icon: 'pi pi-star',
      points: [
        { label: 'Commitment to Success', description: "At Pencil Peel IMT, we're committed to harnessing the power of Brand Ambassador Services to help businesses achieve their marketing goals." },
        { label: 'Strategic Partnerships', description: "With our expertise in building strategic partnerships and driving engagement, we'll deliver effective Brand Ambassador Services tailored to meet your business objectives." }
      ]
    }
  ];

  benefits = [
    {
      title: 'Increased Brand Awareness',
      description:
        "With Pencil Peel IMT's Brand Ambassador Services, a brand ambassador can help increase brand awareness and reach a wider audience, amplifying your brand's message.",
      icon: 'pi pi-bolt'
    },
    {
      title: 'Credibility and Trust',
      description:
        "A well-known and respected ambassador partnered through Pencil Peel IMT can lend credibility and trust to your brand, enhancing your reputation and appeal to target audiences.",
      icon: 'pi pi-users'
    },
    {
      title: 'Product Launch',
      description:
        "By leveraging a brand ambassador through Pencil Peel IMT's services, businesses can help create buzz and excitement around a new product launch, driving interest and engagement.",
      icon: 'pi pi-gift'
    },
    {
      title: 'Social Media Promotion',
      description:
        "Ambassadors partnered through Pencil Peel IMT can promote your brand on their social media channels, reaching millions of followers and driving engagement across digital platforms.",
      icon: 'pi pi-share-alt'
    },
    {
      title: 'Brand Differentiation',
      description:
        "A unique and charismatic ambassador partnered through Pencil Peel IMT can help differentiate your brand from competitors, creating a distinct and memorable brand identity.",
      icon: 'pi pi-star'
    },
    {
      title: 'Leverage the Benefits of Brand Ambassador Services with Pencil Peel IMT',
      description:
        "By partnering with Pencil Peel IMT for Brand Ambassador Services, businesses can leverage these benefits to enhance brand awareness, build credibility, drive engagement, and differentiate their brand in the market. We'll work with you to craft a Brand Ambassador strategy that meets your business objectives. Contact us to explore how we can help you leverage the benefits of Brand Ambassador Services with Pencil Peel IMT.",
      icon: 'pi pi-briefcase',
      span: true
    }
  ];

  steps = [
    {
      title: 'Identification',
      description:
        'We will identify the right ambassador for your brand, based on your target audience, brand values, and marketing goals, ensuring a strategic fit.',
      icon: 'pi pi-search', // PrimeNG icon
    },
    {
      title: 'Strategy Development',
      description:
        'We will develop a customized strategy for the ambassador program, including content creation, promotion, and engagement, tailored to meet your business objectives.',
      icon: 'pi pi-sitemap', // PrimeNG icon
    },
    {
      title: 'Content Creation',
      description:
        'The ambassador will create content featuring your brand, such as social media posts, videos, or photos, highlighting your products or services.',
      icon: 'fa-solid fa-pen-nib', // Font Awesome icon
    },
    {
      title: 'Promotion',
      description:
        'The ambassador will promote your brand on their social media channels, reaching their followers and driving engagement with your brand.',
      icon: 'pi pi-share-alt', // PrimeNG icon
    },
    {
      title: 'Engagement',
      description:
        'The ambassador will engage with their followers, responding to comments and questions about your brand, fostering connections and building relationships.',
      icon: 'fa-solid fa-users', // Font Awesome icon
    },
  ];

  cta = {
    text: `Partner with
      <span
        class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >Pencil Peel IMT</span
      >
      for Effective Brand Ambassador Services`,
    description: `By partnering with Pencil Peel IMT for Brand Ambassador Services, you'll
      leverage our expertise to connect with audiences, build brand loyalty, and
      drive engagement for your business. We'll work with you to craft a Brand
      Ambassador strategy that meets your objectives.`
  }

}
