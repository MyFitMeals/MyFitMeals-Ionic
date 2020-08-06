import { MacrosComponent } from './macros/macros.component';
import { FormsModule } from '@angular/forms';
import { MacrosRecipeComponent } from './macros-recipe/macros-recipe.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MacronutrimentsComponent } from './macronutriments/macronutriments.component';
import { RecipesComponent } from './recipes/recipes.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [HeaderComponent, HeaderBackComponent, RecipesComponent, MacronutrimentsComponent, 
        RecipeComponent, MacrosRecipeComponent, MacrosComponent],
    exports: [HeaderComponent, HeaderBackComponent, RecipesComponent, MacronutrimentsComponent, 
        RecipeComponent, MacrosRecipeComponent, MacrosComponent]
})
export class ComponentsModule {}
