import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAdminComponent } from './calendar-admin.component';

describe('CalendarAdminComponent', () => {
  let component: CalendarAdminComponent;
  let fixture: ComponentFixture<CalendarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
