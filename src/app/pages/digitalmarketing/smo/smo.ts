import { Component } from '@angular/core';
import { Nocarouselquotes } from "../../../components/nocarouselquotes/nocarouselquotes";
import { Quotes } from '../../../components/quotes/quotes';

@Component({
  selector: 'app-smo',
  imports: [Nocarouselquotes, Quotes],
  templateUrl: './smo.html',
  styleUrl: './smo.scss'
})
export class Smo {

  herocontent: any = {
    title: `
      Unlock Your <br>
      <span class="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent font-bold tracking-tight">
        Social Media Optimization (SMO)
      </span>
      with 
      <span class="bg-gradient-to-r from-orange-500 via-yellow-200 to-orange-500 bg-clip-text text-transparent font-extrabold tracking-tight">
        Pencil Peel IMT
      </span>.
    `,
    description: 'The Best SMO Service Provider in Hyderabad, INDIA.',
    image: '/dm/whatseo.webp'
  };

  quotes = [
    {text: "Transforming Visions into Digital Reality"},
    {text: "Innovate. Elevate. Succeed."},
    {text: "Empowering Businesses through Digital Solutions"},
    {text: "Your Partner in Digital Success"}
  ];
}
