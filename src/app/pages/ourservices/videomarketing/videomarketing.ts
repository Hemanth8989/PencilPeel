import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Benefit } from '../../../components/benefit/benefit';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-videomarketing',
  imports: [CommonModule, Nocarouselquotes, CardModule, ButtonModule,RouterModule],
  templateUrl: './videomarketing.html',
  styleUrl: './videomarketing.scss'
})
export class Videomarketing {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/services/videomarketing.webp',
      title: `
      Unlock Your Video Marketing Services with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: ''
    };

  quotes = [
    { text: "Elevate your brand with impactful video marketing strategies." },
    { text: "Video marketing that connects, engages, and converts." },
    { text: "Transform your message into compelling video marketing content." },
    { text: "Drive results with targeted and effective video marketing services." },
    { text: "Boost your online presence with expert video marketing solutions." }
  ];

  benefits = [
    {
      title: 'Increased Engagement',
      description:
        'Videos are more engaging than text-based content, allowing audiences to connect with brands on a deeper level.',
      icon: 'pi pi-bolt'
    },
    {
      title: 'Enhanced Customer Trust',
      description:
        'Testimonial and demo videos showcase success stories, building trust with your audience.',
      icon: 'pi pi-users'
    },
    {
      title: 'Better Customer Understanding',
      description:
        'We create video content that resonates, helping you understand your audience’s needs and preferences.',
      icon: 'pi pi-heart'
    },
    {
      title: 'Improved SEO',
      description:
        'High-quality videos attract links and shares, boosting your website’s search visibility.',
      icon: 'pi pi-chart-line'
    },
    {
      title: 'Measurable Results',
      description:
        'We track and analyse campaign performance, making data-driven decisions to optimize results.',
      icon: 'pi pi-chart-bar'
    },
    {
      title: 'Cost-Effective',
      description:
        'Our services provide a strong return on investment while remaining budget-friendly.',
      icon: 'pi pi-wallet'
    },
    {
      title: 'Competitive Advantage',
      description:
        'Leveraging video marketing helps you stand out, outperform competitors, and drive business growth.',
      icon: 'pi pi-trophy',
      span: true // this one will stretch across the grid
    }
  ];

  growthPoints = [
    {
      title: 'Increased Brand Awareness',
      description:
        'Our team can help increase brand awareness by creating engaging videos that showcase your products, services, or company story, establishing your brand as a thought leader.',
      icon: 'pi pi-megaphone'
    },
    {
      title: 'Improved Website Traffic',
      description:
        'Videos drive traffic to your website by embedding them or sharing on social media, attracting potential customers and increasing conversions.',
      icon: 'pi pi-external-link'
    },
    {
      title: 'Enhanced Customer Engagement',
      description:
        'We create entertaining and informative videos that enhance customer engagement, building a loyal community who advocates for your brand.',
      icon: 'pi pi-users'
    },
    {
      title: 'Increased Conversions',
      description:
        'Our videos include clear calls-to-action to encourage viewers to take the next step, generating leads, sales, or promoting specific actions.',
      icon: 'pi pi-shopping-cart'
    },
    {
      title: 'Better SEO',
      description:
        'Optimized videos improve search engine rankings, increasing visibility and attracting more organic traffic to your website.',
      icon: 'pi pi-search'
    },
    {
      title: 'Competitive Advantage',
      description:
        'High-quality videos differentiate your brand from competitors and establish your company as an industry leader.',
      icon: 'pi pi-trophy'
    },
    {
      title: 'Measurable Results',
      description:
        'Track effectiveness with metrics like views, engagement, and conversions to optimize your video marketing strategy.',
      icon: 'pi pi-chart-line'
    },
    {
      title: 'Reach a Wider Audience',
      description:
        'Videos can be shared on social media, websites, and email, allowing your brand to reach a wider audience.',
      icon: 'pi pi-share-alt'
    },
    {
      title: 'Build Trust and Credibility',
      description:
        'Video marketing helps establish your brand as a thought leader, building trust and credibility with your audience.',
      icon: 'pi pi-star'
    }
  ];

  videoSteps = [
    {
      title: 'Concept Development',
      description: "We'll work with you to develop a concept that aligns with your business goals and target audience.",
      icon: 'pi pi-lightbulb'
    },
    {
      title: 'Scriptwriting',
      description: "Our team will craft compelling scripts that capture the essence of your brand.",
      icon: 'pi pi-pencil'
    },
    {
      title: 'Storyboarding',
      description: "We create a storyboard that visualizes the sequence of events and shots for efficient production.",
      icon: 'pi pi-images'
    },
    {
      title: 'Video Production',
      description: "Our videographers and directors produce high-quality videos with the right equipment and talent.",
      icon: 'pi pi-video'
    },
    {
      title: 'Post-Production',
      description: "Editing, adding music, sound effects, and visual effects to polish your video.",
      icon: 'pi pi-cog'
    },
    {
      title: 'Distribution and Promotion',
      description: "We'll distribute your video across social media, websites, and email with an optimized strategy.",
      icon: 'pi pi-share-alt'
    },
    {
      title: 'Analytics and Reporting',
      description: "Regular reporting on metrics like views, engagement, and conversions to optimize your strategy.",
      icon: 'pi pi-chart-line'
    }
  ];

  industries = [
    {
      title: 'Technology and Software',
      icon: 'pi pi-desktop',
      subIndustries: [
        { name: 'Software Companies', description: 'Engaging video content to showcase products and drive conversions.' },
        { name: 'Tech Start-ups', description: 'Help establish strong online presence and growth through video marketing.' }
      ]
    },
    {
      title: 'Healthcare Industry',
      icon: 'pi pi-heart',
      subIndustries: [
        { name: 'Hospitals and Clinics', description: 'Showcase medical services and build trust with patients.' },
        { name: 'Medical Device Manufacturers', description: 'Product demo videos to showcase devices and drive sales.' }
      ]
    },
    {
      title: 'E-commerce Industry',
      icon: 'pi pi-shopping-cart',
      subIndustries: [
        { name: 'Online Retailers', description: 'Product demos and explainer videos to drive sales.' },
        { name: 'E-commerce Platforms', description: 'Establish online presence and drive growth.' }
      ]
    },
    {
      title: 'Financial Services',
      icon: 'pi pi-money-bill',
      subIndustries: [
        { name: 'Banks and Credit Unions', description: 'Showcase services and build trust.' },
        { name: 'Investment Firms', description: 'Highlight investment products and services.' }
      ]
    },
    {
      title: 'Education Sector',
      icon: 'pi pi-book',
      subIndustries: [
        { name: 'Universities and Colleges', description: 'Showcase academic programs and drive enrollments.' },
        { name: 'Online Course Providers', description: 'Highlight courses and drive sales.' }
      ]
    },
    {
      title: 'Real Estate Industry',
      icon: 'pi pi-home',
      subIndustries: [
        { name: 'Real Estate Agents', description: 'Showcase properties and drive sales.' },
        { name: 'Property Developers', description: 'Highlight properties and attract interest.' }
      ]
    },
    {
      title: 'Automotive Industry',
      icon: 'pi pi-car',
      subIndustries: [
        { name: 'Car Dealerships', description: 'Showcase vehicles and drive sales.' },
        { name: 'Automotive Manufacturers', description: 'Highlight products and build brand awareness.' }
      ]
    },
    {
      title: 'Travel and Hospitality',
      icon: 'pi pi-briefcase',
      subIndustries: [
        { name: 'Hotels and Resorts', description: 'Showcase amenities and services.' },
        { name: 'Travel Agencies', description: 'Highlight destinations and packages.' }
      ]
    }
  ];

  selectedArea = 0;

  promotionAreas = [
    {
      title: 'Social Media Platforms',
      platforms: [
        {
          name: 'Facebook',
          icon: 'pi pi-facebook',
          open: false,
          details: [
            {
              title: "Targeted Ads",
              description: "We'll create targeted ads to reach businesses and entrepreneurs who can benefit from our video marketing services."
            },
            {
              title: "Facebook Groups",
              description: "Our team will participate in relevant Facebook groups and promote our services to a targeted audience."
            },
            {
              title: "Facebook Live",
              description: "We'll use Facebook Live to showcase our expertise and promote our video marketing services."
            }
          ]
        },
        {
          name: 'LinkedIn',
          icon: 'pi pi-linkedin',
          open: false,
          details: [
            {
              title: "Professional Networking",
              description: "We'll leverage LinkedIn's professional networking features to promote our video marketing services to businesses and entrepreneurs."
            },
            {
              title: "LinkedIn Groups",
              description: "Our team will participate in relevant LinkedIn groups and promote our services to a targeted audience."
            },
            {
              title: "Sponsored Content",
              description: "We'll create sponsored content to promote our video marketing services to a wider audience."
            }
          ]
        },
        {
          name: 'Twitter',
          icon: 'pi pi-twitter',
          open: false,
          details: [
            {
              title:"Engaging Tweets",
              description:"We'll create engaging tweets that showcase our expertise and promote our video marketing services."
            },
            {
              title: "Hashtags",
              description: "Our team will use relevant hashtags to reach a wider audience and promote our services."
            },
            {
              title: "Twitter Chats",
              description: "We'll participate in Twitter chats related to video marketing and promote our services."
            }
          ]
        },
        {
          name: 'Instagram',
          icon: 'pi pi-instagram',
          open: false,
          details: [
            {
              title: "Visual Content",
              description: "We'll create visually appealing content that showcases our video marketing services and resonates with our target audience."
            },
            {
              title: "Instagram Stories",
              description: "Our team will use Instagram Stories to promote our services and engage with our audience."
            },
            {
              title: "Influencer Partnerships",
              description: "We'll partner with influencers on Instagram to promote our video marketing services."
            }
          ]
        },
        {
          name: 'YouTube',
          icon: 'pi pi-youtube',
          open: false,
          details: [
            {
              title:"Video Content",
              description:"We'll create high-quality video content that showcases our expertise and promotes our video marketing services."
            },
            {
              title: "YouTube Ads",
              description: "Our team will create targeted YouTube ads to promote our services to a wider audience."
            },
            {
              title: "YouTube Community",
              description: "We'll engage with the YouTube community and promote our services through comments and responses."
            }
          ]
        },
        {
          name: 'Pinterest',
          icon: 'pi pi-pinterest',
          open: false,
          details: [
            {
              title: "Visual Content",
              description: "We'll create visually appealing content that showcases our video marketing services and resonates with our target audience."
            },
            {
              title: "Boards",
              description: "Our team will create boards related to video marketing and promote our services."
            },
            {
              title: "Rich Pins",
              description: "We'll use rich pins to promote our services and drive traffic to our website."
            }
          ]
        },
        {
          name: 'TikTok',
          icon: 'pi pi-music',
          open: false,
          details: [
            { 
              title: "Short-Form Videos",
              description: "We'll create short-form videos that showcase our expertise and promote our video marketing services."
            },
            {
              title: "Hashtags",
              description: "Our team will use relevant hashtags to reach a wider audience and promote our services."
            },
            {
              title: "Influencer Partnerships",
              description: "We'll partner with influencers on TikTok to promote our video marketing services."
            }
          ]
        },
        {
          name: 'Reddit',
          icon: 'pi pi-reddit',
          open: false,
          details: [
            {
              title:"Subreddits",
              description: "We'll participate in relevant subreddits and promote our video marketing services to a targeted audience."
            },
            {
              title: "AMA",
              description: "Our team will host an AMA (Ask Me Anything) session on Reddit to promote our services and showcase our expertise."
            }
          ]
        },
        {
          name: 'Snapchat',
          icon: 'pi pi-snapchat',
          open: false,
          details: [
            {
              title: "Snap Ads",
              description: "We'll create snap ads that promote our video marketing services and resonate with our target audience."
            },
            {
              title: "Snapchat Stories",
              description: "Our team will use Snapchat Stories to promote our services and engage with our audience."
            }
          ]
        }
      ]
    },
    {
      title: 'Online Communities',
      platforms: [
        {
          name: 'Industry Forums',
          icon: 'pi pi-users',
          open: false,
          details: [
            {
              title: "Industry Forums",
              description: "We'll participate in industry forums and promote our video marketing services to businesses and entrepreneurs."
            }
          ]
        },
        {
          name: 'Reddit',
          icon: 'pi pi-reddit',
          open: false,
          details: [
            {
              title:"Reddit",
              description: "We'll engage with relevant subreddits and promote our video marketing services to a targeted audience."   
            }
          ]
        },
        {
          name: 'Quora',
          icon: 'pi pi-question',
          open: false,
          details: [
            {
              title: "Quora",
              description: "Our team will answer questions related to video marketing and promote our services on Quora."
            }
          ]
        }
      ]
    },
    {
      title: 'Content Marketing',
      platforms: [
        {
          name: 'Blog Posts',
          icon: 'pi pi-pencil',
          open: false,
          details: [
            {
              title: "Blog Posts",
              description: "We'll create informative blog posts about video marketing and promote our services to a wider audience."  
            }
          ]
        },
        {
          name: 'Guest Blogging',
          icon: 'pi pi-external-link',
          open: false,
          details: [
            {
              title: "Guest Blogging",
              description: "Our team will guest blog on relevant websites and promote our video marketing services."
            }
          ]
        },
        {
          name: 'Case Studies',
          icon: 'pi pi-file',
          open: false,
          details: [
            { title: "Case Studies", description: "We'll create case studies that showcase the effectiveness of our video marketing services." }
          ]
        }
      ]
    },
    {
      title: 'Influencer Marketing',
      platforms: [
        {
          name: 'Partner with Influencers',
          icon: 'pi pi-users',
          open: false,
          details: [
            { title: "Partner with Influencers", description: "We'll partner with influencers in various industries to promote our video marketing services." }
          ]
        },
        {
          name: 'Influencer Takeovers',
          icon: 'pi pi-exchange',
          open: false,
          details: [
            { title: "Influencer Takeovers", description: "Our team will collaborate with influencers to take over their social media accounts and promote our services." }
          ]
        }
      ]
    },
    {
      title: 'Paid Advertising',
      platforms: [
        {
          name: 'Google Ads',
          icon: 'pi pi-google',
          open: false,
          details: [
            { title: "Google Ads", description: "We'll create targeted Google Ads campaigns to promote our video marketing services to businesses and entrepreneurs." }
          ]
        },
        {
          name: 'Facebook Ads',
          icon: 'pi pi-facebook',
          open: false,
          details: [
            { title: "Facebook Ads", description: "Our team will create targeted Facebook Ads campaigns to promote our video marketing services." }
          ]
        }
      ]
    },
    {
      title: 'Events and Webinars',
      platforms: [
        {
          name: 'Host Webinars',
          icon: 'pi pi-video',
          open: false,
          details: [
            { title: "Host Webinars", description: "We'll host webinars on video marketing topics and promote our services to attendees." }
          ]
        },
        {
          name: 'Attend Industry Events',
          icon: 'pi pi-briefcase',
          open: false,
          details: [
            { title: "Attend Industry Events", description: "Our team will attend industry events and conferences to promote our video marketing services." }
          ]
        }
      ]
    }
  ];

  powerPoints = [
    {
      title: 'Engaging Storytelling',
      description: 'We leverage the power of storytelling to create emotional connections with audiences, drive engagement, and build brand loyalty.'
    },
    {
      title: 'Visual Impact and Creativity',
      description: 'Our team utilizes creativity and technical expertise to craft videos with visual impact that capture audience attention and leave a lasting impression.'
    },
    {
      title: 'Adaptability Across Platforms',
      description: 'We create videos adaptable for various platforms like social media, websites, and more to maximize reach and impact.'
    }
  ];

  futurePoints = [
    {
      title: 'Integration of Emerging Technologies',
      description: 'We stay updated with emerging technologies and trends in video marketing to ensure our strategies and productions are optimized for current best practices.'
    },
    {
      title: 'Personalization and Targeting',
      description: 'We help businesses leverage video marketing for personalized and targeted messaging to enhance engagement and conversion rates.'
    },
    {
      title: 'Data-Driven Insights',
      description: 'We utilize data-driven insights to optimize video performance, measure effectiveness, and refine strategies for better results.'
    }
  ];

  bottomSection = {
    leadTitle: 'Pencil Peel IMT Leads in Video Marketing Services',
    leadDescription: 'At Pencil Peel IMT, we\'re committed to harnessing the power of video marketing services to help businesses achieve their marketing goals. With our huge experience and great knowledge in software design, development, and digital storytelling, we\'ll deliver impactful videos tailored to meet your business objectives.',
    futureTitle: 'Crafting Your Video Marketing Future',
    futureDescription: 'We\'ll work with you to craft videos that tell your brand\'s story compellingly and drive results for your business. Contact us to explore how we can help you leverage the power and future of video marketing services for your brand\'s success.'
  };

  reasons = [
    {
      title: 'Expertise',
      description: 'Our team of video marketing experts at Pencil Peel IMT has extensive experience in creating successful video marketing campaigns that drive results. We stay updated with the latest trends and best practices in video marketing to ensure your campaigns are effective.',
      icon: 'pi pi-star'
    },
    {
      title: 'Customized Approach',
      description: 'We work closely with you to understand your business goals, target audience, and brand identity to develop a customized video marketing strategy that meets your unique needs, ensuring alignment with overall business objectives.',
      icon: 'pi pi-cog'
    },
    {
      title: 'High-Quality Production',
      description: 'At Pencil Peel IMT, we produce high-quality videos that meet the highest standards of production value. From concept development to final delivery, we ensure every aspect of the video production process is handled with expertise and care to deliver impactful videos.',
      icon: 'pi pi-camera'
    },
    {
      title: 'Data-Driven Insights',
      description: 'We provide regular reporting and analysis on the performance of your video marketing campaigns. By leveraging data-driven insights, we help you understand what’s working, what’s not, and how to optimize your video marketing strategy for better results.',
      icon: 'pi pi-chart-line'
    }
  ];

  contactCTA = {
    title: 'Contact Us Today for Video Marketing Services',
    description: 'Contact us today to learn more about our video marketing services and how Pencil Peel IMT can help you create impactful video content that drives results for your business. With our expertise in video marketing, we\'ll work with you to craft a strategy that meets your goals and helps your business grow.',
    buttonText: 'Get in Touch',
    buttonLink: '/contact'
  };
}
