       

import { Component, OnInit } from '@angular/core';
import {  FireLoopRef } from 'app/shared/sdk/models';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Equipment',
  templateUrl: './Equipment.component.html',
  styleUrls: ['./Equipment.component.css']
})

export class EquipmentComponent implements OnInit {

//       private equipment      : Equipment = new Equipment();
//       private equipments      : Equipment[] = new Array <Equipment>();
//       private equipmentRef : FireLoopRef<Equipment>;
//       private equipment_edit_btn : boolean = false;

  
  
//     constructor(private rt: RealTime) {
//     this.rt.onReady().subscribe(() => {
//     this.equipmentRef = this.rt.FireLoop.ref<Equipment>(Equipment);
//     this.equipmentRef.on('change').subscribe((equipment: Equipment[]) => this.equipments = equipment);

  
   

//     });
//   }
  ngOnInit() {
  }

//   addEquipment() : void{
//   this.equipmentRef.create(this.equipment).subscribe(() => this.equipment = new Equipment ());
//   for(var i in Equipment) { Equipment[i] = ""};
//   }

//   editEquipment(id) : void{
//     this.equipment_edit_btn = true;
//     for (var i = 0; i< this.equipments.length;i++){
//       if (this.equipments[i].id  == id)
//       this.equipment = this.equipments[i];
//     }
//   }

//    deleteEquipment(equipment : Equipment ):void{
//     this.equipmentRef.remove(equipment).subscribe();
//   }

//   equipmentSubmitRecord() : void{
//     this.equipmentRef.upsert(this.equipment).subscribe();
//     this.equipment_edit_btn = false;
//     for(var i in Equipment) { Equipment[i] = ""};
//   }
 }