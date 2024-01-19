import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'barkeep';
  show: boolean = false;

  showMenu() {
    this.show = !this.show;
  }
}
