import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {

  transform(value:string): string {
    if(Number(value)&&value.length==16){
      var [n1,n2,n3,n4]=[value.substring(0,4),value.substring(4,8),value.substring(8,12),value.substring(12,16)]
      return `${n1} - ${n2}-${n3}-${n4}`;
    }
    return "null";
  }

}
