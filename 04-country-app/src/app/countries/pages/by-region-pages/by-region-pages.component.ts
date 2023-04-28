import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-pages',
  templateUrl: './by-region-pages.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}
  searchByRegion(term: string) {
    this.countriesService
      .searchRegion(term)
      .subscribe((countries) => (this.countries = countries));
  }
}
