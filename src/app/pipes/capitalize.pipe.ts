// Technically camel case and replaces '-' with spaces

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
  	if (value && value != '') {
  		let split = value.split('-');
  		split = split.filter ( (entry) => {
  			return entry != "-";
  		}).map( (entry) => {
  			return entry.charAt(0).toUpperCase() + entry.substr(1);
  		});
  		
  		return split.join(' ');
  	}
  	else {
  		return '';
  	}
  }
}
