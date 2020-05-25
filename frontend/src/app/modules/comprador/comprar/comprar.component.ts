import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  carrito: any;
  total = 0;
  constructor(private router: Router,private userService: UserService) {  }

  ngOnInit(): void {
    this.userService.getCarritoUser().subscribe(carrito => {
      this.carrito = carrito[0];
      for (let index = 0; index < this.carrito.products.length; index++) {
        this.total += this.carrito.products[index].price;
        console.log("Price "+ this.carrito.products[index].price);
      }
    });
  }

  onSubmit() {

    alert('Productos comprados');

    this.router.navigateByUrl('/home');
  }

}
