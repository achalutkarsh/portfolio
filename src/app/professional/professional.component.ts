import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit, AfterContentChecked, AfterViewInit {

  style: any = null

  @ViewChild('navbarContainer') navbarContainer
  @ViewChild('footerContainer') footerContainer

  title = 'achal';
  navbarHeight: number;
  footerHeight: number;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.router.url === '/professional') {
      this.router.navigate(['professional/home'])
    }
  }

  ngAfterViewInit(): void {
    this.navbarHeight =
      this.navbarContainer.nativeElement.getBoundingClientRect().height
    this.footerHeight =
      this.footerContainer.nativeElement.getBoundingClientRect().height
  }


  ngAfterContentChecked(): void {
    this.style = this.sanitizer.bypassSecurityTrustStyle(`
      --screen-ht: ${document.documentElement.clientHeight}px;
      --screen-width: ${document.documentElement.clientWidth}px;
      --navbar-ht: ${this.navbarHeight}px;
      --footer-ht: ${this.footerHeight}px;
  `)
  }
}



