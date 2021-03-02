import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: any

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

  constructor() { }

  ngOnInit(): void {

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

  }

}
