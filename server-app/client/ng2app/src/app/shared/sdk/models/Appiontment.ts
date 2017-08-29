/* tslint:disable */
import {
  Patient,
  Doctor
} from '../index';

declare var Object: any;
export interface AppiontmentInterface {
  "date"?: Date;
  "refno"?: number;
  "id"?: number;
  "patientId"?: number;
  "doctorId"?: number;
  patient?: Patient;
  doctor?: Doctor;
}

export class Appiontment implements AppiontmentInterface {
  "date": Date;
  "refno": number;
  "id": number;
  "patientId": number;
  "doctorId": number;
  patient: Patient;
  doctor: Doctor;
  constructor(data?: AppiontmentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Appiontment`.
   */
  public static getModelName() {
    return "Appiontment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Appiontment for dynamic purposes.
  **/
  public static factory(data: AppiontmentInterface): Appiontment{
    return new Appiontment(data);
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
      name: 'Appiontment',
      plural: 'Appiontments',
      properties: {
        "date": {
          name: 'date',
          type: 'Date'
        },
        "refno": {
          name: 'refno',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "patientId": {
          name: 'patientId',
          type: 'number'
        },
        "doctorId": {
          name: 'doctorId',
          type: 'number'
        },
      },
      relations: {
        patient: {
          name: 'patient',
          type: 'Patient',
          model: 'Patient'
        },
        doctor: {
          name: 'doctor',
          type: 'Doctor',
          model: 'Doctor'
        },
      }
    }
  }
}
