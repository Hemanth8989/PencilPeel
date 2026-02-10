import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smstrategy } from './smstrategy';

describe('Smstrategy', () => {
  let component: Smstrategy;
  let fixture: ComponentFixture<Smstrategy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Smstrategy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smstrategy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
