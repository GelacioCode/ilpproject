import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './toolpage/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { InnovationsComponent } from './pages/innovations/innovations.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AdmintoolComponent } from './pages/admintool/admintool.component';
import { FooterComponent } from './toolpage/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InnovationsComponent,
    AnalyticsComponent,
    FaqsComponent,
    AdmintoolComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
