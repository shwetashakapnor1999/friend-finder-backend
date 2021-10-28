import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAboutComponent } from './timeline-about.component';

describe('TimelineAboutComponent', () => {
  let component: TimelineAboutComponent;
  let fixture: ComponentFixture<TimelineAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
