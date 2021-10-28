import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAlbumComponent } from './timeline-album.component';

describe('TimelineAlbumComponent', () => {
  let component: TimelineAlbumComponent;
  let fixture: ComponentFixture<TimelineAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
