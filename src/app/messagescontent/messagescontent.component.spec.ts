import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagescontentComponent } from './messagescontent.component';

describe('MessagescontentComponent', () => {
  let component: MessagescontentComponent;
  let fixture: ComponentFixture<MessagescontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagescontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagescontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
