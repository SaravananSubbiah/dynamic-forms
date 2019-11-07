import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = ['A Book'];
  constructor() { }
  getProducts() {
    return [...this.products];
  }
}
