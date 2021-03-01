import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  data: any
  projects: any
  projectData: any

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    loop: true,
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: 30
  };

  skills = [
    'assets/image/ndi.png',
    'assets/image/vit.png',
    'assets/image/ndi.png'
  ]

  swiperConfig: SwiperOptions = {
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
  }

  constructor() { }

  ngOnInit(): void {

    this.data = [
      {
        title: 'ACHAL UTKARSH',
        // synopsis: '',
        // endNote: ''
      },
      {
        title: 'UI-Developer',
        // synopsis: 'checking new',
        // endNote: 'new new new '
      },
    ]

    this.projects = [
      {
        title: 'Sales App',
        description: 'It helps to view global finances and performance metrics in the form of various bar & area charts for all Nissan vehicle segments with features to filter a/c to day, month, year, market & model.',
        keys: 'Angular, Cordova, D3.js'
      },
      {
        title: 'Feedback Library',
        description: 'Imported over many applications around Nissan, hosted over their private repo, primarily to receive feedback & queries from the users.',
        keys: 'Angular'
      },
      {
        title: 'Small Events (Module)',
        description: 'It allows users to create a new type of vehicle in the market or edit the existing one with a new model.',
        keys: 'Angular, Slider, Timeline'
      },
      {
        title: 'Product Planning Tool',
        description: 'Timeline for modification of data, charts representing sales & volume across different markets and specific models with features to have different combination of model families.',
        keys: 'Angular, D3.js'
      },
    ]

    this.projectData = [
      {
        name: 'Sales App',
        value: 25,
        color: 'red',
        description: 'It helps to view global finances and performance metrics in the form of various bar & area charts for all Nissan vehicle segments with features to filter a/c to day, month, year, market & model.',
        keys: 'Angular, Cordova, D3.js',
        timeline: ' Jul 2020 - active'
      },
      {
        name: 'Feedback Library',
        value: 25,
        color: 'green',
        description: 'Imported over many applications around Nissan, hosted over their private repo, primarily to receive feedback & queries from the users.',
        keys: 'Angular',
        timeline: 'Nov 2020 - active'
      },
      {
        name: 'Small Events (Module)',
        value: 25,
        color: 'yellow',
        description: 'It allows users to create a new type of vehicle in the market or edit the existing one with a new model.',
        keys: 'Angular, Slider, Timeline',
        timeline: 'Mar 2020 - Jul 2020'
      },
      {
        name: 'Planning Tool',
        value: 25,
        color: 'blue',
        description: 'Timeline for modification of data, charts representing sales & volume across different markets and specific models with features to have different combination of model families.',
        keys: 'Angular, D3.js',
        timeline: 'Aug 2019 - Jul 2020'
      },
    ]

  }

}
