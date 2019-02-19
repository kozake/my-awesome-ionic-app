import { HighlightDirective } from './../../directives/highlight.directive';
import { IonicModule } from '@ionic/angular';
import { BeerComponent } from './../../components/beer/beer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BeerComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BeerComponent,
    HighlightDirective
  ]
})
export class AppCommonModule { }
