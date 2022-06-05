import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditvalue'
})
export class CreditvaluePipe implements PipeTransform {

  transform(value: number): string {

    var newArr:string[] =value.toString().split('');
    var tempArr : string='';
    for(let i=0;i<newArr.length;i++){
      if(i<12){
       tempArr=tempArr+'*'
       if((i+1)%4==0){
        tempArr=tempArr+' '
       }
      }else {
        tempArr=tempArr+newArr[i]
      }
    }
    return tempArr;
  }

}
