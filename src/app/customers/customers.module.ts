import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-text.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }