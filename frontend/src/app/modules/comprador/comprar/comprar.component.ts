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
  constructor(private router: Router,private userService: UserService) {  }

  ngOnInit(): void {
    this.carrito = this.userService.carrito[1];
    console.log(this.carrito);
  }

  onSubmit() {

    alert('Producto comprado');

    this.router.navigateByUrl('/home');
  }

}
