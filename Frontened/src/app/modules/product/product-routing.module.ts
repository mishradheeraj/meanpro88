import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducrdetailComponent } from './producrdetail/producrdetail.component';

const routes: Routes = [
  {
    path:'',
    component:ProducrdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
