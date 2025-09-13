import { provideRouter, Routes } from '@angular/router';
import { EmployeeCrud } from './employee-crud/employee-crud';
import { Addemployee } from './addemployee/addemployee';
import { Updateemployee } from './updateemployee/updateemployee';
import { ViewEmployee } from './view-employee/view-employee';
import { DeleteEmp } from './delete-emp/delete-emp';

export const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    {path: 'employee',component: EmployeeCrud},
    {path: 'add-employee',component: Addemployee},
    {path:'update-employee/:id',component:Updateemployee},
    {path:'view-emp/:id',component:ViewEmployee} ,
    {path:'delete-employee/:id',component:DeleteEmp} 
];