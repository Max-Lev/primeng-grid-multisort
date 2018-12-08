import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { GridComponent } from './shared/components/grid/grid.component';
import { MatSortModule } from '@angular/material';
import { MultiSortDirective } from './shared/directives/multi-sort.directive';
import { PrimeGridComponent } from './shared/components/prime-grid/prime-grid.component';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    MultiSortDirective,
    PrimeGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
