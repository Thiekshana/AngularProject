import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import {CoursesComponent} from './courses/courses.component';
import {FeaturesComponent} from './features/features.component';
import {BusinessSratergyComponent} from './business-sratergy/business-sratergy.component';
import { ProjectsComponent } from './projects/projects.component';
import { AngularComponent } from './angular.component';
import { FinanceComponent } from './finance/finance.component';
import { CoursesNamesComponent } from './courses/courses-names/courses-names.component';
import { CoursesDescriptionsComponent } from './courses/courses-descriptions/courses-descriptions.component';
import { CoursesHighlightComponent } from './courses/courses-highlight/courses-highlight.component';
import { CoursesCardsComponent } from './courses/courses-cards/courses-cards.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    CoursesComponent,
    FeaturesComponent,
    BusinessSratergyComponent,
    AngularComponent,
    FinanceComponent,
    CoursesNamesComponent,
    CoursesDescriptionsComponent,
    CoursesHighlightComponent,
    CoursesCardsComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }


