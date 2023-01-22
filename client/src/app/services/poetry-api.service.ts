import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoetryApiService {

  constructor(private http: HttpClient) { }

  imageAPI = 'https://poetrydb.org/linecount,poemcount/'

  getPoetry(linecount: number, poemcount: number) {
    return this.http.get(`${this.imageAPI}${linecount};${poemcount}`);
  }

}
