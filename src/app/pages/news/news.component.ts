import { Component, OnInit } from '@angular/core';
import { Articles } from "../../content";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public articles = Articles;
  public currArticles:any;
  public showArticles: number = 3;
  page = 1;
  public articlesSize: number;

  constructor() {}

  ngOnInit() {
    this.articlesSize = (this.articles.length/this.showArticles)*10;
    this.getArticles(0);
  }

  getArticles(value){
    const notFirst = (value*this.showArticles)-this.showArticles;
    const currArticle = (value) ? notFirst : 0;
    this.currArticles = this.articles.filter((item, index) =>
      index >= currArticle && index < currArticle + this.showArticles
    );
  }
}
