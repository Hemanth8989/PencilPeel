import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAmbassador } from './brand-ambassador';

describe('BrandAmbassador', () => {
  let component: BrandAmbassador;
  let fixture: ComponentFixture<BrandAmbassador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandAmbassador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandAmbassador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
