import { TestBed } from '@angular/core/testing';

import { UpdateusercartService } from './updateusercart.service';

describe('UpdateusercartService', () => {
  let service: UpdateusercartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateusercartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
