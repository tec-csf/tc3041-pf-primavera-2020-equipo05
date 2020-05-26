import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../../services/user.service';
import {User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {
  user: User = {profile_pic: '', name: '', lname: '', dBirth: '',  country: '', email: '', password: ''};
  constructor(private userService: UserService, private router: Router) { }

  password: string;
  reingresaPassword: string;

  ngOnInit(): void {
    console.log(this.user);
  }

  addUser(){
    if (this.password === this.reingresaPassword) {
      this.user.password = this.password;
      this.userService.addUser(this.user).subscribe(data => {
        alert('Usuario creado');
        this.router.navigateByUrl('/log-in');
      },
      error => {
        console.log(error);
      });
    }
    else {
      alert('Contraseñas no son iguales');

    }

  }

  onSubmit() {
    this.router.navigateByUrl('/log-in');
  }

}
