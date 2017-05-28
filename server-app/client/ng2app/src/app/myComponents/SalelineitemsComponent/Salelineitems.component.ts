       

import { Component, OnInit } from '@angular/core';
import {  Salelineitems , FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Salelineitems',
  templateUrl: './Salelineitems.component.html',
  styleUrls: ['./Salelineitems.component.css']
})

export class SalelineitemsComponent implements OnInit {

      private salelineitems      : Salelineitems = new Salelineitems();
      private salelineitemss      : Salelineitems[] = new Array <Salelineitems>();
      private salelineitemsRef : FireLoopRef<Salelineitems>;
      private salelineitems_edit_btn : boolean = false;

  
  
    constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.salelineitemsRef = this.rt.FireLoop.ref<Salelineitems>(Salelineitems);
    this.salelineitemsRef.on('change').subscribe((salelineitems: Salelineitems[]) => this.salelineitemss = salelineitems);

  
   

    });
  }
  ngOnInit() {
  }

  

  addSalelineitems() : void{
  this.salelineitemsRef.create(this.salelineitems).subscribe(() => this.salelineitems = new Salelineitems ());
  }

  editSalelineitems(id) : void{
    this.salelineitems_edit_btn = true;
    for (var i = 0; i< this.salelineitemss.length;i++){
      if (this.salelineitemss[i].id  == id)
      this.salelineitems = this.salelineitemss[i];
    }
  }

   deleteSalelineitems(salelineitems : Salelineitems ):void{
    this.salelineitemsRef.remove(salelineitems).subscribe();
  }

  salelineitemsSubmitRecord() : void{
    this.salelineitemsRef.upsert(this.salelineitems).subscribe();
    this.salelineitems_edit_btn = false;
    for(var i in Salelineitems) { Salelineitems[i] = ""};
  }

}