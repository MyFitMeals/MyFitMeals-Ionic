import { RecipeComponent } from './components/recipe/recipe.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inside',
    loadChildren: () => import('./pages/inside/inside.module').then( m => m.InsidePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'recipes/:recipeId',
    component: RecipeComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'politique',
    loadChildren: () => import('./pages/politique/politique.module').then( m => m.PolitiquePageModule)
  },
  {
    path: 'cgv',
    loadChildren: () => import('./pages/cgv/cgv.module').then( m => m.CgvPageModule)
  },
  {
    path: 'mentions',
    loadChildren: () => import('./pages/mentions/mentions.module').then( m => m.MentionsPageModule)
  },
  {
    path: 'sliders',
    loadChildren: () => import('./pages/sliders/sliders.module').then( m => m.SlidersPageModule)
  },
  {
    path: 'macros-calculator',
    loadChildren: () => import('./pages/macros-calculator/macros-calculator.module').then( m => m.MacrosCalculatorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
