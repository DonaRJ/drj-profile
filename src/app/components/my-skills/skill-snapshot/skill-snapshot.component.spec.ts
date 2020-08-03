import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSnapshotComponent } from './skill-snapshot.component';

describe('SkillSnapshotComponent', () => {
  let component: SkillSnapshotComponent;
  let fixture: ComponentFixture<SkillSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
