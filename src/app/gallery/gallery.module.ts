import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryRoutingModule} from "./gallery-routing.module";
import {SharedModule} from "../shared/shared.module";
import {GalleryComponent} from "./gallery.component";



@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
  ]
})
export class GalleryModule { }
