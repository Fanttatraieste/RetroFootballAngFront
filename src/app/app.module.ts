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
import { FooterComponent } from './footer/footer.component';
import { LatestIconsComponent } from './home/latest/latest-icons/latest-icons.component';
import { LatestTitleComponent } from './home/latest/latest-title/latest-title.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';
import { FooterQuoteComponent } from './footer/footer-quote/footer-quote.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';

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
    MissionComponent,
    FooterComponent,
    LatestIconsComponent,
    LatestTitleComponent,
    FooterSocialComponent,
    FooterQuoteComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
