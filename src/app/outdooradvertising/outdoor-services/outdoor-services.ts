import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface OutdoorService {
  title: string;
  description: string;
  image: string;
  route: string;
}


@Component({
  selector: 'app-outdoor-services',
  imports: [CommonModule, ButtonModule, TagModule, CardModule],
  templateUrl: './outdoor-services.html',
  styleUrl: './outdoor-services.scss'
})
export class OutdoorServices {

  constructor(private router: Router) { }

outdoorServices: OutdoorService[] = [
    {
      title: 'Billboards Advertising',
      description: 'Eye-catching static and digital billboards for maximum brand visibility.',
      image: '/outdoor/Billboard/interactivebillboard.webp',
      route: '/billboard-advertising'
    },
    {
      title: 'Hoarding Advertising',
      description: 'Large scale hoarding displays at prime locations for impactful messaging.',
      image: '/outdoor/hoarding/hoarding.webp',
      route: '/hoarding-advertising'
    },
    {
      title: 'Bus Shelter Advertising',
      description: 'Strategic advertising on bus shelters for maximum commuter reach.',
      image: '/outdoor/busshelter/bushelter1.webp',
      route: '/busshelter-advertising'
    },
    {
      title: 'Mall Display Advertising',
      description: 'Dynamic and static advertisements in high-traffic mall spaces.',
      image: '/outdoor/malldisplay/malldisplay.webp',
      route: '/malldisplay-advertising'
    },
    {
      title: 'Airport Advertising',
      description: 'Targeted advertising in airport terminals and passenger lounges.',
      image: '/outdoor/airport/airportentrance.webp',
      route: '/airport-advertising'
    },
    {
      title: 'Car Advertising',
      description: 'Effective mobile advertisement on cars and vehicle fleets.',
      image: '/outdoor/car/car5.webp',
      route: '/car-advertising'
    },
    {
      title: 'Inflight Advertising',
      description: 'Engage passengers with strategic ads inside aircraft cabins.',
      image: '/outdoor/inflight/inflight.webp',
      route: '/inflight-advertising'
    },
    {
      title: 'Metropillar Advertising',
      description: 'Urban visibility through advertising on metropolitan pillars.',
      image: '/outdoor/pillar/metropillar.webp',
      route: '/metropillar-advertising'
    },
    {
      title: 'Metrotrain Advertising',
      description: 'Brand visibility on metro trains and stations.',
      image: '/outdoor/metrotrain/metrotrain.webp',
      route: '/metrotrain-advertising'
    },
    {
      title: 'Human Walking Billboard',
      description: 'Engage crowds with dynamic walking billboard advertisements.',
      image: '/outdoor/human/human2.webp',
      route: '/human-walking-billboard'
    },
    {
      title: 'Gym Advertising',
      description: 'Target fitness enthusiasts with strategic gym advertisements.',
      image: '/outdoor/gym/gym1.webp',
      route: '/gym-advertising'
    },
    {
      title: 'Retail Advertising',
      description: 'Promote your brand effectively in retail environments.',
      image: '/outdoor/retail/retail1.webp',
      route: '/retail-advertising'
    },
    {
      title: 'Scrolling Billboard',
      description: 'Dynamic scrolling billboard ads for continuous engagement.',
      image: '/outdoor/scroll/scrollbillboard1.webp',
      route: '/scrolling-billboard-advertising'
    },
    {
      title: 'Mobile Billboard',
      description: 'Mobile advertising solutions on trucks and moving vehicles.',
      image: '/outdoor/mobile/mobile2.webp',
      route: '/mobile-billboard-advertising'
    },
    {
      title: '3D Advertising',
      description: 'Impressive 3D advertising installations for memorable impact.',
      image: '/outdoor/3dbillboard/3dbillboard3.webp',
      route: '/3d-advertising'
    },
    {
      title: 'Multiplex Restroom Advertising',
      description: 'Targeted ads in multiplex restrooms for captive audience engagement.',
      image: '/outdoor/mutlplex/multiplex-restroom.png',
      route: '/multiplex-advertising'
    },
    {
      title: 'Transit Advertising',
      description: 'Brand visibility on transit vehicles and transportation hubs.',
      image: '/outdoor/transist/transist2.webp',
      route: '/transit-advertising'
    },
    {
      title: 'Inflatable Advertising',
      description: 'Large inflatable branded displays for events and promotions.',
      image: '/outdoor/inflatable/inflatable1.png',
      route: '/inflatable-advertising'
    },
    {
      title: 'Projection Advertising',
      description: 'Visual advertising with advanced projection mapping technology.',
      image: '/outdoor/projection/projection1.webp',
      route: '/projection-advertising'
    },
    {
      title: 'Cutout Advertising',
      description: 'Stand-out cutout displays for unique brand presentations.',
      image: '/outdoor/cutout/cutout.png',
      route: '/cutout-advertising'
    },
    {
      title: 'Auto Advertising',
      description: 'Automotive-focused advertising solutions for car dealerships.',
      image: '/outdoor/auto/auto.png',
      route: '/auto-advertising'
    },
    {
      title: 'Aircraft Exterior Advertising',
      description: 'Premium branding on aircraft exteriors for global visibility.',
      image: '/outdoor/exterior/exterior1.webp',
      route: '/aircraft-exterior-branding'
    },
    {
      title: 'Highway Brand Activation',
      description: 'Strategic brand activation campaigns on highways and roads.',
      image: '/outdoor/highway/highway4.webp',
      route: 'highway-brand-activation-advertising'
    },
    {
      title: 'Highway Hotel Advertising',
      description: 'Targeted advertising at highway hotels and rest stops.',
      image: '/outdoor/hotel/hotel1.webp',
      route: 'highway-hotel-advertising'
    },
    {
      title: 'Interactive Display',
      description: 'Engaging interactive digital displays for customer interaction.',
      image: '/outdoor/Billboard/interactivebillboard.webp',
      route: 'interactive-display-advertising'
    },
    {
      title: 'Street Furniture Advertising',
      description: 'Creative ads on street furniture like benches and kiosks.',
      image: '/outdoor/pillar/steetpoles.webp',
      route: 'street-furniture-advertising'
    },
    {
      title: 'Augmented Reality Advertising',
      description: 'AR-based immersive advertising experiences for modern audiences.',
      image: '/outdoor/Billboard/ar.png',
      route: 'AR-advertising'
    },
    {
      title: 'Floor Graphics Advertising',
      description: 'Creative floor advertising solutions for high-traffic areas.',
      image: '/outdoor/Billboard/floor.png',
      route: 'floor-graphics-advertising'
    },
    {
      title: 'Guerilla Advertising',
      description: 'Creative guerilla marketing tactics for memorable campaigns.',
      image: '/outdoor/gurella/gurellaadv.webp',
      route: 'guerrilla-advertising'
    },
    {
      title: 'Projection Mapping',
      description: 'Advanced projection mapping ads for spectacular visual impact.',
      image: '/outdoor/projection/projection2.webp',
      route: 'projection-mapping-advertising'
    },
    {
      title: 'Wall Wraps Advertising',
      description: 'Bold wall wrap advertisements for building-scale branding.',
      image: 'outdoor/wallwrap/wallwrap4.webp',
      route: 'wall-wraps-advertising'
    },
    {
      title: 'Window Clings Advertising',
      description: 'Eye-catching window cling ads for storefront marketing.',
      image: '/outdoor/windowclip/windowclip3.webp',
      route: 'Window-Clings-advertising'
    }
  ];

  navigateToService(route: string): void {
    this.router.navigate([route]);
  }
}
