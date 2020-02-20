import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductComponent } from './products.component';
import { StarComponent } from 'src/app/shared/star.component';
import { Discount } from './mydiscount.pipe';
import { MyUpperPipe } from './myUpper.Pipe';
import { ProductSearchPipe } from './filter.product.component';
import { ProductService } from './product.service';
import { ProductDeatailComponent } from './product-deatails.component';


@NgModule({
  declarations: [
    ProductComponent,
    StarComponent,
    Discount,
    MyUpperPipe,
    ProductSearchPipe,
    ProductDeatailComponent
  
],

  imports: [
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [ ProductService],
})
export class ProductModule { }
