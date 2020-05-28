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
  total = 0;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.getUser() == null) {
      alert('No has iniciado sesion');
      this.router.navigateByUrl('/log-in');
    }
    else {
      this.userService.getCarritoUser().subscribe(carrito => {
        this.carrito = carrito[0];
        if (this.carrito == null || this.carrito.products === ''){
          alert('Carrito vacio');
          this.router.navigateByUrl('/home');
        }
        else{
          this.carrito.products.forEach(element => {
            this.total += element.price;
          });
        }

      });
  }

  }

  eliminarDelCarrito(id) {
    this.userService.removeProductFromCarrito(id).subscribe(data => {
      alert('Producto eliminado del carrito');
      window.location.reload();
    },
    error => {
      console.log(error);
    });
  }


}
