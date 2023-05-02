import { NgModule } from '@angular/core';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumberPagesComponent } from './pages/number-pages/number-pages.component';
import { RouterModule, Routes } from '@angular/router';
import { UncommonPagesComponent } from './pages/uncommon-pages/uncommon-pages.component';
import { OrderComponent } from './pages/order-pages/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPagesComponent,
  },
  {
    path: 'numbers',
    component: NumberPagesComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPagesComponent,
  },
  {
    path: 'custom',
    component: OrderComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
