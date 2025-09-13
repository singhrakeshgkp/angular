import { Component, OnInit } from '@angular/core';
import { Employeeservice } from '../service/employeeservice';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Iemployee } from '../model/iemployee';


@Component({
  selector: 'app-employee-crud',
  imports: [CommonModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.scss'
})
export class EmployeeCrud implements OnInit {
  employees: Iemployee[] = [];
  constructor(private empService: Employeeservice,private router: Router) {}
  getEmployees() {
    this.empService.getEmployees().subscribe(data => {
      console.log(data);
      this.employees = [...data];
    });  

 }
 ngOnInit(): void {
    this.getEmployees();
 }


 addEmployee() {
    this.router.navigate(['/add-employee']);
 }

 editEmployee(empId: number) {
    this.router.navigate(['/update-employee', empId]);
 }

 deleteEmployee(empId: number) {
    this.empService.deleteEmployee(empId).subscribe(res=>{
      this.getEmployees();
    });
     
 }    
 
 viewEmployee(empId: number) {
    this.router.navigate(['/view-emp', empId]);
  }
}
