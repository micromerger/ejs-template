       

import { Component, OnInit } from '@angular/core';
import {  Size , Items , FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Size',
  templateUrl: './Size.component.html',
  styleUrls: ['./Size.component.css']
})

export class SizeComponent implements OnInit {

      private size      : Size = new Size();
      private sizes      : Size[] = new Array <Size>();
      private sizeRef : FireLoopRef<Size>;
      private size_edit_btn : boolean = false;

  
  
      private items : Items = new Items();
      private itemss : Items[] = new Array<Items>();
      private itemsRef : FireLoopRef<Items>;
  
    constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.sizeRef = this.rt.FireLoop.ref<Size>(Size);
    this.sizeRef.on('change').subscribe((size: Size[]) => this.sizes = size);

  
   
    this.itemsRef = this.rt.FireLoop.ref<Items>(Items);
    this.itemsRef.on('change').subscribe((items: Items[]) => this.itemss = items);
  

    });
  }
  ngOnInit() {
  }

  

  addSize() : void{
  this.sizeRef.create(this.size).subscribe(() => this.size = new Size ());
  }

  editSize(id) : void{
    this.size_edit_btn = true;
    for (var i = 0; i< this.sizes.length;i++){
      if (this.sizes[i].id  == id)
      this.size = this.sizes[i];
    }
  }

   deleteSize(size : Size ):void{
    this.sizeRef.remove(size).subscribe();
  }

  sizeSubmitRecord() : void{
    this.sizeRef.upsert(this.size).subscribe();
    this.size_edit_btn = false;
    for(var i in Size) { Size[i] = ""};
  }

}