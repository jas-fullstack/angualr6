import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'users', component:UsersComponent, canActivate: [AuthGuard]  },
import { LoginComponent } from './login/login.component';
{ path: 'login', component:UsersComponent, redirectTo: 'login' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
