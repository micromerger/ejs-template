/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Items } from '../../models/Items';
import { Salelineitems } from '../../models/Salelineitems';
import { Sales } from '../../models/Sales';
import { Type } from '../../models/Type';
import { Size } from '../../models/Size';
import { Customer } from '../../models/Customer';
import { Email } from '../../models/Email';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Items: Items,
    Salelineitems: Salelineitems,
    Sales: Sales,
    Type: Type,
    Size: Size,
    Customer: Customer,
    Email: Email,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
