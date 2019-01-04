import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveShowsComponent } from './active-shows.component';

describe('ActiveShowsComponent', () => {
  let component: ActiveShowsComponent;
  let fixture: ComponentFixture<ActiveShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
