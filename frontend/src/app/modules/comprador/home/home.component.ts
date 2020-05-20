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
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.products = this.userService.products;
    this.allProducts = [];
    this.products.forEach(element => {
      element.products.forEach(prd => {
        console.log(prd);
        this.allProducts.push(prd);
      })
    });
  }

}
