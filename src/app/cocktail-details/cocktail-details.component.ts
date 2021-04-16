import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  cocktail : Cocktail;

  constructor(private cocktailService:CocktailService, route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    
    id.subscribe(currentID => {
      var obs = this.cocktailService.getRecipe(currentID)
      obs.subscribe(data => {
        this.cocktail = data.drinks[0];
      },(err) => {
        console.log("Error:", err);
      },
      () => {
        console.log("Obs completed");
      })
    });
  }

  ngOnInit(): void {
  }

}
