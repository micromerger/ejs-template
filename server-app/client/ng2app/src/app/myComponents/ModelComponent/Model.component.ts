       
import { Component, OnInit } from '@angular/core';
import {  Model , Model1 , Model2 , FireLoopRef } from 'app/shared/sdk/models';
import { ModelApi , } from 'app/shared/sdk/services';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Model',
  templateUrl: './Model.component.html',
  styleUrls: ['./Model.component.css']
})

export class ModelComponent implements OnInit {

      private model : Model = new Model();
      private models : Model[] = new Array <Model>();
      private modelRef : FireLoopRef<Model>;

  
    private model1s: Model1[]  = new Array< Model1 >();
    private model1Ref: FireLoopRef < Model1 > ;
    private modelModel1s = Array<any>();
    private filterModel1 : Model1[] = new Array();
    private checkedModel1  = new Array< any >();
  
    private model2s: Model2[]  = new Array< Model2 >();
    private model2Ref: FireLoopRef < Model2 > ;
    private modelModel2s = Array<any>();
    private filterModel2 : Model2[] = new Array();
    private checkedModel2  = new Array< any >();
  
    constructor(private rt: RealTime 
    , private modelApi:ModelApi ) {
    
    this.rt.onReady().subscribe(() => {
    this.modelRef = this.rt.FireLoop.ref<Model>(Model);
    this.modelRef.on('change',{order: 'id ASC'}).subscribe((model: Model[]) => this.models = model);

  
    this.model1Ref = this.rt.FireLoop.ref < Model1 > (Model1);
    this.model1Ref.on('change',{order: 'id ASC'}).subscribe((model1s: Model1[]) => this.model1s = this.filterModel1 =  model1s);
  
    this.model2Ref = this.rt.FireLoop.ref < Model2 > (Model2);
    this.model2Ref.on('change',{order: 'id ASC'}).subscribe((model2s: Model2[]) => this.model2s = this.filterModel2 =  model2s);
  
    });
  } 
  ngOnInit() {
  }

  
    createModel() : void{
     this.modelApi.create(this.model).subscribe((model: Model) => this.createRelations(model));
  }
  createRelations(model): void {
  this.addModel1ToModel(model);
  
  this.addModel2ToModel(model);
  }
  
  selectModel1s(event , Model1Id):void{
    if (event.target.checked) this.modelModel1s.push(Model1Id);
    else if(!event.target.checked) {
      var index = this.modelModel1s.indexOf(Model1Id);
      this.modelModel1s.splice(index, 1);
    }
  }

   addModel1ToModel(model): void{
     for (var i = 0; i< this.modelModel1s.length ; i++)
     this.modelApi.linkModel1s(model.id , this.modelModel1s[i] , {}).subscribe();
     for(var chk in this.model) { this.model[chk] = ""};
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
    
  selectModel2s(event , Model2Id):void{
    if (event.target.checked) this.modelModel2s.push(Model2Id);
    else if(!event.target.checked) {
      var index = this.modelModel2s.indexOf(Model2Id);
      this.modelModel2s.splice(index, 1);
    }
  }

   addModel2ToModel(model): void{
     for (var i = 0; i< this.modelModel2s.length ; i++)
     this.modelApi.linkModel2s(model.id , this.modelModel2s[i] , {}).subscribe();
     for(var chk in this.model) { this.model[chk] = ""};
      this.model2s.forEach((model2 , i) => {
       this.checkedModel2[i] = false;
    })
  }
    Model2filtering(param){
      this.filterModel2= [];
      if(param != ""){
            this.model2s.forEach(element => {
                var prop = element[Object.keys(element)[0]];

                 if (typeof prop == 'string') {
                       if (prop.indexOf(param) >= 0) this.filterModel2.push(element);
                   }
                   else {if (prop == param) this.filterModel2.push(element);}
                 });
      }else{
         this.filterModel2 = this.model2s;
      }
     }
    


    
} 