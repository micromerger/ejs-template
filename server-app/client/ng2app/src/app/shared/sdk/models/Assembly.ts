/* tslint:disable */
import {
  Model1
} from '../index';

declare var Object: any;
export interface AssemblyInterface {
  "assemblyname": string;
  "id"?: number;
  model1s?: Model1[];
}

export class Assembly implements AssemblyInterface {
  "assemblyname": string;
  "id": number;
  model1s: Model1[];
  constructor(data?: AssemblyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Assembly`.
   */
  public static getModelName() {
    return "Assembly";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Assembly for dynamic purposes.
  **/
  public static factory(data: AssemblyInterface): Assembly{
    return new Assembly(data);
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
      name: 'Assembly',
      plural: 'Assemblies',
      properties: {
        "assemblyname": {
          name: 'assemblyname',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        model1s: {
          name: 'model1s',
          type: 'Model1[]',
          model: 'Model1'
        },
      }
    }
  }
}
