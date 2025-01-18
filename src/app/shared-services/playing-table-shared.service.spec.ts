import { TestBed } from '@angular/core/testing';

import { PlayingTableSharedService } from './playing-table-shared.service';

describe('PlayingTableSharedService', () => {
  let service: PlayingTableSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingTableSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
