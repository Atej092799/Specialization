import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() secondInput: number = 0;


  // passEvent(){
  //   this.secondInput();
  // }

  // inputValue = 0;

  subtractEvent(){
    this.secondInput--;
    this.secondInput.toString();
    

  }

  // // Input parameter example
  // numberValue = 0;

  // // Output parameter example
  // isEventReceived = "Not yet!";

  // receiveEvent(){
  //   this.isEventReceived = "Event from SecondComponent received";
  
  }


