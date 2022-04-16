import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/meterial.module';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from 'src/app/containers/recipe/recipe.component';
import { RecipesComponent } from 'src/app/containers/recipes/recipes.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RecipeComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class DashboardModule {}
