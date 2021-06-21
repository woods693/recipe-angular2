import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe';
import { RecipeService } from '../recipe.service'
import { MessageService } from '../message.service';

//import { RECIPE } from './mock-recipe';
//import { HeapProfiler } from 'inspector';
import { ArrayCreatorPipe } from '../array-creator.pipe';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  
  recipe1: Recipe = {
    id: 1,
    name: "Billy's Butter Chicken",
    description: "Delicious 20min Butter Chicken"
  };

  //Initialize the Recipe array and make it empty
  recipes: Recipe[] = [];

  /*  Initializing Recipes by calling upon the Recipe constructor? Ask Jon if this is the correct word
  recipe2: Recipe = {
    id: 2,
    name: "Sam's Fried Rice",
    description: "Uncle Sam's Seafood Fried Rice, quick and easy"
  };

  recipe3: Recipe = {
    id: 3,
    name: "Samantha's Grilled Animals",
    description: "You name it, we grill it"
  };
  */

  //Creating the array by calling upon RECIPE

  //Creatiing a function for the OnClick event
  selectedRecipe?: Recipe; //this way there is no selected Recipe when application starts
  onSelect(recipe: Recipe): void {  //When onSelect is triggered, selectedRecipe will be assigned with the recipe that gets passed in
    this.selectedRecipe = recipe;
    this.messageService.add(`RecipeComponent: Selected Recipe id ${recipe.id}`);
    console.log(recipe.id)
    //console.log(this.selectedRecipe.name)
  }

  //Defines a private recipeServe and identifies it as RecipeService, for injection
  constructor(private recipeService: RecipeService, private messageService: MessageService) { }

  //On startup, will call upon getRecipes() to get all the mock recipes
  ngOnInit() {
    this.getRecipes();
  }
  
  //Function for getting the Recipes
  //
  getRecipes(): void{
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes)
    //console.log(this.recipes);
  }
}
