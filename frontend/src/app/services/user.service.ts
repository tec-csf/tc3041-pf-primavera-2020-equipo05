import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../interfaces/product';
import * as carritos from '../../../../datasets/carritos.json';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
const endpoint = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  result: any;
  usr: any;
  product: Product;
  carrito: any = (carritos as any).default;
  products: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private router: Router, private http: HttpClient) { }

  addUser(user: any) {
    return this.http.post(endpoint + 'users', user);
  }

  login(user) {
    this.http.post(endpoint + 'login', user).subscribe(data => {
      this.usr = data;
      console.log(this.usr.idUser);
    });
    return this.http.post(endpoint + 'login', user);

  }

  getProducts(i){
    return this.http.get(endpoint + 'allProducts/' + i);
  }

  getProductsUser(user) {
    return this.http.get(endpoint + 'productsUsers/' + user);
  }

  getCarritoUser() {
    return this.http.get(endpoint + 'carrito/' + this.usr);
  }

  getCompraUser() {
    return this.http.get(endpoint + 'compra/' + this.usr);
  }

  validarCompra(validacion: any){
    return this.http.put(endpoint + 'validarCompra/' + this.usr, {validation: validacion});
  }

  getProduct(id) {
    return this.http.get(endpoint + 'products/' + id);
  }

  addProduct(datos: any) {
    delete datos.idProd;
    const prod = Object.assign({idUser: this.usr}, datos);
    return this.http.post(endpoint + 'productsUsers', prod);
  }

  addProductToCarrito(id) {
    console.log('usr' + this.usr.idUser);
    console.log(id);
    return this.http.post(endpoint + 'carrito/' + 1, {idProd: id});
  }

  buyProduct(datos: any) {
    return this.http.post(endpoint + 'compra/' + this.usr, {address: datos});
  }

  removeProductFromCarrito(id) {
    console.log(this.usr);
    console.log(id);
    return this.http.request('delete', endpoint + 'carrito/' + this.usr.idUser, { body: {idProd: id } });
  }

  removeProduct(id){
    return this.http.delete(endpoint + 'products/' + id);
  }

  setProduct(product){
    this.product = product;
  }

  setUser(user) {
    this.usr = user;
  }

  updateProduct(id, product){
    return this.http.put(endpoint + 'products/' + id, product);
  }
}
