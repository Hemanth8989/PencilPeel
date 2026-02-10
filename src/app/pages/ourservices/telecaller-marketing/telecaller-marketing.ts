import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-telecaller-marketing',
  imports: [CommonModule, Nocarouselquotes, CardModule],
  templateUrl: './telecaller-marketing.html',
  styleUrl: './telecaller-marketing.scss'
})
export class TelecallerMarketing {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/telecaller.png',
      title: `
      Unlock your Telecaller Marketing Services with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: `At Pencil Peel IMT, we specialize in providing top-notch Telecaller Marketing services to businesses across various industries. Our team of experienced professionals is dedicated to delivering high-quality services that drive growth and success for our clients.`
    };

  quotes = [
    { text: "Boost leads and conversions with our expert Telecaller Marketing Services." },
    { text: "Connect with customers directly through effective Telecaller Marketing." },
    { text: "Drive results with targeted and personalized Telecaller Marketing Services." },
    { text: "Enhance customer engagement and outreach with our Telecaller Marketing expertise." },
    { text: "Maximize outreach impact with our strategic Telecaller Marketing Services." }
  ];
  
  services = [
    { icon: 'pi pi-users', title: 'Lead Generation',
      desc: 'We generate high-quality leads for businesses, helping them identify potential customers and drive sales through effective Telecaller Marketing strategies.' },

    { icon: 'pi pi-calendar-plus', title: 'Appointment Setting',
      desc: 'We set appointments with potential customers, ensuring that sales teams meet with qualified leads to maximize conversion opportunities.' },

    { icon: 'pi pi-refresh', title: 'Customer Follow-up',
      desc: 'We follow up with customers to ensure they are satisfied with products or services, enhancing engagement and loyalty.' },

    { icon: 'pi pi-search', title: 'Market Research',
      desc: 'We conduct market research to help businesses understand their target audience and identify new opportunities for growth.' },

    { icon: 'pi pi-megaphone', title: 'Sales Promotion',
      desc: 'We promote products or services to potential customers through Telecaller Marketing, driving sales and revenue growth.' },

    { icon: 'pi pi-inbox', title: 'Inbound Telemarketing',
      desc: 'We provide inbound telemarketing services, handling customer inquiries and providing support to existing customers.' },

    { icon: 'pi pi-external-link', title: 'Outbound Telemarketing',
      desc: 'We offer outbound telemarketing services, contacting potential customers to promote products or services, generate leads, and drive sales.' },

    { icon: 'pi pi-shopping-cart', title: 'Telesales',
      desc: 'We provide telesales services, selling products or services directly to customers over the phone.' },

    { icon: 'pi pi-check-circle', title: 'Lead Qualification',
      desc: 'We qualify leads for businesses, ensuring that only high-quality leads are passed on to the sales team for maximum efficiency.' },

    { icon: 'pi pi-user-plus', title: 'Customer Retention',
      desc: 'We provide customer retention services, helping businesses retain existing customers and prevent churn.' },

    { icon: 'pi pi-angle-double-up', title: 'Upselling and Cross-Selling',
      desc: 'We promote additional products or services to existing customers, enhancing revenue through upselling and cross-selling.' },

    { icon: 'pi pi-comments', title: 'Survey and Feedback',
      desc: 'We conduct surveys and gather feedback from customers, providing valuable insights to improve business strategies.' },

    { icon: 'pi pi-calendar', title: 'Appointment Confirmation',
      desc: 'We confirm appointments with potential customers, ensuring that sales teams meet with qualified leads.' },

    { icon: 'pi pi-sliders-h', title: 'Lead Nurturing',
      desc: 'We nurture leads for businesses, building relationships and guiding potential customers through the sales process.' },

    { icon: 'pi pi-globe', title: 'Multilingual Support',
      desc: 'We provide multilingual support, offering customer service and sales support in multiple languages for diverse audiences.' }
  ];

  benefits = [
    { 
      title: 'Increased Sales', 
      desc: 'Our Telecaller Marketing services are designed to help businesses drive sales and revenue growth. By leveraging our expertise in targeted outreach and sales promotion, we help you convert leads into customers.', 
      icon: 'pi pi-chart-line'
    },
    { 
      title: 'Improved Customer Relationships', 
      desc: 'At Pencil Peel IMT, we focus on building relationships with customers through our Telecaller Marketing services. This improves customer satisfaction and loyalty, leading to long-term business relationships.', 
      icon: 'pi pi-users'
    },
    { 
      title: 'Market Insights', 
      desc: 'Our market research services as part of Telecaller Marketing provide businesses with valuable insights into their target audience. This helps you make informed decisions and tailor your strategies for better results.', 
      icon: 'pi pi-search'
    },
    { 
      title: 'Cost-Effective', 
      desc: 'Our Telecaller Marketing services at Pencil Peel IMT are cost-effective, providing businesses with a high return on investment. We help you achieve your marketing goals without breaking the budget.', 
      icon: 'pi pi-wallet'
    },
    { 
      title: 'Enhanced Lead Generation', 
      desc: 'Our Telecaller Marketing services help businesses generate high-quality leads through targeted outreach and effective communication.', 
      icon: 'pi pi-phone'
    },
    { 
      title: 'Improved Conversion Rates', 
      desc: 'By leveraging our expertise in Telecaller Marketing, we help businesses convert more leads into customers, driving revenue growth.', 
      icon: 'pi pi-arrow-right-arrow-left'
    },
    { 
      title: 'Personalized Customer Interactions', 
      desc: 'We enable personalized interactions with customers through our Telecaller Marketing services, enhancing customer experience and engagement.', 
      icon: 'pi pi-id-card'
    },
    { 
      title: 'Efficient Use of Resources', 
      desc: 'Our Telecaller Marketing services help businesses optimize their resources by focusing on targeted outreach and lead generation, maximizing efficiency.', 
      icon: 'pi pi-sliders-h'
    },
    { 
      title: 'Scalability', 
      desc: 'Pencil Peel IMT\'s Telecaller Marketing services can scale according to your business needs, helping you adapt to changing market conditions or business goals.', 
      icon: 'pi pi-arrows-alt'
    },
    { 
      title: 'Data-Driven Decision Making', 
      desc: 'We provide insights and data on the performance of our Telecaller Marketing campaigns, helping you make informed decisions for future strategies.', 
      icon: 'pi pi-database'
    },
  ];

  closing = `By partnering with Pencil Peel IMT for Telecaller Marketing services, you can leverage these benefits to drive business growth, improve customer relationships, gain market insights, achieve a high return on investment, and more. Contact us today to learn more about how our Telecaller Marketing services can benefit your business and help you achieve your goals.`;


  promotionSteps = [
    {
      title: 'Targeted Outreach',
      desc: 'We identify and reach out to potential customers who are likely to be interested in your brand, product, or company through targeted Telecaller Marketing campaigns.',
      icon: 'pi pi-bullseye'
    },
    {
      title: 'Personalized Communication',
      desc: 'Our Telecaller Marketing services involve personalized communication with potential customers, highlighting the benefits and value of your products or services.',
      icon: 'pi pi-comment'
    },
    {
      title: 'Product/Service Promotion',
      desc: 'We promote your products or services to potential customers through effective Telecaller Marketing strategies, driving interest and engagement.',
      icon: 'pi pi-briefcase'
    },
    {
      title: 'Lead Generation and Follow-up',
      desc: 'We generate leads and follow up with potential customers to nurture relationships and drive conversions for your business.',
      icon: 'pi pi-phone'
    },
    {
      title: 'Building Relationships',
      desc: 'Through effective Telecaller Marketing, we focus on building and nurturing relationships with customers, enhancing customer satisfaction and loyalty to your brand.',
      icon: 'pi pi-users'
    },
  ];

  promotionBenefits = [
    {
      title: 'Direct Connection with Customers',
      desc: 'Telecaller Marketing allows for a direct connection with customers, enabling personalized communication and immediate feedback about your brand.',
      icon: 'pi pi-link'
    },
    {
      title: 'Driving Engagement and Conversions',
      desc: 'Our services help drive engagement with your brand and convert leads into customers through targeted and effective Telecaller Marketing strategies.',
      icon: 'pi pi-chart-line'
    }
  ];


  process = [
    {
      title: 'Targeted Outreach',
      body: 'We identify and reach out to potential customers who are likely to be interested in your brand, product, or company through targeted Telecaller Marketing campaigns.'
    },
    {
      title: 'Personalized Communication',
      body: 'Our Telecaller Marketing services involve personalized communication with potential customers, highlighting the benefits and value of your products or services.'
    },
    {
      title: 'Product/Service Promotion',
      body: 'We promote your products or services to potential customers through effective Telecaller Marketing strategies, driving interest and engagement.'
    },
    {
      title: 'Lead Generation and Follow-up',
      body: 'We generate leads and follow up with potential customers to nurture relationships and drive conversions for your business.'
    },
    {
      title: 'Building Relationships',
      body: 'Through effective Telecaller Marketing, we focus on building and nurturing relationships with customers, enhancing customer satisfaction and loyalty to your brand.'
    }
  ];

  // renamed heading
  impactHeading = `Impact of Pencil Peel IMT's Telecaller Marketing Services on Your Brand Promotion`;

  impactPoints = [
    'Direct Connection with Customers: Telecaller Marketing allows for a direct connection with customers, enabling personalized communication and immediate feedback about your brand.',
    'Driving Engagement and Conversions: Our services help drive engagement with your brand and convert leads into customers through targeted and effective Telecaller Marketing strategies.'
  ];

  industries = [
    {
      icon: 'pi pi-heart',
      title: 'Healthcare Industry',
      points: [
        'Generate leads for medical services: doctor appointments, surgeries, wellness programs.',
        'Promote health and wellness programs to improve patient engagement.',
        'Improve patient loyalty through personalized support and care.'
      ],
      color: 'from-sky-500 to-cyan-500'
    },
    {
      icon: 'pi pi-wallet',
      title: 'Finance Sector',
      points: [
        'Generate leads for financial products like loans, credit cards, and investments.',
        'Promote banking and investment services to grow brand awareness.',
        'Improve acquisition and retention with personalized support.'
      ],
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: 'pi pi-home',
      title: 'Real Estate Industry',
      points: [
        'Generate leads for property sales and rentals.',
        'Promote properties and real estate services to buyers and renters.',
        'Increase sales and revenue growth with targeted campaigns.'
      ],
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: 'pi pi-desktop',
      title: 'Technology Sector',
      points: [
        'Generate leads for software and hardware products.',
        'Promote IT services and digital solutions to businesses.',
        'Improve customer satisfaction through personalized support.'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'pi pi-shopping-cart',
      title: 'E-commerce Industry',
      points: [
        'Generate leads for online products.',
        'Promote e-commerce products and services.',
        'Increase online sales and revenue growth with campaigns.'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'pi pi-shield',
      title: 'Insurance Sector',
      points: [
        'Promote insurance products and generate qualified leads.',
        'Explain policy benefits to potential clients.',
        'Build trust and long-term relationships with customers.'
      ],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: 'pi pi-book',
      title: 'Education Sector',
      points: [
        'Promote educational courses and programs.',
        'Generate leads from prospective students.',
        'Provide support for admissions and queries.'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'pi pi-send',
      title: 'Travel and Tourism',
      points: [
        'Promote travel packages for agencies and operators.',
        'Generate leads for tours and holiday bookings.',
        'Provide customer support for travelers.'
      ],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: 'pi pi-car',
      title: 'Automotive Industry',
      points: [
        'Promote vehicles and automotive services.',
        'Generate leads for dealerships.',
        'Support car buyers with follow-ups.'
      ],
      color: 'from-blue-500 to-sky-500'
    },
    {
      icon: 'pi pi-shopping-bag',
      title: 'Retail Industry',
      points: [
        'Promote retail products and offers.',
        'Generate leads for brick-and-mortar and online retail.',
        'Drive customer connections and sales growth.'
      ],
      color: 'from-purple-500 to-fuchsia-500'
    }
  ];

  industryImpactHeading = "Our Impact Across Industries";
  industryImpact = [
    {
      icon: 'pi pi-bullseye',
      text: 'Targeted Outreach: We conduct targeted outreach to potential customers in these industries, promoting relevant products or services.'
    },
    {
      icon: 'pi pi-users',
      text: 'Lead Generation and Conversion: Our services help generate leads and drive conversions for businesses in these sectors.'
    },
    {
      icon: 'pi pi-comments',
      text: 'Enhanced Customer Engagement: Through customer support and follow-up, we help businesses build relationships with customers in these industries.'
    }
  ];

}
