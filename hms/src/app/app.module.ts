import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RetrieveDoctorsComponent } from './retrieve-doctors/retrieve-doctors.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    RetrieveDoctorsComponent,
    AdddoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
