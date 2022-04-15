import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { OrderType, Card } from 'src/app/model/card.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /* Public scope variables */
  public tableOrder: OrderType = OrderType.TABLE;
  public packingOrder: OrderType = OrderType.PACKING;
  public defaultCardValue: Card = {
    title: '',
    imageUrl: '',
    uri: '',
    price: 0,
    quantity: 1,
    orderType: OrderType.TABLE
  }

  /* Inputes */
  @Input() imageUrl: string = this.defaultCardValue.imageUrl;
  @Input() title: string = this.defaultCardValue.title;
  @Input() price: number = this.defaultCardValue.price;
  @Input() quantity: number = this.defaultCardValue.quantity;
  @Input() selectedOrderType: OrderType = this.defaultCardValue.orderType;
  @Input() uri: string = this.defaultCardValue.uri;

  /* Output Event */
  @Output() quickOrder = new EventEmitter<Card>();

  

  constructor() {
  }

  ngOnInit(): void {

  }

  /**
   * Provide the current value or card
   */
  get quickOrderItem(): Card{
    return {
      title: this.title,
      imageUrl: this.imageUrl,
      uri: this.uri,
      price: this.price,
      quantity: this.quantity,
      orderType: this.selectedOrderType
    }
  }

  /**
   * Reset the order type and quantity of card
   */
  reset(): void{
    this.quantity = this.defaultCardValue.quantity;
    this.selectedOrderType = this.defaultCardValue.orderType;
  }

  /**
   * Emmit event to the parent component
   */
  public onQuickOrder(){
    this.quickOrder.emit( this.quickOrderItem );
    this.reset();
  }

  /**
   * Handle order type change
   */
  onOrderTypeChange( $event: MatRadioChange){
    const { value } = $event;
    this.selectedOrderType = value;
  }

}
