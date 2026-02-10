import { Component } from '@angular/core';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ai-training',
  imports: [CommonModule, Nocarouselquotes, ButtonModule, RouterModule],
  templateUrl: './ai-training.html',
  styleUrl: './ai-training.scss'
})
export class AiTraining {

  herocontent = {
    title: `
    <span class="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold tracking-tight">
      Empowering Educators
    </span>
    with 
    <span class="bg-gradient-to-r from-green-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold tracking-tight">AI Training
    </span>
    at
    <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight">
    Pencil Peel IMT
    </span>
  `,
    description: `At <span class="font-bold text-orange-500">Pencil Peel IMT</span>, we understand that teachers are the backbone of the education system. To empower them with the skills and knowledge needed to effectively integrate AI-powered solutions into their teaching practices, we offer comprehensive AI training programs.`,
    image: '/ai/aiTraining.png'
  };

  quotes = [
    { text: "AI has the potential to revolutionize education, but it requires teachers to be equipped with the skills and knowledge to harness its power." },
    { text: "Effective teacher training is key to unlocking the potential of AI in education and ensuring that students reap its benefits." },
    { text: "By providing teachers with AI training, we can empower them to create more engaging, personalized, and effective learning experiences for their students." },
    { text: "AI training for teachers is not just about technology; it's about empowering educators to transform the learning experience and improve student outcomes." },
  ];
}
