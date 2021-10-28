import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpadminComponent } from './cpadmin.component';

describe('CpadminComponent', () => {
  let component: CpadminComponent;
  let fixture: ComponentFixture<CpadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
