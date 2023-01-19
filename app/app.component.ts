import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to SecondActivity...';
  numberValue = 0;
  InputValue = "";
  // numberValue= 0;

  // sampleClick(){
  //   console.log(this.InputValue)
  // };


  // // Two-way binding example
  // inputValue = 0; 

  addEvent(){
    this.numberValue++;
    this.numberValue.toString();
  }

  subtractEvent(){
    this.numberValue--;
    this.numberValue.toString();
  }

  // // Input parameter example
  // numberValue = 10;

  // // Output parameter example
  // isEventReceived = "Not yet!";

  // receiveEvent(){
  //   this.isEventReceived = "Event from SecondComponent received";
  }




