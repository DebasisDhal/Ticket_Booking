import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http:HttpClient) { }

  sendData(obj:user):Observable<user>{
    return this.http.post<user>("https://freeapi.miniprojectideas.com/api/youtube/AddNewTicket",obj);
  }
  getAllDatas():Observable<any[]>{
    return this.http.get<any[]>("https://freeapi.miniprojectideas.com/api/youtube/GetAllTickets");
  }
  getTodayData(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/youtube/GetTodaysTickets");
  }
  getDashboard(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/youtube/GetTicketsDashboard")
  }
}
