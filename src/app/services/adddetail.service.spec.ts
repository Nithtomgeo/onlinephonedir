import { TestBed, inject } from '@angular/core/testing';

import { AdddetailService } from './adddetail.service';

describe('AdddetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdddetailService]
    });
  });

  it('should be created', inject([AdddetailService], (service: AdddetailService) => {
    expect(service).toBeTruthy();
  }));
});
