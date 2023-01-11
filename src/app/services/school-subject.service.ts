import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListSchoolSubject } from './../interfaces/IMaterials.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchoolSubjectService {
  url: string = 'http://192.168.1.5:3000/materials';

  constructor(private http: HttpClient) {}

  getListSchoolSubject(): Observable<IListSchoolSubject[]> {
    return this.http.get<IListSchoolSubject[]>(this.url).pipe();
  }
}
