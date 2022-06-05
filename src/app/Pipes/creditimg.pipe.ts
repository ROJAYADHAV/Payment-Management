import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditimg'
})
export class CreditimgPipe implements PipeTransform {

  transform(value: number): string {
 if(value!=undefined){
    var str:string = value.toString();

     if(str.startsWith("4")){
       return "https://icons-for-free.com/iconfiles/png/512/credit+card+debit+payment+visa+icon-1320162799182509645.png";
     }
     else if(str.startsWith("5")){
      return "https://eresearch.com/wp-content/uploads/2019/09/mastercard-logo-small.jpg";
     }
     else {
       return "https://c8.alamy.com/comp/ECHYHC/invalid-red-rubber-stamp-over-a-white-background-ECHYHC.jpg"
     }
  } return str;
} 



}
