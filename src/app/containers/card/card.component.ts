import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() quantity: number = 1;

  @Output() quickOrder = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit(): void {

  }

  onQuickOrder(){
    this.quickOrder.emit('hello');
  }

}
