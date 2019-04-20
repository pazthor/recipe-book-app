import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Hamburguer' },
      { id: 12, name: 'Taco' },
      { id: 13, name: 'Hotdog' },
      { id: 14, name: 'Sandwich' },
      { id: 15, name: 'Burrito' },
      { id: 16, name: 'Pollo Asado' },
      { id: 17, name: 'Paella' },
      { id: 18, name: 'Cheesecake' },
      { id: 19, name: 'Boneless' },
      { id: 20, name: 'French Fries' }
    ];
    return {recipes};
  }

  // Overrides the genId method to ensure that a recipe always has an id.
  // If the recipes array is empty,
  // the method below returns the initial number (11).
  // if the recipes array is not empty, the method below returns the highest
  // recipe id + 1.
  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 11;
  }
}
