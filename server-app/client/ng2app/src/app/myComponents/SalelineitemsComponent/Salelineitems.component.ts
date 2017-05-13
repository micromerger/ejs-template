import { Component, OnInit } from '@angular/core';
import {Salelineitems, FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable'
@Component({
  selector: 'app-Salelineitems',
  templateUrl: './Salelineitems.component.html',
  styleUrls: ['./Salelineitems.component.css']
})
export class SalelineitemsComponent implements OnInit {
      private salelineitems      : Salelineitems = new Salelineitems();
  private salelineitems1   : Salelineitems[] = new Array<Salelineitems>();
 private salelineitemsRef : FireLoopRef<Salelineitems>;
  constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.salelineitemsRef= this.rt.FireLoop.ref<Salelineitems>(Salelineitems);
    this.salelineitemsRef.on('change').subscribe((salelineitems : Salelineitems[]) => this.salelineitems1  = salelineitems);
    });
  }
  ngOnInit() {
  }

  create(): void {
    this.salelineitemsRef.create(this.salelineitems).subscribe(() => this.salelineitems = new Salelineitems());
  }

  update(obj: Salelineitems): void {
    this.salelineitemsRef.upsert(obj).subscribe();
  }

  remove(obj: Salelineitems): void {
    this.salelineitemsRef.remove(obj).subscribe();
  }
}