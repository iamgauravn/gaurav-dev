import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
