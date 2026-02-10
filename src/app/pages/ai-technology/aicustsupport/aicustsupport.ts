import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { PanelModule } from 'primeng/panel';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { MulBenfits } from '../../../components/mul-benfits/mul-benfits';
interface SupportStep {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

interface Feature {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

interface Industry {
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
  impact: string;
}

@Component({
  selector: 'app-aicustsupport',
  imports: [ButtonModule, CardModule, CommonModule, Nocarouselherosection, PanelModule, Industrycards,MulBenfits],
  templateUrl: './aicustsupport.html',
  styleUrl: './aicustsupport.scss'
})
export class Aicustsupport {
  herocontent = {
  title: `
    Unlock Your 
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      AI Customer Support
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: `At Pencil Peel IMT, we understand the power of exceptional customer support. Our AI-driven solutions are crafted to enhance user experience, boost response efficiency, and significantly reduce operational costs — giving your business the competitive edge it needs.`,
  image: '/ai/aichatbot.webp' // Replace with your AI support-related image path
};

  supportSteps: SupportStep[] = [
    {
      icon: 'pi pi-inbox',
      title: 'Customer Inquiry',
      description: 'Multi-channel support across chat, email, voice, and social media',
      details: [
        'Multi-Channel Support: Support across various channels ensuring customers can reach out whenever and however they prefer',
        'Inquiry Capture: System captures customer inquiries and routes them to AI-powered support platform for analysis'
      ]
    },
    {
      icon: 'pi pi-search',
      title: 'AI Analysis',
      description: 'Advanced NLP and ML algorithms analyze customer inquiries',
      details: [
        'NLP and ML Algorithms: Utilize natural language processing and machine learning to analyze inquiries',
        'Intent Identification: Identify customer intent whether it\'s a question, complaint, or request',
        'Sentiment Analysis: Detect emotions like frustration, satisfaction, or confusion for empathetic responses'
      ]
    },
    {
      icon: 'pi pi-send',
      title: 'Response Generation',
      description: 'Automated and personalized responses with seamless escalation',
      details: [
        'Automated Responses: Generate automated responses providing solutions, answers, or guidance',
        'Escalation to Human Agents: Seamlessly escalate complex issues to experienced support agents',
        'Personalized Responses: Use customer data and history for personalized support'
      ]
    },
    {
      icon: 'pi pi-refresh',
      title: 'Continuous Learning',
      description: 'Machine learning improves system performance over time',
      details: [
        'Machine Learning: Learn from customer interactions, updating knowledge base and improving accuracy',
        'Knowledge Base Updates: Continuously update with new information for accurate responses',
        'Performance Analysis: Analyze system performance and make optimizations'
      ]
    }
  ];

  features: Feature[] = [
    {
      icon: 'pi pi-comments',
      title: 'Chatbot Support',
      description: 'AI-powered chatbots providing instant, 24/7 personalized support',
      highlights: [
        'Instant Support: Immediate responses to customer questions and issues',
        '24/7 Availability: Round-the-clock customer assistance',
        'Personalized Experience: Tailored responses based on customer data and history'
      ]
    },
    {
      icon: 'pi pi-heart',
      title: 'Sentiment Analysis',
      description: 'Advanced emotion detection for empathetic customer interactions',
      highlights: [
        'Emotion Detection: Analyze customer sentiment and emotions in real-time',
        'Insight Generation: Provide insights into customer needs and preferences',
        'Proactive Support: Respond proactively to frustrated or dissatisfied customers'
      ]
    },
    {
      icon: 'pi pi-database',
      title: 'Knowledge Base Management',
      description: 'Intelligent knowledge management with advanced search capabilities',
      highlights: [
        'Knowledge Base Creation: Create and manage comprehensive information repositories',
        'Content Updates: Continuously update with new information for accuracy',
        'Search and Retrieval: Advanced search capabilities for easy information access'
      ]
    },
    {
      icon: 'pi pi-link',
      title: 'System Integration',
      description: 'Seamless integration with existing CRM, helpdesk, and ticketing systems',
      highlights: [
        'Seamless Integration: Integrate with existing CRM, helpdesk, or ticketing systems',
        'Data Synchronization: Synchronize customer data across all systems',
        'Streamlined Workflows: Automate tasks and reduce manual intervention'
      ]
    }
  ];

  industries: Industry[] = [
    { name: 'E-commerce', description: '24/7 support, improved satisfaction, reduced returns', icon: 'pi pi-shopping-cart', color: 'bg-blue-500' },
    { name: 'Banking & Finance', description: 'Secure, efficient support with reduced costs', icon: 'pi pi-dollar', color: 'bg-green-500' },
    { name: 'Healthcare', description: 'Improved patient engagement and personalized support', icon: 'pi pi-heart', color: 'bg-red-500' },
    { name: 'Technology', description: 'Efficient, personalized support with cost reduction', icon: 'pi pi-desktop', color: 'bg-purple-500' },
    { name: 'Retail', description: 'Omnichannel support and improved customer experience', icon: 'pi pi-shopping-bag', color: 'bg-pink-500' },
    { name: 'Travel & Hospitality', description: '24/7 support with improved satisfaction', icon: 'pi pi-map', color: 'bg-yellow-500' },
    { name: 'Telecommunications', description: 'Efficient support with reduced costs', icon: 'pi pi-phone', color: 'bg-indigo-500' },
    { name: 'Insurance', description: 'Personalized support with improved efficiency', icon: 'pi pi-shield', color: 'bg-orange-500' }
  ];

  implementationSteps = [
    {
      icon: 'pi pi-database',
      title: 'Data Collection',
      description: 'Collect customer data and feedback from various sources including interactions, feedback forms, and social media to train AI models effectively.'
    },
    {
      icon: 'pi pi-cog',
      title: 'AI Model Development',
      description: 'Train, tune, and validate AI models using collected data to ensure accurate understanding of customer inquiries and relevant responses.'
    },
    {
      icon: 'pi pi-link',
      title: 'System Integration',
      description: 'Seamlessly integrate with existing CRM, helpdesk, or ticketing systems while synchronizing data and streamlining workflows.'
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Testing & Deployment',
      description: 'Thoroughly test the system, deploy in controlled environment, and continuously monitor performance for optimal results.'
    }
  ];

  benefits: Benefit[] = [
    {
      icon: 'pi pi-clock',
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance with reduced wait times and increased customer loyalty',
      impact: 'Improved customer satisfaction and trust'
    },
    {
      icon: 'pi pi-bolt',
      title: 'Increased Efficiency',
      description: 'Automated routine inquiries and streamlined support processes to improve productivity',
      impact: 'Enhanced agent productivity and faster resolution'
    },
    {
      icon: 'pi pi-user',
      title: 'Personalization',
      description: 'Personalized responses based on customer data and behavior with valuable insights',
      impact: 'Enhanced customer experience and loyalty'
    },
    {
      icon: 'pi pi-money-bill',
      title: 'Cost Savings',
      description: 'Reduced support costs through automation and improved resource allocation',
      impact: 'Increased scalability and profitability'
    }
  ];
  indtitle:string = `Industries that Benefit from AI-Powered Solutions`;
  inddescription:string = `At Pencil Peel IMT, we believe that AI technology can benefit a wide range of industries. Our team will provide tailored AI-powered solutions to meet the unique needs of the following industries`;
  industryCards = [
  {
    title: 'Healthcare',
    description: 'AI-powered support enhances patient engagement, reduces administrative work, and delivers personalized experiences.',
    image: '/dm/industries/ihospital.webp',
  },
  {
    title: 'Finance',
    description: 'Provide secure, efficient AI-driven customer support that reduces costs and boosts client satisfaction.',
    image: '/dm/industries/ifinancial.webp',
  },
  {
    title: 'E-commerce',
    description: 'Enhance 24/7 customer support, boost satisfaction, and reduce return rates with AI-powered assistance.',
    image: '/dm/industries/iecommerce.webp',
  },
  {
    title: 'Retail',
    description: 'Offer omnichannel AI support to personalize experiences, improve service, and minimize product returns.',
    image: '/dm/industries/iretail.webp',
  },
  {
    title: 'Travel & Hospitality',
    description: 'Deliver seamless 24/7 AI customer support to improve guest satisfaction and streamline service operations.',
    image: '/dm/industries/travel.webp', // Make sure this image exists or update the path
  },
  {
    title: 'Telecommunications',
    description: 'Use AI to provide faster, more personalized support that improves user experience and reduces service costs.',
    image: '/dm/industries/itech.webp', // Ensure the correct path/image is available
  },
  {
    title: 'Insurance',
    description: 'Streamline policy inquiries and claims with AI support to improve customer satisfaction and reduce overhead.',
    image: '/dm/industries/iinsurance.webp', // Verify image exists or replace accordingly
  },
  {
    title: 'Technology',
    description: 'Empower your tech support teams with AI for faster issue resolution and smarter, scalable customer service.',
    image: '/dm/industries/itech.webp',
  }
  ];
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  keytrends = [
    {
      title: 'Proactive Support',
      description: 'By using AI-powered solutions, our team will analyze customer interactions and predict their needs, enabling proactive support that reduces customer churn.',
      icon: 'pi-chart-line'
    },
    {
      title: 'Generative AI',
      description: 'Our team will use generative AI to craft customized messages and journeys in real-time, using insights like browsing habits and preferences.',
      icon: 'pi-pencil'
    },
    {
      title: 'Agentic AI',
      description: 'By using autonomous systems, our team will interpret high-level goals and determine necessary steps to achieve them, operating with minimal human intervention.',
      icon: 'pi-cog'
    },
    {
      title: 'Hyper-Personalization',
      description: 'Our team will use AI-driven personalization to adapt service, tone, and messaging based on live customer behavior, sentiment, and context.',
      icon: 'pi-user-edit'
    }
  ];
befitsec:any = {
  title:'Benefits of AI Customer Support at Pencil Peel IMT',
  description: `At Pencil Peel IMT, we're committed to delivering exceptional customer support through our cutting-edge AI-powered solution. Our AI customer support system is designed to provide round-the-clock support, automate routine inquiries, and offer personalized responses to customers. By leveraging the power of AI, we can improve customer satisfaction, reduce support costs, and drive business growth.`,
  footer:''
}
aiSupportBenefits = [
  {
    title: '24/7 Support',
    points: [
      {
        title: 'Round-the-Clock Support',
        description: "We'll provide support around the clock, ensuring that customers can get help whenever they need it."
      },
      {
        title: 'Reduced Wait Times',
        description: "Our AI system will quickly respond to customer inquiries, reducing wait times and improving customer satisfaction."
      },
      {
        title: 'Increased Customer Loyalty',
        description: "By providing 24/7 support, we'll help businesses build trust and loyalty with their customers, driving repeat business and positive word-of-mouth."
      }
    ]
  },
  {
    title: 'Increased Efficiency',
    points: [
      {
        title: 'Automated Routine Inquiries',
        description: "We'll automate routine inquiries, freeing up human support agents to focus on complex issues that require a personal touch."
      },
      {
        title: 'Streamlined Support Processes',
        description: "Our AI system will streamline support processes, reducing the time and effort required to resolve customer issues."
      },
      {
        title: 'Improved Productivity',
        description: "By automating routine tasks, we'll improve the productivity of our support agents, enabling them to focus on high-value tasks."
      }
    ]
  },
  {
    title: 'Personalization',
    points: [
      {
        title: 'Personalized Responses',
        description: "We'll provide personalized responses based on customer data and behaviour, tailoring our support to individual customers' needs and preferences."
      },
      {
        title: 'Customer Insights',
        description: "Our AI system will provide valuable insights into customer behaviour and preferences, enabling businesses to make data-driven decisions."
      },
      {
        title: 'Enhanced Customer Experience',
        description: "By providing personalized support, we'll enhance the overall customer experience, driving satisfaction and loyalty."
      }
    ]
  },
  {
    title: 'Cost Savings',
    points: [
      {
        title: 'Reduced Support Costs',
        description: "We'll reduce support costs by automating routine inquiries and reducing the need for human support agents."
      },
      {
        title: 'Increased Scalability',
        description: "Our AI system will enable businesses to handle a large volume of customer inquiries without increasing support staff."
      },
      {
        title: 'Improved Resource Allocation',
        description: "By reducing support costs, we'll enable businesses to allocate resources more effectively, driving growth and profitability."
      }
    ]
  }
];

}
