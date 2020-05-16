import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';
import {UserService} from '../../../services/user.service';
import {Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  user: User;
  product: Product;
  name: string;
  description: string;
  price: number;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.product = this.userService.product;
  }
  updateProduct(name, description, price){
    this.userService.updateProduct(this.product.id, this.product.name, this.product.description, this.product.price);

  }



}
