import { RecipeComponent } from './recipe/recipe.component';
import { MacronutrimentsComponent } from './macronutriments/macronutriments.component';
import { RecipesComponent } from './recipes/recipes.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [HeaderComponent, RecipesComponent, MacronutrimentsComponent, RecipeComponent],
    exports: [HeaderComponent, RecipesComponent, MacronutrimentsComponent, RecipeComponent]
})
export class ComponentsModule {}
