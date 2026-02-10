import { Component } from '@angular/core';
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { Whycpencilpeel } from "../../../components/whycpencilpeel/whycpencilpeel";
import { HeroConfig, OutdoorHeroSection } from "../../outdoor-hero-section/outdoor-hero-section";
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-highway-hotel-advertising',
  imports: [CommonModule,Benefitsnew, Whycpencilpeel, OutdoorHeroSection,Quotes],
  templateUrl: './highway-hotel-advertising.html',
  styleUrl: './highway-hotel-advertising.scss'
})
export class HighwayHotelAdvertising {
  testimonials = [
  { text: "Fuel Your Brand's Growth with Pencil Peel IMT's Highway Promotions" },
  { text: "Stop, Refresh, and Engage with Pencil Peel IMT's Highway Hotel and Restaurant Promotions" },
  { text: "Drive Sales and Visibility with Pencil Peel IMT's Highway Advertising Expertise" },
  { text: "Serve Up Success with Pencil Peel IMT's Creative Highway Promotions" }
];

  highwayHotelHeroConfig: HeroConfig = {
  badgeText: '#1 Highway Marketing Solutions',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: '',
    highlighted: [
      'Highway Side Hotel and',
      'Restaurant Promotions'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'Highway side Hotel and Restaurant Promotion is One of the most <strong class="text-orange-600">Engaging Advertising activity</strong>. It will attract Consumer and Traveller attention. At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating innovative marketing strategies that drive results.',
  backgroundImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Capture Traveller Attention'
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

  benefitsHighwayPromotions:any = {
  title: `Benefits of <span class="text-orange-500">Highway Promotions</span>`,
  description: `By partnering with <span class="text-orange-500">Pencil Peel IMT</span>, your business can:`,
  benefits:[
    {
      icon: 'pi-eye',
      gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      title: 'Increase Brand Visibility',
      description: 'Reach a large audience of travellers and potential customers, increasing brand awareness and recognition.'
    },
    {
      icon: 'pi-compass',
      gradient: 'bg-gradient-to-tr from-teal-400 to-teal-600',
      title: 'Target Specific Demographics',
      description: 'Target specific demographics, such as travellers or foodies, and tailor your marketing strategy to their needs and preferences.'
    },
    {
      icon: 'pi-star',
      gradient: 'bg-gradient-to-tr from-blue-400 to-indigo-600',
      title: 'Create Memorable Experiences',
      description: 'Increase brand recognition and create memorable experiences that drive customer loyalty and retention.'
    }
  ]
}

whyChoosePencilPeelGeneral: any = {
  title: "Why Choose Pencil Peel IMT?",
  description: "Our team is dedicated to delivering innovative and effective marketing solutions that drive results. We will work closely with you to understand your brand goals and develop customized marketing strategies that meet your needs.",
  features: [],
  footer: ""
};

 promotions = [
    {
      title: 'Highway Hotel Promotions',
      icon: 'pi-building',
      points: [
        { title: 'Partner with Highway Hotels', description: 'Collaborate with hotels near highways to offer exclusive packages or discounts to travellers, increasing brand visibility.' },
        { title: 'Develop Branded Takeaway Packaging', description: 'Use hotel-branded takeaway packaging to increase highway brand exposure and reinforce your message.' },
        { title: 'Run In-Hotel Promotions', description: 'Execute promotions or contests within hotels, encouraging guests to share experiences on social media and generate buzz.' }
      ]
    },
    {
      title: 'Restaurant Promotions',
      icon: 'pi-shop',
      points: [
        { title: 'Partner with Highway Restaurants', description: 'Collaborate with nearby restaurants to offer special deals or discounts to travellers, boosting brand awareness.' },
        { title: 'Host Food Festivals', description: 'Organize events at highway restaurants, showcasing cuisine while promoting your brand.' },
        { title: 'Launch Social Media Campaigns', description: 'Encourage customers to share meal photos on social media using branded hashtags.' }
      ]
    },
    {
      title: 'Parking Space Promotions',
      icon: 'pi-car',
      points: [
        { title: 'Utilize Parking Lot Advertising', description: 'Reach potential customers while they park, increasing brand visibility and awareness.' },
        { title: 'Create Interactive Displays', description: 'Develop interactive installations in parking lots, engaging customers and generating awareness.' },
        { title: 'Host Promotional Events', description: 'Execute activations in parking lots, offering samples or demonstrations to attendees.' }
      ]
    }
  ];


}
