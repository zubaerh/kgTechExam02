import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits: string): any {
    if(!value){
      return 0;
    }
    switch(targetUnits){
      case 'mb':
        return value/1024;
      case 'gb':
        return value/1048576;
      default:
        throw new Error('target unit not supported');
    }
    
  }

}
