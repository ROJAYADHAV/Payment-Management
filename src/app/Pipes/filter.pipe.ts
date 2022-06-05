import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],selectOption:string,searchText:any): any[] {
    var tempArr=[];

    if(searchText.length==0){
      return value;
    }
    if(selectOption == 'userName'){
      for(let i=0;i<value.length;i++){
         if(value[i].userName.toLowerCase().includes(searchText.toLowerCase())){
           tempArr.push(value[i])
         }
      }
    }
    else if(selectOption == 'price'){
      for(let i=0;i<value.length;i++){
         if(value[i].price==searchText){
           tempArr.push(value[i])
         }
      }
    }
    else if(selectOption == 'cardNo'){
      for(let i=0;i<value.length;i++){
         if(value[i].cardNo==searchText){
           tempArr.push(value[i])
         }
      }
    
    }
    return tempArr;
  }

}
