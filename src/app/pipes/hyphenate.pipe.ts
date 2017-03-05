// This pipe is mainly for making sure the classes for each card-img on main.component match the styles
// strips \: from 'type: null' and replaces spaces with hyphens

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hyphenate'
})
export class HyphenatePipe implements PipeTransform {
  transform(value: string): string {
  	if (value && value != '') {
  		// strips periods (.), apostrophes ('), and colons (:)
  		// replaces spaces ( ) with hyphens
  		return value.replace(/[\.\'\:]+/gi, '').replace(' ', '-');
  	}
  	else {
  		return '';
  	}
  }
}
