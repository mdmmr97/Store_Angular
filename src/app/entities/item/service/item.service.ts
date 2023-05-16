import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getAllItems(): Observable<Item[]>{
    const urlEndpoint: string = "http://localhost:8080/store/items";
    return this.http.get<Item[]>(urlEndpoint);
  }

  public getAllItemsByCategoryId(categoryId: number): Observable<Item[]>{
    const urlEndpoint: string = "http://localhost:8080/store/categories/"+ categoryId + "/items";
    return this.http.get<Item[]>(urlEndpoint);
  }
}
