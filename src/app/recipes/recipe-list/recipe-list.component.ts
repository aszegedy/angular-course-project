import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://stocksnap.io/photo/G8QICMKLUV/editor'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://stocksnap.io/photo/G8QICMKLUV/editor'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
