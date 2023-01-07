import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInrGpb'
})
export class UsdInrGpbPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}