/* tslint:disable */
import {
  Email
} from '../index';

declare var Object: any;
export interface Customer1Interface {
  "name"?: string;
  "cnic"?: string;
  "age"?: number;
  "id"?: number;
  emails?: Email[];
}

export class Customer1 implements Customer1Interface {
  "name": string;
  "cnic": string;
  "age": number;
  "id": number;
  emails: Email[];
  constructor(data?: Customer1Interface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer1`.
   */
  public static getModelName() {
    return "Customer1";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer1 for dynamic purposes.
  **/
  public static factory(data: Customer1Interface): Customer1{
    return new Customer1(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Customer1',
      plural: 'Customer1s',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "cnic": {
          name: 'cnic',
          type: 'string'
        },
        "age": {
          name: 'age',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        emails: {
          name: 'emails',
          type: 'Email[]',
          model: 'Email'
        },
      }
    }
  }
}
