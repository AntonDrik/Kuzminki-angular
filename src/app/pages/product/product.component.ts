import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { Products } from "../../content";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private subscription: Subscription;
  private productID: number;
  public product: any;
  public anotherProducts: any;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=>this.productID=params['id']);
  }

  ngOnInit() {
    Products.filter(category => {
      for (const card of category.cards) {
        if (card.productID === Number(this.productID)) {
          this.product = card;
          this.anotherProducts = category;
          break;
        }
      }
    });
  }

}
