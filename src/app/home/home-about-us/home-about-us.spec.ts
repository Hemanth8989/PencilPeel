import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutUs } from './home-about-us';

describe('HomeAboutUs', () => {
  let component: HomeAboutUs;
  let fixture: ComponentFixture<HomeAboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
