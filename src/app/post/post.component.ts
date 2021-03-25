import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private postId: number;
  public postUrl;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: { id: number }) => {
      console.log(data);
      this.postId = data.id;
      this.postUrl = 'posts/' + this.postId + '.md';
    });
  }

}
