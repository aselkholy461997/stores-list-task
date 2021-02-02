import { Product } from './product.model';

export class Store {
  id: number;
  logo: string;
  cover: string;
  title: string;
  address: string;
  products: Product[];
  description: string;
  opening_hours: {
    end: number;
    start: number;
  };
}
