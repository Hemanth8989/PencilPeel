import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorHeroSection } from './outdoor-hero-section';

describe('OutdoorHeroSection', () => {
  let component: OutdoorHeroSection;
  let fixture: ComponentFixture<OutdoorHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutdoorHeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorHeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
