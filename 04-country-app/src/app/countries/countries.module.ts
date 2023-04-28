import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ByCapitalPageComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPageComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPageComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPageComponent } from './pages/country-pages/country-pages.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
