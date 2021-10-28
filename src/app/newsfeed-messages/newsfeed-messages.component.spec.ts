import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedMessagesComponent } from './newsfeed-messages.component';

describe('NewsfeedMessagesComponent', () => {
  let component: NewsfeedMessagesComponent;
  let fixture: ComponentFixture<NewsfeedMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
