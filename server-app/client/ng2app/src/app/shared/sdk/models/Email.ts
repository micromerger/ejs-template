/* tslint:disable */

declare var Object: any;
export interface EmailInterface {
  "email"?: string;
  "id"?: number;
  "customeremailid"?: number;
  "customer1Id"?: number;
}

export class Email implements EmailInterface {
  "email": string;
  "id": number;
  "customeremailid": number;
  "customer1Id": number;
  constructor(data?: EmailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Email`.
   */
  public static getModelName() {
    return "Email";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Email for dynamic purposes.
  **/
  public static factory(data: EmailInterface): Email{
    return new Email(data);
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
      name: 'Email',
      plural: 'Emails',
      properties: {
        "email": {
          name: 'email',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "customeremailid": {
          name: 'customeremailid',
          type: 'number'
        },
        "customer1Id": {
          name: 'customer1Id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
