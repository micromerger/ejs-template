import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SDKBrowserModule } from './shared/sdk';
import { routing} from './app.routing'
import { AppComponent } from './app.component';
import { ModalModule,AlertModule } from 'ngx-bootstrap';


 import { AppiontmentComponent } from './myComponents/AppiontmentComponent/Appiontment.component';
 import { AppiontmentComponentListing } from './myComponents/AppiontmentListingComponent/Appiontment.listing.component';
 
 import { AssemblyComponent } from './myComponents/AssemblyComponent/Assembly.component';
 import { AssemblyComponentListing } from './myComponents/AssemblyListingComponent/Assembly.listing.component';
 
 import { Customer1Component } from './myComponents/Customer1Component/Customer1.component';
 import { Customer1ComponentListing } from './myComponents/Customer1ListingComponent/Customer1.listing.component';
 
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
 
@NgModule({
  declarations: [
    AppComponent,
    
    AppiontmentComponent,
    AppiontmentComponentListing,
    
    AssemblyComponent,
    AssemblyComponentListing,
    
    Customer1Component,
    Customer1ComponentListing,
    
    CustomerComponent,
    CustomerComponentListing,
    
    DoctorComponent,
    DoctorComponentListing,
    
    EmailComponent,
    EmailComponentListing,
    
    Model1Component,
    Model1ComponentListing,
    
    Model2Component,
    Model2ComponentListing,
    
    ModelComponent,
    ModelComponentListing,
    
    Order1Component,
    Order1ComponentListing,
    
    PatientComponent,
    PatientComponentListing,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SDKBrowserModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
