import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CalcComponent } from './calc/calc.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { LogincheckGuard } from './logincheck.guard';
import { LogoutComponent } from './logout/logout.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ReactiveFormsSignupComponent } from './reactive-forms-signup/reactive-forms-signup.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"calc",component:CalcComponent},
  {path:"listusers",component:ListUserComponent},
  {path:"edituser/:email",component:EditUserComponent},
  {path:"addemployee",component:AddEmployeeComponent},
  {path:"listemployee",component:ListEmployeeComponent,canActivate:[LogincheckGuard]},
  {path:"editemployee/:id",component:EditEmployeeComponent},
  {path:"reactive-form-signup",component:ReactiveFormsSignupComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:UserHomeComponent,canActivate:[LogincheckGuard]},
  {path:"logout",component:LogoutComponent},
  {path:"pipe-demo",component:PipeDemoComponent},
  {path:"forgetpassword",component:ForgetPasswordComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
