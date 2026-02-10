import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Reason {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorScheme: 'orange' | 'blue' | 'green' | 'purple' | 'cyan' | 'pink' | 'indigo' | 'amber';
  stats?: string;
  highlight?: string;
}
@Component({
  selector: 'app-why-choosus9',
  imports: [CommonModule],
  templateUrl: './why-choosus9.html',
  styleUrl: './why-choosus9.scss'
})
export class WhyChoosus9 {
  sectionTitle = "Why Choose Pencil Peel IMT for Website Design and Development?";
  sectionSubtitle = "At Pencil Peel IMT, we are committed to delivering high-quality website design and development services that meet the unique needs of our clients.";

  reasons: Reason[] = [
    {
      id: 'expertise',
      title: 'Expertise',
      description: 'We have a team of experienced web designers and developers who are skilled in creating websites that meet the needs of businesses like yours. Our team has extensive experience in website design and development, and we stay up-to-date with the latest technologies and trends.',
      icon: 'pi-verified',
      colorScheme: 'blue',
      stats: '10+ Years Experience',
      highlight: 'Latest Technologies'
    },
    {
      id: 'personalized',
      title: 'Personalized Approach',
      description: 'We understand that every business is unique, and we will work closely with you to understand your specific needs and goals. Our team will take a personalized approach to designing and developing your website, ensuring that it meets your expectations and reflects your brand identity.',
      icon: 'pi-user',
      colorScheme: 'green',
      stats: '100% Customized',
      highlight: 'Brand Identity Focus'
    },
    {
      id: 'innovation',
      title: 'Innovative Solutions',
      description: 'We are committed to delivering innovative solutions that meet the changing needs of businesses in the digital age. Our team is skilled in using the latest technologies and trends to create websites that are modern, efficient, and effective.',
      icon: 'pi-lightbulb',
      colorScheme: 'purple',
      stats: 'Cutting-Edge Tech',
      highlight: 'Future-Ready Solutions'
    },
    {
      id: 'quality',
      title: 'Quality Assurance',
      description: 'We are committed to delivering high-quality websites that meet the needs of our clients. Our team will test and review your website to ensure that it meets our high standards of quality and performance using industry-standard testing tools and methodologies.',
      icon: 'pi-shield',
      colorScheme: 'indigo',
      stats: '99.9% Bug-Free',
      highlight: 'Industry Standards'
    },
    {
      id: 'timely',
      title: 'Timely Delivery',
      description: 'We understand the importance of timely delivery, and we will work closely with you to ensure that your website is delivered on time and within budget. Our team uses project management tools and methodologies to ensure efficient delivery.',
      icon: 'pi-clock',
      colorScheme: 'orange',
      stats: 'On-Time Delivery',
      highlight: 'Project Management'
    },
    {
      id: 'pricing',
      title: 'Competitive Pricing',
      description: 'We offer competitive pricing for our website design and development services, ensuring that you get the best value for your investment. Our team will work closely with you to understand your budget and requirements.',
      icon: 'pi-dollar',
      colorScheme: 'green',
      stats: 'Best Value',
      highlight: 'Budget-Friendly'
    },
    {
      id: 'support',
      title: 'Excellent Customer Support',
      description: 'We are committed to providing excellent customer support to our clients. Our team will be available to answer your questions and concerns, and provide ongoing support and maintenance to ensure that your website remains secure and effective.',
      icon: 'pi-headphones',
      colorScheme: 'cyan',
      stats: '24/7 Support',
      highlight: 'Ongoing Maintenance'
    },
    {
      id: 'improvement',
      title: 'Continuous Improvement',
      description: 'We are committed to continuous improvement, and we will stay up-to-date with the latest technologies and trends to ensure that our services remain relevant and effective. Our team continuously monitors and improves our services.',
      icon: 'pi-refresh',
      colorScheme: 'purple',
      stats: 'Always Updated',
      highlight: 'Latest Trends'
    },
    {
      id: 'results',
      title: 'Results-Driven',
      description: 'We are results-driven, and we will work closely with you to understand your business goals and objectives. Our team will design and develop a website that is optimized for conversions, ensuring that you get the most out of your online presence.',
      icon: 'pi-chart-line',
      colorScheme: 'amber',
      stats: 'ROI Focused',
      highlight: 'Conversion Optimized'
    },
    {
      id: 'trust',
      title: 'Trust and Credibility',
      description: 'We have built a reputation for delivering high-quality website design and development services, and we are committed to maintaining our reputation for trust and credibility. We ensure that your website reflects your brand identity and values.',
      icon: 'pi-star',
      colorScheme: 'pink',
      stats: '500+ Happy Clients',
      highlight: 'Proven Track Record'
    }
  ];

  getColorClasses(colorScheme: string) {
    const colorMap = {
      orange: { bg: 'from-orange-500 to-orange-600', border: 'border-orange-200', text: 'text-orange-600', shadow: 'hover:shadow-orange-500/20' },
      blue: { bg: 'from-blue-500 to-blue-600', border: 'border-blue-200', text: 'text-blue-600', shadow: 'hover:shadow-blue-500/20' },
      green: { bg: 'from-green-500 to-green-600', border: 'border-green-200', text: 'text-green-600', shadow: 'hover:shadow-green-500/20' },
      purple: { bg: 'from-purple-500 to-purple-600', border: 'border-purple-200', text: 'text-purple-600', shadow: 'hover:shadow-purple-500/20' },
      cyan: { bg: 'from-cyan-500 to-cyan-600', border: 'border-cyan-200', text: 'text-cyan-600', shadow: 'hover:shadow-cyan-500/20' },
      pink: { bg: 'from-pink-500 to-pink-600', border: 'border-pink-200', text: 'text-pink-600', shadow: 'hover:shadow-pink-500/20' },
      indigo: { bg: 'from-indigo-500 to-indigo-600', border: 'border-indigo-200', text: 'text-indigo-600', shadow: 'hover:shadow-indigo-500/20' },
      amber: { bg: 'from-amber-500 to-amber-600', border: 'border-amber-200', text: 'text-amber-600', shadow: 'hover:shadow-amber-500/20' }
    };
    return colorMap[colorScheme as keyof typeof colorMap] || colorMap.blue;
  }
}
