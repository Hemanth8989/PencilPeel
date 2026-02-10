import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from '../../../components/whyus/whyus';
import { Contactus } from "../../../components/contactus/contactus";

@Component({
  selector: 'app-growthmarketing',
  imports: [CommonModule, CardModule, Nocarouselherosection, Whyus, Contactus],
  templateUrl: './growthmarketing.html',
  styleUrl: './growthmarketing.scss'
})
export class Growthmarketing {
  herocontent = {
  title: `
    Unlock Your Growth Potential with 
    <span class="bg-gradient-to-r from-green-500 via-emerald-400 to-lime-500 bg-clip-text text-transparent font-bold tracking-tight">
      Data-Driven Marketing
    </span> 
    by 
    <span class="bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'At Pencil Peel IMT, we drive measurable growth through targeted campaigns, smart analytics, and customer-first strategies tailored to your business goals.',
  image: '/dm/services/growthm.webp' // Update with the correct image path if needed
};

whyUs:WhyUsModel ={
  title: 'Benefits of Growth Marketing',
  description:'',
  List:[
  {
    icon: 'pi pi-dollar',
    title: 'Increased Revenue',
    description: 'Drive revenue growth by identifying and optimizing high-performing marketing channels and campaigns.',
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-users',
    title: 'Improved Customer Engagement',
    description: 'Boost customer engagement through personalized and relevant experiences tailored to their needs.',
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Data-Driven Decision Making',
    description: 'Gain actionable insights from data to make informed business decisions and accelerate growth.',
    background: 'bg-indigo-500',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-star',
    title: 'Competitive Advantage',
    description: 'Stay ahead of the competition by identifying and capitalizing on new market opportunities.',
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-user',
    title: 'Enhanced Customer Insights',
    description: 'Understand your audience better with deep insights into behavior, preferences, and needs.',
    background: 'bg-pink-500',
    border: 'border-pink-500'
  },
  {
    icon: 'pi pi-percentage',
    title: 'Improved ROI',
    description: 'Maximize your marketing budget by optimizing spend and tracking key performance indicators (KPIs).',
    background: 'bg-orange-500',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-refresh',
    title: 'Increased Agility',
    description: 'Quickly respond to market changes using data and experimentation for agile marketing strategies.',
    background: 'bg-red-500',
    border: 'border-red-500'
  },
  {
    icon: 'pi pi-briefcase',
    title: 'Better Alignment with Business Goals',
    description: 'Align marketing strategies with business objectives to drive consistent, strategic growth.',
    background: 'bg-cyan-500',
    border: 'border-cyan-500'
  },
  {
    icon: 'pi pi-sliders-h',
    title: 'Scalability',
    description: 'Adapt growth strategies for businesses of all sizes, from startups to enterprises.',
    background: 'bg-teal-500',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Measurable Results',
    description: 'Track campaign performance with analytics and KPIs to measure success and guide strategy.',
    background: 'bg-lime-500',
    border: 'border-lime-500'
  },
  {
    icon: 'pi pi-id-card',
    title: 'Personalization',
    description: 'Deliver personalized marketing experiences by leveraging data to target specific audience segments.',
    background: 'bg-amber-500',
    border: 'border-amber-500'
  }
]
}

contacttitle = 'Contact us Today';
contactdescription = `At Pencil Peel IMT, we provide growth marketing services that drive business growth, increase revenue, and enhance customer engagement. Contact us Today to learn more about our growth marketing services.`;

}
