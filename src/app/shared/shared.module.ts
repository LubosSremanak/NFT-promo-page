import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from './lottie-ls/lottie.module';
import { Carousel3dComponent } from './carousel3d/carousel3d.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [Carousel3dComponent, CardComponent],
  imports: [CommonModule, LottieModule, MatIconModule],
  exports: [
    Carousel3dComponent,
    MatIconModule,
    NgxScrollTopModule,
    CardComponent,
  ],
})
export class SharedModule {}
