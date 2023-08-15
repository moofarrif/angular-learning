import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-produc-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible = false;
  public currentPrice: number = 10;
  constructor() {
    console.log('1. constructor');
    // No peticiones http en constructor
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ngOnChanges');
    // estar pendiente de los cambios de las propiedades de entrada
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //  recalcular en pantalla
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    throw console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // hacer limpiezas observables , listener , etc
  }

  ngOnInit() {}

  increasePrice() {
    this.currentPrice++;
  }
}
