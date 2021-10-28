import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedFriendsComponent } from './newsfeed-friends.component';

describe('NewsfeedFriendsComponent', () => {
  let component: NewsfeedFriendsComponent;
  let fixture: ComponentFixture<NewsfeedFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
