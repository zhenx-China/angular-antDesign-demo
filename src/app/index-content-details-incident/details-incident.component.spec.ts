import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIncidentComponent } from './details-incident.component';

describe('DetailsIncidentComponent', () => {
  let component: DetailsIncidentComponent;
  let fixture: ComponentFixture<DetailsIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
