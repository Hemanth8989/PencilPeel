import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";

@Component({
  selector: 'app-aieducation',
  imports: [CommonModule, ButtonModule, CarouselModule, CardModule, Nocarouselquotes],
  templateUrl: './aieducation.html',
  styleUrl: './aieducation.scss'
})
export class Aieducation {

  herocontent = {
    title: `
    Transforming 
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      Education
    </span>
    with 
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
    AI-Powered Solutions
    </span>
  `,
    description: `At Pencil Peel IMT, we're committed to leveraging AI technology to improve education outcomes and enhance the learning experience`,
    image: '/ai/aieducation.webp'
  };

  quotes = [
    { text: "AI has the potential to revolutionize education by providing personalized learning experiences, improving student outcomes, and enhancing teacher productivity." },
    { text: "The future of education is not just about technology, but about using technology to empower learners and teachers alike." },
    { text: "AI-powered solutions can help bridge the gap in education by providing access to quality learning resources and support to students in remote or underserved areas." },
    { text: "By leveraging AI in education, we can create a more inclusive, effective, and efficient education system that benefits all learners." },
    { text: "The integration of AI in education is not just about improving academic outcomes, but about empowering students with the skills and knowledge needed to thrive in a rapidly changing world." }
  ];

  educationCards = [
    {
      title: 'Problem',
      description: 'Limited access to <span class="font-semibold text-purple-700">quality education</span>, especially in <span class="font-semibold text-indigo-700">rural areas</span>, and <span class="font-semibold text-purple-700">inadequate teacher training</span>.',
      icon: 'fas fa-exclamation-circle',
      gradient: false,
      border: ''
    },
    {
      title: 'AI Solution',
      description: 'AI-powered adaptive learning systems can provide <span class="font-semibold text-yellow-300">personalized learning experiences</span> for students, <span class="font-semibold text-yellow-300">AI-assisted chatbots</span> can help teachers with grading and feedback, and <span class="font-semibold text-yellow-300">AI-powered virtual learning environments</span> can enhance student engagement.',
      icon: 'fas fa-robot',
      gradient: true,
      border: ''
    },
    {
      title: "Pencil Peel IMT's Solution",
      description: 'We can develop <span class="font-semibold text-indigo-700">AI-powered adaptive learning systems that personalize learning experiences for students</span>, <span class="font-semibold text-purple-700">AI-assisted chatbots that support teachers</span>, and <span class="font-semibold text-indigo-700">virtual learning environments that enhance student engagement</span>. Additionally, we can provide <span class="font-semibold text-purple-700">AI training to teaching staff</span>, enabling them to effectively integrate AI-powered solutions into their teaching practices.',
      icon: 'fas fa-lightbulb',
      gradient: false,
      border: 'border-l-8 border-indigo-500'
    }
  ];

  // AI-Powered Education Solutions (all cards with images)
  aiSolutions = [
    {
      title: 'Personalized & Adaptive Learning',
      description: 'Our AI-powered adaptive learning systems tailor learning experiences to individual students needs and abilities.',
      icon: 'fas fa-user-graduate',
      image: 'ai/aiLearning.png'
    },
    {
      title: 'Intelligent Tutoring Systems',
      description: 'Our AI-powered virtual learning environments provide real-time support and feedback to students, enhancing student engagement and outcomes.',
      icon: 'fas fa-chalkboard-teacher',
      image: 'ai/aiTutoring.png'
    },
    {
      title: 'Teacher Support',
      description: 'Our AI-assisted chatbots help teachers with grading, feedback, and student support, freeing up time for more strategic and creative work.',
      icon: 'fas fa-robot',
      image: 'ai/aiSupport.png'
    },
    {
      title: 'AI Training for Teachers',
      description: 'We provide AI training to teaching staff, enabling them to effectively integrate AI-powered solutions into their teaching practices.',
      icon: 'fas fa-lightbulb',
      image: 'ai/aiTraining.png'
    }
  ];

  // Benefits of AI in Education (icons only)
  aiBenefits = [
    {
      title: 'Improved Student Outcomes',
      description: 'AI-powered solutions can help students learn more effectively and achieve better academic outcomes.',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Enhanced Teacher Productivity',
      description: 'AI-assisted chatbots and other solutions can help teachers with routine tasks, freeing up time for more strategic and creative work.',
      icon: 'fas fa-chalkboard-teacher'
    },
    {
      title: 'Personalized Learning',
      description: 'AI-powered adaptive learning systems can provide personalized learning experiences for students, tailoring instruction to their individual needs and abilities.',
      icon: 'fas fa-user-graduate'
    },
    {
      title: 'Increased Access to Education',
      description: 'AI-powered virtual learning environments can expand access to education for students in remote or underserved areas.',
      icon: 'fas fa-globe'
    }
  ];

  // How Pencil Peel IMT Can Help (icons only, no images)
  howWeHelp = [
    {
      title: 'Develop AI-Powered Solutions',
      description: 'We can develop AI-powered solutions that meet the unique needs of educators and students, including adaptive learning systems, intelligent tutoring systems, and teacher support solutions.',
      icon: 'fas fa-cogs'
    },
    {
      title: 'Implement AI Technology',
      description: 'We can implement AI technology in educational institutions, ensuring seamless integration and effective use.',
      icon: 'fas fa-network-wired'
    },
    {
      title: 'Provide AI Training & Support',
      description: 'We can provide AI training and support to educators and administrators, enabling them to effectively integrate AI-powered solutions into their teaching practices.',
      icon: 'fas fa-chalkboard'
    }
  ];

  // Future of AI in Education (icons only)
  futureAI = [
    {
      title: 'Virtual and Augmented Reality Integratio',
      description: 'We develop AI-powered VR/AR solutions that create immersive learning experiences, making complex concepts more accessible and engaging',
      icon: 'fas fa-vr-cardboard'
    },
    {
      title: 'Increased Accessibility',
      description: 'Our AI-driven tools break down language barriers, provide real-time translation, and support students with disabilities, ensuring equal access to education for all.',
      icon: 'fas fa-universal-access'
    },
    {
      title: 'Ethical AI Development',
      description: 'We prioritize transparency, fairness, and data protection, ensuring our AI systems are designed to promote equal opportunities for all learners.',
      icon: 'fas fa-balance-scale'
    }
  ];

  // Why Choose Pencil Peel IMT (points with title + description)
  whyChoose = [
    {
      title: 'Expertise You Can Trust',
      icon: 'fas fa-user-tie',
      points: [
        { title: 'Proven Track Record', description: 'Our team has extensive experience in developing and implementing AI-powered education solutions that yield tangible results.' },
        { title: 'Innovative Solutions', description: 'We craft tailored solutions that address the unique needs of educators and students, ensuring effective integration and adoption.' }
      ]
    },
    {
      title: 'Transformative Partnerships',
      icon: 'fas fa-handshake',
      points: [
        { title: 'Student-Centric Approach', description: 'We prioritize student success, leveraging AI to personalize learning experiences, improve academic outcomes, and foster engagement.' },
        { title: 'Teacher Empowerment', description: 'Our AI-assisted tools streamline administrative tasks, freeing teachers to focus on high-impact teaching and mentorship.' },
        { title: 'Institutional Excellence', description: 'We help educational institutions harness the power of AI to enhance reputation, improve student retention, and drive growth.' }
      ]
    },
    {
      title: 'Unlock New Possibilities',
      icon: 'fas fa-lightbulb',
      points: [
        { title: 'Cutting-Edge Technology', description: 'Our AI-powered solutions leverage the latest advancements in machine learning, natural language processing, and data analytics.' },
        { title: 'Personalized Support', description: 'Our dedicated team provides comprehensive support, ensuring seamless integration and effective use of our solutions.' },
        { title: 'Continuous Innovation', description: 'We stay at the forefront of AI innovation, ensuring our solutions remain relevant and effective in an ever-evolving educational landscape.' }
      ]
    }
  ];
}
