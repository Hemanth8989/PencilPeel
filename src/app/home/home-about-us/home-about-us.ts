import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home-about-us',
  imports: [CommonModule],
  templateUrl: './home-about-us.html',
  styleUrl: './home-about-us.scss'
})
export class HomeAboutUs {

  constructor() { 
    AOS.init();
  }

  sectionData = {
    title: 'Who',
    highlight: 'We Are',
    description: [
      `We are a team of young, creative minds with great knowledge and real-time experience. 
     We have come together, working hard to make our clients successful in all aspects. 
     We are thorough professionals with <strong class="text-orange-600">commitment and dedication</strong>, 
     reaching out to support and fulfil the dreams of our clients.`,

      `<strong class="text-orange-600">Pencil Peel IMT</strong> is 
     <span class="text-orange-500 font-semibold">South India’s Best Advertising Company 🏆</span>. 
     We’re a team of innovators, designers, and tech experts who blend creativity with cutting-edge 
     technology to transform businesses. With <strong class="text-orange-600">10+ years of expertise</strong>, 
     we don’t just deliver services — we craft growth.`
    ],
    valuesTitle: 'Our Core Values'
  };

  whatWeDoData = {
    title: 'What',
    highlight: 'We Do',
    subtitle: 'Pencil Peel IMT: Your all-in-one partner for digital success. We don’t just advertise—we create movements that grow your brand, engage audiences, and drive results',
    description: [
      `With <strong class='text-orange-600'>Great Knowledge</strong>, 
     <span class='text-orange-500 font-semibold'>Unique Creative Thinking Capability</span>, 
     Team Work, and Dedication towards Client Success, we provide comprehensive services to scale up 
     your business to great heights.`,

      `Our <strong class='text-orange-600'>10+ years of experience</strong> in serving client requirements 
     and driving business growth have equipped us with the expertise to deliver exceptional results.`,

      `<span class='italic text-gray-700'>"Your all-in-one partner for digital success 🚀. 
     We don’t just advertise—we create movements that grow your brand, engage audiences, 
     and drive results."</span>`
    ]
  };

  coreValues = [
    {
      title: 'Innovation',
      description: 'We constantly push creative and technological boundaries.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Integrity',
      description: 'Trust and transparency guide everything we do.',
      icon: 'fas fa-handshake'
    },
    {
      title: 'Collaboration',
      description: 'Your success is our shared mission and victory.',
      icon: 'fas fa-users'
    },
    {
      title: 'Excellence',
      description: 'Perfection isn’t optional — it’s our standard.',
      icon: 'fas fa-star'
    }
  ];
}
