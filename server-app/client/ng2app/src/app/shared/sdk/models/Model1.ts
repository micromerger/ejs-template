/* tslint:disable */
import {
  Assembly
} from '../index';

declare var Object: any;
export interface Model1Interface {
  "model1name"?: string;
  "id"?: number;
  assemblies?: Assembly[];
}

export class Model1 implements Model1Interface {
  "model1name": string;
  "id": number;
  assemblies: Assembly[];
  constructor(data?: Model1Interface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Model1`.
   */
  public static getModelName() {
    return "Model1";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Model1 for dynamic purposes.
  **/
  public static factory(data: Model1Interface): Model1{
    return new Model1(data);
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
      name: 'Model1',
      plural: 'Model1s',
      properties: {
        "model1name": {
          name: 'model1name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        assemblies: {
          name: 'assemblies',
          type: 'Assembly[]',
          model: 'Assembly'
        },
      }
    }
  }
}
