import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentComponent} from './department/department.component'
import {EmpComponent} from './emp/emp.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import {DepartmentlistComponent} from './departmentlist/departmentlist.component'
import {DeptDetailComponent} from './dept-detail/dept-detail.component'
import {DepertmentOverviewComponent} from './depertment-overview/depertment-overview.component'
import {LoginComponent} from './login/login.component'
const routes: Routes = [

  {path:'emp',component:EmpComponent},
  {path:'departments',component:DepartmentlistComponent ,
  children:[{path:'details',component:DepertmentOverviewComponent}]},
  {path:'departments/:id',component:DeptDetailComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingarray=
[DepartmentComponent,
EmpComponent,
DepartmentlistComponent,
DeptDetailComponent
]
