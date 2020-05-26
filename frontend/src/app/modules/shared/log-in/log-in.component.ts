import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  idUser: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data => {
      console.log(data);
      this.idUser = data;
      console.log(this.idUser.idUser);
      this.router.navigateByUrl('/home');
    },
    error => {
      alert(error.error.message);
    });
  }

}
