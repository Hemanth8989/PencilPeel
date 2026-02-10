import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import AOS from 'aos';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-aisectors',
  imports: [CommonModule, Nocarouselquotes, RouterModule,ButtonModule],
  templateUrl: './aisectors.html',
  styleUrl: './aisectors.scss'
})
export class Aisectors {

  herocontent = {
    title: `
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      Transforming Sectors
    </span>
    with 
    <span class="bg-gradient-to-r from-orange-500 via-white-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
    AI-Powered Solutions
    </span>
  `,
    description: `At <span class="font-bold text-orange-500">Pencil Peel IMT</span>, we're committed to leveraging AI Technology to Drive Innovation and growth in various sectors, including healthcare, education, transportation, agriculture, financial inclusion, and urban infrastructure.`,
    image: '/ai/aiSupport.png'
  };

  quotes = [
    { text: "Empowering Industries with Artificial Intelligence." },
    { text: "Revolutionizing Sectors with AI-Powered Innovation." },
    { text: "Harnessing the Power of AI for Business Transformation." },
    { text: "Intelligent Solutions for a Dynamic Future." },
    { text: "AI-Powered Solutions for a Smarter Society."}
  ];

   solutions = [
    {
      title: 'Healthcare',
      image: 'ai/healthcareai.webp',
      color: 'from-pink-500 via-red-500 to-orange-500',
      problem:
        'Limited access to healthcare facilities in remote areas, shortage of healthcare professionals, and inaccurate diagnoses.',
      aiSolution:
        'AI-powered telemedicine platforms can connect patients with doctors remotely, AI-assisted diagnosis can help doctors detect diseases more accurately, and predictive analytics can identify high-risk patients and prevent readmissions.',
      companySolution:
        "We can develop AI-powered telemedicine platforms that enable remote consultations, AI-assisted diagnosis, and predictive analytics to improve healthcare outcomes.",
    },
    {
      title: 'Education',
      image: 'ai/aieducation.webp',
      color: 'from-indigo-500 via-blue-500 to-cyan-500',
      problem:
        'Limited access to quality education, especially in rural areas, and inadequate teacher training.',
      aiSolution:
        'AI-powered adaptive learning systems can provide personalized learning experiences for students, AI-assisted chatbots can help teachers with grading and feedback, and AI-powered virtual learning environments can enhance student engagement.',
      companySolution:
        'We can develop AI-powered adaptive learning systems that personalize learning experiences for students, AI-assisted chatbots that support teachers, and virtual learning environments that enhance student engagement.',
    },
    {
      title: 'Transportation',
      image: 'ai/aitransportation.webp',
      color: 'from-amber-500 via-orange-500 to-red-500',
      problem:
        'Traffic congestion, accidents, and inefficient public transportation systems.',
      aiSolution:
        'AI-powered traffic management systems can optimize traffic signal timings, predict traffic congestion, and improve route planning. AI-powered predictive maintenance can also help prevent accidents by detecting potential issues in vehicles.',
      companySolution:
        'We can develop AI-powered traffic management systems that optimize traffic flow, predict congestion, and improve route planning, reducing travel times and improving safety.',
    },
    {
      title: 'Agriculture',
      image: 'ai/aiagriculture.webp',
      color: 'from-green-500 via-emerald-500 to-lime-500',
      problem:
        'Crop diseases, soil degradation, and inefficient irrigation systems.',
      aiSolution:
        'AI-powered crop monitoring systems can detect diseases and pests, AI-assisted precision farming can optimize irrigation and fertilizer usage, and predictive analytics can forecast crop yields and help farmers make informed decisions.',
      companySolution:
        'We can develop AI-powered crop monitoring systems that detect diseases and pests, AI-assisted precision farming systems that optimize irrigation and fertilizer usage, and predictive analytics that forecast crop yields and support informed decision-making.',
    },
    {
      title: 'Financial Inclusion',
      image: 'ai/financialai.webp',
      color: 'from-yellow-500 via-lime-500 to-green-400',
      problem:
        'Limited access to financial services, especially in rural areas, and high transaction costs.',
      aiSolution:
        'AI-powered chatbots can provide financial assistance and guidance to customers, AI-assisted credit scoring can help lenders assess creditworthiness, and blockchain-based systems can facilitate secure and low-cost transactions.',
      companySolution:
        'We can develop AI-powered chatbots that provide financial assistance and guidance, AI-assisted credit scoring systems that evaluate creditworthiness, and blockchain-based systems that facilitate secure and low-cost transactions.',
    },
    {
      title: 'Smart Cities',
      image: 'ai/airealestate.webp',
      color: 'from-purple-500 via-fuchsia-500 to-pink-500',
      problem:
        'Inefficient urban planning, traffic management, and energy consumption.',
      aiSolution:
        'Urban planning, traffic management, and energy efficiency.',
      companySolution:
        'We develop AI-powered urban planning systems that optimize city infrastructure, AI-assisted traffic management systems that reduce congestion and improve safety, and energy efficiency solutions that minimize waste and reduce costs.',
    },
  ];

  cards = [
    {
      title: 'Predictive Maintenance',
      icon: 'fa-solid fa-gears',
      color: 'from-yellow-500 via-orange-500 to-red-500',
      description:
        'We develop AI-powered predictive maintenance solutions that enable government agencies to predict and prevent infrastructure failures, reducing downtime and costs. Our solutions use machine learning algorithms to analyze data from sensors and equipment, identifying potential issues before they occur.',
    },
    {
      title: 'Citizen Service Delivery',
      icon: 'fa-solid fa-comments',
      color: 'from-blue-500 via-indigo-500 to-purple-500',
      description:
        'Our AI-powered chatbots provide citizens with personalized assistance and support, improving citizen engagement and satisfaction. We develop chatbots that can answer frequently asked questions, provide information on government services, and help citizens navigate complex bureaucratic processes.',
    },
    {
      title: 'Data-Driven Decision-Making',
      icon: 'fa-solid fa-database',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      description:
        'We develop AI-powered data analytics solutions that provide government agencies with actionable insights, informing policy decisions and improving outcomes. Our solutions use machine learning algorithms to analyze large datasets, identifying trends, patterns, and correlations that can inform policy decisions.',
    },
  ];

  helps = [
    {
      title: 'Develop AI-Powered Solutions',
      icon: 'fa-solid fa-microchip',
      color: 'from-blue-500 via-indigo-500 to-purple-500',
      description:
        'We can develop AI-powered solutions that meet the unique needs of government agencies, improving governance, citizen service delivery, and innovation.',
    },
    {
      title: 'Implement AI Technology',
      icon: 'fa-solid fa-plug',
      color: 'from-green-500 via-emerald-500 to-teal-500',
      description:
        'We can implement AI technology in government agencies, ensuring seamless integration and effective use.',
    },
    {
      title: 'Provide AI Expertise',
      icon: 'fa-solid fa-brain',
      color: 'from-yellow-500 via-orange-500 to-red-500',
      description:
        'We can provide government agencies with AI expertise, supporting informed decision-making and effective use of AI technology.',
    },
  ];

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }
}
