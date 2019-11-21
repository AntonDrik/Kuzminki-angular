import {Component, Input, OnInit} from '@angular/core';
import {Divider} from "../../../interfaces";
// import {divider} from "../../interfaces";

@Component({
  selector: 'divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {

  @Input() public data: Divider;

  constructor() { }

  ngOnInit() {}

}
