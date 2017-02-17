// This pipe is mainly for making sure the classes for each card-img on main.component match the styles
// strips \: from 'type: null' and replaces spaces with hyphens

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenate'
})
export class HyphenatePipe implements PipeTransform {
  transform(value: string): string {
  	if (value && value != '') {
  		return value.replace(' ', '-').replace(/\:/, '');	
  	}
  	else {
  		return '';
  	}
  }
}
