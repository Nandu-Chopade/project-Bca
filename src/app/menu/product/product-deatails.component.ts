import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Iproduct} from './product.model'
import {ProductService} from './product.service'
@Component({
   templateUrl:'./product-deatail.component.html'
})


export class ProductDeatailComponent implements OnInit {
   id;
   deatails:Iproduct[];
    constructor( private route:ActivatedRoute,
                 private router:Router,
                 private productService:ProductService){}

   ngOnInit():void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductDeatails(this.id)
    .subscribe((data) => this.deatails= data);

   }
     onback(){
        this.router.navigate(['/product']);
     }

}

