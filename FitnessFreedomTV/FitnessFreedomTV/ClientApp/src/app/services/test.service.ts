import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private endPoint: string;

  constructor(private http: HttpClient) {
    this.endPoint ="http://localhost:2479/"
  }

  getImages() {
    return this.http.get(this.endPoint + 'Home/GetImages');
  }

  getImagesJson() {
    return this.http.get('/assets/data/images.json');
  }
}
