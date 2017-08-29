       
import { Component, OnInit } from '@angular/core';
import {  Patient , Doctor , FireLoopRef } from 'app/shared/sdk/models';
import { PatientApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Patient',
  templateUrl: './Patient.component.html',
  styleUrls: ['./Patient.component.css']
})

export class PatientComponent implements OnInit {

      private patient : Patient = new Patient();
      private patients : Patient[] = new Array <Patient>();
      private patientRef : FireLoopRef<Patient>;

  
    private doctors: Doctor[]  = new Array< Doctor >();
    private doctorRef: FireLoopRef < Doctor > ;
    private patientDoctors = Array<any>();
    private filterDoctor : Doctor[] = new Array();
    private checkedDoctor  = new Array< any >();
  
    constructor(private rt: RealTime 
    , private patientApi: PatientApi ) {
    
    this.rt.onReady().subscribe(() => {
    this.patientRef = this.rt.FireLoop.ref<Patient>(Patient);
    this.patientRef.on('change',{order: 'id ASC'}).subscribe((patient: Patient[]) => this.patients = patient);

  
  this.doctorRef = this.rt.FireLoop.ref < Doctor > (Doctor);
    this.doctorRef.on('change',{order: 'id ASC'}).subscribe((doctors: Doctor[]) => this.doctors = this.filterDoctor =  doctors);
  
    });
  } 
  ngOnInit() {
  }

  
  createPatient() : void{
    this.patientApi.create(this.patient).subscribe((patient: Patient) => this.createRelations(patient));
  }
  createRelations(patient): void {
  this.addDoctorToPatient(patient);
  }
  
  selectDoctors(event , DoctorId):void{
    if (event.target.checked) this.patientDoctors.push(DoctorId);
    else if(!event.target.checked) {
      var index = this.patientDoctors.indexOf(DoctorId);
      this.patientDoctors.splice(index, 1);
    }
  }

   addDoctorToPatient(patient): void{
     for (var i = 0; i< this.patientDoctors.length ; i++)
this.patientApi.linkDoctors(patient.id , this.patientDoctors[i] , {}).subscribe();
     for(var chk in this.patient) { this.patient[chk] = ""};
      this.doctors.forEach((doctor , i) => {
       this.checkedDoctor[i] = false;
    })
  }
    Doctorfiltering(param){
      this.filterDoctor= [];
      if(param != ""){
            this.doctors.forEach(element => {
                var prop = element[Object.keys(element)[0]];

                 if (typeof prop == 'string') {
                       if (prop.indexOf(param) >= 0) this.filterDoctor.push(element);
                   }
                   else {if (prop == param) this.filterDoctor.push(element);}
                 });
      }else{
         this.filterDoctor = this.doctors;
      }
     }
    


    
} 