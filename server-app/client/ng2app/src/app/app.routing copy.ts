
import {ModuleWithProviders} from '@angular/core';
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from '@angular/router';


 import { AppiontmentComponent } from './myComponents/AppiontmentComponent/Appiontment.component';
  import { AppiontmentComponentListing } from './myComponents/AppiontmentListingComponent/Appiontment.listing.component';
 
 import { CustomerComponent } from './myComponents/CustomerComponent/Customer.component';
  import { CustomerComponentListing } from './myComponents/CustomerListingComponent/Customer.listing.component';
 
 import { DoctorComponent } from './myComponents/DoctorComponent/Doctor.component';
  import { DoctorComponentListing } from './myComponents/DoctorListingComponent/Doctor.listing.component';
 
 import { EmailComponent } from './myComponents/EmailComponent/Email.component';
  import { EmailComponentListing } from './myComponents/EmailListingComponent/Email.listing.component';
 
 import { Model1Component } from './myComponents/Model1Component/Model1.component';
  import { Model1ComponentListing } from './myComponents/Model1ListingComponent/Model1.listing.component';
 
 import { Model2Component } from './myComponents/Model2Component/Model2.component';
  import { Model2ComponentListing } from './myComponents/Model2ListingComponent/Model2.listing.component';
 
 import { ModelComponent } from './myComponents/ModelComponent/Model.component';
  import { ModelComponentListing } from './myComponents/ModelListingComponent/Model.listing.component';
 
 import { Order1Component } from './myComponents/Order1Component/Order1.component';
  import { Order1ComponentListing } from './myComponents/Order1ListingComponent/Order1.listing.component';
 
 import { PatientComponent } from './myComponents/PatientComponent/Patient.component';
  import { PatientComponentListing } from './myComponents/PatientListingComponent/Patient.listing.component';
 

const appRoutes: Routes = [
    
     {path : 'appiontment' , component:AppiontmentComponent},
     {path : 'appiontmentListing' , component:AppiontmentComponentListing},
     
     {path : 'customer' , component:CustomerComponent},
     {path : 'customerListing' , component:CustomerComponentListing},
     
     {path : 'doctor' , component:DoctorComponent},
     {path : 'doctorListing' , component:DoctorComponentListing},
     
     {path : 'email' , component:EmailComponent},
     {path : 'emailListing' , component:EmailComponentListing},
     
     {path : 'model1' , component:Model1Component},
     {path : 'model1Listing' , component:Model1ComponentListing},
     
     {path : 'model2' , component:Model2Component},
     {path : 'model2Listing' , component:Model2ComponentListing},
     
     {path : 'model' , component:ModelComponent},
     {path : 'modelListing' , component:ModelComponentListing},
     
     {path : 'order1' , component:Order1Component},
     {path : 'order1Listing' , component:Order1ComponentListing},
     
     {path : 'patient' , component:PatientComponent},
     {path : 'patientListing' , component:PatientComponentListing},
     {path :'emailListings/:id',component:EmailComponentListing},
     
     // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//export class routing {}
export const routing = RouterModule.forRoot(appRoutes);