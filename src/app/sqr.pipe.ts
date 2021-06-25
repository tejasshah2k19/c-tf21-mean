import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr'
})
export class SqrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let v = value as number

    return v*v;
  }

   
}
