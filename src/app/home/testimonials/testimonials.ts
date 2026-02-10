import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule,ButtonModule,CarouselModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
// export class Testimonials {
//   testimonials: any[] = [
//     {
//       type: 'testimonial',
//       title: 'Exceptional Service',
//       content: 'Pencil Peel IMT exceeded our expectations with their innovative approach to digital marketing. Their team\'s expertise and dedication are truly commendable.',
//       author: 'Rahul',
//       position: 'CEO'
//     },
//     {
//       type: 'testimonial', 
//       title: 'Results-Driven',
//       content: 'We saw a significant increase in brand awareness and engagement after partnering with Pencil Peel IMT. Their commitment to our success is evident in every project.',
//       author: 'Priya',
//       position: 'Marketing Manager'
//     },
//     {
//       type: 'testimonial',
//       title: 'Creative Solutions',
//       content: 'Pencil Peel IMT\'s creative solutions helped us launch a successful movie promotion campaign. Their team\'s passion and expertise are unmatched.',
//       author: 'Raj',
//       position: 'Producer'
//     },
//     {
//       type: 'testimonial',
//       title: 'Innovative Approach',
//       content: 'Pencil Peel IMT\'s innovative approach to software development helped us streamline our operations and improve efficiency. Their team\'s expertise is impressive.',
//       author: 'Amit',
//       position: 'CTO'
//     },
//     {
//       type: 'testimonial',
//       title: 'Excellent Customer Service',
//       content: 'Pencil Peel IMT\'s customer service is top-notch. They responded promptly to our queries and delivered exceptional results.',
//       author: 'Sarita',
//       position: 'Marketing Manager'
//     },
//     {
//       type: 'testimonial',
//       title: 'Strategic Partnership',
//       content: 'Pencil Peel IMT has been a valuable partner in our business growth. Their strategic insights and expertise have helped us make informed decisions.',
//       author: 'Rajesh',
//       position: 'CEO'
//     }
//   ];

//   successStories: any[] = [
//     {
//       type: 'success',
//       title: 'Digital Marketing Success',
//       content: 'Pencil Peel IMT helped us boost our online presence through expert digital marketing solutions. Our website traffic increased by 50% in just a few months.',
//       author: 'Amruth Kumar',
//       position: 'Founder',
//       company: 'GHI Start-ups'
//     },
//     {
//       type: 'success',
//       title: 'Event Management Excellence',
//       content: 'Pencil Peel IMT planned and executed a flawless event for our brand launch. Their attention to detail and professionalism are impressive.',
//       author: 'Suresh',
//       position: 'CEO'
//     },
//     {
//       type: 'success',
//       title: 'Brand Promotion',
//       content: 'Pencil Peel IMT\'s creative solutions helped us rebrand our company and increase our customer base. We\'re thrilled with the results.',
//       author: 'Lakshmi',
//       position: 'Marketing Director'
//     },
//     {
//       type: 'success',
//       title: 'AI Technology Integration',
//       content: 'Pencil Peel IMT helped us integrate AI technology into our business operations, resulting in improved efficiency and reduced costs.',
//       author: 'Kiran',
//       position: 'Founder'
//     },
//     {
//       type: 'success',
//       title: 'Influencer Marketing',
//       content: 'Pencil Peel IMT\'s influencer marketing strategies helped us reach a wider audience and increase brand awareness. Their team\'s expertise is unmatched.',
//       author: 'Shalini Priya',
//       position: 'Marketing Manager'
//     },
//     {
//       type: 'success',
//       title: 'Event Management',
//       content: 'Pencil Peel IMT planned and executed a successful event for our company, exceeding our expectations. Their attention to detail and professionalism are impressive.',
//       author: 'Ram Reddy',
//       position: 'CEO'
//     },
//     {
//       type: 'success',
//       title: 'Brand Revamp',
//       content: 'Pencil Peel IMT helped us revamp our brand identity, resulting in a fresh and modern look. Their creative solutions are impressive.',
//       author: 'Lakshmi',
//       position: 'Marketing Director'
//     },
//     {
//       type: 'success',
//       title: 'Digital Transformation',
//       content: 'Pencil Peel IMT helped us transform our digital presence, resulting in improved engagement and conversions. Their expertise is invaluable.',
//       author: 'Rahul',
//       position: 'CEO'
//     }
//   ];

//   responsiveOptions = [
//     {
//       breakpoint: '1199px',
//       numVisible: 3,
//       numScroll: 1
//     },
//     {
//       breakpoint: '991px',
//       numVisible: 2,
//       numScroll: 1
//     },
//     {
//       breakpoint: '767px',
//       numVisible: 1,
//       numScroll: 1
//     }
//   ];

//   getSeverity(type: string): string {
//     return type === 'testimonial' ? 'info' : 'success';
//   }
// }

export class Testimonials {
  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;

  testimonials: any[] = [
    {
      type: 'testimonial',
      title: 'Exceptional Service',
      content: 'Pencil Peel IMT exceeded our expectations with their innovative approach to digital marketing. Their team\'s expertise and dedication are truly commendable.',
      author: 'Rahul',
      position: 'CEO',
      rating: 5
    },
    {
      type: 'testimonial', 
      title: 'Results-Driven',
      content: 'We saw a significant increase in brand awareness and engagement after partnering with Pencil Peel IMT. Their commitment to our success is evident in every project.',
      author: 'Priya',
      position: 'Marketing Manager',
      rating: 5
    },
    {
      type: 'testimonial',
      title: 'Creative Solutions',
      content: 'Pencil Peel IMT\'s creative solutions helped us launch a successful movie promotion campaign. Their team\'s passion and expertise are unmatched.',
      author: 'Raj',
      position: 'Producer',
      rating: 5
    },
    {
      type: 'testimonial',
      title: 'Innovative Approach',
      content: 'Pencil Peel IMT\'s innovative approach to software development helped us streamline our operations and improve efficiency. Their team\'s expertise is impressive.',
      author: 'Amit',
      position: 'CTO',
      rating: 5
    },
    {
      type: 'testimonial',
      title: 'Excellent Customer Service',
      content: 'Pencil Peel IMT\'s customer service is top-notch. They responded promptly to our queries and delivered exceptional results.',
      author: 'Sarita',
      position: 'Marketing Manager',
      rating: 5
    },
    {
      type: 'testimonial',
      title: 'Strategic Partnership',
      content: 'Pencil Peel IMT has been a valuable partner in our business growth. Their strategic insights and expertise have helped us make informed decisions.',
      author: 'Rajesh',
      position: 'CEO',
      rating: 5
    }
  ];

  successStories: any[] = [
    {
      type: 'success',
      title: 'Digital Marketing Success',
      content: 'Pencil Peel IMT helped us boost our online presence through expert digital marketing solutions. Our website traffic increased by 50% in just a few months.',
      author: 'Amruth Kumar',
      position: 'Founder of GHI Start-ups',
      metric: 'Traffic Increase',
      metricValue: '50%'
    },
    {
      type: 'success',
      title: 'Event Management Excellence',
      content: 'Pencil Peel IMT planned and executed a flawless event for our brand launch. Their attention to detail and professionalism are impressive.',
      author: 'Suresh',
      position: 'CEO',
      metric: 'Event Success Rate',
      metricValue: '100%'
    },
    {
      type: 'success',
      title: 'Brand Promotion',
      content: 'Pencil Peel IMT\'s creative solutions helped us rebrand our company and increase our customer base. We\'re thrilled with the results.',
      author: 'Lakshmi',
      position: 'Marketing Director',
      metric: 'Customer Growth',
      metricValue: '75%'
    },
    {
      type: 'success',
      title: 'AI Technology Integration',
      content: 'Pencil Peel IMT helped us integrate AI technology into our business operations, resulting in improved efficiency and reduced costs.',
      author: 'Kiran',
      position: 'Founder',
      metric: 'Cost Reduction',
      metricValue: '30%'
    },
    {
      type: 'success',
      title: 'Influencer Marketing',
      content: 'Pencil Peel IMT\'s influencer marketing strategies helped us reach a wider audience and increase brand awareness. Their team\'s expertise is unmatched.',
      author: 'Shalini Priya',
      position: 'Marketing Manager',
      metric: 'Audience Growth',
      metricValue: '200%'
    },
    {
      type: 'success',
      title: 'Event Management',
      content: 'Pencil Peel IMT planned and executed a successful event for our company, exceeding our expectations. Their attention to detail and professionalism are impressive.',
      author: 'Ram Reddy',
      position: 'CEO',
      metric: 'Client Satisfaction',
      metricValue: '100%'
    },
    {
      type: 'success',
      title: 'Brand Revamp',
      content: 'Pencil Peel IMT helped us revamp our brand identity, resulting in a fresh and modern look. Their creative solutions are impressive.',
      author: 'Lakshmi',
      position: 'Marketing Director',
      metric: 'Brand Recognition',
      metricValue: '80%'
    },
    {
      type: 'success',
      title: 'Digital Transformation',
      content: 'Pencil Peel IMT helped us transform our digital presence, resulting in improved engagement and conversions. Their expertise is invaluable.',
      author: 'Rahul',
      position: 'CEO',
      metric: 'Conversion Rate',
      metricValue: '85%'
    }
  ];
  // Updated case studies data
caseStudies: any[] = [
  {
    title: 'Brand Promotion',
    description: 'Pencil Peel IMT partnered with a leading fashion brand to promote their latest collection. Our team developed a comprehensive marketing strategy, including social media campaigns, influencer partnerships, and event promotions.',
    results: [
      '30% increase in sales',
      '25% increase in social media engagement', 
      'Positive brand recognition and awareness'
    ],
    category: 'Marketing',
    client: 'Fashion Brand',
    image: 'dm/inf/infhome.webp' // Will be populated when you add images
  },
  {
    title: 'Software Development',
    description: 'Pencil Peel IMT helped a start-up company develop a custom software solution to streamline their operations. Our team worked closely with the client to understand their needs and delivered a tailored solution.',
    results: [
      '40% reduction in operational costs',
      '25% increase in productivity',
      'Improved customer satisfaction ratings'
    ],
    category: 'Technology',
    client: 'Tech Startup',
    image: 'sde/devops.webp' // Will be populated when you add images
  },
  {
    title: 'Brand Promotion Excellence',
    description: 'Pencil Peel IMT partnered with a leading fashion brand to promote their latest collection. Our team developed a comprehensive marketing strategy, including social media campaigns, influencer partnerships, and event promotions.',
    results: [
      '30% increase in sales',
      '25% increase in social media engagement',
      'Positive brand recognition and awareness'
    ],
    category: 'Marketing',
    client: 'Retail Company',
    image: 'dm/brandmgt/brandmgthome.webp' // Will be populated when you add images
  }
];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  // Add this new responsive option specifically for case studies
caseStudyResponsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
];


  ngOnInit() {
    this.observeStats();
  }

  private observeStats() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateStats();
            observer.disconnect();
          }
        });
      });

      setTimeout(() => {
        if (this.statsSection?.nativeElement) {
          observer.observe(this.statsSection.nativeElement);
        }
      }, 100);
    }
  }

  private animateStats() {
    if (this.statsSection?.nativeElement) {
      this.statsSection.nativeElement.classList.add('animate-stats');
    }
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  getRatingStars(rating: number): string[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 'filled' : 'empty');
  }
}
