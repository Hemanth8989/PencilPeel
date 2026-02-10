import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, DialogModule, InputTextModule, FormsModule, TextareaModule,
    SelectModule, ButtonModule, CheckboxModule, RippleModule, DividerModule, CarouselModule, YouTubePlayerModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  isPageMode = false;

  form: any = {};
  youtubeVideos = [
    'https://www.youtube.com/embed/x00gdRmhYPg',
    'https://www.youtube.com/embed/ni_Jfou4mjU'
  ];



  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // Detect if component is being used as routed page
    this.isPageMode = this.route.routeConfig?.path === 'contact';
  }

  // Safe URL pipe function for iframe embedding
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  services: SelectItem[] = [
    { label: 'Digital Marketing Services', value: 'Digital Marketing Services' },
    { label: 'Software Development', value: 'Software Development' },
    { label: 'AI Technology Solutions', value: 'AI Technology Solutions' },
    { label: 'Personal Branding', value: 'Personal Branding' },
    { label: 'IT Consulting', value: 'IT Consulting' },
    { label: 'AD Films', value: 'AD Films' },
    { label: 'Outdoor Advertising', value: 'Outdoor Advertising' },
    { label: 'Telecaller Marketing', value: 'Telecaller Marketing' },
    { label: 'Influencer Marketing', value: 'Influencer Marketing' },
    { label: 'Video Production', value: 'Video Production' },
    { label: 'Film Marketing', value: 'Film Marketing' },
    { label: 'Social Media Marketing', value: 'Social Media Marketing' },
    { label: 'Brand Advertising', value: 'Brand Advertising' },
    { label: 'Lead Generation', value: 'Lead Generation' },
    { label: 'Brand Ambassador', value: 'Brand Ambassador' },
    { label: 'Others', value: 'Others' },
  ];

  sources: SelectItem[] = [
    { label: 'Google Search Engine', value: 'Google' },
    { label: 'Online Advertisement', value: 'Ads' },
    { label: 'Social Media AD’s', value: 'Social' },
    { label: 'Outdoor Advertising', value: 'Outdoor' },
    { label: 'Recommended by Friends or Family', value: 'Friends' },
    { label: 'Co–Workers or Customers', value: 'Coworkers' },
    { label: 'Meetups', value: 'Meetups' },
    { label: 'Others', value: 'Others' },
  ];

  submitForm() {
    console.log('Form Data:', this.form);
    alert('✅ Thank you! Our team will get back to you soon.');

    if (!this.isPageMode) {
      this.closeDialog();
    }
  }

  closeDialog() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
