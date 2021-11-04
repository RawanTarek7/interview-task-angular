import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { allAppRoutes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
