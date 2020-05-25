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
  condition: string;
  price: number;
  url: string;

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.product = this.userService.product;
  }

  updateProduct(){
    const newProduct = {
      name: this.name,
      condition: this.condition,
      description: this.description,
      price: this.price,
      url: this.product.url};

    this.userService.updateProduct(this.product.idProd, this.product).subscribe(data => {
      alert("Producto editado")
      this.router.navigateByUrl('/perfil');
    },
    error => {
      console.log(error);
    });

  }

}
