import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/navbar/header/header.component';
import {FooterComponent} from './components/navbar/footer/footer.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RegistrationComponent} from './components/profile/registration/registration.component';
import {LoginComponent} from './components/profile/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from 'src/environments/environment';

import {UserService} from './shared/user.service';
import {CustomerService} from './shared/customer.service';
import {TermsConditionComponent} from './components/termpolicy/terms-condition/terms-condition.component';
import {PrivacyPolicyComponent} from './components/termpolicy/privacy-policy/privacy-policy.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {Error404Component} from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [UserService, CustomerService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
