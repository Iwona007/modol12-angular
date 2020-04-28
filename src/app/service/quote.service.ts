import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  apiUrl: string = 'http://localhost:8080/ocr/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Array<Image>> {
    return this.httpClient.get<Array<Image>>(this.apiUrl + 'all');
  }

  addImage(image: Image): Observable<Image> {
    return this.httpClient.post<Image>(this.apiUrl + 'add', image);
  }

  delete(id: number): Observable<Image> {
    return this.httpClient.delete<Image>(this.apiUrl + 'all/' + id);
  }
}
