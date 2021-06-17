import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-features-header',
  templateUrl: './features-header.component.html',
  styleUrls: ['./features-header.component.css']
})
export class FeaturesHeaderComponent implements OnInit {

  @Input('title') titleText;
  constructor() { }

  ngOnInit() {
  }

}
