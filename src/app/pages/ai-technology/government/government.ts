import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-government',
  imports: [CommonModule, Nocarouselquotes, RouterModule, ButtonModule],
  templateUrl: './government.html',
  styleUrl: './government.scss'
})
export class Government {

  herocontent = {
    title: `
    Transforming
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      Government Services
    </span>
    with 
    <span class="bg-gradient-to-r from-green-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold tracking-tight">AI
    </span>
  `,
    description: `At <span class="font-bold text-orange-500">Pencil Peel IMT</span>, we're dedicated to harnessing the power of Artificial Intelligence (AI) to drive development and efficiency in the government sector. Our team of experts is committed to delivering innovative AI-powered services that support government initiatives and goals.`,
    image: '/ai/aigovernment.webp'
  };

  quotes = [
    { text: "Empowering Government Excellence through AI" },
    { text: "AI-Driven Solutions for a Smarter Government" },
    { text: "Revolutionizing Government Services with Artificial Intelligence" },
    { text: "Intelligent Government: Leveraging AI for Better Outcomes" },
    { text: "AI for Public Good: Enhancing Government Services" }
  ];

  services = [
    {
      title: 'AI-Powered Data Analytics',
      description: "Our data analytics services enable the government to make informed decisions, identify trends, and optimize resource allocation. By leveraging AI-powered data analytics, we help the government:",
      points: [
        { title: 'Gain insights', desc: 'Uncover hidden patterns and trends in data to inform policy decisions.' },
        { title: 'Optimize resources', desc: 'Allocate resources more efficiently, reducing waste and improving outcomes.' },
        { title: 'Enhance transparency', desc: 'Provide citizens with access to data-driven information, promoting transparency and accountability.' }
      ],
      image: '/ai/datanalysis.webp'
    },
    {
      title: 'Smart Governance Solutions',
      description: "Our smart governance solutions streamline government services, reduce bureaucracy, and enhance citizen engagement. By leveraging AI-driven platforms, we help the government:",
      points: [
        { title: 'Improve citizen experience', desc: 'Provide citizens with personalized and seamless interactions with government services.' },
        { title: 'Enhance efficiency', desc: 'Automate manual processes, reducing bureaucracy and improving productivity.' },
        { title: 'Increase transparency', desc: 'Provide citizens with real-time information and updates on government services.' }
      ],
      image: '/ai/aigovernment.webp'
    },
    {
      title: 'Predictive Maintenance',
      description: "Our predictive maintenance services help the government predict and prevent infrastructure failures, reducing downtime and costs. By leveraging AI-powered predictive maintenance, we help the government:",
      points: [
        { title: 'Predict failures', desc: 'Identify potential infrastructure failures before they occur, reducing downtime and costs.' },
        { title: 'Optimize maintenance', desc: 'Schedule maintenance activities during optimal times, reducing disruptions and improving efficiency.' },
        { title: 'Improve safety', desc: 'Identify potential safety risks and take proactive measures to mitigate them.' }
      ],
      image: '/ai/aimonitoring.webp'
    },
    {
      title: 'Healthcare Solutions',
      description: "Our AI-powered healthcare solutions improve disease diagnosis, patient care, and health outcomes. By leveraging AI-driven healthcare solutions, we help the government:",
      points: [
        { title: 'Improve diagnosis', desc: 'Enhance disease diagnosis accuracy and speed, improving patient outcomes.' },
        { title: 'Personalize care', desc: 'Provide personalized treatment plans tailored to individual patient needs.' },
        { title: 'Enhance engagement', desc: 'Empower patients with personalized health information and resources.' }
      ],
      image: '/ai/healthcareai.webp'
    },
    {
      title: 'Education Technology',
      description: "Our AI-driven education platforms personalize learning, improve student outcomes, and enhance teacher training. By leveraging AI-powered education solutions, we help the government:",
      points: [
        { title: 'Personalize learning', desc: 'Provide students with tailored learning experiences that meet their individual needs.' },
        { title: 'Improve outcomes', desc: 'Enhance student outcomes and academic achievement.' },
        { title: 'Support teachers', desc: 'Provide teachers with AI-powered tools and resources to support student learning.' }
      ],
      image: '/ai/aieducation.webp'
    },
    {
      title: 'Cybersecurity',
      description: "Our AI-powered cybersecurity services protect government networks and systems from cyber threats. By leveraging AI-driven cybersecurity solutions, we help the government:",
      points: [
        { title: 'Detect threats', desc: 'Identify potential cyber threats in real-time, reducing the risk of data breaches.' },
        { title: 'Prevent attacks', desc: 'Block cyber-attacks before they occur, protecting government networks and systems.' },
        { title: 'Enhance response', desc: 'Respond quickly and effectively to cyber incidents, minimizing downtime and damage.' }
      ],
      image: '/ai/aicyber.webp'
    },
    {
      title: 'Sustainable Development',
      description: "Our sustainable development solutions help the government develop sustainable solutions using AI, such as optimizing energy consumption, waste management, and environmental monitoring. By leveraging AI-powered sustainable development solutions, we help the government:",
      points: [
        { title: 'Optimize energy consumption', desc: 'Reduce energy consumption and costs, improving sustainability.' },
        { title: 'Improve waste management', desc: 'Optimize waste management processes, reducing waste and improving environmental outcomes.' },
        { title: 'Enhance environmental monitoring', desc: 'Monitor and manage environmental resources more effectively, improving sustainability.' }
      ],
      image: '/ai/aidev.webp'
    }
  ];

  benefits = [
  {
    title: 'Improved Decision-Making',
    desc: 'Leverage AI-powered data analytics for smarter, data-driven decisions that ensure policies and initiatives are effective and efficient.',
    icon: 'pi pi-chart-line'
  },
  {
    title: 'Enhanced Citizen Engagement',
    desc: 'Enable seamless, transparent interactions between citizens and government agencies, fostering trust and accountability.',
    icon: 'pi pi-users'
  },
  {
    title: 'Increased Efficiency',
    desc: 'Automate manual processes and reduce bureaucracy with AI solutions that streamline operations and improve productivity.',
    icon: 'pi pi-cog'
  },
  {
    title: 'Better Healthcare Outcomes',
    desc: 'Improve patient care through AI-driven early diagnosis, personalized treatment, and enhanced medical insights.',
    icon: 'pi pi-heart'
  }
];


  features = [
    {
      title: 'Technical Expertise',
      desc: 'Our team has deep technical expertise in AI, machine learning, and data analytics. We stay up-to-date with the latest advancements in AI technology, ensuring that our solutions are cutting-edge and effective. Our technical expertise enables us to:',
      points: [
        { title: 'Develop custom AI solutions', desc: 'We design and develop AI solutions that meet the unique needs of your government agency.' },
        { title: 'Implement AI-powered systems', desc: 'We implement AI-powered systems that integrate seamlessly with your existing infrastructure.' },
        { title: 'Analyze complex data', desc: 'We analyze complex data sets to provide actionable insights that inform decision-making.' }
      ],
      image: '/ai/aiTraining.png'
    },
    {
      title: 'Domain Knowledge',
      desc: 'We have a deep understanding of the government sector and its unique challenges. Our team has worked with various government agencies, understanding their specific needs and requirements. Our domain knowledge enables us to:',
      points: [
        { title: 'Develop tailored solutions', desc: 'We develop solutions that meet the specific needs of your government agency.' },
        { title: 'Address unique challenges', desc: 'We address the unique challenges faced by government agencies, such as data security and regulatory compliance.' },
        { title: 'Improve efficiency', desc: 'We identify areas for improvement and develop solutions that enhance efficiency and productivity.' }
      ],
      image: '/ai/industryai.webp'
    },
    {
      title: 'Innovative Approach',
      desc: "We're committed to delivering innovative solutions that meet the evolving needs of the government. Our team is constantly exploring new technologies and approaches to stay ahead of the curve. Our innovative approach enables us to:",
      points: [
        { title: 'Develop cutting-edge solutions', desc: 'We develop solutions that leverage the latest advancements in AI technology.' },
        { title: 'Improve citizen engagement', desc: 'We develop solutions that enhance citizen engagement and provide personalized experiences.' },
        { title: 'Drive growth and prosperity', desc: 'We help government agencies drive growth and prosperity by leveraging AI-powered solutions.' }
      ],
      image: '/ai/aiinnovation.webp'
    }
  ];
}
