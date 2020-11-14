import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {TABHEROS} from '../mock-heros';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  tabObjets: Hero[] = TABHEROS;
  last: any;
  constructor() { }

  ngOnInit(): void {
  }

}
