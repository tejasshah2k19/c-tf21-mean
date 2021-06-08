import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  employee: Employee = { id: 0, email: "", first_name: "", gender: "", last_name: "", password: "" }
  constructor(private employeeService:EmployeeService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }


  saveEmployee() {
    console.log(this.employee);
 
    this.employeeService.saveEmployee(this.employee).subscribe(resp=>{
      console.log(resp);
      this.toastr.success("Employee Added","",{
        timeOut:3000
      })
      this.router.navigateByUrl("/listemployee")
    })
    


  }
}
