import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFriendsComponent } from './timeline-friends.component';

describe('TimelineFriendsComponent', () => {
  let component: TimelineFriendsComponent;
  let fixture: ComponentFixture<TimelineFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
