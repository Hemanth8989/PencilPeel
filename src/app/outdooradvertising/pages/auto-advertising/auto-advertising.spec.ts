import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAdvertising } from './auto-advertising';

describe('AutoAdvertising', () => {
  let component: AutoAdvertising;
  let fixture: ComponentFixture<AutoAdvertising>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoAdvertising]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoAdvertising);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
