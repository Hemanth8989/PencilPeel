import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-design-thinking',
  imports: [CommonModule,TabsModule,CardModule],
  templateUrl: './design-thinking.html',
  styleUrl: './design-thinking.scss'
})
export class DesignThinking implements OnInit{

  quotes: string[] = [
    "Design Thinking unlocks innovative solutions by putting people at the centre.",
    "Empathy, ideation, and iteration drive impact with Design Thinking.",
    "Design Thinking crafts human-centered solutions for complex challenges.",
    "Innovate with purpose through the power of Design Thinking.",
    "Design Thinking transforms ideas into impactful, user-centered outcomes."
  ];

  steps = [
    {
      title: 'Empathizing with users',
      icon: 'pi pi-users',
      gradient: 'from-orange-300 to-pink-400',
      description: `We will understand user needs and pain points to develop solutions that meet their needs. Our team will conduct user research, gather feedback, and analyse data to gain a deep understanding of user needs and behaviours. By empathizing with users, we can develop solutions that are tailored to their needs and provide a positive user experience.`
    },
    {
      title: 'Defining the problem',
      icon: 'pi pi-search',
      gradient: 'from-pink-400 to-purple-400',
      description: `Our team will define the problem, identifying opportunities for innovation. We will analyse user research data, identify patterns and trends, and define the problem statement. By defining the problem correctly, we can ensure that our solutions address the root cause of the issue and provide meaningful value to users.`
    },
    {
      title: 'Ideating solutions',
      icon: 'pi pi-lightbulb',
      gradient: 'from-purple-400 to-indigo-400',
      description: `Our team will generate ideas and solutions through brainstorming and creativity. We will use techniques such as mind mapping, sketching, and brainstorming to generate a wide range of ideas and solutions. By ideating solutions, we can explore new possibilities and identify innovative solutions that meet user needs.`
    },
    {
      title: 'Prototyping',
      icon: 'pi pi-cog',
      gradient: 'from-indigo-400 to-cyan-400',
      description: `We will develop prototypes and test them with users to validate assumptions. Our team will create prototypes that are interactive, tangible, and testable, allowing us to gather feedback and iterate on solutions. By prototyping, we can test our assumptions, identify potential issues, and refine our solutions.`
    },
    {
      title: 'Testing and iterating',
      icon: 'pi pi-refresh',
      gradient: 'from-cyan-400 to-green-400',
      description: `Our team will refine and iterate on solutions based on user feedback. We will conduct user testing, gather feedback, and analyse data to identify areas for improvement. By testing and iterating, we can ensure that our solutions meet user needs, are effective, and provide a positive user experience.`
    }
  ];

  designThinkingSteps = [
    {
      title: 'Conduct user research:',
      description: 'Our team will conduct user research to understand user needs and pain points.',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      title: 'Develop user personas:',
      description: 'We will develop user personas to guide the design process.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Ideate solutions:',
      description: 'Our team will ideate solutions through brainstorming and creativity.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Develop prototypes:',
      description: 'We will develop prototypes and test them with users.',
      gradient: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'Refine and iterate:',
      description: 'Our team will refine and iterate on solutions based on user feedback.',
      gradient: 'from-cyan-500 to-green-500'
    }
  ];

  designThinkingBenefits :any[]= [
    {
      title: 'User-centered Solutions',
      descriptionPoints: [
        { detail: 'Our solutions will meet the needs and expectations of users. By understanding user needs and pain points, we can develop solutions that are tailored to meet their specific requirements. User-centered solutions are more likely to be adopted and used, resulting in increased user satisfaction and loyalty.' }
      ],
      gradient: 'from-orange-400 to-pink-500',
      iconClass: 'pi pi-user'
    },
    {
      title: 'Innovative Solutions',
      descriptionPoints: [
        { detail: 'We will drive innovation and creativity through design thinking. By encouraging brainstorming, ideation, and experimentation, we can develop novel solutions that meet user needs and exceed expectations. Innovative solutions can help businesses differentiate themselves from competitors and establish a market leadership position.' }
      ],
      gradient: 'from-pink-500 to-purple-500',
      iconClass: 'pi pi-lightbulb'
    },
    {
      title: 'Effective Solutions',
      descriptionPoints: [
        { detail: 'Our solutions will be effective and efficient. By understanding user needs and testing solutions with users, we can ensure that our solutions meet user needs and are effective in solving the problem. Effective solutions can help businesses achieve their goals, increase productivity, and reduce costs.' }
      ],
      gradient: 'from-purple-500 to-indigo-500',
      iconClass: 'pi pi-check'
    },
    {
      title: 'Desirable Solutions',
      descriptionPoints: [
        { detail: 'Our solutions will be desirable and meet user needs. By prioritizing user experience and developing solutions that are intuitive, easy to use, and provide a positive experience, we can increase user adoption and loyalty. Desirable solutions can also lead to positive word-of-mouth, increased customer satisfaction, and improved business reputation.' }
      ],
      gradient: 'from-indigo-500 to-cyan-500',
      iconClass: 'pi pi-star'
    },
    {
      title: 'Improved User Experience',
      descriptionPoints: [
        { point: 'Intuitive', detail: 'Our solutions will be easy to use and understand, reducing the learning curve and increasing user adoption.' },
        { point: 'Easy to use', detail: 'We will design solutions that are simple, straightforward, and require minimal effort from users.' },
        { point: 'Positive experience', detail: 'Our solutions will provide a positive experience, increasing user satisfaction and loyalty.' }
      ],
      gradient: 'from-cyan-500 to-green-500',
      iconClass: 'pi pi-bullseye'
    }
  ];

  activeTab = 0;

  deliverySteps = [
    {
      value: 0,
      title: 'Tailored to Your Needs',
      iconClass: 'pi pi-cog',
      gradient: 'from-orange-400 to-pink-500',
      points: [
        { label: 'Conduct thorough research', description: 'Our team will conduct thorough research to understand your organization\'s needs, goals, and challenges.', iconClass: 'pi pi-search' },
        { label: 'Develop customized solutions', description: 'We will develop customized solutions that meet your specific needs and requirements.', iconClass: 'pi pi-pencil' },
        { label: 'Collaborate with your team', description: 'Our team will work closely with your team to ensure that our solutions meet your needs and expectations.', iconClass: 'pi pi-users' }
      ]
    },
    {
      value: 1,
      title: 'User-Centered',
      iconClass: 'pi pi-user',
      gradient: 'from-pink-500 to-purple-500',
      points: [
        { label: 'Conduct user research', description: 'Our team will conduct user research to understand the needs and pain points of your users.', iconClass: 'pi pi-search' },
        { label: 'Develop user personas', description: 'We will develop user personas to guide the design process and ensure that our solutions meet the needs of your users.', iconClass: 'pi pi-id-card' },
        { label: 'Test with users', description: 'Our team will test our solutions with users to ensure that they meet user needs and expectations.', iconClass: 'pi pi-check-circle' }
      ]
    },
    {
      value: 2,
      title: 'Innovative',
      iconClass: 'pi pi-lightbulb',
      gradient: 'from-purple-500 to-indigo-500',
      points: [
        { label: 'Encourage brainstorming and ideation', description: 'We will encourage brainstorming and ideation to generate a wide range of ideas and solutions.', iconClass: 'pi pi-comments' },
        { label: 'Experiment with new approaches', description: 'Our team will experiment with new approaches and technologies to develop innovative solutions.', iconClass: 'pi pi-cog' },
        { label: 'Collaborate with experts', description: 'We will collaborate with experts from various fields to bring new perspectives and ideas to the design process.', iconClass: 'pi pi-users' }
      ]
    },
    {
      value: 3,
      title: 'Effective',
      iconClass: 'pi pi-check',
      gradient: 'from-indigo-500 to-cyan-500',
      points: [
        { label: 'Develop solutions that meet user needs', description: 'Our team will develop solutions that meet the needs and expectations of your users.', iconClass: 'pi pi-thumbs-up' },
        { label: 'Test and iterate', description: 'We will test our solutions with users and iterate on the design to ensure that it is effective and efficient.', iconClass: 'pi pi-refresh' },
        { label: 'Measure success', description: 'Our team will measure the success of our solutions and make adjustments as needed to ensure that they continue to meet user needs and achieve business goals.', iconClass: 'pi pi-chart-line' }
      ]
    }
  ];

  allSections = [
    {
      title: 'The Power of Design Thinking',
      points: [
        { label: 'Human-Centered Innovation', description: 'Design Thinking enables human-centered innovation, focusing on understanding and addressing user needs effectively.', iconClass: 'pi pi-users', iconGradient: 'bg-gradient-to-br from-orange-400 to-pink-500' },
        { label: 'Creative Problem-Solving', description: 'We leverage Design Thinking to solve complex problems creatively and iteratively, leading to more effective solutions.', iconClass: 'pi pi-cog', iconGradient: 'bg-gradient-to-br from-orange-400 to-pink-500' },
        { label: 'Collaboration and Iteration', description: 'Design Thinking fosters collaboration and iteration, leading to solutions that are refined based on user feedback.', iconClass: 'pi pi-refresh', iconGradient: 'bg-gradient-to-br from-orange-400 to-pink-500' }
      ]
    },
    {
      title: 'The Future of Design Thinking',
      points: [
        { label: 'Integration with Emerging Technologies', description: 'We\'ll explore integrating Design Thinking with emerging technologies to enhance innovation and solution development.', iconClass: 'pi pi-desktop', iconGradient: 'bg-gradient-to-br from-pink-500 to-purple-500' },
        { label: 'Increased Focus on Empathy', description: 'The future of Design Thinking emphasizes empathy to ensure solutions are deeply aligned with user needs and experiences.', iconClass: 'pi pi-heart', iconGradient: 'bg-gradient-to-br from-pink-500 to-purple-500' },
        { label: 'Adaptability and Continuous Learning', description: `We'll adapt Design Thinking methodologies to meet changing business needs and user expectations, focusing on continuous learning and improvement.`, iconClass: 'pi pi-refresh', iconGradient: 'bg-gradient-to-br from-pink-500 to-purple-500' }
      ]
    },
    {
      title: 'Pencil Peel IMT Leads with Design Thinking',
      ctaContent: "At Pencil Peel IMT, we're committed to harnessing the power of Design Thinking to help businesses innovate, solve challenges, and create user-centered solutions. With our expertise in Design Thinking, we'll help you develop strategies that drive impact and meet business objectives.",
      ctaIcon: 'pi-lightbulb',
      ctaGradient: 'bg-gradient-to-br from-orange-400 to-pink-500'
    },
    {
      title: 'Explore Design Thinking with Pencil Peel IMT',
      ctaContent: "We'll work with you to leverage Design Thinking for innovation, problem-solving, and creating impactful solutions. Contact us to learn how Pencil Peel IMT can help you harness the power and future of Design Thinking for your business.",
      ctaIcon: 'pi-search',
      ctaGradient: 'bg-gradient-to-br from-purple-400 to-pink-500'
    }
  ];

  designPoints = [
    {
      title: 'Drive Innovation',
      description: 'We will drive innovation and creativity through Design Thinking, helping you develop novel solutions to complex challenges and stay ahead in your industry.',
      icon: 'pi pi-lightbulb',
      iconGradient: 'bg-gradient-to-br from-orange-400 to-pink-500'
    },
    {
      title: 'Improve User Experiences',
      description: 'Our team will improve user experiences through user-centered design, ensuring solutions are tailored to meet the needs and preferences of your users.',
      icon: 'pi pi-users',
      iconGradient: 'bg-gradient-to-br from-pink-500 to-purple-500'
    },
    {
      title: 'Develop Effective Solutions',
      description: 'We will develop effective solutions that meet user needs and align with your business goals, leading to impactful outcomes.',
      icon: 'pi pi-cog',
      iconGradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      title: 'Stay Competitive',
      description: 'Our team will help you stay competitive in a rapidly changing business environment by leveraging Design Thinking to adapt to evolving user needs and market trends.',
      icon: 'pi pi-chart-line',
      iconGradient: 'bg-gradient-to-br from-orange-400 to-purple-500'
    }
  ];

  designBenefits = [
    "We'll bring expertise in Design Thinking methodologies to your organization.",
    "We'll help you develop solutions that are user-centered, innovative, and effective.",
    "We'll support you in staying competitive and adapting to changing business landscapes."
  ];

  solutionSteps = [
    "Understand your business challenges and user needs.",
    "Apply Design Thinking principles to develop innovative solutions.",
    "Iterate and refine solutions based on user feedback and testing."
  ];

  contactBanner = [
    {
      heading: 'Contact Us Today',
      content: "Contact Pencil Peel IMT today to explore how we can help you leverage Design Thinking to drive innovation, improve user experiences, and meet your business needs. We'll work with you to develop effective solutions that drive impact and achieve business objectives.",
      icon: 'pi pi-envelope',
      iconGradient: 'bg-gradient-to-br from-orange-400 to-pink-500'
    }
  ];

  ngOnInit(): void {
    this.startTypingQuotes();
  }

  startTypingQuotes() {
    const element = document.querySelector('.typewriter') as HTMLElement;
    let i = 0;

    const type = (text: string, index: number) => {
      element.textContent = text.substring(0, index);
      if (index < text.length) {
        setTimeout(() => type(text, index + 1), 50);
      } else {
        setTimeout(() => erase(text), 2000);
      }
    };

    const erase = (text: string) => {
      let index = text.length;
      const erasing = setInterval(() => {
        element.textContent = text.substring(0, index);
        index--;
        if (index < 0) {
          clearInterval(erasing);
          i = (i + 1) % this.quotes.length;
          setTimeout(() => type(this.quotes[i], 0), 500);
        }
      }, 30);
    };

    type(this.quotes[i], 0);
  }

  
}
