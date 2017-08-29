/* tslint:disable */
import {
  Patient
} from '../index';

declare var Object: any;
export interface DoctorInterface {
  "name"?: string;
  "specilist"?: string;
  "id"?: number;
  patients?: Patient[];
}

export class Doctor implements DoctorInterface {
  "name": string;
  "specilist": string;
  "id": number;
  patients: Patient[];
  constructor(data?: DoctorInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Doctor`.
   */
  public static getModelName() {
    return "Doctor";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Doctor for dynamic purposes.
  **/
  public static factory(data: DoctorInterface): Doctor{
    return new Doctor(data);
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
      name: 'Doctor',
      plural: 'Doctors',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "specilist": {
          name: 'specilist',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        patients: {
          name: 'patients',
          type: 'Patient[]',
          model: 'Patient'
        },
      }
    }
  }
}
