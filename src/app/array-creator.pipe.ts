import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayCreator'
})
export class ArrayCreatorPipe implements PipeTransform {

  transform(i: number){
    return new Array(i);
  }

}
