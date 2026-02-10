import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sem } from './sem';

describe('Sem', () => {
  let component: Sem;
  let fixture: ComponentFixture<Sem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
