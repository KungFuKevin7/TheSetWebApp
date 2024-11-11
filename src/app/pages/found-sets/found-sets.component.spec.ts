import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundSetsComponent } from './found-sets.component';

describe('FoundSetsComponent', () => {
  let component: FoundSetsComponent;
  let fixture: ComponentFixture<FoundSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundSetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
