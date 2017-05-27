/* tslint:disable */
import {
  Type,
  Size
} from '../index';

declare var Object: any;
export interface ItemsInterface {
  "name"?: string;
  "price"?: number;
  "id"?: number;
  "typeId"?: number;
  "sizeId"?: number;
  type?: Type;
  size?: Size;
}

export class Items implements ItemsInterface {
  "name": string;
  "price": number;
  "id": number;
  "typeId": number;
  "sizeId": number;
  type: Type;
  size: Size;
  constructor(data?: ItemsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Items`.
   */
  public static getModelName() {
    return "Items";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Items for dynamic purposes.
  **/
  public static factory(data: ItemsInterface): Items{
    return new Items(data);
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
      name: 'Items',
      plural: 'items',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "typeId": {
          name: 'typeId',
          type: 'number'
        },
        "sizeId": {
          name: 'sizeId',
          type: 'number'
        },
      },
      relations: {
        type: {
          name: 'type',
          type: 'Type',
          model: 'Type'
        },
        size: {
          name: 'size',
          type: 'Size',
          model: 'Size'
        },
      }
    }
  }
}
