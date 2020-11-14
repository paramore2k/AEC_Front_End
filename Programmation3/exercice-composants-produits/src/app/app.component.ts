import { Component } from '@angular/core';
import {Produit} from './produit';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produit: Produit = {
    id: '1',
    nom: 'Un produit',
    prix: 4,
    description: 'Description du premier produit'
  };
  produit2: Produit = {
    id: '2',
    nom: 'Un second produit',
    prix: 8,
    description: 'Description du second produit'
  };

  title: 'exercice-composants-produits';
}
