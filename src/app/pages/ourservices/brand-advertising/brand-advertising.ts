import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-brand-advertising',
  imports: [CommonModule,Nocarouselquotes,CardModule, ButtonModule, AccordionModule],
  templateUrl: './brand-advertising.html',
  styleUrl: './brand-advertising.scss'
})
export class BrandAdvertising {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/brandadv.png',
      title: `
      Unlock Your
      <span class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-tight">
        Brand Advertising
      </span>
      with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: `
          At <span class="text-orange-500">Pencil Peel IMT</span>, we understand the importance of building a strong brand presence in today's competitive market.
    `
    };

  quotes = [
    { text: "Elevate your brand's story through strategic Brand Advertising with Pencil Peel IMT." },
    { text: "Connect with audiences and drive results through impactful Brand Advertising." },
    { text: "Build a lasting brand presence with effective Brand Advertising strategies." },
    { text: "Amplify your brand's voice and reach with targeted Brand Advertising solutions." },
    { text: "Transform your brand's visibility and engagement through expert Brand Advertising." }
  ];

  advertiseSections = [
    {
      title: 'Brand Advertising',
      icon: 'pi pi-star',
      points: [
        'Brand Awareness: We can create ads that build awareness and recognition of your brand among your target audience.',
        'Brand Positioning: Our team can help you position your brand in the market, differentiating it from competitors.',
        "Brand Identity: We can create ads that showcase your brand's unique identity, values, and messaging.",
      ],
    },
    {
      title: 'Product Advertising',
      icon: 'pi pi-box',
      points: [
        'Product Features: Our team can create ads that highlight the features and benefits of your products.',
        'Product Benefits: We can create ads that showcase how your products can solve problems or meet the needs of your target audience.',
        'Product Launches: We can create ads that generate buzz and excitement around new product launches.',
      ],
    },
    {
      title: 'Company Advertising',
      icon: 'pi pi-building',
      points: [
        "Company Values: We can create ads that showcase your company's values and mission.",
        'Company Culture: Our team can create ads that highlight your company culture and work environment.',
        'Thought Leadership: We can create ads that establish your company as a thought leader in your industry.',
      ],
    },
    {
      title: 'Organization Advertising',
      icon: 'pi pi-users',
      points: [
        'Non-Profit Organizations: We can create ads that promote the mission and initiatives of non-profit organizations.',
        'Charity Events: Our team can create ads that promote charity events and fundraisers.',
        "Community Engagement: We can create ads that showcase your organization's commitment to community engagement and social responsibility.",
      ],
    },
    {
      title: 'Services',
      icon: 'pi pi-briefcase',
      points: [
        "Service Offerings: We can create ads that showcase your company's service offerings and expertise.",
        'Service Benefits: Our team can create ads that highlight the benefits of your services and how they can meet the needs of your target audience.',
      ],
    },
    {
      title: 'Events',
      icon: 'pi pi-calendar',
      points: [
        'Conferences and Trade Shows: We can create ads that promote conferences and trade shows.',
        'Product Launches: Our team can create ads that generate buzz and excitement around product launches.',
        'Webinars and Workshops: We can create ads that promote webinars and workshops.',
      ],
    },
    {
      title: 'Promotions and Offers',
      icon: 'pi pi-tags',
      points: [
        'Discounts and Sales: We can create ads that promote discounts and sales.',
        'Limited-Time Offers: Our team can create ads that create a sense of urgency around limited-time offers.',
        'Special Deals: We can create ads that promote special deals and packages.',
      ],
    },
  ];

  advertiseTypes = [
    {
      title: 'Print Advertising',
      icon: 'pi pi-print', // PrimeIcons
      items: [
        { heading: 'Newspaper Ads', description: 'We will design and place ads in newspapers to reach a wide audience.' },
        { heading: 'Magazine Ads', description: 'Our team will create ads for magazines that target specific demographics or interests.' },
        { heading: 'Brochures', description: 'We will design and create brochures that showcase your brand\'s products or services.' },
      ]
    },
    {
      title: 'Digital Advertising',
      icon: 'pi pi-desktop', // PrimeIcons
      items: [
        { heading: 'Social Media Ads', description: 'We will create and manage social media ads on platforms like Facebook, Instagram, and LinkedIn.' },
        { heading: 'Display Ads', description: 'Our team will design and place display ads on websites and mobile apps.' },
        { heading: 'Native Ads', description: 'We will create native ads that blend in with the content on websites and mobile apps.' },
      ]
    },
    {
      title: 'Outdoor Advertising',
      icon: 'fas fa-bullhorn', // FontAwesome
      items: [
        { heading: 'Billboard Ads', description: 'We will design and place billboard ads in high-traffic areas.' },
        { heading: 'Transit Shelter Ads', description: 'Our team will create ads for transit shelters and bus stops.' },
        { heading: 'Mall Ads', description: 'We will design and place ads in shopping malls and retail stores.' },
      ]
    },
    {
      title: 'Video Advertising',
      icon: 'pi pi-video', // PrimeIcons
      items: [
        { heading: 'TV Commercials', description: 'We will create TV commercials that showcase your brand\'s products or services.' },
        { heading: 'Online Video Ads', description: 'Our team will create online video ads for YouTube, social media, and other platforms.' },
        { heading: 'In-Stream Ads', description: 'We will create in-stream ads that play before, during, or after video content.' },
      ]
    },
    {
      title: 'Experiential Advertising',
      icon: 'fas fa-star', // FontAwesome
      items: [
        { heading: 'Event Marketing', description: 'We will create events that showcase your brand\'s products or services.' },
        { heading: 'Sponsorships', description: 'Our team will identify sponsorship opportunities that align with your brand\'s goals.' },
        { heading: 'Product Sampling', description: 'We will create product sampling experiences that allow customers to try your products.' },
      ]
    },
    {
      title: 'Influencer Advertising',
      icon: 'pi pi-users', // PrimeIcons
      items: [
        { heading: 'Influencer Partnerships', description: 'We will identify and partner with influencers who align with your brand\'s goals.' },
        { heading: 'Sponsored Content', description: 'Our team will create sponsored content that showcases your brand\'s products.' },
      ]
    },
    {
      title: 'Audio Advertising',
      icon: 'fas fa-headphones', // FontAwesome
      items: [
        { heading: 'Radio Ads', description: 'We will create radio ads that reach a wide audience.' },
        { heading: 'Podcast Ads', description: 'Our team will create podcast ads that target specific demographics or interests.' },
      ]
    },
    {
      title: 'Mobile Advertising',
      icon: 'pi pi-mobile', // PrimeIcons
      items: [
        { heading: 'Mobile Display Ads', description: 'We will design and place mobile display ads on mobile apps and websites.' },
        { heading: 'SMS and MMS Ads', description: 'Our team will create SMS and MMS ads that reach customers on their mobile devices.' },
      ]
    },
    {
      title: 'Partnerships and Collaborations',
      icon: 'fas fa-handshake', // FontAwesome (best for partnerships)
      items: [
        { heading: 'Brand Partnerships', description: 'We will identify and partner with other brands that align with your business goals.' },
        { heading: 'Influencer Collaborations', description: 'Our team will collaborate with influencers to promote your brand.' },
      ]
    },
    {
      title: 'Gamification',
      icon: 'fas fa-gamepad', // FontAwesome
      items: [
        { heading: 'Games and Challenges', description: 'We will create games and challenges that engage customers.' },
        { heading: 'Rewards and Incentives', description: 'We will create rewards and incentives to motivate participation.' },
      ]
    }
  ];

  industries = [
    {
      title: 'Healthcare Department',
      icon: 'fas fa-heartbeat',
      items: [
        { heading: 'Hospitals and Clinics', description: 'We help build trust and brand presence through targeted advertising.' },
        { heading: 'Medical Device Manufacturers', description: 'We showcase device benefits and features to boost sales.' },
        { heading: 'Pharmaceutical Companies', description: 'We create campaigns that build awareness and drive sales.' },
      ],
    },
    {
      title: 'Education Sector',
      icon: 'fas fa-graduation-cap',
      items: [
        { heading: 'Universities and Colleges', description: 'We help institutions attract top students with strong branding.' },
        { heading: 'Online Course Providers', description: 'We highlight benefits of online learning to drive enrollments.' },
      ],
    },
    {
      title: 'E-commerce Services',
      icon: 'fas fa-shopping-cart',
      items: [
        { heading: 'Online Retailers', description: 'We build brand presence and drive sales via targeted campaigns.' },
        { heading: 'E-commerce Platforms', description: 'We showcase platform features to boost awareness and adoption.' },
      ],
    },
    {
      title: 'Real Estate Services',
      icon: 'fas fa-home',
      items: [
        { heading: 'Real Estate Agents', description: 'We help agents attract clients with targeted content and ads.' },
        { heading: 'Property Developers', description: 'We showcase properties to drive awareness and sales.' },
      ],
    },
    {
      title: 'Entertainment Field',
      icon: 'fas fa-film',
      items: [
        { heading: 'Movie Studios', description: 'We boost ticket sales through promotional campaigns.' },
        { heading: 'Music Labels', description: 'We highlight music benefits to increase awareness and sales.' },
      ],
    },
    {
      title: 'Food and Beverage Sector',
      icon: 'fas fa-utensils',
      items: [
        { heading: 'Restaurants', description: 'We attract new customers through digital branding.' },
        { heading: 'Food Manufacturers', description: 'We showcase product benefits to drive sales.' },
      ],
    },
    {
      title: 'Fitness and Nutrition',
      icon: 'fas fa-dumbbell',
      items: [
        { heading: 'Gyms and Studios', description: 'We build strong fitness branding to attract customers.' },
        { heading: 'Supplement Companies', description: 'We highlight nutrition benefits to drive sales.' },
      ],
    },
    {
      title: 'Technology & Software',
      icon: 'fas fa-laptop-code',
      items: [
        { heading: 'Software Companies', description: 'We strengthen tech branding and drive adoption.' },
        { heading: 'Tech Start-ups', description: 'We showcase innovative solutions to build awareness.' },
      ],
    },
    {
      title: 'Automotive Industry',
      icon: 'fas fa-car',
      items: [
        { heading: 'Car Dealerships', description: 'We attract buyers through digital and offline branding.' },
        { heading: 'Manufacturers', description: 'We showcase vehicle features to drive sales.' },
      ],
    },
    {
      title: 'Financial Services',
      icon: 'fas fa-university',
      items: [
        { heading: 'Banks and Credit Unions', description: 'We build trust and awareness with financial branding.' },
        { heading: 'Investment Firms', description: 'We promote investment solutions to generate leads.' },
      ],
    },
    {
      title: 'Retail Industry',
      icon: 'fas fa-store',
      items: [
        { heading: 'Department Stores', description: 'We boost retail branding and seasonal promotions.' },
        { heading: 'Specialty Retailers', description: 'We highlight niche products to build awareness.' },
      ],
    },
    {
      title: 'Non-Profit Organizations',
      icon: 'fas fa-hands-helping',
      items: [
        { heading: 'Charities', description: 'We help charities grow donations with targeted ads.' },
        { heading: 'NGOs', description: 'We promote non-profit missions to build support.' },
      ],
    },
  ];

  benefits = [
    {
      title: 'Increased Brand Awareness',
      description: 'Our brand advertising services can help increase awareness and recognition, keeping your brand top-of-mind.',
      icon: 'fas fa-bullhorn',
    },
    {
      title: 'Improved Brand Reputation',
      description: 'We help you build a strong reputation and position your business as a trusted thought leader.',
      icon: 'fas fa-star',
    },
    {
      title: 'Increased Customer Loyalty',
      description: 'By creating a strong presence, we help boost customer loyalty and retention.',
      icon: 'fas fa-heart',
    },
    {
      title: 'Drive Business Results',
      description: 'From website traffic to leads and sales, our campaigns drive measurable results.',
      icon: 'fas fa-chart-line',
    },
    {
      title: 'Competitive Advantage',
      description: 'We differentiate your brand, giving you a unique identity that stands out from competitors.',
      icon: 'fas fa-trophy',
    },
    {
      title: 'Better Customer Engagement',
      description: 'Engage directly with your target audience and build stronger connections.',
      icon: 'fas fa-users',
    },
    {
      title: 'Long-term Growth',
      description: 'Our brand strategies lay the foundation for sustainable growth and success.',
      icon: 'fas fa-seedling',
    },
    {
      title: 'Increased Customer Advocacy',
      description: 'We turn loyal customers into brand advocates who drive word-of-mouth growth.',
      icon: 'fas fa-handshake',
    },
    {
      title: 'Improved Marketing Efficiency',
      description: 'With stronger branding, your overall marketing becomes more effective and cost-efficient.',
      icon: 'fas fa-bolt',
    },
    {
      title: 'Increased Brand Equity',
      description: 'Our work makes your brand more valuable and attractive to customers and investors.',
      icon: 'fas fa-gem',
    },
  ];

  steps = [
    {
      title: 'Develop a Brand Strategy',
      description: 'Our team will work with you to develop a comprehensive brand strategy that aligns with your business goals and objectives.',
      icon: 'fas fa-project-diagram',
      gradientStart: '#FF6B00', // orange
      gradientEnd: '#FF3C8D',   // pink
    },
    {
      title: 'Create Compelling Messaging',
      description: 'We will help you craft a unique and compelling brand message that resonates with your target audience.',
      icon: 'fas fa-comment-dots',
      gradientStart: '#FF3C8D',
      gradientEnd: '#8D2EFF',
    },
    {
      title: 'Design Eye-Catching Visuals',
      description: 'Our team will design visually appealing brand assets, including logos, websites, and advertising materials.',
      icon: 'fas fa-paint-brush',
      gradientStart: '#8D2EFF',
      gradientEnd: '#FFB800',
    },
    {
      title: 'Execute Multi-Channel Campaigns',
      description: 'We will execute campaigns across social media, digital platforms, and outdoor advertising for maximum reach.',
      icon: 'fas fa-bullhorn',
      gradientStart: '#FFB800',
      gradientEnd: '#FF6B00',
    },
  ];

  sections = [
    {
      title: 'The Power of Brand Advertising with Pencil Peel IMT',
      icon: 'fas fa-bolt',
      gradientStart: '#FF6B00',
      gradientEnd: '#FF3C8D',
      points: [
        {
          icon: 'fas fa-building',
          title: 'Building Brand Presence',
          description: 'We leverage Brand Advertising to help businesses build a strong and lasting brand presence in their target markets.'
        },
        {
          icon: 'fas fa-users',
          title: 'Connecting with Audiences',
          description: 'Through strategic Brand Advertising, we help connect with audiences in meaningful ways, driving engagement and conversions.'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Driving Results',
          description: 'We focus on creating Brand Advertising strategies that drive measurable results for businesses, aligning with their marketing goals and objectives.'
        }
      ]
    },
    {
      title: 'The Future of Brand Advertising with Pencil Peel IMT',
      icon: 'fas fa-rocket',
      gradientStart: '#8D2EFF',
      gradientEnd: '#FFB800',
      points: [
        {
          icon: 'fas fa-database',
          title: 'Data-Driven Insights',
          description: 'We\'ll utilize data-driven insights to optimize Brand Advertising strategies, ensuring effective targeting and messaging for your business.'
        },
        {
          icon: 'fas fa-envelope-open-text',
          title: 'Personalized Messaging',
          description: 'We\'ll craft personalized messaging in Brand Advertising to connect with audiences more effectively and drive engagement.'
        },
        {
          icon: 'fas fa-sync-alt',
          title: 'Adaptability and Optimization',
          description: 'We\'ll stay updated with trends and best practices in Brand Advertising to ensure our strategies are always optimized for current needs.'
        }
      ]
    },
    {
      title: 'Pencil Peel IMT Leads in Brand Advertising',
      icon: 'fas fa-crown',
      gradientStart: '#FFB800',
      gradientEnd: '#FF6B00',
      points: [
        {
          icon: 'fas fa-handshake',
          title: 'Expert Guidance',
          description: 'At Pencil Peel IMT, we\'re committed to harnessing the power of Brand Advertising to help businesses achieve their marketing goals. With our expertise in crafting strategic Brand Advertising campaigns, we\'ll deliver effective solutions tailored to meet your business objectives.'
        }
      ]
    },
    {
      title: 'Crafting Your Brand Advertising Strategy with Pencil Peel IMT',
      icon: 'fas fa-lightbulb',
      gradientStart: '#FF3C8D',
      gradientEnd: '#8D2EFF',
      points: [
        {
          icon: 'fas fa-pencil-alt',
          title: 'Tailored Strategy',
          description: 'We\'ll work with you to craft Brand Advertising strategies that connect with audiences, drive results, and build strong relationships for your business. Contact us to explore how we can help you leverage the power and future of Brand Advertising with Pencil Peel IMT.'
        }
      ]
    }
  ];
}
