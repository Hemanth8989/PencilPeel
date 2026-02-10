import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../../components/nocarouselherosection/nocarouselherosection";
import { FaqCardModel } from '../../../models/FaqCard';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Timeline } from 'primeng/timeline';

@Component({
  selector: 'app-analytics',
  imports: [Nocarouselherosection,CardModule,CommonModule,Timeline],
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss'
})
export class Analytics {
  herocontent = {
  title: `
    Unlock the Power of 
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent font-bold tracking-tight">
      Analytics in Digital Marketing
    </span>
    with 
    <span class="bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'We provide actionable insights and data-driven strategies to improve engagement, optimize campaigns, and grow your business.',
  image: '/dm/services/analytics&reporting.webp' // Replace with your actual image path
};

faqcards:FaqCardModel[] =[
  {
  id: 'analytics-digital-marketing',
  title: 'What is Analytics in Digital Marketing?',
  description: 'It’s the process of collecting and analyzing data to improve digital marketing performance.',
  fullDescription: `
    <div class="space-y-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
      <p>
        <strong>Analytics in digital marketing</strong> is the process of collecting, measuring, analyzing, and interpreting data from digital channels to evaluate and optimize your marketing efforts.
      </p>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Data Collection:</strong> Gather insights from websites, social media, email, and paid campaigns.</li>
        <li><strong>Performance Analysis:</strong> Understand how campaigns are performing and where improvements are needed.</li>
        <li><strong>Optimization:</strong> Make informed, data-driven decisions to improve ROI and marketing effectiveness.</li>
      </ul>
      <p>
        With our expert analytics services, you can unlock powerful insights that drive business growth and better customer engagement.
      </p>
    </div>
  `,
  expanded: false,
  image: '/dm/analytics/what-is-analytics.webp' // Replace with the correct image path
}
]

analyticsSteps = [
    {
      title: 'Data Collection',
      description: 'We gather data from various sources, such as websites, social media platforms, and CRM systems to create a comprehensive data foundation.',
      icon: 'pi pi-database',
      activities: [
        'Website analytics integration',
        'Social media API connections',
        'CRM system data extraction',
        'Email marketing platform sync',
        'Paid advertising data collection'
      ]
    },
    {
      title: 'Data Processing',
      description: 'Our team organizes and cleans the data for accuracy and consistency, ensuring reliable insights and eliminating data inconsistencies.',
      icon: 'pi pi-cog',
      activities: [
        'Data validation and cleaning',
        'Duplicate removal processes',
        'Data standardization protocols',
        'Quality assurance checks',
        'Database optimization'
      ]
    },
    {
      title: 'Data Analysis',
      description: 'We use advanced tools like Google Analytics, Tableau, and Power BI to analyze data for meaningful trends and patterns.',
      icon: 'pi pi-chart-line',
      activities: [
        'Statistical analysis execution',
        'Trend identification processes',
        'Pattern recognition algorithms',
        'Correlation analysis',
        'Predictive modeling'
      ]
    },
    {
      title: 'Visualization & Reporting',
      description: 'Our team presents findings through interactive dashboards, comprehensive charts, and detailed reports to make data comprehensible.',
      icon: 'pi pi-chart-bar',
      activities: [
        'Interactive dashboard creation',
        'Custom report generation',
        'Data visualization design',
        'Executive summary preparation',
        'Automated reporting setup'
      ]
    },
    {
      title: 'Actionable Insights',
      description: 'We transform analysis into strategic recommendations to optimize campaigns, improve user experience, and achieve marketing objectives.',
      icon: 'pi pi-lightbulb',
      activities: [
        'Strategic recommendation development',
        'Campaign optimization planning',
        'ROI improvement strategies',
        'Performance enhancement roadmap',
        'Continuous monitoring setup'
      ]
    }
  ];

}
