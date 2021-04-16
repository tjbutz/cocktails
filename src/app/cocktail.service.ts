import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailResponse } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getRecipies(searchTerm:string) : Observable<CocktailResponse> {
    return this.http.get<CocktailResponse>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
  }
}
