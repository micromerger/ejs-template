/* tslint:disable */

declare var Object: any;
export interface Model2Interface {
  "model2name"?: string;
  "id"?: number;
}

export class Model2 implements Model2Interface {
  "model2name": string;
  "id": number;
  constructor(data?: Model2Interface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Model2`.
   */
  public static getModelName() {
    return "Model2";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Model2 for dynamic purposes.
  **/
  public static factory(data: Model2Interface): Model2{
    return new Model2(data);
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
      name: 'Model2',
      plural: 'Model2s',
      properties: {
        "model2name": {
          name: 'model2name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
