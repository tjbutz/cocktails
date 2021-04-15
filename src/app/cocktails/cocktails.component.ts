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
}
