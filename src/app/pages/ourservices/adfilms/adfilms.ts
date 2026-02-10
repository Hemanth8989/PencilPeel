import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { Subservices } from '../../../components/subservices/subservices';
import { WhyUsModel } from '../../../models/whyUs';
import { Whyus } from '../../../components/whyus/whyus';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Feature } from '../../filmpromo/filmpromo';

@Component({
  selector: 'app-adfilms',
  imports: [Nocarouselquotes, Subservices, Whyus, CardModule, CommonModule],
  templateUrl: './adfilms.html',
  styleUrl: './adfilms.scss'
})
export class Adfilms {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/adFilm.png',
      title: `
      Unlock Your 
      <span class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-tight">
        AD Film Making
      </span>
      Services with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: `
          At <span class="text-orange-500">Pencil Peel IMT</span>, we understand the power of AD films in capturing audiences' attention and conveying brand messages effectively. Our team of creative professionals specializes in producing high-quality AD films that engage, inform, and inspire.
    `
    };

  quotes = [
    { text: "Crafting compelling ad films that capture attention." },
    { text: "Transforming brands with impactful ad film storytelling." },
    { text: "Ad films that engage, persuade, and drive action." },
    { text: "Creating memorable ad films for brand success." },
    { text: "Effective ad films for maximum brand impact." },
    { text: "Storytelling through ad films for business growth." },
    { text: "Ad films designed to connect and convert audiences." },
    { text: "Elevating brands with strategic ad film making." }
  ];

  subServiceTitle: string = "Different Types of AD Films at Pencil Peel IMT";
  subServicedescription: string = "At Pencil Peel IMT, we specialize in creating a wide range of AD films to meet the diverse needs of our clients. ";
  subServices = [
    {
      id: 'f2',
      title: 'Product AD Films',
      description: `We'll create product AD films that highlight the features, benefits, and unique selling points of your product.`,
      fullDescription: `
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Showcasing Product Features:</strong>  We'll create product AD films that highlight the features, benefits, and unique selling points of your product.</li>
          <li><strong>Product Launch:</strong> Our team will help you launch new products or promote existing ones through engaging product AD films.</li>
        </ul>
      `,
      expanded: false
    },
    {
      id: 'f3',
      title: 'Brand AD Films',
      description: `We'll create brand AD films that focus on building brand awareness and establishing your brand's identity.`,
      fullDescription: `
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Building Brand Awareness:</strong>  We'll create brand AD films that focus on building brand awareness and establishing your brand's identity.</li>
          <li><strong>Storytelling and Emotional Appeals:</strong> Our team will use storytelling, emotional appeals, and memorable visuals to create impactful brand AD films.</li>
        </ul>
      `,
      expanded: false
    },
    {
      id: 'f4',
      title: 'Service AD Films',
      description: `We'll create service AD films that highlight the benefits and features of your service, such as consulting, healthcare, or financial services.`,
      fullDescription: `
        <ul class="list-disc pl-5 mt-3 space-y-2">
          <li><strong>Highlighting Service Benefits:</strong> We'll create service AD films that highlight the benefits and features of your service, such as consulting, healthcare, or financial services.</li>
          <li><strong>Building Trust and Credibility:</strong> Our team will help you build trust and credibility with your target audience through effective service AD films.</li>
        </ul>
      `,
      expanded: false
    },
    {
      id: 'f5',
      title: 'Testimonial AD Films',
      description: `We'll create testimonial AD films that feature satisfied customers sharing their experiences and opinions about your product or service.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Featuring Satisfied Customers:</strong> We'll create testimonial AD films that feature satisfied customers sharing their experiences and opinions about your product or service.</li>
        <li><strong>Building Credibility and Trust:</strong> Our team will help you build credibility and trust with your target audience through authentic and compelling testimonial AD films.</li>
      </ul>
    `,
      expanded: false
    },
    {
      id: 'f6',
      title: 'Explainer AD Films',
      description: `We'll create explainer AD films that explain complex concepts, products, or services in a clear and concise manner.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Explaining Complex Concepts:</strong> We'll create explainer AD films that explain complex concepts, products, or services in a clear and concise manner.</li>
        <li><strong>Engaging and Informative:</strong> Our team will ensure that your explainer AD films are engaging, informative, and effective in communicating your message.</li>
      </ul>
    `,
      expanded: false
    },
    {
      id: 'f7',
      title: 'Demo AD Films',
      description: `We'll create demo AD films that showcase the features and benefits of your product through demonstrations and hands-on experiences.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Showcasing Product Features:</strong> We'll create demo AD films that showcase the features and benefits of your product through demonstrations and hands-on experiences.</li>
        <li><strong>Practical and Engaging:</strong> Our team will ensure that your demo AD films are practical, engaging, and effective in showcasing your product's capabilities.</li>
      </ul>
    `,
      expanded: false

    },
    {
      id: 'f8',
      title: 'Event AD Films',
      description: `We'll create event AD films that capture the essence of your event, such as a product launch, conference, or trade show.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Capturing Event Essence:</strong> We'll create event AD films that capture the essence of your event, such as a product launch, conference, or trade show.</li>
        <li><strong>Showcasing Your Brand:</strong> Our team will highlight your brand's presence and participation in the event through engaging event AD films.</li>
      </ul>
    `,
      expanded: false,

    },
    {
      id: 'f9',
      title: 'Corporate AD Films',
      description: `We'll create corporate AD films that promote your company's values, mission, and culture.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Promoting Company Values:</strong> We'll create corporate AD films that promote your company's values, mission, and culture.</li>
        <li><strong>Building Brand Identity:</strong> Our team will help you build a strong brand identity through effective corporate AD films.</li>
      </ul>
    `,
      expanded: false,

    },
    {
      id: 'f10',
      title: 'Social Impact AD Films',
      description: `We'll create social impact AD films that highlight your company's commitment to social responsibility and sustainability.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Highlighting Social Responsibility:</strong> We'll create social impact AD films that highlight your company's commitment to social responsibility and sustainability.</li>
        <li><strong>Building Trust and Credibility:</strong> Our team will help you build trust and credibility with your target audience through authentic and compelling social impact AD films.</li>
      </ul>
    `,
      expanded: false,

    },
    {
      id: 'f11',
      title: 'Animated AD Films',
      description: `We'll create animated AD films that use animation and graphics to bring your product or service to life.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Bringing Your Brand to Life:</strong> We'll create animated AD films that use animation and graphics to bring your product or service to life.</li>
        <li><strong>Engaging and Informative:</strong> Our team will ensure that your animated AD films are engaging, informative, and effective in communicating your message.</li>
      </ul>
    `,
      expanded: false
    },
    {
      id: 'f12',
      title: 'Live-Action AD Films',
      description: `We'll create live-action AD films that feature real people and settings to create a more authentic and engaging experience.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Featuring Real People:</strong> We'll create live-action AD films that feature real people and settings to create a more authentic and engaging experience.</li>
        <li><strong>Building Emotional Connections:</strong> Our team will help you build emotional connections with your target audience through effective live-action AD films.</li>
      </ul>
    `,
      expanded: false
    },
    {
      id: 'f13',
      title: 'Hybrid AD Films',
      description: `We'll create hybrid AD films that combine live-action and animation to create a unique and captivating visual experience.`,
      fullDescription: `
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Combining Live-Action and Animation:</strong> We'll create hybrid AD films that combine live-action and animation to create a unique and captivating visual experience.</li>
        <li><strong>Engaging and Informative:</strong> Our team will ensure that your hybrid AD films are engaging, informative, and effective in communicating your message.</li>
      </ul>
    `,
      expanded: false
    }
  ];

  whyUs: WhyUsModel = {
    title: 'Why you must Opt for an AD Film for your Brand',
    description: "An AD Film is a creative piece of art that relates your Brand directly to the viewers. A beautifully done AD film with meaningful content and impressive visuals reaches a huge range of audience-network quickly to give your Brand a permanent place in the market.",
    List: [
      {
        icon: 'pi pi-image',
        title: 'Visual A picture speaks a thousand words',
        description: "Visual A picture speaks a thousand words. A catchy picture or a film creates a permanent impression of your Brand on its viewers.",
        background: 'bg-blue-500',
        border: 'border-blue-500'
      },
      {
        icon: 'pi pi-dollar',
        title: 'Boosts Brand Awareness and Engagement',
        description: "An AD film can significantly boost brand awareness by telling your brand's story in a compelling and engaging way, capturing audience attention and driving engagement.",
        background: 'bg-blue-500',
        border: 'border-blue-500'
      },
      {
        icon: 'pi pi-thumbs-up',
        title: 'Trust-Building',
        description: "An AD film with proper emotions connects to the viewers and creates a touchy-feely bond of them with your Product or Concept.",
        background: 'bg-blue-500',
        border: 'border-blue-500'
      },
      {
        icon: 'pi pi-users',
        title: 'Conversion of a Viewer to a Customer',
        description: "A successful AD Film generates the right kind of trust toward the efficacy of your Product or Concept, thereby converting your Viewers to your Customers. It helps you expand and monetize your business.",
        background: 'bg-blue-500',
        border: 'border-blue-500'
      },
      {
        icon: 'pi pi-calendar-plus',
        title: 'Drives Results and Impact',
        description: "A well-crafted AD film can drive results for your business by influencing audience perceptions, driving conversions, and ultimately contributing to business growth",
        background: 'bg-blue-500',
        border: 'border-blue-500'
      }
    ]
  }

  adFilmUseCases = [
    {
      title: 'Power of AD Film',
      icon: 'pi pi-bolt',
      iconColor: 'text-yellow-500',
      accentColor: 'yellow',
      borderColor: 'border-yellow-400',
      details: [
        {
          title: 'Engaging Storytelling',
          icon: 'pi pi-images',
          description: 'We leverage the power of storytelling in AD films to create emotional connections with audiences, drive engagement, and build brand loyalty.'
        },
        {
          title: 'Visual Impact and Creativity',
          icon: 'pi pi-code',
          description: 'Our team utilizes creativity and technical expertise to craft AD films with visual impact that capture audience attention and leave a lasting impression.'
        },
        {
          title: 'Adaptability Across Platforms',
          icon: 'pi pi-search',
          description: `We create AD films adaptable for various platforms like TV, digital, social media, and more to maximize reach and impact.`
        }
      ]
    },
    {
      title: 'Future of AD Film',
      icon: 'pi pi-image',
      iconColor: 'text-blue-500',
      accentColor: 'blue',
      borderColor: 'border-blue-400',
      details: [
        {
          title: 'Integration of Emerging Technologies',
          icon: 'pi pi-camera',
          description: `We'll stay updated with emerging technologies and trends in AD film making to ensure our strategies and productions are always optimized for current best practices.`
        },
        {
          title: 'Personalization and Targeting',
          icon: 'pi pi-bullseye',
          description: `We'll help businesses leverage AD films for personalized and targeted messaging to enhance engagement and conversion rates.`
        },
        {
          title: 'Data-Driven Insights',
          icon: 'pi pi-sparkles',
          description: `We'll utilize data-driven insights to optimize AD film performance, measure effectiveness, and refine strategies for better results.`
        }
      ]
    }
  ]

  ctaText = `By choosing Pencil Peel IMT for AD film making, you benefit from our expertise in creating compelling advertising films that tell your brand's story effectively, engage your target audience, and drive results for your business. We leverage our skills in concept development, scriptwriting, production, and post-production to deliver AD films that make an impact.`;


  whyChooseFeatures: Feature[] = [
    {
      icon: 'pi pi-briefcase',
      iconColors: 'bg-gradient-to-tr from-orange-400 to-yellow-500',
      titleColor: 'text-orange-700',
      title: 'Creativity Meets Technical Expertise',
      description: 'We combine innovative storytelling with cutting-edge technical skills to create AD films that capture audience attention and drive engagement.'
    },
    {
      icon: 'pi pi-lightbulb',
      iconColors: 'bg-gradient-to-tr from-yellow-400 to-amber-500',
      titleColor: 'text-amber-700',
      title: 'Huge Experience and Great Knowledge',
      description: 'With our extensive experience in software design, development, and digital storytelling, we bring a wealth of knowledge to craft AD films that are both effective and engaging.'
    },
    {
      icon: 'pi pi-globe',
      iconColors: 'bg-gradient-to-tr from-yellow-500 to-orange-600',
      titleColor: 'text-yellow-700',
      title: 'Impactful, Engaging, and Aligned with Brand Objective',
      description: `We ensure that every AD film we produce is impactful, engaging for the target audience, and closely aligned with your brand's specific objectives and goals.`
    },
    {
      icon: 'pi pi-chart-line',
      iconColors: 'bg-gradient-to-tr from-amber-400 to-yellow-400',
      titleColor: 'text-yellow-700',
      title: 'Client-Centric Approach',
      description: `We work closely with clients to understand their unique needs, goals, and brand identity to deliver AD films that meet and exceed their expectations.`
    }
  ];

  contact: any = {
    title: 'Contact Us Today',
    description: `Contact us Today to unlock the gateway to your business success with Pencil Peel IMT's expert AD film-making services. We'll help you create impactful AD films that drive results, engage your audience, and align with your brand objectives.`
  }

  adFilmServices = [
    {
      title: 'Concept Development',
      description: 'We work closely with clients to develop creative concepts that align with their brand goals, objectives, and target audience. Our team ensures that the concept is innovative, engaging, and tailored to achieve the desired impact.'
    },
    {
      title: 'Script Writing',
      description: 'Our team of experienced scriptwriters crafts compelling scripts that capture the essence of a brand, conveying the message effectively to the target audience. We focus on storytelling that resonates and drives engagement.'
    },
    {
      title: 'Pre-Production',
      description: `
    <div class="text-left">
      <p>In this crucial phase, we lay the groundwork for a successful AD film. This includes:</p>
      <ul class="list-disc list-inside text-gray-700 space-y-2 mt-2">
        <li>Concept designing and refining</li>
        <li>Script finalization</li>
        <li>Planning the budget</li>
        <li>Selection of locations for shooting</li>
        <li>Selection of artists and crew</li>
        <li>Choosing the right equipment for the shoot</li>
        <li>Scheduling and logistics planning</li>
      </ul>
    </div>`
    },
    {
      title: 'Film Production',
      description: `
      <div class="text-left">
        <p>This is the core of AD film making where we translate the script to screen aesthetically. Our team handles:</p>
        <ul class="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Direction and cinematography</li>
            <li>Shooting with attention to detail and creativity</li>
            <li>Managing on-set logistics and talent direction</li>
        </ul>
      </div>`
    },
    {
      title: 'Post Production',
      description: `
      <div class="text-left">
        <p>We finalize the AD film with expert editing and enhancements, including:</p>
        <ul class="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Editing for pacing and impact</li>
            <li>Dubbing and voice-over recording</li>
            <li>Graphic synchronization for visual effects</li>
            <li>Music composition or selection to enhance the narrative</li>
            <li>Final output delivery in desired formats</li>
        </ul>
      </div>`
    }
  ]

}
