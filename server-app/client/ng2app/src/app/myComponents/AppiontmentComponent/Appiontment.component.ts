       
import { Component, OnInit } from '@angular/core';
import {  Appiontment , Doctor , Patient , FireLoopRef } from 'app/shared/sdk/models';
import {  } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Appiontment',
  templateUrl: './Appiontment.component.html',
  styleUrls: ['./Appiontment.component.css']
})

export class AppiontmentComponent implements OnInit {

      private appiontment : Appiontment = new Appiontment();
      private appiontments : Appiontment[] = new Array <Appiontment>();
      private appiontmentRef : FireLoopRef<Appiontment>;

  
      private doctors : Doctor[] = new Array<Doctor>();
      private doctorRef : FireLoopRef<Doctor>;
  
      private patients : Patient[] = new Array<Patient>();
      private patientRef : FireLoopRef<Patient>;
  
    constructor(private rt: RealTime 
    ) {
    
    this.rt.onReady().subscribe(() => {
    this.appiontmentRef = this.rt.FireLoop.ref<Appiontment>(Appiontment);
    this.appiontmentRef.on('change',{order: 'id ASC'}).subscribe((appiontment: Appiontment[]) => this.appiontments = appiontment);

  
    this.doctorRef = this.rt.FireLoop.ref<Doctor>(Doctor);
    this.doctorRef.on('change',{order: 'id ASC'}).subscribe((doctor: Doctor[]) => this.doctors = doctor);
  
    this.patientRef = this.rt.FireLoop.ref<Patient>(Patient);
    this.patientRef.on('change',{order: 'id ASC'}).subscribe((patient: Patient[]) => this.patients = patient);
  
    });
  } 
  ngOnInit() {
  }

   
  addAppiontment() : void{
  this.appiontmentRef.create(this.appiontment).subscribe(() => this.appiontment = new Appiontment ());
  for(var i in this.appiontment) { this.appiontment[i] = ""};
  }
  


    
} 