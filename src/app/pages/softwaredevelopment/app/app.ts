import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Whycpencilpeel } from '../../../components/whycpencilpeel/whycpencilpeel';
import { CarouselModule } from 'primeng/carousel';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { Benefitsnew } from "../../../components/benefitsnew/benefitsnew";
import { DialogModule } from "primeng/dialog";

@Component({
  selector: 'app-app',
  imports: [CommonModule, Whycpencilpeel, CarouselModule, TabsModule, ButtonModule, Nocarouselquotes, Benefitsnew, DialogModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
herocontent = {
  title: `
    <span class="block text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-2
                  bg-gradient-to-r from-orange-500 via-yellow-400 to-indigo-500 bg-clip-text text-transparent">
      Welcome to Universe of Mobile Application Design & Development with Pencil Peel IMT
    </span>
    <span class="block text-base sm:text-lg md:text-2xl font-semibold mt-2 text-white drop-shadow-lg">
      "Crafting mobile apps for impact and engagement."
    </span>
  `,
  description: `
    <p class="mt-4 text-white text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
      Mobile apps designed for user success and business growth. Innovative mobile solutions for a connected world,
      transforming ideas into mobile app realities.
    </p>
  `,
  image: 'sde/integration.webp'  // Replace with your actual mobile app hero background image path
};

quotes = [
  { text: "Mobile apps that blend design, functionality, and impact." },
  { text: "Building mobile apps that drive results and delight users." },
  { text: "Delivering mobile app solutions for today's mobile-first world." },
  { text: "Expert mobile app design and development for businesses." }
];

whyccontent = {
  title: "Why Choose Pencil Peel IMT?",
  description: "At Pencil Peel IMT, we have a team of experienced designers who are skilled in using a range of design tools and technologies. We'll work closely with you to understand your design needs and goals, and create a mobile app design that meets your requirements.",
  footer:"By partnering with Pencil Peel IMT for your mobile app design needs, you can trust that your app will be designed with the latest design trends and technologies, providing a great user experience and driving business results. Contact us today to learn more about our mobile app design services."
};
mobileapptypes = [
  {
    title: 'Native Apps',
    definition: "We'll develop native apps that are specifically designed for a particular platform, such as iOS or Android, using platform-specific languages like Swift or Java.",
    benefits: 'Native apps offer the best performance and integrate deeply with the device\'s hardware and software features.',
    examples: 'Our team will develop native apps that provide a smooth and responsive user experience with access to all device capabilities.'
  },
  {
    title: 'Web Apps',
    definition: 'Our team will develop web apps that are accessed via a web browser, built using standard web technologies like HTML, CSS, and JavaScript.',
    benefits: 'Web apps do not require installation and can be accessed from any device with a web browser.',
    examples: 'We\'ll develop web apps that provide a user-friendly experience and can be used on multiple devices.'
  },
  {
    title: 'Hybrid Apps',
    definition: 'We\'ll develop hybrid apps that combine elements of native and web apps, using frameworks like Cordova or Ionic.',
    benefits: 'Hybrid apps can access device features through plugins and provide a balance between development efficiency and user experience.',
    examples: 'Our team will develop hybrid apps that offer a seamless user experience and can be used on multiple platforms.'
  },
  {
    title: 'Progressive Web Apps (PWAs)',
    definition: 'Our team will develop PWAs that provide a more app-like experience with offline capabilities, push notifications, and faster load times.',
    benefits: 'PWAs can be added to the home screen and accessed offline, providing a seamless experience similar to native apps.',
    examples: 'We\'ll develop PWAs that offer a fast and responsive user experience, even on slow networks.'
  },
  {
    title: 'Cross-Platform Apps',
    definition: 'We\'ll develop cross-platform apps using frameworks like Flutter, React Native, or Xamarin, which allow the same codebase to be used for both iOS and Android.',
    benefits: 'Cross-platform apps provide a way to reach multiple platforms with a single codebase, reducing development time and costs.',
    examples: 'Our team will develop cross-platform apps that deliver a native-like experience across platforms.'
  },
  {
    title: 'Enterprise Apps',
    definition: 'We\'ll develop enterprise apps that are designed for internal business processes and functions, such as CRM systems or employee management.',
    benefits: 'Enterprise apps can improve productivity and efficiency, and provide a secure and scalable solution for businesses.',
    examples: 'Our team will develop enterprise apps that meet specific business needs and integrate with existing systems.'
  },
  {
    title: 'Gaming Apps',
    definition: 'Our team will develop gaming apps that provide interactive entertainment, ranging from casual games to complex simulations.',
    benefits: 'Gaming apps can provide a engaging and immersive experience, and can be developed using various technologies and frameworks.',
    examples: 'We\'ll develop gaming apps that offer advanced graphics and real-time interactions.'
  },
  {
    title: 'Utility Apps',
    definition: 'We\'ll develop utility apps that provide specific utilities or tools, such as calculators or password managers.',
    benefits: 'Utility apps can provide a simple and efficient solution for users, and can be developed using various technologies and frameworks.',
    examples: 'Our team will develop utility apps that offer a user-friendly experience and provide specific functionality.'
  },
  {
    title: 'Social Media Apps',
    definition: 'Our team will develop social media apps that provide social interaction, content sharing, and communication.',
    benefits: 'Social media apps can provide a platform for users to connect and share content, and can be developed using various technologies and frameworks.',
    examples: 'We\'ll develop social media apps that offer a seamless user experience and provide features like real-time updates and media sharing.'
  },
  {
    title: 'Educational Apps',
    definition: 'We\'ll develop educational apps that provide educational content and learning tools, such as language learning apps or online courses.',
    benefits: 'Educational apps can provide an engaging and interactive learning experience, and can be developed using various technologies and frameworks.',
    examples: 'Our team will develop educational apps that offer a user-friendly experience and provide interactive lessons and quizzes.'
  },
  {
    title: 'Health and Fitness Apps',
    definition: 'Our team will develop health and fitness apps that provide health-related activities, such as fitness tracking or diet management.',
    benefits: 'Health and fitness apps can provide a motivating and supportive experience, and can be developed using various technologies and frameworks.',
    examples: 'We\'ll develop health and fitness apps that offer features like exercise logging and health metrics tracking.'
  }
];

activeQuote: number = 0;
activeIndex:number = 0;

whycfeatures: any[] = [
  {
    id: 1,
    title: 'Expertise',
    description: "Our team has extensive experience in mobile app design, and we're skilled in using a range of design tools and technologies.",
    icon: 'pi-star',
    borderColor: 'yellow-500',
    iconBgColor: 'yellow-100',
    iconColor: 'yellow-600'
  },
  {
    id: 2,
    title: 'Creativity',
    description: "We're creative problem-solvers who can think outside the box to create innovative and effective designs.",
    icon: 'pi-lightbulb',
    borderColor: 'pink-500',
    iconBgColor: 'pink-100',
    iconColor: 'pink-600'
  },
  {
    id: 3,
    title: 'Collaboration',
    description: "We work closely with our clients to ensure that we're meeting their needs and goals.",
    icon: 'pi-users',
    borderColor: 'green-500',
    iconBgColor: 'green-100',
    iconColor: 'green-600'
  }
];



// designCarouselSlides = [
//   {
//     group: "Design Tools",
//     description: "At Pencil Peel IMT, we utilize a range of design tools and technologies to create innovative and effective mobile app designs. Our team of experienced designers is skilled in using a variety of tools and technologies to bring our clients' visions to life.",
//     tools: [
//       {
//         name: "Figma",
//         image: "sde/tools/figma.png",
//         desc: "We use Figma to create interactive prototypes and collaborate with stakeholders in real-time. Figma's cloud-based platform allows us to work seamlessly with clients and team members, ensuring that everyone is on the same page."
//       },
//       {
//         name: "Sketch",
//         image: "sde/tools/sketch.png",
//         desc: "Our team utilizes Sketch to design and prototype mobile apps with precision and ease. Sketch's powerful features and intuitive interface make it an ideal tool for creating high-quality designs."
//       },
//       {
//         name: "Adobe XD",
//         image: "sde/tools/adobexd.png",
//         desc: "We leverage Adobe XD to create user experience design and prototype mobile apps. Adobe XD's robust features and integration with other Adobe tools make it a popular choice for designers."
//       },
//       {
//         name: "InVision Studio",
//         image: "sde/tools/invision.png",
//         desc: "Our team uses InVision Studio to create advanced animations and interactions. InVision Studio's powerful features and intuitive interface make it an ideal tool for creating complex designs."
//       }
//     ]
//   },
//   {
//     group: "Graphic Design Tools",
//     description: "Graphic design tools help us create custom icons, graphics, and illustrative assets that enhance app user interfaces and brand identities.",
//     tools: [
//       {
//         name: "Adobe Photoshop",
//         image: "sde/tools/photoshop.png",
//         desc: "We use Adobe Photoshop to create and edit visual elements, such as icons, graphics, and images. Photoshop's powerful features and tools make it an industry-standard for graphic design."
//       },
//       {
//         name: "Adobe Illustrator",
//         image: "sde/tools/illustrator.png",
//         desc: "Our team utilizes Adobe Illustrator to create vector graphics and illustrations. Illustrator's robust features and precision make it an ideal tool for creating high-quality vector graphics."
//       }
//     ]
//   },
//   {
//     group: "Collaboration and Prototyping Tools",
//     description: "Collaboration and prototyping tools streamline communication, gather feedback, and speed up the design iteration process.",
//     tools: [
//       {
//         name: "Zeplin",
//         image: "sde/tools/zeplin.png",
//         desc: "We use Zeplin to generate style guides and assets for developers, ensuring design consistency and accuracy. Zeplin's features and integration with design tools make it an ideal choice for collaboration."
//       },
//       {
//         name: "InVision",
//         image: "sde/tools/invision.png",
//         desc: "Our team uses InVision to create interactive prototypes, gather feedback, and iterate on design concepts. InVision's features and intuitive interface make it a popular choice for designers."
//       },
//       {
//         name: "Marvel",
//         image: "sde/tools/marvel.png",
//         desc: "We use Marvel to create interactive prototypes and test user experience. Marvel's features and integration with design tools make it an ideal choice for prototyping and testing."
//       },
//       {
//         name: "Proto.io",
//         image: "sde/tools/proto.png",
//         desc: "Our team utilizes Proto.io to create interactive prototypes and test mobile app designs. Proto.io's features and intuitive interface make it an ideal tool for creating and testing prototypes."
//       }
//     ]
//   },
//   {
//     group: "Software and Programming Languages",
//     description: "We use a broad range of programming languages and frameworks to build scalable, high-performance mobile applications tailored to your requirements.",
//     tools: [
//       {
//         name: "Java",
//         image: "sde/tools/java.png",
//         desc: "We'll use Java to develop robust and scalable mobile applications for Android devices."
//       },
//       {
//         name: "Swift",
//         image: "sde/tools/swift.png",
//         desc: "Our team will utilize Swift to develop high-performance mobile applications for iOS devices."
//       },
//       {
//         name: "Kotlin",
//         image: "sde/tools/kotlin.png",
//         desc: "We'll use Kotlin to develop modern and efficient mobile applications for Android devices."
//       },
//       {
//         name: "JavaScript",
//         image: "sde/tools/js.png",
//         desc: "Our team will use JavaScript to develop cross-platform mobile applications using frameworks like React Native."
//       },
//       {
//         name: "Python",
//         image: "sde/tools/python.png",
//         desc: "We'll use Python to develop machine learning models and integrate them into our mobile applications."
//       },
//       {
//         name: "C++",
//         image: "sde/tools/cplus.png",
//         desc: "Our team will utilize C++ to develop high-performance mobile applications that require native code."
//       },
//       {
//         name: "C#",
//         image: "sde/tools/csharp.png",
//         desc: "We'll use C# to develop cross-platform mobile applications using Xamarin."
//       }
//     ]
//   },
//   {
//     group: "Development Frameworks",
//     description: "We leverage powerful frameworks for building modern mobile applications with seamless user experiences across platforms.",
//     tools: [
//       {
//         name: "React Native",
//         image: "sde/tools/reactnative.png",
//         desc: "We'll use React Native to develop cross-platform mobile applications that run seamlessly on both iOS and Android devices."
//       },
//       {
//         name: "Flutter",
//         image: "sde/tools/flutter.png",
//         desc: "Our team will utilize Flutter to develop high-performance mobile applications with a single codebase."
//       },
//       {
//         name: "Xamarin",
//         image: "sde/tools/xamarin.png",
//         desc: "We'll use Xamarin to develop cross-platform mobile applications using C# and .NET."
//       },
//       {
//         name: "Ionic",
//         image: "sde/tools/ionic.png",
//         desc: "Our team will use Ionic to develop hybrid mobile applications using web technologies like HTML, CSS, and JavaScript."
//       },
//       {
//         name: "PhoneGap",
//         image: "sde/tools/phonegap.png",
//         desc: "We'll use PhoneGap to develop hybrid mobile applications using web technologies like HTML, CSS, and JavaScript."
//       }
//     ]
//   },
//   {
//     group: "Database Management",
//     description: "Efficient and scalable database solutions forming the backbone of our mobile applications.",
//     tools: [
//       {
//         name: "MySQL",
//         image: "sde/tools/mysql.png",
//         desc: "We'll use MySQL to design and implement robust and scalable databases for our mobile applications."
//       },
//       {
//         name: "MongoDB",
//         image: "sde/tools/mongodb.png",
//         desc: "Our team will utilize MongoDB to develop NoSQL databases that can handle large amounts of data and provide high performance."
//       },
//       {
//         name: "Firebase",
//         image: "sde/tools/firebase.png",
//         desc: "We'll use Firebase to develop real-time databases and backend services for our mobile applications."
//       },
//       {
//         name: "PostgreSQL",
//         image: "sde/tools/postgresql.png",
//         desc: "Our team will use PostgreSQL to develop robust and scalable databases for our mobile applications."
//       }
//     ]
//   }
// ];
benefittitle = "Benefits of Using These Software and Programming Languages";
benefits = [
  {
    icon: 'pi-check-circle',
    gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600',
    title: 'High-Quality Solutions',
    description: "Our team uses the latest software and programming languages to deliver high-quality mobile applications that meet our clients' needs and goals."
  },
  {
    icon: 'pi-bolt',
    gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
    title: 'Efficient Development',
    description: "We use agile development methodologies and the latest tools and technologies to streamline the development process and deliver solutions quickly."
  },
  {
    icon: 'pi-arrows-alt',
    gradient: 'bg-gradient-to-tr from-pink-400 to-purple-500',
    title: 'Scalability',
    description: "Our solutions are designed to be scalable and flexible, ensuring that they can adapt to changing business needs and requirements."
  }
];

benefitGroups = [
  {
    group: 'For Businesses',
    benefits: [
      {
        title: 'Enhanced Customer Engagement',
        desc: "We'll develop mobile apps that provide direct communication channels, such as push notifications and in-app messaging, to engage with customers and build brand loyalty. Our team will also tailor content and offers based on user preferences and behavior to provide a personalized experience.",
        icon: 'pi-users',
        gradient: 'bg-gradient-to-tr from-blue-500 to-purple-500'
      },
      {
        title: 'Increased Accessibility',
        desc: "Our mobile apps will be available 24/7, allowing users to access services or products at any time and improving convenience and accessibility. We'll also ensure that our apps are optimized for on-the-go use, providing a seamless experience for users.",
        icon: 'pi-mobile',
        gradient: 'bg-gradient-to-tr from-orange-400 to-orange-600'
      },
      {
        title: 'Improved Brand Recognition',
        desc: "We'll design mobile apps that provide a visible presence on users' home screens, increasing brand visibility and keeping our business top-of-mind. Our team will also ensure that our apps provide a consistent brand experience across all devices.",
        icon: 'pi-star',
        gradient: 'bg-gradient-to-tr from-pink-400 to-purple-500'
      },
      {
        title: 'Enhanced Customer Loyalty',
        desc: "We'll develop mobile apps that implement loyalty programs or rewards systems to incentivize repeat business. Our team will also offer special promotions or features available only through the app to reward loyal customers.",
        icon: 'pi-heart',
        gradient: 'bg-gradient-to-tr from-red-400 to-pink-400'
      },
      {
        title: 'Streamlined Operations',
        desc: "We'll automate processes like booking, ordering, or customer support to reduce manual effort and errors. Our team will also gather insights on user behavior and preferences to optimize business strategies.",
        icon: 'pi-sliders-h',
        gradient: 'bg-gradient-to-tr from-green-400 to-teal-500'
      },
      {
        title: 'Competitive Advantage',
        desc: "By developing a mobile app, we'll stand out from competitors who may not have a mobile app. Our team will leverage cutting-edge features to attract tech-savvy customers and provide a unique experience.",
        icon: 'pi-chart-line',
        gradient: 'bg-gradient-to-tr from-yellow-400 to-yellow-600'
      }
    ]
  },
  {
    group: 'For Organizations',
    benefits: [
      {
        title: 'Improved Communication',
        desc: "We'll develop mobile apps that facilitate better communication among employees with messaging, collaboration tools, and updates. Our team will also provide resources and information to employees easily, promoting knowledge sharing and teamwork.",
        icon: 'pi-comments',
        gradient: 'bg-gradient-to-tr from-blue-400 to-blue-700'
      },
      {
        title: 'Enhanced Productivity',
        desc: "Our mobile apps will enable employees to manage tasks and projects more efficiently, using features like project management, scheduling, and task tracking. We'll also provide remote access to critical tools and information, allowing employees to work from anywhere.",
        icon: 'pi-briefcase',
        gradient: 'bg-gradient-to-tr from-green-400 to-teal-500'
      },
      {
        title: 'Data Management',
        desc: "We'll develop mobile apps that store and manage organizational data efficiently, with secure access and backup options. Our team will also utilize data analytics to make informed decisions and track organizational performance.",
        icon: 'pi-database',
        gradient: 'bg-gradient-to-tr from-yellow-400 to-pink-400'
      }
    ],
    howToAchieve: [
      {
        title: 'Internal Communication',
        desc: "We'll develop mobile apps that provide a platform for employees to communicate and collaborate more effectively. Our team will also integrate messaging and collaboration tools to facilitate better communication."
      },
      {
        title: 'Task Management',
        desc: "Our mobile apps will enable employees to manage tasks and projects more efficiently, using features like project management, scheduling, and task tracking."
      },
      {
        title: 'Data Analytics',
        desc: "We'll develop mobile apps that utilize data analytics to make informed decisions and track organizational performance. Our team will also provide insights and recommendations to improve business outcomes."
      }
    ]
  },
  {
    group: 'For Individuals',
    benefits: [
      {
        title: 'Convenience',
        desc: "We'll develop mobile apps that provide quick access to services, information, or features tailored to individual needs. Our team will also enable users to personalize their app experience based on preferences and usage patterns.",
        icon: 'pi-clock',
        gradient: 'bg-gradient-to-tr from-red-400 to-orange-500'
      },
      {
        title: 'Productivity',
        desc: "Our mobile apps will provide tools and utilities to manage tasks, set reminders, track habits, or enhance productivity. We'll also offer educational resources, tutorials, and skill-building tools to support learning and development.",
        icon: 'pi-pencil',
        gradient: 'bg-gradient-to-tr from-green-400 to-lime-500'
      },
      {
        title: 'Entertainment',
        desc: "We'll develop mobile apps that enable users to enjoy media, games, and other forms of entertainment on the go. Our team will also provide social interaction features, such as messaging and social media integration, to connect users with friends, family, and communities.",
        icon: 'pi-music',
        gradient: 'bg-gradient-to-tr from-pink-400 to-pink-600'
      },
      {
        title: 'Health and Wellness',
        desc: "Our mobile apps will enable users to track health metrics, exercise routines, or mental well-being. We'll also provide guidance on fitness programs, nutritional advice, and mental health resources.",
        icon: 'pi-heart',
        gradient: 'bg-gradient-to-tr from-red-500 to-pink-500'
      },
      {
        title: 'Travel and Navigation',
        desc: "We'll develop mobile apps that provide navigation and local information, using maps and GPS for directions. Our team will also enable users to reserve accommodations, transport, and activities easily.",
        icon: 'pi-map-marker',
        gradient: 'bg-gradient-to-tr from-blue-400 to-blue-700'
      }
    ],
    howToAchieve: [
      {
        title: 'Easy Access',
        desc: "We'll develop mobile apps that provide easy access to services, information, or features tailored to individual needs."
      },
      {
        title: 'Customization',
        desc: "Our mobile apps will enable users to personalize their experience based on preferences and usage patterns."
      },
      {
        title: 'Productivity Tools',
        desc: "We'll develop mobile apps that provide tools and utilities to manage tasks, set reminders, track habits, or enhance productivity."
      },
      {
        title: 'Entertainment Options',
        desc: "Our mobile apps will offer a range of entertainment options, including media, games, and social interaction features."
      }
    ]
  }
];


KeyMobileAppElements = [
  {
    icon: 'pi-mobile',
    iconColor: 'text-orange-500',
    title: 'Responsive and Adaptive Design',
    description: 'Our team will design apps that adapt to various screen sizes, ensuring a consistent user experience across different devices.'
  },
  {
    icon: 'pi-directions',
    iconColor: 'text-yellow-500',
    title: 'Intuitive Navigation',
    description: "We'll create navigation that's easy to use, reducing the learning curve and enhancing user satisfaction."
  },
  {
    icon: 'pi-play',
    iconColor: 'text-pink-500',
    title: 'Animation and Interaction Design',
    description: 'Our team will incorporate animations and interactive elements to make your app more engaging and dynamic.'
  },
  {
    icon: 'pi-universal-access',
    iconColor: 'text-blue-500',
    title: 'Accessibility',
    description: "We'll design apps that are accessible to everyone, including people with disabilities, to ensure a wider reach and impact."
  },
  {
    icon: 'pi-palette',
    iconColor: 'text-orange-400',
    title: 'Consistent Design',
    description: 'Our team will maintain a consistent design language throughout the app, strengthening brand recognition and loyalty.'
  }
];


//new
keyAspects = [
    {
      image: 'sde/mobFunctionality.png',
      title: 'Functionality and Services',
      description: 'Mobile apps can provide a variety of functionalities and services like gaming, productivity, social networking, e-commerce, education, and more. At Pencil Peel IMT, we design and develop mobile apps that deliver specific functionalities tailored to our clients\' goals.'
    },
    {
      image: 'sde/mobUX.png',
      title: 'User Experience',
      description: 'We prioritize user experience in mobile app development, ensuring that apps are intuitive, engaging, and accessible across various mobile devices.'
    },
    {
      image: 'sde/cross-platform.png',
      title: 'Cross-Platform Compatibility',
      description: 'Our team at Pencil Peel IMT considers cross-platform development to ensure that mobile apps reach a broader audience on both iOS and Android devices.'
    },
    {
      image: 'sde/security.png',
      title: 'Security and Performance',
      description: 'We emphasize security and performance optimization in mobile app development to ensure that apps are robust, efficient, and protect user data.'
    }
  ];

  trendingFeatures = [
    {
      title: 'Convenience and Accessibility',
      description: 'Mobile apps provide users with convenient access to information, services, and products on-the-go.',
      icon: 'pi pi-mobile'
    },
    {
      title: 'Personalization',
      description: 'Mobile apps can be personalized to meet individual user needs, providing a tailored experience.',
      icon: 'pi pi-user'
    },
    {
      title: 'Increased Engagement',
      description: 'Mobile apps can increase user engagement through push notifications, in-app messaging, and other features.',
      icon: 'pi pi-bell'
    },
    {
      title: 'Improved Customer Experience',
      description: 'Mobile apps can provide a seamless and intuitive user experience, driving customer satisfaction and loyalty.',
      icon: 'pi pi-heart'
    }
  ];

  designElements = [
    {
      title: 'Responsive and Adaptive Design',
      description: 'Our team will design apps that adapt to various screen sizes, ensuring a consistent user experience across different devices.',
      icon: 'pi pi-tablet'
    },
    {
      title: 'Intuitive Navigation',
      description: 'We\'ll create navigation that\'s easy to use, reducing the learning curve and enhancing user satisfaction.',
      icon: 'pi pi-compass'
    },
    {
      title: 'Animation and Interaction Design',
      description: 'Our team will incorporate animations and interactive elements to make your app more engaging and dynamic.',
      icon: 'pi pi-play'
    },
    {
      title: 'Accessibility',
      description: 'We\'ll design apps that are accessible to everyone, including people with disabilities, to ensure a wider reach and impact.',
      icon: 'pi pi-eye'
    },
    {
      title: 'Consistent Design',
      description: 'Our team will maintain a consistent design language throughout the app, strengthening brand recognition and loyalty.',
      icon: 'pi pi-palette'
    }
  ];

  designTrends = [
    {
      image: 'sde/dark-colors.png',
      title: 'Dark Mode and Adaptive Colors',
      description: 'We\'ll incorporate adaptive colors that adjust to the user\'s environment and preferences, enhancing visual comfort and personalization.',
      category: 'Visual Design'
    },
    {
      image: 'sde/ar-vr.png',
      title: 'Augmented Reality (AR) and Virtual Reality (VR)',
      description: 'Our team will explore the possibilities of AR and VR to create immersive experiences that engage users.',
      category: 'Technology'
    },
    {
      image: 'sde/voice.png',
      title: 'Voice Interaction and Contactless Functionality',
      description: 'We\'ll design apps that incorporate voice interaction and contactless functionality, providing users with a seamless experience.',
      category: 'Interaction'
    },
    {
      image: 'sde/design.png',
      title: 'Inclusive and Accessible Design',
      description: 'Our team will prioritize accessibility and inclusivity in design, ensuring that apps are usable by everyone.',
      category: 'Accessibility'
    }
  ];

  
  // Design Tools with SVG images
  designTools: any[] = [
    {
      id: 'figma',
      name: 'Figma',
      description: 'We use Figma to create interactive prototypes and collaborate with stakeholders in real-time. Figma\'s cloud-based platform allows seamless collaboration.',
      svgPath: '/svg/figma.svg',
      colorScheme: 'orange',
      category: 'design'
    },
    {
      id: 'sketch',
      name: 'Sketch',
      description: 'Our team utilizes Sketch to design and prototype mobile apps with precision and ease. Sketch\'s powerful features make it ideal for high-quality designs.',
      svgPath: '/svg/sketch.svg',
      colorScheme: 'blue',
      category: 'design'
    },
    {
      id: 'adobe-xd',
      name: 'Adobe XD',
      description: 'We leverage Adobe XD to create user experience design and prototype mobile apps. Adobe XD\'s robust features and integration make it popular for designers.',
      svgPath: '/svg/adobe-xd.svg',
      colorScheme: 'purple',
      category: 'design'
    },
    {
      id: 'invision-studio',
      name: 'InVision Studio',
      description: 'Our team uses InVision Studio to create advanced animations and interactions. InVision Studio\'s powerful features make it ideal for complex designs.',
      svgPath: '/svg/invision.svg',
      colorScheme: 'green',
      category: 'design'
    }
  ];

  // Graphic Design Tools with SVG images
  graphicTools: any[] = [
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      description: 'We use Adobe Photoshop to create and edit visual elements, such as icons, graphics, and images. Photoshop\'s powerful features make it an industry standard.',
      svgPath: '/svg/photoshop.svg',
      colorScheme: 'red',
      category: 'graphic'
    },
    {
      id: 'illustrator',
      name: 'Adobe Illustrator',
      description: 'Our team utilizes Adobe Illustrator to create vector graphics and illustrations. Illustrator\'s robust features and precision make it ideal for high-quality vectors.',
      svgPath: '/svg/illustrator.svg',
      colorScheme: 'orange',
      category: 'graphic'
    }
  ];

  // Collaboration Tools with SVG images
  collaborationTools: any[] = [
    {
      id: 'zeplin',
      name: 'Zeplin',
      description: 'We use Zeplin to generate style guides and assets for developers, ensuring design consistency and accuracy.',
      svgPath: '/svg/zeplin.svg',
      colorScheme: 'indigo',
      category: 'collaboration'
    },
    {
      id: 'invision',
      name: 'Invision',
      description: 'Our team uses Invision to create interactive prototypes, gather feedback, and iterate on design concepts.',
      svgPath: '/svg/invision.svg',
      colorScheme: 'pink',
      category: 'collaboration'
    },
    {
      id: 'marvel',
      name: 'Marvel',
      description: 'We use Marvel to create interactive prototypes and test user experience with intuitive design tools.',
      svgPath: '/svg/marvel.svg',
      colorScheme: 'teal',
      category: 'collaboration'
    },
    {
      id: 'proto-io',
      name: 'Proto.io',
      description: 'Our team utilizes Proto.io to create interactive prototypes and test mobile app designs effectively.',
      svgPath: '/svg/proto.svg',
      colorScheme: 'cyan',
      category: 'collaboration'
    }
  ];

  // Programming languages with SVG images
  programmingLanguages: any[] = [
    {
      id: 'java',
      name: 'Java',
      description: 'We\'ll use Java to develop robust and scalable mobile applications for Android devices with enterprise-level capabilities.',
      svgPath: '/svg/java.svg',
      colorScheme: 'orange',
      category: 'programming'
    },
    {
      id: 'swift',
      name: 'Swift',
      description: 'Our team will utilize Swift to develop high-performance mobile applications for iOS devices with modern design principles.',
      svgPath: '/svg/swift.svg',
      colorScheme: 'blue',
      category: 'programming'
    },
    {
      id: 'kotlin',
      name: 'Kotlin',
      description: 'We\'ll use Kotlin to develop modern and efficient mobile applications for Android devices with enhanced productivity.',
      svgPath: '/svg/kotlin.svg',
      colorScheme: 'purple',
      category: 'programming'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Our team will use JavaScript to develop cross-platform mobile applications using frameworks like React Native.',
      svgPath: '/svg/javascript.svg',
      colorScheme: 'yellow',
      category: 'programming'
    },
    {
      id: 'python',
      name: 'Python',
      description: 'We\'ll use Python to develop machine learning models and integrate them into our mobile applications for AI capabilities.',
      svgPath: '/svg/python.svg',
      colorScheme: 'green',
      category: 'programming'
    },
    {
      id: 'cpp',
      name: 'C++',
      description: 'Our team will utilize C++ to develop high-performance mobile applications that require native code optimization.',
      svgPath: '/svg/c-plusplus.svg',
      colorScheme: 'indigo',
      category: 'programming'
    },
    {
      id: 'csharp',
      name: 'C#',
      description: 'We\'ll use C# to develop cross-platform mobile applications using Xamarin with .NET framework integration.',
      svgPath: '/svg/csharp.svg',
      colorScheme: 'violet',
      category: 'programming'
    }
  ];

  // Development Frameworks with SVG images
  frameworks: any[] = [
    {
      id: 'react-native',
      name: 'React Native',
      description: 'We\'ll use React Native to develop cross-platform mobile applications that run seamlessly on both iOS and Android devices.',
      svgPath: '/svg/react.svg',
      colorScheme: 'cyan',
      category: 'framework'
    },
    {
      id: 'flutter',
      name: 'Flutter',
      description: 'Our team will utilize Flutter to develop high-performance mobile applications with a single codebase for multiple platforms.',
      svgPath: '/svg/flutter.svg',
      colorScheme: 'blue',
      category: 'framework'
    },
    {
      id: 'xamarin',
      name: 'Xamarin',
      description: 'We\'ll use Xamarin to develop cross-platform mobile applications using C# and .NET framework.',
      svgPath: '/svg/xamarin.svg',
      colorScheme: 'indigo',
      category: 'framework'
    },
    {
      id: 'ionic',
      name: 'Ionic',
      description: 'Our team will use Ionic to develop hybrid mobile applications using web technologies like HTML, CSS, and JavaScript.',
      svgPath: '/svg/ionic.svg',
      colorScheme: 'purple',
      category: 'framework'
    },
    {
      id: 'phonegap',
      name: 'PhoneGap',
      description: 'We\'ll use PhoneGap to develop hybrid mobile applications using web technologies for multiple platforms.',
      svgPath: '/svg/phonegap.svg',
      colorScheme: 'pink',
      category: 'framework'
    }
  ];

  // Database Management with SVG images
  databases: any[] = [
    {
      id: 'mysql',
      name: 'MySQL',
      description: 'We\'ll use MySQL to design and implement robust and scalable databases for our mobile applications.',
      svgPath: '/svg/mysql.svg',
      colorScheme: 'green',
      category: 'database'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'Our team will utilize MongoDB to develop NoSQL databases that can handle large amounts of data and provide high performance.',
      svgPath: '/svg/mongodb.svg',
      colorScheme: 'emerald',
      category: 'database'
    },
    {
      id: 'firebase',
      name: 'Firebase',
      description: 'We\'ll use Firebase to develop real-time databases and backend services for our mobile applications.',
      svgPath: '/svg/firebase.svg',
      colorScheme: 'orange',
      category: 'database'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      description: 'Our team will use PostgreSQL to develop robust and scalable databases for our mobile applications.',
      svgPath: '/svg/postgresql.svg',
      colorScheme: 'blue',
      category: 'database'
    }
  ];

  // Dialog properties
  displayDialog: boolean = false;
  selectedTechnology: any | null = null;

  getColorClasses(colorScheme: string) {
    const colorMap: { [key: string]: any } = {
      orange: {
        bg: 'bg-orange-100',
        hoverBg: 'group-hover:bg-orange-200',
        text: 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:border-orange-300',
        shadow: 'hover:shadow-orange-500/20'
      },
      blue: {
        bg: 'bg-blue-100',
        hoverBg: 'group-hover:bg-blue-200',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300',
        shadow: 'hover:shadow-blue-500/20'
      },
      purple: {
        bg: 'bg-purple-100',
        hoverBg: 'group-hover:bg-purple-200',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:border-purple-300',
        shadow: 'hover:shadow-purple-500/20'
      },
      green: {
        bg: 'bg-green-100',
        hoverBg: 'group-hover:bg-green-200',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:border-green-300',
        shadow: 'hover:shadow-green-500/20'
      },
      red: {
        bg: 'bg-red-100',
        hoverBg: 'group-hover:bg-red-200',
        text: 'text-red-600',
        border: 'border-red-200',
        hover: 'hover:border-red-300',
        shadow: 'hover:shadow-red-500/20'
      },
      indigo: {
        bg: 'bg-indigo-100',
        hoverBg: 'group-hover:bg-indigo-200',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        hover: 'hover:border-indigo-300',
        shadow: 'hover:shadow-indigo-500/20'
      },
      pink: {
        bg: 'bg-pink-100',
        hoverBg: 'group-hover:bg-pink-200',
        text: 'text-pink-600',
        border: 'border-pink-200',
        hover: 'hover:border-pink-300',
        shadow: 'hover:shadow-pink-500/20'
      },
      teal: {
        bg: 'bg-teal-100',
        hoverBg: 'group-hover:bg-teal-200',
        text: 'text-teal-600',
        border: 'border-teal-200',
        hover: 'hover:border-teal-300',
        shadow: 'hover:shadow-teal-500/20'
      },
      cyan: {
        bg: 'bg-cyan-100',
        hoverBg: 'group-hover:bg-cyan-200',
        text: 'text-cyan-600',
        border: 'border-cyan-200',
        hover: 'hover:border-cyan-300',
        shadow: 'hover:shadow-cyan-500/20'
      },
      yellow: {
        bg: 'bg-yellow-100',
        hoverBg: 'group-hover:bg-yellow-200',
        text: 'text-yellow-600',
        border: 'border-yellow-200',
        hover: 'hover:border-yellow-300',
        shadow: 'hover:shadow-yellow-500/20'
      },
      emerald: {
        bg: 'bg-emerald-100',
        hoverBg: 'group-hover:bg-emerald-200',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        hover: 'hover:border-emerald-300',
        shadow: 'hover:shadow-emerald-500/20'
      },
      violet: {
        bg: 'bg-violet-100',
        hoverBg: 'group-hover:bg-violet-200',
        text: 'text-violet-600',
        border: 'border-violet-200',
        hover: 'hover:border-violet-300',
        shadow: 'hover:shadow-violet-500/20'
      }
    };
    return colorMap[colorScheme];
  }

  showTechnologyDetails(technology: any): void {
    this.selectedTechnology = technology;
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
    this.selectedTechnology = null;
  }

  keyTrends: any[] = [
    {
      id: 'cross-platform',
      title: 'Cross-Platform Development',
      description: 'We\'ll leverage frameworks that allow us to build apps for both iOS and Android efficiently, ensuring a broader reach for our clients.',
      icon: 'pi pi-tablet',
      colorScheme: 'blue'
    },
    {
      id: 'ai-ml',
      title: 'AI and Machine Learning Integration',
      description: 'We\'ll explore the integration of AI and ML in mobile apps to enable features like predictive analytics, personalized user experiences, and intelligent automation.',
      icon: 'pi pi-brain',
      colorScheme: 'purple'
    },
    {
      id: 'ux-design',
      title: 'Enhanced User Experience (UX)',
      description: 'We\'ll focus on crafting intuitive, engaging, and accessible UX designs that meet the evolving needs of mobile users.',
      icon: 'pi pi-heart',
      colorScheme: 'pink'
    },
    {
      id: 'security',
      title: 'Security and Performance',
      description: 'We\'ll prioritize security and performance optimization in mobile app development, ensuring that apps are both robust and efficient.',
      icon: 'pi pi-shield',
      colorScheme: 'green'
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      description: 'We\'ll stay abreast of emerging technologies like AR, VR, and 5G, incorporating them into mobile apps where they add value.',
      icon: 'pi pi-eye',
      colorScheme: 'orange'
    }
  ];

  commitments: any[] = [
    {
      title: 'Client-Centric Solutions',
      description: 'Delivering mobile application design and development solutions that meet the unique needs of our clients.',
      icon: 'pi pi-users'
    },
    {
      title: 'Business Results',
      description: 'Creating apps that are not just functional but also drive business results and enhance user experiences.',
      icon: 'pi pi-chart-line'
    },
    {
      title: 'Technology Evolution',
      description: 'Growing with technology updates, staying current with the latest trends and advancements.',
      icon: 'pi pi-refresh'
    }
  ];

  mobileAppTypes: any[] = [
    {
      id: 'native-apps',
      title: 'Native Apps',
      definition: 'We\'ll develop native apps that are specifically designed for a particular platform, such as iOS or Android, using platform-specific languages like Swift or Java.',
      benefits: 'Native apps offer the best performance and integrate deeply with the device\'s hardware and software features.',
      examples: 'Our team will develop native apps that provide a smooth and responsive user experience with access to all device capabilities.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'blue',
      category: 'Platform-Specific'
    },
    {
      id: 'web-apps',
      title: 'Web Apps',
      definition: 'Our team will develop web apps that are accessed via a web browser, built using standard web technologies like HTML, CSS, and JavaScript.',
      benefits: 'Web apps do not require installation and can be accessed from any device with a web browser.',
      examples: 'We\'ll develop web apps that provide a user-friendly experience and can be used on multiple devices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'green',
      category: 'Web-Based'
    },
    {
      id: 'hybrid-apps',
      title: 'Hybrid Apps',
      definition: 'We\'ll develop hybrid apps that combine elements of native and web apps, using frameworks like Cordova or Ionic.',
      benefits: 'Hybrid apps can access device features through plugins and provide a balance between development efficiency and user experience.',
      examples: 'Our team will develop hybrid apps that offer a seamless user experience and can be used on multiple platforms.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'purple',
      category: 'Hybrid'
    },
    {
      id: 'pwa-apps',
      title: 'Progressive Web Apps (PWAs)',
      definition: 'Our team will develop PWAs that provide a more app-like experience with offline capabilities, push notifications, and faster load times.',
      benefits: 'PWAs can be added to the home screen and accessed offline, providing a seamless experience similar to native apps.',
      examples: 'We\'ll develop PWAs that offer a fast and responsive user experience, even on slow networks.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      colorScheme: 'orange',
      category: 'Progressive',
      isWide: true
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform Apps',
      definition: 'We\'ll develop cross-platform apps using frameworks like Flutter, React Native, or Xamarin, which allow the same codebase to be used for both iOS and Android.',
      benefits: 'Cross-platform apps provide a way to reach multiple platforms with a single codebase, reducing development time and costs.',
      examples: 'Our team will develop cross-platform apps that deliver a native-like experience across platforms.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'indigo',
      category: 'Multi-Platform'
    },
    {
      id: 'enterprise-apps',
      title: 'Enterprise Apps',
      definition: 'We\'ll develop enterprise apps that are designed for internal business processes and functions, such as CRM systems or employee management.',
      benefits: 'Enterprise apps can improve productivity and efficiency, and provide a secure and scalable solution for businesses.',
      examples: 'Our team will develop enterprise apps that meet specific business needs and integrate with existing systems.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'violet',
      category: 'Business'
    },
    {
      id: 'gaming-apps',
      title: 'Gaming Apps',
      definition: 'Our team will develop gaming apps that provide interactive entertainment, ranging from casual games to complex simulations.',
      benefits: 'Gaming apps can provide a engaging and immersive experience, and can be developed using various technologies and frameworks.',
      examples: 'We\'ll develop gaming apps that offer advanced graphics and real-time interactions.',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'pink',
      category: 'Entertainment'
    },
    {
      id: 'utility-apps',
      title: 'Utility Apps',
      definition: 'We\'ll develop utility apps that provide specific utilities or tools, such as calculators or password managers.',
      benefits: 'Utility apps can provide a simple and efficient solution for users, and can be developed using various technologies and frameworks.',
      examples: 'Our team will develop utility apps that offer a user-friendly experience and provide specific functionality.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'teal',
      category: 'Productivity'
    },
    {
      id: 'social-apps',
      title: 'Social Media Apps',
      definition: 'Our team will develop social media apps that provide social interaction, content sharing, and communication.',
      benefits: 'Social media apps can provide a platform for users to connect and share content, and can be developed using various technologies and frameworks.',
      examples: 'We\'ll develop social media apps that offer a seamless user experience and provide features like real-time updates and media sharing.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      colorScheme: 'cyan',
      category: 'Social',
      isWide: true
    },
    {
      id: 'educational-apps',
      title: 'Educational Apps',
      definition: 'We\'ll develop educational apps that provide educational content and learning tools, such as language learning apps or online courses.',
      benefits: 'Educational apps can provide an engaging and interactive learning experience, and can be developed using various technologies and frameworks.',
      examples: 'Our team will develop educational apps that offer a user-friendly experience and provide interactive lessons and quizzes.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'emerald',
      category: 'Education'
    },
    {
      id: 'health-apps',
      title: 'Health and Fitness Apps',
      definition: 'Our team will develop health and fitness apps that provide health-related activities, such as fitness tracking or diet management.',
      benefits: 'Health and fitness apps can provide a motivating and supportive experience, and can be developed using various technologies and frameworks.',
      examples: 'We\'ll develop health and fitness apps that offer features like exercise logging and health metrics tracking.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      colorScheme: 'red',
      category: 'Health'
    }
  ];

  selectedApp: any | null = null;
  showModal = false;

  openModal(app: any) {
    this.selectedApp = app;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedApp = null;
  }



}
