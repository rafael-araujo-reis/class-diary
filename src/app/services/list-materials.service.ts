import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListMaterials } from './../interfaces/IListMaterials.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListMaterialsService {
  url: string = 'http://192.168.1.5:3000/materials';

  constructor(private http: HttpClient) {}

  getListMaterials(): Observable<IListMaterials[]> {
    return this.http.get<IListMaterials[]>(this.url).pipe();
  }
}
