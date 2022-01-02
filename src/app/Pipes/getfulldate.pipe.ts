import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getfulldate'
})
export class GetfulldatePipe implements PipeTransform {

  transform(value:string): string {
    if(Number(value)&&value.length==14){
          var [i,yy,mm,dd]=[value.substring(0,1),value.substring(1,3),value.substring(3,5),value.substring(5,7)]
          if(Number(i)==2){
            return `${dd} - ${mm}- 19${yy}`;
          }else if(Number(i)==3){
            return `${dd} - ${mm}- 20${yy}`;
          }
    }
    return  "not id number";
  }

}
