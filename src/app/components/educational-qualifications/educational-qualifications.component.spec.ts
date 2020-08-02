import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalQualificationsComponent } from './educational-qualifications.component';

describe('EducationalQualificationsComponent', () => {
  let component: EducationalQualificationsComponent;
  let fixture: ComponentFixture<EducationalQualificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalQualificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
