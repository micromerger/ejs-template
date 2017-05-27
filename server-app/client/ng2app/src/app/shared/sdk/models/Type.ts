/* tslint:disable */
import {
  Items
} from '../index';

declare var Object: any;
export interface TypeInterface {
  "typename"?: string;
  "id"?: number;
  items?: Items[];
}

export class Type implements TypeInterface {
  "typename": string;
  "id": number;
  items: Items[];
  constructor(data?: TypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Type`.
   */
  public static getModelName() {
    return "Type";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Type for dynamic purposes.
  **/
  public static factory(data: TypeInterface): Type{
    return new Type(data);
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
      name: 'Type',
      plural: 'types',
      properties: {
        "typename": {
          name: 'typename',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        items: {
          name: 'items',
          type: 'Items[]',
          model: 'Items'
        },
      }
    }
  }
}
