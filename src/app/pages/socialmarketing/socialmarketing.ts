import { Component } from '@angular/core';
import { Nocarouselherosection } from "../../components/nocarouselherosection/nocarouselherosection";
import { FaqCardModel } from '../../models/FaqCard';
import { Faqcards } from "../../components/faqcards/faqcards";
import { WhyUsModel } from '../../models/whyUs';
import { Whyus } from "../../components/whyus/whyus";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { Timeline } from 'primeng/timeline';
import { Services } from '../../components/services/services';

@Component({
  selector: 'app-socialmarketing',
  imports: [Nocarouselherosection, Faqcards, Whyus,ButtonModule,CommonModule,CardModule,AccordionModule,Timeline,Services],
  templateUrl: './socialmarketing.html',
  styleUrl: './socialmarketing.scss'
})
export class Socialmarketing {
  herocontent = {
  title: `
    Unlock the Power of 
    <span class="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent font-bold tracking-tight">
      Social Media Marketing
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>.
  `,
  description: 'We create impactful social media marketing strategies to grow your brand, engage your audience, and drive real conversions across all major platforms.',
  image: '/dm/social/socialhome.webp' // Replace with your actual image path
};

faqcards:FaqCardModel[] = [
  {
  id: 'f2',
  title: 'What is Social Media Marketing?',
  description: 'We promote your business through platforms like Facebook, Instagram, Twitter, LinkedIn, and more to build brand awareness, drive traffic, and generate sales.',
  fullDescription: `
    Social media marketing involves promoting your business using platforms like Facebook, Instagram, Twitter (X), LinkedIn, Pinterest, YouTube, and more. By creating engaging and high-quality content, businesses can build brand awareness, increase traffic, and generate sales. At Pencil Peel IMT, we leverage these platforms to speak for our clients' brands, products, or services, creating a strong online presence and driving customer engagement.<br/><br/>
    <strong>Build Online Reputation:</strong> We help manage your brand’s reputation on social media, ensuring a positive public perception.<br/>
    <strong>Targeted Outreach:</strong> Using data-driven strategies, we ensure your business reaches the right audience, boosting conversions and sales.<br/>
    <strong>Engagement and Interaction:</strong> We actively interact with your followers, building relationships that foster loyalty and brand advocacy.
  `,
  expanded: false,
  image: '/dm/what-social-media-marketing.webp' // Replace with your actual image path
  },
  {
    id: 'f2',
    title: 'The Future of Social Media Marketing ',
    description: `At Pencil Peel IMT, we envision the future of social media marketing as a dynamic and integral part of businesses' digital strategies. `,
    fullDescription: `
      <section class="social-media-marketing">
        <p>
          At <span class="text-orange-500 font-medium">Pencil Peel IMT</span>, we envision the future of social media marketing as a dynamic and integral part of businesses' digital strategies. Social media continues to evolve as a powerful platform for connecting with audiences, building brand awareness, driving engagement, and fostering conversions. We believe that leveraging social media marketing effectively can significantly impact a business's online presence and overall success.
        </p>

        <h3 class="text-2xl font-medium text-center mb-2 text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text animate-gradient-shine">Key Trends in Social Media Marketing that Pencil Peel IMT Focuses On</h3>
        <ul>
          <li><span class="text-orange-500 font-medium">Personalized and Targeted Content:</span> We'll help businesses create personalized content strategies for social media that resonate with their target audiences.</li>
          <li><span class="text-orange-500 font-medium">Integration of AI and Analytics:</span> We'll leverage AI-driven tools and analytics to optimize social media campaigns, enhance engagement, and measure results effectively.</li>
          <li><span class="text-orange-500 font-medium">Video Content and Storytelling:</span> We'll emphasize the use of video content and storytelling in social media marketing to capture audience attention and drive engagement.</li>
          <li><span class="text-orange-500 font-medium">Influencer and Community Engagement:</span> We'll explore strategies for businesses to engage with influencers and build community-driven interactions on social media.</li>
          <li><span class="text-orange-500 font-medium">Adaptability to Platform Changes:</span> We'll stay updated with the latest changes and trends on social media platforms, ensuring that our strategies for clients are always optimized for current best practices.</li>
        </ul>
        <h3 class="text-2xl font-medium text-center my-2 text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text animate-gradient-shine">Growing with Social Media Evolution</h3>
        <p>
          We'll grow with the evolution of social media, adapting strategies to leverage the latest trends, tools, and best practices. With our huge experience and great knowledge in digital marketing and software design and development, we'll deliver impactful social media marketing solutions for businesses.
        </p>
      </section>
    `,
    expanded: false,
    image: '/dm/what-social-media-marketing.webp' // Replace with your actual image path
  },
  {
  id: 'f3',
  title: 'The Power of Social Media Marketing at Pencil Peel IMT',
  description: `At Pencil Peel IMT, we recognize the power of social media marketing as a transformative tool for businesses to connect with their audiences, build brand presence, and drive meaningful engagement.`,
  fullDescription: `
    <section class="social-media-marketing">
      <p>
        At <span class="text-orange-500 font-medium">Pencil Peel IMT</span>, we recognize the power of social media marketing as a transformative tool for businesses to connect with their audiences, build brand presence, and drive meaningful engagement. Social media marketing enables businesses to reach targeted demographics, foster relationships, and achieve their marketing goals in a cost-effective and measurable way.
      </p>

      <h3 class="text-2xl font-medium text-center mb-2 text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text animate-gradient-shine">Key Powers of Social Media Marketing that Pencil Peel IMT Leverages</h3>
      <ul>
        <li><span class="text-orange-500 font-medium">Audience Reach and Targeting:</span> We'll help businesses leverage social media to reach and engage with their target audiences precisely where they are online.</li>
        <li><span class="text-orange-500 font-medium">Brand Awareness and Storytelling:</span> We'll craft strategies for businesses to build brand awareness and tell their stories compellingly on social media.</li>
        <li><span class="text-orange-500 font-medium">Engagement and Community Building:</span> We'll focus on creating engagement-driven strategies to build communities around businesses on social media.</li>
        <li><span class="text-orange-500 font-medium">Measurable Results and Insights:</span> We'll use analytics to measure the effectiveness of social media marketing campaigns and provide actionable insights for optimization.</li>
        <li><span class="text-orange-500 font-medium">Cost-Effective and Scalable:</span> We'll help businesses leverage the cost-effectiveness and scalability of social media marketing to achieve their goals.</li>
      </ul>

      <h3 class="text-2xl font-medium text-center my-2 text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text animate-gradient-shine">Unlocking Potential with Pencil Peel IMT</h3>
      <p>
        We'll help unlock the potential of social media marketing for your business, leveraging our expertise to craft strategies that drive results. With our huge experience and great knowledge in digital marketing and software design and development, we'll deliver effective social media marketing solutions tailored to your needs.
      </p>
    </section>
  `,
  expanded: false,
  image: '/dm/social-media-power.webp' // Replace with actual image path
}
]

whyUs:WhyUsModel = {
  title:'Benefits of Social Media Marketing with Pencil Peel IMT',
  description:`At Pencil Peel IMT, we've seen first-hand the impact that social media marketing can have on businesses. Here are some benefits of using social media marketing for your business`,
  List:[
  {
    icon: 'pi pi-users',
    title: 'Increased Brand Awareness',
    description: 'Reach a vast audience and get your brand in front of the right people.',
    background: 'bg-green-500',
    border: 'border-green-500'
  },
  {
    icon: 'pi pi-comments',
    title: 'Improved Engagement',
    description: 'Engage with your target audience and build a community around your brand.',
    background: 'bg-yellow-500',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-globe',
    title: 'Website Traffic',
    description: 'Drive traffic to your website and increase conversions.',
    background: 'bg-blue-500',
    border: 'border-blue-500'
  },
  {
    icon: 'pi pi-dollar',
    title: 'Sales',
    description: 'Generate sales and revenue through targeted advertising and promotions.',
    background: 'bg-purple-500',
    border: 'border-purple-500'
  },
  {
    icon: 'pi pi-flag',
    title: 'Market Growth',
    description: 'Expand your market reach and increase your customer base.',
    background: 'bg-orange-500',
    border: 'border-orange-500'
  },
  {
    icon: 'pi pi-heart',
    title: 'Customer Loyalty',
    description: 'Build strong relationships with your customers and increase loyalty.',
    background: 'bg-pink-500',
    border: 'border-pink-500'
  },
  {
    icon: 'pi pi-star',
    title: 'Competitive Advantage',
    description: 'Stand out from your competitors and establish your brand as an industry leader.',
    background: 'bg-teal-500',
    border: 'border-teal-500'
  },
  {
    icon: 'pi pi-money-bill',
    title: 'Cost-Effective',
    description: 'Social media marketing can be more cost-effective than traditional forms of advertising.',
    background: 'bg-indigo-500',
    border: 'border-indigo-500'
  },
  {
    icon: 'pi pi-refresh',
    title: 'Real-Time Feedback',
    description: 'Get instant feedback from your audience and adjust your strategy accordingly.',
    background: 'bg-cyan-500',
    border: 'border-cyan-500'
  },
  {
    icon: 'pi pi-chart-line',
    title: 'Data-Driven Insights',
    description: 'Get valuable insights into your audience\'s behaviour and preferences.',
    background: 'bg-red-500',
    border: 'border-red-500'
  },
  {
    icon: 'pi pi-pencil',
    title: 'Improved Brand Identity',
    description: 'Showcase your brand\'s personality and values through visual content.',
    background: 'bg-yellow-600',
    border: 'border-yellow-600'
  },
  {
    icon: 'pi pi-check',
    title: 'Increased Conversions',
    description: 'Drive conversions and sales through social media ads and promotions.',
    background: 'bg-pink-600',
    border: 'border-pink-600'
  },
  {
    icon: 'pi pi-comments',
    title: 'Enhanced Customer Service',
    description: 'Provide customer support and respond to customer inquiries in real-time.',
    background: 'bg-green-600',
    border: 'border-green-600'
  },
  {
    icon: 'pi pi-megaphone',
    title: 'Targeted Advertising',
    description: 'Reach your ideal audience with social media ads and drive conversions.',
    background: 'bg-blue-600',
    border: 'border-blue-600'
  },
  {
    icon: 'pi pi-chart-bar',
    title: 'Measurable ROI',
    description: 'Track and measure the return on investment (ROI) of your social media marketing efforts.',
    background: 'bg-teal-600',
    border: 'border-teal-600'
  },
  {
    icon: 'pi pi-shield',
    title: 'Increased Brand Credibility',
    description: 'Establish your brand as a thought leader in your industry.',
    background: 'bg-orange-600',
    border: 'border-orange-600'
  },
  {
    icon: 'pi pi-search',
    title: 'Improved Search Engine Rankings',
    description: 'Increase your website\'s search engine rankings through social media signals.',
    background: 'bg-purple-600',
    border: 'border-purple-600'
  },
  {
    icon: 'pi pi-eye',
    title: 'Better Customer Insights',
    description: 'Get a deeper understanding of your target audience\'s needs and preferences.',
    background: 'bg-red-600',
    border: 'border-red-600'
  },
  {
    icon: 'pi pi-link',
    title: 'Increased Website Engagement',
    description: 'Increase engagement on your website through social media-driven traffic.',
    background: 'bg-yellow-500',
    border: 'border-yellow-500'
  },
  {
    icon: 'pi pi-heart',
    title: 'Social Proof',
    description: 'Build social proof and credibility through customer testimonials and reviews.',
    background: 'bg-cyan-500',
    border: 'border-cyan-500'
  }
]

}
servicetitle:string = `Our Social Media Marketing Services`;
socialMediaServices = [
    {
      title: 'Social Media Strategy Development',
      icon: 'pi pi-bolt',
      iconColor: 'text-yellow-500',
      accentColor: 'yellow',
      borderColor: 'border-yellow-400',
      details: [
        {
          title: 'Customized Strategy',
          icon: 'pi pi-user-edit',
          description: 'We create a tailored social media marketing strategy to meet your unique business needs.'
        },
        {
          title: 'Goal Setting',
          icon: 'pi pi-flag',
          description: 'We work with you to set and achieve specific social media marketing goals.'
        },
        {
          title: 'Target Audience Identification',
          icon: 'pi pi-users',
          description: 'We identify your target audience and develop a strategy to reach them.'
        }
      ]
    },
    {
      title: 'Content Creation',
      icon: 'pi pi-image',
      iconColor: 'text-blue-500',
      accentColor: 'blue',
      borderColor: 'border-blue-400',
      details: [
        {
          title: 'High-Quality Content',
          icon: 'pi pi-palette',
          description: 'We create high-quality, engaging content that resonates with your target audience.'
        },
        {
          title: 'Content Calendar',
          icon: 'pi pi-calendar',
          description: 'We develop a content calendar to ensure consistent posting and minimize gaps in content.'
        },
        {
          title: 'Visual Content',
          icon: 'pi pi-camera',
          description: 'We create visually appealing content, including graphics, videos, and photos.'
        }
      ]
    },
    {
      title: 'Social Media Advertising',
      icon: 'pi pi-megaphone',
      iconColor: 'text-red-500',
      accentColor: 'red',
      borderColor: 'border-red-400',
      details: [
        {
          title: 'Targeted Advertising',
          icon: 'pi pi-bullseye',
          description: 'We utilize social media ads to reach your ideal audience and drive conversions.'
        },
        {
          title: 'AD Creation',
          icon: 'pi pi-pencil',
          description: 'We create compelling ad copy and visuals that drive results.'
        },
        {
          title: 'Budget Management',
          icon: 'pi pi-chart-line',
          description: 'We manage your ad budget to ensure optimal ROI.'
        }
      ]
    },
    {
      title: 'Influencer Partnerships',
      icon: 'pi pi-star',
      iconColor: 'text-purple-500',
      accentColor: 'purple',
      borderColor: 'border-purple-400',
      details: [
        {
          title: 'Influencer Identification',
          icon: 'pi pi-search',
          description: 'We identify influencers who align with your brand values and target audience.'
        },
        {
          title: 'Partnership Development',
          icon: 'pi pi-handshake',
          description: 'We develop partnerships with influencers to expand your reach and credibility.'
        },
        {
          title: 'Content Creation',
          icon: 'pi pi-images',
          description: 'We create high-quality content for influencer partnerships.'
        }
      ]
    },
    {
      title: 'Performance Tracking & Analysis',
      icon: 'pi pi-chart-bar',
      iconColor: 'text-green-500',
      accentColor: 'green',
      borderColor: 'border-green-400',
      details: [
        {
          title: 'Performance Monitoring',
          icon: 'pi pi-eye',
          description: 'We monitor your social media performance and track key metrics.'
        },
        {
          title: 'Data Analysis',
          icon: 'pi pi-table',
          description: 'We analyse data to provide insights and recommendations for improvement.'
        },
        {
          title: 'Strategy Refining',
          icon: 'pi pi-refresh',
          description: 'We refine your social media strategy based on performance data to ensure optimal results.'
        }
      ]
    }
];
processSteps = [
  {
    step: 'Step 1',
    title: 'Discovery',
    icon: 'pi pi-search',
    markerColor: 'bg-blue-500',
    badgeColor: 'bg-blue-100 text-blue-800',
    details: [
      {
        title: 'Learning about your business',
        description: 'We take the time to understand your business, goals, and target audience.'
      },
      {
        title: 'Identifying opportunities',
        description: 'We identify opportunities for social media marketing to drive growth and conversions.'
      }
    ]
  },
  {
    step: 'Step 2',
    title: 'Strategy Development',
    icon: 'pi pi-cog',
    markerColor: 'bg-purple-500',
    badgeColor: 'bg-purple-100 text-purple-800',
    details: [
      {
        title: 'Customized strategy',
        description: 'We create a tailored social media marketing strategy to meet your unique business needs.'
      },
      {
        title: 'Goal setting',
        description: 'We work with you to set and achieve specific social media marketing goals.'
      }
    ]
  },
  {
    step: 'Step 3',
    title: 'Content Creation',
    icon: 'pi pi-palette',
    markerColor: 'bg-green-500',
    badgeColor: 'bg-green-100 text-green-800',
    details: [
      {
        title: 'High-quality content',
        description: 'We create high-quality, engaging content that resonates with your target audience.'
      },
      {
        title: 'Content calendar',
        description: 'We develop a content calendar to ensure consistent posting and minimize gaps in content.'
      }
    ]
  },
  {
    step: 'Step 4',
    title: 'Advertising',
    icon: 'pi pi-megaphone',
    markerColor: 'bg-red-500',
    badgeColor: 'bg-red-100 text-red-800',
    details: [
      {
        title: 'Targeted advertising',
        description: 'We utilize social media ads to reach your ideal audience and drive conversions.'
      },
      {
        title: 'Ad creation',
        description: 'We create compelling ad copy and visuals that drive results.'
      }
    ]
  },
  {
    step: 'Step 5',
    title: 'Performance Tracking',
    icon: 'pi pi-chart-line',
    markerColor: 'bg-indigo-500',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    details: [
      {
        title: 'Monitoring performance',
        description: 'We monitor your social media performance and track key metrics.'
      },
      {
        title: 'Data analysis',
        description: 'We analyse data to provide insights and recommendations for improvement.'
      },
      {
        title: 'Strategy refinement',
        description: 'We refine your social media strategy based on performance data to ensure optimal results.'
      }
    ]
  },
  {
    step: 'Ongoing',
    title: 'Ongoing Support',
    icon: 'pi pi-heart',
    markerColor: 'bg-yellow-500',
    badgeColor: 'bg-yellow-100 text-yellow-800',
    details: [
      {
        title: 'Regular updates',
        description: 'We provide regular updates on your social media performance and strategy.'
      },
      {
        title: 'Optimization',
        description: 'We continuously optimize your social media strategy to ensure it remains effective and efficient.'
      },
      {
        title: 'Support',
        description: "We're always available to answer questions and provide support."
      }
    ]
  }
];
productCategories = [
  {
    category: 'Fashion & Apparel',
    displayName: 'Fashion & Apparel Products',
    icon: 'pi pi-shopping-bag',
    iconBg: 'bg-pink-500',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
    image: '/dm/industries/iretail.webp',
    imageAlt: 'Fashion & Apparel Products',
    items: [
      {
        title: 'Clothing and Accessories',
        description: "We'll create engaging content that showcases your fashion brand's latest trends, styles, and collections."
      },
      {
        title: 'Footwear and Handbags',
        description: 'Our team will highlight the quality, comfort, and style of your footwear and handbags to attract fashion-conscious customers.'
      }
    ]
  },
  {
    category: 'Beauty & Skincare',
    displayName: 'Beauty & Skincare Products',
    icon: 'pi pi-heart',
    iconBg: 'bg-rose-500',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
    image: '/dm/industries/ipharma.webp',
    imageAlt: 'Beauty & Skincare Products',
    items: [
      {
        title: 'Cosmetics and Skincare Products',
        description: "We'll create visually appealing content that showcases your beauty and skincare products, highlighting their benefits and features."
      },
      {
        title: 'Makeup and Hair care',
        description: 'Our team will collaborate with influencers and experts to showcase your makeup and hair care products and provide tips and tutorials.'
      }
    ]
  },
  {
    category: 'Electronics & Gadgets',
    displayName: 'Electronics & Technology',
    icon: 'pi pi-mobile',
    iconBg: 'bg-blue-500',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    image: '/dm/industries/imanufacturer.webp',
    imageAlt: 'Electronics & Gadgets',
    items: [
      {
        title: 'Smartphones and Laptops',
        description: "We'll create engaging content that highlights the features, benefits, and latest technology trends in smartphones and laptops."
      },
      {
        title: 'Gaming Consoles and Accessories',
        description: 'Our team will showcase your gaming consoles and accessories, highlighting their performance, features, and gaming experiences.'
      }
    ]
  },
  {
    category: 'Food & Beverage',
    displayName: 'Food & Beverage Products',
    icon: 'pi pi-shopping-cart',
    iconBg: 'bg-orange-500',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    image: '/dm/industries/ibar.webp',
    imageAlt: 'Food & Beverage Products',
    items: [
      {
        title: 'Food Products and Recipes',
        description: "We'll create mouth-watering content that showcases your food products, recipes, and cooking tips."
      },
      {
        title: 'Beverages and Drinks',
        description: 'Our team will highlight the quality, taste, and benefits of your beverages, such as coffee, tea, or juice.'
      }
    ]
  },
  {
    category: 'Home & Garden',
    displayName: 'Home & Garden Products',
    icon: 'pi pi-home',
    iconBg: 'bg-green-500',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    image: '/dm/industries/imedspa.webp',
    imageAlt: 'Home & Garden Products',
    items: [
      {
        title: 'Furniture and Decor',
        description: "We'll create visually appealing content that showcases your furniture and decor products, highlighting their quality, style, and functionality."
      },
      {
        title: 'Home Improvement and DIY',
        description: 'Our team will provide tips, tutorials, and inspiration for home improvement and DIY projects.'
      }
    ]
  },
  {
    category: 'Health & Wellness',
    displayName: 'Health & Wellness Products',
    icon: 'pi pi-heart-fill',
    iconBg: 'bg-teal-500',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
    image: '/dm/industries/fitness.webp',
    imageAlt: 'Health & Wellness Products',
    items: [
      {
        title: 'Fitness and Nutrition',
        description: "We'll create content that showcases your fitness and nutrition products, highlighting their benefits and features."
      },
      {
        title: 'Wellness and Self-Care',
        description: 'Our team will highlight the importance of wellness and self-care, showcasing your products and services that promote relaxation and rejuvenation.'
      }
    ]
  }
];
serviceCategories = [
  {
    category: 'Healthcare Services',
    displayName: 'Healthcare Department',
    icon: 'pi pi-heart-fill',
    iconBg: 'bg-red-500',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    image: '/dm/industries/ihospital.webp',
    imageAlt: 'Healthcare Industry',
    items: [
      {
        title: 'Hospitals and Clinics',
        description: 'We help hospitals and clinics build a strong brand presence and establish trust with potential patients.'
      },
      {
        title: 'Pharmaceutical Companies',
        description: 'Our team creates brand management strategies that showcase the benefits and features of pharmaceutical products.'
      }
    ]
  },
  {
    category: 'Education Services',
    displayName: 'Education Department',
    icon: 'pi pi-book',
    iconBg: 'bg-indigo-500',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
    image: '/dm/industries/ieducation.webp',
    imageAlt: 'Education Industry',
    items: [
      {
        title: 'Online Courses',
        description: "We'll create content that showcases your online courses, highlighting their benefits and features."
      },
      {
        title: 'Tutoring Services',
        description: 'Our team will promote your tutoring services, highlighting your expertise and qualifications.'
      }
    ]
  },
  {
    category: 'Financial Services',
    displayName: 'Financial Department',
    icon: 'pi pi-dollar',
    iconBg: 'bg-emerald-500',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
    image: '/dm/industries/ifinancial.webp',
    imageAlt: 'Financial Services Industry',
    items: [
      {
        title: 'Banking and Insurance',
        description: "We'll create content that showcases your banking and insurance services, highlighting their benefits and features."
      },
      {
        title: 'Investment Services',
        description: 'Our team will promote your investment services, highlighting the potential for growth and returns.'
      }
    ]
  },
  {
    category: 'Travel & Hospitality',
    displayName: 'Travel & Hospitality Department',
    icon: 'pi pi-map',
    iconBg: 'bg-cyan-500',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
    image: '/dm/industries/travel.webp',
    imageAlt: 'Travel & Hospitality Industry',
    items: [
      {
        title: 'Hotels and Resorts',
        description: "We'll create engaging content that showcases your hotels and resorts, highlighting their amenities and services."
      },
      {
        title: 'Travel Agencies',
        description: 'Our team will promote your travel agencies, highlighting the benefits of booking with you.'
      }
    ]
  },
  {
    category: 'Fitness & Wellness',
    displayName: 'Fitness & Wellness Department',
    icon: 'pi pi-heart',
    iconBg: 'bg-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    image: '/dm/industries/fitness.webp',
    imageAlt: 'Fitness & Wellness Industry',
    items: [
      {
        title: 'Gyms and Fitness Studios',
        description: "We'll create content that showcases your fitness services, highlighting your expertise and facilities."
      },
      {
        title: 'Wellness Centres',
        description: 'Our team will promote your wellness centres, highlighting the benefits of your services for relaxation and rejuvenation.'
      }
    ]
  },
  {
    category: 'Professional Services',
    displayName: 'Professional Services Department',
    icon: 'pi pi-briefcase',
    iconBg: 'bg-gray-600',
    iconColor: 'text-gray-600',
    borderColor: 'border-gray-500',
    image: '/dm/industries/professional.webp',
    imageAlt: 'Professional Services Industry',
    items: [
      {
        title: 'Law Firms',
        description: "We'll create content that showcases your law firm's expertise and services."
      },
      {
        title: 'Consulting Services',
        description: 'Our team will promote your consulting services, highlighting your expertise and qualifications.'
      }
    ]
  },
  {
    category: 'Real Estate Services',
    displayName: 'Real Estate Department',
    icon: 'pi pi-building',
    iconBg: 'bg-amber-600',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-500',
    image: '/dm/industries/construction.webp',
    imageAlt: 'Real Estate Services Industry',
    items: [
      {
        title: 'Property Listings',
        description: "We'll create engaging content that showcases your property listings, highlighting their features and benefits."
      },
      {
        title: 'Real Estate Agents',
        description: 'Our team will promote your real estate agents, highlighting their expertise and qualifications.'
      }
    ]
  }
];
services: any[] = [
  {
    title: "Facebook Marketing",
    description: "We create and manage Facebook pages, ads, and groups to connect with your target audience and boost brand visibility.",
    image: "/dm/social/facebookm.webp",
    link: "/socialmediamarketing/facebook",
    icon: "pi pi-facebook"
  },
  {
    title: "Instagram Marketing",
    description: "We develop Instagram strategies, create engaging content, and manage ads to grow your presence and increase engagement.",
    image: "/dm/social/instagram.webp",
    link: "/socialmediamarketing/instagram",
    icon: "pi pi-instagram"
  },
  {
    title: "Twitter Marketing",
    description: "We manage Twitter accounts, craft impactful tweets, and run targeted ads to boost engagement and drive conversions.",
    image: "/dm/social/twitterm.webp",
    link: "/socialmediamarketing/twitter",
    icon: "pi pi-twitter"
  },
  {
    title: "LinkedIn Marketing",
    description: "We leverage LinkedIn for B2B success by managing company pages, sponsored content, and targeted advertising.",
    image: "/dm/social/linkedln.webp",
    link: "/socialmediamarketing/linkedln",
    icon: "pi pi-linkedin"
  },
  {
    title: "YouTube Marketing",
    description: "We create and manage YouTube channels, video content, and ad campaigns to engage audiences and grow your brand.",
    image: "/dm/social/youtubem.webp",
    link: "/socialmediamarketing/youtube",
    icon: "pi pi-youtube"
  },
  {
    title: "WhatsApp Marketing",
    description: "We implement WhatsApp strategies, from automated replies to broadcast campaigns, to enhance direct customer communication.",
    image: "/dm/social/whatsappm.webp",
    link: "/socialmediamarketing/whatsapp",
    icon: "pi pi-whatsapp"
  },
  {
    title: "Snapchat Marketing",
    description: "We create Snapchat ads, custom filters, and stories that connect with younger audiences and build brand awareness.",
    image: "/dm/social/snapchatm.webp",
    link: "/socialmediamarketing/snapchat",
    icon: "pi pi-snapchat"
  },
  {
    title: "In-App Marketing",
    description: "We deliver personalized messages, push notifications, and promotions inside your app to boost user engagement and retention.",
    image: "/social/app/inappbanner.webp",
    link: "/socialmediamarketing/inapp",
    icon: "pi pi-mobile"
  }
];
}
