import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgbModule,
    MatGridListModule
  ],
  providers: [NgbRatingConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
