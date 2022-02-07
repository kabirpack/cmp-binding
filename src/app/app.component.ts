import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counterComponents = [];

  onCountIncreased(countData : { count : number}){

    if( countData.count % 2 == 0){
      this.counterComponents.push({
        compType : 'even',
        count : countData.count
      })
    }
    if(countData.count % 2 == 1){
      this.counterComponents.push({
        compType : 'odd',
        count : countData.count
      })
    }
  }
}
