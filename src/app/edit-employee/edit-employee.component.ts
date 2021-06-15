import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private empService: EmployeeService,private router:Router) { }

  empId = 0
  employee: Employee = { email: "", id: -1, first_name: "", gender: "", last_name: "", password: "" }
  ngOnInit(): void {
    this.empId = this.activatedRoute.snapshot.params.id
    this.getEmployeeById()
  }


  getEmployeeById() {
    this.empService.getEmployeeById(this.empId).subscribe(resp => {
      this.employee = resp
    })
  }

  updateEmployee() {
    this.empService.updateEmployee(this.employee).subscribe(resp=>{
      this.router.navigateByUrl("/listemployee")      
    })
  }
}
