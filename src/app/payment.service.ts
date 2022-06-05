import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  completeDetail : any[] = [{userName : 'Sree',price :  300 , cardNo : 2345678120123456},
  {userName : 'Divya',price :  200 , cardNo : 2345678901234567},
  {userName : 'Loki',price :  400 , cardNo : 8765432022341234},
  {userName : 'Ishu',price :  100 , cardNo : 3454678732345678 } ] ;


  constructor() { }

  addDetails(obj : any){
    this.completeDetail.push(obj);
    console.log(this.completeDetail)
  }

  updateDetails(obj:any, id : any){

    this.completeDetail[id]=obj;
  
  }
  deleteDetail(data:any ,id :any){
  this.completeDetail.splice(id,1);

  }
}
