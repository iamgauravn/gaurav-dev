import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NavComponent } from './nav/nav.component';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavComponent,
    BackgroundAnimationComponent
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
