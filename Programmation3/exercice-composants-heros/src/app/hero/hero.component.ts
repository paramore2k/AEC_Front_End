import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {TABHEROS} from '../mock-heros';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  tabObjets: Hero[] = TABHEROS;
  constructor() { }

  ngOnInit(): void {
  }

}
