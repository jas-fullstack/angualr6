import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { WithourloginComponent } from './withourlogin/withourlogin.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'users', component:UsersComponent, canActivate: [AuthGuard]  },
  { path: 'without', component:WithourloginComponent, canActivate: [AuthGuard]  },
  { path: 'login', component:LoginComponent }

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
