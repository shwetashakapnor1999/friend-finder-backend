import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedcontentComponent } from './newsfeedcontent.component';

describe('NewsfeedcontentComponent', () => {
  let component: NewsfeedcontentComponent;
  let fixture: ComponentFixture<NewsfeedcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
