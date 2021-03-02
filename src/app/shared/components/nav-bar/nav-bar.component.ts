import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  showColorBox = false
  backgroundColor: string = '#673ab7'


  color = [
    {name: 'Deep Purple & Light',
    color1: '#673ab7',
    color2: '#fafafa',
    text: '#252525'
  },
  {name: 'Indigo & Light',
    color1: '#3f51b5',
    color2: '#fafafa',
    text: '#252525'
  },
  {name: 'Pink & Dark',
    color1: '#e91e63',
    color2: '#303030',
    text: '#ffffffb3'
  },
  {name: 'Purple & Dark',
    color1: '#9c27b0',
    color2: '#303030',
    text: '#ffffffb3'
  }
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  updateBackground(value) {
    this.backgroundColor = value.color1
    document.documentElement.style.setProperty('--background1', value.color1)
    document.documentElement.style.setProperty('--background2', value.color2)
    document.documentElement.style.setProperty('--text', value.text)
    this.showColorBox = false
  }

  navigateToHome() {
    this.router.navigate(['professional/home'])
  }

  navigateToProjects() {
    this.router.navigate(['professional/projects'])
  }

  navigateToCareer() {
    this.router.navigate(['professional/career'])
  }

  navigateToEducation() {
    this.router.navigate(['professional/education'])
  }

  navigateToContact() {
    this.router.navigate(['professional/contact'])
  }

  navigateToAbout() {
    this.router.navigate(['professional/about'])
  }

}
