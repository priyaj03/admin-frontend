import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RetrieveDoctorsService } from '../retrieve-doctors.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  doctorRef = new FormGroup({
    did:new FormControl(),
    dname:new FormControl(),
    dstatus:new FormControl(),
    dage:new FormControl(),
    dgender:new FormControl(),
    spec:new FormControl(),
    phno:new FormControl(),
    address:new FormControl(),
  })
  storeMsg :string =""

  constructor(public rds:RetrieveDoctorsService,public router:Router) { }

  ngOnInit(): void {
  }
  saveDoctorDetails() {
    let d = this.doctorRef.value;
    this.rds.saveDoctorDetails(d).subscribe({
      next:(result:any)=>this.storeMsg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.doctorRef.reset();

}
}
