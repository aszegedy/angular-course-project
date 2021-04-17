import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.module';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lazac',
      'Sült lazac salátaágyon',
      'https://stocksnap.io/photo/G8QICMKLUV/editor',
      [new Ingredient('Lazac', 1), new Ingredient('Saláta', 50)]
    ),
    new Recipe(
      'Csirke',
      'csirke krumplival',
      'https://kep.index.hu/1/0/1752/17523/175233/17523360_f6e98ab53a123b4386a02c23aca6af8e_wm.jpg',
      [new Ingredient('Csirke', 5), new Ingredient('Krumpli', 8)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
