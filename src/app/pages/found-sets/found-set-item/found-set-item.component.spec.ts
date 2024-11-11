import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundSetItemComponent } from './found-set-item.component';

describe('FoundSetItemComponent', () => {
  let component: FoundSetItemComponent;
  let fixture: ComponentFixture<FoundSetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundSetItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundSetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
