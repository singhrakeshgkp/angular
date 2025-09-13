import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeservice } from '../service/employeeservice';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateemployee',
  imports: [ReactiveFormsModule],
  templateUrl: './updateemployee.html',
  styleUrl: './updateemployee.scss'
})
export class Updateemployee implements OnInit{
  updateEmployeeForm: FormGroup;
  constructor(private activeRoute: ActivatedRoute,private empService: Employeeservice,private formBuilder: FormBuilder,private router: Router){
    this.updateEmployeeForm = this.formBuilder.group  ({
      id: [''],
      name: [''],
      position: ['']
    });
  }
  employeeId:any;
  empData: any;
  ngOnInit(): void {
    this.employeeId={
      id:this.activeRoute.snapshot.params['id']
    }
    console.log('employee id is '+this.employeeId.id);
    this.empService.getEmployeebyid(this.employeeId.id).subscribe(res=>{
     this.empData = res;
     this.updateEmployeeForm.setValue({id: this.empData.id,name: this.empData.name,position: this.empData.position});
    });
  }
  cancel() {
    this.router.navigate(['/employee']);
  }

  onSubmit() {
   this.empService.updateEmployee(this.employeeId.id,this.updateEmployeeForm.value).subscribe(res=>{
    this.router.navigate(['/employee']);
   });
   
  }
}
