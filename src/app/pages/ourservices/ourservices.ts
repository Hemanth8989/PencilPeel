import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { Herosection } from '../../components/herosection/herosection';
import { Dmservice } from '../../services/dmservice';

@Component({
  selector: 'app-ourservices',
  imports: [CommonModule, CardModule, DialogModule, AccordionModule, ButtonModule,Herosection],
  templateUrl: './ourservices.html',
  styleUrl: './ourservices.scss'
})
export class Ourservices {

  services: any[] = [];

  serviceSlides = [
  {
    id: 'slide1',
    image: '/dm/slide1.webp',
    title: `
      Unlock the Potential of 
      <span class="bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent font-bold">
        Creative Services
      </span>
      with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
        Pencil Peel IMT
      </span>
    `,
    description: 'From branding to production, our end-to-end services empower businesses to create impact, drive growth, and connect meaningfully with audiences.'
  },
  {
    id: 'slide2',
    image: '/dm/slide2.webp',
    title: `
      Transform Your Vision into 
      <span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent font-bold">
        Powerful Experiences
      </span>
    `,
    description: 'Our team combines creativity, strategy, and technology to deliver solutions that elevate your presence, inspire trust, and achieve measurable results.'
  },
  {
    id: 'slide3',
    image: '/dm/slide3.webp',
    title: `
      Partner with Us for 
      <span class="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent font-bold">
        End-to-End Success
      </span>
    `,
    description: 'Whether it’s films, events, or digital campaigns, we provide integrated services that make your brand stand out in today’s competitive landscape.'
  }
];

  expandedPanels: string[] = [];

  constructor(private router: Router,private dmService:Dmservice) {
    this.services = this.dmService.getServices();
   }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

}
