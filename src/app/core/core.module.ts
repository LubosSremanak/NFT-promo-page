import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LottieModule} from "../shared/lottie-ls/lottie.module";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
  ],
    imports: [CommonModule, SharedModule, LottieModule, AppRoutingModule],
})
export class CoreModule {}
