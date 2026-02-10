import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ctacard',
  imports: [CommonModule],
  templateUrl: './ctacard.html',
  styleUrl: './ctacard.scss'
})
export class Ctacard {
  ctaContent = {
    urgencyTitle: "Don't Wait Any Longer!",
    mainTitle: "Ready to Transform Your Digital Presence?",
    description: "If you don't have a website yet, now is the time to get one. At Pencil Peel IMT, we will work closely with you to understand your business needs and goals, and develop a website that meets your expectations.",
    primaryButtonText: "Get Started Today",
    secondaryButtonText: "Learn More",
    contactText: "Contact us today to learn more about our website design and development services.",
    features: [
      "Custom website design tailored to your business",
      "Responsive design that works on all devices", 
      "SEO optimization for better search rankings",
      "Ongoing support and maintenance"
    ]
  };

  onGetStarted() {
    // Handle primary CTA action
    console.log('Get Started clicked');
    // Add your routing or action logic here
  }

  onLearnMore() {
    // Handle secondary CTA action  
    console.log('Learn More clicked');
    // Add your routing or action logic here
  }
}
