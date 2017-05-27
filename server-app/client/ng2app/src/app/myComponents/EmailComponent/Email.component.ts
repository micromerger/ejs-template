       

import { Component, OnInit } from '@angular/core';
import {  Email , FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Email',
  templateUrl: './Email.component.html',
  styleUrls: ['./Email.component.css']
})

export class EmailComponent implements OnInit {

      private email      : Email = new Email();
      private emails      : Email[] = new Array <Email>();
      private emailRef : FireLoopRef<Email>;
      private email_edit_btn : boolean = false;

  
  
    constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.emailRef = this.rt.FireLoop.ref<Email>(Email);
    this.emailRef.on('change').subscribe((email: Email[]) => this.emails = email);

  
   

    });
  }
  ngOnInit() {
  }

  addEmail() : void{
  this.emailRef.create(this.email).subscribe(() => this.email = new Email ());
  for(var i in Email) { Email[i] = ""};
  }

  editEmail(id) : void{
    this.email_edit_btn = true;
    for (var i = 0; i< this.emails.length;i++){
      if (this.emails[i].id  == id)
      this.email = this.emails[i];
    }
  }

   deleteEmail(email : Email ):void{
    this.emailRef.remove(email).subscribe();
  }

  emailSubmitRecord() : void{
    this.emailRef.upsert(this.email).subscribe();
    this.email_edit_btn = false;
    for(var i in Email) { Email[i] = ""};
  }
}