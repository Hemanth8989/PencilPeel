import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { Timeline } from 'primeng/timeline';
import { Contactus } from "../../../components/contactus/contactus";

@Component({
  selector: 'app-aisoftware',
  imports: [ButtonModule, CommonModule, Whycpencilpeel, Nocarouselherosection, Whyus, Contactus],
  templateUrl: './aisoftware.html',
  styleUrl: './aisoftware.scss'
})
export class Aisoftware {
  herocontent = {
    title: `
    Unlock Your 
    <span class="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent font-bold tracking-tight">
      AI-Powered Custom Software
    </span>
    Solutions with 
    <span class="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: `At Pencil Peel IMT, we help businesses achieve real efficiency gains through tailored AI-powered software. Our expert team builds intelligent solutions designed to meet your unique challenges and deliver measurable results.`,
  image: '/ai/aidev.webp' // Replace with your actual hero image path
  };
  processSteps = [
    {
      icon: 'pi-search',
      color: 'text-blue-600',
      title: 'Discovery & Analysis',
      description: 'Thorough analysis of business processes and pain points'
    },
    {
      icon: 'pi-cog',
      color: 'text-green-600',
      title: 'AI Solution Design',
      description: 'Custom AI-powered solutions for specific business needs'
    },
    {
      icon: 'pi-code',
      color: 'text-purple-600',
      title: 'Development & Testing',
      description: 'Rigorous development and testing for quality assurance'
    },
    {
      icon: 'pi-upload',
      color: 'text-orange-600',
      title: 'Implementation',
      description: 'Seamless integration into existing infrastructure'
    },
    {
      icon: 'pi-chart-line',
      color: 'text-red-600',
      title: 'Monitoring & Optimization',
      description: 'Continuous performance monitoring and optimization'
    }
  ];
  keyComponents = [
  {
    title: 'Custom Software Development',
    description: 'We develop tailored software solutions that meet specific business needs and goals.',
    icon: 'pi-cog',
    gradient: 'from-orange-500 to-amber-400'
  },
  {
    title: 'AI Technology Integration',
    description: 'We integrate AI technologies, such as machine learning, natural language processing, and computer vision, to enhance software capabilities.',
    icon: 'pi-microchip',
    gradient: 'from-red-500 to-orange-400'
  },
  {
    title: 'Data Analysis and Insights',
    description: 'Our solutions provide data-driven insights that enable informed decision-making.',
    icon: 'pi-chart-line',
    gradient: 'from-green-500 to-lime-400'
  },
  {
    title: 'Automation and Streamlining',
    description: 'Our AI-powered solutions automate and streamline processes, leading to significant productivity gains.',
    icon: 'pi-refresh',
    gradient: 'from-blue-500 to-teal-400'
  },
  {
    title: 'Continuous Monitoring and Optimization',
    description: 'We continuously monitor and optimize our solutions to ensure they deliver measurable business outcomes and efficiency gains.',
    icon: 'pi-clock',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    title: 'Focus on Business Outcomes',
    description: 'Our solutions are designed to drive business success and deliver measurable outcomes.',
    icon: 'pi-star',
    gradient: 'from-pink-500 to-orange-400'
  },
  {
    title: 'Expertise in AI and Software Development',
    description: 'Our team consists of experienced AI professionals and developers who leverage AI frameworks, tools, and platforms to develop custom solutions.',
    icon: 'pi-users',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

  whyUs:WhyUsModel = {
    title: `Benefits of Pencil Peel IMT's AI-Powered Custom Software Solutions`,
    description: 'By partnering with Pencil Peel IMT, you can benefit from',
    List:[
  {
    icon: 'pi pi-sort-amount-up',
    title: 'Improved Search Engine Rankings',
    description: "We create high-quality backlinks to help improve your website's search rankings and attract more organic visitors.",
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-shield',
    title: 'Increased Credibility',
    description: "Backlinks from authoritative sources boost your website’s credibility and trustworthiness in the eyes of users and search engines.",
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Increased Productivity',
    description: "Automation and streamlined processes lead to greater efficiency and productivity gains.",
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-database',
    title: 'Improved Decision-Making',
    description: "Leverage real-time data and AI insights to make faster, more informed business decisions.",
    background: 'bg-yellow-500',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-users',
    title: 'Enhanced Customer Experience',
    description: "AI solutions improve customer interactions, personalization, and satisfaction at every touchpoint.",
    background: 'bg-pink-500',
    border: 'border-pink-500'
  },
  {
    icon: 'pi pi-briefcase',
    title: 'Competitive Advantage',
    description: "Stay ahead by leveraging the latest AI technologies to differentiate and lead your market.",
    background: 'bg-indigo-500',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-dollar',
    title: 'Cost Savings',
    description: "Reduce manual work, minimize errors, and lower operational costs with AI automation.",
    background: 'bg-teal-500',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-th-large',
    title: 'Scalability',
    description: "Our AI software adapts and grows with your business, meeting evolving needs at scale.",
    background: 'bg-cyan-500',
    border: 'border-cyan-500'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Real-Time Insights',
    description: "Access real-time analytics and dashboards to monitor performance and respond rapidly to change.",
    background: 'bg-amber-500',
    border: 'border-amber-500'
  },
  {
    icon: 'pi pi-check-circle',
    title: 'Improved Accuracy',
    description: "AI minimizes human errors and boosts consistency, improving quality across processes and outputs.",
    background: 'bg-lime-500',
    border: 'border-lime-500'
  },
  {
    icon: 'pi pi-lightbulb',
    title: 'Enhanced Innovation',
    description: "Use advanced AI technologies to unlock new opportunities and drive breakthrough innovations.",
    background: 'bg-orange-500',
    border: 'border-orange-500'
  }
    ]
  }
  whyChooseUs = [
  {
    id: 1,
    title: 'AI Expertise',
    description: 'Our team consists of experienced AI professionals and developers with proven track records.',
    icon: 'pi-star',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  },
  {
    id: 2,
    title: 'Custom Solutions',
    description: 'We leverage AI frameworks, tools, and platforms to develop tailored solutions for your needs.',
    icon: 'pi-wrench',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Business Outcomes Focus',
    description: 'We prioritize delivering measurable business outcomes and guaranteed efficiency gains.',
    icon: 'pi-target',
    iconBgColor: 'purple-100',
    iconColor: 'purple-600'
  }
  ];
  headerContent = {
    title: 'Why Choose Pencil Peel?',
    description: `At Pencil Peel IMT, we're more than just a software development company - we're a partner in innovation. Our team of experts will work with you to develop customized AI-powered solutions that meet your specific needs and goals. By leveraging our expertise and experience in AI technology, you can stay ahead of the competition and achieve your business goals. `,
  }

  timelineEvents:any[]=[
  {
    step: 'Step 1',
    title: 'Discovery and Analysis',
    iconClass: 'pi pi-search',
    colorClass: 'bg-blue-500',
    badgeClass: 'bg-blue-100 text-blue-800',
    points: [
      'Conduct thorough analysis of your business processes, pain points, and goals to identify areas where AI can drive efficiency gains.'
    ]
  },
  {
    step: 'Step 2',
    title: 'AI Solution Design',
    iconClass: 'pi pi-lightbulb',
    colorClass: 'bg-yellow-500',
    badgeClass: 'bg-yellow-100 text-yellow-800',
    points: [
      'Our team designs custom AI-powered software solutions that address specific business needs and goals.'
    ]
  },
  {
    step: 'Step 3',
    title: 'Development and Testing',
    iconClass: 'pi pi-cog',
    colorClass: 'bg-green-500',
    badgeClass: 'bg-green-100 text-green-800',
    points: [
      'We develop and test the software solution to ensure it meets required standards and delivers measurable outcomes.'
    ]
  },
  {
    step: 'Step 4',
    title: 'Implementation and Integration',
    iconClass: 'pi pi-plug',
    colorClass: 'bg-pink-500',
    badgeClass: 'bg-pink-100 text-pink-800',
    points: [
      'Our team implements and integrates the software solution into your existing infrastructure.'
    ]
  },
  {
    step: 'Step 5',
    title: 'Monitoring and Optimization',
    iconClass: 'pi pi-chart-line',
    colorClass: 'bg-purple-500',
    badgeClass: 'bg-purple-100 text-purple-800',
    points: [
      "We continuously monitor the solution's performance and optimize it to ensure the guaranteed efficiency increase."
    ]
  }
]
contactObj: any = {
  title: 'Contact Us Today',
  description: `Contact us today to learn more about how our AI-powered custom software solutions 
  can help your business achieve significant efficiency gains. 
  Let's work together to drive business success through AI innovation.`
};


}
