import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces/user';
import {Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: any;
  products: any;
  product: Product;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit():void {
    this.userService.getProductsUser(1).subscribe(productos => {
      this.user = productos[0];
      this.userService.setUser(this.user.idUser);
      this.products = this.user.products
    })
  }

  findElement(index){
    this.product = this.products[index];
    this.userService.removeProduct(this.product.idProd).subscribe(data => {
      alert("Producto eliminado")
      this.router.navigateByUrl('/perfil');
    },
    error => {
      console.log(error);
    });
  }

  findProduct(index){
    this.product = this.products[index];
    this.userService.setProduct(this.product);
  }

}
