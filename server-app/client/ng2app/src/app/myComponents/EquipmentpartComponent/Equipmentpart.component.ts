       

import { Component, OnInit } from '@angular/core';
import { RealTime } from 'app/shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Equipmentpart',
  templateUrl: './Equipmentpart.component.html',
  styleUrls: ['./Equipmentpart.component.css']
})

export class EquipmentpartComponent implements OnInit {

//       private equipmentpart      : Equipmentpart = new Equipmentpart();
//       private equipmentparts      : Equipmentpart[] = new Array <Equipmentpart>();
//       private equipmentpartRef : FireLoopRef<Equipmentpart>;
//       private equipmentpart_edit_btn : boolean = false;

  
  
//     constructor(private rt: RealTime) {
//     this.rt.onReady().subscribe(() => {
//     this.equipmentpartRef = this.rt.FireLoop.ref<Equipmentpart>(Equipmentpart);
//     this.equipmentpartRef.on('change').subscribe((equipmentpart: Equipmentpart[]) => this.equipmentparts = equipmentpart);

  
   

//     });
//   }
  ngOnInit() {
  }

//   addEquipmentpart() : void{
//   this.equipmentpartRef.create(this.equipmentpart).subscribe(() => this.equipmentpart = new Equipmentpart ());
//   for(var i in Equipmentpart) { Equipmentpart[i] = ""};
//   }

//   editEquipmentpart(id) : void{
//     this.equipmentpart_edit_btn = true;
//     for (var i = 0; i< this.equipmentparts.length;i++){
//       if (this.equipmentparts[i].id  == id)
//       this.equipmentpart = this.equipmentparts[i];
//     }
//   }

//    deleteEquipmentpart(equipmentpart : Equipmentpart ):void{
//     this.equipmentpartRef.remove(equipmentpart).subscribe();
//   }

//   equipmentpartSubmitRecord() : void{
//     this.equipmentpartRef.upsert(this.equipmentpart).subscribe();
//     this.equipmentpart_edit_btn = false;
//     for(var i in Equipmentpart) { Equipmentpart[i] = ""};
//  }
}