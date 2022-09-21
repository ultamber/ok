import { TestBed } from '@angular/core/testing';

import { CreatebidService } from './createbid.service';

describe('CreatebidService', () => {
  let service: CreatebidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatebidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
