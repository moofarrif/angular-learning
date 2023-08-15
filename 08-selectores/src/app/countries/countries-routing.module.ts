import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeliveryPageComponent } from './pages/delivery-page/delivery-page.component';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selector', component: SelectorPageComponent },
      { path: 'delivery', component: DeliveryPageComponent },
      { path: '**', redirectTo: 'selector' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
