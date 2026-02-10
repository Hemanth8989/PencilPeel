import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ai-powered-adfilms',
  imports: [CommonModule, Nocarouselquotes, ButtonModule],
  templateUrl: './ai-powered-adfilms.html',
  styleUrl: './ai-powered-adfilms.scss'
})
export class AiPoweredAdfilms {

  serviceSlides =
    {
      id: 'slide1',
      image: '/ai/aisocialad.webp',
      title: `
      <span class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-tight">
       AI‑Powered AD Film
      </span>
      Making &  
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
       AI‑Driven AD Film Video Production
      </span>
      -
      <span class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold tracking-tight">
        Pencil Peel IMT
        </span>
    `,
      description: `
          At <span class="text-orange-500">Pencil Peel IMT</span>, we combine the art of storytelling with cutting‑edge artificial intelligence to create ad films that capture attention, spark emotion, and convert viewers into customers. Our AI‑enhanced workflow lets us deliver high‑quality video content faster, smarter, and more cost‑effectively than traditional production alone.
    `
    };

  quotes = [
    { text: "AI‑enabled ad film making uses machine‑learning tools to automate and augment every stage of the production process." },
    { text: "Speed: AI can generate storyboard drafts, select the best takes, and assemble rough cuts in minutes, cutting weeks off the timeline." },
    { text: "Our AI‑assisted brainstorming engine suggests creative angles based on your brand, target market, and campaign goals." },
    { text: "AI analytics track view‑through rates, click‑throughs, and engagement metrics, letting us fine‑tune the final cut for maximum conversion." },
    { text: "We blend award‑winning creatives with AI specialists to deliver ad films that capture attention, spark emotion, and drive results." }
  ];

   process = [
    {
      id: 1,
      title: 'Concept & Script Generation',
      description:
        'Our AI-assisted brainstorming engine suggests creative angles based on your brand, target market, and campaign goals. Human writers then refine the ideas into a concise, compelling script.',
    },
    {
      id: 2,
      title: 'Storyboard & Visual Planning',
      description:
        'AI converts the script into a dynamic storyboard, automatically selecting the optimal shot composition, camera angles, and transitions. This visual roadmap speeds up the approval cycle.',
    },
    {
      id: 3,
      title: 'Production Assistance',
      description:
        'On-set AI tools help with lighting optimisation, focus tracking, and real-time colour grading, ensuring every frame meets the storyboard’s vision.',
    },
    {
      id: 4,
      title: 'Automated Editing & Post-Production',
      description:
        'Cutting-edge AI editors splice together the best takes, sync audio, add subtitles, and apply visual effects—all with a single click. We then polish the edit manually to retain that human touch.',
    },
    {
      id: 5,
      title: 'Personalised Rendering',
      description:
        'The system generates multiple versions tailored for different platforms (TV, 30-second YouTube pre-roll, Instagram Stories, etc.) while preserving the core message.',
    },
    {
      id: 6,
      title: 'Performance Optimisation & Reporting',
      description:
        'After launch, AI analytics track view-through rates, click-throughs, and engagement metrics. We deliver a clear report and use the insights to iterate on future campaigns.',
    },
  ];

  filmTypes = [
    {
      title: 'Product Launch Films',
      description:
        'AI-generated scripts highlight key features and benefits, with dynamic visual sequences that adapt to each platform.',
      icon: 'pi-bolt',
    },
    {
      title: 'Brand Story Films',
      description:
        'Machine-learning analyses brand tone to craft emotionally resonant narratives that build loyalty.',
      icon: 'pi-heart-fill',
    },
    {
      title: 'Testimonial & Case-Study Films',
      description:
        'AI selects the most impactful customer quotes and syncs them with matching footage for maximum credibility.',
      icon: 'pi-comments',
    },
    {
      title: 'Explainer & Demo Films',
      description:
        'Automated animation and motion-graphics explain complex concepts in seconds, keeping viewer attention high.',
      icon: 'pi-video',
    },
    {
      title: 'Event Recap Films',
      description:
        'AI aggregates hours of footage into a concise, energetic recap that highlights brand presence.',
      icon: 'pi-calendar',
    },
    {
      title: 'Animated Motion-Graphics',
      description:
        'AI-generated graphics and kinetic typography turn data or concepts into eye-catching animations that work especially well on social feeds.',
      icon: 'pi-images',
    },
    {
      title: 'Interactive Story Ads',
      description:
        'Using AI-driven branching logic, viewers can choose their own path through the narrative, increasing engagement and time-on-screen.',
      icon: 'pi-play-circle',
    },
    {
      title: '360° Immersive Films',
      description:
        'AI stitches together multiple camera angles into a seamless 360° experience, letting audiences explore the scene with a swipe or headset.',
      icon: 'pi-compass',
    },
    {
      title: 'Vertical Reels & Shorts',
      description:
        'Optimized for TikTok, Instagram Reels, and YouTube Shorts, AI automatically formats the footage, adds captions, and suggests the best cuts for vertical viewing.',
      icon: 'pi-mobile',
    },
    {
      title: 'AR/VR Mini-Experiences',
      description:
        'AI models generate virtual product placements or interactive overlays that viewers can activate with a phone camera, blending the digital and physical worlds.',
      icon: 'pi-video',
    },
    {
      title: 'Micro-Influencer Spotlights',
      description:
        'AI matches your brand with the right micro-influencers, scripts their authentic voice-overs, and edits the clips into concise, shareable spots.',
      icon: 'pi-megaphone',
    },
    {
      title: 'User-Generated Content Compilations',
      description:
        'Machine-learning tools curate and polish customer-submitted videos into a cohesive ad that showcases real-world usage.',
      icon: 'pi-users',
    },
    {
      title: 'Data-Driven Narrative Films',
      description:
        'AI analyses market trends and audience insights to craft a story that speaks directly to current consumer pain points, embedding statistics seamlessly.',
      icon: 'pi-chart-line',
    },
    {
      title: 'Behind-the-Scenes (BTS) Culture Films',
      description:
        'AI selects the most compelling moments from production shoots, adding a human touch that builds trust and brand personality.',
      icon: 'pi-camera',
    },
    {
      title: 'Seasonal/Holiday Campaign Films',
      description:
        'AI tweaks colour palettes, music, and messaging to align with seasonal themes, ensuring each campaign feels timely and relevant.',
      icon: 'pi-sun',
    },
  ];

   reasons = [
    {
      title: 'Creative Excellence Meets Technical Innovation',
      description:
        'Our team blends award-winning creatives with AI specialists.',
      icon: 'pi-star-fill',
    },
    {
      title: 'Full-Service, End-to-End Production',
      description:
        'From concept to distribution, we handle everything, so you can focus on your business.',
      icon: 'pi-cog',
    },
    {
      title: 'Data-Backed Decisions',
      description:
        'AI analytics guide every creative choice, ensuring your ad delivers measurable results.',
      icon: 'pi-chart-line',
    },
    {
      title: 'Scalable Solutions',
      description:
        'Whether you need a single 30-second spot or a suite of platform-specific videos, our AI workflow scales effortlessly.',
      icon: 'pi-sliders-h',
    },
    {
      title: 'Proven Track Record',
      description:
        'We have helped brands across industries increase brand awareness, engagement, and sales through intelligent video storytelling.',
      icon: 'pi-verified',
    },
  ];
}
