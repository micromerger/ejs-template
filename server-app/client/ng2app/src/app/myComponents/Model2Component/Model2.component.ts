       
import { Component, OnInit } from '@angular/core';
import {  Model2 , FireLoopRef } from 'app/shared/sdk/models';
import {  } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Model2',
  templateUrl: './Model2.component.html',
  styleUrls: ['./Model2.component.css']
})

export class Model2Component implements OnInit {

      private model2 : Model2 = new Model2();
      private model2s : Model2[] = new Array <Model2>();
      private model2Ref : FireLoopRef<Model2>;

  
    constructor(private rt: RealTime 
    ) {
    
    this.rt.onReady().subscribe(() => {
    this.model2Ref = this.rt.FireLoop.ref<Model2>(Model2);
    this.model2Ref.on('change',{order: 'id ASC'}).subscribe((model2: Model2[]) => this.model2s = model2);

  
    });
  } 
  ngOnInit() {
  }

   
  addModel2() : void{
  this.model2Ref.create(this.model2).subscribe(() => this.model2 = new Model2 ());
  for(var i in this.model2) { this.model2[i] = ""};
  }
  


    
} 