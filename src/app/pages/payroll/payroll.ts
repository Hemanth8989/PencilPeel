import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../components/nocarouselquotes/nocarouselquotes';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-payroll',
  imports: [CommonModule, Nocarouselquotes, CardModule],
  templateUrl: './payroll.html',
  styleUrl: './payroll.scss'
})
export class Payroll {

  herocontent = {
    title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                bg-gradient-to-r from-orange-500 via-yellow-400 to-indigo-500  bg-clip-text text-transparent">
      Streamline Your Payroll with Pencil Peel IMT
    </span>
  `,
    description: `At <span class="font-bold text-orange-600">Pencil Peel IMT</span>, we understand the importance of efficient and accurate payroll management for businesses. Our comprehensive payroll process services are designed to help you manage your payroll efficiently, ensuring compliance and accuracy. With our expertise, you can focus on growing your business while we take care of your payroll needs.
  `,
    image: 'dm/payroll1.png'
  };

  quotes = [
    { text: "Precision Payroll for Your Business, Every Time" },
    { text: "Pencil Peel IMT: Your Partner in Payroll Excellence" },
    { text: "Simplify Your Payroll, Elevate Your Business" },
    { text: "Accurate Payroll, Exceptional Service - Pencil Peel IMT" },
    { text: "Payroll Solutions That Drive Business Success" },
    { text: "Streamline Your Payroll, Amplify Your Business Growth with Pencil Peel IMT" },
    { text: "Expert Payroll Solutions for a Thriving Business - Partner with Pencil Peel IMT" },
    { text: "Payroll Made Easy, Accurate, and Efficient with Pencil Peel IMT's Expertise" },
    { text: "Transform Your Payroll Experience with Pencil Peel IMT's Comprehensive Services" }
  ];

  services = [
    { title: 'Payroll Consulting', description: 'We provide expert guidance on payroll strategy, compliance, and optimization to help businesses achieve their goals.', icon: 'pi pi-briefcase' },
    { title: 'Employee Record Management', description: 'Our team ensures accurate and secure maintenance of employee records, including personal data, benefits, and compensation details.', icon: 'pi pi-users' },
    { title: 'Payroll Analytics', description: 'We conduct in-depth analysis of payroll data to identify trends, optimize costs, and improve workforce planning.', icon: 'pi pi-chart-line' },
    { title: 'Compliance Management', description: 'Our team ensures adherence to tax laws, labour regulations, and other statutory requirements to minimize risks and penalties.', icon: 'pi pi-shield' },
    { title: 'Benefits Administration', description: 'We manage employee benefits, including health insurance, retirement plans, and other perks to attract and retain top talent.', icon: 'pi pi-gift' },
    { title: 'Time and Attendance Management', description: 'Our team tracks employee work hours, leave, and attendance to ensure accurate payroll processing.', icon: 'pi pi-clock' },
    { title: 'Tax Preparation and Filing', description: 'We prepare and file tax returns, including income tax, payroll tax, and other statutory taxes to ensure compliance.', icon: 'pi pi-file' },
    { title: 'Payroll Software Implementation', description: 'Our team implements and integrates payroll software solutions to streamline payroll processes and improve efficiency.', icon: 'pi pi-desktop' },
    { title: 'Payroll Outsourcing', description: 'We offer complete outsourcing of payroll processing, including calculation, tax compliance, and payment processing to reduce administrative burdens.', icon: 'pi pi-globe' },
    { title: 'Global Payroll Services', description: 'Our team manages payroll for international employees, including compliance with local laws and regulations to support global business expansion.', icon: 'pi pi-send' },
    { title: 'Cloud-Based Payroll Solutions', description: 'We provide cloud-based payroll software that offers real-time access to payroll data, automated payroll processing, and compliance management.', icon: 'pi pi-cloud' },
    { title: 'Automated Payroll Processing', description: 'Our team automates payroll processes, including calculation, tax compliance, and payment processing to reduce errors and increase efficiency.', icon: 'pi pi-cog' },
    { title: 'Employee Self-Service Portals', description: 'We offer self-service portals for employees to access their payroll information, including pay stubs, tax documents, and benefits details.', icon: 'pi pi-user' },
  ];
}
