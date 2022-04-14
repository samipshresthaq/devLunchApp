import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardComponent } from 'src/app/containers/card/card.component';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from 'src/app/meterial.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule {}
