import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDefaultMessageComponent } from './dashboard-default-message.component';

describe('DashboardDefaultMessageComponent', () => {
  let component: DashboardDefaultMessageComponent;
  let fixture: ComponentFixture<DashboardDefaultMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardDefaultMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDefaultMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
