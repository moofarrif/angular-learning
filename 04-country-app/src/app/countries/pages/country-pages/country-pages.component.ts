import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-pages',
  templateUrl: './country-pages.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(({ id }) => this.searchCountry(id));
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.serachCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        this.validateCountry(country);
      });
  }

  searchCountry(code: string) {
    this.countriesService
      .serachCountryByAlphaCode(code)
      .subscribe((country) => console.log(country));
  }

  validateCountry(country: Country | null) {
    if (!country) return this.router.navigateByUrl('');

    return (this.country = country);
  }
}
