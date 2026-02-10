import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outdooradvertising1 } from './outdooradvertising1';

describe('Outdooradvertising1', () => {
  let component: Outdooradvertising1;
  let fixture: ComponentFixture<Outdooradvertising1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outdooradvertising1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Outdooradvertising1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
