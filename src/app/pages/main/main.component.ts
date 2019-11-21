import { Component, OnInit } from '@angular/core';
import { Articles } from "../../content";
import { Products } from "../../content";

@Component({
  selector: 'page-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public dividers = [
      {
        class: 'divider-main',
        title: 'Наши преимущества',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto ex placeat consequuntur ' +
          'laudantium itaque explicabo id nisi at reprehenderit, ab quaerat dolor quibusdam ut?',
        button: 'заказать звонок'
      },
      {
        class: 'divider-advantages',
        title: 'Наши преимущества',
        advantages: [
          'На этом месте могут быть преимущества-0',
          'На этом месте могут быть преимущества-1',
          'На этом месте могут быть преимущества-2',
          'На этом месте могут быть преимущества-3'
        ]
      }
    ];

  public products = Products;
  public articles = Articles.filter((article, index) => index < 3);

  constructor() { }

  ngOnInit() {}

  loadArticles() {
    this.articles.push({
      type: 'articles',
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quos soluta veniam. ' +
        'Aliquam doloribus libero mollitia quisquam sapiente veniam? Eos?',
      date: '25.05.2019',
      link: 'product',
      productID: '5',
      imagePath: '/assets/img/_src/article-1.jpg',
      button: 'подробнее'
    });
  }

}
