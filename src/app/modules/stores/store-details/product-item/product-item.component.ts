import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../../../shared/models/product.model';

import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faStoreSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  faStore = faStore;
  faStoreSlash = faStoreSlash;

  constructor() {}

  ngOnInit(): void {}
}
