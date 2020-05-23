import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carrito: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.carrito = this.userService.carrito[1];
    console.log(this.carrito);
  }
  onSubmit() {

    alert('Procediendo al pago');

    this.router.navigateByUrl('/home');
  }


}
