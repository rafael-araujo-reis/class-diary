import { INote } from './../interfaces/INote.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  url: string = 'http://192.168.1.5:3000/notes';

  constructor(private http: HttpClient) {}

  getListNotesStudentByIdStudent(idStudent: string): Observable<INote[]> {
    console.log('idStudent', idStudent);
    return this.http.get<INote[]>(this.url).pipe();
  }

  getNoteStudentById(idNote: string): Observable<INote> {
    const url = `${this.url}/${idNote}`;

    return this.http.get<INote>(url).pipe();
  }
}
