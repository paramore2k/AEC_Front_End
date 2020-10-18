import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  hero1 = 'hero1';
  hero2 = 'hero2';
  hero3 = 'hero3';
  constructor() { }

  ngOnInit(): void {
  }

}
