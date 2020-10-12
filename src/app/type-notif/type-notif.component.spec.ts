import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNotifComponent } from './type-notif.component';

describe('TypeNotifComponent', () => {
  let component: TypeNotifComponent;
  let fixture: ComponentFixture<TypeNotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeNotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
