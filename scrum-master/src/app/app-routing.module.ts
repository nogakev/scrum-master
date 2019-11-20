import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';

import { LoggedinViewComponent } from './main_app/loggedin-view/loggedin-view.component';
import { LoggedoutViewComponent } from './main_app/loggedout-view/loggedout-view.component';


const routes: Routes = [
	{
        path: 'registration', 
        component: RegistrationComponent,
    },
    {
        path: '',
        component: LoggedinViewComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoggedoutViewComponent
    }
	//{path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
