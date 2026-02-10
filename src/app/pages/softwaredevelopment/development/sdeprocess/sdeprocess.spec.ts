import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdeprocess } from './sdeprocess';

describe('Sdeprocess', () => {
  let component: Sdeprocess;
  let fixture: ComponentFixture<Sdeprocess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sdeprocess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sdeprocess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
