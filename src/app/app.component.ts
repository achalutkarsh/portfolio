import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked, AfterViewInit {

  style: any = null

  @ViewChild('navbarContainer') navbarContainer

  title = 'achal';
  navbarHeight: number;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.navbarHeight = 
      this.navbarContainer.nativeElement.getBoundingClientRect().height 
  }


  ngAfterContentChecked(): void {
    this.style = this.sanitizer.bypassSecurityTrustStyle(`
      --screen-ht: ${document.documentElement.clientHeight}px;
      --screen-width: ${document.documentElement.clientWidth}px;
      --navbar-ht: ${this.navbarHeight}px;
  `)
  }
}
