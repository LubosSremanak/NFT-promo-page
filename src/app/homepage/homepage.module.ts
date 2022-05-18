import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage.component';
import {HeroComponent} from "./hero/hero.component";
import {StoryComponent} from "./story/story.component";
import {BackgroundAnimationComponent} from "./background-animation/background-animation.component";
import {SlideshowAnimationComponent} from "./slideshow-animation/slideshow-animation.component";
import {SlideshowComponent} from "./slideshow/slideshow.component";
import {AboutComponent} from "./about/about.component";
import {SharedModule} from "../shared/shared.module";
import {HomepageRoutingModule} from "./homepage-routing.module";
import {FixedBackgroundComponent} from "./about/fixed-background/fixed-background.component";


@NgModule({
  declarations: [
    HomepageComponent,
    HeroComponent,
    StoryComponent,
    BackgroundAnimationComponent,
    FixedBackgroundComponent,
    SlideshowAnimationComponent,
    SlideshowComponent,
    AboutComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule {
}
