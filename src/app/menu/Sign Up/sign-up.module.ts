import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
 import { FormsModule} from '@angular/Forms';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class SignUpModule { }
 