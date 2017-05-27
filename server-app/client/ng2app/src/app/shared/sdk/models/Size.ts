/* tslint:disable */
import {
  Items
} from '../index';

declare var Object: any;
export interface SizeInterface {
  "sizename"?: string;
  "id"?: number;
  items?: Items[];
}

export class Size implements SizeInterface {
  "sizename": string;
  "id": number;
  items: Items[];
  constructor(data?: SizeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Size`.
   */
  public static getModelName() {
    return "Size";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Size for dynamic purposes.
  **/
  public static factory(data: SizeInterface): Size{
    return new Size(data);
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
      name: 'Size',
      plural: 'Sizes',
      properties: {
        "sizename": {
          name: 'sizename',
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
