import { TestBed, inject } from '@angular/core/testing';

import { McqService } from './mcq.service';

describe('McqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [McqService]
    });
  });

  it('should be created', inject([McqService], (service: McqService) => {
    expect(service).toBeTruthy();
  }));
});
