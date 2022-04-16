import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Recipe, OrderType, Quantity } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  /* Public scope variables */
  public tableOrder: OrderType = OrderType.TABLE;
  public packingOrder: OrderType = OrderType.PACKING;

  /* Quantity Type */
  public full: number = 1;
  public half: number = 0.5;
  public double: number = 2;
  
  public defaultCardValue: Recipe = {
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

  /* Outputs */
  @Output() quickOrder = new EventEmitter<Recipe>();


  constructor() {
  }

  ngOnInit(): void {

  }

  /**
   * Provide the current value or card
   */
  get quickOrderItem(): Recipe{
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
  }

  /**
   * Handle order type change
   */
  public onOrderTypeChange( $event: MatRadioChange){
    const { value } = $event;
    this.selectedOrderType = value;
  }

  /**
   * Handle quntity change
   */
  public onQuantityChange( $event: MatRadioChange){
    const { value } = $event;
    this.quantity = value;
  }

  /**
   * Handle custom quantity change
   */
  public onCustomQuantityChange( $event: any ){
    this.quantity = +$event?.target?.value;
  }
}

