import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OutdoorServices } from './outdoor-services/outdoor-services';
import { Feature } from '../pages/filmpromo/filmpromo';
import { Whycpencilpeel } from "../components/whycpencilpeel/whycpencilpeel";
import { Howcanwehelp } from "./howcanwehelp/howcanwehelp";
import { Nocarouselherosection } from "../components/nocarouselherosection/nocarouselherosection";
import { Benefitsnew } from "../components/benefitsnew/benefitsnew";


@Component({
  selector: 'app-outdooradvertising',
  imports: [CommonModule, OutdoorServices, Whycpencilpeel, Howcanwehelp, Nocarouselherosection, Benefitsnew],
  templateUrl: './outdooradvertising.html',
  styleUrl: './outdooradvertising.scss'
})
export class Outdooradvertising {
  heroContent: any = {
  title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                bg-gradient-to-r from-blue-600 via-green-400 to-teal-500 bg-clip-text text-transparent">
      Outdoor Advertising with Pencil Peel
    </span>
  `,
  description: `At Pencil Peel IMT, we specialize in creating impactful outdoor advertising campaigns that reach a broad audience and drive results.`,
  image: 'outdoor/airport/airportcrowd1.webp'
};


   outdoorLocations: any[] = [
    // Billboard Advertising
    { 
      name: "Static Billboards", 
      desc: "Traditional large-format billboards with printed advertisements strategically placed on highways and busy roads for maximum visibility.",
      image: "/outdoor/static-billboard.webp",
      category: "Billboard Advertising",
      route: "/static-billboards"
    },
    { 
      name: "Digital Billboards", 
      desc: "High-resolution electronic displays showcasing dynamic digital advertisements with real-time content updates and scheduling flexibility.",
      image: "/outdoor/digital-billboard.webp",
      category: "Billboard Advertising",
      route: "/digital-billboards"
    },
    { 
      name: "LED Billboards", 
      desc: "Bright LED displays offering superior visibility and dynamic content capabilities for maximum impact day and night.",
      image: "/outdoor/led-billboard.webp",
      category: "Billboard Advertising",
      route: "/led-billboards"
    },
    // Transit Advertising
    { 
      name: "Bus Advertising", 
      desc: "Eye-catching advertisements on buses, bus shelters, and bus stops reaching thousands of daily commuters.",
      image: "/outdoor/bus-advertising.webp",
      category: "Transit Advertising",
      route: "/bus-advertising"
    },
    { 
      name: "Train Advertising", 
      desc: "Strategic ad placements on trains, train stations, and platforms targeting regular rail commuters and travelers.",
      image: "/outdoor/train-advertising.webp",
      category: "Transit Advertising",
      route: "/train-advertising"
    },
    { 
      name: "Airport Advertising", 
      desc: "Premium advertising spaces in airports, terminals, and concourses reaching affluent global travelers.",
      image: "/outdoor/airport-advertising.webp",
      category: "Transit Advertising",
      route: "/airport-advertising"
    },
    // Poster and Banner Advertising
    { 
      name: "Mall Advertising", 
      desc: "Strategic advertising placements in shopping malls, retail stores, and food courts targeting shoppers and families.",
      image: "/outdoor/mall-advertising.webp",
      category: "Poster & Banner",
      route: "/mall-advertising"
    },
    { 
      name: "Street Furniture Advertising", 
      desc: "Creative ads on street furniture including benches, trash cans, and bike racks integrated into urban landscapes.",
      image: "/outdoor/street-furniture.webp",
      category: "Poster & Banner",
      route: "/street-furniture-advertising"
    },
    { 
      name: "Banner Advertising", 
      desc: "Large-scale banners displayed in high-traffic public areas and special events for maximum brand exposure.",
      image: "/outdoor/banner-advertising.webp",
      category: "Poster & Banner",
      route: "/banner-advertising"
    },
    // Digital Screen Advertising
    { 
      name: "Digital Signage", 
      desc: "Modern electronic displays showcasing dynamic advertisements in prime public locations with targeting capabilities.",
      image: "/outdoor/digital-signage.webp",
      category: "Digital Screen",
      route: "/digital-signage"
    },
    { 
      name: "Video Walls", 
      desc: "Impressive large-scale video displays creating immersive brand experiences and memorable visual messages.",
      image: "/outdoor/video-walls.webp",
      category: "Digital Screen",
      route: "/video-walls"
    },
    // Outdoor Display Advertising
    { 
      name: "Interactive Kiosks", 
      desc: "Engaging interactive kiosks providing information while showcasing targeted advertisements and collecting user data.",
      image: "/outdoor/interactive-kiosks.webp",
      category: "Outdoor Display",
      route: "/interactive-kiosks"
    },
    { 
      name: "Mall Displays", 
      desc: "Attractive displays and exhibits strategically placed in shopping malls and retail environments for targeted reach.",
      image: "/outdoor/mall-displays.webp",
      category: "Outdoor Display",
      route: "/mall-displays"
    },
    // Mobile Advertising
    { 
      name: "Mobile Billboards", 
      desc: "Dynamic advertising on mobile billboards and trucks traveling through high-traffic areas for flexible targeting.",
      image: "/outdoor/mobile-billboards.webp",
      category: "Mobile Advertising",
      route: "/mobile-billboards"
    },
    { 
      name: "Vehicle Wrap Advertising", 
      desc: "Full vehicle wraps and transit advertising creating mobile brand ambassadors that travel throughout the city.",
      image: "/outdoor/vehicle-wrap.webp",
      category: "Mobile Advertising",
      route: "/vehicle-wrap-advertising"
    },
    // Experiential Marketing
    { 
      name: "Event Marketing", 
      desc: "Immersive brand experiences and activations at events creating memorable customer interactions and engagement.",
      image: "/outdoor/event-marketing.webp",
      category: "Experiential",
      route: "/event-marketing"
    },
    { 
      name: "Interactive Installations", 
      desc: "Creative interactive installations designed to engage audiences and amplify brand presence through participation.",
      image: "/outdoor/interactive-installations.webp",
      category: "Experiential",
      route: "/interactive-installations"
    },
    // Ambient Advertising
    { 
      name: "Guerrilla Marketing", 
      desc: "Unconventional and creative marketing tactics designed to create buzz and viral engagement in unexpected places.",
      image: "/outdoor/guerrilla-marketing.webp",
      category: "Ambient Advertising",
      route: "/guerrilla-marketing"
    },
    { 
      name: "Street Art Advertising", 
      desc: "Artistic street installations and murals that promote brands while enhancing urban landscapes and culture.",
      image: "/outdoor/street-art.webp",
      category: "Ambient Advertising",
      route: "/street-art-advertising"
    },
    // Projection Mapping
    { 
      name: "Building Projections", 
      desc: "Spectacular large-scale projections on buildings creating stunning visual brand experiences for special events.",
      image: "/outdoor/building-projections.webp",
      category: "Projection Mapping",
      route: "/building-projections"
    },
    { 
      name: "3D Projection Advertising", 
      desc: "Dynamic 3D projections showcasing advertisements with immersive visual storytelling and cutting-edge technology.",
      image: "/outdoor/3d-projections.webp",
      category: "Projection Mapping",
      route: "/3d-projection-advertising"
    }
  ];

  whycContent:any = {
    title: "Why Choose Pencil Peel?",
  }

  whycfeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has extensive experience in outdoor advertising and has worked with a variety of brands and industries.',
    icon: 'pi-users',
    borderColor: 'orange-500',
    iconBgColor: 'orange-100',
    iconColor: 'orange-600'
  },
  {
    id: 2,
    title: 'Creative Solutions',
    description: 'We offer innovative and creative solutions to help your brand stand out.',
    icon: 'pi-palette',
    borderColor: 'purple-500',
    iconBgColor: 'purple-100',
    iconColor: 'purple-600'
  },
  {
    id: 3,
    title: 'Strategic Planning',
    description: 'We develop customized outdoor advertising strategies that meet your specific marketing goals and objectives.',
    icon: 'pi-chart-line',
    borderColor: 'blue-500',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  }
  ];

benefitcontent:any = {
  title: 'Benefits of Outdoor Advertising',
  description: ''
}


benefitsnew = [
  {
    icon: 'pi pi-globe',
    gradient: 'bg-gradient-to-tr from-indigo-400 to-blue-600',
    title: 'Wide Reach',
    description: "Outdoor ads have the potential to reach a large and diverse audience, including those who may not engage with digital or print media."
  },
  {
    icon: 'pi pi-wallet',
    gradient: 'bg-gradient-to-tr from-green-400 to-green-600',
    title: 'Cost-Effective',
    description: "Outdoor advertising offers a good return on investment (ROI) as advertisements stay visible to the public 24/7."
  },
  {
    icon: 'pi pi-eye',
    gradient: 'bg-gradient-to-tr from-purple-400 to-pink-600',
    title: 'High Visibility',
    description: "Strategic placement ensures repeated exposure, making it effective for brand recall."
  },
  {
    icon: 'pi pi-map-marker',
    gradient: 'bg-gradient-to-tr from-cyan-400 to-blue-500',
    title: 'Geographic Targeting',
    description: "Ads can be placed in specific locations to target local audiences or communities."
  },
  {
    icon: 'pi pi-bolt',
    gradient: 'bg-gradient-to-tr from-emerald-400 to-teal-600',
    title: 'Boosts Brand Awareness',
    description: "Eye-catching designs and placements help establish a strong brand presence."
  }
];



}
