import {Component, Input, OnInit} from '@angular/core';
import {Forfait} from '../forfait';
import {TABLEAUFORFAITS} from '../mock-forfaits';


@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  tableauforfait: Forfait[] = TABLEAUFORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
