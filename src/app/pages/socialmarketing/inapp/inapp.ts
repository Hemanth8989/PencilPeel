import { Component } from '@angular/core';
import { Nocarouselherosection } from '../../../components/nocarouselherosection/nocarouselherosection';
import { Industrycontent } from "../industrycontent/industrycontent";
import { CommonModule } from '@angular/common';
import { Productcard } from "../../../components/productcard/productcard";
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { Contactus } from '../../../components/contactus/contactus';
import { MulBenfits } from "../../../components/mul-benfits/mul-benfits";

@Component({
  selector: 'app-inapp',
  imports: [Nocarouselherosection, Industrycontent, CommonModule, Productcard, Whycpencilpeel, Contactus, MulBenfits],
  templateUrl: './inapp.html',
  styleUrl: './inapp.scss'
})
export class Inapp {
herocontent = {
  title: 
    'Unlock the Power of ' +
    '<span class="bg-gradient-to-r from-pink-500 via-red-400 to-yellow-500 bg-clip-text text-transparent font-bold tracking-tight">' +
    'In-App Advertising' +
    '</span> with ' +
    '<span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">' +
    'Pencil Peel IMT' +
    '</span>.',
    
  description: 'At Pencil Peel IMT, we specialize in high-impact In-App Advertising to help you reach your audience where it matters most. Maximize engagement, boost conversions, and scale your brand effortlessly.',

  image: '/social/app/inappbanner.webp' // Replace with your actual in-app advertising image path
};
befitsec:any = {
  title:'Benefits of In-App Advertising at Pencil Peel',
  description: 'At Pencil Peel IMT, we understand the importance of in-app advertising in reaching your target audience and achieving your marketing goals.',
  footer:''
}
benefits = [
  {
    title: 'Targeted Advertising',
    points: [
      {
        title: 'Precision Targeting',
        description: 'Reach your audience with precision based on demographics, interests, and behaviours.'
      },
      {
        title: 'Increased Conversions',
        description: 'Optimize ad campaigns for users most likely to engage.'
      }
    ]
  },
  {
    title: 'High Engagement',
    points: [
      {
        title: 'Engaging Ad Formats',
        description: 'Create ads that capture audience attention.'
      },
      {
        title: 'Increased Brand Awareness',
        description: 'Make your brand memorable to users.'
      }
    ]
  },
  {
    title: 'Measurable Results',
    points: [
      {
        title: 'Track Performance',
        description: 'Measure the effectiveness of in-app campaigns.'
      },
      {
        title: 'Data-Driven Decision Making',
        description: 'Optimize campaigns based on analytics.'
      }
    ]
  },
  {
    title: 'Increased Reach',
    points: [
      {
        title: 'Large Audience',
        description: 'Reach millions of mobile app users daily.'
      },
      {
        title: 'Global Reach',
        description: 'Access audiences worldwide via in-app ads.'
      }
    ]
  },
  {
    title: 'Cost-Effective',
    points: [
      {
        title: 'Flexible Budgeting',
        description: 'Create a budget that fits your goals.'
      },
      {
        title: 'Measurable ROI',
        description: 'Track the return on your ad investment.'
      }
    ]
  },
  {
    title: 'Brand Awareness',
    points: [
      {
        title: 'Increased Visibility',
        description: 'Keep your brand in view while users interact with apps.'
      },
      {
        title: 'Brand Recognition',
        description: 'Boost familiarity through consistent in‑app presence.'
      }
    ]
  },
  {
    title: 'User Acquisition',
    points: [
      {
        title: 'Attract New Users',
        description: 'Capture attention from potential customers.'
      },
      {
        title: 'Drive App Installs',
        description: 'Encourage downloads and trial usage.'
      }
    ]
  },
  {
    title: 'Contextual Advertising',
    points: [
      {
        title: 'Relevant Ads',
        description: 'Align ads with user interests and behaviours.'
      },
      {
        title: 'Increased Engagement',
        description: 'Improve interaction through relevance.'
      }
    ]
  }
];

advertisingStrategies = [
  {
    title: "Targeted Advertising",
    items: [
      {
        title: "Precision Targeting",
        description: "We'll help you reach your target audience with precision, based on demographics, interests, and behaviours."
      },
      {
        title: "Increased Conversions",
        description: "Our team will optimize your ad campaigns to increase conversions, by targeting users who are more likely to be interested in your product or service."
      }
    ]
  },
  {
    title: "High Engagement",
    items: [
      {
        title: "Engaging Ad Formats",
        description: "Our team will create engaging ad formats that capture the attention of your target audience."
      },
      {
        title: "Increased Brand Awareness",
        description: "We'll help increase brand awareness, as users are more likely to remember your brand."
      }
    ]
  },
  {
    title: "Measurable Results",
    items: [
      {
        title: "Track Performance",
        description: "Our team will track and measure the performance of your in-app ad campaigns, providing valuable insights into ad effectiveness."
      },
      {
        title: "Data-Driven Decision Making",
        description: "We'll use data to inform decision making and optimize your ad campaigns."
      }
    ]
  },
  {
    title: "Increased Reach",
    items: [
      {
        title: "Large Audience",
        description: "Our team will help you reach a large audience, as millions of users spend time on mobile apps every day."
      },
      {
        title: "Global Reach",
        description: "We'll help you reach a global audience, as apps are available worldwide."
      }
    ]
  },
  {
    title: "Cost-Effective",
    items: [
      {
        title: "Flexible Budgeting",
        description: "Our team will work with you to create a flexible budget that meets your needs and goals."
      },
      {
        title: "Measurable ROI",
        description: "We'll help you measure the return on investment (ROI) of your in-app ad campaigns."
      }
    ]
  },
  {
    title: "Brand Awareness",
    items: [
      {
        title: "Increased Visibility",
        description: "Our team will increase brand visibility, as users are exposed to your ads while using their favourite apps."
      },
      {
        title: "Brand Recognition",
        description: "We'll help increase brand recognition, as users become more familiar with your brand."
      }
    ]
  },
  {
    title: "User Acquisition",
    items: [
      {
        title: "Attract New Users",
        description: "Our team will help you attract new users, as you're reaching a large audience of potential customers."
      },
      {
        title: "Drive App Installs",
        description: "We'll help drive app installs, as users are encouraged to download and try out your app."
      }
    ]
  },
  {
    title: "Contextual Advertising",
    items: [
      {
        title: "Relevant Ads",
        description: "Our team will create contextual ads that are relevant to the user's interests and behaviours."
      },
      {
        title: "Increased Engagement",
        description: "We'll help increase engagement, as users are more likely to interact with ads that are relevant to their interests."
      }
    ]
  }
];
inappAdFormats:any={
  title:'In-App Ad Formats at Pencil Peel',
  description: `<strong>In-App Advertising</strong> refers to the placement of ads within mobile apps. These ads can be displayed in various formats, such as:`
}
adformats = [
  {
    category: 'Banner Ads',
    displayName: 'Banner Ads',
    icon: 'pi pi-image',
    iconBg: 'bg-blue-500',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    image: 'social/app/inappbanner.webp',
    imageAlt: '',
    items: [
      {
        title: 'Small and Non-Intrusive',
        description: "We'll create banner ads that are small and non-intrusive, displayed at the top or bottom of the app screen."
      },
      {
        title: 'Targeted Advertising',
        description: 'Our team will target your banner ads to specific audiences based on demographics, interests, and behaviours.'
      }
    ]
  },
  {
    category: 'Interstitial Ads',
    displayName: 'Interstitial Ads',
    icon: 'pi pi-desktop',
    iconBg: 'bg-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    image: '/social/app/interstial.webp',
    imageAlt: '',
    items: [
      {
        title: 'Full-Screen Impact',
        description: "We'll create interstitial ads that are full-screen ads displayed between app screens or during natural breaks in the app experience."
      },
      {
        title: 'High Engagement',
        description: 'Our team will ensure that your interstitial ads are highly engaging, especially when they are relevant and well-timed.'
      }
    ]
  },
  {
    category: 'Rewarded Video Ads',
    displayName: 'Rewarded Video Ads',
    icon: 'pi pi-video',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
    image: 'social/app/rewardad.webp',
    imageAlt: '',
    items: [
      {
        title: 'User Engagement',
        description: "We'll create rewarded video ads that offer rewards to users for watching videos or completing specific actions."
      },
      {
        title: 'Monetization',
        description: 'Our team will help you monetize your app through rewarded video ads, while also providing value to your users.'
      }
    ]
  },
  {
    category: 'Native Ads',
    displayName: 'Native Ads',
    icon: 'pi pi-file',
    iconBg: 'bg-green-500',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    image: 'social/app/nativead.webp',
    imageAlt: '',
    items: [
      {
        title: 'Blending in with Content',
        description: "We'll create native ads that blend in with the app's content and design, making them less intrusive and more engaging."
      },
      {
        title: 'Increased Conversions',
        description: 'Our team will optimize your native ads to increase conversions, as they are more likely to be clicked on and engaged with.'
      }
    ]
  },
  {
    category: 'Video Ads',
    displayName: 'Video Ads',
    icon: 'pi pi-film',
    iconBg: 'bg-red-500',
    iconColor: 'text-red-600',
    borderColor: 'border-red-500',
    image: 'social/app/videoad.webp',
    imageAlt: '',
    items: [
      {
        title: 'High Engagement',
        description: "We'll create video ads that are highly engaging, especially when they are relevant and well-produced."
      },
      {
        title: 'Brand Awareness',
        description: 'Our team will help you increase brand awareness through video ads, reaching a large audience.'
      }
    ]
  },
  {
    category: 'Playable Ads',
    displayName: 'Playable Ads',
    icon: 'pi pi-gamepad',
    iconBg: 'bg-indigo-500',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
    image: 'social/app/playablead.webp',
    imageAlt: '',
    items: [
      {
        title: 'Interactive Experience',
        description: "We'll create playable ads that provide an interactive experience, allowing users to try out a game or app before installing it."
      },
      {
        title: 'Increased Conversions',
        description: 'Our team will optimize your playable ads to increase conversions, providing a more immersive experience for users.'
      }
    ]
  },
  {
    category: 'Audio Ads',
    displayName: 'Audio Ads',
    icon: 'pi pi-volume-up',
    iconBg: 'bg-teal-500',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
    image: 'social/app/audioad.webp',
    imageAlt: '',
    items: [
      {
        title: 'Non-Visual Advertising',
        description: "We'll create audio ads that are a form of non-visual advertising, allowing users to engage with your brand while listening to music or podcasts."
      },
      {
        title: 'Targeted Advertising',
        description: 'Our team will target your audio ads to specific audiences based on demographics, interests, and behaviours.'
      }
    ]
  },
  {
    category: 'Offer Wall Ads',
    displayName: 'Offer Wall Ads',
    icon: 'pi pi-briefcase',
    iconBg: 'bg-orange-500',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    image: 'social/app/offerwallad.webp',
    imageAlt: '',
    items: [
      {
        title: 'User Engagement',
        description: "We'll create offer wall ads that provide users with a list of offers they can complete in exchange for rewards or incentives."
      },
      {
        title: 'Monetization',
        description: 'Our team will help you monetize your app through offer wall ads, while also providing value to your users.'
      }
    ]
  }
];
promo:any={
  title:' Promoting In-App Marketing for Various Applications at Pencil Peel IMT',
  description: `At <span class="text-orange-500">Pencil Peel IMT</span>, we specialize in promoting in-app marketing for various applications, including:`
}
appCategories = [
  {
    category: 'Ride-Hailing Apps',
    displayName: 'Ride-Hailing Apps (Uber, Ola, Rapido)',
    icon: 'pi pi-car',
    iconBg: 'bg-indigo-500',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
    image: 'social/app/ridehailing.webp',
    imageAlt: 'Ride-Hailing App Illustration',
    items: [
      {
        title: 'Targeted Advertising',
        description:
          "We'll help you target specific audiences based on demographics, interests, and behaviours, increasing the effectiveness of your ad campaigns."
      },
      {
        title: 'In-App Promotions',
        description:
          'Our team will create in-app promotions that encourage users to book rides, increasing user engagement and retention.'
      },
      {
        title: 'Location-Based Advertising',
        description:
          "We'll use location-based advertising to target users in specific areas, increasing the relevance of your ads."
      }
    ]
  },
  {
    category: 'Food Delivery Apps',
    displayName: 'Food Delivery Apps (Swiggy, Zomato)',
    icon: 'pi pi-shopping-cart',
    iconBg: 'bg-green-500',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    image: 'social/app/fooddelivery.webp',
    imageAlt: 'Food Delivery App Illustration',
    items: [
      {
        title: 'Foodie Targeting',
        description:
          'Our team will target foodies and users who are interested in food delivery, increasing the effectiveness of your ad campaigns.'
      },
      {
        title: 'Restaurant Promotions',
        description:
          "We'll help you promote specific restaurants and cuisines, increasing user engagement and retention."
      },
      {
        title: 'Order-Based Advertising',
        description:
          'We\'ll use order-based advertising to target users who have previously ordered food, increasing the relevance of your ads.'
      }
    ]
  },
  {
    category: 'Movie Ticket Booking Apps',
    displayName: 'Movie Ticket Booking Apps (BookMyShow, District)',
    icon: 'pi pi-film',
    iconBg: 'bg-red-500',
    iconColor: 'text-red-600',
    borderColor: 'border-red-500',
    image: 'social/app/movietickets.webp',
    imageAlt: 'Movie Ticket Booking Illustration',
    items: [
      {
        title: 'Movie Enthusiast Targeting',
        description:
          "We'll target movie enthusiasts and users who are interested in cinema, increasing the effectiveness of your ad campaigns."
      },
      {
        title: 'Movie Promotions',
        description:
          "Our team will create promotions for specific movies, increasing user engagement and retention."
      },
      {
        title: 'Theatre-Based Advertising',
        description:
          "We'll use theatre-based advertising to target users in specific locations, increasing the relevance of your ads."
      }
    ]
  },
  {
    category: 'Bus Ticket Booking Apps',
    displayName: 'Bus Ticket Booking Apps (Abhi Bus, Red Bus, Paytm)',
    icon: 'pi pi-bus',
    iconBg: 'bg-yellow-500',
    iconColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
    image: 'social/app/busticket.webp',
    imageAlt: 'Bus Ticket Booking Illustration',
    items: [
      {
        title: 'Traveller Targeting',
        description:
          'App users who are interested in travel and transportation, increasing the effectiveness of your ad campaigns.'
      },
      {
        title: 'Route Promotions',
        description:
          "We'll promote specific routes and travel options, increasing user engagement and retention."
      },
      {
        title: 'Booking-Based Advertising',
        description:
          'We\'ll use booking-based advertising to target users who have previously booked bus tickets, increasing the relevance of your ads.'
      }
    ]
  },
  {
    category: 'E-commerce Marketplaces',
    displayName: 'E-commerce Marketplaces',
    icon: 'pi pi-shopping-bag',
    iconBg: 'bg-purple-500',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    image: 'social/app/ecommerce.webp',
    imageAlt: 'E-commerce Marketplaces Illustration',
    items: [
      {
        title: 'Amazon India',
        description:
          "Our team will optimize your product listings and ads to reach Amazon India's vast customer base, leveraging its exceptional customer service and vast product range."
      },
      {
        title: 'Flipkart',
        description:
          "We'll create targeted ad campaigns to tap into Flipkart's diverse product range and customer-centric approach, driving sales and increasing brand visibility."
      },
      {
        title: 'Myntra',
        description:
          'Our team will focus on promoting trendy and branded fashion items on Myntra, ideal for sellers in the fashion and lifestyle categories.'
      },
      {
        title: 'Snapdeal',
        description:
          'We\'ll help you offer a wide array of products at competitive prices on Snapdeal, catering to diverse consumer needs.'
      }
    ]
  },
  {
    category: 'Social Commerce Platforms',
    displayName: 'Social Commerce Platforms',
    icon: 'pi pi-users',
    iconBg: 'bg-pink-500',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
    image: 'social/app/socialcommerce.webp',
    imageAlt: 'Social Commerce Platforms Illustration',
    items: [
      {
        title: 'Meesho',
        description:
          'Our team will enable individuals and small businesses to sell products online through social media channels like WhatsApp, Facebook, and Instagram using Meesho.'
      },
      {
        title: 'GlowRoad',
        description:
          'We\'ll promote trendy products and exciting offers on GlowRoad, making it a popular choice for reselling.'
      }
    ]
  },
  {
    category: 'Niche Marketplaces',
    displayName: 'Niche Marketplaces',
    icon: 'pi pi-briefcase',
    iconBg: 'bg-teal-500',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
    image: 'social/app/nichemarketplaces.webp',
    imageAlt: 'Niche Marketplaces Illustration',
    items: [
      {
        title: 'FirstCry',
        description:
          'Our team will help you offer a wide range of baby and kids\' products on FirstCry, India\'s largest online marketplace for this category.'
      },
      {
        title: 'Pepperfry',
        description:
          'We\'ll optimize your product listings and customer-centric services on Pepperfry, leading the online furniture segment with an extensive catalog.'
      },
      {
        title: 'Zivame',
        description:
          'Our team will specialize in promoting intimate wear and lingerie on Zivame, providing a niche marketplace for sellers in this category.'
      }
    ]
  },
  {
    category: 'Quick Commerce Platforms',
    displayName: 'Quick Commerce Platforms',
    icon: 'pi pi-clock',
    iconBg: 'bg-yellow-600',
    iconColor: 'text-yellow-700',
    borderColor: 'border-yellow-600',
    image: 'social/app/quickcommerce.webp',
    imageAlt: 'Quick Commerce Platforms Illustration',
    items: [
      {
        title: 'Blinkit',
        description:
          'We\'ll help you offer groceries and household essentials in under 10 minutes on Blinkit, operating in major Indian cities.'
      },
      {
        title: 'Zepto',
        description:
          'Our team will disrupt the quick-commerce space with hyper-fast delivery and growing urban reach on Zepto.'
      }
    ]
  },
  {
    category: 'Other Notable Platforms',
    displayName: 'Other Notable Platforms',
    icon: 'pi pi-globe',
    iconBg: 'bg-gray-700',
    iconColor: 'text-gray-800',
    borderColor: 'border-gray-700',
    image: 'social/app/otherplatforms.webp',
    imageAlt: 'Other Platforms Illustration',
    items: [
      {
        title: 'JioMart',
        description:
          'Our team will help you expand your online grocery platform with competitive prices and wide availability on JioMart.'
      },
      {
        title: 'Paytm Mall',
        description:
          'We\'ll promote a diverse range of products with integrated payment solutions and discounts on Paytm Mall.'
      },
      {
        title: 'ShopClues',
        description:
          'Our team will optimize your product listings and cost-effective listing options on ShopClues, a budget-friendly marketplace with a wide product range.'
      }
    ]
  },
  {
    category: 'Additional Applications',
    displayName: 'Additional Applications',
    icon: 'pi pi-th-large',
    iconBg: 'bg-cyan-500',
    iconColor: 'text-cyan-600',
    borderColor: 'border-cyan-500',
    image: 'social/app/additionalapps.webp',
    imageAlt: 'Additional Applications Illustration',
    items: [
      {
        title: 'Ajio',
        description:
          'A platform offering a mix of exclusive and diverse fashion choices, ideal for trendy brands.'
      },
      {
        title: 'Nykaa',
        description:
          'A dominant player in the beauty and wellness category, with a strong foothold in both online and offline retail.'
      },
      {
        title: 'Tata CLiQ',
        description:
          'A premium e-commerce platform offering curated products and a seamless online-to-offline shopping experience.'
      },
      {
        title: 'Croma',
        description:
          'A trusted marketplace for electronics and home appliances, combining online ease with offline reliability.'
      },
      {
        title: 'IndiaMART',
        description:
          'A lead-generation platform for bulk buyers, ideal for wholesale, manufacturing, or supply chains.'
      }
    ]
  }
];
inAppContact: any = {
  title: 'Contact Us Today',
  description: `By leveraging in-appraising your app with In-App Advertising, we can help you reach your target audience and achieve your marketing goals. Contact us today to learn more about our In-App Advertising services.`
};
whycheader = {
    title: "Why Choose Pencil Peel IMT for In-App Advertising?",
    description: ""
};
whyInAppFeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: 'Our team has extensive experience in in-app advertising, ensuring your campaigns are optimized for success.',
    icon: 'pi-briefcase',
    iconBgColor: 'yellow-100',
    iconColor: 'yellow-600'
  },
  {
    id: 2,
    title: 'Targeted Solutions',
    description: 'We\'ll work with you to develop targeted in-app advertising solutions that meet your specific marketing goals.',
    icon: 'pi-bullseye',
    iconBgColor: 'blue-100',
    iconColor: 'blue-600'
  },
  {
    id: 3,
    title: 'Measurable Results',
    description: 'We\'ll provide you with regular reporting and analysis, ensuring you can track the effectiveness of your campaigns.',
    icon: 'pi-chart-line',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  }
];
}
