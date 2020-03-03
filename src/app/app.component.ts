import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-shopping-app';
 
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

  onServerAdded(serverData:{ serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // onBlueprintAdded(bluePrintData:{ serverName: string, serverContent: string}){
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: bluePrintData.serverName,
  //     content: bluePrintData.serverContent
  //   });
  // }

  onBlueprintAdded(blueData:{ serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueData.serverName,
      content: blueData.serverContent
    });
  }

  onDangerAdded(dangerData:{ serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: dangerData.serverName,
      content: dangerData.serverContent
    });
  }

  onBlueDataAdded(blueData:{ serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name: blueData.serverName,
      content: blueData.serverContent
    });
  }

}
