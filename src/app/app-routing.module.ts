import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { OrderComponent } from './menu/order/order/order.component';
import { ProductComponent } from './menu/product/products.component';
import { OrderComponent } from './menu/order/order.component';
import { HomeComponent } from './menu/home/home.component';
import { ServicessComponent } from './menu/servicess/servicess.component';
import { AboutComponent } from './menu/About Us/about.component';
import { LoginComponent } from './menu/login-app/login.component';
import { SignUpComponent } from './menu/Sign Up/sign-up.component';
import { ProductDeatailComponent } from './menu/product/product-deatails.component';
import { ImageComponent } from './menu/About Us/image/image.component';

const routes: Routes = [
  
  //{path: 'product/:id', canActivate: [RouterGaurds], component: ProductDetailsComponent},
  
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductDeatailComponent},
  {path: 'order', component: OrderComponent},
  {path: 'service', component: ServicessComponent},
  {path: 'about', component: AboutComponent},
  {path: 'image', component: ImageComponent},
  
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { ImageComponent }
