import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.products = this.userService.products;
    console.log(this.products);
  }

}
