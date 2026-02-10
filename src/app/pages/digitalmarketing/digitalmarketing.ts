import { Component } from '@angular/core';
import { Herosection } from '../../components/herosection/herosection';
import { Whyus } from "../../components/whyus/whyus";
import { Services } from '../../components/services/services';
import { Dmservice } from '../../services/dmservice';
import { WhyUsModel } from '../../models/whyUs';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { Contactus } from "../../components/contactus/contactus";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digitalmarketing',
  imports: [Whyus, Services, ButtonModule, CardModule, CarouselModule, Contactus, CommonModule, Herosection],
  templateUrl: './digitalmarketing.html',
  styleUrl: './digitalmarketing.scss'
})
export class Digitalmarketing {
  digitalMarketingSlides = [
  {
    id: 'slide1',
    image: '/dm/slide1.webp',
    title: `
      Unlock the Power of 
      <span class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-tight">
        Digital Marketing
      </span>
      with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
    description: 'Transforming your idea into a powerful digital presence. Trusted by many global companies. Creating lasting impact through design & technology.'
  },
  {
    id: 'slide2',
    image: '/dm/slide2.webp',
    title: `
      Drive Business Growth through 
      <span class="bg-gradient-to-r from-pink-500 via-yellow-400 to-red-600 bg-clip-text text-transparent font-bold tracking-tight">
        Custom Strategies
      </span>
      with 
      <span class="bg-gradient-to-r from-violet-500 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
    description: 'We turn your business ideas into reality through strategy, creativity, and cutting-edge digital technologies. From concept to execution — we guide you every step of the way.'
  },
  {
    id: 'slide3',
    image: '/dm/slide3.webp',
    title: `
      Creating Impact through
      <span class="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold tracking-tight">
        Design & Technology
      </span>
      at 
      <span class="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
    description: 'We combine world-class design with advanced technology to create digital experiences that drive real business results. From websites to marketing campaigns, our solutions leave a lasting impression.'
  }
];


  whyus:WhyUsModel= {
    title:"Why Choose Pencil Peel IMT?",
    description: "",
    List:[
    {
        icon: "pi pi-bullseye", // More direct for 'Hyper-Targeted Campaigns'
        title: "Hyper-Targeted Campaigns",
        description: "We don't just chase trends—we predict them. Our strategies are built on real-time data, not guesswork.",
        background: "bg-blue-500",
        border: "border-blue-500"
    },
    {
        icon: "pi pi-globe", // Represents global reach, multi-channel
        title: "Multi-Channel Dominance",
        description: "From TikTok to Google Ads, we craft seamless, omnichannel experiences that amplify your brand everywhere.",
        background: "bg-teal-500",
        border: "border-teal-500"
    },
    {
        icon: "pi pi-chart-bar", // Clear for 'ROI Tracking'
        title: "Transparent ROI Tracking",
        description: "No vanity metrics. Just clear, actionable insights that prove growth (and justify every dollar spent).",
        background: "bg-green-500",
        border: "border-green-500"
    },
    {
        icon: "pi pi-sparkles", // Evokes creativity, viral potential
        title: "Viral-Worthy Creativity",
        description: "Our content doesn't just sell—it sparks conversations and builds cult-like brand loyalty.",
        background: "bg-orange-500",
        border: "border-orange-500"
    },
    {
        icon: "pi pi-android", // Directly represents AI
        title: "AI + Human Brilliance",
        description: "We merge cutting-edge tech with authentic storytelling for campaigns that feel human and perform like machines.",
        background: "bg-purple-500",
        border: "border-purple-500"
    },
    {
        icon: "pi pi-send", // Represents driving growth forward, partnership
        title: "Your Growth, Our Obsession",
        description: "We're not just another agency. We're your long-term growth partners.",
        background: "bg-pink-500",
        border: "border-pink-500"
    }
]
  }
  services:any[];
  contacttitle = "Ready to Elevate Your Digital Marketing Game?";
  contactdescription = "Let's connect and explore how we can help you achieve your digital marketing goals.";
  constructor(private digiService:Dmservice){}
  ngOnInit(){
    this.getServices();
  }
  getServices(){
    this.services = this.digiService.getDigitalServices();
  }
}
