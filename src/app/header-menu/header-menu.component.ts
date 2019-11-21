import {Component, Input, OnInit} from '@angular/core';
import {Links} from "../../interfaces";
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({height: '0px'}),
        animate('200ms', style({height: '100px'}))
      ]),
      transition(':leave', [
        animate('200ms', style({height: '0px'}))
      ])
    ])
  ],
  host: {
    '(window:resize)': 'toggleMenu(true)'
  }
})
export class HeaderMenuComponent implements OnInit {

  @Input() public links: Links[];
  public isVisible = true;

  constructor() { }

  ngOnInit() {
    this.toggleMenu(false);
  }

  toggleMenu(resize) {
    if (window.innerWidth > 768) {
      this.isVisible = true;
    }
    else {
      if (!resize) {
        this.isVisible = !this.isVisible;
      }
      else {
        this.isVisible = false;
      }
    }


  }

}
