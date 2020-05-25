import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  allProducts: any;
  currentPage: number;
  pages: number;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getProducts(1).subscribe(productos => {
      this.products = productos;
      this.currentPage = this.products.currentPage;
      this.pages = this.products.pages;
      console.log(this.products);
      this.allProducts = [];
      this.products.products.forEach(element => {
        element.products.forEach(prd => {
          console.log(prd);
          this.allProducts.push(prd);
        })
      });
    })

  }

  getProductsPage(i) {
    this.userService.getProducts(i).subscribe(productos => {
      this.products = productos;
      this.currentPage = this.products.currentPage;
      this.pages = this.products.pages;
      console.log(this.products);
      this.allProducts = [];
      this.products.products.forEach(element => {
        element.products.forEach(prd => {
          console.log(prd);
          this.allProducts.push(prd);
        })
      });
    })
  }

  agregarAlCarrito(id) {
    this.userService.addProductToCarrito(id).subscribe(data => {
      alert("Producto agregado al carrito")
    },
    error => {
      console.log(error)
    });
  }

}
