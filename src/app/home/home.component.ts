import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  alert: boolean = false;
  char: string = '';

  constructor(private router: Router) {}

  menu() {
    this.router.navigate(['/list', this.char]);
  }

  createAlert() {
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }
}
