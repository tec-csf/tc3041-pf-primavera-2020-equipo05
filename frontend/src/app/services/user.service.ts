import { Injectable } from '@angular/core';
import * as data from '../../data/data.json';
import { Router } from '@angular/router';
import {Product} from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  datos: any = (data as any).default;
  products: any = data.products;
  users: any = data.users;
  userProducts: any = this.users[0].products;
  product: Product;

  constructor(private router: Router) { }

  addProduct(datos: any) {
    this.products.push(datos);
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
