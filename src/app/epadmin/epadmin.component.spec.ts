import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpadminComponent } from './epadmin.component';

describe('EpadminComponent', () => {
  let component: EpadminComponent;
  let fixture: ComponentFixture<EpadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
