/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Customer } from '../../models/Customer';
import { Appiontment } from '../../models/Appiontment';
import { Patient } from '../../models/Patient';
import { Doctor } from '../../models/Doctor';
import { Order1 } from '../../models/Order1';
import { Email } from '../../models/Email';
import { Model } from '../../models/Model';
import { Model1 } from '../../models/Model1';
import { Model2 } from '../../models/Model2';
import { Customer1 } from '../../models/Customer1';
import { Assembly } from '../../models/Assembly';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Customer: Customer,
    Appiontment: Appiontment,
    Patient: Patient,
    Doctor: Doctor,
    Order1: Order1,
    Email: Email,
    Model: Model,
    Model1: Model1,
    Model2: Model2,
    Customer1: Customer1,
    Assembly: Assembly,
    
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
