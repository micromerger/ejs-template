import { Component, OnInit } from '@angular/core';
import {Customer,Email, FireLoopRef } from 'app/shared/sdk/models';
import { CustomerApi } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import {Contact} from './contact';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    contacts: Array<Contact>;
   private customer     : Customer = new Customer();
 private customers     : Customer[] = new Array<Customer>();
 private custRef : FireLoopRef<Customer>;
  constructor(private rt: RealTime,private customerApi: CustomerApi) {
    this.rt.onReady().subscribe(() => {
    this.contacts = [];
    this.custRef = this.rt.FireLoop.ref<Customer>(Customer);
    this.custRef.on('change').subscribe((customers: Customer[]) => this.customers = customers);

    });
  }
  ngOnInit() {
  }

  create(): void {
    var cusomterid = 0;
    if (this.customers.length == 0) cusomterid = 1;
    else
    
      cusomterid += this.customers.length;
 
    this.customerApi.createManyEmails(cusomterid,this.contacts).subscribe((stats: any[]) => console.log(stats));
    this.custRef.create(this.customer).subscribe(() => this.customer = new Customer());
  }

  update(customer: Customer): void {
    this.custRef.upsert(customer).subscribe();
  }

  remove(customer: Customer): void {
    this.custRef.remove(customer).subscribe();
  }
   addEmail(param){
     console.log(param);
        var email = new Contact(param);
        this.contacts.push(email);
        console.log(this.contacts);
    }

    removeEmail(email){
        let index = this.contacts.indexOf(email);
        this.contacts.splice(index,1);
    }

}
