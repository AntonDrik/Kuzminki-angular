import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {isNullOrUndefined} from "util";
import { Products } from "../../content";
import {Divider} from "../../../interfaces";
import {SlickCarouselComponent} from "ngx-slick-carousel";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public ProductID: number;
  public initSlideID: number;
  public category: string;
  public products: any;
  public divider: Divider;

  public titleSlideConfig: object;
  public slideConfig: object;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((val) => this.checkProduct());
  }

  ngOnInit() {

    this.products = Products;
    this.initSlideID = this.products.indexOf(this.products.filter(item => item.title === this.category)[0]);

    this.divider = {
      class: 'divider-catalog',
      imagePath: this.products.map(item => {if (!isNullOrUndefined(item.imagePathDivider)) return item.imagePathDivider}),
      slideConfig: {
        "initialSlide": this.initSlideID,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "dots":false,
        "arrows": false,
        "infinite": false,
        "asNavFor": '.carousel'
      }
    };

    this.titleSlideConfig = {
      "initialSlide": this.initSlideID,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "dots":false,
      "arrows": false,
      "infinite": false,
      "asNavFor": '.carousel'
    };

    this.slideConfig = {
      "initialSlide": this.initSlideID,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "dots":false,
      "arrows": false,
      "infinite": false,
      "asNavFor": '.carousel'
    };

  }

  checkProduct(){
    const child = this.activatedRoute.snapshot.children[0];
    const navigation = this.router.getCurrentNavigation();
    if (child) {
      this.ProductID = child.params['id'];
    }
    else {
      this.ProductID = null;
      this.category = (navigation.extras.state) ? navigation.extras.state['category'] : 'Вареная колбаса';
    }
  }

  loadMore() {

  }
}
