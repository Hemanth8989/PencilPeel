import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Nocarouselquotes } from '../../../components/nocarouselquotes/nocarouselquotes';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-event-management',
  imports: [CommonModule, Nocarouselquotes,CarouselModule],
  templateUrl: './event-management.html',
  styleUrl: './event-management.scss'
})
export class EventManagement {

  serviceSlides =
    {
      id: 'slide1',
      image: '/dm/eventmgmthome.png',
      title: `
      Create Your 
      <span class="bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-tight">
        Great Moments
      </span>
       with 
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
         Pencil Peel IMT’s Event Management Team
      </span>
    `,
      description: ``
    };

     heroHeading = "Create Your Great Moments with Pencil Peel IMT’s Event Management Team";

  quotes: any[] = [
    {text:"Creating Unforgettable Moments, One Event at a Time."},
    {text: "Where Memories are Made: Expert Event Management by Pencil Peel IMT."},
    {text:"Celebrating Life's Special Moments with Grandeur and Precision."},
    {text:"Transforming Events into Timeless Memories: Pencil Peel IMT's Expertise."},
    {text:"Make Every Moment Count: Let Us Create Unforgettable Events for You."}
  ];

   contentParagraphs: string[] = [
    "Man started missing several great moments in his life as he started living not as a human being but as a machine due to his responsibilities and his targets. He has also reached a situation where he cannot even remember the memories of his great achievements and great moments in his life.",
    "An event is important to every individual. Some great moments are to be given to some people in a single event. We should also make them feel that they have not missed anything or will not miss anything. We have been trying to record every great moment of every individual and keep it in his/her memories forever. They should live in those memories all through.",
    "We proudly admit and declare that we have achieved great record in celebrating events and giving great memories to the people that we have been associated with. With our experience with the media industry and entertainment sector, we have gained the expertise and experience to celebrate every event as grand event.",
    "We shall celebrate such a great event in your life that would give great memories to your loved ones. Come, join hands. We shall celebrate your event. We shall keep some great moments of your life forever. Give the pleasure of being part of your life."
  ];

  eventServices = [
    {
      title: "Event Conceptualization",
      description: "We work with clients to develop a concept that aligns with their goals and objectives.",
      icon: "pi pi-lightbulb"
    },
    {
      title: "Event Planning",
      description: "We plan every detail of the event, from venue selection to logistics and catering.",
      icon: "pi pi-calendar"
    },
    {
      title: "Event Execution",
      description: "We execute the event plan, ensuring that every aspect of the event is flawless.",
      icon: "pi pi-check-circle"
    },
    {
      title: "Event Evaluation",
      description: "We evaluate the success of the event and provide detailed feedback to clients.",
      icon: "pi pi-chart-line"
    }
  ];

  eventCategories = [
    {
      title: 'Corporate Events',
      icon: 'fas fa-briefcase',
      gradient: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      items: [
        { title: 'Conferences', description: 'Our team will organize large-scale conferences, seminars, and workshops that showcase your expertise and build meaningful connections.' },
        { title: 'Product Launches', description: 'We\'ll create a buzz around your new product or service with a memorable launch event.' },
        { title: 'Company Anniversaries', description: 'Our team will help you celebrate milestones and anniversaries with a special event that honours your company\'s history and achievements.' },
        { title: 'Team Building Events', description: 'We\'ll design fun and engaging activities that foster teamwork and collaboration among your team members.' },
        { title: 'Networking Events', description: 'Our team will connect you with industry professionals and help you build relationships that matter.' }
      ]
    },
    {
      title: 'Social Events',
      icon: 'fas fa-heart',
      gradient: 'bg-gradient-to-br from-pink-400 to-red-500',
      items: [
        { title: 'Weddings', description: 'Our team will plan and execute the perfect wedding day, ensuring that every detail is taken care of and every moment is unforgettable.' },
        { title: 'Birthday Parties', description: 'We\'ll create a memorable celebration that marks this special day in your life.' },
        { title: 'Anniversary Parties', description: 'Our team will commemorate special occasions with a unique event that celebrates your love and commitment.' },
        { title: 'Graduation Parties', description: 'We\'ll help you celebrate academic achievements with a festive event that honours your hard work and dedication.' }
      ]
    },
    {
      title: 'Exhibitions and Trade Shows',
      icon: 'fas fa-image',
      gradient: 'bg-gradient-to-br from-green-400 to-teal-500',
      items: [
        { title: 'Trade Show Exhibitions', description: 'Our team will showcase your products or services at industry events, helping you connect with potential customers and build brand awareness.' },
        { title: 'Product Exhibitions', description: 'We\'ll display your products in a showcase setting, highlighting their features and benefits.' },
        { title: 'Art Exhibitions', description: 'Our team will feature artwork and creative talent, providing a platform for artists to showcase their work.' }
      ]
    },
    {
      title: 'Festivals and Concerts',
      icon: 'fas fa-music',
      gradient: 'bg-gradient-to-br from-purple-400 to-pink-500',
      items: [
        { title: 'Music Festivals', description: 'We\'ll organize large-scale music festivals with multiple artists, creating an unforgettable experience for attendees.' },
        { title: 'Cultural Festivals', description: 'Our team will celebrate cultural heritage with music, food, and activities that showcase the richness and diversity of different cultures.' },
        { title: 'Food Festivals', description: 'We\'ll showcase local cuisine and culinary talent, providing a platform for foodies to indulge in their favourite dishes.' }
      ]
    },
    {
      title: 'Other Events',
      icon: 'fas fa-star',
      gradient: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      items: [
        { title: 'Charity Events', description: 'Our team will organize fundraising events for a good cause, helping you make a positive impact on your community.' },
        { title: 'Gala Dinners', description: 'We\'ll host formal events with fine dining and entertainment, providing a sophisticated setting for networking and celebration.' },
        { title: 'Awards Ceremonies', description: 'Our team will recognize achievements and honour award winners, celebrating their hard work and dedication.' },
        { title: 'Launch Parties', description: 'We\'ll launch new products, services, or brands with a memorable event that generates buzz and excitement.' }
      ]
    }
  ];

   benefits = [
    {
      title: 'Expertise',
      description: 'Our team has extensive experience in event management.',
      icon: 'pi pi-star',
      gradient: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    {
      title: 'Attention to Detail',
      description: 'We pay close attention to every detail, ensuring that every event is flawless.',
      icon: 'pi pi-search',
      gradient: 'bg-gradient-to-br from-green-400 to-teal-500'
    },
    {
      title: 'Creativity',
      description: 'We bring a creative approach to every event, making it unique and memorable.',
      icon: 'pi pi-lightbulb',
      gradient: 'bg-gradient-to-br from-pink-400 to-red-500'
    },
    {
      title: 'Budget Management',
      description: 'We manage budgets effectively, ensuring that clients get the best value for their money.',
      icon: 'pi pi-wallet',
      gradient: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    }
  ];

  reasons = [
    {
      title: 'Proven Track Record',
      description: 'We have a proven track record of delivering successful events.',
      icon: 'pi pi-check-circle'
    },
    {
      title: 'Personalized Service',
      description: 'We provide personalized service, tailoring our approach to meet the specific needs of each client.',
      icon: 'pi pi-user-edit'
    },
    {
      title: 'Flexibility',
      description: 'We are flexible and adaptable, able to adjust to changing circumstances.',
      icon: 'pi pi-refresh'
    }
  ];
}
