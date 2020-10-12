import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifierGroupComponent } from './notifier-group.component';

describe('NotifierGroupComponent', () => {
  let component: NotifierGroupComponent;
  let fixture: ComponentFixture<NotifierGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifierGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifierGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
