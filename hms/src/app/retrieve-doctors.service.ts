import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { RetrieveDoctors } from './retrieve-doctors';
@Injectable({
  providedIn: 'root'
})
export class RetrieveDoctorsService {
  baseUrl:string ="http://localhost:9090/admin"
  constructor(public http:HttpClient) { }

  saveDoctorDetails(doctor:any):Observable<string> {
    return this.http.post(this.baseUrl+"/sdd",doctor,{responseType:"text"});
  }

  savePatientDetails(patient:any):Observable<string> {
    return this.http.post(this.baseUrl+"/spd",patient,{responseType:"text"});
  }

  findAllDoctors():Observable<RetrieveDoctors[]> {
    return this.http.get<RetrieveDoctors[]>(this.baseUrl+"/findAllDoctors");
  }
  
  ViewPatientList():Observable<Patient[]> {
    return this.http.get<Patient[]>(this.baseUrl+"/vpd");
  }

    deleteDoctorById(did:number):Observable<string> {
      return this.http.delete(this.baseUrl+"/deleteDoctor/"+did,{responseType:"text"});
    }

    approveDoctorById(did:number):Observable<string> {
      return this.http.delete(this.baseUrl+"/approveDoctor/"+did,{responseType:"text"});
    }

    rejectDoctorById(did:number):Observable<string> {
      return this.http.delete(this.baseUrl+"/rejectDoctor/"+did,{responseType:"text"});
    }
  
}

