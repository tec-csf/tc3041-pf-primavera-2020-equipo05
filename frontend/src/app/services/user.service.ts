import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../interfaces/product';
import * as carritos from '../../../../datasets/carritos.json';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map, catchError, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
const endpoint = 'http://localhost:8080/api/';
let userDB;

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
      userDB = this.usr.idUser;
      console.log(this.usr.idUser);
    });
    return this.http.post(endpoint + 'login', user);
  }

  logout() {
    userDB = '';
    return this.http.get(endpoint + 'logout');
  }

  getProducts(i){
    return this.http.get(endpoint + 'allProducts/' + i);
  }

  getProductsUser(user) {
    return this.http.get(endpoint + 'productsUsers/' + user);
  }

  getCarritoUser() {
    console.log('userDB: ' + userDB);
    return this.http.get(endpoint + 'carrito/' + userDB);
  }

  getCompraUser() {
    console.log('userDB: ' + userDB);
    return this.http.get(endpoint + 'compra/' + 1);
  }

  validarCompra(validacion: any, comentario: any){
    console.log('userDB: ' + userDB);
    return this.http.put(endpoint + 'validarCompra/' + 1, {validation: validacion, comment: comentario});
  }

  getProduct(id) {
    return this.http.get(endpoint + 'products/' + id);
  }

  addProduct(datos: any) {
    delete datos.idProd;
    console.log('userDB: ' + userDB);
    const prod = Object.assign({idUser: userDB}, datos);
    return this.http.post(endpoint + 'productsUsers', prod);
  }

  addProductToCarrito(id) {
    console.log('usr' + this.usr.idUser);
    console.log(id);
    return this.http.post(endpoint + 'carrito/' + 1, {idProd: id});
  }

  buyProduct(datos: any) {
    return this.http.post(endpoint + 'compra/' + 1, {address: datos});
  }

  removeProductFromCarrito(id) {
    console.log(this.usr);
    console.log(id);
    console.log('userDB: ' + userDB);
    return this.http.request('delete', endpoint + 'carrito/' + userDB, { body: {idProd: id } });
  }

  removeProduct(id){
    return this.http.delete(endpoint + 'products/' + id);
  }

  setProduct(product){
    this.product = product;
  }

  getUser() {
    console.log('userDB: ' + userDB);
    return userDB;
  }

  setUser(user) {
    this.usr = user;
  }

  updateProduct(id, product){
    return this.http.put(endpoint + 'products/' + id, product);
  }
}
