       
import { Component, OnInit } from '@angular/core';
import {  Customer1 , Email , FireLoopRef } from 'app/shared/sdk/models';
import {  Customer1Api , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Customer1',
  templateUrl: './Customer1.component.html',
  styleUrls: ['./Customer1.component.css']
})

export class Customer1Component implements OnInit {

      private customer1 : Customer1 = new Customer1();
      private customer1s : Customer1[] = new Array <Customer1>();
      private customer1Ref : FireLoopRef<Customer1>;

  
      private emailArray = new Array< any >();
      private email : Email= new Email();
  
    constructor(private rt: RealTime 
    , private customer1Api: Customer1Api ) {
    this.emailArray = [];
    this.rt.onReady().subscribe(() => {
    this.customer1Ref = this.rt.FireLoop.ref<Customer1>(Customer1);
    this.customer1Ref.on('change',{order: 'id ASC'}).subscribe((customer1: Customer1[]) => this.customer1s = customer1);

  
    });
  } 
  ngOnInit() {
  }

  
  createCustomer1s(): void {
     this.customer1Api.create(this.customer1).subscribe(( customer1 :  Customer1) => this.createRelations(customer1));
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
  


    
} 