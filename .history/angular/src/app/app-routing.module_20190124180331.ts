import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';



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
