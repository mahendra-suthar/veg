import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './shop/cart/cart.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { WishlistComponent } from './shop/wishlist/wishlist.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, FormControl,ReactiveFormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module'
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    ContactComponent,
    CartComponent,
    TestimonyComponent,
    WishlistComponent,
    SingleProductComponent,
    CheckoutComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
