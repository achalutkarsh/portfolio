import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/professional' },
  {path:'professional', component: ProfessionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
