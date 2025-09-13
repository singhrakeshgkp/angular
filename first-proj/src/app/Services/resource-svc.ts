import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root'
})
export class ResourceSvc {
  constructor(private http: HttpClient) { }
  baseUrl: string='https://fake-store-api.mock.beeceptor.com';

  /* getAllProducts() {
    return this.http.get<any>(`${this.baseUrl}/api/users`);

  } */

 resourceRxDataEx = rxResource({
  stream: () => this.http.get<any>(`${this.baseUrl}/api/users`),
  defaultValue: [] as any[]
 });

resourceDataEx = resource({
  loader: () => fetch(`${this.baseUrl}/api/users`).then(res => res.json() as Promise <any[]>),
  /* 1. fetch data from url.
     2. Parse data to json
     3.return result as promise */
  defaultValue: [] as any[]
});


}

