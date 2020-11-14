import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { TABHEROS } from '../mock-heros';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */

@Component({
  selector: 'app-grislist',
  templateUrl: './grislist.component.html',
  styleUrls: ['./grislist.component.css']
})
export class GrislistComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Carousel', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Hero 1', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Hero 2', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Hero 3', cols: 1, rows: 1, color: 'lightpink'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
