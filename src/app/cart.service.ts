import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CartService {

private items:Array<Object> = [];

  constructor(
    private http: HttpClient
  ) { }

  addItem(produit:Object):void{
    this.items.push(produit);
  }

  getItems():Array<Object>{
    return this.items;
  }

  viderPanier():Array<Object>{
    this.items = [];
    return this.items;
  }
  getFrais():Observable<Object>{
  return this.http.get('/assets/shipping.json');
}

}