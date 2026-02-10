import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { CommonModule } from '@angular/common';
import { Productcard } from "../../../components/productcard/productcard";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from "../../../components/whyus/whyus";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { Contactus } from "../../../components/contactus/contactus";

@Component({
  selector: 'app-aireceptionist',
  imports: [Nocarouselherosection, CommonModule, Productcard, ButtonModule, CardModule, TabsModule, Whyus, Whycpencilpeel, Contactus],
  templateUrl: './aireceptionist.html',
  styleUrl: './aireceptionist.scss'
})
export class Aireceptionist {
herocontent = {
  title: `
    Revolutionize Your 
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      Front-Desk Operations
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: `Introducing the AI Receptionist by Pencil Peel IMT — a powerful virtual assistant designed to automate and optimize front-desk operations. From greeting visitors to managing appointments, our AI solution frees up your team to focus on high-value tasks while ensuring an efficient and professional first impression.`,
  image: '/ai/airecption.webp' // Update with the correct image path related to the AI Receptionist
};
features = [
    {
      icon: 'pi pi-phone',
      iconColor: 'text-blue-600',
      title: 'Handle Communications',
      description: 'Answering phone calls and responding to emails.',
    },
    {
      icon: 'pi pi-calendar',
      iconColor: 'text-purple-600',
      title: 'Manage Appointments',
      description: 'Handling visitor check-ins and managing appointments.',
    },
    {
      icon: 'pi pi-question-circle',
      iconColor: 'text-emerald-600',
      title: 'Personalized Support',
      description: 'Providing personalized support and answering FAQs.',
    },
];
technologies = [
  {
    icon: 'pi pi-comment',
    iconColor: 'text-orange-600',
    title: 'Natural Language Processing (NLP)',
    description: 'Uses NLP to understand and interpret human language, delivering accurate, relevant responses.',
  },
  {
    icon: 'pi pi-android',
    iconColor: 'text-green-600',
    title: 'Machine Learning (ML)',
    description: 'Learns from each interaction and improves responses over time for better support.',
  },
  {
    icon: 'pi pi-sync',
    iconColor: 'text-cyan-600',
    title: 'System Integration',
    description: 'Integrates with existing systems (CRM, etc.) for seamless and comprehensive support.',
  },
];
aireceptionservicetitle: string = `Features of Pencil Peel IMT AI Receptionist`;
aireceptiondescription:string = `At Pencil Peel IMT, we're committed to delivering innovative solutions that streamline business operations and improve efficiency. Our AI Receptionist is designed to provide exceptional support and improve customer satisfaction. We will utilize the following features to drive business growth and success`
aiReceptionistServices = [
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
      {
        title: 'Managing Phone Calls',
        description: "We will manage phone calls, answering frequently asked questions and providing support to customers."
      },
      {
        title: 'Routing Calls',
        description: 'Our team will route calls to relevant departments, ensuring that customers are connected with the right person to address their queries.'
      }
    ]
  },
  {
    category: 'Chatbot Support',
    displayName: 'Chatbot Support',
    icon: 'pi pi-comment',
    iconBg: 'bg-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    image: '',
    imageAlt: '',
    items: [
      {
        title: 'Providing Chatbot Support',
        description: "We will provide chatbot support to clients, answering frequently asked questions and providing support."
      },
      {
        title: '24/7 Support',
        description: 'Our chatbot will provide 24/7 support, ensuring that customers can get in touch with us whenever they need to.'
      }
    ]
  },
  {
    category: 'Visitor Management',
    displayName: 'Visitor Management',
    icon: 'pi pi-users',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
    image: '',
    imageAlt: '',
    items: [
      {
        title: 'Managing Visitor Check-ins',
        description: "We will manage visitor check-ins, providing directions and notifying staff of visitor arrivals."
      },
      {
        title: 'Improving Security',
        description: 'Our visitor management system will improve security, ensuring that visitors are properly screened and escorted.'
      }
    ]
  },
  {
    category: 'Integration with CRM',
    displayName: 'Integration with CRM',
    icon: 'pi pi-database',
    iconBg: 'bg-orange-500',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    image: '',
    imageAlt: '',
    items: [
      {
        title: 'Seamless Support',
        description: "We will integrate our AI Receptionist with CRM software to provide seamless support and improve customer satisfaction."
      },
      {
        title: 'Personalized Experience',
        description: 'Our integration with CRM will enable us to provide personalized experiences, tailoring our support to meet the specific needs of each customer.'
      }
    ]
  }
];

// customizations = [
//   {
//     icon: 'pi pi-globe',
//     title: 'Industry-Specific Language Models',
//     description: 'Develop language models that understand industry-specific terminology and jargon, ensuring accurate and relevant responses.'
//   },
//   {
//     icon: 'pi pi-cog',
//     title: 'Customized Workflows',
//     description: 'Create workflows tailored to each industry’s unique process, boosting efficiency and clarity.'
//   },
//   {
//     icon: 'pi pi-database',
//     title: 'Integration with Industry Tools',
//     description: 'Integrate seamlessly with industry-specific systems and tools, improving productivity and support.'
//   }
// ];

// benefits = [
//   {
//     icon: 'pi pi-check-circle',
//     title: 'Improved Accuracy',
//     description: 'Custom language models ensure precise, relevant responses, increasing satisfaction and reducing errors.'
//   },
//   {
//     icon: 'pi pi-bolt',
//     title: 'Increased Efficiency',
//     description: 'Streamlined workflows cut down staff workload and drive productivity.'
//   },
//   {
//     icon: 'pi pi-star',
//     title: 'Enhanced Customer Experience',
//     description: 'Get more personalized, industry-appropriate support, leading to greater satisfaction and loyalty.'
//   }
// ];

// implementation = [
//   {
//     icon: 'pi pi-search',
//     title: 'Discovery Session',
//     description: 'Deep-dive session to understand your industry’s needs and requirements.'
//   },
//   {
//     icon: 'pi pi-sliders-h',
//     title: 'Customization Development',
//     description: 'Our team crafts language models and workflows tailored to your industry.'
//   },
//   {
//     icon: 'pi pi-check',
//     title: 'Integration & Testing',
//     description: 'Full integration and rigorous testing assure your solution is seamless.'
//   }
// ];

whyus:WhyUsModel = {
  title:`Benefits of Pencil Peel IMT AI Receptionist`,
  description:'',
  List: [
    {
      icon: 'pi pi-cog',
      title: 'Increased Efficiency',
      description: 'Our AI Receptionist will automate routine tasks, freeing up staff to focus on more important tasks and improving productivity.',
      background: 'bg-green-500',
      border: 'border-green-500'
    },
    {
      icon: 'pi pi-users',
      title: 'Improved Customer Experience',
      description: 'We will provide 24/7 support and personalized responses to improve customer satisfaction and loyalty.',
      background: 'bg-blue-500',
      border: 'border-blue-500'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Reduced Costs',
      description: 'Our AI Receptionist will reduce the need for human receptionists, saving businesses time and money.',
      background: 'bg-red-500',
      border: 'border-red-500'
    },
    {
      icon: 'pi pi-sitemap',
      title: 'Scalability',
      description: 'Our AI Receptionist will scale with your business, handling increased traffic and interactions without compromising performance.',
      background: 'bg-purple-500',
      border: 'border-purple-500'
    }
  ]
};

whyCContent = {
    title: "Why Choose Pencil Peel?",
    description: "By partnering with Pencil Peel IMT, businesses can leverage the power of AI to transform their reception operations and improve customer experiences. Our team of experts will work with you to develop customized AI receptionist solutions that meet your specific needs and goals. "
};
whycFeatures:any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has extensive experience in developing and implementing AI Receptionist solutions.',
    icon: 'pi pi-users',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  },
  {
    id: 2,
    title: 'Customization',
    description: 'We can customize our AI Receptionist solutions to meet the specific needs of your business.',
    icon: 'pi pi-sliders-h',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  },
  {
    id: 3,
    title: 'Integration',
    description: 'Our AI Receptionist solutions can integrate with existing systems and tools.',
    icon: 'pi pi-link',
    borderColor: 'indigo-500',
    iconBgColor: 'indigo-100',
    iconColor: 'indigo-600'
  },
  {
    id: 4,
    title: 'Support',
    description: 'We provide ongoing support and maintenance to ensure seamless operation.',
    icon: 'pi pi-headset',
    borderColor: 'teal-500',
    iconBgColor: 'teal-100',
    iconColor: 'teal-600'
  }
];

airecContact: any = {
  title: 'Contact Us Today',
  description: `By leveraging in-appraising your app with In-App Advertising, we can help you reach your target audience and achieve your marketing goals. Contact us today to learn more about our In-App Advertising services.`
};


}
