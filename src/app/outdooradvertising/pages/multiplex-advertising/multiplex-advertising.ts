import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { Quotes } from "../../../components/quotes/quotes";

@Component({
  selector: 'app-multiplex-advertising',
  imports: [CommonModule, OutdoorHeroSection, CardModule, Quotes],
  templateUrl: './multiplex-advertising.html',
  styleUrl: './multiplex-advertising.scss'
})
export class MultiplexAdvertising implements OnInit, OnDestroy {

   multiplexHeroConfig: HeroConfig = {
    badgeText: '#1 Multiplex Restroom Area Advertising Solutions',
    badgeIcon: 'pi pi-star-fill',
    title: {
      prefix: 'Unlock Your',
      highlighted: [
        'Multiplex Restroom Area',
        'Advertising Solutions'
      ],
      suffix: 'with Pencil Peel IMT'
    },
    description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective Multiplex Restroom Area Advertising Solutions that drive business growth and product awareness.',
    backgroundImage: '/outdoor/mutlplex/multiplex-restroom1.png',
    typingTexts: [
      'Targeted Audience Engagement'
    ],
    primaryButton: {
      label: 'Start Your Campaign',
      icon: 'pi pi-arrow-right'
    },
    floatingCard: {
      text: 'Campaign Active',
      subtext: 'Live Now'
    }
  };

  testimonials = [
    { text: "Reach Your Audience Where They Matter with Pencil Peel IMT's Multiplex Restroom Advertising." },
    { text: "Make a Lasting Impression with Pencil Peel IMT's Innovative Restroom Ads" },
    { text: "Elevate Your Brand Visibility with Pencil Peel IMT's Multiplex Restroom Solutions." },
    { text: "Capture Attention in Unexpected Places with Pencil Peel IMT's Restroom Advertising Expertise." }
  ];

  benefits = [
    {
      title: 'Reach a Captive Audience',
      highlight: 'captive audience',
      description: 'that is already engaged and attentive. We will help you create ads that resonate with your target audience and drive results.',
      icon: 'pi pi-eye'
    },
    {
      title: 'Increase Brand Awareness',
      highlight: 'Multiplex restroom advertising',
      description: 'can help increase brand awareness and reach a large audience. Our team will work with you to develop a customized advertising strategy that meets your goals and objectives.',
      icon: 'pi pi-megaphone'
    },
    {
      title: 'Drive Engagement',
      highlight: 'interactive and creative ads',
      description: 'in restrooms can drive engagement and encourage patrons to share their experiences with others. We will help you create ads that are both informative and entertaining.',
      icon: 'pi pi-comments'
    },
    {
      title: 'Reach a Targeted Audience',
      highlight: 'target ads',
      description: 'to a specific audience, ensuring your message reaches the people most likely to be interested in your products or services.',
      icon: 'pi pi-users'
    },
    {
      title: 'Promote Products',
      highlight: 'promote your products',
      description: 'to a captive audience in a unique and engaging way. Our multiplex restroom advertising strategy ensures your products resonate with your target audience.',
      icon: 'pi pi-shopping-cart'
    },
    {
      title: 'Build Brand Awareness',
      highlight: 'brand awareness',
      description: 'and reach a large audience. We help you create ads that showcase your brand’s message and values.',
      icon: 'pi pi-globe'
    },
    {
      title: 'Company Promotion',
      highlight: 'promote your company',
      description: 'and its services to a targeted audience. Our strategy ensures your company message resonates effectively.',
      icon: 'pi pi-building'
    },
    {
      title: 'Service Promotion',
      highlight: 'promote your services',
      description: 'to a captive audience. We help create ads that showcase the benefits of your services and drive engagement.',
      icon: 'pi pi-briefcase'
    }
  ];

  mainBenefits = [
    { title: 'Develop a Customized Advertising Strategy', highlight: 'customized advertising strategy', description: 'We will take the time to understand your target audience, brand message, and marketing goals, and develop a strategy that resonates with your audience and drives results.', icon: 'pi pi-cog' },
    { title: 'Create Effective Ads', highlight: 'informative and entertaining', description: 'Our team of creative professionals will develop ads that are visually appealing, engaging, and effective in driving results.', icon: 'pi pi-pencil' },
    { title: 'Place Ads in High-Traffic Locations', highlight: 'high-traffic locations', description: 'Ensuring your message reaches a large and engaged audience. We identify the best locations for maximum impact.', icon: 'pi pi-map-marker' }
  ];

  additionalStrategies = [
    { title: 'Conduct Market Research', description: 'Understand your target audience and identify opportunities to reach them.', icon: 'pi pi-search' },
    { title: 'Develop a Media Plan', description: 'Outline the best ways to reach your target audience.', icon: 'pi pi-calendar' },
    { title: 'Create Engaging Content', description: 'Develop content that resonates with your target audience and drives results.', icon: 'pi pi-video' },
    { title: 'Monitor and Optimize', description: 'Monitor the performance of your ads and optimize them to meet your goals.', icon: 'pi pi-chart-line' }
  ];

   partnerAdvantages = [
    { title: 'Increase Brand Awareness', description: 'Increase brand awareness and reach a large audience.', icon: 'pi pi-megaphone' },
    { title: 'Drive Engagement', description: 'Encourage patrons to share their experiences with others.', icon: 'pi pi-comments' },
    { title: 'Reach a Captive Audience', description: 'Reach a captive audience in a unique and engaging way.', icon: 'pi pi-eye' },
    { title: 'Customized Strategy', description: 'Develop a customized advertising strategy that meets your goals and objectives.', icon: 'pi pi-cog' },
    { title: 'Increase Foot Traffic & Sales', description: 'Increase foot traffic and drive sales through effective advertising.', icon: 'pi pi-shopping-cart' },
    { title: 'Tailored Advertising Support', description: "We will work closely with you to develop a customized multiplex restroom advertising strategy that meets your unique needs and goals.", icon: 'pi pi-handshake' }
  ];

  industries = [
  {
    title: 'Food and Beverage',
    icon: 'pi pi-apple',
    image: 'industries/food.webp',
    description: 'We help you promote your food and beverage products to a hungry and thirsty audience. Our multiplex restroom area advertising strategy ensures that your message reaches a large and engaged audience, driving brand recall and sales.'
  },
  {
    title: 'Entertainment',
    icon: 'pi pi-video',
    image: 'industries/media.webp',
    description: 'Our team works with you to promote movies, TV shows, music, and other entertainment forms to a captive audience who are already in the mood for leisure and fun.'
  },
  {
    title: 'Retail',
    icon: 'pi pi-shopping-bag',
    image: 'industries/retail.webp',
    description: 'Boost your retail visibility and drive foot traffic to your store. We ensure your retail message captures attention and converts viewers into customers.'
  },
  {
    title: 'Automotive',
    icon: 'pi pi-car',
    image: 'industries/automotive.webp',
    description: 'Promote cars, car accessories, and automotive services to a premium audience. Multiplex advertising builds brand perception and influences purchasing decisions.'
  },
  {
    title: 'Fashion and Beauty',
    icon: 'pi pi-star',
    image: 'industries/fashion.webp',
    description: 'Showcase your fashion, cosmetics, and beauty products in style. Our restroom ad placements ensure visibility where attention is high and impressions are lasting.'
  },
  {
    title: 'Health and Wellness',
    icon: 'pi pi-heart',
    image: 'industries/healthcare.webp',
    description: 'Promote health products, fitness centers, wellness brands, and healthcare services to audiences who value well-being and lifestyle improvement.'
  },
  {
    title: 'Travel and Hospitality',
    icon: 'pi pi-globe',
    image: 'industries/tourism.webp',
    description: 'Highlight your travel destinations, hotels, and hospitality services in an immersive and aspirational setting, inspiring the next getaway idea.'
  },
  {
    title: 'Technology and Electronics',
    icon: 'pi pi-mobile',
    image: 'industries/gadgets.webp',
    description: 'Promote gadgets, electronics, and technology solutions to an audience that loves innovation and digital experiences.'
  },
  {
    title: 'Movie Theatres',
    icon: 'pi pi-ticket',
    image: 'film/fevent1.webp',
    description: 'Drive awareness for new releases, special screenings, or promotions right inside the multiplex, where your target audience is already engaged.'
  },
  {
    title: 'Gaming',
    icon: 'pi pi-desktop',
    image: 'industries/gaming.png',
    description: 'Engage gamers and tech enthusiasts with immersive visuals that promote your latest games, consoles, and e-sports events.'
  },
  {
    title: 'Events and Concerts',
    icon: 'pi pi-calendar',
    image: 'industries/events.png',
    description: 'Promote concerts, exhibitions, or live shows to an energetic and entertainment-driven audience inside multiplexes.'
  },
  {
    title: 'Education',
    icon: 'pi pi-book',
    image: 'industries/education.webp',
    description: 'Reach students, parents, and professionals with educational programs, training institutions, or online learning platforms.'
  }
];

whyChoose = [
  {
    title: 'Expertise and Experience',
    icon: 'pi pi-briefcase',
    description: 'Our team of experts has years of experience in creating effective advertising campaigns that drive results. We will work closely with you to develop a customized strategy that meets your unique needs and goals.'
  },
  {
    title: 'Customized Solutions',
    icon: 'pi pi-sliders-h',
    description: 'We understand that every business is different, and we will work with you to develop a customized advertising strategy that meets your specific needs and goals.'
  },
  {
    title: 'Creative and Engaging Ads',
    icon: 'pi pi-palette',
    description: 'Our team of creative professionals will work with you to develop ads that are both informative and entertaining, and that resonate with your target audience.'
  },
  {
    title: 'Targeted Advertising',
    icon: 'pi pi-bullseye',
    description: 'We will help you target your ads to a specific audience, ensuring that your message reaches the people who are most likely to be interested in your products or services.'
  },
  {
    title: 'Measurable Results',
    icon: 'pi pi-chart-line',
    description: 'We will work with you to track the performance of your ads and provide measurable results, so you can see the impact of your advertising campaign.'
  },
  {
    title: 'Personalized Service',
    icon: 'pi pi-user-edit',
    description: 'Our team will work closely with you to understand your needs and goals, and provide personalized service and support throughout your advertising campaign.'
  }
];

carouselImages = [
  '/outdoor/mutlplex/multiplex.png',
  '/outdoor/mutlplex/multiplex-restroom1.png',
  '/outdoor/mutlplex/multiplex-restroom.png',
  '/outdoor/mutlplex/multiplex4.png',
  '/outdoor/mutlplex/multiplex.jpeg',
];

currentSlide = 0;
autoSlideInterval: any;

  ngOnInit() {
    // Auto-slide every 10 seconds
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }


}
