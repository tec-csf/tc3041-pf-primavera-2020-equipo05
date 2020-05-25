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
  constructor(private router: Router, private userService: UserService) {  }

  ngOnInit(): void {
    this.userService.getCarritoUser().subscribe(carrito => {
      this.carrito = carrito[0];
      this.carrito.products.forEach(element => {
        this.total += element.price;
      });
    });
  }

  onSubmit() {

    alert('Productos comprados');

    this.router.navigateByUrl('/home');
  }

}
