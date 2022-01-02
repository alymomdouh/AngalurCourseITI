import { TestBed } from '@angular/core/testing';

import { ProductmemorydataService } from './productmemorydata.service';

describe('ProductmemorydataService', () => {
  let service: ProductmemorydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductmemorydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
