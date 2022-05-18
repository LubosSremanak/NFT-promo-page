import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GiveawayComponent} from "./giveaway.component";


const routes: Routes = [
  {path: '', component: GiveawayComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveawayRoutingModule {
}
