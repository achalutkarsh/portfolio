import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  
  {
    path: '',
    component: ProfessionalComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectComponent
      },{
        path: 'career',
        component: CareerComponent
      },{
        path: 'education',
        component: EducationComponent
      },{
        path: 'about',
        component: AboutComponent
      },{
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
