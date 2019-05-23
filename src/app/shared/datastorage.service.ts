import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeService } from 'app/recipes/recipe.service';

@Injectable()
export class DatastorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) { }

  saveDataToFirebase(){
    console.log("this.recipeService.getRecipes(): " + this.recipeService.getRecipes())
    this.httpClient.put('https://doan1-77e15.firebaseio.com/recipes.json',
                this.recipeService.getRecipes())
                .subscribe(
                  (response) => {}
                )
  }

  getDataFromFirebase(){
    this.httpClient.get('https://doan1-77e15.firebaseio.com/recipes.json')
    .subscribe(
      (recipes : Recipe[]) =>{
        if (recipes) {
          this.recipeService.saveRecipe(recipes)
        }
      }
    )
  }

}
