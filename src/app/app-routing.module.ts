import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './core/story/card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: ':id', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
