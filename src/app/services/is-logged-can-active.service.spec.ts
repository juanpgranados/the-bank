import { TestBed } from '@angular/core/testing';

import { IsLoggedCanActiveService } from './is-logged-can-active.service';

describe('IsLoggedCanActiveService', () => {
  let service: IsLoggedCanActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoggedCanActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
