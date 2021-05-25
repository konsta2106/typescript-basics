export interface MapMarker {
  location: {
    lat: number;
    lng: number;
  };
  markerInfo(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divElement: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divElement) as HTMLElement, {
      center: { lat: 55, lng: 55 },
      zoom: 1,
    });
  }

  addMarker(mapMarker: MapMarker): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapMarker.location.lat,
        lng: mapMarker.location.lng
      }
    })
    marker.addListener('click',  () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapMarker.markerInfo(),
      });
      infoWindow.open(this.googleMap, marker)
    })
  }
}