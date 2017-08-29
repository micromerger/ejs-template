       
import { Component, OnInit } from '@angular/core';
import {  Email , FireLoopRef } from 'app/shared/sdk/models';
import {  } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Email',
  templateUrl: './Email.component.html',
  styleUrls: ['./Email.component.css']
})

export class EmailComponent implements OnInit {

      private email : Email = new Email();
      private emails : Email[] = new Array <Email>();
      private emailRef : FireLoopRef<Email>;

  
    constructor(private rt: RealTime 
    ) {
    
    this.rt.onReady().subscribe(() => {
    this.emailRef = this.rt.FireLoop.ref<Email>(Email);
    this.emailRef.on('change',{order: 'id ASC'}).subscribe((email: Email[]) => this.emails = email);

  
    });
  } 
  ngOnInit() {
  }

   
  addEmail() : void{
  this.emailRef.create(this.email).subscribe(() => this.email = new Email ());
  for(var i in this.email) { this.email[i] = ""};
  }
  


    
} 