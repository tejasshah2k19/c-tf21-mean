import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CalcComponent } from './calc/calc.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"calc",component:CalcComponent},
  {path:"listusers",component:ListUserComponent},
  {path:"edituser/:email",component:EditUserComponent},
  {path:"addemployee",component:AddEmployeeComponent},
  {path:"listemployee",component:ListEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
