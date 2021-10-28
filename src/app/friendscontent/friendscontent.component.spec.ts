import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendscontentComponent } from './friendscontent.component';

describe('FriendscontentComponent', () => {
  let component: FriendscontentComponent;
  let fixture: ComponentFixture<FriendscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendscontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
