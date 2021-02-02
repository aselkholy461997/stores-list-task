import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Store } from './../models/store.model';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllStores(): Observable<Store[]> {
    return this.httpClient.get<Store[]>(this.url);
  }
}
