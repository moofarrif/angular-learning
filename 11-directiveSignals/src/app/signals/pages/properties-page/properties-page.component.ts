import { Component, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent implements OnDestroy, OnInit {

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public counter = signal<number>(10);

  public userChangeEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(current => current + 1);
    
      // if(this.counter() === 15)  {this.userChangeEffect.destroy();}
      
    }, 1000);
  }

  ngOnDestroy(): void {
    this.userChangeEffect.destroy();
  }

  onFieldUpdated(field: keyof User, value: any) {
    // this.user.update(current => ({
    //   ...current,
    //   [field]: value,
    // }))
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    });
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
