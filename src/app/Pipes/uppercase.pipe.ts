import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase1'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
