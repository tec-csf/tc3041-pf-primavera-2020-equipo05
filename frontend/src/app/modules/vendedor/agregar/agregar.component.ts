import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Product } from 'src/app/interfaces/product';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  product: Product = {id: 0, name: '', description: '', price: 0, url: 'https://www.eluniversal.com.mx/sites/default/files/2020/02/13/xbox-one-jordan.jpg'};
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.product);
  }
  addProduct(){
    console.log(this.product);
    this.userService.addProduct(this.product);

  }
}
