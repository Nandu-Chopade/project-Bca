import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderModule } from './menu/order/order.module';
import { ProductModule } from './menu/product/product.module';
import { LoginModule } from './menu/login-app/login.module';
import { ServiceModule } from './menu/servicess/servicess.module';
import { SignUpModule } from './menu/Sign Up/sign-up.module';
import { AboutModule } from './menu/About Us/about.module';
import { HomeModule } from './menu/home/home.module';



@NgModule({

  declarations: [
     AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    OrderModule,
    ServiceModule,
    AboutModule,
    LoginModule,
    SignUpModule,
    NgbModule

  ],
  providers: [   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
