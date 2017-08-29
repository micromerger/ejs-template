 

import { Component ,OnInit } from '@angular/core';
import {   Customer , Order1 , Email , FireLoopRef } from 'app/shared/sdk/models';

import {  CustomerApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-CustomerListing',
  templateUrl: './Customer.listing.component.html',
  styleUrls: ['./Customer.listing.component.css']
})
export class  CustomerComponentListing  implements OnInit{

 private customer : Customer = new Customer();
 private customers: Customer[] = new Array <Customer>();
 private customerRef : FireLoopRef<Customer>;


      private order1Array = new Array< any >();
      private order1 : Order1= new Order1();

      private emailArray = new Array< any >();
      private email : Email= new Email();

    public alerts: any = [];
    public successModal;
    public dangerModal;
    public deleteObj;
    
    constructor(
      private rt: RealTime 
      
      , private customerApi: CustomerApi 
      ) {
      this.order1Array = [];this.emailArray = [];
      this.rt.onReady().subscribe(() => {
      this.customerRef = 
      this.rt.FireLoop.ref<Customer>(Customer);
      this.customerRef.on('change',{order: 'id ASC' }).subscribe((customers : Customer[]) => this.customers = customers);
      
      });
  }

  ngOnInit() {
          
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(customer: Customer): void {
    this.customerRef.remove(customer).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }

  updateCustomers(): void {
     this.customerRef.upsert(this.customer).subscribe(( customer :  Customer) => this.createRelations(customer));
     for(var i in this.customer) { this.customer[i] = ""};
  }
  
    addOrder1() {
    var temp = {'orderRef':this.order1.orderRef,};
    this.order1Array.push(temp);
    for(var i in this.order1) { this.order1[i] = ""};
  }

  removeOrder1(order1) {
    let index = this.order1Array.indexOf(order1);
    this.order1Array.splice(index, 1);
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
  
  createRelations( customer) : void { 
    this.customerApi.createManyOrder1s(customer.id, this.order1Array).subscribe(() => this.order1Array = []);
    this.customerApi.createManyEmails(customer.id, this.emailArray).subscribe(() => this.emailArray = []);
  }

update(customer) : void{
    this.customer = customer;
    this.customerApi.getOrder1s( this.customer.id).subscribe((order1 : Order1) => this.initiateRelOrder1(order1));
    this.customerApi.getEmails( this.customer.id).subscribe((email : Email) => this.initiateRelEmail(email));
  }
initiateRelOrder1(order1): void {
    var temp;
    this.order1Array = [];    
    for(var j in order1) { 
      temp = {'orderRef':order1[j].orderRef,};
      this.order1Array.push(temp);
    };
    this.customerApi.deleteOrder1s(this.customer.id).subscribe();
  }
initiateRelEmail(email): void {
    var temp;
    this.emailArray = [];    
    for(var j in email) { 
      temp = {'email':email[j].email,};
      this.emailArray.push(temp);
    };
    this.customerApi.deleteEmails(this.customer.id).subscribe();
  }} 