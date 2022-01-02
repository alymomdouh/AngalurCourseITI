import { TestBed } from '@angular/core/testing';

import { CateogryServicesService } from './cateogry-services.service';

describe('CateogryServicesService', () => {
  let service: CateogryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateogryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
