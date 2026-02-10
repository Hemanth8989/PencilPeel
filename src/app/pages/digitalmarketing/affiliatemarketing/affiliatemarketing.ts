import { Component } from '@angular/core';
import { Stepsflow } from "../../../components/stepsflow/stepsflow";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from '../../../components/whyus/whyus';
import { ButtonModule } from 'primeng/button';
import { Contactus } from "../../../components/contactus/contactus";
import { CardModule } from 'primeng/card';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-affiliatemarketing',
  imports: [Stepsflow, Whyus, ButtonModule, Contactus, CardModule, Nocarouselherosection, Quotes],
  templateUrl: './affiliatemarketing.html',
  styleUrl: './affiliatemarketing.scss'
})
export class Affiliatemarketing {

  herocontent: any = {
  title: `
    Unlock the Power of<br>
    <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
      Affiliate Marketing with Pencil Peel IMT
    </span>
  `,
  description: `At Pencil Peel IMT, our team of experts specializes in providing Affiliate Marketing Services to help businesses like yours grow and thrive in the digital landscape. With our expertise, you can leverage the power of affiliate marketing to drive traffic, generate sales, and increase brand awareness.`,
  image: '/dm/aff/affpromo.jpeg' // Update the image path if needed
};

quotes = [
  {text: "Unlock the Power of Affiliate Marketing - Drive Sales, Grow Your Business"},
  {text: "Partner with Pencil Peel IMT for Affiliate Marketing Success - Get Results"},
  {text: "Affiliate Marketing that Drives Real Results - Trust Pencil Peel IMT"},
  {text: "Grow Your Business with Affiliate Marketing - Expert Solutions by Pencil Peel IMT"}
]

  steptitle:string = 'Affiliate Marketing Workflow';
  stepdescription:string = 'At Pencil Peel IMT, we specialize in creating and managing successful affiliate programs that drive measurable business results.';
  steps = [
    {
      value: 1,
      title: 'Join Program',
      description:'We’ll help you build and manage an affiliate program that attracts top-performing marketers aligned with your goals.',
      backgroundImage: '/dm/aff/joinaffliate.jpeg',
    },
    {
      value: 2,
      title: 'Link Creation',
      description:'Affiliates receive unique tracking links and promotional assets to effectively share your brand and products.',
      backgroundImage: '/dm/aff/afflinkcreation.jpeg',
    },
    {
      value: 3,
      title: 'Affliate Promotion',
      description:'Affiliates receive unique tracking links and promotional assets to effectively share your brand and products.',
      backgroundImage: '/dm/aff/affpromo.jpeg',
    },
    {
      value: 4,
      title: 'Tracking',
      description:'Our system tracks affiliate actions like clicks and conversions, ensuring accurate attribution and reporting.',
      backgroundImage: '/dm/aff/afftracking.jpeg',
    },
  ];
  whyUs:WhyUsModel = {
      title:'Benefits of Affiliate Marketing with Pencil Peel',
      description: ``,
      List:[
  {
    icon: 'pi pi-percentage',
    title: 'Performance-Based Payment',
    description: "You'll only pay for actual results, ensuring cost-effectiveness.",
    background: 'bg-green-100',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-globe',
    title: 'Expanded Reach',
    description: "We'll help you tap into new audiences through the affiliate's network.",
    background: 'bg-indigo-100',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-megaphone',
    title: 'Increased Brand Awareness',
    description: 'Our team will help you increase visibility and credibility through affiliate promotions.',
    background: 'bg-yellow-100',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-check-square',
    title: 'Low Entry Barriers',
    description: "We'll help you set up an affiliate program with minimal upfront investment.",
    background: 'bg-blue-100',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Scalability',
    description: 'Our team will help you recruit more affiliates to scale marketing efforts without hiring additional staff.',
    background: 'bg-purple-100',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-share-alt',
    title: 'Access to Affiliate Network',
    description: "We'll connect you with a network of affiliates who can promote your products or services.",
    background: 'bg-teal-100',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-cog',
    title: 'Ongoing Support & Optimization',
    description: "We'll provide ongoing support and optimization to ensure that your affiliate program continues to perform well.",
    background: 'bg-orange-100',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Regular Reporting & Analysis',
    description: 'We’ll provide regular reporting and analysis to help you understand the performance of your affiliate program.',
    background: 'bg-rose-100',
    border: 'border-rose-500'
  }
]
  }

  //contact conten
  contacttitle:string = ` Get Started with Pencil Peel IMT Affiliate Marketing Services`;
  contactdescription:string = `Contact us today to learn more about our affiliate marketing services and how we can help your business thrive.
      Let's work together to drive traffic, generate sales, and increase brand awareness with affiliate marketing.`;

}
