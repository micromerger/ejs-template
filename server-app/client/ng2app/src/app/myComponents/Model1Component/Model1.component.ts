       
import { Component, OnInit } from '@angular/core';
import {  Model1 , Assembly , FireLoopRef } from 'app/shared/sdk/models';
import { Model1Api , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Model1',
  templateUrl: './Model1.component.html',
  styleUrls: ['./Model1.component.css']
})

export class Model1Component implements OnInit {

      private model1 : Model1 = new Model1();
      private model1s : Model1[] = new Array <Model1>();
      private model1Ref : FireLoopRef<Model1>;

  
    private assemblys: Assembly[]  = new Array< Assembly >();
    private assemblyRef: FireLoopRef < Assembly > ;
    private model1Assemblys = Array<any>();
    private filterAssembly : Assembly[] = new Array();
    private checkedAssembly  = new Array< any >();
  
    constructor(private rt: RealTime 
    , private model1Api:Model1Api ) {
    
    this.rt.onReady().subscribe(() => {
    this.model1Ref = this.rt.FireLoop.ref<Model1>(Model1);
    this.model1Ref.on('change',{order: 'id ASC'}).subscribe((model1: Model1[]) => this.model1s = model1);

  
    this.assemblyRef = this.rt.FireLoop.ref < Assembly > (Assembly);
    this.assemblyRef.on('change',{order: 'id ASC'}).subscribe((assemblys: Assembly[]) => this.assemblys = this.filterAssembly =  assemblys);
  
    });
  } 
  ngOnInit() {
  }

  
    createModel1() : void{
     this.model1Api.create(this.model1).subscribe((model1: Model1) => this.createRelations(model1));
  }
  createRelations(model1): void {
  this.addAssemblyToModel1(model1);
  }
  
  selectAssemblys(event , AssemblyId):void{
    if (event.target.checked) this.model1Assemblys.push(AssemblyId);
    else if(!event.target.checked) {
      var index = this.model1Assemblys.indexOf(AssemblyId);
      this.model1Assemblys.splice(index, 1);
    }
  }

   addAssemblyToModel1(model1): void{
     for (var i = 0; i< this.model1Assemblys.length ; i++)
     this.model1Api.linkAssemblies(model1.id , this.model1Assemblys[i] , {}).subscribe();
     for(var chk in this.model1) { this.model1[chk] = ""};
      this.assemblys.forEach((assembly , i) => {
       this.checkedAssembly[i] = false;
    })
  }
    Assemblyfiltering(param){
      this.filterAssembly= [];
      if(param != ""){
            this.assemblys.forEach(element => {
                var prop = element[Object.keys(element)[0]];

                 if (typeof prop == 'string') {
                       if (prop.indexOf(param) >= 0) this.filterAssembly.push(element);
                   }
                   else {if (prop == param) this.filterAssembly.push(element);}
                 });
      }else{
         this.filterAssembly = this.assemblys;
      }
     }
    


    
} 