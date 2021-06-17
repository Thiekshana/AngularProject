import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-courses-highlight',
  templateUrl: './courses-highlight.component.html',
  styleUrls: ['./courses-highlight.component.css']
})
export class CoursesHighlightComponent implements OnInit {
  @Input('highlight') courseHighlight;
  constructor() { }

  ngOnInit() {
  }

}
