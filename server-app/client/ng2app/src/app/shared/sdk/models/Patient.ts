/* tslint:disable */
import {
  Doctor
} from '../index';

declare var Object: any;
export interface PatientInterface {
  "name"?: string;
  "age"?: number;
  "id"?: number;
  doctors?: Doctor[];
}

export class Patient implements PatientInterface {
  "name": string;
  "age": number;
  "id": number;
  doctors: Doctor[];
  constructor(data?: PatientInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Patient`.
   */
  public static getModelName() {
    return "Patient";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Patient for dynamic purposes.
  **/
  public static factory(data: PatientInterface): Patient{
    return new Patient(data);
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
      name: 'Patient',
      plural: 'Patients',
      properties: {
        "name": {
          name: 'name',
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
        doctors: {
          name: 'doctors',
          type: 'Doctor[]',
          model: 'Doctor'
        },
      }
    }
  }
}
