import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGraphsComponent } from './skill-graphs.component';

describe('SkillGraphsComponent', () => {
  let component: SkillGraphsComponent;
  let fixture: ComponentFixture<SkillGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
