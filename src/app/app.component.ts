import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterServiceService } from './services/master-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.getDashboardData();
  }
  title = 'Ticket_Booking';
  mService= inject(MasterServiceService);
  dashboardData:any;

  getDashboardData(){
    this.mService.getDashboard().subscribe((res:any)=>{
        this.dashboardData = res.data[0];
        console.log(res.data[0].todaysTickets);
        
    })

  }
}
