import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../../services/user.service';
import {Address } from 'src/app/interfaces/address';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  carrito: any;
  total = 0;

  address: Address = {street: '', country: '', state: '', zip: 12345};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.getUser() == null) {
      alert('No has iniciado sesion');
      this.router.navigateByUrl('/log-in');
    }
    else{
      this.userService.getCarritoUser().subscribe(carrito => {
        this.carrito = carrito[0];
        this.carrito.products.forEach(element => {
          this.total += element.price;
        });
      });
    }

  }

  buyItems(){
    this.userService.buyProduct(this.address).subscribe(data => {
      alert('Compra exitosa');
      this.router.navigateByUrl('/validar-compra');
    },
    error => {
      console.log(error);
    });
  }

  onSubmit() {

    alert('Productos comprados');

    this.router.navigateByUrl('/home');
  }

}
