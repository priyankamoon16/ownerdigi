import { TestBed } from '@angular/core/testing';

import { ProjservicesService } from './projservices.service';

describe('ProjservicesService', () => {
  let service: ProjservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
