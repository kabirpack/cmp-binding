import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public counter : any;
  public count : number = 0;

  @Output() onEachCount = new EventEmitter<{count : number}>(); 
  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.counter = setInterval(() => {
      this.count++;
      this.onEachCount.emit({
        count : this.count
      });  
    }, 
    1000);
  }

  onStop(){
    clearInterval(this.counter);
  }

}
