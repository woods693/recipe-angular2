import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe';
import { RECIPE } from './recipes/mock-recipe'; 
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

//This means the service will allow anyone to use it, injected at the root level
@Injectable({
  providedIn: 'root'
})

//This service allows other components to grab the mock data
//of(RECIPE) returns an Observable Recipe Array
export class RecipeService {
  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPE); //returns an observable array
    this.messageService.add("RecipeService: fetched recipe");
    return recipes;
  }
  constructor(private messageService: MessageService) { }
}
