import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogCmsApiService {

  constructor(private http: HttpClient) { }

  imageAPI = 'http://localhost:3000/api/images/'

  getImages() {
    return this.http.get(this.imageAPI);
  }
}
