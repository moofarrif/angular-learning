import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullScreenPageComponent } from './page/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MarkersPageComponent } from './page/markers-page/markers-page.component';
import { PropertiesPageComponent } from './page/properties-page/properties-page.component';
import { ZoomPageComponent } from './page/zoom-page/zoom-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'fullscreen',
        component: FullScreenPageComponent,
      },
      {
        path: 'zoom',
        component: ZoomPageComponent,
      },
      {
        path: 'markers',
        component: MarkersPageComponent,
      },
      {
        path: 'properties',
        component: PropertiesPageComponent,
      },

      {
        path: '**',
        redirectTo: 'fullscreen',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
