import { TestBed } from '@angular/core/testing';

import { CateogryfromapiServicesService } from './cateogryfromapi-services.service';

describe('CateogryfromapiServicesService', () => {
  let service: CateogryfromapiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateogryfromapiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
