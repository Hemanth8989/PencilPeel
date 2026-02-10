import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';
import { Dmservice } from '../../services/dmservice';
import { MenuItem } from 'primeng/api';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';

interface NavItem {
  key: string;
  text: string;
  href: string;
  hasDropdown?: boolean; // Add this property if not present
}
interface NavService{
  DigitalMarketing:any[],
  SoftwareDevelopment:any[],
  ITConsulting:any[],
  WebDevelopment:any[],
  AITechnology:any[],
  MoviePromotions:any[],
  EventManagement:any[]

}
@Component({
  selector: 'app-header',
  imports: [ButtonModule,RouterLink,CommonModule,PopoverModule,DrawerModule,MenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @HostListener('document:click', ['$event'])
  activeDropdown: string | null = null;
  dropdownData: NavService = {
    DigitalMarketing: [],
    SoftwareDevelopment: [],
    ITConsulting: [],
    WebDevelopment: [],
    AITechnology: [],
    MoviePromotions: [],
    EventManagement: []
  };
  dropdownData1:any = {
  brandAdvertising: [
    { icon: 'pi pi-video', title: "TV Commercials", description: "High-impact television advertisements that reach mass audiences" },
    { icon: 'pi pi-comment', title: "Brand Storytelling", description: "Compelling narratives that connect with your audience" },
    { icon: 'pi pi-camera', title: "Photography", description: "Professional brand photography for marketing campaigns" },
    { icon: 'pi pi-play', title: "Digital Ads", description: "Engaging digital advertisements for online platforms" },
    { icon: 'pi pi-pencil', title: "Creative Production", description: "End-to-end creative production and post-production" },
    { icon: 'pi pi-volume-up', title: "Audio Branding", description: "Distinctive audio identity and radio commercials" }
  ],
  softwareDevelopment: [
    { icon: 'pi pi-code', title: "Custom Software", description: "Tailored software solutions for your business requirements" },
    { icon: 'pi pi-mobile', title: "Mobile Apps", description: "Native and cross-platform mobile applications" },
    { icon: 'pi pi-database', title: "Database Design", description: "Scalable database architecture and optimization" },
    { icon: 'pi pi-cloud', title: "Cloud Applications", description: "Modern cloud-native application development" },
    { icon: 'pi pi-cog', title: "API Development", description: "Robust APIs and microservices architecture" },
    { icon: 'pi pi-check-square', title: "Quality Assurance", description: "Comprehensive testing and quality assurance" }
  ],
  itConsulting: [
    { icon: 'pi pi-server', title: "Infrastructure Consulting", description: "Optimize your IT infrastructure for maximum performance" },
    { icon: 'pi pi-cloud', title: "Cloud Solutions", description: "Migrate and manage your business in the cloud" },
    { icon: 'pi pi-shield', title: "Cybersecurity", description: "Protect your business with comprehensive security solutions" },
    { icon: 'pi pi-database', title: "Data Management", description: "Organize and leverage your data for business insights" },
    { icon: 'pi pi-users', title: "IT Support", description: "24/7 technical support for your IT infrastructure" },
    { icon: 'pi pi-sync', title: "System Integration", description: "Seamlessly connect your business systems and workflows" }
  ],
  webDevelopment: [
    { icon: 'pi pi-globe', title: "Custom Web Applications", description: "Tailored web solutions built for your specific business needs" },
    { icon: 'pi pi-mobile', title: "Responsive Design", description: "Mobile-first designs that work perfectly on all devices" },
    { icon: 'pi pi-shopping-cart', title: "E-Commerce Solutions", description: "Complete online stores with payment integration" },
    { icon: 'pi pi-code', title: "Frontend Development", description: "Modern React, Vue, and Angular applications" },
    { icon: 'pi pi-server', title: "Backend Development", description: "Robust APIs and server-side solutions" },
    { icon: 'pi pi-bolt', title: "Performance Optimization", description: "Lightning-fast websites optimized for speed" }
  ],
  aiTechnology: [
    { icon: 'pi pi-bolt', title: "Machine Learning", description: "Custom ML models and intelligent automation solutions" },
    { icon: 'pi pi-chart-bar', title: "Data Analytics", description: "AI-powered insights and predictive analytics" },
    { icon: 'pi pi-comments', title: "Natural Language Processing", description: "Text analysis, chatbots, and language understanding" },
    { icon: 'pi pi-eye', title: "Computer Vision", description: "Image recognition and visual analysis solutions" },
    { icon: 'pi pi-link', title: "AI Integration", description: "Integrate AI capabilities into existing systems" },
    { icon: 'pi pi-cloud', title: "AI Cloud Services", description: "Scalable AI solutions in the cloud" }
  ],
  moviepromotions: [
    { icon: 'pi pi-film', title: "Movie Trailers", description: "Compelling trailers that generate buzz and excitement" },
    { icon: 'pi pi-video', title: "Behind-the-Scenes", description: "Exclusive content showcasing the making of films" },
    { icon: 'pi pi-share-alt', title: "Social Media Campaigns", description: "Strategic social media promotion across platforms" },
    { icon: 'pi pi-calendar', title: "Premiere Events", description: "Memorable premiere and launch events" },
    { icon: 'pi pi-target', title: "Targeted Marketing", description: "Audience-specific promotional strategies" },
    { icon: 'pi pi-megaphone', title: "Media Partnerships", description: "Strategic partnerships with media outlets" }
  ],
  eventManagement: [
    { icon: 'pi pi-calendar', title: "Corporate Events", description: "Professional corporate gatherings and conferences" },
    { icon: 'pi pi-users', title: "Product Launches", description: "Memorable product launch events that create buzz" },
    { icon: 'pi pi-volume-up', title: "Conferences & Seminars", description: "Educational and networking events with expert speakers" },
    { icon: 'pi pi-star', title: "Award Ceremonies", description: "Elegant award ceremonies that celebrate achievements" },
    { icon: 'pi pi-globe', title: "Virtual Events", description: "Seamless virtual and hybrid event experiences" },
    { icon: 'pi pi-heart', title: "Special Occasions", description: "Weddings, parties, and personal milestone celebrations" }
  ]
  };

  navigationItems = [
    { key: "DigitalMarketing", href: "/digitalmarketing", text: "Digital Marketing" },
    { key: "brandAdvertising", href: "/brandpromotions", text: "Brand Advertising" },
    { key: "itServices", href: "/itservices", text: "IT Services" },
    { key: "itConsulting", href: "/itconsulting", text: "IT Consulting" },
    { key: "aiTechnology", href: "/ai-technology", text: "AI Technology" },
    { key: "moviepromotions", href: "/movie-promotions", text: "Movie Promotions" },
    { key: "eventManagement", href: "/eventmanagment", text: "Event Management" },
    { key: "about", href: "/about", text: "About" }
  ];
    visible: boolean = false;
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/home'
    },
    {
      label: 'Digital Marketing',
      icon: 'pi pi-shopping-bag',
      expanded: false, // Initialize as collapsed
      items: [
        {
          label: 'Search Engine Optimization',
          icon: 'pi pi-mobile',
          routerLink: '/products/electronics'
        },
        {
          label: 'Content Marketing',
          icon: 'pi pi-tags',
          routerLink: '/products/clothing'
        },
        {
          label: 'Accessories',
          icon: 'pi pi-star',
          routerLink: '/products/accessories'
        }
      ],
      command: (event) => {
        this.toggleMenuItem(event.item);
      }
    },
    {
      label: 'Services',
      icon: 'pi pi-cog',
      expanded: false, // Initialize as collapsed
      items: [
        {
          label: 'Consulting',
          icon: 'pi pi-briefcase',
          routerLink: '/services/consulting'
        },
        {
          label: 'Support',
          icon: 'pi pi-question-circle',
          routerLink: '/services/support'
        }
      ],
      command: (event) => {
        this.toggleMenuItem(event.item);
      }
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/contact'
    }
  ];

 
  constructor(private digiservice:Dmservice){}
  ngOnInit(): void {
    this.InitServices();
  }
  InitServices(){
    let list =  this.digiservice.getDigitalServices();
    this.dropdownData.DigitalMarketing = list.slice(0,9);
    console.log(this.dropdownData.DigitalMarketing)
  }

  // Optional: A clicck listener on the whole nav item to close dropdowns when clicking outside
  // or handle navigation.
  onNavItemClick(item: NavItem, event: Event): void {
  }
  
  toggleMenuItem(item: MenuItem) {
    if (item.items) {
      item.expanded = !item.expanded; // Toggle the expanded state
    }
  }

  // Close dropdown if clicked outside

  onClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.group button')) {
      this.activeDropdown = null;
    }
  }
  toggleDropdown(dropdown: string) {
    // If the dropdown is already open, close it; otherwise, open it.
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
  ngOnDestroy(): void {
    // Clean up if necessary
  }
  closeDropdown():void{

  }
  handleDropdownToggle(key: string, event: MouseEvent) {
    this.activeDropdown = key;
    event.stopPropagation();
  }
   toggleDrawer() {
    this.visible = !this.visible;
  }
}
