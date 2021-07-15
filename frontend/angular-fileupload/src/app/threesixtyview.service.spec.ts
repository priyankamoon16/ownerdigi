import { TestBed } from '@angular/core/testing';

import { ThreesixtyviewService } from './threesixtyview.service';

describe('ThreesixtyviewService', () => {
  let service: ThreesixtyviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreesixtyviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
