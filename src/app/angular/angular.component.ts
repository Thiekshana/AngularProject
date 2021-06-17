import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  homeServices:any;
  constructor(private _router:Router) { }

  ngOnInit() {
    this.homeServices = [
      {
        imgName:'1.png',
        title:'Components',
        description:'A component controls a patch of screen called a view. For example, individual components define and control each of the following views from the Tour of Heroes tutorial',
        routerlink:'courses'
      },
      {
        imgName:'2.png',
        title:'Templates, directives, and data binding',
        description:'Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM)',
        routerlink:'features'
      },
      {
        imgName:'3.png',
        title:'Services and dependency injection',
        description:'Service is a broad category encompassing any value, function, or feature that an application needs.',
        routerlink:'projects'
      },
      {
        imgName:'4.png',
        title:'Routing',
        description:'The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your application.',
        routerlink:'business-stratergy'
      },
    ]
  }

  componentRedirect(title){
    event.preventDefault();
    alert(title);
    if(title==="courses"){
    this._router.navigate(['angular/courses','finance']);
    }
    else if(title==="projects"){
      this._router.navigate(['angular/projects','6789']);
    }
    else if(title==="features"){
      this._router.navigate(['angular/projects'], {queryParams:{types:'popular', version:'1.0', released:'15-06-2021'}});
    }
  }

}
