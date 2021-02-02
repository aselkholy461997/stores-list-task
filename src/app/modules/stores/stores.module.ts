import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { StoresRoutingModule } from './stores-routing.module';

import { StoreService } from './store.service';

import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoresComponent } from './stores.component';
import { ProductItemComponent } from './store-details/product-item/product-item.component';

@NgModule({
  declarations: [StoresComponent, StoreDetailsComponent, ProductItemComponent],
  imports: [StoresRoutingModule, SharedModule],
  providers: [StoreService],
})
export class StoresModule {}
