import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css'],
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];

  @ViewChild('map') divMap?: ElementRef;

  public currentZoom: number = 15;
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.lngLat) throw 'lng cant be null';
    if (!this.divMap?.nativeElement) throw 'divMap is not defined';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: this.currentZoom,
      interactive: false,
    });

    new Marker().setLngLat(this.lngLat).addTo(this.map);
  }
}
