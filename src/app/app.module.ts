import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingarray} from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmpComponent } from './emp/emp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';
import { DepertmentOverviewComponent } from './depertment-overview/depertment-overview.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    routingarray,
    PagenotfoundComponent,
    DepartmentlistComponent,
    DeptDetailComponent,
    DepertmentOverviewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
