import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }
  featuresHeader:any;

  ngOnInit() {
    this.featuresHeader = {
      heading:"The top 5 new features of Angular 8",
      description:"Angular 8 has been out a few months now, and includes a handful of useful new features developers are already putting to good use. Google’s popular client-side web framework continues to evolve, and the latest major release includes features that focus on performance, stability and tooling.Here’s a list of the top 5 new features in the framework, along with a bonus teaser at the end. There should be plenty of new features here to help you build better apps today and give you reason to be excited about the future of Angular."
    }
  }

}
