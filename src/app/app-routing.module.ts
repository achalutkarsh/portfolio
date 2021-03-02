import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/professional' },
  { path: 'professional', pathMatch: 'full', redirectTo: 'professional/home' },
  {
    path: 'professional',
    loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule),
  },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
