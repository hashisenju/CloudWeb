import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FullServiceService {

  listProduct: any[] = [];
  total = 0;
  constructor(private http: Http) { }
  get(url: string) {
    const headers = new Headers();
    return this.http.get(url, {
      headers: headers,
    });
  }
  post(url: string, data: any) {
    const headers = new Headers();
    return this.http.post(url, data, {
      headers: headers     
    });
  }
}
