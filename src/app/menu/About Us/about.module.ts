import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [AboutComponent, ImageComponent],
  imports: [
    CommonModule,AppRoutingModule
  ]
})
export class AboutModule {}
