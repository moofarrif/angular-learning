import { Pipe, PipeTransform } from '@angular/core';

//jhon | toggleCase = 'JHON'
// JHON | toggleCase = 'jhon

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
