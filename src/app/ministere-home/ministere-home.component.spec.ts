import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistereHomeComponent } from './ministere-home.component';

describe('MinistereHomeComponent', () => {
  let component: MinistereHomeComponent;
  let fixture: ComponentFixture<MinistereHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistereHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistereHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
