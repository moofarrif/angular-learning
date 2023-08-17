import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-page',
  templateUrl: './zoom-page.component.html',
  styleUrls: ['./zoom-page.component.css'],
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;

  /* El fragmento de código declara tres variables públicas en la clase `ZoomPageComponent`: */
  public currentZoom: number = 13;
  public map?: Map;
  public currentCenterLngLat: LngLat = new LngLat(-76.551, 3.407);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'divMap is not defined';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenterLngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });
    this.mapListeners(this.map);
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }
  mapListeners(map: Map) {
    if (!map) throw 'map is not defined';
    map.on('zoom', (ev) => {
      this.currentZoom = map.getZoom();
    });

    map.on('zoomend', () => {
      if (map!.getZoom() < 18) return;
      map!.zoomTo(18);
    });

    map.on('move', () => {
      this.currentCenterLngLat = map.getCenter();
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }
  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChange(value: string) {
    this.map?.zoomTo(Number(value));
  }
}
