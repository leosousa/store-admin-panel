import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { OrdersTableComponent } from './orders/orders-table/orders-table.component';
import { SalesTableComponent } from './sales/sales-table/sales-table.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'vendas', component: SalesTableComponent },
  { path: 'pedidos', component: OrdersTableComponent },
  { path: 'clientes', component: DashComponent },
  { path: 'produtos', component: DashComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
