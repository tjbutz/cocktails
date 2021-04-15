import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  constructor( private cocktailService:CocktailService) { }

  cocktails: Cocktail[]

  ngOnInit(): void {
    var obs = this.cocktailService.GetRecipies("margarita")
    obs.subscribe(data => {
      console.log(data)
      this.cocktails = data.drinks
      console.log(data.drinks)
    },(err) => {
      console.log("Error:", err);
    },
    () => {
      console.log("Obs completed");
    })
  }

  getIngredientsList(item: Cocktail): string {
    let ingredients = [];
    for (let index =1; index <= 15; index++) {
      if(item[`strIngredient${index}`]) {
        ingredients.push(item[`strIngredient${index}`]) 
      }
      console.log(item[`strIngredient${index}`])
      console.log(item)
    }
    return ingredients.join(",")
  }
}
