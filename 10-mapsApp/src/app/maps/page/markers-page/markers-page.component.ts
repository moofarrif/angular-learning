import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface markerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css'],
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public currentZoom: number = 13;
  public map?: Map;
  public currentCenterLngLat: LngLat = new LngLat(-76.551, 3.407);

  public markers: markerAndColor[] = [];

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'divMap is not defined';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentCenterLngLat,
      zoom: this.currentZoom,
    });

    this.readFromLocalStorage();

    //   const markerHtml: HTMLElement = document.createElement('div');
    //   markerHtml.innerHTML = 'Jhon';

    //   const marker = new Marker({ element: markerHtml })
    //     .setLngLat(this.currentCenterLngLat)
    //     .addTo(this.map);
  }
  createMarker() {
    if (!this.map) throw 'map is not defined';

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();

    this.addMaker(lngLat, color);
  }

  addMaker(lngLat: LngLat, color: string) {
    if (!this.map) throw 'map is not defined';

    const marker = new Marker({ color, draggable: true })
      .setLngLat(lngLat)
      .addTo(this.map);
    this.markers.push({ color, marker });

    this.saveToLocalStorage();

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyToMarker(marker: Marker) {
    if (!this.map) throw 'map is not defined';

    this.map.flyTo({ zoom: 14, center: marker.getLngLat() });
  }

  saveToLocalStorage() {
    const plainMarker: PlainMarker[] = this.markers.map(({ color, marker }) => {
      return { color, lngLat: marker.getLngLat().toArray() };
    });

    localStorage.setItem('plainMarker', JSON.stringify(plainMarker));
  }

  readFromLocalStorage() {
    const plainMarkersStrings = localStorage.getItem('plainMarker') ?? '[]';

    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersStrings);

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMaker(coords, color);
    });
  }
}
