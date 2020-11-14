import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../produit';


@Component({
  selector: 'app-produit-image',
  templateUrl: './produit-image.component.html',
  styleUrls: ['./produit-image.component.css']
})
export class ProduitImageComponent implements OnInit {
  @Input() produit: Produit;
  @Input() produit2: Produit;
  @Input() prix: string;
  constructor() { }

  ngOnInit(): void {
  }

}
