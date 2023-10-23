import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesComponent } from './invoices.component';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
   declarations: [
      InvoicesComponent
   ],
   imports: [
      CommonModule,
      InvoicesRoutingModule,
      RouterModule,
      MatMenuModule,
      MatRadioModule,
      FormsModule
   ]
})
export class InvoicesModule { }
