import { TestBed } from '@angular/core/testing';

import { RetrieveDoctorsService } from './retrieve-doctors.service';

describe('RetrieveDoctorsService', () => {
  let service: RetrieveDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
