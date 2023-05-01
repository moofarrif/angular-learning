import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrls: ['./uncommon-pages.component.scss'],
})
export class UncommonPagesComponent {
  //i18nSelect
  public name: string = 'Jhon';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //18nPlural

  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Eduardo',
    'Jhon',
    'Mellisa',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    other: 'tenemos # clientes esperando.',
  };
  deleteClient() {
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Jhon',
    age: 27,
    location: 'Cali, Colombia',
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap((value) => console.log('value', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otro nombre';
    }, 3500);
  });
}
