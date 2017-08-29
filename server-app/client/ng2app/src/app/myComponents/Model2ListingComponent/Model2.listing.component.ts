 

import { Component ,OnInit } from '@angular/core';
import {   Model2 , FireLoopRef } from 'app/shared/sdk/models';

import {  } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Model2Listing',
  templateUrl: './Model2.listing.component.html',
  styleUrls: ['./Model2.listing.component.css']
})
export class  Model2ComponentListing  implements OnInit{

 private model2 : Model2 = new Model2();
 private model2s: Model2[] = new Array <Model2>();
 private model2Ref : FireLoopRef<Model2>;


    public alerts: any = [];
    public successModal;
    public dangerModal;
    public deleteObj;
    
    constructor(
      private rt: RealTime 
      
      
      ) {
      
      this.rt.onReady().subscribe(() => {
      this.model2Ref = 
      this.rt.FireLoop.ref<Model2>(Model2);
      this.model2Ref.on('change',{order: 'id ASC' }).subscribe((model2s : Model2[]) => this.model2s = model2s);
      
      });
  }

  ngOnInit() {
          
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(model2: Model2): void {
    this.model2Ref.remove(model2).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }
 
  updateModel2() : void{
  this.model2Ref.upsert(this.model2).subscribe(() => this.model2 = new Model2 ());
  for(var i in this.model2) { this.model2[i] = ""};
  }
  update(model2): void {
    this.model2 = model2;
  }
  } 