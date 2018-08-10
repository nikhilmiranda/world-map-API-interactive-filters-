import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsinglecountryComponent } from './viewsinglecountry.component';

describe('ViewsinglecountryComponent', () => {
  let component: ViewsinglecountryComponent;
  let fixture: ComponentFixture<ViewsinglecountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsinglecountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsinglecountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
