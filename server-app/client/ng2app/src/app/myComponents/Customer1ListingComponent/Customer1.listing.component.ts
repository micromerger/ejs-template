 

import { Component ,OnInit } from '@angular/core';
import {   Customer1 , Email , FireLoopRef } from 'app/shared/sdk/models';

import {  Customer1Api , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Customer1Listing',
  templateUrl: './Customer1.listing.component.html',
  styleUrls: ['./Customer1.listing.component.css']
})
export class  Customer1ComponentListing  implements OnInit{

 private customer1 : Customer1 = new Customer1();
 private customer1s: Customer1[] = new Array <Customer1>();
 private customer1Ref : FireLoopRef<Customer1>;


      private emailArray = new Array< any >();
      private email : Email= new Email();

    public alerts: any = [];
    public successModal;
    public dangerModal;
    public deleteObj;
    
    constructor(
      private rt: RealTime 
      
      , private customer1Api: Customer1Api 
      ) {
      this.emailArray = [];
      this.rt.onReady().subscribe(() => {
      this.customer1Ref = 
      this.rt.FireLoop.ref<Customer1>(Customer1);
      this.customer1Ref.on('change',{order: 'id ASC' }).subscribe((customer1s : Customer1[]) => this.customer1s = customer1s);
      
      });
  }

  ngOnInit() {
          
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(customer1: Customer1): void {
    this.customer1Ref.remove(customer1).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }

  updateCustomer1s(): void {
     this.customer1Ref.upsert(this.customer1).subscribe(( customer1 :  Customer1) => this.createRelations(customer1));
     for(var i in this.customer1) { this.customer1[i] = ""};
  }
  
    addEmail() {
    var temp = {'email':this.email.email,};
    this.emailArray.push(temp);
    for(var i in this.email) { this.email[i] = ""};
  }

  removeEmail(email) {
    let index = this.emailArray.indexOf(email);
    this.emailArray.splice(index, 1);
  }
  
  createRelations( customer1) : void { 
    this.customer1Api.createManyEmails(customer1.id, this.emailArray).subscribe(() => this.emailArray = []);
  }

update(customer1) : void{
    this.customer1 = customer1;
    this.customer1Api.getEmails( this.customer1.id).subscribe((email : Email) => this.initiateRelEmail(email));
  }
initiateRelEmail(email): void {
    var temp;
    this.emailArray = [];    
    for(var j in email) { 
      temp = {'email':email[j].email,};
      this.emailArray.push(temp);
    };
    this.customer1Api.deleteEmails(this.customer1.id).subscribe();
  }} 