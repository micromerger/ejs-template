import { Component, OnInit } from '@angular/core';
import {Sales, FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable'
@Component({
  selector: 'app-Sales',
  templateUrl: './Sales.component.html',
  styleUrls: ['./Sales.component.css']
})
export class SalesComponent implements OnInit {
      private sales      : Sales = new Sales();
  private sales1   : Sales[] = new Array<Sales>();
 private salesRef : FireLoopRef<Sales>;
  constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.salesRef= this.rt.FireLoop.ref<Sales>(Sales);
    this.salesRef.on('change').subscribe((sales : Sales[]) => this.sales1  = sales);
    });
  }
  ngOnInit() {
  }

  create(): void {
    this.salesRef.create(this.sales).subscribe(() => this.sales = new Sales());
  }

  update(obj: Sales): void {
    this.salesRef.upsert(obj).subscribe();
  }

  remove(obj: Sales): void {
    this.salesRef.remove(obj).subscribe();
  }
}