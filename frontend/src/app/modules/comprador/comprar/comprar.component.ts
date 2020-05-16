import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

  onSubmit() {

    alert('Producto comprado');

    this.router.navigateByUrl('/home');
  }

}
