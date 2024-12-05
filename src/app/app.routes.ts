import { Routes } from '@angular/router';
import { TicketListComponent } from './pages/ticket-list/ticket-list.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'newTicket',
        pathMatch:'full'
    },
    {
        path:'newTicket',
        component:NewTicketComponent

    },
    {
        path:'ticketList',
        component:TicketListComponent
    }
];
