       

import { Component, OnInit } from '@angular/core';
import {  Items , Type , Size , FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Items',
  templateUrl: './Items.component.html',
  styleUrls: ['./Items.component.css']
})

export class ItemsComponent implements OnInit {

      private items      : Items = new Items();
      private itemss      : Items[] = new Array <Items>();
      private itemsRef : FireLoopRef<Items>;
      private items_edit_btn : boolean = false;

  
      private types : Type[] = new Array<Type>();
      private typeRef : FireLoopRef<Type>;
  
      private sizes : Size[] = new Array<Size>();
      private sizeRef : FireLoopRef<Size>;
  
  
    constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.itemsRef = this.rt.FireLoop.ref<Items>(Items);
    this.itemsRef.on('change').subscribe((items: Items[]) => this.itemss = items);

  
    this.typeRef = this.rt.FireLoop.ref<Type>(Type);
    this.typeRef.on('change').subscribe((type: Type[]) => this.types = type);
  
    this.sizeRef = this.rt.FireLoop.ref<Size>(Size);
    this.sizeRef.on('change').subscribe((size: Size[]) => this.sizes = size);
  
   

    });
  }
  ngOnInit() {
  }

   
  selectedType(param): void {
    console.log(param);
  }
   
  selectedSize(param): void {
    console.log(param);
  }
  

  addItems() : void{
  this.itemsRef.create(this.items).subscribe(() => this.items = new Items ());
  }

  editItems(id) : void{
    this.items_edit_btn = true;
    for (var i = 0; i< this.itemss.length;i++){
      if (this.itemss[i].id  == id)
      this.items = this.itemss[i];
    }
  }

   deleteItems(items : Items ):void{
    this.itemsRef.remove(items).subscribe();
  }

  itemsSubmitRecord() : void{
    this.itemsRef.upsert(this.items).subscribe();
    this.items_edit_btn = false;
    for(var i in Items) { Items[i] = ""};
  }

}