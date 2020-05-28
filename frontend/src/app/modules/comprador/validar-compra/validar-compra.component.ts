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
  validation: boolean;
  comment: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.getUser() == null) {
      alert('No has iniciado sesion');
      this.router.navigateByUrl('/log-in');
    }
    else{
      this.userService.getCompraUser().subscribe(compra => {
        this.compra = compra[0];
      });
    }

  }

  validarCompra() {
    this.validation = (document.getElementById('validation') as HTMLInputElement).checked;
    this.userService.validarCompra(this.validation, this.comment).subscribe(data => {
      alert('Gracias por tu validación');
      this.router.navigateByUrl('/home');
    },
    error => {
      console.log(error);
    });
  }


}
