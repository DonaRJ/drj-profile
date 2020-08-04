import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsComponent } from './components.component';
import { AboutComponent } from './about/about.component';
import { AboutContentComponent } from './about/about-content/about-content.component';
import { AboutProfileExperienceSnapshotComponent } from './about/about-profile-experience-snapshot/about-profile-experience-snapshot.component';
import { EducationalQualificationsComponent } from './educational-qualifications/educational-qualifications.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SkillGraphsComponent } from './my-skills/skill-graphs/skill-graphs.component';
import { SkillSnapshotComponent } from './my-skills/skill-snapshot/skill-snapshot.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    HomeComponent,
    ComponentsComponent,
    AboutComponent,
    AboutContentComponent,
    AboutProfileExperienceSnapshotComponent,
    EducationalQualificationsComponent,
    MySkillsComponent,
    SkillGraphsComponent,
    SkillSnapshotComponent,
    ExperienceComponent,
  ],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule],
})
export class ComponentsModule {}
