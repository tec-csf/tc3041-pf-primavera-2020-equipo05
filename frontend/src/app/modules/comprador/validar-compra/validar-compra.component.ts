import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-compra',
  templateUrl: './validar-compra.component.html',
  styleUrls: ['./validar-compra.component.scss']
})
export class ValidarCompraComponent implements OnInit {
  compra: any;
  validation: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getCompraUser().subscribe(compra => {
      this.compra = compra[0];
    });

  }

  validarCompra() {
    this.userService.validarCompra(this.validation).subscribe(data => {
      alert('Gracias por tu validación');
      this.router.navigateByUrl('/home');
    },
    error => {
      console.log(error);
    });
  }


}
