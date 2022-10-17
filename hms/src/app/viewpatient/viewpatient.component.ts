import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { RetrieveDoctorsService } from '../retrieve-doctors.service';
@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {
  patients:Array<Patient>=[];
  constructor(public rds:RetrieveDoctorsService) { }

  ngOnInit(): void {
    this.viewPatientList()
  }

  viewPatientList() {
    this.rds.ViewPatientList().subscribe({
      next:(result:any)=>this.patients=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }
  admitpatient(){
    
  }
  dischargepatient(){

  }


}
