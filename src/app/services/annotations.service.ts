import { IAnnotation } from './../interfaces/IAnnotation.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnnotationsService {
  url: string = 'http://192.168.1.9:3000/annotations';

  constructor(private http: HttpClient) {}

  get listAnnotations(): Observable<IAnnotation[]> {
    return this.http.get<IAnnotation[]>(this.url).pipe();
  }

  getDetailsAnnotationById(idAnnotation: string): Observable<IAnnotation> {
    const url = `${this.url}/${idAnnotation}`;

    return this.http.get<IAnnotation>(url).pipe();
  }
}
