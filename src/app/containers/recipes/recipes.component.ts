import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  /* Inputs */
  @Input() recipes: Array<Recipe>= [];

  /* Outputs */
  @Output() quickOrder= new EventEmitter<Recipe>();

  constructor(
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  /* Handle Quick order */
  public handleQuickOrder($evnt: Recipe){
    this.quickOrder.emit( $evnt );
  }

}
