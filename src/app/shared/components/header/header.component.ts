import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  type: string = 'home'

  currentRouterURL: string

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        this.currentRouterURL = this.router.url

        this.updateHeader()
      }
    })

    this.currentRouterURL = this.router.url.split('?')[0]
    this.updateHeader()


  }

  updateHeader() {

    if (this.currentRouterURL === '/professional') {
      this.type = 'Home'
    } else if (this.currentRouterURL === '/professional/home') {
      this.type = 'Home'
    } else if (this.currentRouterURL === '/professional/projects') {
      this.type = 'Projects'
    } else if (this.currentRouterURL === '/professional/career') {
      this.type = 'Career'
    } else if (this.currentRouterURL === '/professional/education') {
      this.type = 'Education'
    } else if (this.currentRouterURL === '/professional/about') {
      this.type = 'About'
    } else if (this.currentRouterURL === '/professional/contact') {
      this.type = 'Contact'
    } else {
      this.type = 'Error 404: Page Not Found'
    }


  }

  navigateToContact() {
    this.router.navigate(['professional/contact'])
  }
}
