import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDescriptionPopupComponent } from './show-description-popup.component';

describe('ShowDescriptionPopupComponent', () => {
  let component: ShowDescriptionPopupComponent;
  let fixture: ComponentFixture<ShowDescriptionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDescriptionPopupComponent]
    });
    fixture = TestBed.createComponent(ShowDescriptionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
