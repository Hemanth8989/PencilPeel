import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Nocarouselherosection } from "../../components/nocarouselherosection/nocarouselherosection";
import { Benefit } from '../../components/benefit/benefit';

interface LocationCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
interface PromotionCard {
  icon: string;
  iconColors: string;   // Tailwind gradient classes for icon bg
  titleColor: string;   // Tailwind text color for card title
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  iconColors: string;   // Tailwind gradient background for icon
  titleColor: string;   // Tailwind text color for title
  title: string;
  description: string;
}

@Component({
  selector: 'app-filmpromo',
  imports: [CardModule, CommonModule, ButtonModule, Nocarouselherosection,Benefit],
  templateUrl: './filmpromo.html',
  styleUrl: './filmpromo.scss'
})
export class Filmpromo {

  // In your component.ts
  activeIndex = 0;
  intervalId: any;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.pageYOffset;
    const bg = document.querySelector('.parallax-bg') as HTMLElement;
    if(bg){
      bg.style.backgroundPosition = `center calc(50% + ${scrolled * 0.3}px)`;
    }
  }
  ngOnInit(): void {
    this.startAutoCycle();
  }
  heroContent = {
  title: `
    Unlock your 
    <span class="bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent font-bold tracking-tight">
      MOVIE PROMOTION
    </span><br />
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
      Pencil Peel IMT
    </span>
  `,
  description: `
    <span class="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
      South India’s No.1 Film Advertising Company.
    </span><br />
    We Promote More than 
    <span class="text-blue-600 font-semibold">700+ Films</span> Across the Globe.<br />
    One 
    <span class="text-green-600 font-bold">AD</span> can add 
    <span class="text-green-600 font-bold">VALUE</span> to your 
    <span class="text-blue-600 font-bold">COMPANY</span>.
  `,
  image: '/film/behindscene.webp' // Replace with your actual image path
  };

  locations: LocationCard[] = [
    {
      id: 1,
      title: 'Global Malls',
      description: 'We can promote your film in popular malls worldwide, targeting shoppers and families.',
      imageUrl: 'film/globalmall.webp'
    },
    {
      id: 2,
      title: 'International Airports',
      description: 'We can promote your film in major airports globally, targeting travellers and tourists.',
      imageUrl: 'film/iairports1.webp'
    },
    {
      id: 3,
      title: 'Tourist Hotspots',
      description: 'We can promote your film in popular tourist areas, targeting visitors and travellers.',
      imageUrl: 'film/thotspot1.webp'
    },
    {
      id: 4,
      title: 'Festivals and Events',
      description: 'We can promote your film at international festivals and events, targeting specific audiences and demographics.',
      imageUrl: 'film/fevent.webp'
    },
    {
      id: 5,
      title: 'Beaches and Resorts',
      description: 'We can promote your film at beaches and resorts, targeting tourists and vacationers.',
      imageUrl: 'film/filmbeach.webp'
    },
    {
      id: 6,
      title: 'City Centres',
      description: 'We can promote your film in city centres, targeting office workers, shoppers, and tourists.',
      imageUrl: 'film/fcitycenter.webp'
    },
    {
      id: 7,
      title: 'Public Squares',
      description: 'We can promote your film in public squares, targeting pedestrians and locals.',
      imageUrl: 'film/fpublicsquare.webp'
    },
    {
      id: 8,
      title: 'Landmark Locations',
      description: 'We can promote your film at landmark locations, targeting tourists and locals.',
      imageUrl: 'film/ilandmark.webp'
    },
    {
      id: 9,
      title: 'Shopping Districts',
      description: 'We can promote your film in shopping districts, targeting shoppers and office workers.',
      imageUrl: 'film/fshoppingdistrict.webp'
    },
    {
      id: 10,
      title: 'Cultural Events',
      description: 'We can promote your film at cultural events, targeting art enthusiasts and culturally inclined audiences.',
      imageUrl: 'film/cevent.webp'
    }
  ];

  OurMovePromotionServices = [
    {
      icon: 'pi-compass',
      iconColor: 'text-orange-500',
      title: 'Strategic Planning',
      description: 'Customized marketing plans aligning with your film’s unique needs and goals.'
    },
    {
      icon: 'pi-star-fill',
      iconColor: 'text-yellow-400',
      title: 'Creative Content',
      description: 'Engaging trailers, teasers, posters, and print ads that capture your film’s essence.'
    },
    {
      icon: 'pi-share-alt',
      iconColor: 'text-orange-400',
      title: 'Social Media Marketing',
      description: 'Leveraging platforms to build anticipation, generate buzz, and engage with fans.'
    },
    {
      icon: 'pi-users',
      iconColor: 'text-yellow-500',
      title: 'Influencer Marketing',
      description: 'Collaborating with influencers and celebrities to broaden your film’s reach.'
    },
    {
      icon: 'pi-megaphone',
      iconColor: 'text-orange-500',
      title: 'Public Relations',
      description: 'Organizing public appearances, premieres, and events for your film and stars.'
    },
    {
      icon: 'pi-gift',
      iconColor: 'text-yellow-400',
      title: 'Contests & Giveaways',
      description: 'Hosting exciting contests and giveaways to spark engagement and enthusiasm.'
    },
    {
      icon: 'pi-calendar',
      iconColor: 'text-orange-400',
      title: 'Event Marketing',
      description: 'Driving excitement through premieres, screenings, and Q&A sessions for your film.',
      fullWidth: true  // flag to span two columns
    }
  ];

  strengths = [
  {
    icon: 'pi-camera',
    title: 'Onset Publicity & Still Promotions',
    description: 'Capturing the excitement of the set to generate powerful visual buzz.'
  },
  {
    icon: 'pi-video',
    title: 'Behind the Scenes, Still & Video Promotions',
    description: 'Go beyond the script—share the magic of creation in real time.'
  },
  {
    icon: 'pi-comments',
    title: 'Special On-Set Interviews',
    description: 'Intimate interviews to build fan connection with the cast and crew.'
  },
  {
    icon: 'pi-desktop',
    title: 'Digital and Printed Publicity',
    description: 'Amplify film presence across digital screens and traditional print.'
  },
  {
    icon: 'pi-image',
    title: 'Film Posters',
    description: 'Striking visuals that catch attention and linger in the mind.'
  },
  {
    icon: 'pi-play',
    title: 'Teaser, Trailer, Songs Promotion',
    description: 'Build hype at every stage with curated video and audio showcases.'
  },
  {
    icon: 'pi-thumbs-up',
    title: 'Review Marketing',
    description: 'Strategically managed reviews to boost audience trust and anticipation.'
  },
  {
    icon: 'pi-mobile',
    title: 'Promotion on Online Platforms and Mobile Applications',
    description: 'Optimized campaigns for web platforms and the latest mobile trends.'
  },
  {
    icon: 'pi-map-marker',
    title: 'Outdoor Promotion',
    description: 'High-visibility engagement through banners, hoardings, and events.'
  },
  {
    icon: 'pi-building',
    title: 'Multiplex Campaign across the Country',
    description: 'Nationwide multiplex tie-ups to reach theater-going audiences everywhere.'
  },
  {
    icon: 'pi-forward',
    title: 'Pre – Release Promotion',
    description: 'Drive anticipation and buzz in the crucial weeks before the film drops.'
  },
  {
    icon: 'pi-calendar',
    title: 'Release Promotion',
    description: 'Confidently launch with event-driven promos on release day.'
  },
  {
    icon: 'pi-refresh',
    title: 'Post – Release Promotion',
    description: 'Sustain momentum and extend box office lifecycles beyond release weekend.'
  },
  {
    icon: 'pi-star',
    title: 'Experiential Marketing',
    description: 'Memorable, immersive activations forging a deep audience connection.'
  },
  {
    icon: 'pi-send',
    title: 'Film Team Tour Marketing',
    description: 'Star-powered tours and roadshows across cities build media heat.'
  },
  {
    icon: 'pi-broadcast',
    title: 'Paper, TV & Radio Advertising',
    description: 'Classic and digital broadcast for omnichannel film awareness.'
  }
];

outdoorLocations = [
  { 
    name: "Bus Stands and Bus Shelters", 
    desc: "Posters, digital displays, or interactive kiosks at bus stands and shelters to reach commuters.",
    image: "/film/locations/busstand.webp"
  },
  { 
    name: "Airports", 
    desc: "Digital displays, posters, or in-flight ads targeting global travellers.",
    image: "/film/iairports1.webp"
  },
  { 
    name: "Railway Stations", 
    desc: "Posters, digital displays, or kiosks in high-traffic rail areas.",
    image: "/film/locations/trainstation.webp"
  },
  { 
    name: "Malls and Shopping Centres", 
    desc: "Digital displays, posters, or mall-wide events for entertainment shoppers.",
    image: "/film/locations/shoppingmalls.webp"
  },
  { 
    name: "Movie Theatres", 
    desc: "In-theatre advertising, lobby displays, or pre-roll ads.",
    image: "/film/locations/theaters.webp"
  },
  { 
    name: "Public Transportation", 
    desc: "Advertising on buses, trains, and public transit vehicles.",
    image: "/film/locations/pubtransportation.webp"
  },
  { 
    name: "College Campuses", 
    desc: "Posters, displays, or campus events for youth audiences.",
    image: "/film/locations/collegecampus.webp"
  },
  { 
    name: "Shopping Malls' LED Screens", 
    desc: "Film ads on mall LED screens for high-impact visual campaigns.",
    image: "/film/locations/shoppingmalls.webp"
  },
  { 
    name: "Street Furniture", 
    desc: "Ads on benches, lamp posts, trash cans, and urban fixtures.",
    image: "/film/locations/streetfurnitures.webp"
  },
  { 
    name: "Billboards", 
    desc: "Large-format posters in high-traffic city locations.",
    image: "/film/locations/billboards.webp"
  },
  { 
    name: "Digital Billboards", 
    desc: "Animated and dynamic digital signage in key destinations.",
    image: "/dm/Digital Billboard 2.jpeg"
  },
  { 
    name: "Park and Ride Locations", 
    desc: "Promotion at commuter park and ride facilities.",
    image: "/dm/Park and Ride Locations.png"
  },
  { 
    name: "Stadiums and Arenas", 
    desc: "Ad campaigns at sports and event megaplexes.",
    image: "/dm/Stadiums and Arens.png"
  },
  { 
    name: "Beaches and Tourist Areas", 
    desc: "Brand displays in tourism and leisure destinations.",
    image: "/dm/Beaches and Tourist Areas.png"
  },
  { 
    name: "Public Squares", 
    desc: "High-visibility campaigns at urban public squares.",
    image: "/dm/Public Square.png"
  },
  { 
    name: "Highway Rest Stops", 
    desc: "Targeting travellers at popular highway stops.",
    image: "/dm/Highway Rest Stops.png"
  },
  { 
    name: "Shopping Districts", 
    desc: "Focus on retail foot-traffic with creative ads.",
    image: "/dm/Shopping Districts.png"
  },
  { 
    name: "Event Venues", 
    desc: "Ads and branding for concert & event venues.",
    image: "/dm/Event Venues.png"
  },
  { 
    name: "Gym and Fitness Centres", 
    desc: "Target health-focused audiences with local partnerships.",
    image: "/dm/Gym and Fitness Centers.png"
  },
  { 
    name: "Museums and Galleries", 
    desc: "Engagements with art and culture enthusiasts.",
    image: "/dm/museum and galleries.png"
  },
  { 
    name: "Parks and Recreation Areas", 
    desc: "Campaigns in outdoor spaces for family audiences.",
    image: "/dm/Parks and Recreation areas.png"
  },
  { 
    name: "Public Libraries", 
    desc: "Connecting with intellectual and student film fans.",
    image: "/dm/Public Libraries.png"
  },
  { 
    name: "Festivals and Events", 
    desc: "Activate film buzz at cultural, food, and music festivals.",
    image: "/dm/Festivals and Events.png"
  },
  { 
    name: "Sports Bars and Restaurants", 
    desc: "Reach sports fans & foodies at popular venues.",
    image: "/dm/Sports bars and Restarents.png"
  },
  { 
    name: "University and College Campuses", 
    desc: "Student-centric film promotions.",
    image: "/dm/University and College Campous.png"
  },
  { 
    name: "Downtown Areas", 
    desc: "Business district campaigns for maximum urban visibility.",
    image: "/dm/Downtown areas.png"
  },
  { 
    name: "Tourist Information Centres", 
    desc: "Target visitors and travellers at info hubs.",
    image: "/dm/tourist information center.png"
  },
  { 
    name: "Outdoor Malls and Markets", 
    desc: "Film ads at street markets & outdoor shopping.",
    image: "/dm/outdoor mall and market.png"
  },
  { 
    name: "Food Courts", 
    desc: "Direct-to-consumer film buzz in eating spaces.",
    image: "/dm/Food Courts.png"
  },
  { 
    name: "Shopping Malls' Food Areas", 
    desc: "Vibrant ads for families, youth, and moviegoers.",
    image: "/dm/Shopping Malls and Food Areas.png"
  },
  { 
    name: "Gas Stations", 
    desc: "Highway and commuter film promotion.",
    image: "/dm/Gas Stantions.png"
  },
  { 
    name: "Parking Garages", 
    desc: "Unlock unseen promotions in parking areas.",
    image: "/dm/Parking Garages.png"
  },
  { 
    name: "Bicycle Stations", 
    desc: "Appeal to urban cyclists and green commuters.",
    image: "/dm/bicycle station.png"
  },
  { 
    name: "Public Art Installations", 
    desc: "Creative integration near captivating art.",
    image: "/dm/public art installation.png"
  },
  { 
    name: "Community Centres", 
    desc: "Involve neighborhoods with family-focused activations.",
    image: "/dm/Community Centers.png"
  },
  { 
    name: "Health Food Stores", 
    desc: "Tap into wellness audiences and influencers.",
    image: "/dm/Health and Food Stores.png"
  },
  { 
    name: "Pet Stores", 
    desc: "Attract pet owners and animal lovers to your film.",
    image: "/dm/Pet Stores.png"
  },
  { 
    name: "Outdoor Fitness Classes", 
    desc: "Engage active, health-conscious audiences.",
    image: "/dm/Outdoor Fitness Classes.png"
  },
  { 
    name: "Outdoor Concerts", 
    desc: "Mega screens and promo at music festivals/concerts.",
    image: "/dm/Outdoor Concerts.png"
  },
  { 
    name: "Marathons and Running Events", 
    desc: "Brand presence among athletes and active crowds.",
    image: "/dm/Marathoons and Running Events.png"
  },
  { 
    name: "Food Festivals", 
    desc: "Buzz among foodies and culinary enthusiasts.",
    image: "/dm/Food Festivals.png"
  },
  { 
    name: "Art Fairs", 
    desc: "Celebrate cinema among artists and collectors.",
    image: "/dm/Art Fairs.png"
  },
  { 
    name: "Charity Events", 
    desc: "Align with philanthropy and social causes.",
    image: "/dm/Charity Events.png"
  },
  { 
    name: "Sports Events", 
    desc: "Promotions at athletic and celebratory events.",
    image: "/dm/Sports Events.png"
  },
  { 
    name: "Outdoor Movie Screenings", 
    desc: "Promote directly to film-loving crowds.",
    image: "/dm/Outdoor Movie Screenings.png"
  },
  { 
    name: "Community Events", 
    desc: "Film visibility at fairs, carnivals, and socials.",
    image: "/dm/Community Events.png"
  },
  { 
    name: "Wellness Centres", 
    desc: "Target mindful & health-oriented film audiences.",
    image: "/dm/Wellness Centers.png"
  },
  { 
    name: "Public Transportation Hubs", 
    desc: "Major exposure at transit interchanges.",
    image: "/dm/Public Transportation Hubs.png"
  }
];
bititle:string = 'Benefits of International Promotion';

benefits: any[] = [
    {
      icon: 'pi pi-globe',
      iconColors: 'bg-gradient-to-tr from-blue-500 to-purple-500',
      titleColor: 'text-blue-800',
      title: 'Global Reach',
      description: 'Promote your film to a global audience, increasing its reach and visibility.'
    },
    {
      icon: 'pi pi-bolt',
      iconColors: 'bg-gradient-to-tr from-orange-400 to-orange-600',
      titleColor: 'text-orange-800',
      title: 'Targeted Advertising',
      description: 'Target specific demographics and audiences in different locations.'
    },
    {
      icon: 'pi pi-star',
      iconColors: 'bg-gradient-to-tr from-green-400 to-teal-500',
      titleColor: 'text-green-800',
      title: 'Brand Awareness',
      description: 'Build a strong brand identity for your film globally.'
    },
    {
      icon: 'pi pi-users',
      iconColors: 'bg-gradient-to-tr from-pink-400 to-purple-500',
      titleColor: 'text-purple-800',
      title: 'Cultural Impact & Recognition',
      description: 'Gain recognition at festivals, attract media attention, and make a global cultural impact.'
    }
];
promotions: any[] = [
    {
      icon: 'pi pi-share-alt',
      iconColors: 'bg-gradient-to-tr from-blue-500 to-indigo-500',
      titleColor: 'text-blue-800',
      title: 'Social Media Campaigns',
      description: 'We leverage social media platforms to reach global audiences, creating engaging content and campaigns that resonate with diverse cultures.'
    },
    {
      icon: 'pi pi-users',
      iconColors: 'bg-gradient-to-tr from-orange-400 to-red-500',
      titleColor: 'text-orange-800',
      title: 'Influencer Partnerships',
      description: 'We partner with international influencers and celebrities to promote your film to their global followers.'
    },
    {
      icon: 'pi pi-language',
      iconColors: 'bg-gradient-to-tr from-green-400 to-teal-500',
      titleColor: 'text-green-800',
      title: 'Localized Content',
      description: 'We create localized content, including subtitles, dubbing, and promotional materials, to cater to different languages and cultures.'
    },
    {
      icon: 'pi pi-send',
      iconColors: 'bg-gradient-to-tr from-pink-400 to-purple-500',
      titleColor: 'text-purple-800',
      title: 'Global Distribution',
      description: 'We work with global distributors to ensure that your film reaches audiences worldwide.'
    }
];
heading = 'Global Film Promotion by Pencil Peel IMT';
lead = `We offer a comprehensive approach to promote films internationally – combining marketing strategies, creative campaigns, and global distribution partnerships.`;
globalpromo: any[] = [
    {
      icon: 'pi-globe',
      iconColor: 'text-blue-600',
      bgGradient: 'bg-gradient-to-br from-blue-100 to-indigo-50',
      title: 'Global Marketing Strategies',
      description: 'Strategic campaigns designed for global reach, leveraging market insights and audience data.',
    },
    {
      icon: 'pi-share-alt',
      iconColor: 'text-orange-500',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-amber-100',
      title: 'Social Media Campaigns',
      description: 'Engaging social content and campaigns tailored for diverse demographics across platforms.',
    },
    {
      icon: 'pi-users',
      iconColor: 'text-purple-600',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-100',
      title: 'Influencer Partnerships',
      description: 'Collaborations with international influencers and celebrities to boost film buzz and reach.',
    },
    {
      icon: 'pi-language',
      iconColor: 'text-green-600',
      bgGradient: 'bg-gradient-to-br from-green-50 to-teal-100',
      title: 'Localized Content',
      description: 'Subtitles, dubbing, and promotional material localization to connect with multiple cultures.',
    },
    {
      icon: 'pi-send',
      iconColor: 'text-amber-600',
      bgGradient: 'bg-gradient-to-br from-yellow-50 to-orange-100',
      title: 'Global Distribution',
      description: 'Distribution partnerships with networks and streamers to maximize worldwide audience access.',
      fullWidth: true, // Example if you want this card to span two columns on tablet/desktop
    }
];
gbtitle:string = 'Benefits of Global Promotions'
globalbenefits:any[] = [
  {
    icon: 'pi pi-globe',
    iconColors: 'bg-gradient-to-tr from-blue-500 to-purple-500',
    titleColor: 'text-blue-800',
    title: 'Global Reach',
    description: 'Promote your film to a global audience, increasing its reach and visibility.'
  },
  {
    icon: 'pi pi-bolt',
    iconColors: 'bg-gradient-to-tr from-orange-400 to-orange-600',
    titleColor: 'text-orange-800',
    title: 'Targeted Advertising',
    description: 'Target specific demographics and audiences in different locations.'
  },
  {
    icon: 'pi pi-star',
    iconColors: 'bg-gradient-to-tr from-green-400 to-teal-500',
    titleColor: 'text-green-800',
    title: 'Enhanced Brand Awareness',
    description: 'Build a strong, recognizable brand identity for your film globally.'
  },
  {
    icon: 'pi pi-wallet',
    iconColors: 'bg-gradient-to-tr from-yellow-400 to-amber-500',
    titleColor: 'text-yellow-800',
    title: 'Higher Ticket Sales',
    description: 'Drive ticket sales and revenue through strategic global marketing campaigns.'
  },
  {
    icon: 'pi pi-users',
    iconColors: 'bg-gradient-to-tr from-pink-400 to-purple-500',
    titleColor: 'text-purple-800',
    title: 'Cultural Impact & Recognition',
    description: 'Gain recognition at international film festivals and attract media attention.'
  }
];

  mpstitle:string = 'Movie Promotion Services by Pencil Peel IMT';
  mpsdescription :string= `At Pencil Peel IMT, we specialize in creating and executing effective movie promotion strategies that drive ticket sales and make your film a commercial success.`;

  keyObjectives: PromotionCard[] = [
    {
      icon: 'pi pi-bullseye',
      iconColors: 'bg-gradient-to-tr from-blue-500 to-indigo-600',
      titleColor: 'text-blue-800',
      title: 'Create Awareness',
      description: 'Inform potential audiences about your movie’s existence, plot, and release date.'
    },
    {
      icon: 'pi pi-fire',
      iconColors: 'bg-gradient-to-tr from-orange-400 to-red-500',
      titleColor: 'text-orange-800',
      title: 'Build Anticipation',
      description: 'Generate excitement and anticipation among fans and potential viewers.'
    },
    {
      icon: 'pi pi-comments',
      iconColors: 'bg-gradient-to-tr from-purple-500 to-pink-500',
      titleColor: 'text-purple-800',
      title: 'Generate Buzz',
      description: 'Create positive word-of-mouth and online buzz around your movie.'
    },
    {
      icon: 'pi pi-ticket',
      iconColors: 'bg-gradient-to-tr from-yellow-400 to-amber-500',
      titleColor: 'text-yellow-800',
      title: 'Drive Ticket Sales',
      description: 'Encourage people to buy tickets and watch your movie.'
    }
  ];

  commonStrategies: PromotionCard[] = [
    {
      icon: 'pi pi-video',
      iconColors: 'bg-gradient-to-tr from-blue-400 to-cyan-500',
      titleColor: 'text-cyan-800',
      title: 'Trailers and Teasers',
      description: 'Create and release short promotional videos showcasing key moments of your movie.'
    },
    {
      icon: 'pi pi-image',
      iconColors: 'bg-gradient-to-tr from-pink-400 to-red-500',
      titleColor: 'text-red-700',
      title: 'Posters and Print Ads',
      description: 'Design eye-catching visuals and compelling copy to promote your movie in print media.'
    },
    {
      icon: 'pi pi-hashtag',
      iconColors: 'bg-gradient-to-tr from-purple-400 to-indigo-600',
      titleColor: 'text-indigo-800',
      title: 'Social Media Marketing',
      description: 'Leverage social media platforms to engage fans, share updates, and promote your movie.'
    },
    {
      icon: 'pi pi-microphone',
      iconColors: 'bg-gradient-to-tr from-green-400 to-teal-600',
      titleColor: 'text-green-700',
      title: 'Interviews and Talk Shows',
      description: 'Feature the cast and crew to build buzz and anticipation.'
    },
    {
      icon: 'pi pi-calendar-plus',
      iconColors: 'bg-gradient-to-tr from-yellow-400 to-orange-500',
      titleColor: 'text-yellow-700',
      title: 'Public Appearances',
      description: 'Organize premieres and promotional events to showcase the movie.'
    },
    {
      icon: 'pi pi-user-plus',
      iconColors: 'bg-gradient-to-tr from-pink-500 to-purple-600',
      titleColor: 'text-pink-700',
      title: 'Influencer Marketing',
      description: 'Partner with influencers and celebrities to promote your movie.'
    },
    {
      icon: 'pi pi-gift',
      iconColors: 'bg-gradient-to-tr from-indigo-400 to-blue-600',
      titleColor: 'text-blue-700',
      title: 'Contests and Giveaways',
      description: 'Host contests to engage fans and generate excitement.'
    }
  ];



  
  whyChooseFeatures: Feature[] = [
  {
    icon: 'pi pi-briefcase',
    iconColors: 'bg-gradient-to-tr from-orange-400 to-yellow-500',
    titleColor: 'text-orange-700',
    title: 'Expertise',
    description: 'Our team has extensive experience in promoting movies and creating successful marketing campaigns.'
  },
  {
    icon: 'pi pi-lightbulb',
    iconColors: 'bg-gradient-to-tr from-yellow-400 to-amber-500',
    titleColor: 'text-amber-700',
    title: 'Creative Approach',
    description: 'We bring a fresh and creative approach to movie promotion, ensuring that your film stands out in a crowded market.'
  },
  {
    icon: 'pi pi-globe',
    iconColors: 'bg-gradient-to-tr from-yellow-500 to-orange-600',
    titleColor: 'text-yellow-700',
    title: 'Global Reach',
    description: 'We have a global presence and can promote your film to audiences across the world.'
  },
  {
    icon: 'pi pi-chart-line',
    iconColors: 'bg-gradient-to-tr from-amber-400 to-yellow-400',
    titleColor: 'text-yellow-700',
    title: 'Measurable Results',
    description: 'We track and analyze the effectiveness of our marketing campaigns, providing measurable results and insights.'
  }
];

ctaText = `By partnering with Pencil Peel IMT, you can ensure your film receives global promotion, reaching audiences worldwide and driving ticket sales. Contact us Today to Promote your Film with South India’s No 1 Film Marketing Company.`;

startAutoCycle() {
  this.intervalId = setInterval(() => {
    this.activeIndex = (this.activeIndex + 1) % this.strengths.length;
  }, 2500); 
}

ngOnDestroy(): void {
  if(this.intervalId) {
    clearInterval(this.intervalId);
  }
}

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }


}
