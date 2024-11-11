import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingTableComponent } from './playing-table.component';

describe('PlayingTableComponent', () => {
  let component: PlayingTableComponent;
  let fixture: ComponentFixture<PlayingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
