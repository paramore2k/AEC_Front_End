import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  @Input() produit: Produit;
  @Input() produit2: Produit;
  constructor() { }

  ngOnInit(): void {
  }

}
