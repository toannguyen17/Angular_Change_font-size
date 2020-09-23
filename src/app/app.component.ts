import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'overview2';
  fontSize = 14;
  // tslint:disable-next-line:typedef
  onChange(value) {
    this.fontSize = value;
  }
}
