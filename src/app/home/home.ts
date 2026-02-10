import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Testimonials } from "./testimonials/testimonials";
import { MissionSection } from './mission-section/mission-section';
import { HomeHeroSection } from "./home-hero-section/home-hero-section";
import { HomeAboutUs } from "./home-about-us/home-about-us";
import { Servicesnew } from "../components/servicesnew/servicesnew";
import * as AOS from 'aos';
import { Faq } from "./faq/faq";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Testimonials, MissionSection, HomeHeroSection, HomeAboutUs, Servicesnew, Faq],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  service: any = {
    title: `Amplify Your Success with Our <span class="text-orange-500 font-bold">Proven Services</span>`,
    description: `At <span class="text-orange-500 font-bold">Pencil Peel IMT</span>, we’re not just an advertising agency—
    we’re your strategic partner in growth. As South India’s <span class="text-orange-500 font-bold">Best Integrated Marketing Technology</span> company, we blend creativity, tech, and data
     to transform visions into impactful realities. Our tailored solutions are crafted to fuel your business success, whether you’re a start-up, SME, or enterprise.`,
    list: [
      {
        title: 'Digital Marketing Services',
        description: 'We will elevate your online presence with our expert digital marketing solutions.',
        image: 'dm/slide1.webp',
        route: '/digitalmarketing'
      },
      {
        title: 'Software Development',
        description: 'Our team will develop custom software tailored to your business needs.',
        image: 'sde/webdev.webp',
        route: '/software'
      },
      {
        title: 'AI Technology Services',
        description: 'We will leverage the power of AI to drive business innovation and growth.',
        image: '/ai/aichatbot.webp',
        route: '/aitechnology'
      },
      {
        title: 'Personal Branding',
        description: 'Our team will help establish a strong personal brand that resonates with your audience',
        image: '/dm/inf/infhome.webp',
        route: '/services/personal-branding'
      },
      {
        title: 'IT Consulting',
        description: 'We will provide expert guidance to optimize your IT infrastructure and strategy',
        image: 'sde/maintenance.webp',
        route: '/itconsulting'
      },
      {
        title: 'AD Film Making',
        description: 'Our team will create compelling ad films that capture your brand essence',
        image: '/dm/adFilm.png',
        route: '/services/ad-films'
      },
      {
        title: 'Outdoor Advertising',
        description: 'Our team will reach a wider audience with our outdoor advertising solutions',
        image: '/outdoor/Billboard/digitalbillboard.webp',
        route: '/outdooradvertising'
      },
      {
        title: 'Telecaller Marketing',
        description: 'Our team will implement effective telecaller marketing strategies to reach your target audience',
        image: '/dm/telecaller.png',
        route: '/services/telecallers'
      },
      {
        title: 'Influencer Marketing',
        description: 'We will partner with influencers to promote your brand and products',
        image: '/dm/services/influencermarketing.webp',
        route: '/digitalmarketing/influencer'
      },
      {
        title: 'Video Production',
        description: 'Our team will produce high-quality videos that tell your brand story',
        image: '/dm/services/videoproduction.webp',
        route: '/services/video-production'
      },
      {
        title: 'Film Marketing',
        description: 'Our team will promote your movie with our expert marketing strategies.',
        image: '/film/fevent.webp',
        route: '/filmmarketing'
      },
      {
        title: 'Social Media Marketing',
        description: 'We’ll ignite your brand’s presence on social media—boosting engagement, building communities, and driving growth.',
        image: '/dm/services/servicesSMM.webp',
        route: '/socialmediamarketing'
      },
      {
        title: 'Brand Advertising',
        description: 'We will create impactful brand advertising campaigns that drive results',
        image: '/dm/services/brandadv.webp',
        route: '/services/brand-advertising'
      },
      {
        title: 'Brand Ambassador Services',
        description: 'We will partner with influencers and brand ambassadors to amplify your brand',
        image: '/dm/brandmgt/brand-ambassador.png',
        route: '/services/brand-ambassador'
      },
      {
        title: 'Web Design & Development',
        description: 'We Craft visually stunning, high-performing websites that captivate audiences and drive conversions.',
        image: 'sde/webdesign.webp',
        route: '/websitedevelopment'
      },
      {
        title: 'Mobile Application Design & Development',
        description: 'We Build intuitive, feature-rich mobile apps that deliver seamless experiences on iOS & Android.',
        image: 'sde/mobdevelopment.webp',
        route: '/appdevelopment'
      },
      {
        title: 'Video Marketing',
        description: 'We will leverage video marketing to engage your audience and drive conversions',
        image: '/dm/services/videomarketing.webp',
        route: '/services/video-marketing'
      },
    ]
  }

  benefits = [
    {
      icon: 'pi-briefcase',
      title: 'Expertise That Drives Results',
      content: `At Pencil Peel IMT, you’re partnering with South India’s Best Advertising Company 🏆, backed by 10+ years of expertise in integrated marketing and technology. 
Our team of innovators, designers, and tech experts doesn’t just deliver services—we craft growth. 
With a proven track record of 500+ successful projects and 98% client retention, you can trust us to transform your vision into reality.`
    },
    {
      icon: 'pi-cog',
      title: 'Tailored Solutions for Every Business',
      content: `Whether you’re a start-up, SME, or enterprise, we customize strategies to align with your goals. 
No cookie-cutter approaches. We blend creativity, tech, and data to maximize ROI and outperform competitors.`
    },
    {
      icon: 'pi-bolt',
      title: 'Cutting-Edge Innovation',
      content: `We harness AI, automation, and the latest tools to future-proof your business. 
From viral social media campaigns to AR/VR experiences, we push limits to keep you ahead. 
Our solutions scale with your growth, ensuring long-term success.`
    },
    {
      icon: 'pi-users',
      title: 'One-Stop Support, No Middlemen',
      content: `Skip the hassle of multiple agencies. We’re your all-in-one partner for digital marketing, web development, AI, PR, and more. 
Direct access to senior experts, 24/7 collaboration, and seamless execution—your success is our mission.`
    },
    {
      icon: 'pi-chart-line',
      title: 'Transparency & Measurable Growth',
      content: `No guesswork. We track every metric (traffic, conversions, engagement) and share transparent reports.`
    },
    {
      icon: 'pi-globe',
      title: 'Hyperlocal + Global Reach',
      content: `We speak your audience’s language—Hindi, Tamil, Telugu, and more. 
Targeted ads ensure maximum impact, locally and globally.`
    },
    {
      icon: 'pi-star',
      title: 'Award-Winning Creativity',
      content: `🏆 South India’s Best Advertising Company. 
Stunning designs, viral videos, impact ads—we create movements that grow your brand.`
    },
    {
      icon: 'pi-wallet',
      title: 'Cost-Efficient & Scalable',
      content: `Reduce costs by 30–50% with AI-driven tools. 
Flexible packages fit every budget, ensuring maximum ROI.`
    },
    {
      icon: 'pi-heart',
      title: 'Long-Term Partnership',
      content: `"Your success = Our mission." 
Post-project support, loyalty discounts, and scaling—we’re committed to your growth.`
    },
    {
      icon: 'pi-shield',
      title: 'Risk-Free Start',
      content: `FREE consultations, audits, or prototypes. 
100% satisfaction guarantee. Start with confidence.`
    }
  ];


  ngAfterViewInit(): void {
    AOS.init();
  }

  ngAfterViewChecked() {
    AOS.refresh(); // refresh AOS after DOM updates
  }
}
