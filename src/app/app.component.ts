import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-shopping-app';

  parentExample: string = 'Hello from parent';
  
  serverElements = [
    {
      type: 'server',
      name: 'Test Server',
      content: 'Just a test'
    },
    {
      type: 'blueprint',
      name: 'Test Blueprint',
      content: 'Just a test'
    }
  ];

}
