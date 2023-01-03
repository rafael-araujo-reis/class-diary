import { IListStudents } from './../interfaces/IListStudents.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListStudentsService {
  url: string = 'http://192.168.1.5:3000/students';

  constructor(private http: HttpClient) {}

  getListStudents(): Observable<IListStudents[]> {
    return this.http.get<IListStudents[]>(this.url).pipe();
  }
}
