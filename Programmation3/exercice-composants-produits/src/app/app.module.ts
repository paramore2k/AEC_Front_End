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
        AppRoutingModule
    ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
