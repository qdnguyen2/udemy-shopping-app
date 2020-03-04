import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //Note: to pass data from the child component to the parent component
  @Output() serverCreated =  new EventEmitter<{serverName: string, serverContent: string}>();  
  @Output() dangerCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueDataCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() resetData = new EventEmitter<{clearDate: boolean}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  
  }

  /*Note: these  */
  onAddServer(){
    console.log("cockpit.component.onAddServer called: $$$$$$$$$$$$$$");
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddDanger(){
    console.log("cockpit.component.onAddDanger called: $$$$$$$$$$$$$$");
    this.dangerCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onAddBlueData(){
    console.log("cockpit.component.onAddBlueData called: $$$$$$$$$$$$$$");
    this.blueDataCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  onResetData(){
    console.log("cockpit.component.onResetData called: $$$$$$$$$$$$$$");
    this.resetData.emit({
      clearDate: true
    })
  }

}
