import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomersComponent, CustomersListComponent],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }