import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Appfooter } from './components/appfooter/appfooter';
import { Header1 } from './components/header1/header1';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,Appfooter,Header1],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ppa';
}
