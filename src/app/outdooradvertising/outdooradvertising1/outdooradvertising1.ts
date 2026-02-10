import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { OutdoorServices } from "../outdoor-services/outdoor-services";
interface Testimonial {
  text: string;
}

@Component({
  selector: 'app-outdooradvertising1',
  imports: [ButtonModule, CommonModule, AccordionModule, CarouselModule, CardModule, OutdoorServices],
  templateUrl: './outdooradvertising1.html',
  styleUrl: './outdooradvertising1.scss'
})
export class Outdooradvertising1 {
  testimonials: Testimonial[] = [
    {
      text: "Outdoor advertising is a powerful way to reach a large and diverse audience, and Pencil Peel IMT's expertise in this field is unmatched."
    },
    {
      text: "With Pencil Peel IMT's outdoor advertising solutions, businesses can increase brand awareness, drive website traffic, and generate sales in a cost-effective and measurable way."
    },
    {
      text: "Pencil Peel IMT's outdoor advertising campaigns are designed to capture attention, build brand awareness, and drive results - making them a valuable addition to any marketing mix."
    },
    {
      text: "The future of outdoor advertising is bright, and Pencil Peel IMT is leading the way with innovative solutions that leverage AI, digital technology, and sustainability to deliver impactful campaigns."
    },
    {
      text: "Whether you're looking to target a specific demographic or reach a wide audience, Pencil Peel IMT's outdoor advertising expertise can help you achieve your marketing goals and drive business results."
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeAnimations();
  }

  private initializeAnimations(): void {
    // Intersection Observer for scroll animations
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
            }
          });
        },
        { threshold: 0.1 }
      );

      // Observe all sections
      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });
    }
  }

  onStartCampaign(): void {
    console.log('Start campaign clicked');
    // Add your navigation or modal logic here
  }

  onScheduleConsultation(): void {
    console.log('Schedule consultation clicked');
    // Add your scheduling logic here
  }

  onWatchDemo(): void {
    console.log('Watch demo clicked');
    // Add your demo modal or navigation logic here
  }

  onLearnMore(benefit: string): void {
    console.log(`Learn more clicked for: ${benefit}`);
    // Add your detail view logic here
  }
}
