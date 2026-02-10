import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Contactus } from "../../../components/contactus/contactus";
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Stepsflow } from "../../../components/stepsflow/stepsflow";
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Whyus } from "../../../components/whyus/whyus";
import { WhyUsModel } from '../../../models/whyUs';

@Component({
  selector: 'app-ppc',
  imports: [CardModule, Contactus, Nocarouselherosection, Stepsflow, CardModule, TimelineModule, ButtonModule, CommonModule, Whyus],
  templateUrl: './ppc.html',
  styleUrl: './ppc.scss'
})
export class Ppc {
  herocontent: any = {
  title: `
  <h2 class="text-base text-gray-100 font-semibold tracking-wide uppercase">Unlock the Power</h2>
    <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
      Pay-Per-Click (PPC) Advertising with Pencil Peel IMT
    </span>
  `,
  description: `
    At Pencil Peel IMT, our team of experts specializes in creating and managing effective PPC campaigns that drive real results for our clients. With PPC, you can reach your target audience, increase brand visibility, and drive conversions.
  `,
  image: '/dm/ppc/ppchome.jpeg'
};
  steptitle:string = 'How PPC Works';
  stepdescription:string = 'At Pencil Peel IMT, we specialize in creating and managing successful affiliate programs that drive measurable business results.';
  steps:any[] = [
  {
    value: 1,
    title: 'Keyword Research and Selection',
    description: 'Our team will conduct thorough keyword research to identify relevant terms and phrases that align with your business goals.',
    backgroundImage: '/dm/ppc/ppckey.jpeg',
  },
  {
    value: 2,
    title: 'Ad Creation',
    description: "We'll craft compelling ad copy that resonates with your target audience and drives clicks.",
    backgroundImage: '/dm/ppc/ppcads.jpeg',
  },
  {
    value: 3,
    title: 'Bidding',
    description: 'Our experts will manage your bids to ensure maximum ROI and campaign efficiency.',
    backgroundImage: '/dm/ppc/ppcadplacement.jpeg',
  },
  {
    value: 4,
    title: 'Ad Placement',
    description: "We'll place your ads in prime locations, such as search results pages, social media feeds, and partner websites.",
    backgroundImage: '/dm/ppc/ppcads.jpeg',
  },
  {
    value: 5,
    title: 'Performance Tracking',
    description: 'Our team will monitor key metrics like CTR, CPC, conversion rates, and ROI to optimize your campaign.',
    backgroundImage: '/dm/ppc/ppcadv.jpeg',
  },
];
//whyus
whyUs:WhyUsModel ={
  title:' Benefits of PPC with Pencil Peel',
  description:'',
  List: [
  {
    icon: 'pi pi-bolt',
    title: 'Immediate Results',
    description: "Our PPC campaigns can drive traffic to your site as soon as they're live.",
    background: 'bg-red-500',
    border: 'border-red-500'
  },
  {
    icon: 'pi pi-sliders-h',
    title: 'Highly Targeted',
    description: "We'll target specific demographics, locations, devices, and user interests to reach your ideal audience.",
    background: 'bg-blue-600',
    border: 'border-blue-600'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Measurable and Trackable',
    description: "Our team will provide regular performance reports, enabling you to track ROI and make data-driven decisions.",
    background: 'bg-purple-600',
    border: 'border-purple-600'
  },
  {
    icon: 'pi pi-wallet',
    title: 'Cost-Effective',
    description: "You'll only pay for actual clicks, ensuring maximum ROI.",
    background: 'bg-green-600',
    border: 'border-green-600'
  },
  {
    icon: 'pi pi-eye',
    title: 'Improved Brand Visibility',
    description: "Our campaigns will increase your brand's visibility, even if users don't click.",
    background: 'bg-yellow-500',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-refresh',
    title: 'Increased Flexibility',
    description: "Our PPC campaigns can be adjusted and optimized in real-time to ensure maximum ROI.",
    background: 'bg-teal-500',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-shield',
    title: 'Enhanced Competitiveness',
    description: "We'll help you stay ahead of your competitors and establish your brand as an industry leader.",
    background: 'bg-orange-600',
    border: 'border-orange-600'
  },
  {
    icon: 'pi pi-desktop',
    title: 'Improved Website Experience',
    description: "Our team will optimize your website to ensure a seamless user experience and maximize conversions.",
    background: 'bg-indigo-600',
    border: 'border-indigo-600'
  },
  {
    icon: 'pi pi-database',
    title: 'Valuable Insights',
    description: "We'll provide you with actionable insights and data to inform your marketing strategy.",
    background: 'bg-pink-600',
    border: 'border-pink-600'
  },
  {
    icon: 'pi pi-sort-amount-up',
    title: 'Scalability',
    description: "Our PPC campaigns can be scaled up or down to meet your business needs.",
    background: 'bg-cyan-600',
    border: 'border-cyan-600'
  }
]
}
//timeline how it works
 timeline = [
  {
    icon: 'pi pi-eye',
    title: 'Increases Brand Awareness',
    description: 'Our PPC campaigns will build recognition and establish your brand as an industry leader.',
    color: 'bg-yellow-500',
  },
  {
    icon: 'pi pi-users',
    title: 'Generates Quality Traffic',
    description: "We'll attract users actively searching for products or services like yours.",
    color: 'bg-blue-600',
  },
  {
    icon: 'pi pi-shopping-cart',
    title: 'Boosts Sales and Conversions',
    description: 'Our targeted ads will drive users directly to product pages or sign-up forms.',
    color: 'bg-green-600',
  },
  {
    icon: 'pi pi-map-marker',
    title: 'Drives Local Traffic',
    description: "We'll help local businesses attract customers nearby.",
    color: 'bg-red-500',
  },
  {
    icon: 'pi pi-refresh',
    title: 'Retargeting Campaigns',
    description: "Our team will re-engage visitors who didn't convert on their first visit.",
    color: 'bg-purple-600',
  },
];
//contact us
contacttitle:string= `Get Started with Pencil Peel IMT PPC Services`;
contactdescription:string = `Contact us today to learn more about our PPC services and how we can help your business thrive. Let's work together to drive traffic, conversions, and revenue with PPC advertising.`;

}
