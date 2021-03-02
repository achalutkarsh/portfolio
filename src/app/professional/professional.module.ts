import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { CareerComponent } from './career/career.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [ProfessionalComponent, HomeComponent, ProjectComponent, CareerComponent, EducationComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    NgxUsefulSwiperModule,
    SharedModule
  ]
})
export class ProfessionalModule { }
