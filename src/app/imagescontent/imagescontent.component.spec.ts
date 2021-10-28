import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagescontentComponent } from './imagescontent.component';

describe('ImagescontentComponent', () => {
  let component: ImagescontentComponent;
  let fixture: ComponentFixture<ImagescontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagescontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
