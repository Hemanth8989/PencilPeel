import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'app-stepsflow',
  imports: [StepperModule,CommonModule],
  templateUrl: './stepsflow.html',
  styleUrl: './stepsflow.scss'
})
export class Stepsflow {
  @Input() steptitle:string = '';
  @Input() stepdescription = '';
  @Input() steps:any[];
  currentStep: number = 1;
  intervalId: any;
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentStep = this.currentStep < this.steps.length ? this.currentStep + 1 : 1;
    }, 3000); // rotate every 3 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
