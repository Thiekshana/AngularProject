import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { Login } from './_guards/login.service';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';


const routes: Routes = [
  {
    path:'', component:HomeComponent //if the path is empty load home
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'contact', component:ContactComponent, canActivate:[Login]
  },
  {
    path:'angular', loadChildren: () => import('./angular/angular.module').then(m=> m.AngularModule)
  },
  {
    path:'users', component:UsersComponent
  },
  {
    path:'login', component:LoginComponent, canDeactivate:[UnsavedChangesGuard]
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
