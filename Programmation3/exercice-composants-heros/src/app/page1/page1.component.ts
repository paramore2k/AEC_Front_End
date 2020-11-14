import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {TABHEROS} from '../mock-heros';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  tabObjets: Hero[] = TABHEROS;
  constructor() { }

  ngOnInit(): void {
  }

}
