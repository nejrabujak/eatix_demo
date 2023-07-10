import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {Route} from './contraints/route.constants';
import {FirstscreenComponent} from './features/firstscreen/firstscreen.component';
import {RegistrationComponent} from './features/registration/registration.component';
import {CheckcategoryComponent} from './features/checkcategory/checkcategory.component';
import {HomepageComponent} from './features/homepage/homepage.component';
import {CategoryComponent} from './features/category/category.component';
import {ProductComponent} from "./features/products/product.component";



const routes: Routes = [
  {
    path: Route.EMPTY,
    component: FirstscreenComponent
  },
  {
    path: Route.LOGIN,
    component: LoginComponent
  },
  {
    path: Route.REGISTRATION,
    component: RegistrationComponent
  },

  {
    path: 'checkcategory',
    component: CheckcategoryComponent
  },

  {
    path: 'homepage',
    component: HomepageComponent
  },


  {
    path: 'category',
    component: CategoryComponent
  },

  {
    path: 'product',
    component: ProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
