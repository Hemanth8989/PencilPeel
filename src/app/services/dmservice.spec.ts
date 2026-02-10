import { TestBed } from '@angular/core/testing';

import { Dmservice } from './dmservice';

describe('Dmservice', () => {
  let service: Dmservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dmservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
