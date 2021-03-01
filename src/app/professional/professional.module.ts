import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProfessionalComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    NgxUsefulSwiperModule,
    SharedModule
  ]
})
export class ProfessionalModule { }
