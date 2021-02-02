import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { StoreService } from './../store.service';

import { Store } from './../../../shared/models/store.model';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss'],
})
export class StoreDetailsComponent implements OnInit, OnDestroy {
  isLoading = true;
  viewAllProducts = false;
  subscriptionsArr: Subscription[] = [];
  selectedStore: Store;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.subscriptionsArr.push(
      this.activatedRoute.params.subscribe((params) => {
        if (params && params.id) {
          if (this.storeService.stores.getValue()) {
            this.selectedStore = this.storeService.getStore(params.id);
            if (!this.selectedStore) {
              alert('There is no Store with this ID!');
              this.router.navigate(['/stores'], { replaceUrl: true });
            }
            this.isLoading = false;
          } else {
            this.subscriptionsArr.push(
              this.storeService.stores.subscribe((res) => {
                if (res) {
                  this.selectedStore = this.storeService.getStore(params.id);
                  if (!this.selectedStore) {
                    alert('There is no Store with this ID!');
                    this.router.navigate(['/stores'], { replaceUrl: true });
                  }
                  this.isLoading = false;
                }
              })
            );
          }
        }
      })
    );
  }

  getModifiedOpening_hours(openingHours: number): string {
    if (openingHours === 24) {
      return openingHours - 12 + ' AM';
    } else if (openingHours === 12) {
      return openingHours + ' PM';
    } else if (openingHours > 12) {
      return openingHours - 12 + ' PM';
    } else {
      return openingHours + ' AM';
    }
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptionsArr) {
      subscription.unsubscribe();
    }
  }
}
