import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses-descriptions',
  templateUrl: './courses-descriptions.component.html',
  styleUrls: ['./courses-descriptions.component.css']
})
export class CoursesDescriptionsComponent implements OnInit {

  @Input('description') titleDescription;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
