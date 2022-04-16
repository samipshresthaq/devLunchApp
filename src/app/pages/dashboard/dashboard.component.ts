import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public recipes: Array<Recipe> = [];

  private destorySub: Subject<void> = new Subject<void>();
  private destoryObs: Observable<void> = this.destorySub.asObservable();
  constructor(
    private readonly recipesService: RecipesService,
    private readonly _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  handleQuickOrder($event: Recipe){
    console.log($event,'Object');
    this._snackBar.open(`Your ${$event.title} is added on Order List`, 'Close');
  }

  /**
   * Fetch the available recipes from API
   * and set on local scope
   */
  private fetchRecipes(): void{
    this.recipesService.getAllRecipes()
    .pipe(
      takeUntil(this.destoryObs)
    )
    .subscribe( (recipes: Array<Recipe>) =>{
      console.log(recipes, 'recipes');
      this.recipes = recipes;
    })
  }

  ngOnDestroy(): void {
      this.destorySub.next();
  }

}
