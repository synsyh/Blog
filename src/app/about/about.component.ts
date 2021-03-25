import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutUrl: string;

  constructor() {
  }

  ngOnInit(): void {
    this.aboutUrl = 'assets/README.md';
  }

}
