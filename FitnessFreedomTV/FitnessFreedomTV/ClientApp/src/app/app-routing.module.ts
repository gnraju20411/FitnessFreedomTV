import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: '**', component: HomeComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
