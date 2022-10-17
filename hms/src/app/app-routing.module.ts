import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RetrieveDoctorsComponent } from './retrieve-doctors/retrieve-doctors.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

const routes: Routes = [
  {path:"aboutus",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"Total doctors",component:RetrieveDoctorsComponent},
  {path:"AddDoctor",component:AdddoctorComponent},
  {path:"AddPatient",component:AddpatientComponent},
  {path:"ViewPatient",component:ViewpatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
