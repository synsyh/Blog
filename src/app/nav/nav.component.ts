import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  articlesIsActive: boolean;
  publicationsIsActive: boolean;
  aboutIsActive: boolean;

  constructor() {
    this.articlesIsActive = true;
    this.publicationsIsActive = false;
    this.aboutIsActive = false;
  }

  ngOnInit(): void {
  }

  public test(): void {
    console.log('test');
  }

  public setActive(activeNum: number): void {
    switch (activeNum) {
      case 0:
        this.articlesIsActive = true;
        this.aboutIsActive = false;
        this.publicationsIsActive = false;
        break;
      case 1:
        this.publicationsIsActive = true;
        this.aboutIsActive = false;
        this.articlesIsActive = false;
        break;
      case 2:
        this.aboutIsActive = true;
        this.publicationsIsActive = false;
        this.articlesIsActive = false;
        break;
    }
  }

}
