import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinefriendscontentComponent } from './timelinefriendscontent.component';

describe('TimelinefriendscontentComponent', () => {
  let component: TimelinefriendscontentComponent;
  let fixture: ComponentFixture<TimelinefriendscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinefriendscontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinefriendscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
