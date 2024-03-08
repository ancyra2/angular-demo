import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemostartComponent } from './demostart.component';

describe('DemostartComponent', () => {
  let component: DemostartComponent;
  let fixture: ComponentFixture<DemostartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemostartComponent]
    });
    fixture = TestBed.createComponent(DemostartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
