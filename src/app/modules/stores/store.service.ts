import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Store } from './../../shared/models/store.model';

import { ApiService } from './../../shared/services/api.service';

@Injectable()
export class StoreService {
  stores: BehaviorSubject<Store[]> = new BehaviorSubject(null);
  private selectedStore: Store;

  constructor(private apiService: ApiService) {
    this.getStores();
  }

  getStores(): void {
    this.apiService.getAllStores().subscribe(
      (res) => {
        this.stores.next(
          res.map((store) => {
            if (store) {
              if (store.opening_hours) {
                store.opening_hours.start /= 3600;
                store.opening_hours.end = store.opening_hours.end /= 3600;
              }
              return store;
            }
          })
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getStore(index: number): Store {
    if (this.stores.getValue()) {
      this.selectedStore = this.stores.getValue()[index];
      return this.selectedStore;
    }
  }
}
