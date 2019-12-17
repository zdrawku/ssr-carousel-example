import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule, IgxCarouselModule, IgxGridModule, IgxFocusModule, IgxButtonModule, IgxDialogModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { GridBatchEditingComponent } from './grid-batch-editing/grid-batch-editing.component';
import { GridBatchEditingWithTransactionsComponent } from './grid-batch-editing/grid-transaction.component';
import { DialogComponent } from './dialog/dialog.component';
import { CategoryChartComponent } from './category-chart/category-chart.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts/ES5/igx-category-chart-module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    GridBatchEditingComponent,
    GridBatchEditingWithTransactionsComponent,
    DialogComponent,
    CategoryChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxCarouselModule,
    CommonModule,
    IgxGridModule,
    IgxFocusModule,
    IgxButtonModule,
    IgxDialogModule,
    IgxCategoryChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
