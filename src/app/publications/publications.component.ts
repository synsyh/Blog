import {Component, OnInit} from '@angular/core';
import {NavComponent} from '../nav/nav.component';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publicationsUrl: string;

  constructor() {
  }

  ngOnInit(): void {
    this.publicationsUrl = 'posts/publications.md';
  }

}
