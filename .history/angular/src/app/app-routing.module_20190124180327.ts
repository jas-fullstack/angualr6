import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: RegisterComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterMod.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
