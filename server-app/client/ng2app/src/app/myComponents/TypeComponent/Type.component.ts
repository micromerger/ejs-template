       

import { Component, OnInit } from '@angular/core';
import {  Type , Items , FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Type',
  templateUrl: './Type.component.html',
  styleUrls: ['./Type.component.css']
})

export class TypeComponent implements OnInit {

      private type      : Type = new Type();
      private types      : Type[] = new Array <Type>();
      private typeRef : FireLoopRef<Type>;
      private type_edit_btn : boolean = false;

  
  
      private items : Items = new Items();
      private itemss : Items[] = new Array<Items>();
      private itemsRef : FireLoopRef<Items>;
  
    constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.typeRef = this.rt.FireLoop.ref<Type>(Type);
    this.typeRef.on('change').subscribe((type: Type[]) => this.types = type);

  
   
    this.itemsRef = this.rt.FireLoop.ref<Items>(Items);
    this.itemsRef.on('change').subscribe((items: Items[]) => this.itemss = items);
  

    });
  }
  ngOnInit() {
  }

  

  addType() : void{
  this.typeRef.create(this.type).subscribe(() => this.type = new Type ());
  }

  editType(id) : void{
    this.type_edit_btn = true;
    for (var i = 0; i< this.types.length;i++){
      if (this.types[i].id  == id)
      this.type = this.types[i];
    }
  }

   deleteType(type : Type ):void{
    this.typeRef.remove(type).subscribe();
  }

  typeSubmitRecord() : void{
    this.typeRef.upsert(this.type).subscribe();
    this.type_edit_btn = false;
    for(var i in Type) { Type[i] = ""};
  }

}