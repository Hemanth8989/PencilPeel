import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { Industrycards } from "../../../components/industrycards/industrycards";
import { CardModule } from 'primeng/card';
import { GlassCta } from "../../../components/glass-cta/glass-cta";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-humanbillboardadvertising',
  imports: [OutdoorHeroSection, CommonModule, Industrycards, CardModule, GlassCta, Quotes],
  templateUrl: './humanbillboardadvertising.html',
  styleUrl: './humanbillboardadvertising.scss'
})
export class Humanbillboardadvertising {
  humanWalkingBillboardHeroConfig: HeroConfig = {
  badgeText: '#1 Human Billboard Specialists',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: '',
    highlighted: [
      'Human Walking Billboard',
      'Campaigns'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective human walking billboard campaigns that drive business growth and increase brand visibility.',
  backgroundImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Walking Brand Ambassadors'
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
  { text: "Walk Your Brand to Success with Pencil Peel IMT's Human Walking Billboard Campaigns" },
  { text: "Make a Statement with Pencil Peel IMT's Engaging Human Billboard Ads" },
  { text: "Take Your Brand to the Streets with Pencil Peel IMT's Dynamic Walking Billboards" },
  { text: "Step Up Your Marketing with Pencil Peel IMT's Creative Human Billboard Solutions" }
];

campaignServices = [
    {
      title: 'Identify Target Locations',
      description: 'We will choose locations with high pedestrian traffic or areas frequented by your target audience.',
      icon: 'pi pi-map-marker',
      iconBg: 'bg-orange-500',
      borderColor: 'border-orange-500'
    },
    {
      title: 'Engage Enthusiastic Brand Ambassadors',
      description: 'Our team will hire individuals who are approachable and engaging.',
      icon: 'pi pi-user',
      iconBg: 'bg-blue-500',
      borderColor: 'border-blue-500'
    },
    {
      title: 'Create Eye-Catching Designs',
      description: 'We will use vibrant colours, bold text, and creative visuals on the boards or costumes.',
      icon: 'pi pi-palette',
      iconBg: 'bg-purple-500',
      borderColor: 'border-purple-500'
    },
    {
      title: 'Incorporate Technology',
      description: 'Our team will use LED screens or digital boards for dynamic and interactive advertising.',
      icon: 'pi pi-desktop',
      iconBg: 'bg-green-500',
      borderColor: 'border-green-500'
    },
    {
      title: 'Distribute Promotional Materials',
      description: 'We will equip walking billboards with flyers, samples, or discount coupons.',
      icon: 'pi pi-gift',
      iconBg: 'bg-red-500',
      borderColor: 'border-red-500'
    },
    {
      title: 'Incorporate Social Media Elements',
      description: 'Our team will encourage brand ambassadors to promote the campaign on social media.',
      icon: 'pi pi-share-alt',
      iconBg: 'bg-pink-500',
      borderColor: 'border-pink-500'
    },
    {
      title: 'Costume-Based Campaigns',
      description: 'We will dress brand ambassadors in themed costumes to make the campaign memorable and fun.',
      icon: 'pi pi-user-plus',
      iconBg: 'bg-indigo-500',
      borderColor: 'border-indigo-500'
    },
    {
      title: 'Interactive Elements',
      description: 'Our team will use performers or entertainers to draw crowds and create a buzz.',
      icon: 'pi pi-play',
      iconBg: 'bg-yellow-500',
      borderColor: 'border-yellow-500'
    },
    {
      title: 'Geotargeted Campaigns',
      description: 'We will focus on areas near your store or pop-up location.',
      icon: 'pi pi-map',
      iconBg: 'bg-teal-500',
      borderColor: 'border-teal-500'
    },
    {
      title: 'Track Results',
      description: 'Our team will monitor foot traffic, website visits, or coupon redemptions to assess campaign success.',
      icon: 'pi pi-chart-bar',
      iconBg: 'bg-cyan-500',
      borderColor: 'border-cyan-500'
    }
  ];

  humanWalkingBillboardData = {
  title: 'Industries that Can Benefit from Human Walking Billboard Campaigns',
  description: 'We will help various industries reach their target audience through human walking billboard campaigns, including:',
  industries: [
    {
      title: 'Retail',
      description: 'Our team will help retail businesses promote their products and drive foot traffic to their stores.',
      image: '/industries/retail.webp'
    },
    {
      title: 'Food and Beverage',
      description: 'We will help food and beverage businesses reach customers and promote their products or services.',
      image: '/industries/food.webp'
    },
    {
      title: 'Entertainment',
      description: 'Our team will help entertainment businesses promote their events or services, such as concerts, movies, or theme parks.',
      image: '/industries/media.webp'
    },
    {
      title: 'Fitness and Wellness',
      description: 'We will help fitness and wellness businesses promote their services, such as gym memberships or yoga classes.',
      image: '/industries/sports.webp'
    },
    {
      title: 'Automotive',
      description: 'Our team will help automotive businesses promote their products or services, such as car dealerships or auto repair shops.',
      image: '/industries/automotive.webp'
    },
    {
      title: 'Real Estate',
      description: 'We will help real estate businesses promote their properties or services.',
      image: '/industries/construction.webp'
    },
    {
      title: 'Technology',
      description: 'Our team will help technology businesses promote their products or services, such as software or gadgets.',
      image: '/industries/gadgets.webp'
    },
    {
      title: 'Education',
      description: 'We will help educational institutions promote their programs or services.',
      image: '/industries/education.webp'
    },
    {
      title: 'Healthcare',
      description: 'We will help healthcare businesses promote their services or products, such as medical spas or health clinics.',
      image: '/industries/healthcare.webp'
    },
    {
      title: 'Travel and Tourism',
      description: 'We will help travel and tourism businesses promote their destinations or services.',
      image: '/industries/tourism.webp'
    },
    {
      title: 'Fashion and Apparel',
      description: 'We will help fashion and apparel businesses promote their products.',
      image: '/industries/fashion.webp'
    },
    {
      title: 'Beauty and Cosmetics',
      description: 'We will help beauty and cosmetics businesses promote their products or services.',
      image: '/industries/cosmetics.webp'
    },
    {
      title: 'Home Decor and Furniture',
      description: 'We will help home decor and furniture businesses promote their products.',
      image: '/industries/furniture.webp'
    },
    {
      title: 'Sports and Recreation',
      description: 'We will help sports and recreation businesses promote their events or services.',
      image: '/industries/sports.webp'
    },
    {
      title: 'Non-Profit Organizations',
      description: 'We will help non-profit organizations promote their causes or services.',
      image: '/industries/ngo.webp'
    }
  ],
  footer: 'By partnering with Pencil Peel IMT, you can unlock the full potential of human walking billboard campaigns and drive business growth. Contact us to learn more about our human walking billboard services.'
};



  intro = 'Our team will work closely with you to understand your goals and objectives.';

  steps: any[] = [
    {
      title: 'Develop a Customized Strategy',
      description:
        'We will develop a customized strategy that meets your business needs and goals.',
    },
    {
      title: 'Create Engaging Content',
      description:
        'Our team will create engaging content that resonates with your target audience.',
    },
    {
      title: 'Optimize Campaigns',
      description:
        'We will optimize campaigns to ensure maximum ROI and achieve your business objectives.',
    },
  ];

  outro =
    'By partnering with Pencil Peel IMT, you can unlock the full potential of human walking billboard campaigns and drive business growth. Contact us to learn more about our human walking billboard services.';

    practices: any[] = [
    {
      title: 'Keep It Fun',
      description:
        'Our team will create a creative and humorous approach that is more likely to attract attention and engagement.',
      icon: 'pi pi-face-smile',
    },
    {
      title: 'Focus on Quality',
      description:
        'We will invest in professional-looking boards or costumes to convey a strong brand image.',
      icon: 'pi pi-star',
    },
    {
      title: 'Track ROI',
      description:
        'Our team will use unique promo codes or links to measure the impact of your campaign effectively.',
      icon: 'pi pi-chart-line',
    },
    {
      title: 'Safety First',
      description:
        'We will ensure that ambassadors are trained to interact safely with the public and comply with local regulations.',
      icon: 'pi pi-shield',
    },
  ];

  // Why Choose points (dynamic)
  whyPoints: any[] = [
    {
      title: 'Expertise',
      description:
        'Our team has extensive experience in creating effective human walking billboard campaigns.',
      icon: 'pi pi-briefcase',
    },
    {
      title: 'Customized Approach',
      description:
        'We will develop a customized strategy that meets your business needs and goals.',
      icon: 'pi pi-cog',
    },
    {
      title: 'Creative Content',
      description:
        'Our team will create engaging content that resonates with your target audience.',
      icon: 'pi pi-palette',
    },
  ];

  cta = {
  text: `Unlock the full potential of
    <span class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
      Pencil Peel IMT
    </span>
    Human Walking Billboard Campaigns`,
  description: `By partnering with Pencil Peel IMT, you can drive business growth
    and connect with your audience in a unique and impactful way. Contact us today
    to learn more about our human walking billboard services.`
};

}
