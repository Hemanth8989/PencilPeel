import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicecard } from './servicecard';

describe('Servicecard', () => {
  let component: Servicecard;
  let fixture: ComponentFixture<Servicecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
