import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/profile/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Error404Component } from './components/error404/error404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RegistrationComponent } from './components/profile/registration/registration.component';
import { PrivacyPolicyComponent } from './components/termpolicy/privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './components/termpolicy/terms-condition/terms-condition.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },

  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactUsComponent },

  { path: 'pripol', component: PrivacyPolicyComponent },
  { path: 'termcon', component: TermsConditionComponent },

  { path: '**', component: Error404Component },
  { path: '404', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
