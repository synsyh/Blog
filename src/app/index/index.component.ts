import {Component, OnInit} from '@angular/core';
import {posts} from '../db/posts';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts = posts;
  postsTotalNum = posts.length;
  postsNum: number[];
  pageNum: number;
  olderPosts = true;
  newerPosts = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: { pageNum: string }) => {
      this.postsNum = [];
      this.pageNum = parseInt(data.pageNum, 10);
      console.log(this.pageNum);
      if (isNaN(this.pageNum)) {
        this.router.navigate(['articles/page/0']);
      }
      if (this.pageNum === undefined) {
        this.pageNum = 0;
      }
      if (this.pageNum !== Math.round(this.postsTotalNum / 5)) {
        this.olderPosts = true;
      }
      this.newerPosts = this.pageNum !== 0;
      for (let i = 0; i < 5; i++) {
        const postNum = this.pageNum * 5 + i;
        if (postNum === this.postsTotalNum) {
          this.olderPosts = false;
          break;
        }
        this.postsNum[i] = postNum;
      }
    }, error => {
      console.log(error);
    });
  }

  paginator(n): void {
    this.pageNum = this.pageNum * 1 + 1 * n;
    this.router.navigate(['articles/page/' + this.pageNum]);
  }


}
