import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Product } from 'src/app/interfaces/product';
import {FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  product: Product = {idProd: 0, name: '', condition: '', description: '',  price: 0, url: ''};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.product);
  }
  addProduct(){
    this.userService.addProduct(this.product).subscribe(data => {
      alert('Producto agregado');
      this.router.navigateByUrl('/home');
    },
    error => {
      console.log(error);
    });

  }
}
