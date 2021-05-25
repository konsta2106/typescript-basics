import faker from 'faker';
import { MapMarker } from './CustomMap'

export class Company implements MapMarker {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerInfo(): string {
    return `
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Company phrase: ${this.catchPhrase}</h3>
    `;
  }
}
