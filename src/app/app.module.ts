import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './common/footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { HikamComponent } from './hikam/hikam.component';
import { MawakitComponent } from './mawakit/mawakit.component';
import { RecetteComponent } from './recette/recette.component';
import { ConseilComponent } from './conseil/conseil.component';
import { NidamComponent } from './nidam/nidam.component';
import { WasfaComponent } from './wasfa/wasfa.component';
import { DoaaComponent } from './doaa/doaa.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimatedTextComponent } from './components/animated-text/animated-text.component';
import { BenevolatComponent } from './components/benevolat/benevolat.component';
import { HealthComponent } from './components/health/health.component';
import { MealsComponent } from './components/meals/meals.component';
import { HeroComponent } from './components/hero/hero.component';
import { SalimaComponent } from './salima/salima.component';
import { DonComponent } from './don/don.component';
import { DonneurComponent } from './donneur/donneur.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    FooterComponent,
    InscriptionComponent,
    LoginComponent,
    HikamComponent,
    MawakitComponent,
    RecetteComponent,
    ConseilComponent,
    NidamComponent,
    WasfaComponent,
    DoaaComponent,
    CarouselComponent,
    AnimatedTextComponent,
    BenevolatComponent,
    HealthComponent,
    MealsComponent,
    HeroComponent,
    SalimaComponent,
    DonComponent,
    DonneurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
     FormsModule,
    CarouselModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
