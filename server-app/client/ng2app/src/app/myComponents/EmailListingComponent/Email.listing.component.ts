 

import { Component ,OnInit } from '@angular/core';
import {   Email , FireLoopRef } from 'app/shared/sdk/models';
import { ActivatedRoute } from '@angular/router';
import {  } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-EmailListing',
  templateUrl: './Email.listing.component.html',
  styleUrls: ['./Email.listing.component.css']
})
export class  EmailComponentListing  implements OnInit{

 private email : Email = new Email();
 private emails: Email[] = new Array <Email>();
 private emailRef : FireLoopRef<Email>;


    public alerts: any = [];
    public successModal;
    public dangerModal;
    customer1Id: number;
    customerId: number;
    private rel_Id: number;
    private modelName;
    private sub: any;
    public deleteObj;
    
    constructor(
      private rt: RealTime 
      ,private route: ActivatedRoute 
      
      ) {
      
      this.rt.onReady().subscribe(() => {
      this.emailRef = 
      this.rt.FireLoop.ref<Email>(Email);
      this.emailRef.on('change',{order: 'id ASC' , where : {customer1Id : this.customer1Id ,customeremailid: this.customerId ,}}).subscribe((emails : Email[]) => this.emails = emails);
      
      });
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.modelName = params["modelName"];
       if (params['customer1Id'] == undefined || this.modelName.toLowerCase() != "customer1" ){ this.customer1Id = undefined;}// (+) converts string 'id' to a number
       else if (params['customer1Id'] != undefined && this.modelName.toLowerCase() == "customer1"){this.customer1Id = +params['customer1Id'];}
          });
     this.sub = this.route.params.subscribe(params => {
       this.modelName = params["modelName"];
       if (params['customerId'] == undefined || this.modelName.toLowerCase() != "customer" ){ this.customerId = undefined;}// (+) converts string 'id' to a number
       else if (params['customerId'] != undefined && this.modelName.toLowerCase() == "customer"){this.customerId = +params['customerId'];}
          });
          
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(email: Email): void {
    this.emailRef.remove(email).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }
 
  updateEmail() : void{
  this.emailRef.upsert(this.email).subscribe(() => this.email = new Email ());
  for(var i in this.email) { this.email[i] = ""};
  }
  update(email): void {
    this.email = email;
  }
  } 