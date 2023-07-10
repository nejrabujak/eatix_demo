import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './features/login/login.component';
import {FirstscreenComponent} from './features/firstscreen/firstscreen.component';
import {RegistrationComponent} from './features/registration/registration.component';
import {CheckcategoryComponent} from './features/checkcategory/checkcategory.component';
import {HomepageComponent} from './features/homepage/homepage.component';
import {HeaderComponent} from './common/header/header.component';
import {CategoryComponent} from './features/category/category.component';
import {FooterComponent} from './common/footer/footer.component';
import {ProductComponent} from './features/products/product.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstscreenComponent,
      RegistrationComponent,
      CheckcategoryComponent,
      HomepageComponent,
      HeaderComponent,
      CategoryComponent,
      FooterComponent,
      ProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
