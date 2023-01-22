import { TestBed } from '@angular/core/testing';

import { DogCmsApiService } from './dog-cms-api.service';

describe('DogCmsApiService', () => {
  let service: DogCmsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogCmsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
