import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../model/image';

const httpOptions = {
  headers: new HttpHeaders({
    'Content_Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  apiUrl: string; // = 'https://modol12.herokuapp.com';
  // apiUrl: string = 'http://localhost:8080/ocr/';

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'https://modol12.herokuapp.com';
  }

  getAll(): Observable<Array<Image>> {
    return this.httpClient.get<Array<Image>>(this.apiUrl + '/ocr/all', httpOptions);
  }

  addImage(image: Image): Observable<Image> {
    return this.httpClient.post<Image>(this.apiUrl + '/ocr/add', image, httpOptions);
  }

  delete(id: number): Observable<Image> {
    const url = `${this.apiUrl + '/ocr/all/'}/${id}`;
    return this.httpClient.delete<Image>(url, httpOptions);
  }
}
