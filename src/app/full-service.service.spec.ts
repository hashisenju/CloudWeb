import { TestBed } from '@angular/core/testing';

import { FullServiceService } from './full-service.service';

describe('FullServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullServiceService = TestBed.get(FullServiceService);
    expect(service).toBeTruthy();
  });
});
