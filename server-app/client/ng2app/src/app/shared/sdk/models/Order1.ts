/* tslint:disable */

declare var Object: any;
export interface Order1Interface {
  "orderRef"?: string;
  "id"?: number;
  "customerId"?: number;
}

export class Order1 implements Order1Interface {
  "orderRef": string;
  "id": number;
  "customerId": number;
  constructor(data?: Order1Interface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Order1`.
   */
  public static getModelName() {
    return "Order1";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Order1 for dynamic purposes.
  **/
  public static factory(data: Order1Interface): Order1{
    return new Order1(data);
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
      name: 'Order1',
      plural: 'Order1s',
      properties: {
        "orderRef": {
          name: 'orderRef',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "customerId": {
          name: 'customerId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
