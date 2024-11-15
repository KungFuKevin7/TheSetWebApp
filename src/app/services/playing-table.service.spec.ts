import { TestBed } from '@angular/core/testing';

import { PlayingTableService } from './playing-table.service';

describe('PlayingTableService', () => {
  let service: PlayingTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
