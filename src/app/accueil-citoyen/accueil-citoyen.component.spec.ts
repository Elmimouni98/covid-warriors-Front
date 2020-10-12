import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCitoyenComponent } from './accueil-citoyen.component';

describe('AccueilCitoyenComponent', () => {
  let component: AccueilCitoyenComponent;
  let fixture: ComponentFixture<AccueilCitoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilCitoyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
