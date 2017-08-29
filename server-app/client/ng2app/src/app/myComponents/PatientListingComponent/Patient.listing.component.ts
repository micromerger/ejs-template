 

import { Component ,OnInit } from '@angular/core';
import {   Patient , Doctor , FireLoopRef } from 'app/shared/sdk/models';
import { ActivatedRoute } from '@angular/router';
import { PatientApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-PatientListing',
  templateUrl: './Patient.listing.component.html',
  styleUrls: ['./Patient.listing.component.css']
})
export class  PatientComponentListing  implements OnInit{

 private patient : Patient = new Patient();
 private patients: Patient[] = new Array <Patient>();
 private patientRef : FireLoopRef<Patient>;


    public alerts: any = [];
    public successModal;
    public dangerModal;
    doctorId: number;
    private rel_Id: number;
    private modelName;
    private sub: any;
    public deleteObj;
    
    constructor(
      private rt: RealTime 
      ,private route: ActivatedRoute 
      , private patientApi: PatientApi 
      ) {
      
      this.rt.onReady().subscribe(() => {
      this.patientRef = 
      this.rt.FireLoop.ref<Patient>(Patient);
      this.patientRef.on('change',{order: 'id ASC' , where : {id : this.rel_Id ,doctorId : this.doctorId ,}}).subscribe((patients : Patient[]) => this.patients = patients);
      
      });
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.modelName = params["modelName"];
       if (params['doctorId'] == undefined || this.modelName.toLowerCase() != "doctor" ){ this.doctorId = undefined;}// (+) converts string 'id' to a number
       else if (params['doctorId'] != undefined && this.modelName.toLowerCase() == "doctor"){this.doctorId = +params['doctorId'];}
          });
          
      this.sub = this.route.params.subscribe(params => {
       if (params['patientId'] == undefined ){ this.rel_Id = undefined;}// (+) converts string 'id' to a number
       else if (params['patientId'] != undefined ){this.rel_Id = +params['patientId'];}
          });
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(patient: Patient): void {
    this.patientRef.remove(patient).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }

  updatePatient() : void{
    this.patientRef.upsert(this.patient).subscribe();
  }
  update(patient) : void {
    this.patient = patient;
  }
  } 