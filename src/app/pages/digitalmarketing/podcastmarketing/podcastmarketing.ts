import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { FaqCardModel } from '../../../models/FaqCard';
import { Faqcards } from "../../../components/faqcards/faqcards";
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { AccordionModule } from 'primeng/accordion';
import { Contactus } from "../../../components/contactus/contactus";
import { Quotes } from "../../../components/quotes/quotes";

@Component({
  selector: 'app-podcastmarketing',
  imports: [Nocarouselherosection, Faqcards, StepperModule, CommonModule, CardModule, Timeline, AccordionModule, Contactus, Quotes],
  templateUrl: './podcastmarketing.html',
  styleUrl: './podcastmarketing.scss'
})
export class Podcastmarketing {
  herocontent: any = {
  title: `
    Podcast Creation and <br>
    <span class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
      Promotion Marketing
    </span>
    with
    <span class="bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>
  `,
  description: `At Pencil Peel IMT, we understand the power of podcast creation and promotion marketing in building brand awareness, engaging audiences, and driving business growth. Our team of experts specializes in creating and promoting podcasts that resonate with your target audience and help you achieve your business goals.`,
  image: '/dm/services/podcastmarketing.webp'
};

quotes = [
  {text:"Transform Your Brand's Storytelling with Expert Podcast Creation and Promotion - Pencil Peel IMT"},
  {text:"The Sound of Success: Unlock the Power of Podcasting with Pencil Peel IMT"},
  {text:"Elevate Your Brand's Voice: Professional Podcast Creation and Promotion Services - Pencil Peel IMT"},
  {text:"Podcast Creation and Promotion that Resonates: Authentic, Engaging, and Effective - Pencil Peel IMT"},
  {text:"Amplify Your Message: Comprehensive Podcast Creation and Promotion Solutions - Pencil Peel IMT"},
  {text:"From Idea to Audience: Expert Podcast Creation and Promotion Services that Drive Results - Pencil Peel IMT"}

];
faqcards: FaqCardModel[] = [
  {
    id: 'podcast1',
    title: 'What is Podcast Creation and Promotion Marketing?',
    description: 'Podcast creation and promotion marketing involves creating high-quality, engaging podcast content that showcases your brand\'s expertise and thought leadership.',
    fullDescription: `Podcast creation and promotion marketing involves creating high-quality, engaging podcast content that showcases your brand's expertise and thought leadership, and promoting it through various channels to reach your target audience.`,
    expanded: false,
    image: '/dm/podcast/what-is-podcast-creation.webp'
  },
  {
    id: 'podcast2',
    title: 'How Does Podcast Creation and Promotion Marketing Work?',
    description: 'We create engaging podcast content and promote it to reach your target audience and drive business growth.',
    fullDescription: `
      We will work with you to:
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>Create high-quality podcast content:</strong> Our team will create engaging podcast content that showcases your brand's expertise and thought leadership.</li>
        <li><strong>Promote your podcast:</strong> We will promote your podcast through various channels, including social media, email marketing, and paid advertising.</li>
        <li><strong>Reach your target audience:</strong> Our team will help you reach your target audience and build a loyal listener base.</li>
        <li><strong>Drive business growth:</strong> We will help you drive business growth by increasing brand awareness, generating leads, and driving website traffic.</li>
      </ul>
    `,
    expanded: false,
    image: '/dm/podcast/how-podcast-marketing-works.webp'
  }
];


//stepper with timeline
stepValue = 1;

podcreationtimeline = [
  {
    title: 'Planning and Strategy',
    description:
      "We'll work with you to define your podcast's goals, target audience, and content plan.",
    icon: 'pi pi-sitemap',
    color: 'bg-orange-500',
  },
  {
    title: 'Equipment and Setup',
    description:
      "We'll ensure you have the necessary equipment and software to produce high-quality audio.",
    icon: 'pi pi-microphone',
    color: 'bg-yellow-500',
  },
  {
    title: 'Recording and Editing',
    description:
      'Our team will record and edit your podcast episodes, removing background noise and adding intro/outro music.',
    icon: 'pi pi-volume-up',
    color: 'bg-orange-500',
  },
  {
    title: 'Publishing',
    description:
      'We\'ll upload your episodes to podcast hosting platforms and distribute them to directories like Apple Podcasts, Spotify, and Google Podcasts.',
    icon: 'pi pi-cloud-upload',
    color: 'bg-yellow-500',
  },
  {
    title: 'Tells your story',
    description:
      "We'll help you share your brand's story and values through compelling audio content.",
    icon: 'pi pi-book',
    color: 'bg-orange-500',
  },
  {
    title: 'Engages your audience',
    description:
      'Our podcasts are designed to engage and retain your target audience.',
    icon: 'pi pi-users',
    color: 'bg-yellow-500',
  },
  {
    title: 'Drives results',
    description:
      'We\'ll help you create a podcast that drives website traffic, lead generation, and other specific goals.',
    icon: 'pi pi-chart-line',
    color: 'bg-orange-500',
  },
];
promotionTimeline = [
  {
    title: 'Organic Promotion',
    description:
      "We'll share your episodes on social media, email newsletters, and your website.",
    icon: 'pi pi-share-alt',
    color: 'bg-orange-500',
  },
  {
    title: 'Paid Promotion',
    description:
      "We'll run targeted ads on social media and Google Ads to reach new listeners.",
    icon: 'pi pi-megaphone',
    color: 'bg-yellow-500',
  },
  {
    title: 'Collaborations and Networking',
    description:
      "We'll partner with influencers and other podcasters to feature your podcast.",
    icon: 'pi pi-link',
    color: 'bg-orange-500',
  },
  {
    title: 'Listener Engagement',
    description:
      "We'll encourage reviews, ratings, and shares, and provide exclusive content to engage your audience.",
    icon: 'pi pi-comments',
    color: 'bg-yellow-500',
  },
  {
    title: 'Established Thought Leadership',
    description:
      "We'll help you establish your brand as a thought leader in your niche.",
    icon: 'pi pi-star',
    color: 'bg-orange-500',
  },
  {
    title: 'Increased Audience Engagement',
    description:
      'Our podcast creation and promotion services will help you build stronger connections with your listeners.',
    icon: 'pi pi-heart',
    color: 'bg-yellow-500',
  },
  {
    title: 'Broader Reach',
    description:
      "We'll help you tap into the growing podcast audience globally.",
    icon: 'pi pi-globe',
    color: 'bg-orange-500',
  },
  {
    title: 'Cost-Effective',
    description:
      'Podcasts are a cost-effective way to reach your target audience and achieve your marketing goals.',
    icon: 'pi pi-wallet',
    color: 'bg-yellow-500',
  },
];


//steps
activeStep = 1;

keycomponents = [
  {
    id: 1,
    title: 'Concept and Planning',
    description:
      "We will help you develop a concept and plan for your podcast, including defining your target audience, determining your podcast's tone and style, and outlining your content strategy.",
  },
  {
    id: 2,
    title: 'Content Creation',
    description:
      'Our team will create high-quality, engaging content for your podcast, including scripting, interviewing guests, and recording audio.',
  },
  {
    id: 3,
    title: 'Audio Production',
    description:
      'We will produce high-quality audio for your podcast, including editing, mixing, and mastering.',
  },
  {
    id: 4,
    title: 'Podcast Hosting',
    description:
      'Our team will host your podcast on a reliable platform that ensures fast loading times and minimal downtime.',
  },
  {
    id: 5,
    title: 'Artwork and Branding',
    description:
      'We will create eye-catching artwork and branding for your podcast, including cover art, logos, and social media graphics.',
  },
  {
    id: 6,
    title: 'Distribution',
    description:
      'We will distribute your podcast to major platforms, including Apple Podcasts, Spotify, and Google Podcasts.',
  },
  {
    id: 7,
    title: 'Promotion',
    description:
      'Our team will promote your podcast through various channels, including social media, email marketing, and paid advertising.',
  },
  {
    id: 8,
    title: 'Analytics and Tracking',
    description:
      "We will track your podcast's performance using analytics tools, providing you with insights into your audience and helping you refine your content strategy.",
  },
];

steptitle:string = 'Podcast Creation and Promotion with Pencil Peel';
stepdescription:string = 'At Pencil Peel IMT, our team of experts specializes in creating and promoting podcasts that resonate with your target audience, build brand awareness, engage listeners, and drive specific goals like website traffic or lead generation.'

activeIndex = 0;
creationSteps = [
  {
    title: 'Planning and Strategy',
    description: "Define your podcast's goals, target audience, and content plan."
  },
  {
    title: 'Equipment and Setup',
    description: 'Ensure high-quality audio with the right tools.'
  },
  {
    title: 'Recording and Editing',
    description: 'Clean, professional audio with intros/outros.'
  },
  {
    title: 'Publishing',
    description: 'Upload and distribute to Apple, Spotify, and more.'
  },
  {
    title: 'Tells Your Story',
    description: 'Share your brand’s voice through compelling episodes.'
  },
  {
    title: 'Engages Your Audience',
    description: 'Create content that retains and grows listeners.'
  },
  {
    title: 'Drives Results',
    description: 'Boost traffic, leads, and brand awareness.'
  }
];
promotionSteps = [
  {
    title: 'Organic Promotion',
    description: 'Promote via social media, email, and your site.'
  },
  {
    title: 'Paid Promotion',
    description: 'Reach new audiences through ads.'
  },
  {
    title: 'Collaborations and Networking',
    description: 'Partner with influencers and podcasters.'
  },
  {
    title: 'Listener Engagement',
    description: 'Encourage reviews and deliver exclusive content.'
  },
  {
    title: 'Established Thought Leadership',
    description: 'Become a trusted voice in your niche.'
  },
  {
    title: 'Increased Audience Engagement',
    description: 'Build stronger connections with listeners.'
  },
  {
    title: 'Broader Reach',
    description: 'Tap into a global podcast audience cost-effectively.'
  }
];
private intervalId: any;
contacttitle:string = 'Contact us Today';
contactdescription:string = `By partnering with Pencil Peel IMT, you can trust that you're working with a team of experts who are dedicated to delivering innovative podcast creation and promotion solutions that drive business growth. Contact us today to learn more about how we can help you achieve your business goals.`;

constructor() {
  this.autoStep();
}
autoStep() {
  setInterval(() => {
    this.activeIndex = (this.activeIndex + 1) % 2;
  }, 5000); // Switch every 5 seconds
  this.intervalId = setInterval(() => {
      this.activeStep = this.activeStep >= this.keycomponents.length ? 1 : this.activeStep + 1;
    }, 3000); 
}


}
