import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { StoreService } from './store.service';

import { Store } from './../../shared/models/store.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit, OnDestroy {
  isLoading = true;
  stores: Store[];
  subscription: Subscription;

  constructor(
    private storeService: StoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.storeService.stores.subscribe(
      (res) => {
        if (res) {
          this.stores = res;
          this.isLoading = false;
        }
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  goToStoreDetails(index: number): void {
    this.router.navigate([this.stores[index].id], {
      relativeTo: this.activatedRoute,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
