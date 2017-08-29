       
import { Component, OnInit } from '@angular/core';
import {  Order1 , FireLoopRef } from 'app/shared/sdk/models';
import {  } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Order1',
  templateUrl: './Order1.component.html',
  styleUrls: ['./Order1.component.css']
})

export class Order1Component implements OnInit {

      private order1 : Order1 = new Order1();
      private order1s : Order1[] = new Array <Order1>();
      private order1Ref : FireLoopRef<Order1>;

  
    constructor(private rt: RealTime 
    ) {
    
    this.rt.onReady().subscribe(() => {
    this.order1Ref = this.rt.FireLoop.ref<Order1>(Order1);
    this.order1Ref.on('change',{order: 'id ASC'}).subscribe((order1: Order1[]) => this.order1s = order1);

  
    });
  } 
  ngOnInit() {
  }

   
  addOrder1() : void{
  this.order1Ref.create(this.order1).subscribe(() => this.order1 = new Order1 ());
  for(var i in this.order1) { this.order1[i] = ""};
  }
  


    
} 