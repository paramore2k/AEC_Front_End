import {Component, Input, OnInit} from '@angular/core';
import {Forfait} from '../forfait';
import {TABLEAUFORFAITS} from '../mock-forfaits';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
  tableauforfait: Forfait[] = TABLEAUFORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
