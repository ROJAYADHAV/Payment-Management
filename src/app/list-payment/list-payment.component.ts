import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit {

  detail :any[]=[];
  status=false;
  userName='';
  price:number;
  cardNo:number;
  id:number;
  selectOption ='';
  searchText='';

  obj: { [k: string]: any } = {};
  constructor(public payService1 : PaymentService) { 
    this.detail =this.payService1.completeDetail;
    console.log(this.detail[0].userName)
  }

  ngOnInit(): void {
  }

  updateDetails(){

    this.obj['userName'] =this.userName;
    this.obj['price'] =this.price;
    this.obj['cardNo'] =this.cardNo;

   this.payService1.updateDetails(this.obj,this.id)
    this.status=false;
  }

  edit(data:any,i:any){
this.status=true;
this.userName=data.userName;
this.price=data.price;
this.cardNo=data.cardNo;
this.id=i;
  }

  delete(data:any,i:any){

if(confirm("Are you sure , do you want to delete"))
    this.payService1.deleteDetail(data,i);

}

clear(){
  this.searchText='';
}
  
}
