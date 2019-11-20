import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedoutViewComponent } from './loggedout-view.component';

describe('LoggedoutViewComponent', () => {
  let component: LoggedoutViewComponent;
  let fixture: ComponentFixture<LoggedoutViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedoutViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
