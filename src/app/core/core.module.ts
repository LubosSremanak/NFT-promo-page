import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './story/card/card.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { StoryComponent } from './story/story.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import {LottieModule} from "../shared/lottie-ls/lottie.module";
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';
import { SlideshowAnimationComponent } from './slideshow-animation/slideshow-animation.component';

@NgModule({
  declarations: [
    CardComponent,
    FooterComponent,
    SlideshowComponent,
    StoryComponent,
    HeroComponent,
    AboutComponent,
    NavigationComponent,
    BackgroundAnimationComponent,
    SlideshowAnimationComponent,
  ],
    exports: [
        CardComponent,
        FooterComponent,
        SlideshowComponent,
        StoryComponent,
        HeroComponent,
        AboutComponent,
        NavigationComponent,
        BackgroundAnimationComponent,
    ],
    imports: [CommonModule, SharedModule, AppRoutingModule, LottieModule],
})
export class CoreModule {}
