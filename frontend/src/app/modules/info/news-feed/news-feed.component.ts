import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsFeedService} from '../../../services/news-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  feed: any;
  message: string;

  constructor(private router: Router, private newsFeedService: NewsFeedService) {

  }

  ngOnInit(): void {
    this.newsFeedService.getFeed().subscribe(feed => {
      this.feed = feed;
    });

  }

  postFeed() {
    const post = {idUser: 1, message: this.message};
    this.newsFeedService.postFeed(post).subscribe(data => {
      alert('Post creado');
      this.router.navigateByUrl('/home');
    },
    error => {
      console.log(error);
    });
  }

}
