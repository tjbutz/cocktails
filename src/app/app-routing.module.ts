import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailsComponent } from './cocktails/cocktails.component';

const routes: Routes = [
  { path: "cocktails", component: CocktailsComponent },
  { path: "cocktails/:id", component: CocktailDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
