import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinecontentComponent } from './timelinecontent.component';

describe('TimelinecontentComponent', () => {
  let component: TimelinecontentComponent;
  let fixture: ComponentFixture<TimelinecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
