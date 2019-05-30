import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path: 'dashBoard', component: DashboardComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'form', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'dragDrop', component: DragDropComponent },
  { path: 'text', component: TextComponent },
  { path: '', redirectTo: 'text', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
