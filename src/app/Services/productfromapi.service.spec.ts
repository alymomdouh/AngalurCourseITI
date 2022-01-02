import { TestBed } from '@angular/core/testing';

import { ProductfromapiService } from './productfromapi.service';

describe('ProductfromapiService', () => {
  let service: ProductfromapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductfromapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
