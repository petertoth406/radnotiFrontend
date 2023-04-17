import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'radnotiLoginApp';

  constructor(private router: Router) {}

  navLogin() {
    this.router.navigate(['login']);
  }
}
