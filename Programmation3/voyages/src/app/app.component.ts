import {Component, Input} from '@angular/core';
import { Forfait} from './forfait';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(config: NgbRatingConfig) {
    // customize default values of ratings used by this component tree
    config.max = 5;
    config.readonly = true;
  }

  title = 'voyages';
}
