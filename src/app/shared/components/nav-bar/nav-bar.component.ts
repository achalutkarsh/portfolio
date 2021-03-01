import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  showColorBox = false
  backgroundColor: string = '#673ab7'

  constructor(
  ) { }

  ngOnInit(): void {
  }

  updateBackground(value) {
    document.documentElement.style.setProperty('--background', value)
    this.showColorBox = false
  }

}
