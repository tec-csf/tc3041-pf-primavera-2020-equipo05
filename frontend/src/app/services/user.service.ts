import { Injectable } from '@angular/core';
import * as data from '../../data/data.json';
import * as products_users from '../../../../datasets/productsUsers.json'
import { Router } from '@angular/router';
import {Product} from '../interfaces/product';
import * as carritos from '../../../../datasets/carritos.json'
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';
const endpoint = 'http://localhost:8080/api/allProducts/';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any = data.users;
  userProducts: any = this.users[0].products;
  product: Product;
  carrito: any = (carritos as any).default;
  products: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }
  constructor(private router: Router, private http: HttpClient) { }

  getProducts(i){
    return this.http.get(endpoint + i);
  }
  addProduct(datos: any) {
    this.products.push(datos);
    //index 0 should be change to index of current suer
    this.users[0].products.push(datos);
    this.router.navigateByUrl('/home');
  }
  removeProduct(index: number){
    this.users[0].products.splice(index, 1);
  }
  findProduct(index){
    this.product = this.userProducts[index];
    console.log(this.product);
  }

  updateProduct(id, name, description, price){

    this.product = this.users[0].products.find(res => {
    });
    if (this.product){
      this.product.name = name;
      this.product.description = description;
      this.product.price = price;
    }

    this.router.navigateByUrl('/perfil');
  }
}
