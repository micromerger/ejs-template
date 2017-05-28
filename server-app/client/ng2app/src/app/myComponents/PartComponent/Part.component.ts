       

import { Component, OnInit } from '@angular/core';
import {  FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Part',
  templateUrl: './Part.component.html',
  styleUrls: ['./Part.component.css']
})

export class PartComponent implements OnInit {

  //     private part      : Part = new Part();
  //     private parts      : Part[] = new Array <Part>();
  //     private partRef : FireLoopRef<Part>;
  //     private part_edit_btn : boolean = false;

  
  
  //   constructor(private rt: RealTime) {
  //   this.rt.onReady().subscribe(() => {
  //   this.partRef = this.rt.FireLoop.ref<Part>(Part);
  //   this.partRef.on('change').subscribe((part: Part[]) => this.parts = part);

  
   

  //   });
  // }
  ngOnInit() {
  }

  

  // addPart() : void{
  // this.partRef.create(this.part).subscribe(() => this.part = new Part ());
  // for(var i in Part) { Part[i] = ""};
  // }

  // editPart(id) : void{
  //   this.part_edit_btn = true;
  //   for (var i = 0; i< this.parts.length;i++){
  //     if (this.parts[i].id  == id)
  //     this.part = this.parts[i];
  //   }
  // }

  //  deletePart(part : Part ):void{
  //   this.partRef.remove(part).subscribe();
  // }

  // partSubmitRecord() : void{
  //   this.partRef.upsert(this.part).subscribe();
  //   this.part_edit_btn = false;
  //   for(var i in Part) { Part[i] = ""};
  // }

}