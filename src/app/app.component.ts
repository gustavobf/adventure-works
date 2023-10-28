import { Component } from '@angular/core';
import { CONSTANT_WORKS } from 'src/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adventure-works';

  content = CONSTANT_WORKS;

}
