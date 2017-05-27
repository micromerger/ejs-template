       

import { Component, OnInit } from '@angular/core';
import {  Customer , FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css']
})

export class CustomerComponent implements OnInit {

      private customer      : Customer = new Customer();
      private customers      : Customer[] = new Array <Customer>();
      private customerRef : FireLoopRef<Customer>;
      private customer_edit_btn : boolean = false;

  
  
    constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.customerRef = this.rt.FireLoop.ref<Customer>(Customer);
    this.customerRef.on('change').subscribe((customer: Customer[]) => this.customers = customer);

  
   

    });
  }
  ngOnInit() {
  }

  addCustomer() : void{
  this.customerRef.create(this.customer).subscribe(() => this.customer = new Customer ());
  for(var i in Customer) { Customer[i] = ""};
  }

  editCustomer(id) : void{
    this.customer_edit_btn = true;
    for (var i = 0; i< this.customers.length;i++){
      if (this.customers[i].id  == id)
      this.customer = this.customers[i];
    }
  }

   deleteCustomer(customer : Customer ):void{
    this.customerRef.remove(customer).subscribe();
  }

  customerSubmitRecord() : void{
    this.customerRef.upsert(this.customer).subscribe();
    this.customer_edit_btn = false;
    for(var i in Customer) { Customer[i] = ""};
  }
}