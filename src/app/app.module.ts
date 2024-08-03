import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { BreackfastComponent } from './breackfast/breackfast.component';
import { PlatsComponent } from './plats/plats.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { ViennoiseriesComponent } from './viennoiseries/viennoiseries.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { AjoutProduitsComponent } from './ajout-produits/ajout-produits.component';
import { EditProduitsComponent } from './edit-produits/edit-produits.component';
import { ProfileComponent } from './profile/profile.component';
import { SoldeComponent } from './solde/solde.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    SidebarComponent,
    CommandesComponent,
    ClientsComponent,
    LoginComponent,
    BreackfastComponent,
    PlatsComponent,
    FastfoodComponent,
    ViennoiseriesComponent,
    BoissonsComponent,
    AjoutCategorieComponent,
    AjoutProduitsComponent,
    EditProduitsComponent,
    ProfileComponent,
    SoldeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
