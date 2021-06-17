import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-courses-names',
  templateUrl: './courses-names.component.html',
  styleUrls: ['./courses-names.component.css']
})
export class CoursesNamesComponent implements OnInit {

  @Input('title') titleText;
  constructor() { 
  
  }

  ngOnInit() {
    console.log(this.titleText);
  }

}
