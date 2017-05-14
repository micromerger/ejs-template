import { Component, OnInit } from '@angular/core';
// import {Items, FireLoopRef } from 'app/shared/sdk/models';
// import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable'
@Component({
  selector: 'app-Items',
  templateUrl: './Items.component.html',
  styleUrls: ['./Items.component.css']
})
export class ItemsComponent implements OnInit {
//       private items      : Items = new Items();
//   private items1   : Items[] = new Array<Items>();
//  private itemsRef : FireLoopRef<Items>;
//   constructor(private rt: RealTime) {
//     this.rt.onReady().subscribe(() => {
//     this.itemsRef= this.rt.FireLoop.ref<Items>(Items);
//     this.itemsRef.on('change').subscribe((items : Items[]) => this.items1  = items);
//     });
//   }
  ngOnInit() {
  }

//   create(): void {
//     this.itemsRef.create(this.items).subscribe(() => this.items = new Items());
//   }

//   update(obj: Items): void {
//     this.itemsRef.upsert(obj).subscribe();
//   }

//   remove(obj: Items): void {
//     this.itemsRef.remove(obj).subscribe();
//   }
}