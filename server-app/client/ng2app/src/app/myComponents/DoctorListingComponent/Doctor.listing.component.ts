 

import { Component ,OnInit } from '@angular/core';
import {   Doctor , Patient , FireLoopRef } from 'app/shared/sdk/models';
import { ActivatedRoute } from '@angular/router';
import { DoctorApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-DoctorListing',
  templateUrl: './Doctor.listing.component.html',
  styleUrls: ['./Doctor.listing.component.css']
})
export class  DoctorComponentListing  implements OnInit{

 private doctor : Doctor = new Doctor();
 private doctors: Doctor[] = new Array <Doctor>();
 private doctorRef : FireLoopRef<Doctor>;


    public alerts: any = [];
    public successModal;
    public dangerModal;
    patientId: number;
    private rel_Id: number;
    private modelName;
    private sub: any;
    public deleteObj;
    
    constructor(
      private rt: RealTime 
      ,private route: ActivatedRoute 
      , private doctorApi: DoctorApi 
      ) {
      
      this.rt.onReady().subscribe(() => {
      this.doctorRef = 
      this.rt.FireLoop.ref<Doctor>(Doctor);
      this.doctorRef.on('change',{order: 'id ASC' , where : {id : this.rel_Id ,patientId : this.patientId ,}}).subscribe((doctors : Doctor[]) => this.doctors = doctors);
      
      });
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.modelName = params["modelName"];
       if (params['patientId'] == undefined || this.modelName.toLowerCase() != "patient" ){ this.patientId = undefined;}// (+) converts string 'id' to a number
       else if (params['patientId'] != undefined && this.modelName.toLowerCase() == "patient"){this.patientId = +params['patientId'];}
          });
          
      this.sub = this.route.params.subscribe(params => {
       if (params['doctorId'] == undefined ){ this.rel_Id = undefined;}// (+) converts string 'id' to a number
       else if (params['doctorId'] != undefined ){this.rel_Id = +params['doctorId'];}
          });
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(doctor: Doctor): void {
    this.doctorRef.remove(doctor).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }

  updateDoctor() : void{
    this.doctorRef.upsert(this.doctor).subscribe();
  }
  update(doctor) : void {
    this.doctor = doctor;
  }
  } 