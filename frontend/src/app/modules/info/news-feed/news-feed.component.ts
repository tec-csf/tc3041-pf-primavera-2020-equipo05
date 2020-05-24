import { Component, OnInit } from '@angular/core';
import {NewsFeedService} from '../../../services/news-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  feed: any;

  constructor(private newsFeedService: NewsFeedService) {

  }

  ngOnInit(): void {
    this.newsFeedService.getFeed().subscribe(feed => {
      this.feed = feed
    })

  }

}
