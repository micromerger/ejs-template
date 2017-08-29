 

import { Component ,OnInit } from '@angular/core';
import {   Order1 , FireLoopRef } from 'app/shared/sdk/models';
import { ActivatedRoute } from '@angular/router';
import {  } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Order1Listing',
  templateUrl: './Order1.listing.component.html',
  styleUrls: ['./Order1.listing.component.css']
})
export class  Order1ComponentListing  implements OnInit{

 private order1 : Order1 = new Order1();
 private order1s: Order1[] = new Array <Order1>();
 private order1Ref : FireLoopRef<Order1>;


    public alerts: any = [];
    public successModal;
    public dangerModal;
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
      this.order1Ref = 
      this.rt.FireLoop.ref<Order1>(Order1);
      this.order1Ref.on('change',{order: 'id ASC' , where : {customerId : this.customerId ,}}).subscribe((order1s : Order1[]) => this.order1s = order1s);
      
      });
  }

  ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
       this.modelName = params["modelName"];
       if (params['customerId'] == undefined || this.modelName.toLowerCase() != "customer" ){ this.customerId = undefined;}// (+) converts string 'id' to a number
       else if (params['customerId'] != undefined && this.modelName.toLowerCase() == "customer"){this.customerId = +params['customerId'];}
          });
          
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(order1: Order1): void {
    this.order1Ref.remove(order1).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }
 
  updateOrder1() : void{
  this.order1Ref.upsert(this.order1).subscribe(() => this.order1 = new Order1 ());
  for(var i in this.order1) { this.order1[i] = ""};
  }
  update(order1): void {
    this.order1 = order1;
  }
  } 