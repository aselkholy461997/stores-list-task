import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/stores',
  },
  {
    path: 'stores',
    loadChildren: () =>
      import('./modules/stores/stores.module').then((m) => m.StoresModule),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
