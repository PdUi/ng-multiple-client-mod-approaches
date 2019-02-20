import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAppComponent } from './css-app.component';

describe('CssAppComponent', () => {
  let component: CssAppComponent;
  let fixture: ComponentFixture<CssAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
