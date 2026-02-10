import { Component } from '@angular/core';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-video-production',
  imports: [CommonModule, Nocarouselquotes, ButtonModule, AccordionModule],
  templateUrl: './video-production.html',
  styleUrl: './video-production.scss'
})
export class VideoProduction {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/services/videoproduction.webp',
      title: `
      Unlock your Video Production Marketing Services by
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>
    `,
      description: ''
    };

  quotes = [
    { text: "Craft videos that tell your brand story and drive measurable results." },
    { text: "Transform ideas into powerful video content that inspires action." },
    { text: "Deliver video production services that help businesses make a lasting impact." },
    { text: "Create compelling videos that connect with audiences and fuel engagement." },
    { text: "Elevate your brand with expert-driven video production solutions." }
  ];

  components = [
    {
      title: 'Storytelling',
      icon: 'pi pi-book',
      points: [
        { label: 'Compelling Narratives', description: "We'll craft compelling narratives that capture the essence of your brand and resonate with your target audience." },
        { label: 'Brand Messaging', description: "Our team will develop brand messaging that is consistent across all video content and reinforces your brand identity." }
      ]
    },
    {
      title: 'Visuals',
      icon: 'pi pi-video',
      points: [
        { label: 'High-Quality Footage', description: "We'll capture high-quality footage that meets the highest standards of production value and showcases your brand in the best possible light." },
        { label: 'Visual Effects', description: "Our team will use visual effects to enhance the visual appeal of your video and create a memorable viewing experience." }
      ]
    },
    {
      title: 'Audio',
      icon: 'pi pi-volume-up',
      points: [
        { label: 'Music', description: "We'll add music that enhances the emotional impact of your video and resonates with your target audience." },
        { label: 'Sound Effects', description: "Our team will use sound effects to create a immersive viewing experience and engage your audience." },
        { label: 'Voiceovers', description: "We'll record high-quality voiceovers that are clear, concise, and engaging." }
      ]
    },
    {
      title: 'Distribution',
      icon: 'pi pi-share-alt',
      points: [
        { label: 'Distribution Strategy', description: "We'll develop a distribution strategy that ensures your video reaches your target audience and achieves your marketing goals." },
        { label: 'Social Media', description: "Our team will promote your video on social media platforms to reach a wider audience and drive engagement." },
        { label: 'Video Hosting', description: "We'll host your video on platforms such as YouTube, Vimeo, or Wistia to ensure that it is easily accessible and can be embedded on your website." }
      ]
    },
    {
      title: 'Scriptwriting',
      icon: 'pi pi-pencil',
      points: [
        { label: 'Script Development', description: "We'll develop a script that is clear, concise, and engaging, and that effectively communicates your brand message." },
        { label: 'Storyboarding', description: "Our team will create a storyboard that visualizes the sequence of events and ensures that the video flows smoothly." }
      ]
    },
    {
      title: 'Editing',
      icon: 'pi pi-cog',
      points: [
        { label: 'Video Editing', description: "We'll edit your video to ensure that it is engaging, informative, and effective in communicating your brand message." },
        { label: 'Colour Grading', description: "Our team will use colour grading to enhance the visual appeal of your video and create a consistent look and feel." }
      ]
    },
    {
      title: 'Branding',
      icon: 'pi pi-briefcase',
      points: [
        { label: 'Brand Identity', description: "We'll ensure that your video content is consistent with your brand identity and reinforces your brand messaging." },
        { label: 'Logo Integration', description: "Our team will integrate your logo into your video content to ensure that it is visible and recognizable." }
      ]
    },
    {
      title: 'Optimization',
      icon: 'pi pi-chart-line',
      points: [
        { label: 'SEO Optimization', description: "We'll optimize your video content for search engines to ensure that it is easily discoverable and can be found by your target audience." },
        { label: 'Metadata', description: "Our team will add metadata to your video content to ensure that it is properly categorized and can be easily searched." }
      ]
    }
  ];

  services = [
    {
      title: 'Collaboration',
      icon: 'pi pi-users',
      points: [
        { label: 'Understanding Your Goals', description: "We'll work closely with you to understand your goals, objectives, and target audience, ensuring that our video production services meet your specific needs." },
        { label: 'Regular Communication', description: "Our team will maintain regular communication with you throughout the project, keeping you informed and involved every step of the way." }
      ]
    },
    {
      title: 'Creative Approach',
      icon: 'pi pi-lightbulb',
      points: [
        { label: 'Innovative Storytelling', description: "We'll bring a creative approach to your project, using innovative storytelling techniques to capture the essence of your brand and resonate with your target audience." },
        { label: 'Visual Creativity', description: "Our team of experienced video production professionals will use visual creativity to create a unique and engaging video that stands out from the competition." }
      ]
    },
    {
      title: 'Attention to Detail',
      icon: 'pi pi-search',
      points: [
        { label: 'Quality Control', description: "We'll pay close attention to detail, ensuring that every aspect of your video meets the highest standards of quality and production value." },
        { label: 'Review and Revision', description: "Our team will review and revise your video to ensure that it meets your expectations and is of the highest quality." }
      ]
    },
    {
      title: 'Timely Delivery',
      icon: 'pi pi-clock',
      points: [
        { label: 'Project Management', description: "We'll manage your project efficiently, ensuring that deadlines are met and your video is delivered on time." },
        { label: 'Communication', description: "Our team will keep you informed about the project timeline and any potential delays, ensuring that you're always up-to-date." }
      ]
    },
    {
      title: 'Expertise',
      icon: 'pi pi-briefcase',
      points: [
        { label: 'Experienced Team', description: "Our team of video production professionals has extensive experience in creating high-quality video content that meets the highest standards of production value." },
        { label: 'Industry Knowledge', description: "We'll apply our industry knowledge and expertise to ensure that your video is effective in achieving your marketing goals." }
      ]
    },
    {
      title: 'Flexibility',
      icon: 'pi pi-exchange',
      points: [
        { label: 'Adaptability', description: "We'll adapt to your specific needs and requirements, ensuring that our video production services meet your unique goals and objectives." },
        { label: 'Creative Problem-Solving', description: "Our team will use creative problem-solving to overcome any challenges that may arise during the project." }
      ]
    },
    {
      title: 'Quality Assurance',
      icon: 'pi pi-check-circle',
      points: [
        { label: 'Quality Check', description: "We'll conduct a thorough quality check to ensure that your video meets the highest standards of quality and production value." },
        { label: 'Final Review', description: "Our team will review your video one final time to ensure that it meets your expectations and is ready for distribution." }
      ]
    }
  ];

  benefits = [
    {
      title: 'Increased Engagement',
      icon: 'pi pi-bolt',
      points: [
        { label: 'Engaging Videos', description: "We'll create videos that are designed to engage and interact with your target audience, driving conversions and sales." },
        { label: 'Interactive Elements', description: "Our team will incorporate interactive elements into your video content to increase audience participation and engagement." }
      ]
    },
    {
      title: 'Improved Brand Awareness',
      icon: 'pi pi-id-card',
      points: [
        { label: 'Brand Identity', description: "We'll help you establish your brand identity and values, increasing brand recognition and awareness." },
        { label: 'Consistent Branding', description: "Our team will ensure that your video content is consistent with your brand identity, reinforcing your brand messaging and values." }
      ]
    },
    {
      title: 'Enhanced Storytelling',
      icon: 'pi pi-pencil',
      points: [
        { label: 'Compelling Narratives', description: "Our team of experienced scriptwriters will craft compelling narratives that capture the essence of your brand and resonate with your target audience." },
        { label: 'Emotional Connection', description: "We'll create an emotional connection with your audience through storytelling, increasing the impact and effectiveness of your video content." }
      ]
    },
    {
      title: 'Measurable Results',
      icon: 'pi pi-chart-line',
      points: [
        { label: 'Regular Reporting', description: "We'll provide you with regular reporting and analysis on the performance of your video, ensuring that you can track your ROI and make data-driven decisions." },
        { label: 'Data Analysis', description: "Our team will analyse data on your video's performance, providing insights and recommendations for future video production projects." }
      ]
    },
    {
      title: 'Expertise',
      icon: 'pi pi-briefcase',
      points: [
        { label: 'Experienced Team', description: "Our team of video production professionals has extensive experience in creating high-quality video content that meets the highest standards of production value." },
        { label: 'Industry Knowledge', description: "We'll apply our industry knowledge and expertise to ensure that your video is effective in achieving your marketing goals." }
      ]
    },
    {
      title: 'Customized Solutions',
      icon: 'pi pi-cog',
      points: [
        { label: 'Tailored Approach', description: "We'll take a tailored approach to your video production project, ensuring that our services meet your unique needs and goals." },
        { label: 'Flexible Solutions', description: "Our team will provide flexible solutions that adapt to your changing needs and requirements." }
      ]
    },
    {
      title: 'Increased Conversions',
      icon: 'pi pi-shopping-cart',
      points: [
        { label: 'Conversion-Driven Videos', description: "We'll create videos that are designed to drive conversions and sales, increasing your revenue and ROI." },
        { label: 'Call-to-Action', description: "Our team will incorporate a clear call-to-action into your video content, encouraging your audience to take action." }
      ]
    },
    {
      title: 'Improved Customer Understanding',
      icon: 'pi pi-users',
      points: [
        { label: 'Targeted Content', description: "We'll create targeted content that resonates with your audience, increasing their understanding of your brand and products." },
        { label: 'Customer Insights', description: "Our team will provide insights into your target audience, helping you to better understand their needs and preferences." }
      ]
    }
  ];

  productionSteps = [
    {
      title: 'Concept Development',
      points: [
        { label: 'Collaborative Approach', description: "We'll work closely with you to develop a concept that aligns with your goals and objectives." },
        { label: 'Research and Analysis', description: "Our team will conduct research and analysis to understand your target audience, industry, and competitors." }
      ]
    },
    {
      title: 'Scriptwriting',
      points: [
        { label: 'Compelling Scripts', description: "Our team of experienced scriptwriters will craft compelling scripts that capture the essence of your brand and resonate with your target audience." },
        { label: 'Script Revisions', description: "We'll work with you to revise and refine the script until it meets your expectations." }
      ]
    },
    {
      title: 'Pre-Production',
      points: [
        { label: 'Location Scouting', description: "We'll scout locations that fit your concept and budget, ensuring that the setting is perfect for your video." },
        { label: 'Casting', description: "Our team will work with you to cast talent that fits your brand and message." },
        { label: 'Equipment Setup', description: "We'll set up equipment that meets the highest standards of quality, ensuring that your video is well-produced." }
      ]
    },
    {
      title: 'Production',
      points: [
        { label: 'High-Quality Footage', description: "Our team of experienced videographers and directors will capture high-quality footage that meets your vision." },
        { label: 'Direction and Guidance', description: "We'll provide direction and guidance to talent and crew to ensure that the video is captured according to plan." }
      ]
    },
    {
      title: 'Post-Production',
      points: [
        { label: 'Editing', description: "We'll edit the footage to create a cohesive and engaging narrative." },
        { label: 'Music and Sound Effects', description: "Our team will add music and sound effects that enhance the emotional impact of your video." },
        { label: 'Visual Effects', description: "We'll add visual effects that enhance the visual appeal of your video." }
      ]
    },
    {
      title: 'Review and Revision',
      points: [
        { label: 'Collaborative Review', description: "We'll work with you to review and revise the video until it meets your expectations." },
        { label: 'Final Cut', description: "Our team will finalize the video, ensuring that it is ready for distribution." }
      ]
    },
    {
      title: 'Distribution',
      points: [
        { label: 'Distribution Strategy', description: "We'll develop a distribution strategy that ensures your video reaches your target audience and achieves your marketing goals." },
        { label: 'Publishing', description: "Our team will publish your video on platforms such as YouTube, Vimeo, or Wistia." }
      ]
    }
  ];

 
  videoBenefits = [
  {
    title: 'Increased Engagement',
    icon: 'pi pi-heart',
    points: [
      { label: 'More Engaging than Text', description: "We'll create videos that are more engaging than text-based content, allowing audiences to connect with your brand on a deeper level." },
      { label: 'Emotional Connection', description: "Our team will use storytelling techniques to create an emotional connection with your audience, increasing engagement and loyalty." }
    ]
  },
  {
    title: 'Improved Brand Awareness',
    icon: 'pi pi-bullseye',
    points: [
      { label: 'Brand Recognition', description: "We'll help increase brand recognition and awareness, establishing your brand's identity and values." },
      { label: 'Consistent Branding', description: "Our team will ensure that your video content is consistent with your brand identity, reinforcing your brand messaging and values." }
    ]
  },
  {
    title: 'Enhanced Storytelling',
    icon: 'pi pi-book',
    points: [
      { label: 'Powerful Medium', description: "We'll use video as a powerful medium for storytelling, allowing you to convey complex information in a concise and engaging manner." },
      { label: 'Compelling Narratives', description: "Our team will craft compelling narratives that capture the essence of your brand and resonate with your target audience." }
    ]
  },
  {
    title: 'Increased Conversions',
    icon: 'pi pi-chart-line',
    points: [
      { label: 'Drive Conversions', description: "We'll create videos that drive conversions, whether it's generating leads, making sales, or promoting a specific action." },
      { label: 'Call-to-Action', description: "Our team will incorporate a clear call-to-action into your video content, encouraging your audience to take action." }
    ]
  },
  {
    title: 'Improved Customer Understanding',
    icon: 'pi pi-users',
    points: [
      { label: 'Targeted Content', description: "We'll create targeted content that resonates with your audience, increasing their understanding of your brand and products." },
      { label: 'Customer Insights', description: "Our team will provide insights into your target audience, helping you to better understand their needs and preferences." }
    ]
  },
  {
    title: 'Increased Reach',
    icon: 'pi pi-share-alt',
    points: [
      { label: 'Shareable Content', description: "We'll create shareable content that can be easily shared on social media platforms, increasing your reach and brand awareness." },
      { label: 'Video Optimization', description: "Our team will optimize your video content for search engines, increasing your visibility and reach." }
    ]
  },
  {
    title: 'Measurable Results',
    icon: 'pi pi-chart-bar',
    points: [
      { label: 'Trackable Results', description: "We'll provide trackable results, allowing you to measure the effectiveness of your video content." },
      { label: 'Data Analysis', description: "Our team will analyse data on your video's performance, providing insights and recommendations for future video production projects." }
    ]
  }
];

strengths = [
  { title: 'Creativity', icon: 'pi pi-lightbulb', description: 'Our team is creative and innovative, always looking for new ways to tell stories and capture the essence of a brand.' },
  { title: 'Expertise', icon: 'pi pi-briefcase', description: 'We have extensive experience in video production, delivering high-quality videos that meet top production standards.' },
  { title: 'Flexibility', icon: 'pi pi-sync', description: 'We are flexible and adaptable, able to adjust to changing circumstances and client needs.' },
  { title: 'Attention to Detail', icon: 'pi pi-check-circle', description: 'We pay close attention to detail, ensuring that every video meets the highest quality standards.' },
  { title: 'Storytelling Ability', icon: 'pi pi-pencil', description: 'Our team is skilled in storytelling, crafting narratives that capture the essence of your brand.' },
  { title: 'Technical Expertise', icon: 'pi pi-cog', description: 'We have technical expertise in lighting, sound, and editing, using the latest software and equipment.' },
  { title: 'Collaboration', icon: 'pi pi-users', description: 'We work closely with clients to understand goals, ensuring every video meets expectations.' },
  { title: 'Innovative Approach', icon: 'pi pi-star', description: 'We always seek new and innovative ways to produce videos, experimenting with technology and storytelling.' },
  { title: 'Quality Control', icon: 'pi pi-check', description: 'A rigorous quality control process ensures every video meets the highest standards.' },
  { title: 'Customer Service', icon: 'pi pi-comments', description: 'We provide exceptional customer service, responding promptly and delivering on time and budget.' }
];

// videoServices array
videoServices = [
  {
    title: 'Corporate Services',
    icon: 'pi pi-briefcase',
    points: [
      { label: 'Corporate Videos', description: 'Engaging videos for company profiles, product showcases, and training sessions.' },
      { label: 'Explainer Videos', description: 'Animated or live-action videos to explain complex concepts.' },
      { label: 'Testimonials', description: 'Customer testimonials and success stories.' },
      { label: 'Event Coverage', description: 'Live events, conferences, and post-event summaries.' }
    ]
  },
  {
    title: 'Company Profile & Product Videos',
    icon: 'pi pi-building',
    points: [
      { label: 'Company Profile Videos', description: 'Showcasing brand history, mission, and values.' },
      { label: 'Product Demo Videos', description: 'Highlighting features and benefits of products.' },
      { label: 'Training Videos', description: 'Educating employees, customers, or partners.' },
      { label: 'Case Study Videos', description: 'Showcasing client success stories.' },
      { label: 'CEO Interviews', description: 'Sharing insights from key executives.' }
    ]
  },
  {
    title: 'Internal Communications',
    icon: 'pi pi-users',
    points: [
      { label: 'Internal Communications Videos', description: 'Engaging employees and promoting company culture.' },
      { label: 'Recruitment Videos', description: 'Attracting top talent through culture-focused videos.' },
      { label: 'Annual Report Videos', description: 'Summarizing company performance and achievements.' }
    ]
  },
  {
    title: 'Product Launch & Customer Journey',
    icon: 'pi pi-bolt',
    points: [
      { label: 'Product Launch Videos', description: 'Generating buzz around new products.' },
      { label: 'Customer Journey Videos', description: 'Showcasing the customer experience.' }
    ]
  },
  {
    title: 'Marketing Services',
    icon: 'pi pi-chart-line',
    points: [
      { label: 'Product Videos', description: 'Showcase products to drive sales and brand awareness.' },
      { label: 'Brand Storytelling', description: 'Create emotional connections through storytelling videos.' },
      { label: 'Social Media Videos', description: 'Short-form videos to boost engagement.' },
      { label: 'Influencer Videos', description: 'Collaborations to promote products or services.' }
    ]
  },
  {
    title: 'Creative Services',
    icon: 'pi pi-star',
    points: [
      { label: 'Short Films', description: 'Web series, short films, or documentaries.' },
      { label: 'Animation', description: '2D or 3D animations for videos, commercials, or social media.' },
      { label: 'Motion Graphics', description: 'Dynamic graphics for videos and social media.' },
      { label: 'VR & AR Experiences', description: 'Immersive virtual and augmented reality videos.' }
    ]
  },
  {
    title: 'Post-Production Services',
    icon: 'pi pi-video',
    points: [
      { label: 'Video Editing', description: 'Professional editing for all formats.' },
      { label: 'Colour Grading & Correction', description: 'Enhance visual aesthetic and consistency.' },
      { label: 'Sound Design', description: 'Immersive audio with music, effects, and voiceovers.' }
    ]
  },
  {
    title: 'Specialized Services',
    icon: 'pi pi-globe',
    points: [
      { label: 'Drone Videography', description: 'Stunning aerial footage.' },
      { label: 'Live Streaming', description: 'Broadcast events and launches live.' },
      { label: '360-Degree Video', description: 'Immersive virtual experiences.' },
      { label: 'Virtual Event Production', description: 'Online conferences, meetups, and events.' }
    ]
  }
];


industryServices = [
  {
    title: 'Real Estate Sector',
    icon: 'pi pi-home',
    color: 'bg-gradient-to-tr from-blue-200 to-blue-400 text-white',
    points: [
      { label: 'Property Showcase Videos', description: 'High-quality videos that showcase properties for sale or rent.' },
      { label: 'Virtual Tours', description: 'Immersive tours that allow buyers to explore properties remotely.' },
      { label: 'Neighbourhood Guides', description: 'Guides highlighting local amenities and attractions.' },
      { label: 'Agent Profile Videos', description: 'Videos showcasing agent expertise and personality.' },
      { label: 'Open House Videos', description: 'Live or recorded open house property tours.' }
    ]
  },
  {
    title: 'Food Industry',
    icon: 'pi pi-cutlery',
    color: 'bg-gradient-to-tr from-green-200 to-green-400 text-white',
    points: [
      { label: 'Recipe Videos', description: 'Engaging recipe videos with cooking techniques and ingredients.' },
      { label: 'Product Showcase Videos', description: 'Showcasing food products in the best light.' },
      { label: 'Restaurant Promotional Videos', description: 'Promotional videos for restaurants and their offerings.' },
      { label: 'Food Blogging', description: 'Content showcasing recipes and culinary expertise.' },
      { label: 'Culinary Event Coverage', description: 'Coverage of food festivals and cooking competitions.' }
    ]
  },
  {
    title: 'Pharma Industry',
    icon: 'pi pi-plus-circle',
    color: 'bg-gradient-to-tr from-purple-200 to-purple-400 text-white',
    points: [
      { label: 'Product Explainer Videos', description: 'Clear explainer videos for pharmaceutical products.' },
      { label: 'Medical Animation', description: 'Animations that illustrate complex medical concepts.' },
      { label: 'Doctor Testimonials', description: 'Testimonials from healthcare professionals.' },
      { label: 'Patient Education Videos', description: 'Informative videos about diseases and treatments.' },
      { label: 'Clinical Trial Videos', description: 'Showcasing clinical trials and their results.' }
    ]
  },
  {
    title: 'Fashion Industry',
    icon: 'pi pi-star',
    color: 'bg-gradient-to-tr from-pink-200 to-pink-400 text-white',
    points: [
      { label: 'Fashion Show Coverage', description: 'Professional coverage of fashion shows and events.' },
      { label: 'Designer Interviews', description: 'Interviews with designers and industry experts.' },
      { label: 'Product Showcase Videos', description: 'Videos of fashion products and accessories.' },
      { label: 'Behind the Scenes Videos', description: 'Behind-the-scenes insights into fashion production.' },
      { label: 'Lifestyle Videos', description: 'Videos showcasing fashion trends and styles.' }
    ]
  },
  {
    title: 'Healthcare Video Production',
    icon: 'pi pi-heart',
    color: 'bg-gradient-to-tr from-red-200 to-red-400 text-white',
    points: [
      { label: 'Medical Explainer Videos', description: 'Simplify complex concepts for patients and professionals.' },
      { label: 'Patient Education Videos', description: 'Educational content to empower patients.' },
      { label: 'Doctor Testimonials', description: 'Healthcare professional testimonials.' },
      { label: 'Medical Procedure Videos', description: 'Demonstrations of medical techniques and treatments.' },
      { label: 'Healthcare Marketing Videos', description: 'Marketing videos for healthcare services and facilities.' },
      { label: 'Medical Animation', description: 'Engaging animations explaining medical concepts.' },
      { label: 'Patient Storytelling', description: 'Real-life patient experiences that inspire.' },
      { label: 'Healthcare Training Videos', description: 'Training content for healthcare professionals.' },
      { label: 'Clinical Trial Videos', description: 'Highlighting benefits and risks of new treatments.' },
      { label: 'Pharmaceutical Product Videos', description: 'Explaining medications and their benefits.' }
    ]
  },
  {
    title: 'Education Sector',
    icon: 'pi pi-book',
    color: 'bg-gradient-to-tr from-yellow-200 to-yellow-400 text-white',
    points: [
      { label: 'Educational Videos', description: 'Videos covering academic subjects and topics.' },
      { label: 'Explainer Videos', description: 'Simplifying complex concepts for easy understanding.' },
      { label: 'Lecture Capture', description: 'Recording and producing high-quality lectures.' },
      { label: 'Virtual Field Trips', description: 'Immersive learning experiences for students.' },
      { label: 'Student Showcase Videos', description: 'Highlighting student projects and achievements.' },
      { label: 'Institutional Promotions', description: 'Promotional videos for schools and universities.' },
      { label: 'Training Videos', description: 'Professional development training content.' },
      { label: 'Animation & Graphics', description: '2D/3D animations, infographics, and motion graphics.' },
      { label: 'Documentary-Style Videos', description: 'In-depth exploration of educational topics.' },
      { label: 'Online Course Content', description: 'Video lessons, tutorials, and assessments.' }
    ]
  },
  {
    title: 'Corporate Solutions',
    icon: 'pi pi-briefcase',
    color: 'bg-gradient-to-tr from-orange-200 to-orange-400 text-white',
    points: [
      { label: 'Internal Communication Strategy', description: 'Comprehensive plans aligned with company goals.' },
      { label: 'Change Management Videos', description: 'Helping employees adapt to organizational changes.' },
      { label: 'Employee Advocacy Programs', description: 'Encouraging employees to share and promote brand values.' },
      { label: 'CSR Videos', description: 'Showcasing corporate social responsibility initiatives.' },
      { label: 'Investor Relations Videos', description: 'Communicating updates to investors and stakeholders.' },
      { label: 'Crisis Communications Videos', description: 'Managing communication during crisis situations.' },
      { label: 'Brand Storytelling', description: 'Highlighting company history, mission, and values.' },
      { label: 'Leadership Messaging', description: 'Communicating vision and strategies from leadership.' },
      { label: 'Corporate Culture Videos', description: 'Showcasing workplace culture and values.' },
      { label: 'Training & Development Programs', description: 'Enhancing employee skills through training content.' },
      { label: 'Virtual Event Production', description: 'Producing engaging online corporate events.' },
      { label: 'Corporate Video Strategy', description: 'Strategic planning for video-driven goals.' },
      { label: 'Video Content Distribution', description: 'Multi-channel distribution to reach target audiences.' },
      { label: 'Video Analytics', description: 'Measuring effectiveness and ROI of video content.' }
    ]
  }
];

}
