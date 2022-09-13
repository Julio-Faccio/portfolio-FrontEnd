import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYsoftComponent } from './hard-ysoft.component';

describe('HardYsoftComponent', () => {
  let component: HardYsoftComponent;
  let fixture: ComponentFixture<HardYsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYsoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardYsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
