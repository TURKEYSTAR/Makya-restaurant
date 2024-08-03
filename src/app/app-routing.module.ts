import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/makyatraiteur/admin', pathMatch: 'full' },
  { path: 'makyatraiteur/admin', component: MainComponent},
  { path: 'makyatraiteur/menu', component: MenuComponent },
  { path: 'makyatraiteur/commandes', component: CommandesComponent },
  { path: 'makyatraiteur/clients', component: ClientsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'makyatraiteur/profile', component: ProfileComponent },
  { path: 'makyatraiteur/menu/breackfast', component: BreackfastComponent },
  { path: 'makyatraiteur/menu/plats', component: PlatsComponent },
  { path: 'makyatraiteur/menu/fastfood', component: FastfoodComponent },
  { path: 'makyatraiteur/menu/viennoiseries', component: ViennoiseriesComponent },
  { path: 'makyatraiteur/menu/boissons', component: BoissonsComponent },
  { path: 'makyatraiteur/menu/ajout-categorie', component: AjoutCategorieComponent },
  { path: 'makyatraiteur/menu/ajout-produit/:CategoryName', component: AjoutProduitsComponent },
  { path: 'makyatraiteur/menu/edit-produit/:id', component: EditProduitsComponent },
  { path: 'makyatraiteur/clients/solde', component: SoldeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
