import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  types:string;
  version:string;
  released:string;
  constructor(private route:ActivatedRoute) {
    //this.types = route.snapshot.queryParamMap.get('types');
    //this.types = route.snapshot.queryParamMap.get('version');
    //this.types = route.snapshot.queryParamMap.get('released');
    //console.log(route.snapshot.queryParamMap.getAll('types'));

    var {types,version,released} = route.snapshot.queryParams
    this.types = types;
    this.version = version;
    this.released = released;
    console.log(types,version,released);

   }

  ngOnInit() {

    console.log(this.types,this.version,this.released);
  }

}
