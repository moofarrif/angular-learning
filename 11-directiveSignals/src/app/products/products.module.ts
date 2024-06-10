import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule, SharedModule],
  declarations: [ProductPageComponent],
})
export class ProductsModule {}
