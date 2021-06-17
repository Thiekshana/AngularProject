import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessSratergyComponent } from './business-sratergy/business-sratergy.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturesComponent } from './features/features.component';
import { ProjectsComponent } from './projects/projects.component';
import { AngularComponent } from './angular.component';
import { FinanceComponent } from './finance/finance.component';


const routes: Routes = [
  {
    path:'', component:AngularComponent
  },
  {
    path:'courses', component:CoursesComponent
  },
  {
    path:'courses/finance', component:FinanceComponent
  },
  {
    path:'features', component:FeaturesComponent
  },
  {
    path:'projects', component:ProjectsComponent
  },
  {
    path:'business-stratergy', component:BusinessSratergyComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
