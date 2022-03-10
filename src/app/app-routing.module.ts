import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontOfficeComponent } from './dashboard/front-office/front-office.component';

const routes: Routes = [
  
  {path:'dashboard',component: DashboardComponent},
  {path:'front-office',component: FrontOfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
