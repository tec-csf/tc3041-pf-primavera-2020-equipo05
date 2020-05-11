import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isHomeView() {
    // return true if the current page is home
    if (this.router.url.match('^/$')) {
      return this.router.url.match('^/$');
    }
    else if (this.router.url.match('^/home$')) {
      return this.router.url.match('^/home$');
    }
  }

}
