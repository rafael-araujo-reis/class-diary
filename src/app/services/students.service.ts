import { IStudent } from './../interfaces/IStudent.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  url: string = 'http://192.168.1.5:3000/students';

  constructor(private http: HttpClient) {}

  getListStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.url).pipe();
  }

  getDetailsStudentById(id: string): Observable<IStudent> {
    const url = `${this.url}/${id}`;

    return this.http.get<IStudent>(url).pipe();
  }
}
