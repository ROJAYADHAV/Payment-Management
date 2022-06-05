import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css'],
})
export class AddPaymentComponent implements OnInit {
  userName: string = '';
  price: number;
  cardNo: number;
leng :string='';
  show :boolean = false;

  details: { [k: string]: any } = {};

  user: string;

  constructor(public payService: PaymentService) {

  }

  ngOnInit(): void {}

  clear() {
    this.userName = '';
    this.price = null;
    this.cardNo = null;
  }

  addDetailToService() {
    
    this.details['userName'] = this.userName;
    this.details['price'] = this.price;
    this.details['cardNo'] = this.cardNo;

    this.payService.addDetails(this.details);
    this.clear();
   

  }

}
