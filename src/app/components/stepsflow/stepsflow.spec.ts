import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepsflow } from './stepsflow';

describe('Stepsflow', () => {
  let component: Stepsflow;
  let fixture: ComponentFixture<Stepsflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stepsflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stepsflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
