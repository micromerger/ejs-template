 

import { Component ,OnInit } from '@angular/core';
import {   Model1 , Assembly , FireLoopRef } from 'app/shared/sdk/models';

import { Model1Api , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Model1Listing',
  templateUrl: './Model1.listing.component.html',
  styleUrls: ['./Model1.listing.component.css']
})
export class  Model1ComponentListing  implements OnInit{

 private model1 : Model1 = new Model1();
 private model1s: Model1[] = new Array <Model1>();
 private model1Ref : FireLoopRef<Model1>;


    private assemblys: Assembly[]  = new Array< Assembly >();
    private assemblyRef: FireLoopRef < Assembly > ;
    private model1Assemblys = Array<any>();
    private filterAssembly : Assembly[] = new Array();
    private checkedAssembly  = new Array< any >();
  
    public alerts: any = [];
    public successModal;
    public dangerModal;
    public deleteObj;
    
    constructor(
      private rt: RealTime 
      
      , private model1Api: Model1Api 
      ) {
      
      this.rt.onReady().subscribe(() => {
      this.model1Ref = 
      this.rt.FireLoop.ref<Model1>(Model1);
      this.model1Ref.on('change',{order: 'id ASC' }).subscribe((model1s : Model1[]) => this.model1s = model1s);
      
        this.assemblyRef = this.rt.FireLoop.ref < Assembly > (Assembly);
        this.assemblyRef.on('change',{order: 'id ASC'}).subscribe((assemblys: Assembly[]) => this.assemblys = this.filterAssembly =  assemblys);
      
      });
  }

  ngOnInit() {
          
  }

  public delete(obj) : void {
    this.deleteObj = obj;
  }
  remove(model1: Model1): void {
    this.model1Ref.remove(model1).subscribe();
  }
  
 public addAlert(): void {
   this.remove(this.deleteObj);
    this.alerts.push({
      type: 'success',
      msg: `Successfully deleted`,
      timeout: 5000
    });
  }

  updateModel1() : void{
      this.model1Api.deleteAssemblies(this.model1.id).subscribe();
     this.model1Ref.upsert(this.model1).subscribe((model1: Model1) => this.createRelations(model1));
  }
  createRelations(model1): void {
  this.addAssemblyToModel1(model1);
  }

  update(model1) :void {
       this.model1 = model1;
       this.model1Api.getAssemblies(this.model1.id).subscribe((assembly : Assembly) => this.initiateRelAssembly(assembly));
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
     this.model1Api.linkAssemblies
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
    initiateRelAssembly(assembly) : void{
       this.model1Assemblys  = [];
       for(var prop of assembly) {
       this.model1Assemblys.push(prop.id);
      }
     }
    } 