import {Component , OnChanges, Input } from '@angular/core';


@Component({
    selector: 'app-stars', // copy this and paste inside the product.component.html insi the table
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
 })
 
 export class StarComponent implements OnChanges  {
   
            starWidth:number ; // declar a veriable as starWidth the we bind it to  the inside the div in crop class [style.width.px] ="starWidth" inside the star.component.html
            @Input()  rate;  // then we set the input - child  to  parent 


    ngOnChanges(): void {
       this.starWidth = this.rate*86/6;
    }
 }
