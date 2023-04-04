import { TestBed } from '@angular/core/testing';

import { CustomapiService } from './customapi.service';

describe('CustomapiService', () => {
  let service: CustomapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
