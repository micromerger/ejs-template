
import {ModuleWithProviders} from '@angular/core';
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';


 import { CustomerComponent } from './myComponents/CustomerComponent/Customer.component';
 
 import { EmailComponent } from './myComponents/EmailComponent/Email.component';
 
 import { ItemsComponent } from './myComponents/ItemsComponent/Items.component';
 
 import { SalelineitemsComponent } from './myComponents/SalelineitemsComponent/Salelineitems.component';
 
 import { SalesComponent } from './myComponents/SalesComponent/Sales.component';
 
 import { SizeComponent } from './myComponents/SizeComponent/Size.component';
 
 import { TypeComponent } from './myComponents/TypeComponent/Type.component';
 

const appRoutes: Routes = [
    
     {path : 'customer' , component:CustomerComponent},
     
     {path : 'email' , component:EmailComponent},
     
     {path : 'items' , component:ItemsComponent},
     
     {path : 'salelineitems' , component:SalelineitemsComponent},
     
     {path : 'sales' , component:SalesComponent},
     
     {path : 'size' , component:SizeComponent},
     
     {path : 'type' , component:TypeComponent},
     
     // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//export class routing {}
export const routing = RouterModule.forRoot(appRoutes);