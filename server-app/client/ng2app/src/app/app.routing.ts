
import {ModuleWithProviders} from '@angular/core';
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';


 import { ItemsComponent } from './myComponents/ItemsComponent/Items.component';
 
 import { SalelineitemsComponent } from './myComponents/SalelineitemsComponent/Salelineitems.component';
 
 import { SalesComponent } from './myComponents/SalesComponent/Sales.component';
 

const appRoutes: Routes = [
    
     {path : 'items' , component:ItemsComponent},
     
     {path : 'salelineitems' , component:SalelineitemsComponent},
     
     {path : 'sales' , component:SalesComponent},
     
     // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//export class routing {}
export const routing = RouterModule.forRoot(appRoutes);