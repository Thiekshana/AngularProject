import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  parentTitle:string;
  parentDescription:any;
  parentHighlight:any;
  parentCards:any;
  constructor() { 
   
  }

  ngOnInit() {
    this.parentTitle = "Angular Courses";
    this.parentDescription ={
      heading:'My Courses',
      details:'Your courses are listed below in the recommended learning order. Notice that some of the courses at end of the list are archived and replaced by new courses. The archived course will always link in its description page to the new course.'
    };
    this.parentHighlight={
      heading:'Angular for Beginners',
      image:'../../../assets/images/angular/highlight.JPG',
      description:"Establish a solid layer of fundamentals, learn what's under the hood of Angular",
      count:21
    };
    this.parentCards =[
      {
        heading:'Angular Core Deep Dive',
        image:'../../../assets/images/angular/1.JPG',
        description:"A detailed walk-through of the most important part of Angular - the Core and Common modules.",
        count:71
      },
      {
        heading:'RxJs In Practice Course',
        image:'../../../assets/images/angular/2.JPG',
        description:"Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples.",
        count:40

      },
      {
        heading:'Angular Forms In Depth',
        image:'../../../assets/images/angular/3.JPG',
        description:"Build complex enterprise data forms with the powerful Angular Forms module",
        count:52

      },
      {
        heading:'Angular Router In Depth',
        image:'../../../assets/images/angular/4.JPG',
        description:"Build large-scale Single Page Applications with the powerful Angular Router.",
        count:30
      },
      {
        heading:'Reactive Angular Course',
        image:'../../../assets/images/angular/5.JPG',
        description:"How to build Angular applications in Reactive style using plain RxJs - patterns, anti-patterns, lightweight state management.",
        count:38
      },
      {
        heading:'NgRx (with NgRx Data) - The Complete Guide',
        image:'../../../assets/images/angular/6.JPG',
        description:"Learn the modern NgRx Ecosystem, including NgRx Data, Store, Effects, Router Store, NgRx Entity, and DevTools.",
        count:48
      },
      {   heading:'Angular Testing Course',
      image:'../../../assets/images/angular/7.JPG',
      description:"A complete guide to Angular Unit Testing and E2E Testing, including Testing best practices and continuous integration (CI)",
      count:40

      },
      {
        heading:'Angular Core Deep Dive',
        image:'../../../assets/images/angular/8.JPG',
        description:"A detailed walk-through of the most important part of Angular - the Core and Common modules.",
        count:71
      },
      {
        heading:'Angular Material Course',
        image:'../../../assets/images/angular/9.JPG',
        description:"Jumpstart your Application with a complete set of Material Design UI Widgets.",
        count:32
      },
      {
        heading:'Angular Universal In Depth',
        image:'../../../assets/images/angular/10.JPG',
        description:"Use Angular on the server too! Learn Angular Server-Side Rendering.",
        count:29
      }
    ]
      
    

  }

}
