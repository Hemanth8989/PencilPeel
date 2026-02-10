import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-howcanwehelp',
  imports: [CommonModule,ButtonModule],
  templateUrl: './howcanwehelp.html',
  styleUrl: './howcanwehelp.scss'
})
export class Howcanwehelp {
  constructor(private router: Router) { }
  // Updated howWeHelp array with images
 services = [
    {
      number: 1,
      title: 'Identify Target Audience',
      description: 'We identify your target demographic to choose the best locations and formats for ads.',
      icon: 'pi pi-users',
      gradient: 'from-orange-400/20 to-orange-600/20'
    },
    {
      number: 2,
      title: 'Design Creative Content',
      description: 'Our team designs visually appealing ads that grab attention and resonate with your audience.',
      icon: 'pi pi-palette',
      gradient: 'from-blue-400/20 to-blue-600/20'
    },
    {
      number: 3,
      title: 'Select Locations',
      description: 'We select high-traffic areas such as highways, urban centres, shopping districts, and transit hubs to maximize visibility.',
      icon: 'pi pi-map-marker',
      gradient: 'from-purple-400/20 to-purple-600/20'
    },
    {
      number: 4,
      title: 'Monitor and Measure Success',
      description: 'We track the success of your campaign through metrics like increased foot traffic, brand awareness surveys, or sales data.',
      icon: 'pi pi-chart-line',
      gradient: 'from-green-400/20 to-green-600/20'
    }
  ];

}
