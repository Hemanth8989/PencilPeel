import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { Nocarouselherosection } from "../../components/nocarouselherosection/nocarouselherosection";
import { Industrycards } from '../../components/industrycards/industrycards';
import { Services } from "../../components/services/services";
import { TabsModule } from 'primeng/tabs';
import { ImageModule } from 'primeng/image';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-ai-technology',
  imports: [ButtonModule, CardModule, CommonModule, ChipModule, PanelModule, Nocarouselherosection, Industrycards, Services, TabsModule, ImageModule],
  templateUrl: './ai-technology.html',
  styleUrl: './ai-technology.scss'
})
export class AiTechnology {
  activeIndex:number = 0;
  heroContent = {
    title: `
      Build Your Future of Business with 
      <span class="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight">
        AI Technology
      </span><br />
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span> is the Best for AI Powered Solutions<br />
      <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold tracking-tight">
        AI With Pencil Peel IMT
      </span>
    `,
    description: `At <span class="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Pencil Peel IMT </span>, we define AI technology as the development of intelligent machines that can think and act like humans. AI technology enables machines to learn from data, reason, and make decisions, allowing them to perform tasks that typically require human intelligence. Our AI solutions are designed to drive business growth, improve efficiency, and enhance customer experience.`,
    image: '/ai/aishome.webp' // Replace with your actual image path
  };
  aiComponents = [
    {
      title: 'Machine Learning',
      img: '/ai/aiml.webp',
      description: `We will use machine learning algorithms to enable machines to learn from data and improve their performance over time. Machine learning is a critical component of AI technology, and we will leverage it to develop solutions that can learn and adapt to changing business needs.`,
      points: [
        { title: 'Improve Predictive Accuracy:', desc: ' Machine learning algorithms can analyse vast amounts of data and identify patterns that inform business decisions.' },
        { title: 'Automate Repetitive Tasks:', desc: ' Machine learning can automate repetitive tasks, freeing up time for more strategic and creative work' },
        { title: 'Enhance Customer Experience:', desc: 'Machine learning can help businesses personalize experiences for their customers, improving engagement and loyalty.' }
      ],
      footer:''
    },
    {
      title: 'Natural Language Processing',
      img: '/ai/nlp.webp',
      description: `We will use natural language processing (NLP) to enable machines to understand and interpret human language, allowing for more effective communication and decision-making. NLP is a key component of AI technology, and we will use it to develop solutions that can understand and respond to customer inquiries.`,
      points: [
        { title: 'Improve Customer Service:', desc: 'NLP-powered chatbots and virtual assistants can provide 24/7 customer support, improving customer satisfaction and reducing support costs.' },
        { title: 'Enhance Sentiment Analysis:', desc: 'NLP can analyse customer feedback and sentiment, providing insights that inform business decisions.' },
        { title: 'Streamline Communication:', desc: 'NLP can help businesses automate communication tasks, such as email and chat support, freeing up time for more strategic and creative work.' }
      ],
      footer:''
    },
    {
      title: 'Computer Vision',
      img: '/ai/arvr.webp',
      description: `We will use computer vision to enable machines to interpret and understand visual data, such as images and videos. Computer vision is a critical component of AI technology, and we will leverage it to develop solutions that can analyse and understand visual data.`,
      points: [
        { title: 'Improve Quality Control:', desc: 'Computer vision can analyse visual data to detect defects and anomalies, improving quality control and reducing waste.' },
        { title: 'Enhance Surveillance:', desc: ' Computer vision can analyze visual data to detect and respond to security threats, improving safety and security.' },
        { title: 'Streamline Operations:', desc: 'Computer vision can help businesses automate tasks that require visual inspection, freeing up time for more strategic and creative work.' }
      ],
      footer:''
    },
    {
      title: 'Other Key Components',
      img: '/ai/aikey.webp',
      description: `In addition to machine learning, NLP, and computer vision, our AI technology solutions will also leverage other key components, including:`,
      points: [
        { title: 'Deep Learning:', desc: ' A subset of machine learning that uses neural networks to analyze complex data.' },
        { title: 'Robotics:', desc: '  The use of AI to control and interact with physical devices, such as robots and drones.' },
        { title: 'Expert Systems:', desc: ' AI-powered systems that mimic the decision-making abilities of a human expert in a particular domain.' },
      ],
      footer: `By leveraging these key components, we will develop AI-powered solutions that drive business growth, improve efficiency, and enhance customer experience. At Pencil Peel IMT, we are committed to helping businesses harness the power of AI to drive success.`
    }
  ];
  panels = [
    {
      title: 'Transforming Industries',
      imageSrc: '/ai/industryai.webp',
      description:
        'AI technology is transforming industries in many ways. From healthcare to finance, and from transportation to education, AI is revolutionizing the way businesses operate. At Pencil Peel IMT, we are working on developing AI-powered solutions that can help businesses automate repetitive tasks, improve decision-making, and enhance customer experience. By leveraging AI technology, businesses can stay ahead of the competition and drive growth.',
      isReverse: false
    },
    {
      title: 'Enabling Innovation',
      imageSrc: '/ai/aiintegration.webp',
      description:
        'AI technology is enabling innovation in many areas. From chatbots to virtual assistants, and from predictive analytics to quality control, AI is opening up new possibilities for businesses. At Pencil Peel IMT, we are committed to helping businesses harness the power of AI to drive innovation and growth. By leveraging AI technology, businesses can unlock new revenue streams and improve their competitiveness.',
      isReverse: true
    },
    {
      title: 'Improving Lives',
      imageSrc: '/ai/healthcareai.webp',
      description:
        "AI technology is also improving lives in many ways. From healthcare to education, and from transportation to entertainment, AI is making a positive impact on people's lives. At Pencil Peel IMT, we believe that AI technology has the potential to improve lives and make the world a better place. By developing AI-powered solutions that are designed to benefit society, we can create a brighter future for everyone.",
      isReverse: false
    },
    {
      title: 'Creating New Opportunities',
      imageSrc: '/ai/aidev.webp',
      list: [
        'Develop New Products and Services: AI-powered solutions can help businesses develop new products and services that meet the changing needs of customers.',
        'Improve Operational Efficiency: AI-powered solutions can help businesses automate repetitive tasks and improve operational efficiency, freeing up time for more strategic and creative work.',
        'Enhance Customer Experience: AI-powered solutions can help businesses personalize experiences for their customers, improving engagement and loyalty.'
      ],
      isReverse: true
    }
  ];
  aiServices: any[] = [
    {
      icon: 'pi pi-headphones',
      title: 'Exceptional Customer Support',
      description: 'AI-powered 24/7 assistance that answers queries and resolves issues promptly with tailored attention.'
    },
    {
      icon: 'pi pi-chart-line',
      title: 'High-Quality Lead Generation',
      description: 'Analyze customer behavior and preferences to identify potential leads and optimize marketing campaigns.'
    },
    {
      icon: 'pi pi-cog',
      title: 'Custom Software Solutions',
      description: 'AI-powered solutions that automate tasks, streamline processes, and enhance business efficiency.'
    },
    {
      icon: 'pi pi-video',
      title: 'Engaging Video Creation',
      description: 'Produce high-quality, personalized videos that captivate audiences and drive engagement.'
    },
    {
      icon: 'pi pi-phone',
      title: 'AI Receptionist',
      description: 'Provide personalized customer experiences, answering queries and routing calls efficiently.'
    },
    {
      icon: 'pi pi-lightbulb',
      title: 'Continuous Innovation',
      description: 'Explore new AI applications to drive innovation and stay ahead of the curve.'
    }
  ];
  keyAspects: any[] = [
    {
      icon: 'pi pi-brain',
      title: 'Learning',
      description: 'Custom machine learning models that enable data-driven decisions and continuous performance improvement.'
    },
    {
      icon: 'pi pi-wrench',
      title: 'Problem-Solving',
      description: 'Advanced algorithms and techniques to analyze complex problems and provide innovative solutions.'
    },
    {
      icon: 'pi pi-search',
      title: 'Reasoning',
      description: 'AI solutions that enable informed decision-making based on data analysis and logical processing.'
    },
    {
      icon: 'pi pi-eye',
      title: 'Perception',
      description: 'Leverage sensor data and multiple sources to gain valuable business insights and understanding.'
    }
  ];
  indtitle:string = `Industry-Wise AI Technology Services`;
  inddescription:string = `We will offer AI technology services across various industries, including:`;
  servicetitle: string = `Pencil Peel IMT's AI-Driven Technology Services`;
  servicedescription: string = `At Pencil Peel IMT, we offer a range of AI-powered services designed to help businesses leverage the power of AI technology. Our team will work with you to develop custom solutions that meet your unique business needs and drive measurable value.`;
  techServices: any[] = [
    {
      title: "Transforming Education with AI-Powered Solutions",
      description: "AI-driven solutions for personalized learning experiences, student engagement, and administrative efficiency.",
      image: "/ai/aieducation.webp",
      link: "/aitechnology/aieducation",
      icon: "pi pi-book"
    },
    {
      title: "Empowering Educators with AI Training at Pencil Peel IMT",
      description: "Implement AI tools to enhance teaching methods and personalize learning experiences.",
      image: "/ai/aiTraining.png",
      link: "/aitechnology/aitraining",
      icon: "pi pi-comments"
    },
    {
      title: "Transforming Government Services with AI",
      description: "AI solutions for public sector challenges, including citizen engagement, resource management, and policy analysis.",
      image: "/ai/aigovernment.webp",
      link: "/aitechnology/government",
      icon: "pi pi-shield"
    },
    {
      title: "Transforming Sectors with AI-Powered Solutions",
      description: "Leverage AI to optimize business processes, improve decision-making, and drive innovation.",
      image: "/ai/aiothers.webp",
      link: "/aitechnology/aisectors",
      icon: "pi pi-cog"
    },
    {
      title: "Revolutionizing Healthcare with AI",
      description: "AI-driven solutions for medical diagnosis, predictive analytics, and personalized treatment plans.",
      image: "/ai/healthcareai.webp",
      link: "/aitechnology/aihealthcare",
      icon: "pi pi-bullhorn"
    },
    {
      title: "AI Customer Support",
      description: "Enhance customer service with AI chatbots and virtual assistants for faster, 24/7 support.",
      image: "/ai/aichatbot.webp",
      link: "/aitechnology/aicustomersupport",
      icon: "pi pi-comments"
    },
    {
      title: "AI Video Advertising",
      description: "Create engaging, AI-driven video ads that captivate audiences and boost conversions.",
      image: "/ai/aivideoad.webp",
      link: "/aitechnology/aivideomaking",
      icon: "pi pi-video"
    },
    {
      title: "AI Custom Software Solutions",
      description: "Develop tailored AI software to streamline operations and drive smart business growth.",
      image: "/ai/aidev.webp",
      link: "/aitechnology/aisoftware",
      icon: "pi pi-cog"
    },
    {
      title: "AI-Powered Lead Generation",
      description: "Automate lead generation with AI tools that identify, engage, and qualify prospects.",
      image: "/ai/aileadgen.webp",
      link: "/aitechnology/aileadgeneration",
      icon: "pi pi-bolt"
    },
    {
      title: "AI Virtual Receptionist",
      description: "Let AI manage calls and inquiries 24/7 with a smart, professional virtual assistant.",
      image: "ai/airecption.webp",
      link: "/aitechnology/aireceptionist",
      icon: "pi pi-phone"
    },
    {
      title: "AI Innovations",
      description: "Explore cutting-edge AI technologies that transform and future-proof your business.",
      image: "/ai/aiinnovation.webp",
      link: "/aitechnology/aiinnovations",
      icon: "pi pi-star"
    }
  ];
  industryCards = [
    {
      title: 'Healthcare Services',
      description: 'We will develop AI-powered solutions for medical diagnosis, predictive analytics, personalized medicine, and clinical trial analysis. Our AI solutions will help healthcare professionals make informed decisions, improve patient outcomes, and reduce costs.',
      image: '/dm/industries/ihospital.webp',
    },
    {
      title: 'Finance Services',
      description: 'We will build AI-driven solutions for risk assessment, fraud detection, portfolio management, and regulatory compliance. Our AI solutions will help financial institutions improve risk management, reduce losses, and enhance customer experience.',
      image: '/dm/industries/ifinancial.webp',
    },
    {
      title: 'Retail Services',
      description: 'We will offer AI-powered solutions for personalized recommendations, inventory management, customer segmentation, and supply chain optimization. Our AI solutions will help retailers improve customer engagement, increase sales, and optimize operations.',
      image: '/dm/industries/iretail.webp',
    },
    {
      title: 'Manufacturing Services',
      description: 'We will develop AI-powered solutions for predictive maintenance, quality control, supply chain optimization, and production planning. Our AI solutions will help manufacturers improve efficiency, reduce costs, and enhance product quality.',
      image: '/dm/industries/iauto.webp',
    },
    {
      title: 'Customer Service',
      description: 'We will build AI-powered chatbots and virtual assistants, sentiment analysis, customer segmentation, and personalized support solutions. Our AI solutions will help businesses improve customer engagement, reduce support costs, and enhance customer experience.',
      image: '/dm/industries/itech.webp',
    },
    {
      title: 'Marketing Services',
      description: 'We will offer AI-powered content generation, social media analysis, predictive analytics, and personalized marketing solutions. Our AI solutions will help businesses improve marketing effectiveness, increase customer engagement, and drive sales.',
      image: 'dm/sembg.webp',
    },
    {
      title: 'Other Industry Services',
      description: 'We will develop AI-powered solutions for education, transportation, energy, and cybersecurity. Our AI solutions will help businesses in these industries improve efficiency, reduce costs, and drive innovation.',
      image: '/ai/aiothers.webp',
    }
  ];
  whyChooseUs: any[] = [
    {
      icon: 'pi pi-user-edit',
      title: 'Expertise',
      description: 'Extensive experience in AI technology and its practical applications across multiple industries.'
    },
    {
      icon: 'pi pi-sliders-h',
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed specifically to meet your unique business requirements and objectives.'
    },
    {
      icon: 'pi pi-check-circle',
      title: 'Proven Results',
      description: 'Successfully delivered AI projects for businesses across various industries with measurable outcomes.'
    },
    {
      icon: 'pi pi-shield',
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance to ensure your AI solutions deliver sustained value and performance.'
    }
  ];
  // Add this new array to your existing component
  businessHelp: any[] = [
    {
      icon: 'pi pi-refresh',
      title: 'Transform Operations',
      description: 'Leverage AI-powered solutions to drive efficiency, innovation, and growth across all business processes.'
    },
    {
      icon: 'pi pi-trending-up',
      title: 'Stay Ahead of the Curve',
      description: 'Continuously benefit from the latest advancements in AI technology and stay competitive in your industry.'
    },
    {
      icon: 'pi pi-star',
      title: 'Achieve Success',
      description: 'With our expertise and AI-powered solutions, businesses will be well on their way to achieving their goals and realizing success.'
    },
    {
      icon: 'pi pi-puzzle-piece',
      title: 'Custom AI Solutions',
      description: 'We develop custom AI solutions that meet specific business needs and drive measurable value.'
    },
    {
      icon: 'pi pi-desktop',
      title: 'AI Implementation',
      description: 'Our team helps businesses implement AI technology and integrate it seamlessly with existing systems and infrastructure.'
    },
    {
      icon: 'pi pi-comments',
      title: 'AI Consulting',
      description: 'We provide comprehensive AI consulting services to help businesses assess their AI readiness and develop strategic AI roadmaps.'
    },
    {
      icon: 'pi pi-book',
      title: 'Training & Support',
      description: 'We provide comprehensive training and ongoing support to help businesses maximize the value of their AI investments.'
    }
  ];
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
  features = [
    {
      title: 'Discovery',
      description: 'We will work with you to understand your business needs and goals, and identify opportunities for AI-powered solutions.',
      icon: 'pi-search',
      iconBgColor: 'red-200',
      iconColor: 'red-600'
    },
    {
      title: 'Solution Development',
      description: 'We will develop AI-powered solutions that meet your unique business needs and goals.',
      icon: 'pi-cog',
      iconBgColor: 'blue-200',
      iconColor: 'blue-600'
    },
    {
      title: 'Implementation',
      description: 'We will implement our AI solutions in a way that minimizes disruption to your business and ensures a smooth transition.',
      icon: 'pi-send',
      iconBgColor: 'green-200',
      iconColor: 'green-600'
    },
    {
      title: 'Ongoing Support',
      description: 'Our team of experts will provide ongoing support and maintenance to ensure that your AI solutions continue to meet your evolving business needs.',
      icon: 'pi-refresh',
      iconBgColor: 'purple-200',
      iconColor: 'purple-600'
    }
  ];
  servicecardtitle:string =`AI Technology Services with Pencil Peel IMT`;
  servicecarddescription:string = `At Pencil Peel IMT, we are committed to delivering innovative AI technology services that drive business growth and success across various industries. Our team of experts will work closely with you to develop and implement AI solutions that meet your unique needs and goals.`;
  servicescards:any[] = [
    {
    category: 'Marketing Services',
    displayName: 'Marketing Services',
    icon: 'pi pi-bullhorn',
    iconBg: 'bg-red-500',
    iconColor: 'text-red-600',
    borderColor: 'border-red-500',
    image: '/dm/industries/marketing.webp',
    imageAlt: 'Marketing Services',
    items: [
      {
        title: 'Content Generation',
        description: "We will develop AI-powered content generation solutions that create high-quality content, such as blog posts, social media posts, and product descriptions, to help businesses improve marketing effectiveness and increase customer engagement."
      },
      {
        title: 'Social Media Analysis',
        description: "Our AI-powered social media analysis solutions will help businesses understand their audience, track engagement, and measure the effectiveness of their social media campaigns."
      },
      {
        title: 'Predictive Analytics',
        description: "We will provide predictive insights for customer behaviour and market trends, enabling data-driven marketing decisions and improving marketing ROI."
      },
      {
        title: 'Personalized Marketing',
        description: "Our AI-powered personalized marketing solutions will help businesses tailor marketing messages and offers to individual customers' preferences and behaviour, improving customer engagement and driving sales."
      }
    ]
    },
    {
    category: 'Education',
    displayName: 'Education',
    icon: 'pi pi-book',
    iconBg: 'bg-blue-500',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    image: '/dm/industries/education.webp',
    imageAlt: 'Education',
    items: [
      {
        title: 'Adaptive Learning',
        description: "We will develop AI-powered adaptive learning solutions that personalize the learning experience for students, improving student outcomes and teacher effectiveness."
      },
      {
        title: 'Personalized Education Plans',
        description: "Our AI solutions will help educators create personalized education plans tailored to individual students' needs and goals, improving student engagement and academic achievement."
      }
    ]
  },
  {
    category: 'Transportation',
    displayName: 'Transportation',
    icon: 'pi pi-truck',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
    image: '/dm/industries/transportation.webp',
    imageAlt: 'Transportation',
    items: [
      {
        title: 'Route Optimization',
        description: "We will develop AI-powered route optimization solutions that help transportation companies reduce costs, improve delivery times, and enhance customer satisfaction."
      },
      {
        title: 'Logistics Solutions',
        description: "Our AI solutions will help logistics companies optimize operations, reduce costs, and improve supply chain efficiency."
      }
    ]
  },
  {
    category: 'Energy',
    displayName: 'Energy',
    icon: 'pi pi-bolt',
    iconBg: 'bg-green-500',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    image: '/dm/industries/energy.webp',
    imageAlt: 'Energy',
    items: [
      {
        title: 'Energy Consumption Optimization',
        description: "We will develop AI-powered solutions that help energy companies optimize energy consumption, reduce costs, and improve sustainability."
      },
      {
        title: 'Predictive Maintenance',
        description: "Our AI solutions will help energy companies predict equipment failures, reducing downtime and improving overall efficiency."
      }
    ]
  },
  {
    category: 'Cybersecurity',
    displayName: 'Cybersecurity',
    icon: 'pi pi-shield',
    iconBg: 'bg-red-500',
    iconColor: 'text-red-600',
    borderColor: 'border-red-500',
    image: '/dm/industries/cybersecurity.webp',
    imageAlt: 'Cybersecurity',
    items: [
      {
        title: 'Threat Detection',
        description: "We will develop AI-powered threat detection solutions that help businesses detect and prevent cyber threats, protecting sensitive data and systems."
      },
      {
        title: 'Incident Response',
        description: "Our AI solutions will help businesses respond quickly and effectively to cyber incidents, minimizing damage and downtime."
      }
    ]
  },
  {
    category: 'Real Estate Services',
    displayName: 'Real Estate Services',
    icon: 'pi pi-home',
    iconBg: 'bg-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    image: '/dm/industries/realestate.webp',
    imageAlt: 'Real Estate Services',
    items: [
      {
        title: 'Property Valuation',
        description: "We will develop AI-powered property valuation models that estimate property values based on location, features, and market trends. Our AI solutions will help real estate professionals make informed decisions and improve the accuracy of property valuations."
      },
      {
        title: 'Predictive Maintenance',
        description: "We will offer AI-driven predictive maintenance solutions for property management, reducing maintenance costs and improving tenant satisfaction. Our AI solutions will help property managers identify potential issues before they become major problems."
      },
      {
        title: 'Customer Segmentation',
        description: "We will use AI to segment customers based on behaviour, preferences, and demographics, enabling targeted marketing and improved customer engagement. Our AI solutions will help real estate businesses understand their customers better and tailor their marketing efforts accordingly."
      }
    ]
  },
  {
    category: 'Agriculture Services',
    displayName: 'Agriculture Services',
    icon: 'pi pi-leaf',
    iconBg: 'bg-green-600',
    iconColor: 'text-green-700',
    borderColor: 'border-green-600',
    image: '/dm/industries/agriculture.webp',
    imageAlt: 'Agriculture Services',
    items: [
      {
        title: 'Crop Yield Prediction',
        description: "We will develop AI-powered crop yield prediction models that estimate crop yields based on weather, soil, and other factors. Our AI solutions will help farmers make informed decisions and improve crop yields."
      },
      {
        title: 'Precision Farming',
        description: "We will offer AI-driven precision farming solutions that optimize crop growth, reduce waste, and improve resource allocation. Our AI solutions will help farmers improve efficiency and productivity."
      },
      {
        title: 'Livestock Monitoring',
        description: "We will use AI to monitor livestock health and behaviour, enabling early detection of diseases and improving animal welfare. Our AI solutions will help farmers reduce the risk of disease outbreaks and improve the health and well-being of their livestock."
      }
    ]
  },
  {
  category: 'Government Services',
  displayName: 'Government Services',
  icon: 'pi pi-globe',
  iconBg: 'bg-blue-700',
  iconColor: 'text-blue-800',
  borderColor: 'border-blue-700',
  image: '/dm/industries/government.webp',
  imageAlt: 'Government Services',
  items: [
    {
      title: 'Public Safety',
      description: 'We will develop AI-powered public safety solutions that detect and prevent crimes, improving emergency response times and community safety. Our AI solutions will help government agencies improve public safety and reduce crime.'
    },
    {
      title: 'Predictive Maintenance',
      description: 'We will offer AI-driven predictive maintenance solutions for infrastructure, reducing maintenance costs and improving public safety. Our AI solutions will help government agencies improve the maintenance of critical infrastructure.'
    },
    {
      title: 'Citizen Engagement',
      description: 'We will use AI to analyse citizen feedback and sentiment, providing insights that inform policy decisions and improve citizen engagement. Our AI solutions will help government agencies understand citizen needs and preferences better.'
    }
  ]
},
  {
  category: 'Sports and Fitness Services',
  displayName: 'Sports and Fitness Services',
  icon: 'pi pi-heart',
  iconBg: 'bg-red-600',
  iconColor: 'text-red-700',
  borderColor: 'border-red-600',
  image: '/dm/industries/sports.webp',
  imageAlt: 'Sports and Fitness Services',
  items: [
    {
      title: 'Performance Analysis',
      description: 'We will develop AI-powered performance analysis solutions that track athlete performance and provide insights that inform training and coaching decisions. Our AI solutions will help athletes and coaches improve performance and achieve their goals.'
    },
    {
      title: 'Injury Prediction',
      description: 'We will offer AI-driven injury prediction models that detect early warning signs of injury, enabling proactive measures to prevent injuries. Our AI solutions will help athletes and coaches reduce the risk of injury and improve overall health and well-being.'
    },
    {
      title: 'Personalized Fitness',
      description: 'We will use AI to create personalized fitness plans tailored to individual needs and goals, improving fitness outcomes and user engagement. Our AI solutions will help individuals achieve their fitness goals and improve their overall health and well-being.'
    }
  ]
}
  ]
  mediaentertainmentservices = [
    {
      title: 'Content Recommendation',
      description: "We will develop AI-powered content recommendation systems that suggest movies, TV shows, music, and other content based on user preferences and behaviour. Our AI solutions will help media companies improve customer engagement and increase revenue."
    },
    {
      title: 'Content Generation',
      description: "We will offer AI-driven content generation solutions that create high-quality content, such as music, videos, and articles. Our AI solutions will help media companies reduce content creation costs and improve efficiency."
    },
    {
      title: 'Audience Analysis',
      description: "We will use AI to analyse audience behaviour and preferences, providing insights that inform content creation and marketing strategies. Our AI solutions will help media companies understand their audience better and tailor their content and marketing efforts accordingly."
    },
    {
      title: 'Personalized Content',
      description: "We will create personalized content experiences tailored to individual users' preferences and interests. Our AI solutions will help media companies improve customer engagement and increase revenue."
    },
    {
      title: 'Content Optimization',
      description: "We will use AI to optimize content for different platforms and audiences, improving engagement and reach. Our AI solutions will help media companies maximize the impact of their content."
    },
    {
      title: 'Sentiment Analysis',
      description: "We will analyse audience sentiment and feedback using AI, providing insights that inform content creation and marketing strategies. Our AI solutions will help media companies understand audience sentiment and improve their content and marketing efforts."
    },
    {
      title: 'Trend Prediction',
      description: "We will develop AI-powered trend prediction models that identify emerging trends and patterns in audience behaviour and preferences. Our AI solutions will help media companies stay ahead of the competition and capitalize on emerging trends."
    },
    {
      title: 'Automated Video Editing',
      description: "We will offer AI-driven automated video editing solutions that create high-quality video content quickly and efficiently. Our AI solutions will help media companies reduce video production costs and improve efficiency."
    },
    {
      title: 'Virtual Influencers',
      description: "We will create AI-powered virtual influencers that engage with audiences and promote products or services. Our AI solutions will help media companies improve brand awareness and reach new audiences."
    },
    {
      title: 'Content Moderation',
      description: "We will use AI to moderate content and detect inappropriate or harmful content, improving user safety and experience. Our AI solutions will help media companies ensure that their content meets community standards and guidelines."
    },
    {
      title: 'Podcast Analysis',
      description: "We will analyse podcast data using AI, providing insights that inform content creation and marketing strategies. Our AI solutions will help podcasters understand their audience better and improve their content."
    },
    {
      title: 'Social Media Management',
      description: "We will offer AI-driven social media management solutions that optimize social media content and engagement. Our AI solutions will help media companies improve their social media presence and engagement."
    },
    {
      title: 'Influencer Identification',
      description: "We will use AI to identify influencers and content creators who can promote products or services to target audiences. Our AI solutions will help media companies partner with influencers who can help them reach their target audience."
    },
    {
      title: 'Content Rights Management',
      description: "We will develop AI-powered content rights management solutions that track and manage content ownership and usage rights. Our AI solutions will help media companies protect their intellectual property and ensure that they are compensated for their content."
    }
  ];
  governmentServices = {
    header: 'Government Services',
    description: 'At Pencil Peel IMT, we recognize the importance of AI in government services. Our AI-powered solutions for government services include:',
    items: [
      {
        title: 'Public Safety',
        content: 'We will develop AI-powered public safety solutions that detect and prevent crimes, improving emergency response times and community safety. Our AI solutions will help government agencies improve public safety and reduce crime.'
      },
      {
        title: 'Predictive Maintenance',
        content: 'We will offer AI-driven predictive maintenance solutions for infrastructure, reducing maintenance costs and improving public safety. Our AI solutions will help government agencies improve the maintenance of critical infrastructure.'
      },
      {
        title: 'Citizen Engagement',
        content: 'We will use AI to analyse citizen feedback and sentiment, providing insights that inform policy decisions and improve citizen engagement. Our AI solutions will help government agencies understand citizen needs and preferences better.'
      }
    ]
  };
  private intervalId: any;

  ngOnInit() {
    // change every 5 seconds
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.aiComponents.length;
    }, 2500);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // prevent memory leak
    }
  }
  aiTechnologyServicesFull = [
  {
    title: 'Industry-Wise AI Technology Services',
    sectionDescription: 'We will offer AI technology services across various industries, leveraging our expertise to meet unique business needs and drive innovation.',
    points: [
      {
        title: 'Healthcare Services',
        description: 'We will develop AI-powered solutions for medical diagnosis, predictive analytics, personalized medicine, and clinical trial analysis. Our AI solutions will help healthcare professionals make informed decisions, improve patient outcomes, and reduce costs.'
      },
      {
        title: 'Finance Services',
        description: 'We will build AI-driven solutions for risk assessment, fraud detection, portfolio management, and regulatory compliance. Our AI solutions will help financial institutions improve risk management, reduce losses, and enhance customer experience.'
      },
      {
        title: 'Retail Services',
        description: 'We will offer AI-powered solutions for personalized recommendations, inventory management, customer segmentation, and supply chain optimization. Our AI solutions will help retailers improve customer engagement, increase sales, and optimize operations.'
      },
      {
        title: 'Manufacturing Services',
        description: 'We will develop AI-powered solutions for predictive maintenance, quality control, supply chain optimization, and production planning. Our AI solutions will help manufacturers improve efficiency, reduce costs, and enhance product quality.'
      },
      {
        title: 'Customer Service',
        description: 'We will build AI-powered chatbots and virtual assistants, sentiment analysis, customer segmentation, and personalized support solutions. Our AI solutions will help businesses improve customer engagement, reduce support costs, and enhance customer experience.'
      },
      {
        title: 'Marketing Services',
        description: 'We will offer AI-powered content generation, social media analysis, predictive analytics, and personalized marketing solutions. Our AI solutions will help businesses improve marketing effectiveness, increase customer engagement, and drive sales.'
      },
      {
        title: 'Other Industry Services',
        description: 'We will develop AI-powered solutions for education, transportation, energy, and cybersecurity. Our AI solutions will help businesses in these industries improve efficiency, reduce costs, and drive innovation.'
      }
    ]
  },
  {
    title: 'Marketing Services',
    sectionDescription: 'At Pencil Peel IMT, we offer AI-powered marketing solutions that drive business growth and success.',
    points: [
      {
        title: 'Content Generation',
        description: 'We will develop AI-powered content generation solutions that create high-quality content, such as blog posts, social media posts, and product descriptions, to help businesses improve marketing effectiveness and increase customer engagement.'
      },
      {
        title: 'Social Media Analysis',
        description: 'Our AI-powered social media analysis solutions will help businesses understand their audience, track engagement, and measure the effectiveness of their social media campaigns.'
      },
      {
        title: 'Predictive Analytics',
        description: 'We will provide predictive insights for customer behaviour and market trends, enabling data-driven marketing decisions and improving marketing ROI.'
      },
      {
        title: 'Personalized Marketing',
        description: 'Our AI-powered personalized marketing solutions will help businesses tailor marketing messages and offers to individual customers\' preferences and behaviour, improving customer engagement and driving sales.'
      }
    ]
  },
  {
    title: 'Education',
    sectionDescription: 'At Pencil Peel IMT, we understand the importance of AI in education. Our AI-powered solutions will transform learning experiences for both students and educators.',
    points: [
      {
        title: 'Adaptive Learning',
        description: 'We will develop AI-powered adaptive learning solutions that personalize the learning experience for students, improving student outcomes and teacher effectiveness.'
      },
      {
        title: 'Personalized Education Plans',
        description: 'Our AI solutions will help educators create personalized education plans tailored to individual students\' needs and goals, improving student engagement and academic achievement.'
      }
    ]
  },
  {
    title: 'Transportation',
    sectionDescription: 'Our AI-powered solutions for transportation will optimize routes, cut down costs, and improve delivery efficiency.',
    points: [
      {
        title: 'Route Optimization',
        description: 'We will develop AI-powered route optimization solutions that help transportation companies reduce costs, improve delivery times, and enhance customer satisfaction.'
      },
      {
        title: 'Logistics Solutions',
        description: 'Our AI solutions will help logistics companies optimize operations, reduce costs, and improve supply chain efficiency.'
      }
    ]
  },
  {
    title: 'Energy',
    sectionDescription: 'At Pencil Peel IMT, we recognize the critical role of AI in the energy sector.',
    points: [
      {
        title: 'Energy Consumption Optimization',
        description: 'We will develop AI-powered solutions that help energy companies optimize energy consumption, reduce costs, and improve sustainability.'
      },
      {
        title: 'Predictive Maintenance',
        description: 'Our AI solutions will help energy companies predict equipment failures, reducing downtime and improving overall efficiency.'
      }
    ]
  },
  {
    title: 'Cybersecurity',
    sectionDescription: 'Our AI-powered solutions for cybersecurity protect businesses from threats and vulnerabilities.',
    points: [
      {
        title: 'Threat Detection',
        description: 'We will develop AI-powered threat detection solutions that help businesses detect and prevent cyber threats, protecting sensitive data and systems.'
      },
      {
        title: 'Incident Response',
        description: 'Our AI solutions will help businesses respond quickly and effectively to cyber incidents, minimizing damage and downtime.'
      }
    ]
  },
  {
    title: 'Real Estate Services',
    sectionDescription: 'At Pencil Peel IMT, we understand the importance of AI in real estate and property management.',
    points: [
      {
        title: 'Property Valuation',
        description: 'We will develop AI-powered property valuation models that estimate property values based on location, features, and market trends. Our AI solutions will help real estate professionals make informed decisions and improve the accuracy of property valuations.'
      },
      {
        title: 'Predictive Maintenance',
        description: 'We will offer AI-driven predictive maintenance solutions for property management, reducing maintenance costs and improving tenant satisfaction. Our AI solutions will help property managers identify potential issues before they become major problems.'
      },
      {
        title: 'Customer Segmentation',
        description: 'We will use AI to segment customers based on behaviour, preferences, and demographics, enabling targeted marketing and improved customer engagement. Our AI solutions will help real estate businesses understand their customers better and tailor their marketing efforts accordingly.'
      }
    ]
  },
  {
    title: 'Agriculture Services',
    sectionDescription: 'At Pencil Peel IMT, we recognize the critical role of AI in agriculture.',
    points: [
      {
        title: 'Crop Yield Prediction',
        description: 'We will develop AI-powered crop yield prediction models that estimate crop yields based on weather, soil, and other factors. Our AI solutions will help farmers make informed decisions and improve crop yields.'
      },
      {
        title: 'Precision Farming',
        description: 'We will offer AI-driven precision farming solutions that optimize crop growth, reduce waste, and improve resource allocation. Our AI solutions will help farmers improve efficiency and productivity.'
      },
      {
        title: 'Livestock Monitoring',
        description: 'We will use AI to monitor livestock health and behaviour, enabling early detection of diseases and improving animal welfare. Our AI solutions will help farmers reduce the risk of disease outbreaks and improve the health and well-being of their livestock.'
      }
    ]
  },
  {
    title: 'Media and Entertainment Services',
    sectionDescription: 'At Pencil Peel IMT, we understand the importance of AI in the media and entertainment industry.',
    points: [
      { title: 'Content Recommendation', description: 'We will develop AI-powered content recommendation systems that suggest movies, TV shows, music, and other content based on user preferences and behaviour. Our AI solutions will help media companies improve customer engagement and increase revenue.' },
      { title: 'Content Generation', description: 'We will offer AI-driven content generation solutions that create high-quality content, such as music, videos, and articles. Our AI solutions will help media companies reduce content creation costs and improve efficiency.' },
      { title: 'Audience Analysis', description: 'We will use AI to analyse audience behaviour and preferences, providing insights that inform content creation and marketing strategies. Our AI solutions will help media companies understand their audience better and tailor their content and marketing efforts accordingly.' },
      { title: 'Personalized Content', description: 'We will create personalized content experiences tailored to individual users\' preferences and interests. Our AI solutions will help media companies improve customer engagement and increase revenue.' },
      { title: 'Content Optimization', description: 'We will use AI to optimize content for different platforms and audiences, improving engagement and reach. Our AI solutions will help media companies maximize the impact of their content.' },
      { title: 'Sentiment Analysis', description: 'We will analyse audience sentiment and feedback using AI, providing insights that inform content creation and marketing strategies.' },
      { title: 'Trend Prediction', description: 'We will develop AI-powered trend prediction models that identify emerging trends and patterns in audience behaviour.' },
      { title: 'Automated Video Editing', description: 'We will offer AI-driven automated video editing solutions that create high-quality video content quickly and efficiently.' },
      { title: 'Virtual Influencers', description: 'We will create AI-powered virtual influencers that engage with audiences and promote products or services.' },
      { title: 'Content Moderation', description: 'We will use AI to moderate content and detect inappropriate or harmful material.' },
      { title: 'Podcast Analysis', description: 'We will analyse podcast data using AI to help creators refine their strategies.' },
      { title: 'Social Media Management', description: 'We will offer AI-driven social media management solutions to optimize engagement.' },
      { title: 'Influencer Identification', description: 'We will use AI to identify influencers and content creators suited to brand goals.' },
      { title: 'Content Rights Management', description: 'We will develop AI-powered systems to track and manage content ownership rights.' }
    ]
  },
  {
    title: 'Government Services',
    sectionDescription: 'At Pencil Peel IMT, we recognize the importance of AI in government services.',
    points: [
      { title: 'Public Safety', description: 'We will develop AI-powered public safety solutions that detect and prevent crimes, improving emergency response times and community safety.' },
      { title: 'Predictive Maintenance', description: 'We will offer AI-driven predictive maintenance solutions for infrastructure, reducing maintenance costs and improving public safety.' },
      { title: 'Citizen Engagement', description: 'We will use AI to analyse citizen feedback and sentiment, providing insights that inform policy decisions and improve citizen engagement.' }
    ]
  },
  {
    title: 'Sports and Fitness Services',
    sectionDescription: 'At Pencil Peel IMT, we understand the importance of AI in sports and fitness. Our AI-powered solutions for sports and fitness include:',
    points: [
      { title: 'Performance Analysis', description: 'We will develop AI-powered performance analysis solutions that track athlete performance and provide insights that inform training and coaching decisions. Our AI solutions will help athletes and coaches improve performance and achieve their goals.' },
      { title: 'Injury Prediction', description: 'We will offer AI-driven injury prediction models that detect early warning signs of injury, enabling proactive measures to prevent injuries. Our AI solutions will help athletes and coaches reduce the risk of injury and improve overall health and well-being.' },
      { title: 'Personalized Fitness', description: 'We will use AI to create personalized fitness plans tailored to individual needs and goals, improving fitness outcomes and user engagement.' }
    ]
  }
];


}
