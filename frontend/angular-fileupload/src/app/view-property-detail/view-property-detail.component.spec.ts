import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropertyDetailComponent } from './view-property-detail.component';

describe('ViewPropertyDetailComponent', () => {
  let component: ViewPropertyDetailComponent;
  let fixture: ComponentFixture<ViewPropertyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPropertyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
