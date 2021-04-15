import { TestBed } from '@angular/core/testing';
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
});
