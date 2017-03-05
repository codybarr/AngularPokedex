// Technically camel case and replaces '-' with spaces

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fraction'
})
export class FractionPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1 && value > 0) {
      return `1 / ${1 / value}`;
    }
    else { 
      return value + '';
    }
  }
}
