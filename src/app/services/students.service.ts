import { IListStudents } from './../interfaces/IStudents.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  url: string = 'http://192.168.1.5:3000/students';

  constructor(private http: HttpClient) {}

  getListStudents(): Observable<IListStudents[]> {
    return this.http.get<IListStudents[]>(this.url).pipe();
  }

  getDetailsStudentById(id: string): Observable<IListStudents> {
    const url = `${this.url}/${id}`;

    return this.http.get<IListStudents>(url).pipe();
  }
}
