import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  showColorBox = false
  backgroundColor: string = '#673ab7'

  visit = 15

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
    private crudService: CrudService
  ) { }

  ngOnInit(): void {

    // this.updatePageCount()
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

  updatePageCount() {

    const url = 'https://portfolio-bd9c.restdb.io/rest/visits'
    this.crudService.getData(url, {}).then((res: any) => {
      console.log("resp", res)

      const mock = res

      this.visit = mock[0].item + 1 
      mock[0].item = this.visit

      this.crudService.saveData(url, mock).subscribe(
        (res: any) => {
          console.log('success')
        }
      )
    })

  }

}
