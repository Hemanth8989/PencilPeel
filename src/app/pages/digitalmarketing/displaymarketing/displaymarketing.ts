import { Component } from '@angular/core';
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from '../../../components/whyus/whyus';
import { CarouselModule } from 'primeng/carousel';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-displaymarketing',
  imports: [Whyus, CarouselModule, Nocarouselherosection, Quotes],
  templateUrl: './displaymarketing.html',
  styleUrl: './displaymarketing.scss'
})
export class Displaymarketing {

    herocontent: any = {
    title: `
      Unlock the Power<br>
      <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        Display Marketing with Pencil Peel IMT
      </span>
    `,
    description: ' Reach a wider audience, build brand awareness, and drive conversions with expert-led visual campaigns.',
    image: '/dm/display/displaymkthome.webp'
  };

  quotes = [
    {text: "Visualize Success, Maximize Reach - Display Marketing with Pencil Peel IMT"},
    {text: "Targeted Ads, Tangible Results - Unlock the Power of Display Marketing"},
    {text: "Elevate Your Brand, Expand Your Reach - Expert Display Marketing Solutions by Pencil Peel IMT"}
  ]
  whyUs:WhyUsModel = {
    title:'Benefits of Display Marketing with Pencil Peel IMT',
    description:`We'll help you create visually appealing ads that grab attention and communicate your brand's message effectively.`,
    List:[
      {
        icon: 'pi pi-globe',
        title: 'Wide Reach',
        description: 'Our display marketing services help you reach a vast audience across millions of websites and mobile apps.',
        background: 'bg-blue-100',
        border: 'border-blue-200'
      },
      {
        icon: 'pi pi-image',
        title: 'Enhanced Visual Appeal',
        description: 'We design visually engaging ads that capture attention and clearly communicate your brand message.',
        background: 'bg-pink-100',
        border: 'border-pink-200'
      },
      {
        icon: 'pi pi-megaphone',
        title: 'Brand Awareness',
        description: 'Our campaigns reinforce your brand identity, increasing recognition and recall among your target audience.',
        background: 'bg-orange-100',
        border: 'border-orange-200'
      },
      {
        icon: 'pi pi-refresh',
        title: 'Effective Retargeting',
        description: 'We re-engage previous visitors to your site with retargeted ads, improving the likelihood of conversion.',
        background: 'bg-purple-100',
        border: 'border-purple-200'
      },
      {
        icon: 'pi pi-users',
        title: 'Targeted Advertising',
        description: 'We ensure your ads reach the most relevant audience using smart targeting, boosting efficiency and ROI.',
        background: 'bg-green-100',
        border: 'border-green-200'
      }
    ]
  }
  displayMarketingSlides = [
  {
    id: 'slide1',
    image: '/dm/display/Adscreative.webp',
    title: 'Ad Creatives',
    description: 'We create visually appealing ads that grab attention and communicate your brand’s message effectively.'
  },
  {
    id: 'slide2',
    image: '/dm/display/Adsplacementdisplay.webp',
    title: 'Ad Placement',
    description: 'We strategically place your ads across ad networks, websites, and apps to maximize reach and visibility.'
  },
  {
    id: 'slide3',
    image: '/dm/display/audiencetarget.webp',
    title: 'Targeting',
    description: 'We target users based on demographics, interests, and online behavior to ensure your ads reach the right audience.'
  },
  {
    id: 'slide4',
    image: '/dm/display/AdsBidding.webp',
    title: 'Ad Bidding',
    description: 'We manage your CPC or CPM strategy to ensure cost-efficient and effective ad visibility.'
  },
  {
    id: 'slide5',
    image: '/dm/display/performancemontoring.webp',
    title: 'Performance Monitoring',
    description: 'We monitor impressions, clicks, and conversions to track and improve campaign effectiveness in real-time.'
  }
];


}
