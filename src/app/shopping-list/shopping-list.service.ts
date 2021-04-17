import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return [...this.ingredients];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }
  addIngredients(ingredients: Ingredient[]) {
    //   for(let ingredient of ingredients) {
    //       this.addIngredient(ingredient;)
    //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
