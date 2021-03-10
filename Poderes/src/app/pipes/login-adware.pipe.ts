import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loginAdware'
})
export class LoginAdwarePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
