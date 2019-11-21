import {Component, Input, OnInit} from '@angular/core';
import {Breadcrumb} from "../../../interfaces";
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {isNullOrUndefined} from "util";
import {Products} from "../../content";

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: Breadcrumb[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.breadcrumbs = [];
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root));
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '/', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += routeURL;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (!isNullOrUndefined(label)) {
        breadcrumbs.push({label, url});
      }
      else if (child.snapshot.params['id']) {
        const id = child.snapshot.params['id'];
        let label;
        for (const category of Products) {
          category.cards.filter(card => {
            if(card.productID == Number(id)){
              label = card.title;
            }
          });
        }
        breadcrumbs.push({label, url});
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }

}
