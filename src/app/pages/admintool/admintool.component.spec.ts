import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintoolComponent } from './admintool.component';

describe('AdmintoolComponent', () => {
  let component: AdmintoolComponent;
  let fixture: ComponentFixture<AdmintoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
