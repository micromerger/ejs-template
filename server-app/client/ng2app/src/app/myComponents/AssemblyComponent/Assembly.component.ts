       
import { Component, OnInit } from '@angular/core';
import {  Assembly , Model1 , FireLoopRef } from 'app/shared/sdk/models';
import { AssemblyApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Assembly',
  templateUrl: './Assembly.component.html',
  styleUrls: ['./Assembly.component.css']
})

export class AssemblyComponent implements OnInit {

      private assembly : Assembly = new Assembly();
      private assemblys : Assembly[] = new Array <Assembly>();
      private assemblyRef : FireLoopRef<Assembly>;

  
    private model1s: Model1[]  = new Array< Model1 >();
    private model1Ref: FireLoopRef < Model1 > ;
    private assemblyModel1s = Array<any>();
    private filterModel1 : Model1[] = new Array();
    private checkedModel1  = new Array< any >();
  
    constructor(private rt: RealTime 
    , private assemblyApi:AssemblyApi ) {
    
    this.rt.onReady().subscribe(() => {
    this.assemblyRef = this.rt.FireLoop.ref<Assembly>(Assembly);
    this.assemblyRef.on('change',{order: 'id ASC'}).subscribe((assembly: Assembly[]) => this.assemblys = assembly);

  
    this.model1Ref = this.rt.FireLoop.ref < Model1 > (Model1);
    this.model1Ref.on('change',{order: 'id ASC'}).subscribe((model1s: Model1[]) => this.model1s = this.filterModel1 =  model1s);
  
    });
  } 
  ngOnInit() {
  }

  
    createAssembly() : void{
     this.assemblyApi.create(this.assembly).subscribe((assembly: Assembly) => this.createRelations(assembly));
  }
  createRelations(assembly): void {
  this.addModel1ToAssembly(assembly);
  }
  
  selectModel1s(event , Model1Id):void{
    if (event.target.checked) this.assemblyModel1s.push(Model1Id);
    else if(!event.target.checked) {
      var index = this.assemblyModel1s.indexOf(Model1Id);
      this.assemblyModel1s.splice(index, 1);
    }
  }

   addModel1ToAssembly(assembly): void{
     for (var i = 0; i< this.assemblyModel1s.length ; i++)
     this.assemblyApi.linkModel1s(assembly.id , this.assemblyModel1s[i] , {}).subscribe();
     for(var chk in this.assembly) { this.assembly[chk] = ""};
      this.model1s.forEach((model1 , i) => {
       this.checkedModel1[i] = false;
    })
  }
    Model1filtering(param){
      this.filterModel1= [];
      if(param != ""){
            this.model1s.forEach(element => {
                var prop = element[Object.keys(element)[0]];

                 if (typeof prop == 'string') {
                       if (prop.indexOf(param) >= 0) this.filterModel1.push(element);
                   }
                   else {if (prop == param) this.filterModel1.push(element);}
                 });
      }else{
         this.filterModel1 = this.model1s;
      }
     }
    


    
} 