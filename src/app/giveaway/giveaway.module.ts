import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {GiveawayRoutingModule} from "./giveaway-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    GiveawayRoutingModule
  ]
})
export class GiveawayModule { }
