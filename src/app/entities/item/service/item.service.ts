import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getAllItems(page: number, size:number, sort: string, filters?:string): Observable<Item[]>{
    let urlEndpoint: string = "http://localhost:8080/store/items?page="+page+"&size="+size+"&sort="+sort;
    if(filters){
      urlEndpoint = urlEndpoint + "&filter=" + filters;
    }
    return this.http.get<Item[]>(urlEndpoint);
  }
}
