export class Ticket{
    ticketId: number;
    customerName: string;
    mobileNo: string;
    email: string;
    city: string;
    state: string;
    pincode: string;
    reference: string;
    adultCount: number;
    childCount: number;
    adultRate: number;
    childRate: number;
    totalAmount: number;
    discountInPercent: number;
    finalAmount: number;
    ticketDate: string;
    ticketNo: string;

    constructor(){
        this.ticketId=0;
        this.customerName='';
        this.mobileNo=  ' ';
        this.email=  ' ';
        this.city=  ' ';
        this.state=  ' ';
        this.pincode=  ' ';
        this.reference=  ' ';
        this.adultCount=  0;
        this.childCount=  0;
        this.adultRate=  0;
        this.childRate=  0;
        this.totalAmount=  0;
        this.discountInPercent=  0;
        this.finalAmount=  0;
        this.ticketDate=  ' ';
        this.ticketNo=  ' ';
    }
  }

  

