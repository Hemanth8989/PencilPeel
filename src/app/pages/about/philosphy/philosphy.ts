import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-philosphy',
  imports: [CommonModule],
  templateUrl: './philosphy.html',
  styleUrl: './philosphy.scss'
})
export class Philosphy {
  philosophyPillars: any[] = [
    {
      title: 'Client-Centric Approach',
      icon: 'pi pi-users',
      gradientFrom: '#2563eb',
      gradientTo: '#1d4ed8',
      points: [
        {
          title: 'Deep Understanding',
          description: 'We invest time in understanding our clients\' businesses, industries, and goals.'
        },
        {
          title: 'Tailored Solutions',
          description: 'We create customized solutions that meet the specific needs of our clients.'
        },
        {
          title: 'Long-Term Relationships',
          description: 'We prioritize building trust, transparency, and consistent communication.'
        }
      ]
    },
    {
      title: 'Innovation and Creativity',
      icon: 'pi pi-lightbulb',
      gradientFrom: '#9333ea',
      gradientTo: '#7c3aed',
      points: [
        {
          title: 'Staying Ahead',
          description: 'We continuously update ourselves on the latest marketing trends and technologies.'
        },
        {
          title: 'Experimentation and Adaptation',
          description: 'We\'re agile and willing to test new ideas and approaches.'
        },
        {
          title: 'Creative Excellence',
          description: 'We encourage creativity and out-of-the-box thinking.'
        }
      ]
    },
    {
      title: 'Quality and Value',
      icon: 'pi pi-star',
      gradientFrom: '#ea580c',
      gradientTo: '#dc2626',
      points: [
        {
          title: 'Quality Over Quantity',
          description: 'We prioritize delivering high-quality work that stands out.'
        },
        {
          title: 'Value-Driven Services',
          description: 'We ensure that every service we provide offers real value to our clients.'
        },
        {
          title: 'Transparent Pricing',
          description: 'We\'re clear and honest about our pricing.'
        }
      ]
    },
    {
      title: 'Sustainability and Ethics',
      icon: 'pi pi-shield',
      gradientFrom: '#059669',
      gradientTo: '#047857',
      points: [
        {
          title: 'Ethical Marketing',
          description: 'We practice and promote ethical marketing practices.'
        },
        {
          title: 'Sustainable Growth',
          description: 'We focus on growing our business sustainably, prioritizing quality over quantity.'
        },
        {
          title: 'Corporate Social Responsibility',
          description: 'We consider how our agency can give back to the community.'
        }
      ]
    }
  ];


  commitmentValues: any[] = [
    {
      title: 'Long-term Relationships',
      icon: 'pi pi-heart',
      description: 'Building trust and transparency',
      color: '#dc2626'
    },
    {
      title: 'Continuous Learning',
      icon: 'pi pi-graduation-cap',
      description: 'Staying updated with trends',
      color: '#2563eb'
    },
    {
      title: 'Sustainable Growth',
      icon: 'pi pi-chart-line',
      description: 'Quality over quantity focus',
      color: '#059669'
    }
  ];
}
