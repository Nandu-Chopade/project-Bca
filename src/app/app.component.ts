import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent {

    With=200;
    ShowMenu: boolean = false;
    
    constructor( ){

    }
    ngOnInit(){

    }

  setMenu() : void {
    this.ShowMenu = !this.ShowMenu  ;
 }

}
       

