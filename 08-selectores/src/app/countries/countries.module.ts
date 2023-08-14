import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';

@NgModule({
  imports: [CommonModule, CountriesRoutingModule, ReactiveFormsModule],
  declarations: [SelectorPageComponent],
})
export class CountriesModule {}
