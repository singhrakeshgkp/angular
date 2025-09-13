import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employeeservice } from '../service/employeeservice';

@Component({
  selector: 'app-addemployee',
  imports: [ReactiveFormsModule],
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.scss'
})
export class Addemployee {
  addEmployeeForm: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder,private employeeservice: Employeeservice) {
    this.addEmployeeForm = this.formBuilder.group  ({
      name: [''],
      position: ['']
    });
  }
cancel() {
    this.router.navigate(['/employee']);
  }

  onSubmit() {
   this.employeeservice.postEmployeeData(this.addEmployeeForm.value).subscribe(res=>{
    this.router.navigate(['/employee']);
   });
  }
}
