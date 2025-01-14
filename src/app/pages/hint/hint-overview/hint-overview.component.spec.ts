import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HintOverviewComponent } from './hint-overview.component';

describe('HintOverviewComponent', () => {
  let component: HintOverviewComponent;
  let fixture: ComponentFixture<HintOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HintOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HintOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
