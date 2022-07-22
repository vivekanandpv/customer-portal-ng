import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpClient: HttpClient) {}

  read<T>(url: string) {
    return this.httpClient.get<T>(url);
  }

  post<T>(url: string, body: T) {
    return this.httpClient.post(url, body);
  }

  put<T>(url: string, body: T) {
    return this.httpClient.put(url, body);
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }
}
