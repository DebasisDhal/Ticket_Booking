import { Component, inject, signal } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MasterServiceService } from '../../services/master-service.service';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  
   constructor(){}

  mService=inject(MasterServiceService);
  isOther=false;

newToken:any ={
  ticketId:0,
  customerName:'',
  mobileNo:  ' ',
  email:  ' ',
  city:  ' ',
  state:  ' ',
  pincode:  ' ',
  reference:  ' ',
  adultCount:  0,
  childCount:  0,
  adultRate:  0,
  childRate:  0,
  totalAmount:  0,
  discountInPercent:  0,
  finalAmount:  0,
  ticketDate:  ' ',
  ticketNo: ' ',
}

otherRef="";

calculateTicketAmount(){
  const tAmount = (Number(this.newToken.adultRate) * Number(this.newToken.adultCount))+ (Number(this.newToken.childRate) * Number(this.newToken.childCount))
  this.newToken.totalAmount = tAmount;

  const dAmount = tAmount * Number(this.newToken.discountInPercent) / 100;

  this.newToken.finalAmount = this.newToken.totalAmount - dAmount;
}

onSave(){
  if(this.isOther){
    this.newToken.reference = this.otherRef;
  }
this.mService.sendData(this.newToken).subscribe({
  next:(response)=>{  
  }
})

}

onRefChange(){
  if (this.newToken.reference == "Other"){
    this.isOther = true;
  }else{
    this.isOther = false;
  }
}

}
