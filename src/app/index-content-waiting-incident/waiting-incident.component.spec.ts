import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingIncidentComponent } from './waiting-incident.component';

describe('WaitingIncidentComponent', () => {
  let component: WaitingIncidentComponent;
  let fixture: ComponentFixture<WaitingIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
