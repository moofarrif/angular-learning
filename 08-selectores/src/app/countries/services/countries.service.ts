import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interface/country.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseURL = 'https://restcountries.com/v3.1';

  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor() {}

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): any {}
}
