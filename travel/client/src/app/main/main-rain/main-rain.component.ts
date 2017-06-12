import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-rain',
  templateUrl: './main-rain.component.html',
  styleUrls: ['./main-rain.component.css']
})
export class MainRainComponent implements OnInit {
  time: Date

  constructor() { }

  ngOnInit() {
    this.time=new Date();

    
  }

}
