import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {
  articleData: any = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getServiceCall('apiKey=d948c11e91b04de9bbcd5bb0065a395c&language=en' , 'topHeadlines');
  }

  getServiceCall(params, url) {
    this.api.getService(params, url).subscribe(
      res => {
        this.articleData = res.articles;
      },
      err => {
        console.log(err);
      }
    )
  }

  getNews(index) {
    this.articleData = [];
    if (index === 0) {
      this.getServiceCall('apiKey=d948c11e91b04de9bbcd5bb0065a395c&language=en' , 'topHeadlines');
    } else if (index === 1) {
      this.getServiceCall(`apiKey=d948c11e91b04de9bbcd5bb0065a395c&country=in` , 'topHeadlines');
    } else if (index === 2) {
      this.getServiceCall(`apiKey=d948c11e91b04de9bbcd5bb0065a395c&country=in&category=business` , 'topHeadlines');
    } else if (index === 3) {
      this.getServiceCall(`apiKey=d948c11e91b04de9bbcd5bb0065a395c&country=in&category=technology` , 'topHeadlines');
    } else if (index === 4) {
      this.getServiceCall(`apiKey=d948c11e91b04de9bbcd5bb0065a395c&country=in&category=entertainment` , 'topHeadlines');
    }
  }

}
