import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedImagesComponent } from './newsfeed-images.component';

describe('NewsfeedImagesComponent', () => {
  let component: NewsfeedImagesComponent;
  let fixture: ComponentFixture<NewsfeedImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
