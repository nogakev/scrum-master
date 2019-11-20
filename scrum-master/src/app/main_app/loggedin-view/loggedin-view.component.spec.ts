import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinViewComponent } from './loggedin-view.component';

describe('LoggedinViewComponent', () => {
  let component: LoggedinViewComponent;
  let fixture: ComponentFixture<LoggedinViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
