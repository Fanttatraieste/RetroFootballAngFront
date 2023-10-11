import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { TeamsComponent } from './teams/teams.component';
import { IconsComponent } from './icons/icons.component';
import { HomeComponent } from './home/home.component';
import { CirclesComponent } from './home/circles/circles.component';
import { HeroComponent } from './home/hero/hero.component';
import { LatestComponent } from './home/latest/latest.component';
import { MissionComponent } from './home/mission/mission.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    TeamsComponent,
    IconsComponent,
    HomeComponent,
    CirclesComponent,
    HeroComponent,
    LatestComponent,
    MissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
