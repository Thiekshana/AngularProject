import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-courses-cards',
  templateUrl: './courses-cards.component.html',
  styleUrls: ['./courses-cards.component.css']
})
export class CoursesCardsComponent implements OnInit {
  @Input('cards') courseCards;
  constructor() { }

  ngOnInit() {
  }

}
