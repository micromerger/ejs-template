       
import { Component, OnInit } from '@angular/core';
import {  Doctor , Patient , FireLoopRef } from 'app/shared/sdk/models';
import { DoctorApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Doctor',
  templateUrl: './Doctor.component.html',
  styleUrls: ['./Doctor.component.css']
})

export class DoctorComponent implements OnInit {

      private doctor : Doctor = new Doctor();
      private doctors : Doctor[] = new Array <Doctor>();
      private doctorRef : FireLoopRef<Doctor>;

  
    private patients: Patient[]  = new Array< Patient >();
    private patientRef: FireLoopRef < Patient > ;
    private doctorPatients = Array<any>();
    private filterPatient : Patient[] = new Array();
    private checkedPatient  = new Array< any >();
  
    constructor(private rt: RealTime 
    , private doctorApi: DoctorApi ) {
    
    this.rt.onReady().subscribe(() => {
    this.doctorRef = this.rt.FireLoop.ref<Doctor>(Doctor);
    this.doctorRef.on('change',{order: 'id ASC'}).subscribe((doctor: Doctor[]) => this.doctors = doctor);

  
  this.patientRef = this.rt.FireLoop.ref < Patient > (Patient);
    this.patientRef.on('change',{order: 'id ASC'}).subscribe((patients: Patient[]) => this.patients = this.filterPatient =  patients);
  
    });
  } 
  ngOnInit() {
  }

  
  createDoctor() : void{
    this.doctorApi.create(this.doctor).subscribe((doctor: Doctor) => this.createRelations(doctor));
  }
  createRelations(doctor): void {
  this.addPatientToDoctor(doctor);
  }
  
  selectPatients(event , PatientId):void{
    if (event.target.checked) this.doctorPatients.push(PatientId);
    else if(!event.target.checked) {
      var index = this.doctorPatients.indexOf(PatientId);
      this.doctorPatients.splice(index, 1);
    }
  }

   addPatientToDoctor(doctor): void{
     for (var i = 0; i< this.doctorPatients.length ; i++)
this.doctorApi.linkPatients(doctor.id , this.doctorPatients[i] , {}).subscribe();
     for(var chk in this.doctor) { this.doctor[chk] = ""};
      this.patients.forEach((patient , i) => {
       this.checkedPatient[i] = false;
    })
  }
    Patientfiltering(param){
      this.filterPatient= [];
      if(param != ""){
            this.patients.forEach(element => {
                var prop = element[Object.keys(element)[0]];

                 if (typeof prop == 'string') {
                       if (prop.indexOf(param) >= 0) this.filterPatient.push(element);
                   }
                   else {if (prop == param) this.filterPatient.push(element);}
                 });
      }else{
         this.filterPatient = this.patients;
      }
     }
    


    
} 