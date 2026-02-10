import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,ButtonModule,TagModule,CardModule,],
  templateUrl: './principal.html',
  styleUrl: './principal.scss'
})
export class Principal {
  principles: any[] = [
    {
      title: 'CREATIVITY',
      description: 'Our Creativity is inherent and not acquired. We understand that the world is changing fast and minds and tastes of people are also changing fast. We are the best to come up with fresh ideas that satisfy the every – changing mind and tastes of the people. This would give the best benefits to the clients.',
      icon: 'pi pi-palette'
    },
    {
      title: 'INNOVATION',
      description: 'We are aware of the fact that our clients always come up with new products and new ideas. We stand for them with new ways of promoting them. We Find and invent new ways and avenues to take our clients to success.',
      icon: 'pi pi-lightbulb'
    },
    {
      title: 'QUALITY',
      description: 'Quality is what everyone looks for. Our Clients bring the best of the quality service or product. We add colour to that. We maintain quality in planning, execution of every promotional work for our clients. We are not satisfied unless our client is satisfied.',
      icon: 'pi pi-star'
    },
    {
      title: 'TIME',
      description: 'Time is the most precious thing that we have on hand. A Minute lost is a day gone for us. We are at the disposal of our clients at the dotted time. We deliver our services as promised and with Pencil Peel IMT, there would be no eleventh-hour rush.',
      icon: 'pi pi-clock'
    },
    {
      title: 'RESULTS',
      description: 'The End results of everything that we do is what stands and speaks for us. In fact, it is also what is important for our clients. We assure our clients of the best and successful results that values the hard work of our clients.',
      icon: 'pi pi-chart-bar'
    },
    {
      title: 'BONDING',
      description: 'Bonding between Pencil Peel IMT and its client is the most important guiding factor for us. We Value the relationship as we strongly believe that two people or two companies can grow better if both share uncompromising relationship. We are the best and the most trusted friends for our clients as we understand their work and take it on our shoulders.',
      icon: 'pi pi-heart'
    }
  ];

  stats: any[] = [
    { label: 'Years Experience', value: 85 },
    { label: 'Client Satisfaction', value: 98 },
    { label: 'Project Success', value: 95 },
    { label: 'Team Expertise', value: 92 }
  ];
}
