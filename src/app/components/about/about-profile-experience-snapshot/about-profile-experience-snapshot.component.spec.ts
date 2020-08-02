import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProfileExperienceSnapshotComponent } from './about-profile-experience-snapshot.component';

describe('AboutProfileExperienceSnapshotComponent', () => {
  let component: AboutProfileExperienceSnapshotComponent;
  let fixture: ComponentFixture<AboutProfileExperienceSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutProfileExperienceSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProfileExperienceSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
