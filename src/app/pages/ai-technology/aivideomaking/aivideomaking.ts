import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { Title } from '@angular/platform-browser';
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { Timeline } from 'primeng/timeline';
import { Productcard } from "../../../components/productcard/productcard";
@Component({
  selector: 'app-aivideomaking',
  imports: [Nocarouselherosection, AccordionModule, CommonModule, TabsModule, CardModule, Whyus, Timeline, Productcard],
  templateUrl: './aivideomaking.html',
  styleUrl: './aivideomaking.scss'
})
export class Aivideomaking {
  heroContent = {
  title: `
    Captivate Your Audience with 
    <span class="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent font-bold tracking-tight">
      AI Video Advertising
    </span>
    from 
    <span class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: `At Pencil Peel IMT, we harness the power of artificial intelligence to create stunning video ads that captivate audiences and drive results. Our AI video making advertising solutions transform your ideas into engaging visual stories.`,
  image: '/ai/aivideoad.webp' // Replace with your actual hero image path
};


cards = [
  {
    title: "Expertise",
    border: "border-blue-400",
    points: [
      { subtitle: "Creative expertise", text: "Our team of creatives develops engaging and interactive content that resonates with your target audience." },
      { subtitle: "Technical expertise", text: "Our team of technicians designs and deploys AI video making solutions that meet your needs." }
    ]
  },
  {
    title: "Innovative Approach",
    border: "border-green-400",
    points: [
      { subtitle: "AI-powered video making", text: "We harness the power of AI to create stunning videos that captivate audiences and drive results." },
      { subtitle: "Data-driven insights", text: "We provide data-driven insights to help optimize your video ad campaign and improve performance." }
    ]
  },
  {
    title: "Personalized Service",
    border: "border-yellow-400",
    points: [
      { subtitle: "Customized solutions", text: "We develop customized AI video making solutions that meet your specific needs and goals." },
      { subtitle: "Collaborative approach", text: "Our team works closely with you to understand your vision and requirements." }
    ]
  },
  {
    title: "Results-Driven",
    border: "border-pink-400",
    points: [
      { subtitle: "Focus on results", text: "We're focused on delivering results-driven AI video making advertising solutions that drive business growth." },
      { subtitle: "Measurable ROI", text: "We help you track the effectiveness of your AI video ad campaign and provide measurable ROI." }
    ]
  },
  {
    title: "Partnership",
    border: "border-purple-400",
    points: [
      { subtitle: "Long-term partnership", text: "We believe in building long-term partnerships with our clients, providing ongoing support and optimization." },
      { subtitle: "Flexibility", text: "We're flexible and adaptable, able to adjust to changing business needs and priorities." }
    ]
  }
];


whyUs:WhyUsModel = {
  title:'Benefits of AI Video Making Advertising',
  description:'',
  List: [
    {
      icon: 'pi pi-users',
      title: 'Increased Engagement',
      description: 'AI video ads encourage audiences to interact with your brand.',
      background: 'bg-green-500',
      border: 'border-green-500'
    },
    {
      icon: 'pi pi-user-edit',
      title: 'Personalization',
      description: 'We help you create personalized video ads that resonate with your target audience.',
      background: 'bg-teal-500',
      border: 'border-teal-500'
    },
    {
      icon: 'pi pi-dollar',
      title: 'Cost-Effectiveness',
      description: 'AI video ad production is cost-efficient, making it accessible to all business sizes.',
      background: 'bg-yellow-500',
      border: 'border-yellow-500'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'Measurable Results',
      description: 'We track your AI video campaign performance and provide data-driven insights.',
      background: 'bg-purple-500',
      border: 'border-purple-500'
    },
    {
      icon: 'pi pi-clock',
      title: 'Time-Saving',
      description: 'AI automates video creation, saving you time and resources.',
      background: 'bg-pink-500',
      border: 'border-pink-500'
    },
    {
      icon: 'pi pi-sliders-h',
      title: 'Scalability',
      description: 'Easily produce multiple video ads for large-scale campaigns.',
      background: 'bg-blue-600',
      border: 'border-blue-600'
    },
    {
      icon: 'pi pi-align-center',
      title: 'Consistency',
      description: 'Maintain brand and message consistency across all ads.',
      background: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
    {
      icon: 'pi pi-palette',
      title: 'Creative Flexibility',
      description: 'Explore different creative styles to make your video ads stand out.',
      background: 'bg-orange-500',
      border: 'border-orange-500'
    },
    {
      icon: 'pi pi-bullseye',
      title: 'Targeted Advertising',
      description: 'Target specific audiences and demographics effectively.',
      background: 'bg-red-500',
      border: 'border-red-500'
    },
    {
      icon: 'pi pi-percentage',
      title: 'Improved ROI',
      description: 'Optimize campaigns with insights and boost your return on investment.',
      background: 'bg-lime-500',
      border: 'border-lime-500'
    },
    {
      icon: 'pi pi-megaphone',
      title: 'Enhanced Brand Awareness',
      description: 'AI video ads help boost brand recognition and awareness.',
      background: 'bg-cyan-500',
      border: 'border-cyan-500'
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Increased Conversions',
      description: 'Drive sales and conversions with high-impact video content.',
      background: 'bg-emerald-500',
      border: 'border-emerald-500'
    },
    {
      icon: 'pi pi-video',
      title: 'Better Storytelling',
      description: 'Tell compelling stories that connect emotionally with your audience.',
      background: 'bg-violet-500',
      border: 'border-violet-500'
    },
    {
      icon: 'pi pi-share-alt',
      title: 'Platform Flexibility',
      description: 'Create videos in multiple formats suitable for various platforms.',
      background: 'bg-rose-500',
      border: 'border-rose-500'
    },
    {
      icon: 'pi pi-database',
      title: 'Data-Driven Decisions',
      description: 'Use insights and analytics to shape effective ad strategies.',
      background: 'bg-sky-500',
      border: 'border-sky-500'
    }
  ]
};

timelineEvents:any[]=[
  {
    step: 'Step 1',
    title: 'Discovery and Analysis',
    icon: 'pi pi-search',
    markerColor: 'bg-blue-500',
    badgeColor: 'bg-blue-100 text-blue-800',
    details: [
      {
        title: 'Learning about your business',
        description: 'We conduct thorough analysis of your business processes, pain points, and goals to identify areas where AI can drive efficiency gains.'
      }
    ]
  },
  {
    step: 'Step 2',
    title: 'AI Solution Design',
    icon: 'pi pi-lightbulb',
    markerColor: 'bg-yellow-500',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    details: [
      {
        title: 'Custom AI design',
        description: 'Our team designs custom AI-powered software solutions that address specific business needs and goals.'
      }
    ]
  },
  {
    step: 'Step 3',
    title: 'Development and Testing',
    icon: 'pi pi-cog',
    markerColor: 'bg-green-500',
    badgeColor: 'bg-green-100 text-green-800',
    details: [
      {
        title: 'Build & test',
        description: 'We develop and test the software solution to ensure it meets required standards and delivers measurable outcomes.'
      }
    ]
  },
  {
    step: 'Step 4',
    title: 'Implementation and Integration',
    icon: 'pi pi-plug',
    markerColor: 'bg-pink-500',
    badgeColor: 'bg-pink-100 text-pink-800',
    details: [
      {
        title: 'Deploy solution',
        description: 'Our team implements and integrates the software solution into your existing infrastructure.'
      }
    ]
  },
  {
    step: 'Step 5',
    title: 'Monitoring and Optimization',
    icon: 'pi pi-chart-line',
    markerColor: 'bg-purple-500',
    badgeColor: 'bg-purple-100 text-purple-800',
    details: [
      {
        title: 'Continuous monitoring',
        description: "We continuously monitor the solution's performance and optimize it to ensure the guaranteed efficiency increase."
      }
    ]
  }
]

indtitle:string = 'AI Video Making for Different Industries ';
inddescritpion:string = 'At Pencil Peel IMT, our team will help you create effective AI video making solutions for various industries, including';
industries:any[]=[
  {
    category: 'Healthcare Industry',
    displayName: 'Healthcare Industry',
    icon: 'pi pi-medkit',
    iconBg: 'bg-red-500',
    iconColor: 'text-red-600',
    borderColor: 'border-red-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Medical explainer videos', description: 'We will create engaging medical explainer videos that showcase complex medical concepts and procedures.' },
      { title: 'Patient testimonial videos', description: 'Our team will develop patient testimonial videos that showcase the success of your medical treatments or services.' },
      { title: 'Healthcare professional training videos', description: 'We will create training videos that help healthcare professionals learn new skills or understand complex medical procedures.' },
      { title: 'Medical product demo videos', description: 'Our team will develop medical product demo videos that demonstrate the features and benefits of medical products.' },
      { title: 'Health and wellness videos', description: 'We will create health and wellness videos that provide tips and advice on healthy living and disease prevention.' }
    ]
  },
  {
    category: 'Finance Industry',
    displayName: 'Finance Industry',
    icon: 'pi pi-dollar',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Financial explainer videos', description: 'Our team will develop financial explainer videos that showcase complex financial concepts and products.' },
      { title: 'Investment videos', description: 'We will create investment videos that help investors understand investment opportunities and strategies.' },
      { title: 'Financial institution videos', description: 'Our team will develop videos showcasing the services and products of financial institutions.' },
      { title: 'Financial planning videos', description: 'We will create financial planning videos that provide tips and advice on financial planning and management.' },
      { title: 'Retirement planning videos', description: 'Our team will develop retirement planning videos that help individuals plan for their retirement.' }
    ]
  },
  {
    category: 'E-commerce Sector',
    displayName: 'E-commerce Sector',
    icon: 'pi pi-shopping-cart',
    iconBg: 'bg-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Product demo videos', description: 'We will create product demo videos that demonstrate the features and benefits of e-commerce products.' },
      { title: 'Product review videos', description: 'Our team will develop product review videos that showcase customer reviews and ratings.' },
      { title: 'E-commerce explainer videos', description: 'We will create explainer videos that showcase complex e-commerce concepts and processes.' },
      { title: 'Unboxing videos', description: 'Our team will develop unboxing videos that showcase the unboxing and features of e-commerce products.' },
      { title: 'Product comparison videos', description: 'We will create product comparison videos that compare and contrast different e-commerce products.' }
    ]
  },
  {
    category: 'Education Sector',
    displayName: 'Education Sector',
    icon: 'pi pi-book',
    iconBg: 'bg-indigo-500',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Educational explainer videos', description: 'Our team will develop educational explainer videos that showcase complex educational concepts and processes.' },
      { title: 'Course preview videos', description: 'We will create course preview videos that showcase the content and benefits of online courses.' },
      { title: 'Institutional videos', description: 'Our team will develop institutional videos that showcase the mission, values, and culture of educational institutions.' },
      { title: 'Teacher training videos', description: 'We will create teacher training videos that help teachers learn new skills and methodologies.' },
      { title: 'Student orientation videos', description: 'Our team will develop student orientation videos that help students navigate the educational institution.' }
    ]
  },
  {
    category: 'Technology Industry',
    displayName: 'Technology Industry',
    icon: 'pi pi-cog',
    iconBg: 'bg-teal-500',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Software explainer videos', description: 'We will create software explainer videos that showcase complex software concepts and processes.' },
      { title: 'Tech product demo videos', description: 'Our team will develop tech product demo videos that demonstrate the features and benefits of tech products.' },
      { title: 'IT services videos', description: 'We will create videos that showcase the services and benefits of IT services.' },
      { title: 'Cybersecurity videos', description: 'Our team will develop cybersecurity videos that provide tips and advice on cybersecurity and data protection.' },
      { title: 'Tech tutorial videos', description: 'We will create tech tutorial videos that help users learn new skills and technologies.' }
    ]
  },
  {
    category: 'Real Estate Industry',
    displayName: 'Real Estate Industry',
    icon: 'pi pi-home',
    iconBg: 'bg-pink-500',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Property tour videos', description: 'Our team will develop property tour videos that showcase properties and neighbourhoods.' },
      { title: 'Real estate explainer videos', description: 'We will create explainer videos that showcase complex real estate concepts and processes.' },
      { title: 'Agent profile videos', description: 'Our team will develop agent profile videos that showcase the expertise and services of real estate agents.' },
      { title: 'Community videos', description: 'We will create community videos that showcase the amenities and services of neighbourhoods and communities.' },
      { title: 'Property management videos', description: 'Our team will develop property management videos that showcase the services and benefits of property management companies.' }
    ]
  },
  {
    category: 'Automotive Industry',
    displayName: 'Automotive Industry',
    icon: 'pi pi-car',
    iconBg: 'bg-orange-500',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Car review videos', description: 'We will create car review videos that showcase the features and benefits of vehicles.' },
      { title: 'Car explainer videos', description: 'Our team will develop car explainer videos that showcase complex automotive concepts and processes.' },
      { title: 'Dealership videos', description: 'We will create videos that showcase the services and benefits of car dealerships.' },
      { title: 'Car maintenance videos', description: 'Our team will develop car maintenance videos that provide tips and advice on car maintenance and repair.' },
      { title: 'Vehicle comparison videos', description: 'We will create vehicle comparison videos that compare and contrast different vehicles.' }
    ]
  },
  {
    category: 'Travel and Hospitality Sector',
    displayName: 'Travel and Hospitality Sector',
    icon: 'pi pi-plane',
    iconBg: 'bg-cyan-500',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Destination videos', description: 'Our team will develop destination videos that showcase the attractions and experiences of travel destinations.' },
      { title: 'Hotel videos', description: 'We will create videos that showcase the amenities and services of hotels.' },
      { title: 'Travel guide videos', description: 'Our team will develop travel guide videos that provide tips and advice for travellers.' },
      { title: 'Restaurant videos', description: 'We will create videos that showcase the menu and services of restaurants.' },
      { title: 'Tour videos', description: 'Our team will develop tour videos that showcase the attractions and experiences of guided tours.' }
    ]
  },
  {
    category: 'Automated Phone System',
    displayName: 'Automated Phone System',
    icon: 'pi pi-phone',
    iconBg: 'bg-green-500',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    image: '',
    imageAlt: '',
    items: [
      { title: 'Managing Phone Calls', description: 'We will manage phone calls, answering frequently asked questions and providing support to customers.' },
      { title: 'Routing Calls', description: 'Our team will route calls to relevant departments, ensuring that customers are connected with the right person to address their queries.' }
    ]
  }
]


}
