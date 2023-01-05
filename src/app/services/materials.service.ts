import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListMaterials } from './../interfaces/IMaterials.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  url: string = 'http://192.168.1.5:3000/materials';

  constructor(private http: HttpClient) {}

  getListMaterials(): Observable<IListMaterials[]> {
    return this.http.get<IListMaterials[]>(this.url).pipe();
  }
}
