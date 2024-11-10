import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Fruit[]>('http://localhost:3000/fruits')
  }

  create(data: Fruit){
    return this.httpClient.post('http://localhost:3000/fruits',data)
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:3000/fruits/${id}`);
  }

  edit(id: number){
    return this.httpClient.get<Fruit>(`http://localhost:3000/fruits/${id}`)
  }

  update(data: Fruit){
    return this.httpClient.put<Fruit>(`http://localhost:3000/fruits/${data.id}`, data)
  }
}
