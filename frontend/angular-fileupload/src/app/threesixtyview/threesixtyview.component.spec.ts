import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreesixtyviewComponent } from './threesixtyview.component';

describe('ThreesixtyviewComponent', () => {
  let component: ThreesixtyviewComponent;
  let fixture: ComponentFixture<ThreesixtyviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreesixtyviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreesixtyviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
