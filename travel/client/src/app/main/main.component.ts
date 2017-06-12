import { Component, OnInit } from '@angular/core';
import { MainService } from "./main.service";
import {Router, ActivatedRoute, Params} from '@angular/router';

import "rxjs"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
      private main_service: MainService,
      private route: ActivatedRoute,
      private router: Router,
  ) { }

  ngOnInit() {

  }


}
