import { Component } from '@angular/core';

@Component({
   selector: 'invoices',
   templateUrl: './invoices.component.html',
   styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {
   filterByStatus: string;
   statuses: string[] = ['Draft', 'Pending', 'Paid'];
}
