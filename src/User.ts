import faker from 'faker'
import { MapMarker } from './CustomMap'

export class User implements MapMarker {
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerInfo() {
    return `User name is ${this.name}`
  }
}