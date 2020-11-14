import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GrislistComponent } from './grislist/grislist.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RechercheComponent,
        CarouselComponent,
        HeroComponent,
        Page1Component,
        Page2Component,
        SidenavComponent,
        ToolbarComponent,
        GrislistComponent
    ],
    imports: [
      MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatSidenavModule,
      MatDividerModule,
      MatGridListModule,
      MatListModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
