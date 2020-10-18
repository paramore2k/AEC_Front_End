import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titrePrincipal = 'mon-premier-exercice';
  sousTitre = 'mon-premier-sous-titre';
  description = 'Voici le tout premier exercice en Angular pour programmation 3 !';
}
