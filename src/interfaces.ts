import {Params} from "@angular/router";

export interface Links {
  caption: string;
  link: string;
}

export interface Breadcrumb {
  label: string;
  url: string;
}

export interface Card {
  type: string;
  link: string;
  imagePath: string;
  title: string;
  productID?: string;
  date?: string;
  text?: string;
  button?: string;
}

export interface Divider {
  class: string;
  imagePath?: [];
  title?: string;
  text?: string;
  button?: string;
  advantages?: [];
  slideConfig?: object;
}
