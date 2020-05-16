import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces/user';
import {Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: User;
  product: Product;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.users[0];
    console.log(this.user.products);
  }
  findElement(i){
    this.userService.removeProduct(i);
  }
  findProduct(index){
    this.userService.findProduct(index);
    this.product = this.user.products[index];
  }

}
