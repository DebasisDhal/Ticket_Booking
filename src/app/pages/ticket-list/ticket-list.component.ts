import { Component, inject, OnInit } from '@angular/core';
import { MasterServiceService } from '../../services/master-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit{

  mService = inject(MasterServiceService)
  ticketList: any[] = [];
  isTile:boolean = true;
  isAlldata:boolean = false;


  ngOnInit(): void {
    this.allTickets();
  }

  toggleData(){
    this.isAlldata = !this.isAlldata
    if(this.isAlldata){
      this.todayTickets();
    }else{
      this.allTickets();
      
    }
  }
 allTickets(){
  this.mService.getAllDatas().subscribe((res:any)=>{
    this.ticketList = res.data;
    
  })

 }
 todayTickets(){
  this.mService.getTodayData().subscribe((res:any)=>{
   console.log(res);
   this.ticketList = res.data;
   
  })
 }

}
