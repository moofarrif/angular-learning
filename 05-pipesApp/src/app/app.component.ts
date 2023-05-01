import { Component } from '@angular/core';
import { LicenseManager, PrimeNGConfig } from 'primeng/api';

//Configuración del local de la app
import localEsCL from '@angular/common/locales/es-CL';
import localFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsCL);
registerLocaleData(localFrCA);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private licenseManager: LicenseManager,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.licenseManager.verify('LICENSE_KEY', 'PASS_KEY');
  }
}
