import { Injectable, OnDestroy } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnDestroy {

  constructor(
    private readonly http: HttpClient,
    private readonly environment: EnvironmentService
  ) { }

  public getAllRecipes(): Observable<Array<Recipe>>{
    return this.http.get<Array<Recipe>>( this.environment.getResetUrl('recipes'));
  };

  public getRecipe( id: number ): Observable<Recipe>{
    return this.http.get<Recipe>(this.environment.getResetUrl(`recipes/${id}`));
  };

  ngOnDestroy(): void {
  }

}

