       

import { Component, OnInit } from '@angular/core';
import {  Sales , FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Sales',
  templateUrl: './Sales.component.html',
  styleUrls: ['./Sales.component.css']
})

export class SalesComponent implements OnInit {

      private sales      : Sales = new Sales();
      private saless      : Sales[] = new Array <Sales>();
      private salesRef : FireLoopRef<Sales>;
      private sales_edit_btn : boolean = false;

  
  
    constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.salesRef = this.rt.FireLoop.ref<Sales>(Sales);
    this.salesRef.on('change').subscribe((sales: Sales[]) => this.saless = sales);

  
   

    });
  }
  ngOnInit() {
  }

  

  addSales() : void{
  this.salesRef.create(this.sales).subscribe(() => this.sales = new Sales ());
  }

  editSales(id) : void{
    this.sales_edit_btn = true;
    for (var i = 0; i< this.saless.length;i++){
      if (this.saless[i].id  == id)
      this.sales = this.saless[i];
    }
  }

   deleteSales(sales : Sales ):void{
    this.salesRef.remove(sales).subscribe();
  }

  salesSubmitRecord() : void{
    this.salesRef.upsert(this.sales).subscribe();
    this.sales_edit_btn = false;
    for(var i in Sales) { Sales[i] = ""};
  }

}