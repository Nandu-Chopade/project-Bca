import { Component, OnInit } from '@angular/core';
import{image} from './about.model';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private rauter:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

  }

  getImage(ok) {
    this.rauter.navigate(['/image']);
  }

  img : image[] =[

    {
       'name':'Nandu Chopade',
      'imgUrl':'https://img.techpowerup.org/200109/small-size.jpg'
    }
  ]
   
}
