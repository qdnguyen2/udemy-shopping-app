import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() childExample: string;
  @Input() element: { type: string, name: string, content: string };
 

  constructor() { }

  ngOnInit(): void {
    // this.element.type = 'server';
    // this.element.name = 'Test server';
    // this.element.content = 'Test Content';
  }

}
