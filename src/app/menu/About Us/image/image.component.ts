import { Component, OnInit } from '@angular/core';
import {image} from './image.model';
@Component({
  selector: 'app-image',
  templateUrl:'./image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  img : image[] =[

    {
       'name':'Nandu Chopade',
      'imgUrl':'https://img.techpowerup.org/200109/small-size.jpg'
    }
  ]
}
