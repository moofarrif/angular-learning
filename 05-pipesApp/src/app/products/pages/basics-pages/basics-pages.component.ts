import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.scss'],
})
export class BasicsPagesComponent {
  public nameLower: string = 'jhon';
  public nameUpper: string = 'JHON';
  public fullName: string = 'jHoN mOoFarRif ';

  public customDate: Date = new Date();
}
