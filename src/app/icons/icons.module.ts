import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { IconsComponent } from './icons.component';
import { IconsHeroComponent } from './icons-hero/icons-hero.component';
import { FantasListComponent } from './fantas-list/fantas-list.component';
import { PageNumberComponent } from './page-number/page-number.component';

@NgModule({
  declarations: [
    IconsComponent,
    IconsHeroComponent,
    FantasListComponent,
    PageNumberComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [IconsComponent],
  providers: [],
  bootstrap: [IconsModule],
})
export class IconsModule {}
