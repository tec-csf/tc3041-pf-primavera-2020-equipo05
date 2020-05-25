import { Injectable } from '@angular/core';
import * as data from '../../data/data.json';
import * as products_users from '../../../../datasets/productsUsers.json'
import { Router } from '@angular/router';
import {Product} from '../interfaces/product';
import * as carritos from '../../../../datasets/carritos.json'
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';
const endpoint = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  result: any;
  usr = 1;
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
    return this.http.get(endpoint + "allProducts/" + i);
  }

  login(user) {
    return this.http.post(endpoint + "login", user);
  }

  getProductsUser(user) {
    return this.http.get(endpoint + "productsUsers/" + user);
  }

  getCarritoUser() {
    return this.http.get(endpoint + "carrito/" + this.usr);
  }

  getProduct(id) {
    return this.http.get(endpoint + "products/" + id);
  }

  addProduct(datos: any) {
    delete datos.idProd;
    var prod = Object.assign({idUser: this.usr}, datos)
    return this.http.post(endpoint + "productsUsers", prod);
  }

  addProductToCarrito(idProd) {
    console.log(this.usr)
    console.log(idProd)
    return this.http.post(endpoint + "carrito/" + this.usr, {idProd: idProd});
  }

  removeProductFromCarrito(idProd) {
    console.log(this.usr)
    console.log(idProd)
    return this.http.request('delete', endpoint + "carrito/" + this.usr, { body: {idProd: idProd } });
  }

  removeProduct(id){
    return this.http.delete(endpoint + "products/" + id);
  }

  setProduct(product){
    this.product = product;
  }

  setUser(user) {
    this.usr = user;
  }

  updateProduct(id, product){
    return this.http.put(endpoint + "products/" + id, product);
  }
}
