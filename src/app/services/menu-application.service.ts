import { IListMenu } from './../interfaces/IMenu.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuApplicationService {
  // url = 'http://localhost:3000/menu';
  url = 'http://192.168.1.9:3000/menu';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<IListMenu[]> {
    return this.http.get<IListMenu[]>(this.url).pipe(retry(2));
  }
}
