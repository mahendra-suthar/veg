import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './shop/cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component'
import { WishlistComponent } from './shop/wishlist/wishlist.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'blog', component:BlogComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'shop', component:ShopComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'single-product', component:SingleProductComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'admin', component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
