import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NavComponent } from './nav/nav.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavComponent,
    ProjectDetailsComponent,
    AllProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
