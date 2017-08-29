/* tslint:disable */
import {
  Model1,
  Model2
} from '../index';

declare var Object: any;
export interface ModelInterface {
  "modelname"?: string;
  "id"?: number;
  model1s?: Model1[];
  model2s?: Model2[];
}

export class Model implements ModelInterface {
  "modelname": string;
  "id": number;
  model1s: Model1[];
  model2s: Model2[];
  constructor(data?: ModelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Model`.
   */
  public static getModelName() {
    return "Model";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Model for dynamic purposes.
  **/
  public static factory(data: ModelInterface): Model{
    return new Model(data);
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
      name: 'Model',
      plural: 'Models',
      properties: {
        "modelname": {
          name: 'modelname',
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
        model2s: {
          name: 'model2s',
          type: 'Model2[]',
          model: 'Model2'
        },
      }
    }
  }
}
