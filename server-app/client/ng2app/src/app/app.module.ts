import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { SDKBrowserModule } from './shared/sdk';
import { routing} from './app.routing'
import { AppComponent } from './app.component';


 import { ItemsComponent } from './myComponents/ItemsComponent/Items.component';
 
 import { SalelineitemsComponent } from './myComponents/SalelineitemsComponent/Salelineitems.component';
 
 import { SalesComponent } from './myComponents/SalesComponent/Sales.component';
 
@NgModule({
  declarations: [
    AppComponent,
    
    ItemsComponent,
    SalelineitemsComponent,
    SalesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // ,
    // SDKBrowserModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
