import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-corevalues',
  imports: [ButtonModule,CommonModule],
  templateUrl: './corevalues.html',
  styleUrl: './corevalues.scss'
})
export class Corevalues {
  coreValues: any[] = [
    {
      title: 'Commitment',
      description: "We're dedicated to our clients' success, working tirelessly to deliver exceptional results and support their growth.",
      icon: 'pi pi-heart',
      gradientFrom: '#ea580c',
      gradientTo: '#dc2626',
      strength: 98
    },
    {
      title: 'Expertise',
      description: 'Our team brings knowledge and experience to the table, ensuring our clients receive the best possible solutions for their needs.',
      icon: 'pi pi-star',
      gradientFrom: '#2563eb',
      gradientTo: '#1d4ed8',
      strength: 95
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve, leveraging cutting-edge technology and innovative strategies to drive our clients\' success.',
      icon: 'pi pi-lightbulb',
      gradientFrom: '#7c3aed',
      gradientTo: '#6366f1',
      strength: 97
    },
    {
      title: 'Partnership',
      description: 'We believe in collaboration, working closely with our clients to understand their goals and tailor our services to meet their unique needs.',
      icon: 'pi pi-users',
      gradientFrom: '#059669',
      gradientTo: '#047857',
      strength: 96
    },
    {
      title: 'Excellence',
      description: "We're passionate about delivering perfection in everything we do, from strategy development to execution and evaluation.",
      icon: 'pi pi-trophy',
      gradientFrom: '#dc2626',
      gradientTo: '#b91c1c',
      strength: 99
    },
    {
      title: 'Growth',
      description: 'Our ultimate goal is to empower our clients\' success and growth, providing them with the tools and support they need to thrive.',
      icon: 'pi pi-chart-line',
      gradientFrom: '#4f46e5',
      gradientTo: '#3730a3',
      strength: 94
    }
  ];

  statistics: any[] = [
    { label: 'Client Satisfaction', value: '99%', color: '#ea580c' },
    { label: 'Project Success Rate', value: '97%', color: '#2563eb' },
    { label: 'Team Expertise', value: '95%', color: '#7c3aed' },
    { label: 'Innovation Index', value: '98%', color: '#059669' }
  ];

  constructor() {}
}
