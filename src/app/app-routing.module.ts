import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./homepage/homepage.module').then((module) => module.HomepageModule),
  },
  {
    path: 'giveaway',
    loadChildren: () =>
      import('./giveaway/giveaway.module').then((module) => module.GiveawayModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./gallery/gallery.module').then((module) => module.GalleryModule),
  },

  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
