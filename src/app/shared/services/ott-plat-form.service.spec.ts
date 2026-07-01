import { TestBed } from '@angular/core/testing';

import { OttPlatFormService } from './ott-plat-form.service';

describe('OttPlatFormService', () => {
  let service: OttPlatFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OttPlatFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
