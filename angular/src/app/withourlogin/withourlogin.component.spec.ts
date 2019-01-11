import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithourloginComponent } from './withourlogin.component';

describe('WithourloginComponent', () => {
  let component: WithourloginComponent;
  let fixture: ComponentFixture<WithourloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithourloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithourloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
