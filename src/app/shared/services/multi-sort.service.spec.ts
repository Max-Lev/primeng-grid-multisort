import { TestBed } from '@angular/core/testing';

import { MultiSortService } from './multi-sort.service';

describe('MultiSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiSortService = TestBed.get(MultiSortService);
    expect(service).toBeTruthy();
  });
});
