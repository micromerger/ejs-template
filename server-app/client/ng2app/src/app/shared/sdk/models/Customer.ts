/* tslint:disable */
import {
  Order1,
  Email
} from '../index';

declare var Object: any;
export interface CustomerInterface {
  "name"?: string;
  "cnic"?: string;
  "age"?: number;
  "id"?: number;
  order1s?: Order1[];
  emails?: Email[];
}

export class Customer implements CustomerInterface {
  "name": string;
  "cnic": string;
  "age": number;
  "id": number;
  order1s: Order1[];
  emails: Email[];
  constructor(data?: CustomerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Customer`.
   */
  public static getModelName() {
    return "Customer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Customer for dynamic purposes.
  **/
  public static factory(data: CustomerInterface): Customer{
    return new Customer(data);
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
      name: 'Customer',
      plural: 'Customers',
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
        order1s: {
          name: 'order1s',
          type: 'Order1[]',
          model: 'Order1'
        },
        emails: {
          name: 'emails',
          type: 'Email[]',
          model: 'Email'
        },
      }
    }
  }
}
