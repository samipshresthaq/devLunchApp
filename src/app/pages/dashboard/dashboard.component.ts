import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  handleQuickOrder($event: Card){
    console.log($event,'string');
  }

}
