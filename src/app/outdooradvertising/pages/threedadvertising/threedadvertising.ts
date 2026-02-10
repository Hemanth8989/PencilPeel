import { Component } from '@angular/core';
import { HeroConfig, OutdoorHeroSection } from '../../outdoor-hero-section/outdoor-hero-section';
import { CommonModule } from '@angular/common';
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-threedadvertising',
  imports: [CommonModule,OutdoorHeroSection, Quotes],
  templateUrl: './threedadvertising.html',
  styleUrl: './threedadvertising.scss'
})
export class Threedadvertising {
  threeDAdvertisingHeroConfig: HeroConfig = {
  badgeText: '#1 3D Advertising Innovation',
  badgeIcon: 'pi pi-star-fill',
  title: {
    prefix: 'Unlock Your',
    highlighted: [
      '3D Advertising',
      'Solutions'
    ],
    suffix: 'with Pencil Peel IMT'
  },
  description: 'At <strong class="text-orange-600">Pencil Peel IMT</strong>, we specialize in creating effective 3D advertising campaigns that drive business growth and product awareness.',
  backgroundImage: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  typingTexts: [
    'Immersive Brand Experiences'
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
  { text: "Elevate Your Brand with Pencil Peel IMT's Stunning 3D Advertising Solutions" },
  { text: "See Your Business Grow with Pencil Peel IMT's Impactful 3D Ads" },
  { text: "Bring Your Brand to Life with Pencil Peel IMT's Creative 3D Advertising" },
  { text: "Experience the Power of 3D Advertising with Pencil Peel IMT's Expertise" }
];

  benefits = [
    { title: 'High Visual Impact', description: 'We will create 3D elements that grab attention and stand out.', icon: 'pi pi-eye', bgGradient: 'bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100', iconBg: 'bg-purple-600' },
    { title: 'Memorability', description: 'Our team will create unique and immersive 3D ads that leave a lasting impression.', icon: 'pi pi-star-fill', bgGradient: 'bg-gradient-to-br from-teal-100 via-teal-200 to-teal-100', iconBg: 'bg-teal-600' },
    { title: 'Enhanced Engagement', description: 'We will help people interact with 3D displays and increase their involvement with the brand.', icon: 'pi pi-users', bgGradient: 'bg-gradient-to-br from-orange-100 via-orange-200 to-orange-100', iconBg: 'bg-orange-600' },
    { title: 'Creativity & Innovation', description: 'Our team will push creative boundaries and demonstrate innovation.', icon: 'pi pi-lightbulb', bgGradient: 'bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100', iconBg: 'bg-pink-600' },
    { title: 'Versatility', description: 'We will help you use 3D advertising in various formats.', icon: 'pi pi-sitemap', bgGradient: 'bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-100', iconBg: 'bg-indigo-600' },
    { title: 'Improves Storytelling', description: 'Our team will create immersive narratives that convey your message effectively.', icon: 'pi pi-book', bgGradient: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-100', iconBg: 'bg-yellow-500' },
    { title: 'Social Media Amplification', description: 'We will create visually striking 3D ads that encourage social media sharing.', icon: 'pi pi-share-alt', bgGradient: 'bg-gradient-to-br from-green-100 via-green-200 to-green-100', iconBg: 'bg-green-600' },
    { title: 'Boosts Brand Perception', description: 'Our team will position your brand as forward-thinking and innovative.', icon: 'pi pi-thumbs-up', bgGradient: 'bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100', iconBg: 'bg-pink-500' },
    { title: 'Increases Foot Traffic', description: 'We will create 3D installations that attract crowds.', icon: 'pi pi-map-marker', bgGradient: 'bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100', iconBg: 'bg-purple-600' },
    { title: 'Realistic Product Representation', description: 'Our team will showcase products in a lifelike manner.', icon: 'pi pi-box', bgGradient: 'bg-gradient-to-br from-teal-100 via-teal-200 to-teal-100', iconBg: 'bg-teal-600' },
    { title: 'Customization', description: 'We will tailor 3D ads to fit specific campaign goals.', icon: 'pi pi-cog', bgGradient: 'bg-gradient-to-br from-orange-100 via-orange-200 to-orange-100', iconBg: 'bg-orange-600' },
    { title: 'Durability', description: 'Our team will create physical 3D installations that last.', icon: 'pi pi-lock', bgGradient: 'bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-100', iconBg: 'bg-indigo-600' },
    { title: 'Eco-Friendly Options', description: 'We will help you choose digital 3D ads that reduce waste.', icon: 'pi pi-leaf', bgGradient: 'bg-gradient-to-br from-green-100 via-green-200 to-green-100', iconBg: 'bg-green-600' },
    { title: 'Captures Multiple Demographics', description: 'Our team will create 3D ads that appeal to a wide range of audiences.', icon: 'pi pi-users', bgGradient: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-100', iconBg: 'bg-yellow-500' },
    { title: 'Encourages Impulse Actions', description: 'We will create eye-catching 3D ads that prompt immediate actions.', icon: 'pi pi-bolt', bgGradient: 'bg-gradient-to-br from-pink-100 via-pink-200 to-pink-100', iconBg: 'bg-pink-600' },
  ];

   industries = [
    { name: 'Retail', description: 'Our team will help retailers promote products and services through 3D advertising, increasing foot traffic and sales.', icon: 'pi pi-shopping-cart' },
    { name: 'Entertainment', description: 'We will help entertainment companies promote movies, shows, or events through 3D advertising, generating buzz and excitement.', icon: 'pi pi-video' },
    { name: 'Automotive', description: 'Our team will help automotive companies showcase their products through 3D advertising, highlighting features and benefits.', icon: 'pi pi-car' },
    { name: 'Technology', description: 'We will help tech companies promote innovative products and services through 3D advertising, demonstrating complex features and benefits.', icon: 'pi pi-desktop' },
    { name: 'Fashion', description: 'Our team will help fashion brands promote their products through 3D advertising, showcasing designs and styles.', icon: 'pi pi-tag' },
    { name: 'Food and Beverage', description: 'We will help food and beverage companies promote their products through 3D advertising, highlighting flavours and ingredients.', icon: 'pi pi-apple' },
    { name: 'Healthcare', description: 'We will help healthcare companies promote their services and products through 3D advertising, educating audiences about health benefits.', icon: 'pi pi-heart' },
    { name: 'Real Estate', description: 'We will help real estate companies promote properties through 3D advertising, showcasing features and amenities.', icon: 'pi pi-home' },
    { name: 'Travel and Tourism', description: 'We will help travel and tourism companies promote destinations and experiences through 3D advertising.', icon: 'pi pi-map-marker' },
    { name: 'Education', description: 'We will help educational institutions promote their programs and services through 3D advertising.', icon: 'pi pi-book' },
  ];

  reasons = [
    { title: 'Increased Engagement', description: '3D advertising increases engagement and interaction with the target audience.', icon: 'pi pi-users' },
    { title: 'Improved Brand Awareness', description: 'Our team will help increase brand awareness through 3D advertising.', icon: 'pi pi-megaphone' },
    { title: 'Enhanced Storytelling', description: 'We will create immersive narratives that convey the brand\'s message effectively.', icon: 'pi pi-pencil' },
  ];
}
