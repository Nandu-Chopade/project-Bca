import {Component ,OnInit, OnChanges , OnDestroy } from '@angular/core';
import {  Iproduct } from './product.model' 
import { ProductService } from './product.service';
@Component({
   selector:'product-Comp',
   templateUrl:'./products.component.html',
   styleUrls:['./products.component.css']
})

export class ProductComponent  implements OnInit , OnChanges , OnDestroy {
   title:string="Product list";
   imageWidth = 100;
   serverStatus = 'offline';
   showImage1:boolean= false;
   showImage2:boolean= false;
   gridView:boolean= false;
   listView:boolean=false ;
   userText:string;

    constructor(private productService:ProductService){

      this.serverStatus = Math.random() < 0.5 ? 'Online' : 'offline' ;
    }

    product: Iproduct[]  ;

    ngOnChanges(){
      console.log( '>>>>>>>>>>>>>ngOnChange<<<<<<<<<<<<<')
    }

    ngOnInit(){
      console.log( '>>>>>>>>>>>>>ngOnInit<<<<<<<<<<<<<')
       // this.product = this.productService.getProduct();
       this.productService.getProduct()
           .subscribe((data) => this.product = data);

    }

    ngOnDestroy(){
      console.log( '>>>>>>>>>>>>>ngOnDestroy<<<<<<<<<<<<<')
    }

  
  
               toggleButton1(): void{
                  this.showImage1= !this.showImage1
               }
               toggleButton2(): void{
                  this.showImage2= !this.showImage2
               }
               toggleGrid(): void {
                  this.gridView = ! this.gridView
               }
               toggleList(): void {
                  this.listView = ! this.listView 
               }
               }
            