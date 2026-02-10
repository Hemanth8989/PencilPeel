import { Component } from '@angular/core';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pro',
  imports: [CommonModule, Nocarouselquotes, CarouselModule, CardModule, AvatarModule, ButtonModule],
  templateUrl: './pro.html',
  styleUrl: './pro.scss'
})
export class Pro {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/prHome.png',
      title: `
      <span class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-tight">
        Expert Public Relations
      </span>
      Services with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: `
          At <span class="text-orange-500">Pencil Peel IMT</span>, we understand the importance of managing public perception and maintaining a positive brand image. Our team of experts specializes in public relations (PR) services, helping businesses like yours navigate the complexities of media relations, crisis communications, and reputation management.
    `
    };

  quotes = [
    { text: "Building Reputations, One Story at a Time." },
    { text: "Expert PR Solutions for a Positive Brand Image." },
    { text: "Transforming Perceptions, Elevating Brands." },
    { text: "Where Communication Meets Opportunity." },
    { text: "Crafting Narratives, Shaping Reputations." }
  ];

  heroTitle = 'Public Relations Services';
  heroSubtitle = 'Build trust. Protect reputation. Amplify your story.';

  intro = `Public relations is the practice of managing the spread of information between an individual or an organization and the public. 
  Our goal is to maintain a positive brand image, share significant company news or events, and mitigate the negative effects of adverse occurrences.`;

  services: any[] = [
    {
      title: 'Reputation Management',
      description: 'We help you maintain a positive brand image and respond to media inquiries.',
      icon: 'pi pi-thumbs-up',
      color: 'from-blue-500 to-teal-400'
    },
    {
      title: 'Crisis Communications',
      description: 'Our team is equipped to handle crisis situations and minimize damage to your reputation.',
      icon: 'fas fa-bolt',
      color: 'from-red-500 to-orange-400'
    },
    {
      title: 'Media Relations',
      description: 'We build relationships with media professionals and secure coverage for your brand or product.',
      icon: 'fas fa-newspaper',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Brand Awareness',
      description: 'Our PR services help increase visibility and awareness of your brand.',
      icon: 'fas fa-bullhorn',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Media Outreach',
      description: 'We proactively reach out to media outlets to share your story and secure coverage.',
      icon: 'pi pi-envelope',
      color: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Crisis Preparedness',
      description: 'We help you prepare for potential crises and develop strategies to mitigate their impact.',
      icon: 'fas fa-shield-alt',
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Stakeholder Engagement',
      description: 'We help you engage with key stakeholders, including customers, employees, and investors.',
      icon: 'pi pi-users',
      color: 'from-pink-500 to-rose-400'
    },
    {
      title: 'Message Development',
      description: 'We craft compelling messages that resonate with your target audience.',
      icon: 'fas fa-pencil-alt',
      color: 'from-cyan-500 to-blue-400'
    }
  ];

  prTypes: any[] = [
    {
      title: 'Media Relations',
      description:
        'Build a solid rapport with public media organizations, provide company news, and remain open to feedback.',
      icon: 'fas fa-newspaper',
      color: 'from-blue-500 to-teal-400'
    },
    {
      title: 'Product Relations',
      description:
        'Manage marketing strategies and oversee projects like new product launches or major changes.',
      icon: 'fas fa-box-open',
      color: 'from-orange-500 to-amber-400'
    },
    {
      title: 'Investor Relations',
      description:
        'Monitor communication between your business and investors, ensuring transparency and trust.',
      icon: 'fas fa-handshake',
      color: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Internal Relations',
      description:
        'Counsel staff, improve working conditions, and resolve conflicts privately before they escalate.',
      icon: 'pi pi-users',
      color: 'from-pink-500 to-rose-400'
    },
    {
      title: 'Government Relations',
      description:
        'Establish rapport with authorities, provide input to legislators, and ensure fair treatment for your business.',
      icon: 'fas fa-landmark',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Community Relations',
      description:
        'Build a strong reputation within your community by engaging with local members and causes.',
      icon: 'fas fa-people-carry',
      color: 'from-cyan-500 to-sky-400'
    },
    {
      title: 'Customer Relations',
      description:
        'Strengthen ties with clients, gather market data, and resolve pressing issues effectively.',
      icon: 'pi pi-comments',
      color: 'from-red-500 to-orange-500'
    }
  ];

  // What We Will Do
  prActions: any[] = [
    {
      text: 'Answer questions from members of the public, media, and affiliated organizations.',
      icon: 'pi pi-question-circle'
    },
    {
      text: 'Arrange and participate in promotional activities such as exhibitions, press conferences, and tours.',
      icon: 'fas fa-bullhorn'
    },
    {
      text: 'Represent your brand at presentations, news conferences, and interviews.',
      icon: 'pi pi-microphone'
    }
  ];

  benefits: any[] = [
    {
      title: 'Reputation Management',
      description:
        'We help you maintain a positive brand image and respond to media inquiries effectively.',
      icon: 'pi pi-shield',
      color: 'from-blue-500 to-teal-400'
    },
    {
      title: 'Crisis Communications',
      description:
        'Our team is equipped to handle crisis situations and minimize damage to your reputation.',
      icon: 'fas fa-exclamation-triangle',
      color: 'from-red-500 to-orange-400'
    },
    {
      title: 'Media Relations',
      description:
        'We build relationships with media professionals and secure coverage for your brand or product.',
      icon: 'pi pi-megaphone',
      color: 'from-purple-500 to-indigo-400'
    },
    {
      title: 'Brand Awareness',
      description:
        'Our PR services help increase visibility and awareness of your brand.',
      icon: 'fas fa-bullhorn',
      color: 'from-green-500 to-emerald-400'
    }
  ];
}
