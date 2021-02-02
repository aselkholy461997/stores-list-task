import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresComponent } from './stores.component';

const routes: Routes = [
  { path: '', component: StoresComponent },
  { path: ':id', component: StoreDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresRoutingModule {}
