import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeservice } from '../service/employeeservice';
import { Iemployee } from '../model/iemployee';

@Component({
  selector: 'app-view-employee',
  imports: [],
  templateUrl: './view-employee.html',
  styleUrl: './view-employee.scss'
})
export class ViewEmployee {
  constructor(private activeRoute: ActivatedRoute,private empService: Employeeservice,private router: Router){
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
    });
  }
  Close() {
    this.router.navigate(['/employee']);
  }
}
