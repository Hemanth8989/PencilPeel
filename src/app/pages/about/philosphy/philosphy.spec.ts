import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Philosphy } from './philosphy';

describe('Philosphy', () => {
  let component: Philosphy;
  let fixture: ComponentFixture<Philosphy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Philosphy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Philosphy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
