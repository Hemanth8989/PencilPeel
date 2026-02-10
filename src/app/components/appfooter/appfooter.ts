import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ContactForm } from '../contact-form/contact-form';

@Component({
  selector: 'app-appfooter',
  imports: [CommonModule, ButtonModule, RouterModule, ContactForm],
  templateUrl: './appfooter.html',
  styleUrl: './appfooter.scss'
})
export class Appfooter {
  //   email: string = '';
  // isSubscribed: boolean = false;
  // services = [
  //   { name: 'Digital Marketing', link: '#seo-optimization' },
  //   { name: 'Brand Advertising', link: '#social-media-marketing' },
  //   { name: 'Software Development', link: '#ppc-advertising' },
  //   { name: 'IT Consulting', link: '#content-marketing' },
  //   { name: 'Web Development', link: '#email-marketing' },
  //   { name: 'Movie Promotions', link: '#web-development' },
  //   { name: 'Event Management', link: '#brand-strategy' },
  //   { name: 'About Us', link: '#analytics-reporting' }
  // ];
  // socialMedia = [
  //   { icon: 'pi pi-facebook', href: '#', label: 'Facebook' },
  //   { icon: 'pi pi-twitter', href: '#', label: 'Twitter' },
  //   { icon: 'pi pi-instagram', href: '#', label: 'Instagram' },
  //   { icon: 'pi pi-linkedin', href: '#', label: 'LinkedIn' },
  //   { icon: 'pi pi-youtube', href: '#', label: 'YouTube' }
  // ];
  // handleSubscribe(event: Event): void {
  //   event.preventDefault();
  //   if (this.email) {
  //     this.isSubscribed = true;
  //     this.email = '';
  //     setTimeout(() => this.isSubscribed = false, 3000);
  //   }
  // }

  currentYear = new Date().getFullYear();

  quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Digital Marketing', path: '/digitalmarketing' },
    { name: 'IT Services', path: '/software' },
    { name: 'AI Technology', path: '/aitechnology' },
    { name: 'Outdoor AD’s', path: '/outdooradvertising' },
    { name: 'Personal Branding', path: '/services/personal-branding' },
    { name: 'Web Design & Development', path: '/websitedevelopment' },
    { name: 'Design Thinking', path: '/services/design-thinking' },
  ];

 services = [
  { name: 'Digital Marketing Services', path: '/digitalmarketing' },
  { name: 'Software Development', path: '/softwaredevelopment' },
  { name: 'AI Technology', path: '/aitechnology' },
  { name: 'Personal Branding', path: '/services/personal-branding' },
  { name: 'IT Consulting', path: '/itconsulting' },
  { name: 'AD Films', path: '/services/ad-films' },
  { name: 'Outdoor Advertising', path: '/outdooradvertising' },
  { name: 'Telecaller Marketing', path: '/services/telecallers' },
  { name: 'Influencer Marketing', path: '/digitalmarketing/influencer' },
  { name: 'Video Production', path: '/services/video-production' },
  { name: 'Film Marketing', path: '/filmmarketing' },
  { name: 'Social Media Marketing', path: '/socialmediamarketing' },
  { name: 'Brand Advertising', path: '/services/brand-advertising' },
];

  industries = [
    'Government',
    'Education',
    'Technology & Electronics',
    'Media & Entertainment',
    'Health Care & Beauty',
    'Advertising & Marketing',
    'E–Commerce',
    'Retail',
    'Real Estate',
    'Travel & Hospitality',
    'Fashion & Apparel',
  ];

  socials = [
    { icon: 'pi pi-facebook', link: 'https://www.facebook.com/pencilpeelimt' },
    { icon: 'pi pi-instagram', link: 'https://www.instagram.com/pencilpeel_imt' },
    { icon: 'pi pi-youtube', link: 'https://www.youtube.com/channel/UCiQmuwo33gilwplYf2K4T3g' },
    { icon: 'pi pi-linkedin', link: 'https://www.linkedin.com/company/pencil-peel-imt/' },
    { icon: 'pi pi-twitter', link: 'https://x.com/PencilPeel' },
  ];

  contactVisible = false;

  showContactForm() {
    this.contactVisible = true;
  }
}
