import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caradvertising } from './caradvertising';

describe('Caradvertising', () => {
  let component: Caradvertising;
  let fixture: ComponentFixture<Caradvertising>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caradvertising]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caradvertising);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
