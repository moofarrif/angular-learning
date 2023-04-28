import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPageComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPageComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPageComponent } from './pages/country-pages/country-pages.component';

const routes: Routes = [
  {
    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-capital',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
