import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import AOS from 'aos';
@Component({
  selector: 'app-faq',
  imports: [CommonModule, AccordionModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq implements OnInit {

   faqs = [
    {
      question: `What makes Pencil Peel IMT stand out as South India’s Best Advertising Company?`,
      answer: `With 10+ years of excellence, our blend of young creativity, real-time expertise, and unwavering dedication sets us apart. We don’t just deliver services—we craft success stories.`
    },
    {
      question: `What services does Pencil Peel IMT offer?`,
      answer: `We’re a one-stop solution partner for: Digital Marketing, Software Development, AI Technology, Movie & Brand Promotion, Lead Generation, Influencer Marketing, and more. Tailored solutions to scale your business.`
    },
    {
      question: `How does Pencil Peel IMT ensure client satisfaction?`,
      answer: `Our team of thorough professionals works with commitment, transparency, and collaboration. We listen, customize, and deliver results that exceed expectations.`
    },
    {
      question: `Can Pencil Peel IMT handle both digital and traditional marketing?`,
      answer: `Absolutely! We master both worlds: Digital (SEO, social media, AI-driven campaigns) and Traditional (outdoor ads, PRO work, celebrity management). Your growth, our strategy.`
    },
    {
      question: `How does AI Technology benefit my business with Pencil Peel IMT?`,
      answer: `We leverage AI for personalized learning, automation, and data insights, boosting efficiency, innovation, and ROI. Example: AI-powered adaptive learning systems for educational institutions.`
    },
    {
      question: `Is Pencil Peel IMT only for big brands, or do you work with SMEs?`,
      answer: `All sizes welcome! We customize solutions for start-ups, SMEs, and enterprises. Growth has no limits.`
    },
    {
      question: `How long does it take to see results from a campaign?`,
      answer: `It depends on complexity: Digital campaigns (4–6 weeks), branding (3–6 months), AI integrations (6–12 months). We track, optimize, and report progress transparently.`
    },
    {
      question: `Does Pencil Peel IMT create content, or do I need to provide it?`,
      answer: `Our creative minds handle it all: copywriting, graphics, videos, ad films. We craft stories that resonate.`
    },
    {
      question: `How does Pencil Peel IMT manage budgets?`,
      answer: `Flexible, transparent pricing. We prioritize ROI, not just spending. Cost-effective solutions, maximum impact.`
    },
    {
      question: `Why should I trust Pencil Peel IMT as a partner?`,
      answer: `Proven track record, South India’s Best Advertising Company award, and a team that treats your brand like their own. Let’s light up success together 😊.`
    },
    {
      question: `How does Pencil Peel IMT craft a Digital Marketing strategy for my business?`,
      answer: `We start by identifying your goals, target audience, and budget. Our team creates a customized plan using SEO, PPC, content marketing, and social media to drive traffic, leads, and conversions. Result-oriented, not one-size-fits-all.`
    },
    {
      question: `Can Pencil Peel IMT boost my brand’s Social Media presence?`,
      answer: `Absolutely! We create engaging content, manage communities, run targeted ads (Facebook, Instagram, LinkedIn), and track analytics to grow followers and engagement.\n\nExample: Helped a local business triple Instagram follower in 3 months.`
    },
    {
      question: `What makes Pencil Peel IMT’s Software Design & Development unique?`,
      answer: `We blend cutting-edge tech (AI, ML) with user-centric design. Our process ensures scalable, secure, and intuitive solutions. From custom apps to ERP systems, we deliver results, not just code.`
    },
    {
      question: `How does Pencil Peel IMT create impactful Web & Mobile Applications?`,
      answer: `Our team designs responsive, fast, and user-friendly interfaces (UI/UX). We develop native/hybrid apps optimized for performance and SEO.\n\nExample: A fitness app that boosted user retention by 40%.`
    },
    {
      question: `Why choose Pencil Peel IMT for Outdoor Advertising?`,
      answer: `We strategically place billboards, hoardings, and transit ads in high-traffic areas. Our creative designs grab attention and drive footfall.\n\nResult: A client’s restaurant saw a 30% increase in walk-ins.`
    },
    {
      question: `How can Pencil Peel IMT strengthen my Personal Branding?`,
      answer: `We craft a unique narrative, optimize your Social Media profile(s), create thought leadership content, and leverage influencers.\n\nExample: A professional secured 3 high-profile collaborations in 2 months.`
    }
  ];

  activePanels: (string | null)[] = [null, null];

  getFaqColumn(col: number) {
    const half = Math.ceil(this.faqs.length / 2);
    return col === 0 ? this.faqs.slice(0, half) : this.faqs.slice(half);
  }

  onPanelChange(col: number, value: any) {
    this.activePanels[col] = value;
  }

  ngOnInit(): void {
    AOS.Init()
  }
}
