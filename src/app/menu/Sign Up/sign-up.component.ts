import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Iuser} from './sign-up.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  hasCodelangError = false;


  constructor() { }

  ngOnInit() { 
  } 
               
                language = [ 'Node','Aws','Angular','React'];
                myUser = new Iuser ( 'Nandu','Chopade','nanduchopade@gmail.com','N1234@',true,'male','Angular');
                submitForm(setform:NgForm):void{
                console.log(setform.value)
                
              
  }
             firstToUpper(value): void{
               if(value.length > 0){
                   this.myUser.firstname = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
               } else {
                  this.myUser.firstname = value;
               }
             }

                    errorDecider(event): void {
                      if ( this.myUser.codelang === 'default') {  
                        this.hasCodelangError = true;
                      }
                        else {
                        this.hasCodelangError = false;
                      }
                    
                    }
}
