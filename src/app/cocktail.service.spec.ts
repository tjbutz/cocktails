import { of } from 'rxjs';
import { CocktailResponse } from './cocktail.model';
import { CocktailService } from './cocktail.service';
let httpClientSpy: { get: jasmine.Spy };

describe('CocktailService', () => {
  let service: CocktailService;

  beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new CocktailService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call and return the right values', async (done) => {

    const expectedDrinks: CocktailResponse = {
      drinks : [
        {
          idDrink: "1",
          strDrink: "Margarita",
          strIngredient1: "Tequila",
          strIngredient2: "Triple sec",
          strIngredient3: "Lime juice",
          strIngredient4: "Salt",
          strIngredient5: null,
          strIngredient6: null,
          strIngredient7: null,
          strIngredient8: null,
          strIngredient9: null,
          strIngredient10: null,
          strIngredient11: null,
          strIngredient12: null,
          strIngredient13: null,
          strIngredient14: null,
          strIngredient15: null,
          strDrinkThumb : ""
        },
        {
          idDrink: "2",
          strDrink: "Blue Margarita",
          strIngredient1: "Tequila",
          strIngredient2: "Blue Curacao",
          strIngredient3: "Lime juice",
          strIngredient4: "Salt",
          strIngredient5: null,
          strIngredient6: null,
          strIngredient7: null,
          strIngredient8: null,
          strIngredient9: null,
          strIngredient10: null,
          strIngredient11: null,
          strIngredient12: null,
          strIngredient13: null,
          strIngredient14: null,
          strIngredient15: null,
          strDrinkThumb:""
        },
      ]
    };

    httpClientSpy.get.and.returnValue(of(expectedDrinks));

    service.getRecipies("margarita").subscribe(
      data => {
        expect(data).toEqual(expectedDrinks, 'expected heroes');
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
        done();
      },
      fail
    );
  });
});
