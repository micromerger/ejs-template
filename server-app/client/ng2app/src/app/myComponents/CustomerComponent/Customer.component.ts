       
import { Component, OnInit } from '@angular/core';
import {  Customer , Order1 , Email , FireLoopRef } from 'app/shared/sdk/models';
import {  CustomerApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})

export class CustomerComponent implements OnInit {

      private customer : Customer = new Customer();
      private customers : Customer[] = new Array <Customer>();
      private customerRef : FireLoopRef<Customer>;

  
      private order1Array = new Array< any >();
      private order1 : Order1= new Order1();
  
      private emailArray = new Array< any >();
      private email : Email= new Email();
  
    constructor(private rt: RealTime 
    , private customerApi: CustomerApi ) {
    this.order1Array = [];this.emailArray = [];
    this.rt.onReady().subscribe(() => {
    this.customerRef = this.rt.FireLoop.ref<Customer>(Customer);
    this.customerRef.on('change',{order: 'id ASC'}).subscribe((customer: Customer[]) => this.customers = customer);

  
    });
  } 
  ngOnInit() {
  }

  
  createCustomers(): void {
     this.customerApi.create(this.customer).subscribe(( customer :  Customer) => this.createRelations(customer));
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
  


    
} 