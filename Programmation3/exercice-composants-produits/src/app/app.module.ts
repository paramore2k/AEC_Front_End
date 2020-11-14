import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitImageComponent } from './produit-image/produit-image.component';
import { InfoProduitComponent } from './info-produit/info-produit.component';
import { PrixProduitComponent } from './prix-produit/prix-produit.component';
import { LiensDetailsProduitComponent } from './liens-details-produit/liens-details-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ProduitsComponent,
        ProduitImageComponent,
        InfoProduitComponent,
        PrixProduitComponent,
        LiensDetailsProduitComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule
    ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
