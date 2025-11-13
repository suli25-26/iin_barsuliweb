import { TestBed } from '@angular/core/testing';

import { ScoresapiService } from './scoresapi.service';

describe('ScoresapiService', () => {
  let service: ScoresapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoresapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
