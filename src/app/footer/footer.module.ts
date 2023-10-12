import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FooterQuoteComponent } from './footer-quote/footer-quote.component';
import { FooterSocialComponent } from './footer-social/footer-social.component';


@NgModule({
  declarations: [
   FooterComponent,
   FooterNavComponent,
   FooterQuoteComponent,
   FooterSocialComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [FooterModule]
})
export class FooterModule { }
