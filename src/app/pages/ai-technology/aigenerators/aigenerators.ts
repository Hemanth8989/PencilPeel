import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Whyus } from "../../../components/whyus/whyus";
import { Pointcard } from "../../../components/pointcard/pointcard";
import { Productcard } from "../../../components/productcard/productcard";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aigenerators',
  imports: [Nocarouselherosection, Whycpencilpeel, Whyus, Pointcard, Productcard,CommonModule],
  templateUrl: './aigenerators.html',
  styleUrl: './aigenerators.scss'
})
export class Aigenerators {
  herocontent = {
    title: `
    Unlock Your 
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      AI Lead Generator Solutions
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: `AI Lead Generator by Pencil Peel IMT — revolutionizing the way businesses acquire customers. Our intelligent solution leverages artificial intelligence and machine learning to deliver high-quality, hyper-targeted leads tailored specifically to your goals. Maximize conversions, minimize time spent prospecting, and grow smarter with AI.`,
  image: '/ai/aileadgen.webp' // Update with the correct image path related to the AI Lead Generator
};

ptitle:string = 'How Does Our AI Lead Generator Work at Pencil Peel IMT?';
pdescription:string = `An AI lead generator is a tool that uses artificial intelligence to identify and generate high-quality leads for businesses. It leverages machine learning algorithms to analyse vast amounts of data, identify patterns, and predict potential customer interest.`;
leadworkflow = [
  {
    category: 'Data Collection',
    displayName: 'Data Collection',
    icon: 'pi pi-database',
    iconBg: 'bg-blue-500',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    image: '/ai/datacollection.webp', // Update with actual image path if available
    imageAlt: 'Data Collection Process',
    items: [
      {
        title: 'Multi-Source Data Collection',
        description: "We'll gather data from various sources, including social media, websites, and CRM systems, to get a comprehensive view of potential customers."
      },
      {
        title: 'Data Quality',
        description: "We'll ensure that the collected data is accurate, up-to-date, and relevant to the lead generation process."
      },
      {
        title: 'Data Enrichment',
        description: "We'll enrich the collected data with additional information, such as demographic and firmographic data, to provide a more complete picture of potential customers."
      }
    ]
  },
  {
    category: 'Data Analysis',
    displayName: 'Data Analysis',
    icon: 'pi pi-chart-bar',
    iconBg: 'bg-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    image: '/ai/dataanalysis.webp', // Update with actual image path if available
    imageAlt: 'Data Analysis and AI Insights',
    items: [
      {
        title: 'Advanced Analytics',
        description: "We'll analyse the collected data using advanced analytics techniques, including machine learning and predictive modelling, to identify patterns and predict potential customer interest."
      },
      {
        title: 'Pattern Recognition',
        description: 'Our AI system will recognize patterns in customer behaviour, preferences, and demographics to identify potential leads.'
      },
      {
        title: 'Predictive Modelling',
        description: "We'll use predictive modelling to forecast the likelihood of conversion for potential leads, enabling businesses to prioritize their efforts."
      }
    ]
  },
  {
    category: 'Lead Identification',
    displayName: 'Lead Identification',
    icon: 'pi pi-user-plus',
    iconBg: 'bg-green-500',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    image: '/ai/leadidentification.webp', // Update with actual image path if available
    imageAlt: 'Lead Identification and Segmentation',
    items: [
      {
        title: 'High-Quality Lead Identification',
        description: "We'll identify high-quality leads based on the analysis and prediction, ensuring that businesses can focus on the most promising opportunities."
      },
      {
        title: 'Lead Profiling',
        description: "We'll create detailed profiles of potential leads, including information on their interests, needs, and preferences."
      },
      {
        title: 'Lead Segmentation',
        description: "We'll segment leads based on their characteristics, enabling businesses to tailor their marketing efforts to specific groups."
      }
    ]
  },
  {
    category: 'Lead Scoring',
    displayName: 'Lead Scoring',
    icon: 'pi pi-star',
    iconBg: 'bg-orange-500',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    image: '/ai/leadscoring.webp', // Update with actual image path if available
    imageAlt: 'Lead Scoring System',
    items: [
      {
        title: 'Lead Scoring Model',
        description: "We'll develop a lead scoring model that assigns scores to leads based on their likelihood of conversion."
      },
      {
        title: 'Score Calculation',
        description: 'We’ll calculate lead scores based on a range of factors, including demographic and firmographic data, behaviour, and engagement.'
      },
      {
        title: 'Prioritization',
        description: "We'll prioritize leads based on their scores, enabling businesses to focus on the most promising opportunities."
      }
    ]
  }
];

pointcardcontent:any ={
  title:'How We Can Help at Pencil Peel IMT',
  description:'At Pencil Peel IMT, we can help businesses like yours by leveraging the power of AI to drive growth and improve sales efficiency. '
}
leadGenerationStrategies = [
  {
    title: 'Identifying Potential Clients',
    borderColor: 'border-green-500',
    bgColor: 'bg-green-50',
    items: [
      {
        title: 'AI Lead Generation',
        description: 'We will use AI lead generators to identify potential clients and decision-makers, enabling businesses to focus on high-quality leads.'
      },
      {
        title: 'Data-Driven Insights',
        description: 'Our AI system will provide data-driven insights into potential clients, including their needs, preferences, and behaviour.'
      },
      {
        title: 'Targeted Approach',
        description: 'We will help businesses take a targeted approach to lead generation, reducing waste and improving conversion rates.'
      }
    ]
  },
  {
    title: 'Personalizing Outreach Efforts',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
    items: [
      {
        title: 'AI Insights',
        description: "We will use AI insights to personalize outreach efforts, tailoring messaging and content to individual potential clients' needs and preferences."
      },
      {
        title: 'Improved Conversion Rates',
        description: 'By personalizing outreach efforts, we will help businesses improve conversion rates and drive growth.'
      },
      {
        title: 'Enhanced Customer Experience',
        description: 'Our personalized approach will enhance the customer experience, building trust and loyalty with potential clients.'
      }
    ]
  },
  {
    title: 'Automating Lead Generation',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-50',
    items: [
      {
        title: 'Automation',
        description: 'We will automate lead generation, saving businesses time and resources that can be better spent on high-value activities.'
      },
      {
        title: 'Efficient Process',
        description: 'Our automation capabilities will streamline the lead generation process, reducing manual errors and improving efficiency.'
      },
      {
        title: 'Scalability',
        description: 'Our AI-powered lead generation solution will enable businesses to scale their lead generation efforts, driving growth and revenue.'
      }
    ]
  },
  {
    title: 'Improving Sales Efficiency',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50',
    items: [
      {
        title: 'High-Quality Leads',
        description: 'We will provide sales teams with high-quality leads, improving their efficiency and productivity.'
      },
      {
        title: 'Prioritized Leads',
        description: 'Our AI system will prioritize leads based on their likelihood of conversion, enabling sales teams to focus on the most promising opportunities.'
      },
      {
        title: 'Data-Driven Decision Making',
        description: "We'll provide data-driven insights that will enable sales teams to make informed decisions and optimize their sales strategies."
      }
    ]
  }
];
whyus = {
  title:'Benefits of Working with Pencil Peel IMT',
  description:'',
  List: [
    {
      icon: 'pi pi-chart-line',
      title: 'Improved Sales Efficiency',
      description: "We'll help businesses improve their sales efficiency and productivity, driving growth and revenue.",
      background: 'bg-green-500',
      border: 'border-green-500'
    },
    {
      icon: 'pi pi-percentage',
      title: 'Increased Conversion Rates',
      description: 'Our personalized approach will improve conversion rates, enabling businesses to achieve their sales goals.',
      background: 'bg-blue-500',
      border: 'border-blue-500'
    },
    {
      icon: 'pi pi-users',
      title: 'Enhanced Customer Experience',
      description: "We'll enhance the customer experience, building trust and loyalty with potential clients.",
      background: 'bg-teal-500',
      border: 'border-teal-500'
    },
    {
      icon: 'pi pi-flag',
      title: 'Competitive Advantage',
      description: 'Our AI-powered lead generation solution will give businesses a competitive advantage, enabling them to identify and pursue high-quality leads more effectively.',
      background: 'bg-purple-500',
      border: 'border-purple-500'
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Improved Lead Quality',
      description: "We'll deliver high-quality leads that are more likely to convert, enabling businesses to improve their sales efficiency and effectiveness.",
      background: 'bg-orange-500',
      border: 'border-orange-500'
    },
    {
      icon: 'pi pi-cog',
      title: 'Increased Efficiency',
      description: 'Our AI system will automate the lead generation process, freeing up sales teams to focus on high-value activities.',
      background: 'bg-indigo-500',
      border: 'border-indigo-500'
    },
    {
      icon: 'pi pi-database',
      title: 'Data-Driven Insights',
      description: "We'll provide valuable insights into customer behaviour and preferences, enabling businesses to make data-driven decisions.",
      background: 'bg-cyan-500',
      border: 'border-cyan-500'
    }
  ]
};

whyCContent = {
    title: "Why Choose Pencil Peel IMT AI Lead Generator?",
    description: ""
};
whycfeautures = [
  {
    id: 1,
    title: 'Innovative Approach',
    description: "We're very innovative at this, and our AI lead generator is designed to deliver cutting-edge results.",
    icon: 'pi-lightbulb',
    borderColor: 'purple-500',
    iconBgColor: 'purple-100',
    iconColor: 'purple-600'
  },
  {
    id: 2,
    title: 'Expertise',
    description: 'We have extensive experience in developing and implementing AI-powered lead generation solutions.',
    icon: 'pi-cog',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  },
  {
    id: 3,
    title: 'Customization',
    description: "We'll tailor our AI system to meet your specific business needs and requirements.",
    icon: 'pi-sliders-h',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 4,
    title: 'Continuous Improvement',
    description: "We'll continuously monitor and improve our AI system, ensuring that it stays effective and efficient.",
    icon: 'pi-refresh',
    borderColor: 'orange-500',
    iconBgColor: 'orange-100',
    iconColor: 'orange-600'
  },
  {
    id: 5,
    title: 'Support',
    description: 'We provide ongoing support and maintenance to ensure seamless lead generation.',
    icon: 'pi-headphones',
    borderColor: 'teal-500',
    iconBgColor: 'teal-100',
    iconColor: 'teal-600'
  }
];


keytrends = [
  {
    title: 'Increased Use of Conversational AI',
    description: `We'll develop AI-powered chatbots that can interact with leads in real-time, answering questions, 
                  providing recommendations, and guiding them towards conversion.`,
    icon: 'pi-comments'
  },
  {
    title: 'Predictive Analytics',
    description: `Our AI-powered predictive analytics tools will analyze historical data, market trends, 
                  and online behavior to identify prospects most likely to convert.`,
    icon: 'pi-chart-line'
  },
  {
    title: 'Generative AI',
    description: `We'll use generative AI tools to draft personalized outreach emails, social posts, 
                  and landing pages at scale, optimizing the sales funnel and enhancing lead nurturing.`,
    icon: 'pi-pencil'
  },
  {
    title: 'AI-Powered Video Prospecting',
    description: `Our team will leverage AI-powered video prospecting tools to analyze viewer engagement 
                  with video content, identifying hot leads and optimizing video content for better engagement.`,
    icon: 'pi-video'
  }
];


}
