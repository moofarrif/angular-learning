import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './components/price/price.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './pages/products/product.component';

@NgModule({
  declarations: [PriceComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
