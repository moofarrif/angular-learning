import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePagesComponent,
    SidebarComponent,
    SearchBoxComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePagesComponent,
    SidebarComponent,
    SearchBoxComponent,
  ],
})
export class SharedModule {}
