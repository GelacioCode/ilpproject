import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmintoolComponent } from './pages/admintool/admintool.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { InnovationsComponent } from './pages/innovations/innovations.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'innovations',component:InnovationsComponent},
  {path:'analytics',component:AnalyticsComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'admintool',component:AdmintoolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
