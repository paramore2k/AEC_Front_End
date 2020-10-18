import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProduitsComponent } from './produits/produits.component';
import { ImageProduitComponent } from './image-produit/image-produit.component';
import { InfoProduitComponent } from './info-produit/info-produit.component';
import { PrixProduitComponent } from './prix-produit/prix-produit.component';
import { LienProduitComponent } from './lien-produit/lien-produit.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeroComponent } from './hero/hero.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RechercheComponent,
    ProduitsComponent,
    ImageProduitComponent,
    InfoProduitComponent,
    PrixProduitComponent,
    LienProduitComponent,
    CarouselComponent,
    HeroComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
