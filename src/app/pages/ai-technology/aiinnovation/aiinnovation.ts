import { Component } from '@angular/core';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";

@Component({
  selector: 'app-aiinnovation',
  imports: [Industrycards, Whyus, Whycpencilpeel, Nocarouselherosection],
  templateUrl: './aiinnovation.html',
  styleUrl: './aiinnovation.scss'
})

export class Aiinnovation {
  herocontent = {
  title: `
    Innovation with 
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      AI
    </span>: Transforming Businesses with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>
  `,
  description: `Innovation with AI refers to the use of artificial intelligence technologies to drive innovation and improvement in various industries. It involves leveraging AI's capabilities to analyse data, automate processes, and generate insights that can inform business decisions.`,
  image: '/ai/aiinnovation.webp' // Replace with actual image path if needed
};

  indtitle:string = 'Where Can We Use this Particular Service?';
  inddescription:string = 'Our team will apply innovation with AI to various industries';
  industryCards = [
  {
    title: 'Healthcare',
    description: 'Analyzing medical data to improve diagnosis and treatment.',
    image: '/dm/industries/ihospital.webp'
  },
  {
    title: 'Finance',
    description: 'Automating financial processes and generating insights to inform investment decisions.',
    image: '/dm/industries/ifinancial.webp'
  },
  {
    title: 'Manufacturing',
    description: 'Optimizing production processes and predicting maintenance needs.',
    image: '/dm/industries/iauto.webp'
  },
  {
    title: 'Customer Service',
    description: 'Providing personalized customer experiences using AI-powered chatbots.',
    image: '/dm/industries/itech.webp'
  }
  ];
  whyus :WhyUsModel= {
    title:'Benefits of Innovation with AI',
    description:'Our team believes that the benefits of innovation with AI include',
    List: [
      {
        icon: 'pi pi-cog',
        title: 'Improved Efficiency',
        description: 'Automating processes and improving productivity.',
        background: 'bg-green-500',
        border: 'border-green-500'
      },
      {
        icon: 'pi pi-chart-bar',
        title: 'Data-Driven Decision-Making',
        description: 'Generating insights that inform business decisions.',
        background: 'bg-blue-500',
        border: 'border-blue-500'
      },
      {
        icon: 'pi pi-lightbulb',
        title: 'Increased Innovation',
        description: 'Developing new products and services using AI-powered innovation.',
        background: 'bg-purple-500',
        border: 'border-purple-500'
      },
      {
        icon: 'pi pi-star',
        title: 'Competitive Advantage',
        description: 'Gaining a competitive advantage by leveraging AI technologies.',
        background: 'bg-orange-500',
        border: 'border-orange-500'
      }
    ]
  };
  whyCContent = {
    title: "Why Choose Pencil Peel IMT for Innovation with AI?",
    description: ""
};
whycfeautures:any[]= [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team of experienced AI professionals has the expertise to develop and implement AI solutions that drive business value.',
    icon: 'pi pi-users',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  },
  {
    id: 2,
    title: 'Customized Approach',
    description: 'We take a customized approach to AI innovation, tailoring our solutions to meet the specific needs of each client.',
    icon: 'pi pi-sliders-h',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Proven Track Record',
    description: 'We have a proven track record of delivering successful AI projects that drive business growth and improve efficiency.',
    icon: 'pi pi-check-circle',
    borderColor: 'teal-500',
    iconBgColor: 'teal-100',
    iconColor: 'teal-600'
  },
  {
    id: 4,
    title: 'State-of-the-Art Technology',
    description: 'We leverage state-of-the-art AI technologies to develop innovative solutions that meet the evolving needs of businesses.',
    icon: 'pi pi-cog',
    borderColor: 'purple-500',
    iconBgColor: 'purple-100',
    iconColor: 'purple-600'
  },
  {
    id: 5,
    title: 'Collaborative Approach',
    description: 'We work closely with clients to understand their business needs and develop AI solutions that meet their goals.',
    icon: 'pi pi-megaphone',
    borderColor: 'orange-500',
    iconBgColor: 'orange-100',
    iconColor: 'orange-600'
  }
];
}
